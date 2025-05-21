var animationDuration = 150;

$(function() {

    var bodyScrollTop = 0;
    
    // cache jQuery objects
    var $body = $("body");
    var $header = $(".header");
    var $bottom = $(".content__contact");
    var $headerCollapse = $(".header__collapse");
    var $hamburger = $(".hamburger");
    var $headerLogo = $(".header__logo");
    var $headerIcon = $(".header__icon");
    var $jsHashTag = $('.jsHashTag');
  
    function hideMenu(){
      $("body").removeClass("scrolling--disabled");
      $headerCollapse.removeClass("header__collapse--in");
      $hamburger.removeClass("is-active");
      $headerLogo.removeClass("header__logo--menu-expanded");
      $headerIcon.removeClass("header__icon--dark");
   }
  
    // Při kliknutí na tlačítko hamburgeru spustit jeho animaci a zobrazit schovaný obsah
    $("#toggleMenu").click(function() {
      if ($headerCollapse.hasClass("header__collapse--in")) {
        hideMenu();
        $(window).scrollTop(bodyScrollTop); // najet zpátky tam, kde byl uživatel před otevřením menu
      } else {
        bodyScrollTop = $(document).scrollTop(); // uložit scroll pozici, protože se aktivuje position: fixed, která odscrolluje nahoru
        $headerCollapse.addClass("header__collapse--in");
        $hamburger.addClass("is-active");
        setTimeout(function(){
          $body.addClass("scrolling--disabled");
        }, animationDuration);
        $headerLogo.addClass("header__logo--menu-expanded");
        $headerIcon.addClass("header__icon--dark");
      }
    })
  
    $(".jsCurrentPageNavLink").click(function() {
      hideMenu();
    })

    //------------------ skrývání menu při scrolování dolů (v kombinaci s css) pouze na mobilu -----------------------------
    /*
    if(isMobile()) {
        var lastScrollTop = 0;
        $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > lastScrollTop && st > 200){
            $header.addClass('header--hide');
        } else {
            $header.removeClass('header--hide');
        }
        lastScrollTop = st;
        });
    }
    */
});

// Decrese height of menu when scrolled
var userHasScrolled = false;
window.onscroll = function (e) {
    userHasScrolled = true;
}

window.onload = function() {
   if (document.getElementsByClassName("header--scroll")[0] !== undefined) {
      handleHeaderChange();
   }

   //remove hover effects from nav links due to bug on iPad
   if(isMobile()) {
      var els = document.getElementsByClassName('nav__link--hover-inc')
      while (els[0]) {
         els[0].classList.remove('nav__link--hover-inc')
      }
   }
}

function handleHeaderChange() {
  setInterval(function() {
    var header = document.getElementsByClassName("header--scroll")[0].classList;
    if (userHasScrolled && (window.scrollY > 200 || window.pageYOffset > 200)) {
      header.add("header--scrolled")
    } else {
      header.remove("header--scrolled")
    }
  }, 200)
}