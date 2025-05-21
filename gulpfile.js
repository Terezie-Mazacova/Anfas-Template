// Gulp pluginy
const gulp = require("gulp");
const autoprefixer = require("autoprefixer");
const browserSync = require("browser-sync").create();
const gutil = require( 'gulp-util' );
const runSequence = require("run-sequence");
const ftp = require( 'vinyl-ftp' );
const gulpftp = require("./config.js");
const plugins = require('gulp-load-plugins')();

// načtení názvu projektu z package.json
var fs = require('fs');
var projectName = JSON.parse(fs.readFileSync('./package.json')).name;


// Výchozí nastavení složek
const paths = {
  jellypot: "./JellyPotApp",
  src: "./src",
  dest: "/assets",
  sass: "/sass/**/*.scss",
  css: "/css",
  jsFolder: "/js",
  js: "/**/*.js",
  svgFolder: "/img/svg",
  svg: "/**/*.svg",
  mapsOutput: "/maps"
};

const
  cssInput = paths.src + paths.sass,
  cssOutput = paths.jellypot + paths.dest + paths.css,
  jsInput = paths.src + paths.jsFolder + paths.js,
  jsOutput = paths.jellypot + paths.dest + paths.jsFolder,
  svgInput = paths.src + paths.svgFolder + paths.svg,
  svgOutput = paths.jellypot + paths.dest + paths.svgFolder;

// Soubory, které při změně vyvolají obnovení stránky
const watchedFiles = [
  paths.jellypot + "/**/*.aspx",
  paths.jellypot + "/**/*.ascx",
  paths.jellypot + "/**/*.master",
  cssOutput + "/**/*.css",
  jsOutput + paths.js,
  svgOutput + paths.svg
];

// PostCSS pluginy
const processors = [
  autoprefixer
];

/*--------------------------- Tasky ---------------------------*/

// sass
gulp.task('sass', function() {
  return gulp.src(cssInput)
    //.pipe(plugins.sourcemaps.init()) // bez sourcemaps je rychlejší
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(plugins.postcss(processors))
    //.pipe(plugins.sourcemaps.write(paths.mapsOutput))
    .pipe(gulp.dest(cssOutput));
});

// sass:min
gulp.task('sass:min', function() {
  return gulp.src(cssInput)
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(plugins.postcss(processors))
    .pipe(plugins.cleanCss({ restructuring: false }))
    .pipe(plugins.sourcemaps.write(paths.mapsOutput))
    .pipe(gulp.dest(cssOutput));
});

// js
gulp.task('js', function() {
  gulp.src([paths.src + "/js/concat/*.js"])
    .pipe(plugins.concat('main.js'))
    .pipe(gulp.dest(jsOutput));

  gulp.src([paths.src + "/js/*.js"])
    .pipe(gulp.dest(jsOutput));
});

var onError = function (err) {  
  console.log(err);
};

// js:min
gulp.task('js:min', function() {
  gulp.src([paths.src + "/js/concat/*.js"])
    .pipe(plugins.concat('main.min.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest(jsOutput));

  gulp.src([paths.src + "/js/*.js"])
    .pipe(plugins.uglify())
    .pipe(plugins.rename({suffix: ".min"}))
    .pipe(gulp.dest(jsOutput));
});

// svg:min
gulp.task('svg:min', function() {
  return gulp.src(svgInput)
    .pipe(plugins.svgmin())
    .pipe(gulp.dest(svgOutput));
});
// Watch task - sleduje změny a spouští odpovídající úlohy (Gulp 3)
gulp.task("watch", function() {
  var targetHost = process.platform === "darwin" ? "10.211.55.3" : "localhost";

  browserSync.init({
    proxy: targetHost + "/" + projectName + "/",
    files: watchedFiles,
    open: false // zabrání automatickému otevření okna na localhost
  });

  if (process.platform === "darwin") {
    setTimeout(function() {
      var exec = require("child_process").exec;
      exec("open http://" + targetHost + ":3000/" + projectName + "/");
      exec("open http://" + targetHost + ":3000/" + projectName + "/admin");
    }, 500);
  }

  gulp.watch(cssInput, ["sass"]);
  gulp.watch(jsInput, ["js"]);
});

// Deploy to FTP
gulp.task( 'ftp', function () {
  var conn = ftp.create( {
    host:     gulpftp.config.host,
    user:     gulpftp.config.user,
    password: gulpftp.config.pass,
    parallel: 10,
    log:      gutil.log
  });

  var globs = [
    "JellyPotApp/**",
    "!JellyPotApp/admin/**",
    "!JellyPotApp/bin/**",
    "!JellyPotApp/upItems/**",
    "!JellyPotApp/Runtime.config",
    "!JellyPotApp/Runtime_local.config",
    "!JellyPotApp/Runtime_production.config",
    "!JellyPotApp/Web.config",
    "!JellyPotApp/Web_local.config",
    "!JellyPotApp/Web_production.config"
  ];

  // using base = '.' will transfer everything to /public_html correctly 
  // turn off buffering in gulp.src for best performance 
  return gulp.src(globs, {base: '.', buffer: false})
    .pipe(conn.newerOrDifferentSize(gulpftp.config.dir)) // only upload newer files or different size
    .pipe(conn.dest(gulpftp.config.dir));
});

/*--------------------------- Zabalené tasky ---------------------------*/

//default
gulp.task('default', ['watch'])

// deploy
gulp.task('deploy', function(callback) {
  runSequence(["sass:min", "js", "js:min"], "ftp", callback); // Provést v sekvenci (další task se provede až po ukončení předchozího)
});