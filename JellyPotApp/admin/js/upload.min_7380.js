$(document).ready(function(){BetJs.Jelly.Texts.Ini(adminLang)});var BetJs;BetJs||(BetJs={}),
BetJs.Jelly||(BetJs.Jelly={}),BetJs.Jelly.Texts=function(){var a={};a.Ini=function(d){
var e="cs"===d?b:c;for(var f in e)a[f]=e[f]};var b={treeNoSelection:"Žádný řádek není označen.",
treeNoLeft:"Řádek nelze posunout doleva.",treeNoRight:"Řádek nelze posunout doprava.",
btRowEdit:"edit",imgBtEdit:"edit",imgColBtEdit:"edit",fileBtRowEdit:"edit"},c={treeNoSelection:"No row is selected.",
treeNoLeft:"The row can not be moved left.",treeNoRight:"The row can not be moved right.",
btRowEdit:"edit",imgBtEdit:"edit",imgColBtEdit:"edit",fileBtRowEdit:"edit"};return a;
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
}})}}(jQuery);var BetJs;BetJs||(BetJs={}),BetJs.Jelly||(BetJs.Jelly={}),BetJs.Jelly.UploadUtils=function(){
var a={};return a.FileSizeAsText=function(a){var b="";if(a<1022976)b=Math.floor(Math.max(a/1024,1))+" kB";else{
var c=Math.floor(a/1024/1024*10).toString();c=c.substr(0,c.length-1)+"."+c.substring(c.length-1,c.length),
b=c+" MB"}return b},a.DenyDialog=function(){parent&&(parent.BetJs.Jelly.Admin.DialogClose(window.name),
parent.BetJs.Jelly.Admin.OpenAdmin("login.aspx?a=deny"))},a}(),$(document).ready(function(){
BetJs.Jelly.FileUpload.Ini()});var BetJs;BetJs||(BetJs={}),BetJs.Jelly||(BetJs.Jelly={}),
BetJs.Jelly.FileUpload=function(){var a,b,c={};c.Ini=function(){var a=$(".jFileUploadForm");
if(0!==a.length){var b=9e5;a.fileupload({url:"fileLoad.ajax.aspx",maxChunkSize:b,
add:e,fail:d,progressall:j,done:k}),fileId&&$(".jBtnUpload").attr("value",0===fileId?labelUpload:labelSave);
}};var d=function(a,b){if(b.jqXHR&&"FileTooLong"===b.jqXHR.responseText)$("#jUploadStatus").html(msgFileTooLong).addClass("resultErr"),
p();else{var c={maxRetries:120,retryTimeout:1e3,DoRetry:function(){$.ajax({url:"fileLoad.ajax.aspx",
data:{action:"sizeQuery",uploadId:b.formData.uploadId,fileIdx:b.formData.fileIdx},
dataType:"text",success:function(a){b.uploadedBytes=Number(a),b.data=null,b.submit();
},error:function(a){403===a.status?h():d(a,b)}})}},e=b.retries||0;if(e<c.maxRetries)return e+=1,
b.retries=e,void window.setTimeout(c.DoRetry,c.retryTimeout);n("BetJs: Unspecified error during upload - 701");
}},e=function(b,c){if(c.files.length>0){if(c.files.length>1)return void n("BetJs: Wrong implementation - 702");
$(".jBtnUpload").attr("value",labelUpload).removeAttr("disabled").removeClass("disabled"),
$("#jUploadStatus").html("&nbsp;").removeClass("resultErr"),g(c),a=c,maxFileLength>0&&c.files[0].size>1024*maxFileLength&&(n(msgFileTooLong),
$(".jBtnUpload").attr("disabled","disabled").addClass("disabled"))}},f=function(){},g=function(a){
var b=a.files[0],c=BetJs.Jelly.UploadUtils.FileSizeAsText(b.size),d="<strong>"+b.name+"</strong><span>"+c+"</span>";
$("#lbInfo").html(d),$.ajax({url:"loadUtils.ajax.aspx",data:{action:"fileIcon",fileName:b.name
},dataType:"text",success:function(a){$("#filePreview").html(a)}})};c.UploadStart=function(){
return a?(o(),void $.ajax({url:"fileLoad.ajax.aspx",data:{action:"startUpload",typePath:typePath,
fieldName:fieldName},dataType:"text",success:function(a){b=a,i()},error:function(a){
403===a.status?h():n("BetJs: Unspecified error on upload start - 703")}})):fileId>0?void m():(parent&&parent.BetJs.Jelly.Admin.SetFile(fieldName,0,fileIdx),
void c.Close())},c.RemoveFile=function(){confirm(msgDeleteConfirm)&&($("#lbInfo").html("&nbsp;"),
$("#filePreview").html(msgNoFile),fileId=0,a=void 0,$(".jBtnUpload").attr("value",labelSave));
},c.Close=function(){parent&&parent.BetJs.Jelly.Admin.DialogClose(window.name)};var h=function(){
BetJs.Jelly.UploadUtils.DenyDialog()},i=function(){if(a){var c=a.files[0].fileName;
c||(c=a.files[0].name),a.formData={fileIdx:0,uploadId:b,fileName:c},a.submit()}},j=function(a,b){
var c=Math.round(b.loaded/b.total*100),d=msgTrasferingData+" "+BetJs.Jelly.UploadUtils.FileSizeAsText(b.loaded)+" ("+c+" %)";
$("#jUploadStatus").html(d).removeClass("resultErr")},k=function(a,b){var c=Number(b.files[0].size)!==Number(b.result);
c?n("BetJs: Unspecified error during upload - 704"):l()},l=function(){var a="";document.forms[0].txAlt&&(a=document.forms[0].txAlt.value),
$("#jUploadStatus").html(msgServerSaving).removeClass("resultErr"),$.ajax({url:"fileLoad.ajax.aspx",
data:{action:"finishUpload",uploadId:b,alt:a},dataType:"text",success:function(a){
parent&&(parent.BetJs.Jelly.Admin.SetFile(fieldName,a,fileIdx),c.Close())},error:function(a){
if(403===a.status)h();else if(409===a.status){var b;try{b=JSON.parse(a.responseText);
}catch(a){}n(b?b.errMsg:"BetJs: Unspecified error on upload finish - 705")}else n("BetJs: Unspecified error on upload finish - 706");
}})},m=function(){document.forms[0].txAlt?$.ajax({url:"fileLoad.ajax.aspx",data:{
action:"altEdit",typePath:typePath,fieldName:fieldName,fileId:fileId,alt:document.forms[0].txAlt.value
},dataType:"text",success:function(){parent.BetJs.Jelly.Admin.Refresh(),c.Close();
},error:function(a){403===a.status?h():n("BetJs: Unspecified error when saving data - 708");
}}):c.Close()},n=function(a){$("#jUploadStatus").html(a).addClass("resultErr"),p();
},o=function(){$(".jHidding").addClass("hidden"),$("#btSave").attr("disabled","disabled"),
$(".jFileUploadForm").fileupload("option","add",f),$("#jButtons").hide()},p=function(){
$(".jHidding").removeClass("hidden"),$("#btSave").removeAttr("disabled"),$(".jFileUploadForm").fileupload("option","add",e),
$("#jButtons").show()};return c}(),$(document).ready(function(){BetJs.Jelly.ImgColUpload.Ini();
});var BetJs;BetJs||(BetJs={}),BetJs.Jelly||(BetJs.Jelly={}),BetJs.Jelly.ImgColUpload=function(){
var a,b,c,d={},e=[],f=-1,g=0,h=0,i=0,j=0,k=0,l=120,m=500,n=-1,o=0,p=5;d.Ini=function(){
var a=$(".jImgColUploadForm");if(0!==a.length){var b=9e5;a.fileupload({datatype:"json",
url:"imgColLoad.ajax.aspx",autoupload:!1,maxChunkSize:b,add:q,fail:C,progressall:z,
chunkdone:A,done:E})}};var q=function(a,b){if(b.files.length>0){if(b.files.length>1)return void alert("BetJs: Wrong implementation - 702");
b.isDeleted=!1,b.hasThumbnail=!1,b.isErr=!1;var d=e.length;e[d]=b,s(d,b),$("#jBrowse").hide(),
c||window.setInterval(t,200)}},r=function(){},s=function(a,b){var c="",d=b.files[0].fileName;
d||(d=b.files[0].name),c+='<div class="imgColItem" id="imgColItem-'+a+'">',c+='<div class="thumb"><div class="outer"><div class="inner loading"><p>creating thumb&hellip;</p></div></div></div>',
c+='<p title="'+d+'">'+d+" "+BetJs.Jelly.UploadUtils.FileSizeAsText(b.files[0].size)+"</p>",
c+="</div>",$(".jIconAreaContent").append(c),M()},t=function(){if(f===-1){for(var a=0;a<e.length;++a)if(!e[a].isRendered){
f=a,window.loadImage(e[a].files[0],u,{maxWidth:138,maxHeight:138}),h+=e[a].files[0].size;
break}f===-1&&c&&(window.clearInterval(c),c=void 0)}},u=function(a){if(f!==-1){var b=$("#imgColItem-"+f+" .inner");
"error"===a.type?(b.removeClass("loading").html("<p class='iconText'>"+msgErrCreateThumb+"</p>"),
++g):b.removeClass("loading").html(a),e[f].isRendered=!0,f=-1}};d.UploadStart=function(){
return w()?(J(),$("#jUploadStatus").html(msgStartingTransfer).removeClass("resultErr"),
void $.ajax({url:"imgColLoad.ajax.aspx",data:{action:"startUpload",typePath:typePath,
fieldName:fieldName},dataType:"text",success:function(b){a=b,y()},error:function(a){
403===a.status?x():alert("BetJs: Unspecified error on upload start - 703")}})):void d.Close();
};var v,w=function(){for(var a=0;a<e.length;++a)if(!e[a].isDeleted)return!0;return!1;
},x=function(){BetJs.Jelly.UploadUtils.DenyDialog()},y=function(){i=0,j=0;for(var b=[],c=!1,d=0;d<e.length;++d)if(!e[d].isDeleted){
i+=e[d].files[0].size;var f=e[d].files[0].fileName;f||(f=e[d].files[0].name),e[d].formData={
fileIdx:d,uploadId:a,fileName:f},c=c||o>=p,c||(e[d].submit(),n=d,++o),b[b.length]=e[d].files[0].size;
}var g=msgTrasferingData+" 0 kB (0 %)";$("#jUploadStatus").html(g).removeClass("resultErr");
},z=function(a,c){var d=c.loaded;b||(b=d);var e=Math.max(d-b,0);B(j+e)},A=function(a,c){
j+=c.chunkSize,b=void 0,B(j)},B=function(a){k=Math.max(k,a);var b=Math.min(Math.round(k/i*100),100),c=msgTrasferingData+" "+BetJs.Jelly.UploadUtils.FileSizeAsText(k)+" ("+b+" %)";
$("#jUploadStatus").html(c).removeClass("resultErr")},C=function(a,b){if(b.jqXHR&&"FileTooLong"===b.jqXHR.responseText)$("#jUploadStatus").html(msgFileTooLong).addClass("resultErr"),
K();else{var c=b.retries||0;if(c<l)return c+=1,b.retries=c,void window.setTimeout(function(){
D(a,b)},m);alert("BetJs: Unspecified error on upload - 701"),b.jqXHR&&$("#jUploadStatus").html(b.jqXHR.responseText).addClass("resultErr");
}},D=function(a,b){$.ajax({url:"imgColLoad.ajax.aspx",data:{action:"getFileSize",
uploadId:b.formData.uploadId,fileIdx:b.formData.fileIdx},dataType:"text",success:function(a){
b.uploadedBytes=Number(a),b.data=null,b.submit()},error:function(a){403===a.status?x():C(a,b);
}})},E=function(b,c){var d=c.formData.fileIdx;e[d].isUploaded=!0,Number(c.files[0].size)!==Number(c.result)&&(e[d].isErr=!0),
$.ajax({url:"imgColLoad.ajax.aspx",data:{action:"finishFile",uploadId:a,fileIdx:d
}});var f=!1;o-=1;for(var g=n+1;g<e.length;++g)e[g].isDeleted||(f=f||o>=p,f||(e[g].submit(),
n=g,++o));var h,i=!0;for(h=0;h<e.length;++h)e[h].isDeleted||e[h].isUploaded||(i=!1);
if(i){var j=[],k=a,l=N();for(h=0;h<l.length;++h)e[l[h]].isDeleted||e[l[h]].isErr||j.push(l[h]),
!e[l[h]].isDeleted&&e[l[h]].isErr&&(i=!1);F(k,i,j)}},F=function(a,b,c){$("#jUploadStatus").html(msgServerSaving).removeClass("resultErr"),
$.ajax({url:"imgColLoad.ajax.aspx",data:{action:"finishUpload",uploadId:a,typePath:typePath,
fieldName:fieldName,idxs:c.join(",")},dataType:"text",success:function(d){"savingInProgres"===d?window.setTimeout(function(){
F(a,b,c)},1e3):(G(b,destFieldName,d),b||I(c))},error:function(a){403===a.status?x():alert("BetJs: Unspecified error on upload finish - 704");
}})},G=function(b,c,e){parent&&parent.BetJs.Jelly.Admin.SetImgBulk&&(parent.BetJs.Jelly.Admin.SetImgBulk(c,e),
b&&d.Close(),b||($("#jUploadStatus").html(msgTryAgain).addClass("resultErr"),a=void 0,
v=0,setTimeout(H,200)))},H=function(){++v,parent&&parent.SetImg?K():v<30&&setTimeout(H,200);
},I=function(a){var b;for(b=0;b<a.length;++b){var c=a[b];e[c].isDeleted=!0,$("#imgColItem-"+c).remove();
}for(b=0;b<e.length;++b)e[b].isErr=!1,e[b].isUploaded=!1},J=function(){$(".jHidding").addClass("hidden"),
$("#btSave").attr("disabled","disabled"),$(".jImgColUploadForm").fileupload("option","add",r),
$(".jIconAreaContent").multiSortableDisable(),$("#jButtons").hide()},K=function(){
$(".jHidding").removeClass("hidden"),$("#btSave").removeAttr("disabled"),$(".jImgColUploadForm").fileupload("option","add",q),
$("#jButtons").show(),M()};d.Close=function(){parent&&parent.BetJs.Jelly.Admin.DialogClose(window.name);
},d.ClearSelected=function(){if(confirm(msgDeleteConfirm)){for(var a=L(),b=0;b<a.length;++b){
var c=a[b];e[c].isDeleted=!0,$("#imgColItem-"+c).remove()}var d=N();0===d.length&&$("#jBrowse").show();
}},d.ClearAll=function(){confirm(msgDeleteConfirm)&&(e.length=0,$(".jIconAreaContent").empty(),
$("#jBrowse").show())};var L=function(){var a,b=[];return $(".jIconAreaContent .ui-selecting").each(function(){
a=this.id.split("-"),b[b.length]=a[1]}),b},M=function(){var a=$(".jIconAreaContent");
a.data("ui-sortable")&&a.multiSortableDisable(),a.multiSortable()},N=function(){var a,b=[];
return $(".jIconAreaContent").children().each(function(){a=this.id.split("-"),b[b.length]=a[1];
}),b};return d}(),$(document).ready(function(){BetJs.Jelly.ImgUpload.Ini()});var BetJs;
BetJs||(BetJs={}),BetJs.Jelly||(BetJs.Jelly={}),BetJs.Jelly.ImgUpload=function(){
var a,b,c={},d=0,e=0;c.Ini=function(){var a=$(".jImgUploadForm");if(0!==a.length){
var b=9e5;a.fileupload({url:"imgLoad.ajax.aspx",maxChunkSize:b,add:g,fail:f,progressall:n,
done:o}),$(".jBtnUpload").attr("value",0===imgId?labelUpload:labelSave)}};var f=function(a,b){
if(b.jqXHR&&"FileTooLong"===b.jqXHR.responseText)$("#jUploadStatus").html(msgFileTooLong).addClass("resultErr"),
t();else{var c={maxRetries:120,retryTimeout:1e3,DoRetry:function(){$.ajax({url:"imgLoad.ajax.aspx",
data:{action:"sizeQuery",uploadId:b.formData.uploadId,fileIdx:b.formData.fileIdx},
dataType:"text",success:function(a){b.uploadedBytes=Number(a),b.data=null,b.submit();
},error:function(a){403===a.status?l():f(a,b)}})}},d=b.retries||0;if(d<c.maxRetries)return d+=1,
b.retries=d,void window.setTimeout(c.DoRetry,c.retryTimeout);r("BetJs: Unspecified error during upload - 701");
}},g=function(b,c){if(c.files.length>0){if(c.files.length>1)return void r("BetJs: Wrong implementation - 702");
$(".jBtnUpload").attr("value",labelUpload).removeAttr("disabled").removeClass("disabled"),
$("#jUploadStatus").html("&nbsp;").removeClass("resultErr"),i(c),a=c,maxFileLength>0&&c.files[0].size>1024*maxFileLength&&(r(msgFileTooLong),
$(".jBtnUpload").attr("disabled","disabled").addClass("disabled"))}},h=function(){},i=function(b){
++d;var c=b.files[0],e="image/jpeg"===c.type;if(e)var f=window.loadImage(c,function(a){
j(c,f,a)},{maxWidth:imgPrevMaxW,maxHeight:imgPrevMaxH});else k(),a=void 0,$(".jBtnUpload").attr("disabled","disabled").addClass("disabled");
},j=function(a,b,c){if(d!==e){e=d,$("#imgPreview").html(c);var f=BetJs.Jelly.UploadUtils.FileSizeAsText(a.size),g=b.naturalWidth,h=b.naturalHeight,i="<strong>"+a.name+"</strong><span>"+g+" x "+h+" px</span><span>"+f+"</span>";
$("#lbInfo").html(i)}},k=function(){$.ajax({url:"loadUtils.ajax.aspx",data:{action:"imgBadContent"
},dataType:"text",success:function(a){$("#imgPreview").html(a)}}),$("#lbInfo").html("&nbsp;");
};c.UploadStart=function(){return a?(s(),void $.ajax({url:"imgLoad.ajax.aspx",data:{
action:"startUpload",typePath:typePath,fieldName:fieldName},dataType:"text",success:function(a){
b=a,m()},error:function(a){403===a.status?l():r("BetJs: Unspecified error on upload start - 703");
}})):imgId>0?void q():(parent&&parent.BetJs.Jelly.Admin.SetImg(fieldName,0,imgIdx),
void c.Close())},c.RemoveImg=function(){confirm(msgDeleteConfirm)&&($.ajax({url:"loadUtils.ajax.aspx",
data:{action:"noImgContent"},dataType:"text",success:function(a){$("#imgPreview").html(a);
}}),imgId=0,a=void 0,$(".jBtnUpload").attr("value",labelSave))},c.Close=function(){
parent&&parent.BetJs.Jelly.Admin.DialogClose(window.name)};var l=function(){BetJs.Jelly.UploadUtils.DenyDialog();
},m=function(){if(a){var c=a.files[0].fileName;c||(c=a.files[0].name),a.formData={
fileIdx:0,uploadId:b,fileName:c},a.submit()}},n=function(a,b){var c=Math.round(b.loaded/b.total*100),d=msgTrasferingData+" "+BetJs.Jelly.UploadUtils.FileSizeAsText(b.loaded)+" ("+c+" %)";
$("#jUploadStatus").html(d).removeClass("resultErr")},o=function(a,b){var c=Number(b.files[0].size)!==Number(b.result);
c?r("BetJs: Unspecified error during upload - 704"):p()},p=function(){var a="";document.forms[0].txAlt&&(a=document.forms[0].txAlt.value),
$("#jUploadStatus").html(msgServerSaving).removeClass("resultErr"),$.ajax({url:"imgLoad.ajax.aspx",
data:{action:"finishUpload",uploadId:b,alt:a},dataType:"text",success:function(a){
parent&&(parent.BetJs.Jelly.Admin.SetImg(fieldName,a,imgIdx),c.Close())},error:function(a){
if(403===a.status)l();else if(409===a.status){var b;try{b=JSON.parse(a.responseText);
}catch(a){}r(b?b.errMsg:"BetJs: Unspecified error on upload finish - 705")}else r("BetJs: Unspecified error on upload finish - 706");
}})},q=function(){$.ajax({url:"imgLoad.ajax.aspx",data:{action:"altEdit",typePath:typePath,
fieldName:fieldName,imgId:imgId,alt:document.forms[0].txAlt.value},dataType:"text",
success:function(){parent.BetJs.Jelly.Admin.Refresh(),c.Close()},error:function(a){
403===a.status?l():r("BetJs: Unspecified error when saving data - 708")}})},r=function(a){
$("#jUploadStatus").html(a).addClass("resultErr"),t()},s=function(){$(".jHidding").addClass("hidden"),
$("#btSave").attr("disabled","disabled"),$(".jImgUploadForm").fileupload("option","add",h),
$("#jButtons").hide()},t=function(){$(".jHidding").removeClass("hidden"),$("#btSave").removeAttr("disabled"),
$(".jImgUploadForm").fileupload("option","add",g),$("#jButtons").show()};return c;
}(),$(document).ready(function(){BetJs.Jelly.ImgSimpleUpload.Ini()});var BetJs;BetJs||(BetJs={}),
BetJs.Jelly||(BetJs.Jelly={}),BetJs.Jelly.ImgSimpleUpload=function(){var a,b,c={},d=0,e=0;
c.Ini=function(){var a=$(".jImgSimpleUploadForm");if(0!==a.length){var b=9e5;a.fileupload({
url:"imgSimpleLoad.ajax.aspx",maxChunkSize:b,add:g,fail:f,progressall:n,done:o}),
$(".jBtnUpload").attr("value",0===imgId?labelUpload:labelSave)}};var f=function(a,b){
if(b.jqXHR&&"FileTooLong"===b.jqXHR.responseText)$("#jUploadStatus").html(msgFileTooLong).addClass("resultErr"),
u();else{var c={maxRetries:120,retryTimeout:1e3,DoRetry:function(){$.ajax({url:"imgSimpleLoad.ajax.aspx",
data:{action:"sizeQuery",uploadId:b.formData.uploadId,fileIdx:b.formData.fileIdx},
dataType:"text",success:function(a){b.uploadedBytes=Number(a),b.data=null,b.submit();
},error:function(a){403===a.status?l():f(a,b)}})}},d=b.retries||0;if(d<c.maxRetries)return d+=1,
b.retries=d,void window.setTimeout(c.DoRetry,c.retryTimeout);s("BetJs: Unspecified error during upload - 701");
}},g=function(b,c){if(c.files.length>0){if(c.files.length>1)return void s("BetJs: Wrong implementation - 702");
$(".jBtnUpload").attr("value",labelUpload).removeAttr("disabled").removeClass("disabled"),
$("#jUploadStatus").html("&nbsp;").removeClass("resultErr"),i(c),a=c,maxFileLength>0&&c.files[0].size>1024*maxFileLength&&(s(msgFileTooLong),
$(".jBtnUpload").attr("disabled","disabled").addClass("disabled"))}},h=function(){},i=function(b){
++d;var c=b.files[0],e="image/jpeg"===c.type||"image/png"===c.type||"image/gif"===c.type||"image/svg+xml"===c.type,f=!1;
if(e)var g=window.loadImage(c,function(a){j(c,g,a)},{maxWidth:imgPrevMaxW,maxHeight:imgPrevMaxH
});else f||(k(),a=void 0,$(".jBtnUpload").attr("disabled","disabled").addClass("disabled"));
},j=function(a,b,c){if(d!==e){e=d,$("#imgPreview").html(c);var f=BetJs.Jelly.UploadUtils.FileSizeAsText(a.size),g=b.naturalWidth,h=b.naturalHeight,i="<strong>"+a.name+"</strong><span>"+g+" x "+h+" px</span><span>"+f+"</span>";
"image/svg+xml"===a.type&&(i="<strong>"+a.name+"</strong><span>"+f+"</span>"),$("#lbInfo").html(i);
}},k=function(){$.ajax({url:"loadUtils.ajax.aspx",data:{action:"simpleImgBadContent"
},dataType:"text",success:function(a){$("#imgPreview").html(a)}}),$("#lbInfo").html("&nbsp;");
};c.UploadStart=function(){return a?(t(),void $.ajax({url:"imgSimpleLoad.ajax.aspx",
data:{action:"startUpload",typePath:typePath,fieldName:fieldName},dataType:"text",
success:function(a){b=a,m()},error:function(a){403===a.status?l():s("BetJs: Unspecified error on upload start - 703");
}})):imgId>0?void q():(parent&&parent.BetJs.Jelly.Admin.SetImg(fieldName,0),void c.Close());
},c.RemoveImg=function(){confirm(msgDeleteConfirm)&&($.ajax({url:"loadUtils.ajax.aspx",
data:{action:"noImgContent"},dataType:"text",success:function(a){$("#imgPreview").html(a);
}}),imgId=0,a=void 0,$(".jBtnUpload").attr("value",labelSave))},c.Close=function(){
parent&&parent.BetJs.Jelly.Admin.DialogClose(window.name)};var l=function(){BetJs.Jelly.UploadUtils.DenyDialog();
},m=function(){if(a){var c=a.files[0].fileName;c||(c=a.files[0].name),a.formData={
fileIdx:0,uploadId:b,fileName:c},a.submit()}},n=function(a,b){var c=Math.round(b.loaded/b.total*100),d=msgTrasferingData+" "+BetJs.Jelly.UploadUtils.FileSizeAsText(b.loaded)+" ("+c+" %)";
$("#jUploadStatus").html(d).removeClass("resultErr")},o=function(a,b){var c=Number(b.files[0].size)!==Number(b.result);
c?s("BetJs: Unspecified error during upload - 704"):p()},p=function(){var d=r();$("#jUploadStatus").html(msgServerSaving).removeClass("resultErr"),
$.ajax({url:"imgSimpleLoad.ajax.aspx",data:{action:"finishUpload",uploadId:b,ct:a.files[0].type,
alt:d.alt,w:d.w,h:d.h,li:d.link},dataType:"text",success:function(a){parent&&(parent.BetJs.Jelly.Admin.SetImg(fieldName,a),
c.Close())},error:function(a){if(403===a.status)l();else if(409===a.status){var b;
try{b=JSON.parse(a.responseText)}catch(a){}s(b?b.errMsg:"BetJs: Unspecified error on upload finish - 705");
}else s("BetJs: Unspecified error on upload finish - 706")}})},q=function(){var a=r();
$.ajax({url:"imgSimpleLoad.ajax.aspx",data:{action:"altEdit",typePath:typePath,fieldName:fieldName,
imgId:imgId,alt:a.alt,w:a.w,h:a.h,li:a.link},dataType:"text",success:function(){c.Close();
},error:function(a){403===a.status?l():s("BetJs: Unspecified error when saving data - 708");
}})},r=function(){var a=document.forms[0],b={};return b.alt=a.txAlt?a.txAlt.value:"",
b.w=a.txWidth?a.txWidth.value:"",b.h=a.txHeight?a.txHeight.value:"",b.link=a.txLink?a.txLink.value:"",
b},s=function(a){$("#jUploadStatus").html(a).addClass("resultErr"),u()},t=function(){
$(".jHidding").addClass("hidden"),$("#btSave").attr("disabled","disabled"),$(".jImgSimpleUploadForm").fileupload("option","add",h),
$("#jButtons").hide()},u=function(){$(".jHidding").removeClass("hidden"),$("#btSave").removeAttr("disabled"),
$(".jImgSimpleUploadForm").fileupload("option","add",g),$("#jButtons").show()};return c;
}();