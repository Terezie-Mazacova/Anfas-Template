BetJs.Browsers.DetectBlob()&&BetJs.Browsers.DetectXhr2()||(window.location.href="unsupported-browser.aspx"),
$(document).ready(function(){BetJs.Jelly.Admin.Ini()});var BetJs;BetJs||(BetJs={}),
BetJs.Jelly||(BetJs.Jelly={}),BetJs.Jelly.Admin=function(){var a={};a.Ini=function(){},
a.BtAction=function(a,b){if(2!==arguments.length||b){var c=document.forms[0];c.hButtonAction&&(c.hButtonAction.value=a,
c.submit())}},a.Refresh=function(){document.forms[0].submit()},a.OpenVariable=function(a,b){
var c="main.aspx?v="+a+"&l="+lang;b&&(c+="&b="+b),document.location.href=c},a.AddVariable=function(a,b){
var c="main.aspx?a="+a+"&l="+lang;b&&(c+="&b="+b),document.location.href=c},a.OpenControl=function(a){
document.location.href="main.aspx?c="+a+"&l="+lang},a.ConfirmDeleteVar=function(){
return confirm(msgConfirmVarDelete)},a.OpenSpammer=function(a){document.location.href="main.aspx?s="+a+"&l="+lang;
},a.OpenSpammerAkce=function(a,b,c){var d="main.aspx?s="+spamName+"&l="+lang+"&p1="+a+"&p2="+b;
c&&(d+="&p3="+c),document.location.href=d},a.QuestionReset=function(){confirm(msgQuestionReset)&&(document.forms[0].hQAAkce.value=9,
document.forms[0].submit())},a.SimpleImgEdit=function(b,c,d){var e="imgSimpleLoad.aspx?t="+b+"&f="+c+"&i="+d;
a.DialogOpen(e,{width:902,height:452,closeText:"×"})},a.ImgEdit=function(b,c,d,e){
var f="imgLoad.aspx?t="+b+"&f="+c+"&i="+d+"&x="+(e||0);a.DialogOpen(f,{width:902,
height:452,closeText:"×"})},a.ImgColBulkAdd=function(b,c,d){var e="imgColLoad.aspx?t="+b+"&f="+c;
d&&(e=e+"&d="+d),a.DialogOpen(e,{width:902,height:452,closeText:"×"})},a.SetImg=function(a,b,c){
var d=document.forms[0];if(c)d[a+"-Action"].value=2,d[a+"-Params"].value=b+"-"+c;else{
var e=d[a];e&&e.value&&(e.value=b)}d.submit()},a.SetImgBulk=function(a,b){var c=document.forms[0];
c[a+"-Action"].value=1,c[a+"-Params"].value=b,c.submit()},a.ImgDelete=function(b){
confirm(msgImgDeleteConfirm)&&a.SetImg(b,0)},a.ImgColBulkDelete=function(a,b){var c=[];
if($(".imgColItem.ui-selecting").each(function(){e=this.id.split("-"),e[0]===b&&(c[c.length]=e[1]);
}),0===c.length)return void alert(msgImgNoSelected);if(confirm(msgImgDeleteBulkConfirm)){
var d=document.forms[0],e=d[b+"-Action"],f=d[b+"-Params"];e.value=9,f.value=c.join(","),
d.submit()}},a.FileEdit=function(b,c,d,e){var f="fileLoad.aspx?t="+b+"&f="+c+"&i="+d+"&x="+(e||0);
a.DialogOpen(f,{width:902,height:452,closeText:"×"})},a.SetFile=function(a,b,c){var d=document.forms[0];
if(d[a+"-Action"])d[a+"-Action"].value=2,d[a+"-Params"].value=b+"-"+c;else{var e=d[a];
e&&e.value&&(e.value=b)}d.submit()},a.FileDelete=function(b){confirm(msgFileDeleteConfirm)&&a.SetFile(b,0);
},a.DownloadFile=function(a){window.location.href="fileGet.aspx?i="+a};var b=function(a){
for(var b=0;b<a.length;++b)if(a[b].selected)return a[b].value};a.OnLangChange=function(){
var a="",c=document.forms[0].selJazyky;if(c){a=b(c);var d=window.location.href;if(d.indexOf("l="+lang)>0)d=d.replace("l="+lang,"l="+a);else{
var e="&";""===window.location.search&&(e="?"),d+=e+"l="+a}window.location.href=d;
}},a.OnCollectionFilter=function(){var a=document.forms[0].selCategory;if(a){var c=b(a),d=document.location.search,e="r="+c,f=d.replace(/r=\d*/,e);
d===f&&(f=""===d?"?"+e:d+"&"+e),document.location.href=document.location.pathname+f;
}},a.DialogOpen=function(a,b){var c="d"+Math.floor(1e5*Math.random()),d='<div class="jDialog"><iframe src="'+a+'" name="'+c+'" /></div>';
$(d).dialog(b)},a.DialogClose=function(a){var b='iframe[name="'+a+'"]',c=$(b,parent.document).closest(".jDialog");
c.dialog("isOpen")&&c.dialog("close")},a.OpenAdmin=function(a){var b="&";a.indexOf("?")===-1&&(b="?"),
window.location.href=a+b+"l="+lang},a.WOpenWindow=function(a,b){void 0===b&&(b="");
var c=window.open(a,b,"");c.focus()};var c,d=function(a){var b;if(a.id){var c=a.id.split("-");
b=c[0]}else b="";return b};return a.DragStart=function(a){c=d(a)},a.IsDrag=function(){
return!!c},a.IsDragOver=function(a){return d(a)===c},a.DragEnd=function(){c=void 0;
},a.GetDragName=function(a){return d(a)},a}(),$(document).ready(function(){BetJs.Jelly.Resize.Ini();
});var BetJs;BetJs||(BetJs={}),BetJs.Jelly||(BetJs.Jelly={}),BetJs.Jelly.Resize=function(){
var a={};a.Ini=function(){n(),p(),r(),l(!0),$(window).on("resize",function(){l(!1);
})};var b,c,d=150,e=400,f=220,g=920,h=10,i=0,j=8,k=108,l=function(a){var d,f;a?(d=$("#sizeBarA").position().left,
f=$("#sizeBarB").position().left,m(d,f)):(d=b,f=c);var g=$(window).width()-k-d-j;g<e||(!a||f>g)&&(f=Math.min(f,g),
$("#nav").css("width",d+0+"px"),$("#sizeBarA").css("left",d+0+"px"),$("#content").css("left",d+j+"px").css("width",f+2+"px"),
$("#sizeBarB").css("left",f+0+"px"),r())},m=function(a,d){b=a,c=d},n=function(){$("#sizeBarA").draggable({
axis:"x",start:function(){$("#sizeBarA").css("opacity",1),$("table.mceLayout iframe").css("visibility","hidden");
var a=$("#sizeBarA").position().left,b=$("#sizeBarB").position().left;i=a+b},drag:function(a,b){
o(a,b)},stop:function(a,b){o(a,b),$("#sizeBarA").css("opacity",""),$("table.mceLayout iframe").css("visibility","visible");
var c=$("#sizeBarA").position().left,d=$("#sizeBarB").position().left;m(c,d),$.ajax({
url:"main.ajax.aspx",data:{akce:"barAposition",v:b.position.left}})}})},o=function(a,b){
Math.abs(b.position.left-f)<h&&(b.position.left=f),b.position.left<d&&(b.position.left=d),
b.position.left>i-e&&(b.position.left=i-e);var c=$("#sizeBarA").position().left;$("#nav").css("width",c+0+"px"),
$("#content").css("left",c+j+"px").css("width",i-c+2+"px"),$("#sizeBarB").css("left",i-c+"px"),
r()},p=function(){$("#sizeBarB").draggable({axis:"x",start:function(){$("#sizeBarB").css("opacity",1),
$(".mce-tinymce iframe").css("visibility","hidden");var a=$("#sizeBarA").position().left,b=$("#sizeBarB").position().left;
i=a+b},drag:function(a,b){q(a,b)},stop:function(a,b){q(a,b),$("#sizeBarB").css("opacity",""),
$(".mce-tinymce iframe").css("visibility","visible");var c=$("#sizeBarA").position().left,d=$("#sizeBarB").position().left;
m(c,d),$.ajax({url:"main.ajax.aspx",data:{akce:"barBposition",v:c+b.position.left
}})}})},q=function(a,b){var c=$("#sizeBarA").position().left,d=g-c,f=$(window).width()-k-c-j;
Math.abs(b.position.left-d)<h&&(b.position.left=d),b.position.left<e&&(b.position.left=e),
b.position.left>f&&(b.position.left=f);var i=$("#sizeBarB").position().left;$("#content").css("width",i+2+"px"),
r()},r=function(){$(".refCollection").each(function(){var a=$(this),b=a.find(".controls").outerWidth(!0),c=Math.floor((a.outerWidth()-b)/2)-1;
a.find(".listA, .listB").outerWidth(c)})};return a}(),$(document).ready(function(){
BetJs.Jelly.Texts.Ini(adminLang)});var BetJs;BetJs||(BetJs={}),BetJs.Jelly||(BetJs.Jelly={}),
BetJs.Jelly.Texts=function(){var a={};a.Ini=function(d){var e="cs"===d?b:c;for(var f in e)a[f]=e[f];
};var b={treeNoSelection:"Žádný řádek není označen.",treeNoLeft:"Řádek nelze posunout doleva.",
treeNoRight:"Řádek nelze posunout doprava.",btRowEdit:"edit",imgBtEdit:"edit",imgColBtEdit:"edit",
fileBtRowEdit:"edit"},c={treeNoSelection:"No row is selected.",treeNoLeft:"The row can not be moved left.",
treeNoRight:"The row can not be moved right.",btRowEdit:"edit",imgBtEdit:"edit",imgColBtEdit:"edit",
fileBtRowEdit:"edit"};return a}();var bindCtrlSave;$(document).ready(function(){BetJs.Jelly.UI.Ini();
});var BetJs;BetJs||(BetJs={}),BetJs.Jelly||(BetJs.Jelly={}),BetJs.Jelly.UI=function(){
var a={};a.Ini=function(){b(),h(),g(),d(bindCtrlSave),f(),e()};var b=function(){$("#nav li.expanded ul").css({
display:"block"}),$("#nav li h2").click(c),$("#navLangs").length>0&&$("#nav").addClass("has-languages");
},c=function(){$(this).parent().find("ul").first().animate({height:"toggle"},200),
$(this).parent().toggleClass("expanded");for(var a,b,c,d=[],e=$("#navVars li"),f=0;f<e.length;++f)b=e[f],
$(b).hasClass("expanded")&&(c=BetJs.Tables.GetRowID(b),d.push(c.number),a=c.name);
!a&&e.length>0&&(c=BetJs.Tables.GetRowID(e[0]),a=c.name),a&&$.ajax({url:"main.ajax.aspx",
data:{akce:"expanded",n:a,v:d.join(BetJs.Tables.btabSep)}})},d=function(a){$(document).on("keydown",function(a){
var b=!1;return(a.ctrlKey||a.metaKey)&&83===a.keyCode&&(a.preventDefault(),b=!0),
!b}),a&&$(document).on("keyup",function(a){var b=!1;return(a.ctrlKey||a.metaKey)&&83===a.keyCode&&(a.preventDefault(),
b=!0,BetJs.Jelly.Admin.BtAction(22)),!b})},e=function(){if(document.forms[0]&&document.forms[0].hsScrlPosH){
var a=Number(document.forms[0].hsScrlPosH.value),b=$(window);0===a||isNaN(a)||b.scrollTop(a),
$(document).on("scroll",function(){document.forms[0].hsScrlPosH.value=$(window).scrollTop();
})}},f=function(){if($(".error:not(.message)").length>0){var a=$('input[name="hsScrlPosH"]').val()||0;
$('input[name="hsScrlPosH"]').val(""),$("html, body").scrollTop(a),$("html, body").animate({
scrollTop:$(".error:not(.message)").eq(0).offset().top-$("header").outerHeight()},500);
}},g=function(){window.setTimeout(function(){$("#messageBox").removeClass("in")},2500);
},h=function(){$("textarea.jTxAreaResizable").each(function(){this.lastHeight=$(this).outerHeight();
}),$("textarea.jTxAreaResizable").mouseup(i)},i=function(){var a=$(this);if(this.lastHeight!==a.outerHeight()){
var b=a.outerHeight(),c=a.attr("name");c=varTypeName+"."+c,$.ajax({url:"main.ajax.aspx",
data:{akce:"taHeight",t:c,v:b}})}};return a}(),$(document).ready(function(){BetJs.Tables.selectedClass="selected",
BetJs.Jelly.TreeCol.Ini()});var BetJs;BetJs||(BetJs={}),BetJs.Jelly||(BetJs.Jelly={}),
BetJs.Jelly.TreeCol=function(){var a,b={},c=100,d=function(a){var b=$(a).closest("tr"),c=b.attr("data-v");
BetJs.Jelly.Admin.OpenVariable(c)},e=function(a){for(var b=BetJs.Tables.SelectionArray(a),c=new Array(0),d=0;d<b.length;++d)c[d]=Number(b[d]);
return c.sort(f),c},f=function(a,b){return a-b};b.Ini=function(){g(),i(),h()};var g=function(){
$(".var.jVarCol td:last-child").prepend('<span class="rowButton btMini jBtVarEdit">'+BetJs.Jelly.Texts.btRowEdit+"</span>"),
$(".jTreeCol .t").parent().each(function(){$(".t",$(this)).height($(this).outerHeight());
})},h=function(){var a=document.forms[0];$(".jTreeCol tr:first-child").each(function(){
var b=BetJs.Jelly.Admin.GetDragName(this);BetJs.Tables.SetSelected(b,a[b+"-selected"].value);
})},i=function(){$(".jTreeCol tr:not(.jEmptyItem)").draggable({addClasses:!1,appendTo:$(".jTreeCol").first(),
helper:j,cursorAt:{left:-5},delay:c,revert:l,revertDuration:300,start:function(){
BetJs.Jelly.Admin.DragStart(this),a=this},stop:m}),$(".jTreeCol tr:not(.jEmptyItem)").on("click.BetJs.Jelly.TreeCol",function(a){
return BetJs.Tables.Select(this,a),k(this),!1}),$(".jVarCol tr:not(.jEmptyItem)").on("mouseover.BetJs.Jelly.TreeCol",function(){
BetJs.Jelly.Admin.IsDragOver(this)?(a=this,$(this).addClass("dragOver")):BetJs.Jelly.Admin.IsDrag()||$(this).addClass("hover");
}).on("mouseout.BetJs.Jelly.TreeCol",function(){a&&a===this&&(a=void 0),$(this).removeClass("dragOver").removeClass("hover");
}).on("dblclick.BetJs.Jelly.TreeCol",function(){d(this)}),$(".jTreeCol tr.jEmptyItem").on("mouseover.BetJs.Jelly.TreeCol",function(){
BetJs.Jelly.Admin.IsDragOver(this)&&(a=this,$(this).addClass("dragOver"))}).on("mouseout.BetJs.Jelly.TreeCol",function(){
a&&a===this&&(a=void 0),$(this).removeClass("dragOver")}),$(".jVarCol .rowButton.jBtVarEdit").on("click.BetJs.Jelly.TreeCol",function(){
d(this)})},j=function(a){var b=BetJs.Jelly.Admin.GetDragName(this);BetJs.Tables.SelectWithStartDrag(this,a),
k(this);for(var c=$(this).closest("table").width(),d=$('<table class="dragHelper" style="width: '+c+'px" />'),f=e(b),g=0;g<f.length;++g){
var h=$("#"+b+"-"+f[g]),i=h.clone();i.width(h.width()),d.append(i)}return d[0]},k=function(a){
var b=BetJs.Tables.GetRowID(a);document.forms[0][b.name+"-selected"].value=BetJs.Tables.GetSelected(b.name);
},l=function(){var b=!1;return a||(b=!0,BetJs.Jelly.Admin.DragEnd(),a=void 0),b},m=function(){
var b=BetJs.Tables.GetRowID(a);if(a=void 0,BetJs.Jelly.Admin.DragEnd(),$(".jTreeCol tr").removeClass("dragOver"),
b&&b.name){var c=e(b.name),d=BetJs.Tables.NameArray(b.name),f=BetJs.Tables.LevelArray(b.name),g=!0,h=b.number;
if(h>d.length?h=d.length-1:h-=1,g){var i=f[c[0]],j=-1;if(i=h===-1?0:h===d.length-1?Math.max(f[h],Math.min(f[h]+1,i)):Math.max(f[h+1],Math.min(f[h]+1,i)),
i>0)for(j=h;f[j]>=i;)j=f.GetParent(j);n(b.name,j,h,c)}}},n=function(a,b,c,d){for(var e=BetJs.Tables.NameArray(a),f=new Array(d.length),g=0;g<d.length;++g)f[g]=e[d[g]];
document.forms[0][a+"-akce"].value=1,document.forms[0][a+"-selected"].value=f.join(BetJs.Tables.btabSep);
var h=-1;b>-1&&(h=e[b]),document.forms[0][a+"-parent"].value=h,document.forms[0][a+"-target"].value=c,
document.forms[0].submit()};return b.MoveLeft=function(a){var b=e(a);if(0===b.length)return void alert(BetJs.Jelly.Texts.treeNoSelection);
for(var c=BetJs.Tables.LevelArray(a),d=c[b[0]],f=!0,g=b[0]+1;g<c.length&&!(c[g]<d);++g)if(c[g]===d&&BetJs.Utils.ArrIndexOf(b,g)===-1){
f=!1;break}if(0===d||!f)return void alert(BetJs.Jelly.Texts.treeNoLeft);var h=c.GetParent(b[0]),i=c.GetParent(h);
n(a,i,b[0],b)},b.MoveRight=function(a){var b=e(a);if(0===b.length)return void alert(BetJs.Jelly.Texts.treeNoSelection);
var c=BetJs.Tables.LevelArray(a);if(0===b[0]||c[b[0]-1]<c[b[0]])return void alert(BetJs.Jelly.Texts.treeNoRight);
for(var d=b[0]-1;c[d]>c[b[0]];)--d;n(a,d,b[0]-1,b)},b}(),$(document).ready(function(){
BetJs.Tables.selectedClass="selected",BetJs.Jelly.FileCol.Ini()});var BetJs;BetJs||(BetJs={}),
BetJs.Jelly||(BetJs.Jelly={}),BetJs.Jelly.FileCol=function(){var a,b={},c=100,d=function(a,b){
b||(b="tr");var c=$(a).closest(b),d=Number(c.attr("data-fileId")),e=Number(c.attr("data-idx")),f=c.attr("data-typePath");
f||(f="");var g=c.attr("data-fieldName");BetJs.Jelly.Admin.FileEdit(f,g,d,e)},e=function(a){
for(var b=BetJs.Tables.SelectionArray(a),c=new Array(0),d=0;d<b.length;++d)c[d]=Number(b[d]);
return c.sort(f),c},f=function(a,b){return a-b};b.Ini=function(){g(),i(),h()};var g=function(){
$(".jFileCol td:last-child").prepend('<span class="rowButton btMini jBtFileEdit">'+BetJs.Jelly.Texts.fileBtRowEdit+"</span>");
},h=function(){var a=document.forms[0];$(".jFileCol tr:first-child").each(function(){
var b=BetJs.Jelly.Admin.GetDragName(this);BetJs.Tables.SetSelected(b,a[b+"-selected"].value);
})},i=function(){$(".jFileCol tr:not(.jEmptyItem)").draggable({addClasses:!1,appendTo:$(".jFileCol").first(),
helper:j,cursorAt:{left:-5},delay:c,revert:l,revertDuration:300,start:function(){
BetJs.Jelly.Admin.DragStart(this),a=this},stop:m}),$(".jFileCol tr:not(.jEmptyItem)").on("click.BetJs.Jelly.FileCol",function(a){
return BetJs.Tables.Select(this,a),k(this),!1}),$(".jFileCol tr:not(.jEmptyItem)").on("mouseover.BetJs.Jelly.FileCol",function(){
BetJs.Jelly.Admin.IsDragOver(this)?(a=this,$(this).addClass("dragOver")):BetJs.Jelly.Admin.IsDrag()||$(this).addClass("hover");
}).on("mouseout.BetJs.Jelly.FileCol",function(){a&&a===this&&(a=void 0),$(this).removeClass("dragOver").removeClass("hover");
}).on("dblclick.BetJs.Jelly.FileCol",function(){d(this)}),$(".jFileCol tr.jEmptyItem").on("mouseover.BetJs.Jelly.FileCol",function(){
BetJs.Jelly.Admin.IsDragOver(this)&&(a=this,$(this).addClass("dragOver"))}).on("mouseout.BetJs.Jelly.FileCol",function(){
a&&a===this&&(a=void 0),$(this).removeClass("dragOver")}),$(".jFileCol .rowButton.jBtFileEdit").on("click.BetJs.Jelly.FileCol",function(){
d(this)}),$(".jFileCol .jFileAdd").on("click.BetJs.Jelly.FileCol",function(){d(this,"span");
})},j=function(a){var b=BetJs.Jelly.Admin.GetDragName(this);BetJs.Tables.SelectWithStartDrag(this,a),
k(this);for(var c=$(this).closest("table").width(),d=$('<table class="dragHelper" style="width: '+c+'px" />'),f=e(b),g=0;g<f.length;++g){
var h=$("#"+b+"-"+f[g]),i=h.clone();i.width(h.width()),d.append(i)}return d[0]},k=function(a){
var b=BetJs.Tables.GetRowID(a);document.forms[0][b.name+"-selected"].value=BetJs.Tables.GetSelected(b.name);
},l=function(){var b=!1;return a||(b=!0,BetJs.Jelly.Admin.DragEnd(),a=void 0),b},m=function(){
var b=BetJs.Tables.GetRowID(a);if(a=void 0,BetJs.Jelly.Admin.DragEnd(),$(".jFileCol tr").removeClass("dragOver"),
b&&b.name){var c=BetJs.Tables.NameArray(b.name),d=b.number;d>c.length?d=c.length-1:d-=1;
var e=document.forms[0];e[b.name+"-Action"].value=3,e[b.name+"-Params"].value=d===-1?d:c[d],
e[b.name+"-selected"].value=BetJs.Tables.GetSelected(b.name),e.submit()}};return b;
}(),$(document).ready(function(){BetJs.Jelly.ImgCol.Ini(),BetJs.Jelly.Img.Ini()});
var BetJs;BetJs||(BetJs={}),BetJs.Jelly||(BetJs.Jelly={}),BetJs.Jelly.ImgCol=function(){
var a={};a.Ini=function(){b(),c(),$(".imgColContainer.sortable").imgColSortable();
};var b=function(){var a=BetJs.Jelly.Texts.imgColBtEdit;$(".imgColItem .outer").append('<span class="edit jBtImgColEdit">'+a+"</span>");
},c=function(){$(".jBtImgColEdit").on("click.imgCol",function(){d(this)}),$(".imgColItem").on("dblclick.imgCol",function(){
d(this)})},d=function(a){var b=$(a).closest("div.imgColItem");if(b.attr("data-v")){
var c=b.attr("data-v");BetJs.Jelly.Admin.OpenVariable(c)}else if(b.attr("data-colimg")){
var d=b.attr("data-colimg").split(","),e=$.trim(d[0]),f=$.trim(d[1]),g=Number($.trim(d[2])),h=Number($.trim(d[3]));
BetJs.Jelly.Admin.ImgEdit(e,f,h,g)}};return a}(),BetJs.Jelly.Img=function(){var a={};
a.Ini=function(){b(),c()};var b=function(){var a=BetJs.Jelly.Texts.imgBtEdit;$(".singleImgItem .outer").append('<span class="edit jBtImgEdit">'+a+"</span>");
},c=function(){$(".jBtImgEdit").on("click.imgCol",function(){d(this)}),$(".singleImgItem").on("dblclick.imgCol",function(){
d(this)})},d=function(a){var b,c,d,e,f=$(a).closest("div.singleImgItem");f.attr("data-img")?(b=f.attr("data-img").split(","),
c=$.trim(b[0]),d=$.trim(b[1]),e=Number($.trim(b[2])),BetJs.Jelly.Admin.ImgEdit(c,d,e)):f.attr("data-simg")&&(b=f.attr("data-simg").split(","),
c=$.trim(b[0]),d=$.trim(b[1]),e=Number($.trim(b[2])),BetJs.Jelly.Admin.SimpleImgEdit(c,d,e));
};return a}(),function(a){a.fn.multiSortable=function(b){a(this).data("sortData",b),
this.children().off("mousedown.multiSortable").on("mousedown.multiSortable",function(b){
b.ctrlKey||b.metaKey?a(b.currentTarget).toggleClass("ui-selecting"):a(b.currentTarget).hasClass("ui-selecting")||(a(".ui-selecting").removeClass("ui-selecting"),
a(this).addClass("ui-selecting"))}),this.sortable({helper:"clone",update:function(b,c){
var d=c.item,e=0;c.item.parent().children().each(function(){return this.id===c.item.get(0).id?void(e=1):void(a(this).hasClass("ui-selecting")&&(e?(d.after(this),
d=a(this)):d.before(this)))});var f=a(this).data("sortData");if(f&&f.onsort){var g,h=[];
a(this).children().each(function(){g=this.id.split("-"),h[h.length]=g[1]}),f.onsort(b,g[0],h);
}}})},a.fn.multiSortableDisable=function(){this.children().off("mousedown.multiSortable"),
this.sortable("destroy")}}(jQuery),function(a){a.fn.imgColSortable=function(){var b="true"===a(this).children().attr("data-autosubmit");
this.multiSortable({autosubmit:b,onsort:function(a,b,c){document.forms[0][b+"-Action"].value=3,
document.forms[0][b+"-Params"].value=c.join(","),this.autosubmit&&document.forms[0].submit();
}})}}(jQuery),$(document).ready(function(){BetJs.Tables.selectedClass="selected",
BetJs.Jelly.RefCol.Ini()});var BetJs;BetJs||(BetJs={}),BetJs.Jelly||(BetJs.Jelly={}),
BetJs.Jelly.RefCol=function(){var a,b,c,d,e,f={},g=1,h=200;f.Ini=function(){o(),p(),
D(),J()};var i=function(){$(".jDragPickerA").off(".BetJs.Jelly.RefCol"),$(".jDragPickerA tr").off(".BetJs.Jelly.RefCol"),
$(".jDragPickerB").off(".BetJs.Jelly.RefCol"),$(".jDragPickerB tr").off(".BetJs.Jelly.RefCol"),
o(),p()},j=function(a){var b=a.id.substring(0,5);return b},k=function(a){var b=a.id.substring(0,5);
return b+"A"},l=function(a){var b=a.id.substring(0,5);return b+"B"},m=function(a){
var b;return b="string"==typeof a?a:a.id.substring(0,5),window[b+"WithOrder"]},n=function(a){
if(!window[a+"Idxs"]){for(var b=document.forms[0]["h"+a+"Ids"].value,c=""===b?[]:b.split(","),d=[],e=BetJs.Tables.NameArray(a+"B"),f=0;f<c.length;++f)d.push(e.GetIdxByName(c[f]));
window[a+"Idxs"]=d}return window[a+"Idxs"]},o=function(){$(document).on("mousemove.BetJs.Jelly.RefCol",function(){
(a||b)&&BetJs.Browsers.ClearSelection()}),$(".jDragPickerA tr:not(.jEmptyItem)").draggable({
helper:q,cursorAt:{left:-5},delay:h,revert:function(){return!d},revertDuration:300,
start:function(){a=j(this),d=this,c=m(this)},stop:u}),$(".jDragPickerA").on("click.BetJs.Jelly.RefCol",function(){
BetJs.Tables.UnselectAll(k(this))}).on("mouseover.BetJs.Jelly.RefCol",function(){
b===j(this)&&$(this).addClass("dragOver")}).on("mousemove.BetJs.Jelly.RefCol",B).on("mouseout.BetJs.Jelly.RefCol",function(){
d=void 0,$(this).removeClass("dragOver")}),$(".jDragPickerA tr:not(.jEmptyItem)").on("click.BetJs.Jelly.RefCol",function(a){
return BetJs.Tables.Select(this,a,{OnShiftSelect:s}),BetJs.Tables.UnselectAll(j(this)),
!1}).on("mouseover.BetJs.Jelly.RefCol",function(){var e=j(this);!c||a!==e&&b!==e?a||b||$(this).addClass("hover"):(d=this,
$(this).addClass("dragOver"))}).on("mouseout.BetJs.Jelly.RefCol",function(){d&&d===this&&(d=void 0),
$(this).removeClass("dragOver").removeClass("hover")}).on("dblclick.BetJs.Jelly.RefCol",function(){
x(this)}),$(".jDragPickerA tr.jEmptyItem").on("mouseover.BetJs.Jelly.RefCol",function(){
var e=j(this);!c||a!==e&&b!==e||(d=this,$(this).addClass("dragOver"))}).on("mouseout.BetJs.Jelly.RefCol",function(){
d&&d===this&&(d=void 0),$(this).removeClass("dragOver")})},p=function(){$(".jDragPickerB tr.active").draggable({
helper:r,cursorAt:{left:-5},delay:h,revert:function(){return!d},revertDuration:300,
start:function(){b=j(this),d=void 0,c=m(this)},stop:u}),$(".jDragPickerB tr:not(.active)").draggable({
helper:function(){return $("<p />")[0]}}),$(".jDragPickerB").on("mousemove.BetJs.Jelly.RefCol",function(){
a===j(this)&&($(this).addClass("dragOver"),d=this)}).on("mouseout.BetJs.Jelly.RefCol",function(){
d=void 0,$(this).removeClass("dragOver")}),$(".jDragPickerB tr.active").on("click.BetJs.Jelly.RefCol",function(a){
return BetJs.Tables.Select(this,a,{OnShiftSelect:t}),BetJs.Tables.UnselectAll(k(this)),
!1}).on("mouseover.BetJs.Jelly.RefCol",function(){b||a||$(this).addClass("hover");
}).on("mouseout.BetJs.Jelly.RefCol",function(){$(this).removeClass("hover")}).on("dblclick.BetJs.Jelly.RefCol",function(){
v(this)})},q=function(a){var b=j(this);BetJs.Tables.SelectWithStartDrag(this,a),BetJs.Tables.UnselectAll(l(this));
for(var c=$(this).closest("table").width(),d=$('<table class="treeColDragHelper" style="width: '+c+'px" />'),e=n(b),f=BetJs.Tables.SelectionArray(b+"A"),g=0;g<e.length;++g)if(BetJs.Utils.ArrContains(f,e[g])){
var h=$("#"+b+"A-"+e[g]),i=h.clone();i.width(h.width()),d.append(i)}return d[0]},r=function(a){
var b=j(this);BetJs.Tables.SelectWithStartDrag(this,a),BetJs.Tables.UnselectAll(k(this));
for(var c=$(this).closest("table").width(),d=$('<table class="dragHelper" style="width: '+c+'px" />'),e=BetJs.Tables.NameArray(b+"B"),f=BetJs.Tables.SelectionArray(b+"B"),g=0;g<e.length;++g)if(BetJs.Utils.ArrContains(f,g)){
var h=$("#"+b+"B-"+g),i=h.clone();i.width(h.width()),d.append(i)}return d[0]},s=function(a,b,c){
c=c.substring(0,5);for(var d=n(c),e=[],f=0,g=0;g<d.length;++g)if(0!==f||d[g]!==a&&d[g]!==b){
if(1===f&&d[g]!==a&&e.push(d[g]),1===f&&(d[g]===a||d[g]===b))break}else d[g]!==a&&e.push(d[g]),
f=1;return e},t=function(a,b,c){c=c.substring(0,5);var d=n(c),e=[],f=1;for(b<a&&(f=-1),
a+=f;a!==b;a+=f)!BetJs.Utils.ArrContains(d,a)&&$("#"+c+"B-"+a).is(":visible")&&e.push(a);
return!BetJs.Utils.ArrContains(d,b)&&$("#"+c+"B-"+b).is(":visible")&&e.push(b),e},u=function(){
var e=d,f=0;if(a&&(f=1),b&&(f=2),d=void 0,a=void 0,b=void 0,$(".jDragPickerA tr").removeClass("dragOver"),
$(".jDragPickerB").removeClass("dragOver"),$(".jDragPickerA").removeClass("dragOver"),
C(),e&&f>0){var g=j(e);1===f&&e===$("#"+g+"B")[0]?x(e):1===f?y(e):2===f&&(c?v(e):w(e));
}},v=function(a){var b,c,d=j(a),e=n(d),f=BetJs.Tables.SelectionArray(d+"B");f.sort(function(a,b){
return a-b});var g=BetJs.Tables.GetRowID(a).number,h=9999;for(b=0;b<e.length;++b)e[b]===g&&(h=b);
var i=[];for(b=0;b<e.length&&b<h;)i.push(e[b]),++b;for(c=0;c<f.length;++c)i.push(f[c]);
for(;b<e.length;)i.push(e[b]),++b;z(d,i,f,1),A(d,i)},w=function(a){var b=j(a),c=n(b),d=BetJs.Tables.SelectionArray(b+"B"),e=[];
e.push.apply(e,c),e.push.apply(e,d),e.sort(function(a,b){return a-b}),z(b,e,d,1),
A(b,e)},x=function(a){for(var b=j(a),c=n(b),d=BetJs.Tables.SelectionArray(b+"A"),e=[],f=0;f<c.length;++f)BetJs.Utils.ArrContains(d,c[f])||e.push(c[f]);
z(b,e,d,2),A(b,e)},y=function(a){var b,c,d=j(a),e=n(d),f=BetJs.Tables.SelectionArray(d+"A"),g=BetJs.Tables.GetRowID(a).number,h=9999,i=[];
for(b=0;b<e.length;++b)i.push(BetJs.Utils.ArrContains(f,e[b])?1:0),e[b]===g&&(h=b);
var k=[];for(b=0;b<e.length&&b<h;)0===i[b]&&k.push(e[b]),++b;for(c=0;c<e.length;++c)1===i[c]&&k.push(e[c]);
for(;b<e.length;)0===i[b]&&k.push(e[b]),++b;z(d,k,f,1),A(d,k),A(d,k)},z=function(a,b,c,d){
var e,f=$("#"+a+"A table"),g=$("#"+a+"A .jEmptyItem").clone();for(f.empty().prepend(g),
$("#"+a+"B tr").addClass("active").removeClass("selected").removeClass("hover"),e=b.length-1;e>=0;--e){
var h=$("#"+a+"B-"+b[e]).removeClass("active"),j=h.clone().attr("id",a+"A-"+b[e]).show();
f.prepend(j)}$("#"+a+"A").toggleClass("empty",0===b.length);var k=c.slice();for(e=0;e<k.length;++e)1===d&&$("#"+a+"A-"+k[e]).addClass("selected"),
2===d&&$("#"+a+"B-"+k[e]).addClass("selected");var l=BetJs.Tables.SelectionArray(a+"A"),m=BetJs.Tables.SelectionArray(a+"B");
l.length=0,m.length=0,1===d&&l.push.apply(l,k),2===d&&m.push.apply(m,k),i()},A=function(a,b){
var c=n(a);c.length=0,c.push.apply(c,b);for(var d=[],e=BetJs.Tables.NameArray(a+"B"),f=0;f<c.length;++f)d.push(e[c[f]]);
document.forms[0]["h"+a+"Ids"].value=d.join(",")};f.AddItems=function(a,b){var c,d=n(b).slice();
if(a.ctrlKey||a.metaKey){c=[];for(var e=BetJs.Tables.NameArray(b+"B"),f=0;f<e.length;++f)BetJs.Utils.ArrContains(d,f)||(d.push(f),
c.push(f))}else{c=BetJs.Tables.SelectionArray(b+"B"),d.push.apply(d,c);var g=m(b);
g||d.sort(function(a,b){return a-b})}z(b,d,c,1),A(b,d)},f.RemoveItems=function(a,b){
var c,d=n(b).slice(),e=[];if(a.ctrlKey||a.metaKey)c=[],c.push.apply(c,d);else{c=BetJs.Tables.SelectionArray(b+"A");
for(var f=0;f<d.length;++f)BetJs.Utils.ArrContains(c,d[f])||e.push(d[f])}z(b,e,c,2),
A(b,e)},f.SwitchItems=function(a,b){for(var c=n(b).slice(),d=[],e=BetJs.Tables.NameArray(b+"B"),f=0;f<e.length;++f)BetJs.Utils.ArrContains(c,f)||d.push(f);
z(b,d,[],0),A(b,d)};var B=function(c){var f=j(this),h=$(this),i=h.offset().top,k=h.outerHeight(),l=c.pageY,m=20;
(a===f||b===f)&&i<=l&&l<=i+m?(g=Math.min(Math.max(6*(m-(l-i))/m,1),5),e||(e=window.setInterval(function(){
var a=$("#"+f+"A");a.scrollTop(a.scrollTop()-g)},20))):(a===f||b===f)&&i+k-m<=l&&l<=i+k?(g=Math.min(Math.max(6*(m-(i+k-l))/m,1),5),
e||(e=window.setInterval(function(){var a=$("#"+f+"A");a.scrollTop(a.scrollTop()+g);
},20))):C(),b!==f||d||(d=this)},C=function(){e&&(window.clearInterval(e),e=void 0);
},D=function(){$(".jPickerFilter").on("keydown.BetJs.Jelly.RefCol",E).on("keyup.BetJs.Jelly.RefCol",F).attr("autocomplete","off");
},E=function(a){13===a.keyCode&&a.preventDefault(),38===a.keyCode&&(I(this,"up"),
a.preventDefault()),40===a.keyCode&&(I(this,"down"),a.preventDefault())},F=function(a){
var b=this.value.toLowerCase();38!==a.keyCode&&40!==a.keyCode&&13!==a.keyCode&&G(this,b),
13===a.keyCode&&H(this)},G=function(a,b){var c=j(a),d=!1,e=n(c),f=BetJs.Tables.SelectionArray(c+"B");
f.length=0,$("#"+c+"B tr").each(function(){var a=$(this);if(a.removeClass("selected"),
""===b)a.show();else{var c=a.find("td").text().toLowerCase();if(c.indexOf(b)>-1){
if(a.show(),!d){var g=BetJs.Tables.GetRowID(this).number;BetJs.Utils.ArrContains(e,g)||(d=!0,
a.addClass("selected"),f[0]=g)}}else a.hide()}})},H=function(a){var b=j(a),c=BetJs.Tables.SelectionArray(b+"B");
0!==c.length&&(BetJs.Jelly.RefCol.AddItems({},b),a.value="",a.oldValue="",$("#"+b+"B tr").each(function(){
$(this).show()}))},I=function(a,b){var c=j(a),d=BetJs.Tables.SelectionArray(c+"B");
d.length=0;var e,f=$("#"+c+"B tr.oznac");if("up"===b?e=f.prevAll("tr.active:visible:first"):"down"===b&&(e=f.nextAll("tr.active:visible:first")),
0===e.length&&("up"===b?e=$("#"+c+"B tr.active:visible:last"):"down"===b&&(e=$("#"+c+"B tr.active:visible:first"))),
e.length>0){var g=BetJs.Tables.GetRowID(e[0]).number;f.removeClass("selected"),e.addClass("selected"),
d[0]=g}},J=function(){$(".jDragPickerB").each(function(){this.lastHeight=$(this).outerHeight();
}),$(".jDragPickerB").mouseup(K)},K=function(){var a=$(this);if(this.lastHeight!==a.outerHeight()){
var b=a.outerHeight(),c=a.attr("data-fieldName");$.ajax({url:"main.ajax.aspx",data:{
akce:"taHeight",t:c,v:b}})}};return f}();var BetJs;BetJs||(BetJs={}),BetJs.Jelly||(BetJs.Jelly={}),
BetJs.Jelly.Tiny=function(){var a={};a.GetConfig=function(){var a={entity_encoding:"raw",
valid_elements:"@[id|class],strong/b,em/i,#p,-ol,-ul,-li,br,-sub,-sup,-h2,-h3,div,blockquote,span,code",
extended_valid_elements:"img[*],iframe[*],a[href|target]",convert_urls:!1,min_height:30,
plugins:"charmap visualchars nonbreaking link code",menubar:!1,toolbar1:"styleselect | bullist numlist | bold italic subscript superscript | link | charmap visualchars nonbreaking | code",
toolbar2:"",toolbar_items_size:"small",style_formats:[{title:"nadpis 2",block:"h2"
},{title:"nadpis 3",block:"h3"},{title:"odstavec",block:"p"}],browser_spellcheck:!0
};return a};var b=function(){var a={};return a},c=function(){var a={style_formats:[{
title:"Header 2",block:"h2"},{title:"Header 3",block:"h3"},{title:"Paragraph",block:"p"
}]};return a};a.Ini=function(h,i,j,k){var l,m=a.GetConfig();if("cs"===k&&(l=b()),
"en"===k&&(l=c()),l)try{$.extend(m,l)}catch(a){}if(j)try{var n=BetJs.Browsers.RunFunction(j);
$.extend(m,n)}catch(a){}m.selector="textarea#"+h,i&&(m.content_css=i),k&&(m.language=k),
m.setup=function(a){a.on("ResizeEditor",function(){var b=$("#"+a.id).prev("div.mce-tinymce").find("iframe"),c=b.height();
d&&window.clearTimeout(d),e=a.id,f=c,d=window.setTimeout(g,100)}),a.on("keydown",function(a){
var b=!1;return(a.ctrlKey||a.metaKey)&&83===a.keyCode&&(a.preventDefault(),b=!0),
!b}),a.on("keyup",function(a){var b=!1;return(a.ctrlKey||a.metaKey)&&83===a.keyCode&&(a.preventDefault(),
b=!0,BetJs.Jelly.Admin.BtAction(22)),!b})},tinyMCE.init(m)};var d,e,f,g=function(){
var a=varTypeName+"."+e;$.ajax({url:"main.ajax.aspx",data:{akce:"taHeight",t:a,v:f
}}),d=void 0,$("iframe").width("100%"),$(".mce-tinymce").width("auto")};return a}();