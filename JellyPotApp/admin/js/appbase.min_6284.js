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
b.onclick&&b.onclick(),b.onchange&&b.onchange())},BetJs.Utils.URLencode=function(a){
return a=escape(a),a=a.replace(/\*/g,"%2a"),a=a.replace(/\+/g,"%2b"),a=a.replace(/-/g,"%2d"),
a=a.replace(/\./g,"%2e"),a=a.replace(/\//g,"%2f"),a=a.replace(/@/g,"%40"),a=a.replace(/_/g,"%5f");
},BetJs.Utils.OnEnter=function(a,b,c){if(13===b.keyCode){if(void 0!==a.isValid&&!a.isValid)return;
c&&c.call()}},BetJs.Utils.SaveCookie=function(a,b,c){var d;if(c){var e=new Date;e.setTime(e.getTime()+1e3*c),
d="; expires="+e.toGMTString()}else d="";document.cookie=a+"="+b+d+"; path=/"},BetJs.Utils.GetCookie=function(a){
for(var b=document.cookie.split(";"),c=0;c<b.length;c++){for(var d=b[c];" "===d.charAt(0);)d=d.substring(1,d.length);
if(0===d.indexOf(a+"="))return d.substring(a.length+1,d.length)}},BetJs.Utils.DeleteCookie=function(a){
BetJs.Utils.SaveCookie(a,"",-86400)}}();var BetJs;BetJs||(BetJs={}),BetJs.Browsers=function(){
var a={};return a.bbChrome=navigator.userAgent.indexOf("Chrome")>-1,a.bbWin=navigator.userAgent.indexOf("Windows")>-1,
a.bbHttps="https:"===document.location.protocol,a.ClearSelection=function(){window.getSelection?window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges():document.selection&&document.selection.empty&&document.selection.empty();
},a.IsFunction=function(a){var b=typeof a;if("object"===b)throw"Is not possible use object as function.";
return"function"===b},a.Exists=function(a){for(var b=window,c=a.split("."),d=0;d<c.length;++d){
if(!b[c[d]])return!1;b=b[c[d]]}return!0},a.RunFunction=function(a,b){for(var c=window,d=a.split("."),e=0;e<d.length;++e){
if(!c[d[e]])return;c=c[d[e]]}return c(b)},a.DetectXhr=function(){var a=!0;try{new window.XMLHttpRequest;
}catch(b){a=!1}return a},a.DetectXhr2=function(){var a=!1;try{"withCredentials"in new XMLHttpRequest&&(a=!0);
}catch(a){}return a},a.DetectBlob=function(){var a=!1;return"undefined"!=typeof Blob&&(a=!0),
a},a}();var BetJs;BetJs||(BetJs={}),BetJs.Tables=function(){var a={};a.btabSep="^^",
a.btabSingleSep="^",a.selectedClass="oznac";var b=function(){return a.btabSep},c=function(){
return a.btabSingleSep},d=function(){return a.selectedClass};return a.NameArray=function(a,b){
1===arguments.length&&(b=a,a=window);var c=a[b+"Anames"];if(c)return c.GetIdxByName=function(a){
for(var b=-1,c=0;c<this.length;++c)if(this[c]===a){b=c;break}return b},c},a.StateArray=function(a,b){
1===arguments.length&&(b=a,a=window);var c=a[b+"Astate"];return c},a.LevelArray=function(a,b){
1===arguments.length&&(b=a,a=window);var c=a[b+"Alevels"];if(c)return c.IsLast=function(a){
if(a+1===this.length)return!0;var b=this[a]+1!==this[a+1];return b},c.GetParentIdx=function(a){
var b=this[a];if(b>0){for(var c=a-1;this[c]>b-1;--c);return c}return-1},c.GetParent=function(a){
return this.GetParentIdx(a)},c},a.SelectionArray=function(a,b){return 1===arguments.length&&(b=a,
a=window),a[b+"Asel"]||(a[b+"Asel"]=new Array(0)),a[b+"Asel"]},a.RowName=function(a,b){
this.name=a,this.number=Number(b)},a.RowName.prototype={name:void 0,number:void 0,
SelectRow:function(b,c){var e,f=a.SelectionArray(this.name);if(b){var g=!1;for(e=0;e<f.length;++e)f[e]===this.number&&(g=!0),
$("#"+this.name+"-"+f[e]).removeClass(d());c&&g?f.length=0:(f.length=1,f[0]=this.number,
$("#"+this.name+"-"+this.number).addClass(d()))}else{var h=!1,i=f.length;for(e=0;e<i;++e)h&&(f[e-1]=f[e]),
f[e]===this.number&&(h=!0);h?(f.length=i-1,$("#"+this.name+"-"+this.number).removeClass(d())):(f[i]=this.number,
$("#"+this.name+"-"+this.number).addClass(d()))}},SelectRowF:function(){for(var b=a.SelectionArray(this.name),c=!1,e=b.length,f=0;f<e;++f)c&&(b[f-1]=b[f]),
b[f]===this.number&&(c=!0);c?(b.length=e-1,b[e]=this.number):(b[e]=this.number,$("#"+this.name+"-"+b[f]).addClass(d()));
},Toggle:function(b){var c=a.StateArray(this.name),d=a.LevelArray(this.name);if(c[this.number]>0){
var e=d[this.number],f=this.number+1;for(this.ChangeIconStyle("s1");d[f]>e;)d[f]===e+1&&($("#"+this.name+"-"+f).show(),
d.IsLast(f)||(b&&0===c[f]&&(c[f]=1),c[f]>0&&new a.RowName(this.name,f).Toggle(b))),
++f}else this.ChangeIconStyle("s0"),this.HideGroup(b)},HideGroup:function(b){for(var c=this.number+1,d=a.StateArray(this.name),e=a.LevelArray(this.name),f=e[this.number];e[c]>f;)e[c]===f+1&&($("#"+this.name+"-"+c).hide(),
d[c]>0&&!e.IsLast(c)&&(b&&1===d[c]&&(new a.RowName(this.name,c).ChangeIconStyle("s0"),
d[c]=0),new a.RowName(this.name,c).HideGroup(b))),++c},ChangeIconStyle:function(a){
$("#groupIcon-"+this.name+"-"+this.number).removeClass("s0").removeClass("s1").removeClass("s2").addClass(a);
}},a.GetRowID=function(b){for(;b;){if(b.id){var c=b.id.split("-");if(2===c.length)return new a.RowName(c[0],c[1]);
if(3===c.length)return new a.RowName(c[1],c[2])}b=b.parentNode}return new a.RowName("",-1);
},a.ParseRowID=function(b){var c=b.split("-");return 2===c.length?new a.RowName(c[0],c[1]):3===c.length?new a.RowName(c[1],c[2]):new a.RowName("",-1);
},a.Select=function(b,c,d){var e=a.GetRowID(b),f=!1,g=a.SelectionArray(e.name);if(c&&(c.ctrlKey||c.metaKey)&&(BetJs.Browsers.ClearSelection(),
e.SelectRow(!1),f=!0),c&&c.shiftKey&&(BetJs.Browsers.ClearSelection(),g.length>0)){
var h=g[0],i=e.number;if(h!==i){var j,k=window[e.name+"OnShiftSelect"];if(BetJs.Browsers.IsFunction(k)||"string"==typeof k&&(k=window[k]),
d&&d.OnShiftSelect&&(k=d.OnShiftSelect),j=BetJs.Browsers.IsFunction(k)?k(h,i,e.name):a.ShiftSelect(h,i),
new a.RowName(e.name,g[0]).SelectRow(!0),j&&j.length)for(var l=0;l<j.length;++l)new a.RowName(e.name,j[l]).SelectRow(!1);
f=!0}}if(!f){var m=!1;d&&d.s&&(m=!0),e.SelectRow(!0,m)}a.SaveSelected(e.name)},a.Select2=function(b,c){
a.Select(b,c,{s:!0})},a.SelectSingle=function(b,c){var d=a.GetRowID(b);c&&(c.ctrlKey||c.metaKey)&&BetJs.Browsers.ClearSelection(),
c&&c.shiftKey&&BetJs.Browsers.ClearSelection(),d.SelectRow(!0),a.SaveSelected(d.name);
},a.SelectSimple=function(b,c){var d=a.GetRowID(b);c&&(c.ctrlKey||c.metaKey)&&BetJs.Browsers.ClearSelection(),
c&&c.shiftKey&&BetJs.Browsers.ClearSelection(),d.SelectRow(!1),a.SaveSelected(d.name);
},a.SelectForced=function(b,c){var d=a.GetRowID(b);c&&(c.ctrlKey||c.metaKey)&&BetJs.Browsers.ClearSelection(),
c&&c.shiftKey&&BetJs.Browsers.ClearSelection(),d.SelectRowF(),a.SaveSelected(d.name);
},a.SelectForced2=function(b){var c=a.GetRowID(b);BetJs.Browsers.ClearSelection(),
c.SelectRowF(),a.SaveSelected(c.name)},a.SelectWithStartDrag=function(b,c){var d=a.GetRowID(b);
c&&(c.ctrlKey||c.metaKey)&&BetJs.Browsers.ClearSelection(),c&&c.shiftKey&&BetJs.Browsers.ClearSelection();
for(var e=a.SelectionArray(d.name),f=!1,g=0;g<e.length;++g)if(e[g]===d.number){f=!0;
break}if(!f){var h=c&&(c.ctrlKey||c.metaKey);d.SelectRow(!h)}a.SaveSelected(d.name);
},a.GetSelected=function(c){return a.GetSelectedIDs(c).join(b())},a.GetSelectedIDs=function(b){
for(var c=a.NameArray(b),d=a.GetSortedSelectedIdxs(b),e=[],f=0;f<d.length;++f)e.push(c[d[f]]);
return e},a.GetSortedSelectedIdxs=function(a){for(var b=BetJs.Tables.SelectionArray(a),c=[],d=0;d<b.length;++d)c[d]=Number(b[d]);
return c.sort(function(a,b){return a-b}),c},a.SaveSelected=function(b){document.forms[0]&&document.forms[0][b+"Selected"]&&(document.forms[0][b+"Selected"].value=a.GetSelected(b));
},a.SetSelected=function(c,e){var f,g=a.NameArray(c),h=a.SelectionArray(c),i=!0;if(void 0===e&&document.forms[0]){
var j=document.forms[0][c+"Selected"];j&&(e=document.forms[0][c+"Selected"].value),
i=!1}for(f=0;f<h.length;++f)$("#"+c+"-"+h[f]).removeClass(d());h.length=0;var k=[];
for(void 0!==e&&(e=e.toString()),void 0!==e&&""!==e&&(k=e.split(b())),f=0;f<k.length;++f){
var l=g.GetIdxByName(Number(k[f]));if(l>=0){$("#"+c+"-"+l).addClass(d());var m=h.length;
h[m]=l}}i&&a.SaveSelected(c)},a.UnselectAll=function(b){a.SetSelected(b,"")},a.ShiftSelect=function(a,b){
var c=new Array(0),d=1;for(b<a&&(d=-1),a+=d;a!==b;a+=d)c.push(a);return c.push(b),
c},a.SumSelected=function(b){var c,d,e;if("string"==typeof b)e=b;else{var f=a.GetRowID(b);
e=f.name}var g=$(".x"+e+"-sum"),h=[];for(c=0;c<g.length;++c)h[c]=BetJs.Tables.GetCellIndex(g[c]);
var i=[];for(c=0;c<h.length;++c)i[c]=0;var j=[];for(c=0;c<h.length;++c)j[c]="cislo";
var k=a.SelectionArray(e);if(k.length>0){for(c=0;c<k.length;++c){var l=document.getElementById(e+"-"+k[c]);
if(l)for(d=0;d<h.length;++d)if(h[d]>=0){var m=BetJs.Decimals.ConvToDec(l.cells[h[d]].innerHTML);
isNaN(m)&&$&&(m=BetJs.Decimals.ConvToDec($(l.cells[h[d]]).text())),isNaN(m)&&BetJs.Browsers.Exists("BetJs.Date.Doba.Parse")&&(m=BetJs.Date.Doba.Parse(l.cells[h[d]].innerHTML),
isNaN(m)||(j[d]="doba")),isNaN(m)&&(m=0),i[d]+=m}}for(d=0;d<g.length;++d){if($){var n=$(g[d]).attr("data-sumFormat");
n&&(j[d]=n)}if("doba"===j[d])g[d].innerHTML=BetJs.Date.Doba.Format(i[d]);else{var o=BetJs.Decimals.GetPrecision(g[d]);
g[d].innerHTML=BetJs.Decimals.Format(i[d],o)}}}else for(d=0;d<g.length;++d)g[d].innerHTML=" ";
},a.GetCellIndex=function(a){var b=$(a).closest("td, th")[0],c=$(a).closest("tr")[0];
if(!b||!c)return-1;for(var d=-1,e=0;e<=b.cellIndex;++e)d+=c.cells[e].colSpan;return d+=1-b.colSpan;
},a.ShowGroup=function(b,c){var d=a.GetRowID(b),e=a.StateArray(d.name);e[d.number]<2&&(e[d.number]=1-e[d.number],
d.Toggle(c.ctrlKey||c.metaKey),a.AfterChange(d.name,c)),BetJs.Browsers.ClearSelection();
},a.CollapseAll=function(b){for(var c=a.StateArray(b),d=a.LevelArray(b),e=0;e<c.length;++e)0===d[e]&&(c[e]=0,
new a.RowName(b,e).Toggle(!0));a.AfterChange(b)},a.ColapseToFirst=function(b){for(var c=a.StateArray(b),d=a.LevelArray(b),e=1;e<c.length;++e)1===d[e]&&2!==c[e]&&(c[e]=0,
new a.RowName(b,e).Toggle(!0));a.AfterChange(b)},a.ExpandAll=function(b){for(var c=a.StateArray(b),d=a.LevelArray(b),e=0;e<c.length;++e)0===d[e]&&2!==c[e]&&(c[e]=1,
new a.RowName(b,e).Toggle(!0));a.AfterChange(b)},a.GetExpanded=function(d){for(var e=a.NameArray(d),f=a.StateArray(d),g=a.LevelArray(d),h=new Array(0),i=0;i<f.length;++i)if(1===f[i]){
for(var j=e[i],k=i;(k=g.GetParent(k))>-1;)j=e[k]+c()+j;h.push(j)}return h.join(b());
},a.ShowRow=function(b,c){var d=a.LevelArray(b),e=a.StateArray(b),f=d[c]-1;do d[c]===f&&(--f,
0===e[c]&&(e[c]=1,new a.RowName(b,c).Toggle(!1))),--c;while(f>=0);a.AfterChange(b);
},a.IsTableDefined=function(a){return document.getElementById(a+"-0")},a.AfterChange=function(b,c){
var d=window[b+"OnChange"];if(BetJs.Browsers.IsFunction(d)||"string"==typeof d&&(d=window[d]),
BetJs.Browsers.IsFunction(d)){var e=new a.ChangeEvent(b,a.GetExpanded(b),c);d(e)}
},a.ChangeEvent=function(a,b,c){this.name=a,this.expanded=b,this.event=c},a}();