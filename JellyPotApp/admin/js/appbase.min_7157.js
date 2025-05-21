var BetJs;BetJs||(BetJs={}),function(){BetJs.Utils={},BetJs.Utils.ArrIndexOf=function(a,b){
for(var c=-1,d=0;d<a.length;++d)a[d]===b&&(c=d,d=a.length);return c},BetJs.Utils.ArrContains=function(a,b){
for(var c=0;c<a.length;++c)if(a[c]===b)return!0;return!1},BetJs.Utils.ArrRemove=function(a,b){
if(b>=0&&b<a.length){for(var c=b+1;c<a.length;++c)a[c-1]=a[c];a.length=a.length-1;
}},BetJs.Utils.ArrJoin=function(a,b){for(var c=0;c<b.length;++c)a.push(b[c])},BetJs.Utils.PxValue=function(a){
return Number(a.substr(0,a.length-2))},BetJs.Utils.BitArray=function(a){this.value=Number(a);
},BetJs.Utils.BitArray.prototype={Set:function(a,b){void 0===b&&(b=!0),b=!!b,b===!1&&(this.value&a)>0&&(this.value-=a),
b===!0&&0===(this.value&a)&&(this.value+=a)},Unset:function(a){this.Set(a,0)},Negate:function(a){
(this.value&a)>0?this.value-=a:this.value+=a},Get:function(a){return(this.value&a)>0;
},SetB:function(a,b){this.Set(Math.pow(2,a),b)},UnsetB:function(a){this.Set(Math.pow(2,a),0);
},NegateB:function(a){this.Negate(Math.pow(2,a))},GetB:function(a){return this.Get(Math.pow(2,a));
},value:0},BetJs.Utils.ComboGet=function(a){for(var b=0,c=0;c<a.length;++c)a[c].selected&&(b=a[c].value,
c=a.length);return b},BetJs.Utils.ComboGetIndex=function(a){for(var b=-1,c=0;c<a.length;++c)a[c].selected&&(b=c,
c=a.length);return b},BetJs.Utils.ComboGetText=function(a){for(var b=0,c=0;c<a.length;++c)a[c].selected&&(b=a[c].text,
c=a.length);return b},BetJs.Utils.ComboSet=function(a,b){for(var c=0;c<a.length;++c)a[c].value.toString()===b.toString()&&(a[c].selected=!0,
c=a.length)},BetJs.Utils.RadioIni=function(a){BetJs.Utils.RadioSet(a,document.forms[0][a].value);
},BetJs.Utils.Radio=function(a){var b=a.name.substr(1);document.forms[0][b].value=a.value;
},BetJs.Utils.RadioSet=function(a,b){for(var c=!1,d=0;d<document.forms[0]["r"+a].length;++d)if(document.forms[0]["r"+a][d].value.toString()===b.toString()){
document.forms[0]["r"+a][d].checked=!0,c=!0;break}c&&(document.forms[0][a].value=b);
},BetJs.Utils.Check=function(a){var b=document.forms[0][a];b.disabled||(b.checked=!b.checked,
b.onclick&&b.onclick(),b.onchange&&b.onchange())},BetJs.Utils.ScrollIntoView=function(a,b){
b||(b=0);var c=$(window).innerHeight(),d=$(window).scrollTop(),e=a.offset().top,f=a.outerHeight(!0)+e;
if(!(e>d+b&&f<d+c-b)){var g=!1;f-e>c-b&&(g=!0),e<d&&(g=!0),g?window.scrollTo(0,e-b):window.scrollTo(0,f-c+b);
}},BetJs.Utils.URLencode=function(a){return a=escape(a),a=a.replace(/\*/g,"%2a"),
a=a.replace(/\+/g,"%2b"),a=a.replace(/-/g,"%2d"),a=a.replace(/\./g,"%2e"),a=a.replace(/\//g,"%2f"),
a=a.replace(/@/g,"%40"),a=a.replace(/_/g,"%5f")},BetJs.Utils.OnEnter=function(a,b,c){
if(13===b.keyCode){if(void 0!==a.isValid&&!a.isValid)return;c&&c.call()}},BetJs.Utils.SaveCookie=function(a,b,c){
var d;if(c){var e=new Date;e.setTime(e.getTime()+1e3*c),d="; expires="+e.toGMTString();
}else d="";document.cookie=a+"="+b+d+"; path=/"},BetJs.Utils.GetCookie=function(a){
for(var b=document.cookie.split(";"),c=0;c<b.length;c++){for(var d=b[c];" "===d.charAt(0);)d=d.substring(1,d.length);
if(0===d.indexOf(a+"="))return d.substring(a.length+1,d.length)}},BetJs.Utils.DeleteCookie=function(a){
BetJs.Utils.SaveCookie(a,"",-86400)},BetJs.Utils.ObjectExists=function(a){for(var b=window,c=a.split("."),d=0;d<c.length;++d){
if(!b[c[d]])return!1;b=b[c[d]]}return!0},BetJs.Utils.GetObjectByName=function(a){
for(var b=window,c=a.split("."),d=0;d<c.length;++d){if(!b[c[d]])return;b=b[c[d]]}
return b},BetJs.Utils.RunFunction=function(a,b){for(var c=window,d=a.split("."),e=0;e<d.length;++e){
if(!c[d[e]])return;c=c[d[e]]}var f=typeof c;if("function"===f){for(var g=[],h=1;h<arguments.length;++h)g.push(arguments[h]);
return c.apply(c,g)}}}();var BetJs;BetJs||(BetJs={}),BetJs.Browsers=function(){var a={};
return a.bbChrome=navigator.userAgent.indexOf("Chrome")>-1,a.bbWin=navigator.userAgent.indexOf("Windows")>-1,
a.bbHttps="https:"===document.location.protocol,a.ClearSelection=function(){window.getSelection?window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges():document.selection&&document.selection.empty&&document.selection.empty();
},a.IsFunction=function(a){var b=typeof a;if("object"===b)throw"Is not possible use object as function.";
return"function"===b},a.RunFunction=function(a,b){for(var c=window,d=a.split("."),e=0;e<d.length;++e){
if(!c[d[e]])return;c=c[d[e]]}return c(b)},a.WindowStop=function(a){a||(a=window),
window.stop?a.stop():document.execCommand&&a.document.execCommand("Stop")},a.DetectXhr=function(){
var a=!0;try{new window.XMLHttpRequest}catch(b){a=!1}return a},a.DetectXhr2=function(){
var a=!1;try{"withCredentials"in new XMLHttpRequest&&(a=!0)}catch(a){}return a},a.DetectBlob=function(){
var a=!1;return"undefined"!=typeof Blob&&(a=!0),a},a}();var BetJs;!function(a){var b;
!function(b){function c(a,b){var c=void 0===b?window:a,d=void 0===b?a:b,e=c[d+"Anames"];
if(e)return e.GetIdxByName=function(a){for(var b=-1,c=!1,d=0;d<this.length;++d)if(c="number"==typeof this[d]?this[d]===Number(a):this[d]===a){
b=d;break}return b},e}function d(a,b){var c=void 0===b?window:a,d=void 0===b?a:b,e=c[d+"Alevels"];
if(e)return e.IsLast=function(a){if(a+1===this.length)return!0;var b=this[a]+1!==this[a+1];
return b},e.GetParentIdx=function(a){var b=this[a];if(b>0){var c=void 0;for(c=a-1;this[c]>b-1;--c);
return c}return-1},e}function e(a,b){var c=void 0===b?window:a,e=void 0===b?a:b,f=c[e+"Astate"];
if(f)return f.IsVisible=function(a){var b=d(e),c=a;do if(c=b.GetParentIdx(c),c!=-1&&0==this[c])return!1;while(c!=-1);
return!0},f}function f(a,b){var c=void 0===b?window:a,d=void 0===b?a:b;return c[d+"Atypes"]||(c[d+"Atypes"]=[]),
c[d+"Atypes"]}function g(a,b){var c=void 0===b?window:a,d=void 0===b?a:b;return c[d+"Asel"]||(c[d+"Asel"]=[]),
c[d+"Asel"]}function h(c,d){var e,f,h,i,j;if("string"==typeof c)j=c;else{var k=b.GetRowID(c);
j=k.name}var l=$(".x"+j+"-sum"),m=[],n=[],o=[];for(e=0;e<l.length;++e)m[e]=a.Tables.GetCellIndex(l[e]),
n[e]=0,o[e]="cislo";var p=d?d:g(j);if(p.length>0){for(e=0;e<p.length;++e){var q=document.getElementById(j+"-"+p[e]);
if(q)for(f=0;f<m.length;++f)m[f]>=0&&(h=a.Decimals.ConvToDec(q.cells[m[f]].innerHTML),
isNaN(h)&&(h=a.Decimals.ConvToDec($(q.cells[m[f]]).text())),isNaN(h)&&a.Utils.ObjectExists("BetJs.Date.Doba.Parse")&&(i=a.Date.Doba.Parse(q.cells[m[f]].innerHTML),
h=i===!1?NaN:i,isNaN(h)&&(i=a.Date.Doba.Parse($(q.cells[m[f]]).text()),h=i===!1?NaN:i),
isNaN(h)||(o[f]="doba")),isNaN(h)&&(h=0),n[f]+=h)}for(f=0;f<l.length;++f){var r=$(l[f]).attr("data-sumFormat");
if(r&&(o[f]=r),"doba"===o[f])l[f].innerHTML=a.Date.Doba.Format(n[f]);else{var s=Number($(l[f]).attr("data-precision"));
(void 0===s||isNaN(s))&&(s=2),l[f].innerHTML=a.Decimals.Format(n[f],s)}}}else for(f=0;f<l.length;++f)l[f].innerHTML=" ";
}function i(a){var b=c(a),f=e(a),g=d(a);if(!f&&!g)return"";for(var h=[],i=0;i<f.length;++i)if(1===f[i]){
for(var j=b[i],m=i;(m=g.GetParentIdx(m))>-1;)j=b[m]+l()+j;h.push(j)}return h.join(k());
}b.btabSep="^^",b.btabSingleSep="^",b.selectedClass="oznac";var j="jCollapsedRow",k=function(){
return b.btabSep},l=function(){return b.btabSingleSep},m=function(){return b.selectedClass;
};b.NameArray=c,b.LevelArray=d,b.StateArray=e,b.TypesArray=f,b.SelectionArray=g;var n=function(){
function a(a,b){this.name=a,this.number=Number(b)}return a.prototype.SelectRow=function(a,b){
var c,d=g(this.name);if(a){var e=!1;for(c=0;c<d.length;++c)d[c]===this.number&&(e=!0),
$("#"+this.name+"-"+d[c]).removeClass(m());b&&e?d.length=0:(d.length=1,d[0]=this.number,
$("#"+this.name+"-"+this.number).addClass(m()))}else{var f=!1,h=d.length;for(c=0;c<h;++c)f&&(d[c-1]=d[c]),
d[c]===this.number&&(f=!0);f?(d.length=h-1,$("#"+this.name+"-"+this.number).removeClass(m())):(d[h]=this.number,
$("#"+this.name+"-"+this.number).addClass(m()))}},a.prototype.SelectRowF=function(){
var a,b=g(this.name),c=!1,d=b.length;for(a=0;a<d;++a)c&&(b[a-1]=b[a]),b[a]===this.number&&(c=!0);
c?(b.length=d-1,b[d]=this.number):(b[d]=this.number,$("#"+this.name+"-"+b[a]).addClass(m()));
},a.prototype.Toggle=function(b){var c=e(this.name),f=d(this.name);if(c[this.number]>0){
var g=f[this.number],h=this.number+1;for(this.ChangeIconStyle("s1");f[h]>g;)f[h]===g+1&&($("#"+this.name+"-"+h).removeClass(j),
f.IsLast(h)||(b&&0===c[h]&&(c[h]=1),c[h]>0&&new a(this.name,h).Toggle(b))),++h}else this.ChangeIconStyle("s0"),
this.HideGroup(b)},a.prototype.HideGroup=function(b){for(var c=this.number+1,f=e(this.name),g=d(this.name),h=g[this.number];g[c]>h;)g[c]===h+1&&($("#"+this.name+"-"+c).addClass(j),
f[c]>0&&!g.IsLast(c)&&(b&&1===f[c]&&(new a(this.name,c).ChangeIconStyle("s0"),f[c]=0),
new a(this.name,c).HideGroup(b))),++c},a.prototype.ChangeIconStyle=function(a){$("#groupIcon-"+this.name+"-"+this.number).removeClass("s0").removeClass("s1").removeClass("s2").addClass(a);
},a}();b.RowName=n,b.GetRowID=function(a){for(;a;){if(a.id){var b=a.id.split("-");
if(2===b.length)return new n(b[0],Number(b[1]));if(3===b.length)return new n(b[1],Number(b[2]));
}a=a.parentNode}return new n("",-1)},b.ParseRowID=function(a){var b=a.split("-");return 2===b.length?new n(b[0],Number(b[1])):3===b.length?new n(b[1],Number(b[2])):new n("",-1);
},b.Select=function(c,d,e){var f=b.GetRowID(c),h=!1,i=g(f.name);if(d&&(d.ctrlKey||d.metaKey)&&(a.Browsers.ClearSelection(),
f.SelectRow(!1),h=!0),d&&d.shiftKey&&(a.Browsers.ClearSelection(),i.length>0)){var j=i[0],k=f.number;
if(j!==k){var l=void 0,m=window[f.name+"OnShiftSelect"];if(a.Browsers.IsFunction(m)||"string"==typeof m&&(m=a.Utils.GetObjectByName(m)),
e&&e.OnShiftSelect&&(m=e.OnShiftSelect),l=a.Browsers.IsFunction(m)?m(j,k,f.name):b.ShiftSelect(j,k),
new n(f.name,i[0]).SelectRow(!0),l&&l.length)for(var o=0;o<l.length;++o)new n(f.name,l[o]).SelectRow(!1);
h=!0}}if(!h){var p=!1;e&&e.s&&(p=!0),f.SelectRow(!0,p)}b.SaveSelected(f.name)},b.Select2=function(a,c){
b.Select(a,c,{s:!0})},b.SelectSingle=function(c,d){var e=b.GetRowID(c);d&&(d.ctrlKey||d.metaKey)&&a.Browsers.ClearSelection(),
d&&d.shiftKey&&a.Browsers.ClearSelection(),e.SelectRow(!0),b.SaveSelected(e.name);
},b.SelectSimple=function(c,d){var e=b.GetRowID(c);d&&(d.ctrlKey||d.metaKey)&&a.Browsers.ClearSelection(),
d&&d.shiftKey&&a.Browsers.ClearSelection(),e.SelectRow(!1),b.SaveSelected(e.name);
},b.SelectForced=function(c,d){var e=b.GetRowID(c);d&&(d.ctrlKey||d.metaKey)&&a.Browsers.ClearSelection(),
d&&d.shiftKey&&a.Browsers.ClearSelection(),e.SelectRowF(),b.SaveSelected(e.name)},
b.SelectForced2=function(c,d){var e=b.GetRowID(c);a.Browsers.ClearSelection(),e.SelectRowF(),
b.SaveSelected(e.name)},b.SelectWithStartDrag=function(c,d){var e=b.GetRowID(c);d&&(d.ctrlKey||d.metaKey)&&a.Browsers.ClearSelection(),
d&&d.shiftKey&&a.Browsers.ClearSelection();for(var f=g(e.name),h=!1,i=0;i<f.length;++i)if(f[i]===e.number){
h=!0;break}if(!h){var j=d&&(d.ctrlKey||d.metaKey);e.SelectRow(!j)}b.SaveSelected(e.name);
},b.GetSelected=function(a){return b.GetSelectedIDs(a).join(k())},b.GetSelectedIDs=function(a){
for(var d=c(a),e=b.GetSortedSelectedIdxs(a),f=[],g=0;g<e.length;++g)f.push(d[e[g]]);
return f},b.GetSortedSelectedIdxs=function(b){for(var c=a.Tables.SelectionArray(b),d=[],e=0;e<c.length;++e)d[e]=Number(c[e]);
return d.sort(function(a,b){return a-b}),d},b.SaveSelected=function(a){document.forms[0]&&document.forms[0][a+"Selected"]&&(document.forms[0][a+"Selected"].value=b.GetSelected(a));
},b.SetSelected=function(a,d){var e,f=c(a),h=g(a),i=!0;if(void 0===d&&document.forms[0]){
var j=document.forms[0][a+"Selected"];j&&(d=document.forms[0][a+"Selected"].value),
i=!1}for(e=0;e<h.length;++e)$("#"+a+"-"+h[e]).removeClass(m());h.length=0;var l=[];
for(void 0!==d&&(d=d.toString()),void 0!==d&&""!==d&&(l=d.split(k())),e=0;e<l.length;++e){
var n=f.GetIdxByName(l[e]);if(n>=0){$("#"+a+"-"+n).addClass(m());var o=h.length;h[o]=n;
}}i&&b.SaveSelected(a)},b.UnselectAll=function(a){b.SetSelected(a,"")},b.ShiftSelect=function(a,b){
var c=[],d=1;for(b<a&&(d=-1),a+=d;a!==b;a+=d)c.push(a);return c.push(b),c},b.SumSelected=h,
b.GetCellIndex=function(a){var b=$(a).closest("td, th")[0],c=$(a).closest("tr")[0];
if(!b||!c)return-1;for(var d=-1,e=0;e<=b.cellIndex;++e)d+=c.cells[e].colSpan;return d+=1-b.colSpan;
},b.ShowGroup=function(c,d){var f=b.GetRowID(c),g=e(f.name);g[f.number]<2&&(g[f.number]=1-g[f.number],
f.Toggle(d.ctrlKey||d.metaKey),b.AfterChange(f.name,d)),a.Browsers.ClearSelection();
},b.CollapseAll=function(a){var c=e(a),f=d(a);if(c||f){for(var g=0;g<c.length;++g)0===f[g]&&(c[g]=0,
new n(a,g).Toggle(!0));b.AfterChange(a)}},b.ColapseToFirst=function(a){var c=e(a),f=d(a);
if(c||f){for(var g=1;g<c.length;++g)1===f[g]&&2!==c[g]&&(c[g]=0,new n(a,g).Toggle(!0));
b.AfterChange(a)}},b.ExpandAll=function(a){var c=e(a),f=d(a);if(c||f){for(var g=0;g<c.length;++g)0===f[g]&&2!==c[g]&&(c[g]=1,
new n(a,g).Toggle(!0));b.AfterChange(a)}},b.GetExpanded=i,b.GetCollapsed=function(a){
var b=c(a),f=e(a),g=d(a);if(!f&&!g)return"";for(var h=[],i=0;i<f.length;++i)if(0===f[i]){
for(var j=b[i],m=i;(m=g.GetParentIdx(m))>-1;)j=b[m]+l()+j;h.push(j)}return h.join(k());
},b.ShowRow=function(a,c){var f=d(a),g=e(a),h=f[c]-1;do f[c]===h&&(--h,0===g[c]&&(g[c]=1,
new n(a,c).Toggle(!1))),--c;while(h>=0);b.AfterChange(a)},b.IsTableDefined=function(a){
return null!==document.getElementById(a+"-0")},b.AfterChange=function(b,c){var d=window[b+"OnChange"];
if(a.Browsers.IsFunction(d)||"string"==typeof d&&(d=a.Utils.GetObjectByName(d)),a.Browsers.IsFunction(d)){
var e=new o(b,i(b),c);d(e)}};var o=function(){function a(a,b,c){this.name=a,this.expanded=b,
this.event=c}return a}();b.OnChangeVisibilityArgs=o}(b=a.Tables||(a.Tables={}))}(BetJs||(BetJs={}));