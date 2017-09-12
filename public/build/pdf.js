/* Copyright 2012 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!function(t,e){"use strict"
"function"==typeof define&&define.amd?define("pdfjs-dist/build/pdf",["exports"],e):e("undefined"!=typeof exports?exports:t.pdfjsDistBuildPdf={})}(this,function(t){"use strict"
var e="undefined"!=typeof document&&document.currentScript?document.currentScript.src:null,n={};(function(){!function(t,e){!function(t){function e(t){Z=t}function n(){return Z}function i(t){Z>=Q.infos&&console.log("Info: "+t)}function r(t){Z>=Q.warnings&&console.log("Warning: "+t)}function a(t){console.log("Deprecated API usage: "+t)}function s(t){throw Z>=Q.errors&&(console.log("Error: "+t),console.log(o())),new Error(t)}function o(){try{throw new Error}catch(t){return t.stack?t.stack.split("\n").slice(2).join("\n"):""}}function c(t,e){t||s(e)}function l(t,e){try{var n=new URL(t)
if(!n.origin||"null"===n.origin)return!1}catch(t){return!1}var i=new URL(e,n)
return n.origin===i.origin}function h(t){if(!t)return!1
switch(t.protocol){case"http:":case"https:":case"ftp:":case"mailto:":case"tel:":return!0
default:return!1}}function u(t,e){if(!t)return null
try{var n=e?new URL(t,e):new URL(t)
if(h(n))return n}catch(t){}return null}function d(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!1}),n}function f(t){var e
return function(){return t&&(e=Object.create(null),t(e),t=null),e}}function p(t){return"string"!=typeof t?(r("The argument for removeNullCharacters must be a string."),t):t.replace(lt,"")}function g(t){c(null!==t&&"object"==typeof t&&void 0!==t.length,"Invalid argument for bytesToString")
var e=t.length
if(e<8192)return String.fromCharCode.apply(null,t)
for(var n=[],i=0;i<e;i+=8192){var r=Math.min(i+8192,e),a=t.subarray(i,r)
n.push(String.fromCharCode.apply(null,a))}return n.join("")}function m(t){c("string"==typeof t,"Invalid argument for stringToBytes")
for(var e=t.length,n=new Uint8Array(e),i=0;i<e;++i)n[i]=255&t.charCodeAt(i)
return n}function A(t){return void 0!==t.length?t.length:(c(void 0!==t.byteLength),t.byteLength)}function v(t){if(1===t.length&&t[0]instanceof Uint8Array)return t[0]
var e,n,i,r=0,a=t.length
for(e=0;e<a;e++)n=t[e],i=A(n),r+=i
var s=0,o=new Uint8Array(r)
for(e=0;e<a;e++)n=t[e],n instanceof Uint8Array||(n="string"==typeof n?m(n):new Uint8Array(n)),i=n.byteLength,o.set(n,s),s+=i
return o}function b(t){return String.fromCharCode(t>>24&255,t>>16&255,t>>8&255,255&t)}function y(t){for(var e=1,n=0;t>e;)e<<=1,n++
return n}function x(t,e){return t[e]<<24>>24}function S(t,e){return t[e]<<8|t[e+1]}function k(t,e){return(t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3])>>>0}function _(){var t=new Uint8Array(2)
return t[0]=1,1===new Uint16Array(t.buffer)[0]}function C(){try{return new Function(""),!0}catch(t){return!1}}function w(t){var e,n=t.length,i=[]
if("þ"===t[0]&&"ÿ"===t[1])for(e=2;e<n;e+=2)i.push(String.fromCharCode(t.charCodeAt(e)<<8|t.charCodeAt(e+1)))
else for(e=0;e<n;++e){var r=pt[t.charCodeAt(e)]
i.push(r?String.fromCharCode(r):t.charAt(e))}return i.join("")}function T(t){return decodeURIComponent(escape(t))}function L(t){return unescape(encodeURIComponent(t))}function P(t){for(var e in t)return!1
return!0}function E(t){return"boolean"==typeof t}function R(t){return"number"==typeof t&&(0|t)===t}function I(t){return"number"==typeof t}function D(t){return"string"==typeof t}function j(t){return t instanceof Array}function O(t){return"object"==typeof t&&null!==t&&void 0!==t.byteLength}function F(t){return 32===t||9===t||13===t||10===t}function M(){var t={}
return t.promise=new Promise(function(e,n){t.resolve=e,t.reject=n}),t}function N(t,e,n){this.sourceName=t,this.targetName=e,this.comObj=n,this.callbackIndex=1,this.postMessageTransfers=!0
var i=this.callbacksCapabilities=Object.create(null),r=this.actionHandler=Object.create(null)
this._onComObjOnMessage=function(t){var e=t.data
if(e.targetName===this.sourceName)if(e.isReply){var a=e.callbackId
if(e.callbackId in i){var o=i[a]
delete i[a],"error"in e?o.reject(e.error):o.resolve(e.data)}else s("Cannot resolve callback "+a)}else if(e.action in r){var c=r[e.action]
if(e.callbackId){var l=this.sourceName,h=e.sourceName
Promise.resolve().then(function(){return c[0].call(c[1],e.data)}).then(function(t){n.postMessage({sourceName:l,targetName:h,isReply:!0,callbackId:e.callbackId,data:t})},function(t){t instanceof Error&&(t+=""),n.postMessage({sourceName:l,targetName:h,isReply:!0,callbackId:e.callbackId,error:t})})}else c[0].call(c[1],e.data)}else s("Unknown action from worker: "+e.action)}.bind(this),n.addEventListener("message",this._onComObjOnMessage)}function U(t,e,n){var i=new Image
i.onload=function(){n.resolve(t,i)},i.onerror=function(){n.resolve(t,null),r("Error during JPEG image loading")},i.src=e}var B="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,W=[.001,0,0,.001,0,0],G={FILL:0,STROKE:1,FILL_STROKE:2,INVISIBLE:3,FILL_ADD_TO_PATH:4,STROKE_ADD_TO_PATH:5,FILL_STROKE_ADD_TO_PATH:6,ADD_TO_PATH:7,FILL_STROKE_MASK:3,ADD_TO_PATH_FLAG:4},X={GRAYSCALE_1BPP:1,RGB_24BPP:2,RGBA_32BPP:3},z={TEXT:1,LINK:2,FREETEXT:3,LINE:4,SQUARE:5,CIRCLE:6,POLYGON:7,POLYLINE:8,HIGHLIGHT:9,UNDERLINE:10,SQUIGGLY:11,STRIKEOUT:12,STAMP:13,CARET:14,INK:15,POPUP:16,FILEATTACHMENT:17,SOUND:18,MOVIE:19,WIDGET:20,SCREEN:21,PRINTERMARK:22,TRAPNET:23,WATERMARK:24,THREED:25,REDACT:26},H={INVISIBLE:1,HIDDEN:2,PRINT:4,NOZOOM:8,NOROTATE:16,NOVIEW:32,READONLY:64,LOCKED:128,TOGGLENOVIEW:256,LOCKEDCONTENTS:512},Y={READONLY:1,REQUIRED:2,NOEXPORT:4,MULTILINE:4096,PASSWORD:8192,NOTOGGLETOOFF:16384,RADIO:32768,PUSHBUTTON:65536,COMBO:131072,EDIT:262144,SORT:524288,FILESELECT:1048576,MULTISELECT:2097152,DONOTSPELLCHECK:4194304,DONOTSCROLL:8388608,COMB:16777216,RICHTEXT:33554432,RADIOSINUNISON:33554432,COMMITONSELCHANGE:67108864},V={SOLID:1,DASHED:2,BEVELED:3,INSET:4,UNDERLINE:5},q={UNKNOWN:0,FLATE:1,LZW:2,DCT:3,JPX:4,JBIG:5,A85:6,AHX:7,CCF:8,RL:9},J={UNKNOWN:0,TYPE1:1,TYPE1C:2,CIDFONTTYPE0:3,CIDFONTTYPE0C:4,TRUETYPE:5,CIDFONTTYPE2:6,TYPE3:7,OPENTYPE:8,TYPE0:9,MMTYPE1:10},Q={errors:0,warnings:1,infos:5},K={dependency:1,setLineWidth:2,setLineCap:3,setLineJoin:4,setMiterLimit:5,setDash:6,setRenderingIntent:7,setFlatness:8,setGState:9,save:10,restore:11,transform:12,moveTo:13,lineTo:14,curveTo:15,curveTo2:16,curveTo3:17,closePath:18,rectangle:19,stroke:20,closeStroke:21,fill:22,eoFill:23,fillStroke:24,eoFillStroke:25,closeFillStroke:26,closeEOFillStroke:27,endPath:28,clip:29,eoClip:30,beginText:31,endText:32,setCharSpacing:33,setWordSpacing:34,setHScale:35,setLeading:36,setFont:37,setTextRenderingMode:38,setTextRise:39,moveText:40,setLeadingMoveText:41,setTextMatrix:42,nextLine:43,showText:44,showSpacedText:45,nextLineShowText:46,nextLineSetSpacingShowText:47,setCharWidth:48,setCharWidthAndBounds:49,setStrokeColorSpace:50,setFillColorSpace:51,setStrokeColor:52,setStrokeColorN:53,setFillColor:54,setFillColorN:55,setStrokeGray:56,setFillGray:57,setStrokeRGBColor:58,setFillRGBColor:59,setStrokeCMYKColor:60,setFillCMYKColor:61,shadingFill:62,beginInlineImage:63,beginImageData:64,endInlineImage:65,paintXObject:66,markPoint:67,markPointProps:68,beginMarkedContent:69,beginMarkedContentProps:70,endMarkedContent:71,beginCompat:72,endCompat:73,paintFormXObjectBegin:74,paintFormXObjectEnd:75,beginGroup:76,endGroup:77,beginAnnotations:78,endAnnotations:79,beginAnnotation:80,endAnnotation:81,paintJpegXObject:82,paintImageMaskXObject:83,paintImageMaskXObjectGroup:84,paintImageXObject:85,paintInlineImageXObject:86,paintInlineImageXObjectGroup:87,paintImageXObjectRepeat:88,paintImageMaskXObjectRepeat:89,paintSolidColorImageMask:90,constructPath:91},Z=Q.warnings,$={unknown:"unknown",forms:"forms",javaScript:"javaScript",smask:"smask",shadingPattern:"shadingPattern",font:"font"},tt={NEED_PASSWORD:1,INCORRECT_PASSWORD:2},et=function(){function t(t,e){this.name="PasswordException",this.message=t,this.code=e}return t.prototype=new Error,t.constructor=t,t}(),nt=function(){function t(t,e){this.name="UnknownErrorException",this.message=t,this.details=e}return t.prototype=new Error,t.constructor=t,t}(),it=function(){function t(t){this.name="InvalidPDFException",this.message=t}return t.prototype=new Error,t.constructor=t,t}(),rt=function(){function t(t){this.name="MissingPDFException",this.message=t}return t.prototype=new Error,t.constructor=t,t}(),at=function(){function t(t,e){this.name="UnexpectedResponseException",this.message=t,this.status=e}return t.prototype=new Error,t.constructor=t,t}(),st=function(){function t(t){this.message=t}return t.prototype=new Error,t.prototype.name="NotImplementedException",t.constructor=t,t}(),ot=function(){function t(t,e){this.begin=t,this.end=e,this.message="Missing data ["+t+", "+e+")"}return t.prototype=new Error,t.prototype.name="MissingDataException",t.constructor=t,t}(),ct=function(){function t(t){this.message=t}return t.prototype=new Error,t.prototype.name="XRefParseException",t.constructor=t,t}(),lt=/\x00/g,ht=function(){function t(t,e){this.buffer=t,this.byteLength=t.length,this.length=void 0===e?this.byteLength>>2:e,n(this.length)}function e(t){return{get:function(){var e=this.buffer,n=t<<2
return(e[n]|e[n+1]<<8|e[n+2]<<16|e[n+3]<<24)>>>0},set:function(e){var n=this.buffer,i=t<<2
n[i]=255&e,n[i+1]=e>>8&255,n[i+2]=e>>16&255,n[i+3]=e>>>24&255}}}function n(n){for(;i<n;)Object.defineProperty(t.prototype,i,e(i)),i++}t.prototype=Object.create(null)
var i=0
return t}()
t.Uint32ArrayView=ht
var ut=[1,0,0,1,0,0],dt=function(){function t(){}var e=["rgb(",0,",",0,",",0,")"]
t.makeCssRgb=function(t,n,i){return e[1]=t,e[3]=n,e[5]=i,e.join("")},t.transform=function(t,e){return[t[0]*e[0]+t[2]*e[1],t[1]*e[0]+t[3]*e[1],t[0]*e[2]+t[2]*e[3],t[1]*e[2]+t[3]*e[3],t[0]*e[4]+t[2]*e[5]+t[4],t[1]*e[4]+t[3]*e[5]+t[5]]},t.applyTransform=function(t,e){return[t[0]*e[0]+t[1]*e[2]+e[4],t[0]*e[1]+t[1]*e[3]+e[5]]},t.applyInverseTransform=function(t,e){var n=e[0]*e[3]-e[1]*e[2]
return[(t[0]*e[3]-t[1]*e[2]+e[2]*e[5]-e[4]*e[3])/n,(-t[0]*e[1]+t[1]*e[0]+e[4]*e[1]-e[5]*e[0])/n]},t.getAxialAlignedBoundingBox=function(e,n){var i=t.applyTransform(e,n),r=t.applyTransform(e.slice(2,4),n),a=t.applyTransform([e[0],e[3]],n),s=t.applyTransform([e[2],e[1]],n)
return[Math.min(i[0],r[0],a[0],s[0]),Math.min(i[1],r[1],a[1],s[1]),Math.max(i[0],r[0],a[0],s[0]),Math.max(i[1],r[1],a[1],s[1])]},t.inverseTransform=function(t){var e=t[0]*t[3]-t[1]*t[2]
return[t[3]/e,-t[1]/e,-t[2]/e,t[0]/e,(t[2]*t[5]-t[4]*t[3])/e,(t[4]*t[1]-t[5]*t[0])/e]},t.apply3dTransform=function(t,e){return[t[0]*e[0]+t[1]*e[1]+t[2]*e[2],t[3]*e[0]+t[4]*e[1]+t[5]*e[2],t[6]*e[0]+t[7]*e[1]+t[8]*e[2]]},t.singularValueDecompose2dScale=function(t){var e=[t[0],t[2],t[1],t[3]],n=t[0]*e[0]+t[1]*e[2],i=t[0]*e[1]+t[1]*e[3],r=t[2]*e[0]+t[3]*e[2],a=t[2]*e[1]+t[3]*e[3],s=(n+a)/2,o=Math.sqrt((n+a)*(n+a)-4*(n*a-r*i))/2,c=s+o||1,l=s-o||1
return[Math.sqrt(c),Math.sqrt(l)]},t.normalizeRect=function(t){var e=t.slice(0)
return t[0]>t[2]&&(e[0]=t[2],e[2]=t[0]),t[1]>t[3]&&(e[1]=t[3],e[3]=t[1]),e},t.intersect=function(e,n){function i(t,e){return t-e}var r=[e[0],e[2],n[0],n[2]].sort(i),a=[e[1],e[3],n[1],n[3]].sort(i),s=[]
return e=t.normalizeRect(e),n=t.normalizeRect(n),(r[0]===e[0]&&r[1]===n[0]||r[0]===n[0]&&r[1]===e[0])&&(s[0]=r[1],s[2]=r[2],(a[0]===e[1]&&a[1]===n[1]||a[0]===n[1]&&a[1]===e[1])&&(s[1]=a[1],s[3]=a[2],s))},t.sign=function(t){return t<0?-1:1}
var n=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"]
return t.toRoman=function(t,e){c(R(t)&&t>0,"The number should be a positive integer.")
for(var i,r=[];t>=1e3;)t-=1e3,r.push("M")
i=t/100|0,t%=100,r.push(n[i]),i=t/10|0,t%=10,r.push(n[10+i]),r.push(n[20+t])
var a=r.join("")
return e?a.toLowerCase():a},t.appendToArray=function(t,e){Array.prototype.push.apply(t,e)},t.prependToArray=function(t,e){Array.prototype.unshift.apply(t,e)},t.extendObj=function(t,e){for(var n in e)t[n]=e[n]},t.getInheritableProperty=function(t,e,n){for(;t&&!t.has(e);)t=t.get("Parent")
return t?n?t.getArray(e):t.get(e):null},t.inherit=function(t,e,n){t.prototype=Object.create(e.prototype),t.prototype.constructor=t
for(var i in n)t.prototype[i]=n[i]},t.loadScript=function(t,e){var n=document.createElement("script"),i=!1
n.setAttribute("src",t),e&&(n.onload=function(){i||e(),i=!0}),document.getElementsByTagName("head")[0].appendChild(n)},t}(),ft=function(){function t(t,e,n,i,r,a){this.viewBox=t,this.scale=e,this.rotation=n,this.offsetX=i,this.offsetY=r
var s,o,c,l,h=(t[2]+t[0])/2,u=(t[3]+t[1])/2
switch(n%=360,n=n<0?n+360:n){case 180:s=-1,o=0,c=0,l=1
break
case 90:s=0,o=1,c=1,l=0
break
case 270:s=0,o=-1,c=-1,l=0
break
default:s=1,o=0,c=0,l=-1}a&&(c=-c,l=-l)
var d,f,p,g
0===s?(d=Math.abs(u-t[1])*e+i,f=Math.abs(h-t[0])*e+r,p=Math.abs(t[3]-t[1])*e,g=Math.abs(t[2]-t[0])*e):(d=Math.abs(h-t[0])*e+i,f=Math.abs(u-t[1])*e+r,p=Math.abs(t[2]-t[0])*e,g=Math.abs(t[3]-t[1])*e),this.transform=[s*e,o*e,c*e,l*e,d-s*e*h-c*e*u,f-o*e*h-l*e*u],this.width=p,this.height=g,this.fontScale=e}return t.prototype={clone:function(e){e=e||{}
var n="scale"in e?e.scale:this.scale,i="rotation"in e?e.rotation:this.rotation
return new t(this.viewBox.slice(),n,i,this.offsetX,this.offsetY,e.dontFlip)},convertToViewportPoint:function(t,e){return dt.applyTransform([t,e],this.transform)},convertToViewportRectangle:function(t){var e=dt.applyTransform([t[0],t[1]],this.transform),n=dt.applyTransform([t[2],t[3]],this.transform)
return[e[0],e[1],n[0],n[1]]},convertToPdfPoint:function(t,e){return dt.applyInverseTransform([t,e],this.transform)}},t}(),pt=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,728,711,710,729,733,731,730,732,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8226,8224,8225,8230,8212,8211,402,8260,8249,8250,8722,8240,8222,8220,8221,8216,8217,8218,8482,64257,64258,321,338,352,376,381,305,322,339,353,382,0,8364]
!function(){if(B.Promise)return"function"!=typeof B.Promise.all&&(B.Promise.all=function(t){var e,n,i=0,r=[],a=new B.Promise(function(t,i){e=t,n=i})
return t.forEach(function(t,a){i++,t.then(function(t){r[a]=t,0===--i&&e(r)},n)}),0===i&&e(r),a}),"function"!=typeof B.Promise.resolve&&(B.Promise.resolve=function(t){return new B.Promise(function(e){e(t)})}),"function"!=typeof B.Promise.reject&&(B.Promise.reject=function(t){return new B.Promise(function(e,n){n(t)})}),void("function"!=typeof B.Promise.prototype.catch&&(B.Promise.prototype.catch=function(t){return B.Promise.prototype.then(void 0,t)}))
var t=2,e={handlers:[],running:!1,unhandledRejections:[],pendingRejectionCheck:!1,scheduleHandlers:function(t){0!==t._status&&(this.handlers=this.handlers.concat(t._handlers),t._handlers=[],this.running||(this.running=!0,setTimeout(this.runHandlers.bind(this),0)))},runHandlers:function(){for(var e=Date.now()+1;this.handlers.length>0;){var n=this.handlers.shift(),i=n.thisPromise._status,r=n.thisPromise._value
try{1===i?"function"==typeof n.onResolve&&(r=n.onResolve(r)):"function"==typeof n.onReject&&(r=n.onReject(r),i=1,n.thisPromise._unhandledRejection&&this.removeUnhandeledRejection(n.thisPromise))}catch(e){i=t,r=e}if(n.nextPromise._updateStatus(i,r),Date.now()>=e)break}if(this.handlers.length>0)return void setTimeout(this.runHandlers.bind(this),0)
this.running=!1},addUnhandledRejection:function(t){this.unhandledRejections.push({promise:t,time:Date.now()}),this.scheduleRejectionCheck()},removeUnhandeledRejection:function(t){t._unhandledRejection=!1
for(var e=0;e<this.unhandledRejections.length;e++)this.unhandledRejections[e].promise===t&&(this.unhandledRejections.splice(e),e--)},scheduleRejectionCheck:function(){this.pendingRejectionCheck||(this.pendingRejectionCheck=!0,setTimeout(function(){this.pendingRejectionCheck=!1
for(var t=Date.now(),e=0;e<this.unhandledRejections.length;e++)if(t-this.unhandledRejections[e].time>500){var n=this.unhandledRejections[e].promise._value,i="Unhandled rejection: "+n
n.stack&&(i+="\n"+n.stack),r(i),this.unhandledRejections.splice(e),e--}this.unhandledRejections.length&&this.scheduleRejectionCheck()}.bind(this),500))}},n=function(t){this._status=0,this._handlers=[]
try{t.call(this,this._resolve.bind(this),this._reject.bind(this))}catch(t){this._reject(t)}}
n.all=function(e){function i(e){s._status!==t&&(c=[],a(e))}var r,a,s=new n(function(t,e){r=t,a=e}),o=e.length,c=[]
if(0===o)return r(c),s
for(var l=0,h=e.length;l<h;++l){var u=e[l],d=function(e){return function(n){s._status!==t&&(c[e]=n,0===--o&&r(c))}}(l)
n.isPromise(u)?u.then(d,i):d(u)}return s},n.isPromise=function(t){return t&&"function"==typeof t.then},n.resolve=function(t){return new n(function(e){e(t)})},n.reject=function(t){return new n(function(e,n){n(t)})},n.prototype={_status:null,_value:null,_handlers:null,_unhandledRejection:null,_updateStatus:function(i,r){if(1!==this._status&&this._status!==t){if(1===i&&n.isPromise(r))return void r.then(this._updateStatus.bind(this,1),this._updateStatus.bind(this,t))
this._status=i,this._value=r,i===t&&0===this._handlers.length&&(this._unhandledRejection=!0,e.addUnhandledRejection(this)),e.scheduleHandlers(this)}},_resolve:function(t){this._updateStatus(1,t)},_reject:function(e){this._updateStatus(t,e)},then:function(t,i){var r=new n(function(t,e){this.resolve=t,this.reject=e})
return this._handlers.push({thisPromise:this,onResolve:t,onReject:i,nextPromise:r}),e.scheduleHandlers(this),r},catch:function(t){return this.then(void 0,t)}},B.Promise=n}(),function(){function t(){this.id="$weakmap"+e++}if(!B.WeakMap){var e=0
t.prototype={has:function(t){return!!Object.getOwnPropertyDescriptor(t,this.id)},get:function(t,e){return this.has(t)?t[this.id]:e},set:function(t,e){Object.defineProperty(t,this.id,{value:e,enumerable:!1,configurable:!0})},delete:function(t){delete t[this.id]}},B.WeakMap=t}}()
var gt=function(){function t(t,e,n){for(;t.length<n;)t+=e
return t}function e(){this.started=Object.create(null),this.times=[],this.enabled=!0}return e.prototype={time:function(t){this.enabled&&(t in this.started&&r("Timer is already running for "+t),this.started[t]=Date.now())},timeEnd:function(t){this.enabled&&(t in this.started||r("Timer has not been started for "+t),this.times.push({name:t,start:this.started[t],end:Date.now()}),delete this.started[t])},toString:function(){var e,n,i=this.times,r="",a=0
for(e=0,n=i.length;e<n;++e){var s=i[e].name
s.length>a&&(a=s.length)}for(e=0,n=i.length;e<n;++e){var o=i[e],c=o.end-o.start
r+=t(o.name," ",a)+" "+c+"ms\n"}return r}},e}(),mt=function(t,e){if("undefined"!=typeof Blob)return new Blob([t],{type:e})
r('The "Blob" constructor is not supported.')},At=function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
return function(e,n,i){if(!i&&"undefined"!=typeof URL&&URL.createObjectURL){var r=mt(e,n)
return URL.createObjectURL(r)}for(var a="data:"+n+";base64,",s=0,o=e.length;s<o;s+=3){var c=255&e[s],l=255&e[s+1],h=255&e[s+2]
a+=t[c>>2]+t[(3&c)<<4|l>>4]+t[s+1<o?(15&l)<<2|h>>6:64]+t[s+2<o?63&h:64]}return a}}()
N.prototype={on:function(t,e,n){var i=this.actionHandler
i[t]&&s('There is already an actionName called "'+t+'"'),i[t]=[e,n]},send:function(t,e,n){var i={sourceName:this.sourceName,targetName:this.targetName,action:t,data:e}
this.postMessage(i,n)},sendWithPromise:function(t,e,n){var i=this.callbackIndex++,r={sourceName:this.sourceName,targetName:this.targetName,action:t,data:e,callbackId:i},a=M()
this.callbacksCapabilities[i]=a
try{this.postMessage(r,n)}catch(t){a.reject(t)}return a.promise},postMessage:function(t,e){e&&this.postMessageTransfers?this.comObj.postMessage(t,e):this.comObj.postMessage(t)},destroy:function(){this.comObj.removeEventListener("message",this._onComObjOnMessage)}},function(t){function e(t){return void 0!==u[t]}function n(){o.call(this),this._isInvalid=!0}function i(t){return""===t&&n.call(this),t.toLowerCase()}function r(t){var e=t.charCodeAt(0)
return e>32&&e<127&&-1===[34,35,60,62,63,96].indexOf(e)?t:encodeURIComponent(t)}function a(t){var e=t.charCodeAt(0)
return e>32&&e<127&&-1===[34,35,60,62,96].indexOf(e)?t:encodeURIComponent(t)}function s(t,s,o){function c(t){b.push(t)}var l=s||"scheme start",h=0,m="",A=!1,v=!1,b=[]
t:for(;(t[h-1]!==f||0===h)&&!this._isInvalid;){var y=t[h]
switch(l){case"scheme start":if(!y||!p.test(y)){if(s){c("Invalid scheme.")
break t}m="",l="no scheme"
continue}m+=y.toLowerCase(),l="scheme"
break
case"scheme":if(y&&g.test(y))m+=y.toLowerCase()
else{if(":"!==y){if(s){if(f===y)break t
c("Code point not allowed in scheme: "+y)
break t}m="",h=0,l="no scheme"
continue}if(this._scheme=m,m="",s)break t
e(this._scheme)&&(this._isRelative=!0),l="file"===this._scheme?"relative":this._isRelative&&o&&o._scheme===this._scheme?"relative or authority":this._isRelative?"authority first slash":"scheme data"}break
case"scheme data":"?"===y?(this._query="?",l="query"):"#"===y?(this._fragment="#",l="fragment"):f!==y&&"\t"!==y&&"\n"!==y&&"\r"!==y&&(this._schemeData+=r(y))
break
case"no scheme":if(o&&e(o._scheme)){l="relative"
continue}c("Missing scheme."),n.call(this)
break
case"relative or authority":if("/"!==y||"/"!==t[h+1]){c("Expected /, got: "+y),l="relative"
continue}l="authority ignore slashes"
break
case"relative":if(this._isRelative=!0,"file"!==this._scheme&&(this._scheme=o._scheme),f===y){this._host=o._host,this._port=o._port,this._path=o._path.slice(),this._query=o._query,this._username=o._username,this._password=o._password
break t}if("/"===y||"\\"===y)"\\"===y&&c("\\ is an invalid code point."),l="relative slash"
else if("?"===y)this._host=o._host,this._port=o._port,this._path=o._path.slice(),this._query="?",this._username=o._username,this._password=o._password,l="query"
else{if("#"!==y){var x=t[h+1],S=t[h+2];("file"!==this._scheme||!p.test(y)||":"!==x&&"|"!==x||f!==S&&"/"!==S&&"\\"!==S&&"?"!==S&&"#"!==S)&&(this._host=o._host,this._port=o._port,this._username=o._username,this._password=o._password,this._path=o._path.slice(),this._path.pop()),l="relative path"
continue}this._host=o._host,this._port=o._port,this._path=o._path.slice(),this._query=o._query,this._fragment="#",this._username=o._username,this._password=o._password,l="fragment"}break
case"relative slash":if("/"!==y&&"\\"!==y){"file"!==this._scheme&&(this._host=o._host,this._port=o._port,this._username=o._username,this._password=o._password),l="relative path"
continue}"\\"===y&&c("\\ is an invalid code point."),l="file"===this._scheme?"file host":"authority ignore slashes"
break
case"authority first slash":if("/"!==y){c("Expected '/', got: "+y),l="authority ignore slashes"
continue}l="authority second slash"
break
case"authority second slash":if(l="authority ignore slashes","/"!==y){c("Expected '/', got: "+y)
continue}break
case"authority ignore slashes":if("/"!==y&&"\\"!==y){l="authority"
continue}c("Expected authority, got: "+y)
break
case"authority":if("@"===y){A&&(c("@ already seen."),m+="%40"),A=!0
for(var k=0;k<m.length;k++){var _=m[k]
if("\t"!==_&&"\n"!==_&&"\r"!==_)if(":"!==_||null!==this._password){var C=r(_)
null!==this._password?this._password+=C:this._username+=C}else this._password=""
else c("Invalid whitespace in authority.")}m=""}else{if(y===f||"/"===y||"\\"===y||"?"===y||"#"===y){h-=m.length,m="",l="host"
continue}m+=y}break
case"file host":if(y===f||"/"===y||"\\"===y||"?"===y||"#"===y){2!==m.length||!p.test(m[0])||":"!==m[1]&&"|"!==m[1]?0===m.length?l="relative path start":(this._host=i.call(this,m),m="",l="relative path start"):l="relative path"
continue}"\t"===y||"\n"===y||"\r"===y?c("Invalid whitespace in file host."):m+=y
break
case"host":case"hostname":if(":"!==y||v){if(y===f||"/"===y||"\\"===y||"?"===y||"#"===y){if(this._host=i.call(this,m),m="",l="relative path start",s)break t
continue}"\t"!==y&&"\n"!==y&&"\r"!==y?("["===y?v=!0:"]"===y&&(v=!1),m+=y):c("Invalid code point in host/hostname: "+y)}else if(this._host=i.call(this,m),m="",l="port","hostname"===s)break t
break
case"port":if(/[0-9]/.test(y))m+=y
else{if(y===f||"/"===y||"\\"===y||"?"===y||"#"===y||s){if(""!==m){var w=parseInt(m,10)
w!==u[this._scheme]&&(this._port=w+""),m=""}if(s)break t
l="relative path start"
continue}"\t"===y||"\n"===y||"\r"===y?c("Invalid code point in port: "+y):n.call(this)}break
case"relative path start":if("\\"===y&&c("'\\' not allowed in path."),l="relative path","/"!==y&&"\\"!==y)continue
break
case"relative path":if(y!==f&&"/"!==y&&"\\"!==y&&(s||"?"!==y&&"#"!==y))"\t"!==y&&"\n"!==y&&"\r"!==y&&(m+=r(y))
else{"\\"===y&&c("\\ not allowed in relative path.")
var T;(T=d[m.toLowerCase()])&&(m=T),".."===m?(this._path.pop(),"/"!==y&&"\\"!==y&&this._path.push("")):"."===m&&"/"!==y&&"\\"!==y?this._path.push(""):"."!==m&&("file"===this._scheme&&0===this._path.length&&2===m.length&&p.test(m[0])&&"|"===m[1]&&(m=m[0]+":"),this._path.push(m)),m="","?"===y?(this._query="?",l="query"):"#"===y&&(this._fragment="#",l="fragment")}break
case"query":s||"#"!==y?f!==y&&"\t"!==y&&"\n"!==y&&"\r"!==y&&(this._query+=a(y)):(this._fragment="#",l="fragment")
break
case"fragment":f!==y&&"\t"!==y&&"\n"!==y&&"\r"!==y&&(this._fragment+=y)}h++}}function o(){this._scheme="",this._schemeData="",this._username="",this._password=null,this._host="",this._port="",this._path=[],this._query="",this._fragment="",this._isInvalid=!1,this._isRelative=!1}function c(t,e){void 0===e||e instanceof c||(e=new c(String(e))),this._url=t,o.call(this)
var n=t.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g,"")
s.call(this,n,null,e)}var l=!1
try{if("function"==typeof URL&&"object"==typeof URL.prototype&&"origin"in URL.prototype){var h=new URL("b","http://a")
h.pathname="c%20d",l="http://a/c%20d"===h.href}}catch(t){}if(!l){var u=Object.create(null)
u.ftp=21,u.file=0,u.gopher=70,u.http=80,u.https=443,u.ws=80,u.wss=443
var d=Object.create(null)
d["%2e"]=".",d[".%2e"]="..",d["%2e."]="..",d["%2e%2e"]=".."
var f,p=/[a-zA-Z]/,g=/[a-zA-Z0-9\+\-\.]/
c.prototype={toString:function(){return this.href},get href(){if(this._isInvalid)return this._url
var t=""
return""===this._username&&null===this._password||(t=this._username+(null!==this._password?":"+this._password:"")+"@"),this.protocol+(this._isRelative?"//"+t+this.host:"")+this.pathname+this._query+this._fragment},set href(t){o.call(this),s.call(this,t)},get protocol(){return this._scheme+":"},set protocol(t){this._isInvalid||s.call(this,t+":","scheme start")},get host(){return this._isInvalid?"":this._port?this._host+":"+this._port:this._host},set host(t){!this._isInvalid&&this._isRelative&&s.call(this,t,"host")},get hostname(){return this._host},set hostname(t){!this._isInvalid&&this._isRelative&&s.call(this,t,"hostname")},get port(){return this._port},set port(t){!this._isInvalid&&this._isRelative&&s.call(this,t,"port")},get pathname(){return this._isInvalid?"":this._isRelative?"/"+this._path.join("/"):this._schemeData},set pathname(t){!this._isInvalid&&this._isRelative&&(this._path=[],s.call(this,t,"relative path start"))},get search(){return this._isInvalid||!this._query||"?"===this._query?"":this._query},set search(t){!this._isInvalid&&this._isRelative&&(this._query="?","?"===t[0]&&(t=t.slice(1)),s.call(this,t,"query"))},get hash(){return this._isInvalid||!this._fragment||"#"===this._fragment?"":this._fragment},set hash(t){this._isInvalid||(this._fragment="#","#"===t[0]&&(t=t.slice(1)),s.call(this,t,"fragment"))},get origin(){var t
if(this._isInvalid||!this._scheme)return""
switch(this._scheme){case"data":case"file":case"javascript":case"mailto":return"null"}return t=this.host,t?this._scheme+"://"+t:""}}
var m=t.URL
m&&(c.createObjectURL=function(t){return m.createObjectURL.apply(m,arguments)},c.revokeObjectURL=function(t){m.revokeObjectURL(t)}),t.URL=c}}(B),t.FONT_IDENTITY_MATRIX=W,t.IDENTITY_MATRIX=ut,t.OPS=K,t.VERBOSITY_LEVELS=Q,t.UNSUPPORTED_FEATURES=$,t.AnnotationBorderStyleType=V,t.AnnotationFieldFlag=Y,t.AnnotationFlag=H,t.AnnotationType=z,t.FontType=J,t.ImageKind=X,t.InvalidPDFException=it,t.MessageHandler=N,t.MissingDataException=ot,t.MissingPDFException=rt,t.NotImplementedException=st,t.PageViewport=ft,t.PasswordException=et,t.PasswordResponses=tt,t.StatTimer=gt,t.StreamType=q,t.TextRenderingMode=G,t.UnexpectedResponseException=at,t.UnknownErrorException=nt,t.Util=dt,t.XRefParseException=ct,t.arrayByteLength=A,t.arraysToBytes=v,t.assert=c,t.bytesToString=g,t.createBlob=mt,t.createPromiseCapability=M,t.createObjectURL=At,t.deprecated=a,t.error=s,t.getLookupTableFactory=f,t.getVerbosityLevel=n,t.globalScope=B,t.info=i,t.isArray=j,t.isArrayBuffer=O,t.isBool=E,t.isEmptyObj=P,t.isInt=R,t.isNum=I,t.isString=D,t.isSpace=F,t.isSameOrigin=l,t.createValidAbsoluteUrl=u,t.isLittleEndian=_,t.isEvalSupported=C,t.loadJpegStream=U,t.log2=y,t.readInt8=x,t.readUint16=S,t.readUint32=k,t.removeNullCharacters=p,t.setVerbosityLevel=e,t.shadow=d,t.string32=b,t.stringToBytes=m,t.stringToPDFString=w,t.stringToUTF8String=T,t.utf8StringToString=L,t.warn=r}(t.pdfjsSharedUtil={})}(this),function(t,e){!function(t,e){function n(t,e){var n=e&&e.url
if(t.href=t.title=n?c(n):"",n){var i=e.target
void 0===i&&(i=r("externalLinkTarget")),t.target=g[i]
var a=e.rel
void 0===a&&(a=r("externalLinkRel")),t.rel=a}}function i(t){var e=t.indexOf("#"),n=t.indexOf("?"),i=Math.min(e>0?e:t.length,n>0?n:t.length)
return t.substring(t.lastIndexOf("/",i)+1,i)}function r(t){var n=e.globalScope.PDFJS
switch(t){case"pdfBug":return!!n&&n.pdfBug
case"disableAutoFetch":return!!n&&n.disableAutoFetch
case"disableStream":return!!n&&n.disableStream
case"disableRange":return!!n&&n.disableRange
case"disableFontFace":return!!n&&n.disableFontFace
case"disableCreateObjectURL":return!!n&&n.disableCreateObjectURL
case"disableWebGL":return!n||n.disableWebGL
case"cMapUrl":return n?n.cMapUrl:null
case"cMapPacked":return!!n&&n.cMapPacked
case"postMessageTransfers":return!n||n.postMessageTransfers
case"workerSrc":return n?n.workerSrc:null
case"disableWorker":return!!n&&n.disableWorker
case"maxImageSize":return n?n.maxImageSize:-1
case"imageResourcesPath":return n?n.imageResourcesPath:""
case"isEvalSupported":return!n||n.isEvalSupported
case"externalLinkTarget":if(!n)return p.NONE
switch(n.externalLinkTarget){case p.NONE:case p.SELF:case p.BLANK:case p.PARENT:case p.TOP:return n.externalLinkTarget}return l("PDFJS.externalLinkTarget is invalid: "+n.externalLinkTarget),n.externalLinkTarget=p.NONE,p.NONE
case"externalLinkRel":return n?n.externalLinkRel:d
case"enableStats":return!(!n||!n.enableStats)
default:throw new Error("Unknown default setting: "+t)}}function a(){switch(r("externalLinkTarget")){case p.NONE:return!1
case p.SELF:case p.BLANK:case p.PARENT:case p.TOP:return!0}}function s(t,e){return h("isValidUrl(), please use createValidAbsoluteUrl() instead."),null!==u(t,e?"http://example.com":null)}var o,c=e.removeNullCharacters,l=e.warn,h=e.deprecated,u=e.createValidAbsoluteUrl,d="noopener noreferrer nofollow",f=function(){function t(){}var e=["ms","Moz","Webkit","O"],n=Object.create(null)
return t.getProp=function(t,i){if(1===arguments.length&&"string"==typeof n[t])return n[t]
i=i||document.documentElement
var r,a,s=i.style
if("string"==typeof s[t])return n[t]=t
a=t.charAt(0).toUpperCase()+t.slice(1)
for(var o=0,c=e.length;o<c;o++)if(r=e[o]+a,"string"==typeof s[r])return n[t]=r
return n[t]="undefined"},t.setProp=function(t,e,n){var i=this.getProp(t)
"undefined"!==i&&(e.style[i]=n)},t}()
o=function(){var t=document.createElement("canvas")
return t.width=t.height=1,void 0!==t.getContext("2d").createImageData(1,1).data.buffer}
var p={NONE:0,SELF:1,BLANK:2,PARENT:3,TOP:4},g=["","_self","_blank","_parent","_top"]
t.CustomStyle=f,t.addLinkAttributes=n,t.isExternalLinkTargetSet=a,t.isValidUrl=s,t.getFilenameFromUrl=i,t.LinkTarget=p,t.hasCanvasTypedArrays=o,t.getDefaultSetting=r,t.DEFAULT_LINK_REL=d}(t.pdfjsDisplayDOMUtils={},t.pdfjsSharedUtil)}(this),function(t,e){!function(t,e){function n(t){this.docId=t,this.styleElement=null,this.nativeFontFaces=[],this.loadTestFontId=0,this.loadingContext={requests:[],nextRequestId:0}}var i=e.assert,r=e.bytesToString,a=e.string32,s=e.shadow,o=e.warn
n.prototype={insertRule:function(t){var e=this.styleElement
e||(e=this.styleElement=document.createElement("style"),e.id="PDFJS_FONT_STYLE_TAG_"+this.docId,document.documentElement.getElementsByTagName("head")[0].appendChild(e))
var n=e.sheet
n.insertRule(t,n.cssRules.length)},clear:function(){var t=this.styleElement
t&&(t.parentNode.removeChild(t),t=this.styleElement=null),this.nativeFontFaces.forEach(function(t){document.fonts.delete(t)}),this.nativeFontFaces.length=0}}
var c=function(){return atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==")}
Object.defineProperty(n.prototype,"loadTestFont",{get:function(){return s(this,"loadTestFont",c())},configurable:!0}),n.prototype.addNativeFontFace=function(t){this.nativeFontFaces.push(t),document.fonts.add(t)},n.prototype.bind=function(t,e){for(var i=[],r=[],a=[],s=n.isFontLoadingAPISupported&&!n.isSyncFontLoadingSupported,c=0,l=t.length;c<l;c++){var h=t[c]
if(!h.attached&&!1!==h.loading)if(h.attached=!0,s){var u=h.createNativeFontFace()
u&&(this.addNativeFontFace(u),a.push(function(t){return t.loaded.catch(function(e){o('Failed to load font "'+t.family+'": '+e)})}(u)))}else{var d=h.createFontFaceRule()
d&&(this.insertRule(d),i.push(d),r.push(h))}}var f=this.queueLoadingCallback(e)
s?Promise.all(a).then(function(){f.complete()}):i.length>0&&!n.isSyncFontLoadingSupported?this.prepareFontLoadEvent(i,r,f):f.complete()},n.prototype.queueLoadingCallback=function(t){function e(){for(i(!a.end,"completeRequest() cannot be called twice"),a.end=Date.now();n.requests.length>0&&n.requests[0].end;){var t=n.requests.shift()
setTimeout(t.callback,0)}}var n=this.loadingContext,r="pdfjs-font-loading-"+n.nextRequestId++,a={id:r,complete:e,callback:t,started:Date.now()}
return n.requests.push(a),a},n.prototype.prepareFontLoadEvent=function(t,e,n){function i(t,e){return t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|255&t.charCodeAt(e+3)}function r(t,e,n,i){return t.substr(0,e)+i+t.substr(e+n)}function s(t,e){return++d>30?(o("Load test font never loaded."),void e()):(u.font="30px "+t,u.fillText(".",0,20),u.getImageData(0,0,1,1).data[3]>0?void e():void setTimeout(s.bind(null,t,e)))}var c,l,h=document.createElement("canvas")
h.width=1,h.height=1
var u=h.getContext("2d"),d=0,f="lt"+Date.now()+this.loadTestFontId++,p=this.loadTestFont
p=r(p,976,f.length,f)
var g=i(p,16)
for(c=0,l=f.length-3;c<l;c+=4)g=g-1482184792+i(f,c)|0
c<f.length&&(g=g-1482184792+i(f+"XXX",c)|0),p=r(p,16,4,a(g))
var m="url(data:font/opentype;base64,"+btoa(p)+");",A='@font-face { font-family:"'+f+'";src:'+m+"}"
this.insertRule(A)
var v=[]
for(c=0,l=e.length;c<l;c++)v.push(e[c].loadedName)
v.push(f)
var b=document.createElement("div")
for(b.setAttribute("style","visibility: hidden;width: 10px; height: 10px;position: absolute; top: 0px; left: 0px;"),c=0,l=v.length;c<l;++c){var y=document.createElement("span")
y.textContent="Hi",y.style.fontFamily=v[c],b.appendChild(y)}document.body.appendChild(b),s(f,function(){document.body.removeChild(b),n.complete()})},n.isFontLoadingAPISupported="undefined"!=typeof document&&!!document.fonts
var l=function(){if("undefined"==typeof navigator)return!0
var t=!1,e=/Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent)
return e&&e[1]>=14&&(t=!0),t}
Object.defineProperty(n,"isSyncFontLoadingSupported",{get:function(){return s(n,"isSyncFontLoadingSupported",l())},enumerable:!0,configurable:!0})
var h={get value(){return s(this,"value",e.isEvalSupported())}},u=function(){function t(t,e){this.compiledGlyphs=Object.create(null)
for(var n in t)this[n]=t[n]
this.options=e}return t.prototype={createNativeFontFace:function(){if(!this.data)return null
if(this.options.disableFontFace)return this.disableFontFace=!0,null
var t=new FontFace(this.loadedName,this.data,{})
return this.options.fontRegistry&&this.options.fontRegistry.registerFont(this),t},createFontFaceRule:function(){if(!this.data)return null
if(this.options.disableFontFace)return this.disableFontFace=!0,null
var t=r(new Uint8Array(this.data)),e=this.loadedName,n="url(data:"+this.mimetype+";base64,"+btoa(t)+");",i='@font-face { font-family:"'+e+'";src:'+n+"}"
return this.options.fontRegistry&&this.options.fontRegistry.registerFont(this,n),i},getPathGenerator:function(t,e){if(!(e in this.compiledGlyphs)){var n,i,r,a=t.get(this.loadedName+"_path_"+e)
if(this.options.isEvalSupported&&h.value){var s,o=""
for(i=0,r=a.length;i<r;i++)n=a[i],s=void 0!==n.args?n.args.join(","):"",o+="c."+n.cmd+"("+s+");\n"
this.compiledGlyphs[e]=new Function("c","size",o)}else this.compiledGlyphs[e]=function(t,e){for(i=0,r=a.length;i<r;i++)n=a[i],"scale"===n.cmd&&(n.args=[e,-e]),t[n.cmd].apply(t,n.args)}}return this.compiledGlyphs[e]}},t}()
t.FontFaceObject=u,t.FontLoader=n}(t.pdfjsDisplayFontLoader={},t.pdfjsSharedUtil)}(this),function(t,e){!function(t,e){function n(t){return t.replace(/>\\376\\377([^<]+)/g,function(t,e){for(var n=e.replace(/\\([0-3])([0-7])([0-7])/g,function(t,e,n,i){return String.fromCharCode(64*e+8*n+1*i)}),i="",r=0;r<n.length;r+=2){var a=256*n.charCodeAt(r)+n.charCodeAt(r+1)
i+=a>=32&&a<127&&60!==a&&62!==a&&38!==a?String.fromCharCode(a):"&#x"+(65536+a).toString(16).substring(1)+";"}return">"+i})}function i(t){if("string"==typeof t){t=n(t)
t=(new DOMParser).parseFromString(t,"application/xml")}else t instanceof Document||r("Metadata: Invalid metadata object")
this.metaDocument=t,this.metadata=Object.create(null),this.parse()}var r=e.error
i.prototype={parse:function(){var t=this.metaDocument,e=t.documentElement
if("rdf:rdf"!==e.nodeName.toLowerCase())for(e=e.firstChild;e&&"rdf:rdf"!==e.nodeName.toLowerCase();)e=e.nextSibling
var n=e?e.nodeName.toLowerCase():null
if(e&&"rdf:rdf"===n&&e.hasChildNodes()){var i,r,a,s,o,c,l,h=e.childNodes
for(s=0,c=h.length;s<c;s++)if(i=h[s],"rdf:description"===i.nodeName.toLowerCase())for(o=0,l=i.childNodes.length;o<l;o++)"#text"!==i.childNodes[o].nodeName.toLowerCase()&&(r=i.childNodes[o],a=r.nodeName.toLowerCase(),this.metadata[a]=r.textContent.trim())}},get:function(t){return this.metadata[t]||null},has:function(t){return void 0!==this.metadata[t]}},t.Metadata=i}(t.pdfjsDisplayMetadata={},t.pdfjsSharedUtil)}(this),function(t,e){!function(t,e){var n=e.FONT_IDENTITY_MATRIX,i=e.IDENTITY_MATRIX,r=e.ImageKind,a=e.OPS,s=e.Util,o=e.isNum,c=e.isArray,l=e.warn,h=e.createObjectURL,u={fontStyle:"normal",fontWeight:"normal",fillColor:"#000000"},d=function(){function t(t,e,n){for(var i=-1,r=e;r<n;r++){var a=255&(i^t[r])
i=i>>>8^o[a]}return-1^i}function e(e,n,i,r){var a=r,s=n.length
i[a]=s>>24&255,i[a+1]=s>>16&255,i[a+2]=s>>8&255,i[a+3]=255&s,a+=4,i[a]=255&e.charCodeAt(0),i[a+1]=255&e.charCodeAt(1),i[a+2]=255&e.charCodeAt(2),i[a+3]=255&e.charCodeAt(3),a+=4,i.set(n,a),a+=n.length
var o=t(i,r+4,a)
i[a]=o>>24&255,i[a+1]=o>>16&255,i[a+2]=o>>8&255,i[a+3]=255&o}function n(t,e,n){for(var i=1,r=0,a=e;a<n;++a)i=(i+(255&t[a]))%65521,r=(r+i)%65521
return r<<16|i}function i(t,i,o){var c,l,u,d=t.width,f=t.height,p=t.data
switch(i){case r.GRAYSCALE_1BPP:l=0,c=1,u=d+7>>3
break
case r.RGB_24BPP:l=2,c=8,u=3*d
break
case r.RGBA_32BPP:l=6,c=8,u=4*d
break
default:throw new Error("invalid format")}var g,m,A=new Uint8Array((1+u)*f),v=0,b=0
for(g=0;g<f;++g)A[v++]=0,A.set(p.subarray(b,b+u),v),b+=u,v+=u
if(i===r.GRAYSCALE_1BPP)for(v=0,g=0;g<f;g++)for(v++,m=0;m<u;m++)A[v++]^=255
var y=new Uint8Array([d>>24&255,d>>16&255,d>>8&255,255&d,f>>24&255,f>>16&255,f>>8&255,255&f,c,l,0,0,0]),x=A.length,S=Math.ceil(x/65535),k=new Uint8Array(2+x+5*S+4),_=0
k[_++]=120,k[_++]=156
for(var C=0;x>65535;)k[_++]=0,k[_++]=255,k[_++]=255,k[_++]=0,k[_++]=0,k.set(A.subarray(C,C+65535),_),_+=65535,C+=65535,x-=65535
k[_++]=1,k[_++]=255&x,k[_++]=x>>8&255,k[_++]=255&~x,k[_++]=(65535&~x)>>8&255,k.set(A.subarray(C),_),_+=A.length-C
var w=n(A,0,A.length)
k[_++]=w>>24&255,k[_++]=w>>16&255,k[_++]=w>>8&255,k[_++]=255&w
var T=a.length+3*s+y.length+k.length,L=new Uint8Array(T),P=0
return L.set(a,P),P+=a.length,e("IHDR",y,L,P),P+=s+y.length,e("IDATA",k,L,P),P+=s+k.length,e("IEND",new Uint8Array(0),L,P),h(L,"image/png",o)}for(var a=new Uint8Array([137,80,78,71,13,10,26,10]),s=12,o=new Int32Array(256),c=0;c<256;c++){for(var l=c,u=0;u<8;u++)l=1&l?3988292384^l>>1&2147483647:l>>1&2147483647
o[c]=l}return function(t,e){return i(t,void 0===t.kind?r.GRAYSCALE_1BPP:t.kind,e)}}(),f=function(){function t(){this.fontSizeScale=1,this.fontWeight=u.fontWeight,this.fontSize=0,this.textMatrix=i,this.fontMatrix=n,this.leading=0,this.x=0,this.y=0,this.lineX=0,this.lineY=0,this.charSpacing=0,this.wordSpacing=0,this.textHScale=1,this.textRise=0,this.fillColor=u.fillColor,this.strokeColor="#000000",this.fillAlpha=1,this.strokeAlpha=1,this.lineWidth=1,this.lineJoin="",this.lineCap="",this.miterLimit=0,this.dashArray=[],this.dashPhase=0,this.dependencies=[],this.activeClipUrl=null,this.clipGroup=null,this.maskId=""}return t.prototype={clone:function(){return Object.create(this)},setCurrentPoint:function(t,e){this.x=t,this.y=e}},t}(),p=function(){function t(t){for(var e=[],n=[],i=t.length,r=0;r<i;r++)"save"!==t[r].fn?"restore"===t[r].fn?e=n.pop():e.push(t[r]):(e.push({fnId:92,fn:"group",items:[]}),n.push(e),e=e[e.length-1].items)
return e}function e(t){if(t===(0|t))return t.toString()
var e=t.toFixed(10),n=e.length-1
if("0"!==e[n])return e
do{n--}while("0"===e[n])
return e.substr(0,"."===e[n]?n:n+1)}function r(t){if(0===t[4]&&0===t[5]){if(0===t[1]&&0===t[2])return 1===t[0]&&1===t[3]?"":"scale("+e(t[0])+" "+e(t[3])+")"
if(t[0]===t[3]&&t[1]===-t[2]){return"rotate("+e(180*Math.acos(t[0])/Math.PI)+")"}}else if(1===t[0]&&0===t[1]&&0===t[2]&&1===t[3])return"translate("+e(t[4])+" "+e(t[5])+")"
return"matrix("+e(t[0])+" "+e(t[1])+" "+e(t[2])+" "+e(t[3])+" "+e(t[4])+" "+e(t[5])+")"}function p(t,e,n){this.current=new f,this.transformMatrix=i,this.transformStack=[],this.extraStack=[],this.commonObjs=t,this.objs=e,this.pendingEOFill=!1,this.embedFonts=!1,this.embeddedFonts=Object.create(null),this.cssStyle=null,this.forceDataSchema=!!n}var g="http://www.w3.org/2000/svg",m="http://www.w3.org/1999/xlink",A=["butt","round","square"],v=["miter","round","bevel"],b=0,y=0
return p.prototype={save:function(){this.transformStack.push(this.transformMatrix)
var t=this.current
this.extraStack.push(t),this.current=t.clone()},restore:function(){this.transformMatrix=this.transformStack.pop(),this.current=this.extraStack.pop(),this.tgrp=null},group:function(t){this.save(),this.executeOpTree(t),this.restore()},loadDependencies:function(t){for(var e=t.fnArray,n=e.length,i=t.argsArray,r=this,s=0;s<n;s++)if(a.dependency===e[s])for(var o=i[s],c=0,l=o.length;c<l;c++){var h,u=o[c],d="g_"===u.substring(0,2)
h=d?new Promise(function(t){r.commonObjs.get(u,t)}):new Promise(function(t){r.objs.get(u,t)}),this.current.dependencies.push(h)}return Promise.all(this.current.dependencies)},transform:function(t,e,n,i,r,a){var o=[t,e,n,i,r,a]
this.transformMatrix=s.transform(this.transformMatrix,o),this.tgrp=null},getSVG:function(t,e){this.viewport=e
var n=this._initialize(e)
return this.loadDependencies(t).then(function(){this.transformMatrix=i
var e=this.convertOpList(t)
return this.executeOpTree(e),n}.bind(this))},convertOpList:function(e){var n=e.argsArray,i=e.fnArray,r=i.length,s=[],o=[]
for(var c in a)s[a[c]]=c
for(var l=0;l<r;l++){var h=i[l]
o.push({fnId:h,fn:s[h],args:n[l]})}return t(o)},executeOpTree:function(t){for(var e=t.length,n=0;n<e;n++){var i=t[n].fn,r=t[n].fnId,s=t[n].args
switch(0|r){case a.beginText:this.beginText()
break
case a.setLeading:this.setLeading(s)
break
case a.setLeadingMoveText:this.setLeadingMoveText(s[0],s[1])
break
case a.setFont:this.setFont(s)
break
case a.showText:case a.showSpacedText:this.showText(s[0])
break
case a.endText:this.endText()
break
case a.moveText:this.moveText(s[0],s[1])
break
case a.setCharSpacing:this.setCharSpacing(s[0])
break
case a.setWordSpacing:this.setWordSpacing(s[0])
break
case a.setHScale:this.setHScale(s[0])
break
case a.setTextMatrix:this.setTextMatrix(s[0],s[1],s[2],s[3],s[4],s[5])
break
case a.setLineWidth:this.setLineWidth(s[0])
break
case a.setLineJoin:this.setLineJoin(s[0])
break
case a.setLineCap:this.setLineCap(s[0])
break
case a.setMiterLimit:this.setMiterLimit(s[0])
break
case a.setFillRGBColor:this.setFillRGBColor(s[0],s[1],s[2])
break
case a.setStrokeRGBColor:this.setStrokeRGBColor(s[0],s[1],s[2])
break
case a.setDash:this.setDash(s[0],s[1])
break
case a.setGState:this.setGState(s[0])
break
case a.fill:this.fill()
break
case a.eoFill:this.eoFill()
break
case a.stroke:this.stroke()
break
case a.fillStroke:this.fillStroke()
break
case a.eoFillStroke:this.eoFillStroke()
break
case a.clip:this.clip("nonzero")
break
case a.eoClip:this.clip("evenodd")
break
case a.paintSolidColorImageMask:this.paintSolidColorImageMask()
break
case a.paintJpegXObject:this.paintJpegXObject(s[0],s[1],s[2])
break
case a.paintImageXObject:this.paintImageXObject(s[0])
break
case a.paintInlineImageXObject:this.paintInlineImageXObject(s[0])
break
case a.paintImageMaskXObject:this.paintImageMaskXObject(s[0])
break
case a.paintFormXObjectBegin:this.paintFormXObjectBegin(s[0],s[1])
break
case a.paintFormXObjectEnd:this.paintFormXObjectEnd()
break
case a.closePath:this.closePath()
break
case a.closeStroke:this.closeStroke()
break
case a.closeFillStroke:this.closeFillStroke()
break
case a.nextLine:this.nextLine()
break
case a.transform:this.transform(s[0],s[1],s[2],s[3],s[4],s[5])
break
case a.constructPath:this.constructPath(s[0],s[1])
break
case a.endPath:this.endPath()
break
case 92:this.group(t[n].items)
break
default:l("Unimplemented operator "+i)}}},setWordSpacing:function(t){this.current.wordSpacing=t},setCharSpacing:function(t){this.current.charSpacing=t},nextLine:function(){this.moveText(0,this.current.leading)},setTextMatrix:function(t,n,i,r,a,s){var o=this.current
this.current.textMatrix=this.current.lineMatrix=[t,n,i,r,a,s],this.current.x=this.current.lineX=0,this.current.y=this.current.lineY=0,o.xcoords=[],o.tspan=document.createElementNS(g,"svg:tspan"),o.tspan.setAttributeNS(null,"font-family",o.fontFamily),o.tspan.setAttributeNS(null,"font-size",e(o.fontSize)+"px"),o.tspan.setAttributeNS(null,"y",e(-o.y)),o.txtElement=document.createElementNS(g,"svg:text"),o.txtElement.appendChild(o.tspan)},beginText:function(){this.current.x=this.current.lineX=0,this.current.y=this.current.lineY=0,this.current.textMatrix=i,this.current.lineMatrix=i,this.current.tspan=document.createElementNS(g,"svg:tspan"),this.current.txtElement=document.createElementNS(g,"svg:text"),this.current.txtgrp=document.createElementNS(g,"svg:g"),this.current.xcoords=[]},moveText:function(t,n){var i=this.current
this.current.x=this.current.lineX+=t,this.current.y=this.current.lineY+=n,i.xcoords=[],i.tspan=document.createElementNS(g,"svg:tspan"),i.tspan.setAttributeNS(null,"font-family",i.fontFamily),i.tspan.setAttributeNS(null,"font-size",e(i.fontSize)+"px"),i.tspan.setAttributeNS(null,"y",e(-i.y))},showText:function(t){var n=this.current,i=n.font,a=n.fontSize
if(0!==a){var s,c=n.charSpacing,l=n.wordSpacing,h=n.fontDirection,d=n.textHScale*h,f=t.length,p=i.vertical,g=a*n.fontMatrix[0],m=0
for(s=0;s<f;++s){var A=t[s]
if(null!==A)if(o(A))m+=-A*a*.001
else{n.xcoords.push(n.x+m*d)
var v=A.width,b=A.fontChar,y=v*g+c*h
m+=y,n.tspan.textContent+=b}else m+=h*l}p?n.y-=m*d:n.x+=m*d,n.tspan.setAttributeNS(null,"x",n.xcoords.map(e).join(" ")),n.tspan.setAttributeNS(null,"y",e(-n.y)),n.tspan.setAttributeNS(null,"font-family",n.fontFamily),n.tspan.setAttributeNS(null,"font-size",e(n.fontSize)+"px"),n.fontStyle!==u.fontStyle&&n.tspan.setAttributeNS(null,"font-style",n.fontStyle),n.fontWeight!==u.fontWeight&&n.tspan.setAttributeNS(null,"font-weight",n.fontWeight),n.fillColor!==u.fillColor&&n.tspan.setAttributeNS(null,"fill",n.fillColor),n.txtElement.setAttributeNS(null,"transform",r(n.textMatrix)+" scale(1, -1)"),n.txtElement.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),n.txtElement.appendChild(n.tspan),n.txtgrp.appendChild(n.txtElement),this._ensureTransformGroup().appendChild(n.txtElement)}},setLeadingMoveText:function(t,e){this.setLeading(-e),this.moveText(t,e)},addFontStyle:function(t){this.cssStyle||(this.cssStyle=document.createElementNS(g,"svg:style"),this.cssStyle.setAttributeNS(null,"type","text/css"),this.defs.appendChild(this.cssStyle))
var e=h(t.data,t.mimetype,this.forceDataSchema)
this.cssStyle.textContent+='@font-face { font-family: "'+t.loadedName+'"; src: url('+e+"); }\n"},setFont:function(t){var i=this.current,r=this.commonObjs.get(t[0]),a=t[1]
this.current.font=r,this.embedFonts&&r.data&&!this.embeddedFonts[r.loadedName]&&(this.addFontStyle(r),this.embeddedFonts[r.loadedName]=r),i.fontMatrix=r.fontMatrix?r.fontMatrix:n
var s=r.black?r.bold?"bolder":"bold":r.bold?"bold":"normal",o=r.italic?"italic":"normal"
a<0?(a=-a,i.fontDirection=-1):i.fontDirection=1,i.fontSize=a,i.fontFamily=r.loadedName,i.fontWeight=s,i.fontStyle=o,i.tspan=document.createElementNS(g,"svg:tspan"),i.tspan.setAttributeNS(null,"y",e(-i.y)),i.xcoords=[]},endText:function(){},setLineWidth:function(t){this.current.lineWidth=t},setLineCap:function(t){this.current.lineCap=A[t]},setLineJoin:function(t){this.current.lineJoin=v[t]},setMiterLimit:function(t){this.current.miterLimit=t},setStrokeRGBColor:function(t,e,n){var i=s.makeCssRgb(t,e,n)
this.current.strokeColor=i},setFillRGBColor:function(t,e,n){var i=s.makeCssRgb(t,e,n)
this.current.fillColor=i,this.current.tspan=document.createElementNS(g,"svg:tspan"),this.current.xcoords=[]},setDash:function(t,e){this.current.dashArray=t,this.current.dashPhase=e},constructPath:function(t,n){var i=this.current,r=i.x,s=i.y
i.path=document.createElementNS(g,"svg:path")
for(var o=[],c=t.length,l=0,h=0;l<c;l++)switch(0|t[l]){case a.rectangle:r=n[h++],s=n[h++]
var u=n[h++],d=n[h++],f=r+u,p=s+d
o.push("M",e(r),e(s),"L",e(f),e(s),"L",e(f),e(p),"L",e(r),e(p),"Z")
break
case a.moveTo:r=n[h++],s=n[h++],o.push("M",e(r),e(s))
break
case a.lineTo:r=n[h++],s=n[h++],o.push("L",e(r),e(s))
break
case a.curveTo:r=n[h+4],s=n[h+5],o.push("C",e(n[h]),e(n[h+1]),e(n[h+2]),e(n[h+3]),e(r),e(s)),h+=6
break
case a.curveTo2:r=n[h+2],s=n[h+3],o.push("C",e(r),e(s),e(n[h]),e(n[h+1]),e(n[h+2]),e(n[h+3])),h+=4
break
case a.curveTo3:r=n[h+2],s=n[h+3],o.push("C",e(n[h]),e(n[h+1]),e(r),e(s),e(r),e(s)),h+=4
break
case a.closePath:o.push("Z")}i.path.setAttributeNS(null,"d",o.join(" ")),i.path.setAttributeNS(null,"stroke-miterlimit",e(i.miterLimit)),i.path.setAttributeNS(null,"stroke-linecap",i.lineCap),i.path.setAttributeNS(null,"stroke-linejoin",i.lineJoin),i.path.setAttributeNS(null,"stroke-width",e(i.lineWidth)+"px"),i.path.setAttributeNS(null,"stroke-dasharray",i.dashArray.map(e).join(" ")),i.path.setAttributeNS(null,"stroke-dashoffset",e(i.dashPhase)+"px"),i.path.setAttributeNS(null,"fill","none"),this._ensureTransformGroup().appendChild(i.path),i.element=i.path,i.setCurrentPoint(r,s)},endPath:function(){},clip:function(t){var e=this.current,n="clippath"+b
b++
var i=document.createElementNS(g,"svg:clipPath")
i.setAttributeNS(null,"id",n),i.setAttributeNS(null,"transform",r(this.transformMatrix))
var a=e.element.cloneNode()
"evenodd"===t?a.setAttributeNS(null,"clip-rule","evenodd"):a.setAttributeNS(null,"clip-rule","nonzero"),i.appendChild(a),this.defs.appendChild(i),e.activeClipUrl&&(e.clipGroup=null,this.extraStack.forEach(function(t){t.clipGroup=null})),e.activeClipUrl="url(#"+n+")",this.tgrp=null},closePath:function(){var t=this.current,e=t.path.getAttributeNS(null,"d")
e+="Z",t.path.setAttributeNS(null,"d",e)},setLeading:function(t){this.current.leading=-t},setTextRise:function(t){this.current.textRise=t},setHScale:function(t){this.current.textHScale=t/100},setGState:function(t){for(var e=0,n=t.length;e<n;e++){var i=t[e],r=i[0],a=i[1]
switch(r){case"LW":this.setLineWidth(a)
break
case"LC":this.setLineCap(a)
break
case"LJ":this.setLineJoin(a)
break
case"ML":this.setMiterLimit(a)
break
case"D":this.setDash(a[0],a[1])
break
case"Font":this.setFont(a)
break
default:l("Unimplemented graphic state "+r)}}},fill:function(){var t=this.current
t.element.setAttributeNS(null,"fill",t.fillColor)},stroke:function(){var t=this.current
t.element.setAttributeNS(null,"stroke",t.strokeColor),t.element.setAttributeNS(null,"fill","none")},eoFill:function(){var t=this.current
t.element.setAttributeNS(null,"fill",t.fillColor),t.element.setAttributeNS(null,"fill-rule","evenodd")},fillStroke:function(){this.stroke(),this.fill()},eoFillStroke:function(){this.current.element.setAttributeNS(null,"fill-rule","evenodd"),this.fillStroke()},closeStroke:function(){this.closePath(),this.stroke()},closeFillStroke:function(){this.closePath(),this.fillStroke()},paintSolidColorImageMask:function(){var t=this.current,e=document.createElementNS(g,"svg:rect")
e.setAttributeNS(null,"x","0"),e.setAttributeNS(null,"y","0"),e.setAttributeNS(null,"width","1px"),e.setAttributeNS(null,"height","1px"),e.setAttributeNS(null,"fill",t.fillColor),this._ensureTransformGroup().appendChild(e)},paintJpegXObject:function(t,n,i){var r=this.objs.get(t),a=document.createElementNS(g,"svg:image")
a.setAttributeNS(m,"xlink:href",r.src),a.setAttributeNS(null,"width",r.width+"px"),a.setAttributeNS(null,"height",r.height+"px"),a.setAttributeNS(null,"x","0"),a.setAttributeNS(null,"y",e(-i)),a.setAttributeNS(null,"transform","scale("+e(1/n)+" "+e(-1/i)+")"),this._ensureTransformGroup().appendChild(a)},paintImageXObject:function(t){var e=this.objs.get(t)
if(!e)return void l("Dependent image isn't ready yet")
this.paintInlineImageXObject(e)},paintInlineImageXObject:function(t,n){var i=t.width,r=t.height,a=d(t,this.forceDataSchema),s=document.createElementNS(g,"svg:rect")
s.setAttributeNS(null,"x","0"),s.setAttributeNS(null,"y","0"),s.setAttributeNS(null,"width",e(i)),s.setAttributeNS(null,"height",e(r)),this.current.element=s,this.clip("nonzero")
var o=document.createElementNS(g,"svg:image")
o.setAttributeNS(m,"xlink:href",a),o.setAttributeNS(null,"x","0"),o.setAttributeNS(null,"y",e(-r)),o.setAttributeNS(null,"width",e(i)+"px"),o.setAttributeNS(null,"height",e(r)+"px"),o.setAttributeNS(null,"transform","scale("+e(1/i)+" "+e(-1/r)+")"),n?n.appendChild(o):this._ensureTransformGroup().appendChild(o)},paintImageMaskXObject:function(t){var n=this.current,i=t.width,r=t.height,a=n.fillColor
n.maskId="mask"+y++
var s=document.createElementNS(g,"svg:mask")
s.setAttributeNS(null,"id",n.maskId)
var o=document.createElementNS(g,"svg:rect")
o.setAttributeNS(null,"x","0"),o.setAttributeNS(null,"y","0"),o.setAttributeNS(null,"width",e(i)),o.setAttributeNS(null,"height",e(r)),o.setAttributeNS(null,"fill",a),o.setAttributeNS(null,"mask","url(#"+n.maskId+")"),this.defs.appendChild(s),this._ensureTransformGroup().appendChild(o),this.paintInlineImageXObject(t,s)},paintFormXObjectBegin:function(t,n){if(c(t)&&6===t.length&&this.transform(t[0],t[1],t[2],t[3],t[4],t[5]),c(n)&&4===n.length){var i=n[2]-n[0],r=n[3]-n[1],a=document.createElementNS(g,"svg:rect")
a.setAttributeNS(null,"x",n[0]),a.setAttributeNS(null,"y",n[1]),a.setAttributeNS(null,"width",e(i)),a.setAttributeNS(null,"height",e(r)),this.current.element=a,this.clip("nonzero"),this.endPath()}},paintFormXObjectEnd:function(){},_initialize:function(t){var e=document.createElementNS(g,"svg:svg")
e.setAttributeNS(null,"version","1.1"),e.setAttributeNS(null,"width",t.width+"px"),e.setAttributeNS(null,"height",t.height+"px"),e.setAttributeNS(null,"preserveAspectRatio","none"),e.setAttributeNS(null,"viewBox","0 0 "+t.width+" "+t.height)
var n=document.createElementNS(g,"svg:defs")
e.appendChild(n),this.defs=n
var i=document.createElementNS(g,"svg:g")
return i.setAttributeNS(null,"transform",r(t.transform)),e.appendChild(i),this.svg=i,e},_ensureClipGroup:function(){if(!this.current.clipGroup){var t=document.createElementNS(g,"svg:g")
t.setAttributeNS(null,"clip-path",this.current.activeClipUrl),this.svg.appendChild(t),this.current.clipGroup=t}return this.current.clipGroup},_ensureTransformGroup:function(){return this.tgrp||(this.tgrp=document.createElementNS(g,"svg:g"),this.tgrp.setAttributeNS(null,"transform",r(this.transformMatrix)),this.current.activeClipUrl?this._ensureClipGroup().appendChild(this.tgrp):this.svg.appendChild(this.tgrp)),this.tgrp}},p}()
t.SVGGraphics=p}(t.pdfjsDisplaySVG={},t.pdfjsSharedUtil)}(this),function(t,e){!function(t,e,n){function i(){}var r=e.AnnotationBorderStyleType,a=e.AnnotationType,s=e.Util,o=n.addLinkAttributes,c=n.LinkTarget,l=n.getFilenameFromUrl,h=e.warn,u=n.CustomStyle,d=n.getDefaultSetting
i.prototype={create:function(t){switch(t.data.annotationType){case a.LINK:return new p(t)
case a.TEXT:return new g(t)
case a.WIDGET:switch(t.data.fieldType){case"Tx":return new A(t)
case"Btn":if(t.data.radioButton)return new b(t)
if(t.data.checkBox)return new v(t)
h("Unimplemented button widget annotation: pushbutton")
break
case"Ch":return new y(t)}return new m(t)
case a.POPUP:return new x(t)
case a.HIGHLIGHT:return new k(t)
case a.UNDERLINE:return new _(t)
case a.SQUIGGLY:return new C(t)
case a.STRIKEOUT:return new w(t)
case a.FILEATTACHMENT:return new T(t)
default:return new f(t)}}}
var f=function(){function t(t,e){this.isRenderable=e||!1,this.data=t.data,this.layer=t.layer,this.page=t.page,this.viewport=t.viewport,this.linkService=t.linkService,this.downloadManager=t.downloadManager,this.imageResourcesPath=t.imageResourcesPath,this.renderInteractiveForms=t.renderInteractiveForms,e&&(this.container=this._createContainer())}return t.prototype={_createContainer:function(){var t=this.data,e=this.page,n=this.viewport,i=document.createElement("section"),a=t.rect[2]-t.rect[0],o=t.rect[3]-t.rect[1]
i.setAttribute("data-annotation-id",t.id)
var c=s.normalizeRect([t.rect[0],e.view[3]-t.rect[1]+e.view[1],t.rect[2],e.view[3]-t.rect[3]+e.view[1]])
if(u.setProp("transform",i,"matrix("+n.transform.join(",")+")"),u.setProp("transformOrigin",i,-c[0]+"px "+-c[1]+"px"),t.borderStyle.width>0){i.style.borderWidth=t.borderStyle.width+"px",t.borderStyle.style!==r.UNDERLINE&&(a-=2*t.borderStyle.width,o-=2*t.borderStyle.width)
var l=t.borderStyle.horizontalCornerRadius,d=t.borderStyle.verticalCornerRadius
if(l>0||d>0){var f=l+"px / "+d+"px"
u.setProp("borderRadius",i,f)}switch(t.borderStyle.style){case r.SOLID:i.style.borderStyle="solid"
break
case r.DASHED:i.style.borderStyle="dashed"
break
case r.BEVELED:h("Unimplemented border style: beveled")
break
case r.INSET:h("Unimplemented border style: inset")
break
case r.UNDERLINE:i.style.borderBottomStyle="solid"}t.color?i.style.borderColor=s.makeCssRgb(0|t.color[0],0|t.color[1],0|t.color[2]):i.style.borderWidth=0}return i.style.left=c[0]+"px",i.style.top=c[1]+"px",i.style.width=a+"px",i.style.height=o+"px",i},_createPopup:function(t,e,n){e||(e=document.createElement("div"),e.style.height=t.style.height,e.style.width=t.style.width,t.appendChild(e))
var i=new S({container:t,trigger:e,color:n.color,title:n.title,contents:n.contents,hideWrapper:!0}),r=i.render()
r.style.left=t.style.width,t.appendChild(r)},render:function(){throw new Error("Abstract method AnnotationElement.render called")}},t}(),p=function(){function t(t){f.call(this,t,!0)}return s.inherit(t,f,{render:function(){this.container.className="linkAnnotation"
var t=document.createElement("a")
return o(t,{url:this.data.url,target:this.data.newWindow?c.BLANK:void 0}),this.data.url||(this.data.action?this._bindNamedAction(t,this.data.action):this._bindLink(t,this.data.dest)),this.container.appendChild(t),this.container},_bindLink:function(t,e){var n=this
t.href=this.linkService.getDestinationHash(e),t.onclick=function(){return e&&n.linkService.navigateTo(e),!1},e&&(t.className="internalLink")},_bindNamedAction:function(t,e){var n=this
t.href=this.linkService.getAnchorUrl(""),t.onclick=function(){return n.linkService.executeNamedAction(e),!1},t.className="internalLink"}}),t}(),g=function(){function t(t){var e=!!(t.data.hasPopup||t.data.title||t.data.contents)
f.call(this,t,e)}return s.inherit(t,f,{render:function(){this.container.className="textAnnotation"
var t=document.createElement("img")
return t.style.height=this.container.style.height,t.style.width=this.container.style.width,t.src=this.imageResourcesPath+"annotation-"+this.data.name.toLowerCase()+".svg",t.alt="[{{type}} Annotation]",t.dataset.l10nId="text_annotation_type",t.dataset.l10nArgs=JSON.stringify({type:this.data.name}),this.data.hasPopup||this._createPopup(this.container,t,this.data),this.container.appendChild(t),this.container}}),t}(),m=function(){function t(t,e){f.call(this,t,e)}return s.inherit(t,f,{render:function(){return this.container}}),t}(),A=function(){function t(t){var e=t.renderInteractiveForms||!t.data.hasAppearance&&!!t.data.fieldValue
m.call(this,t,e)}var e=["left","center","right"]
return s.inherit(t,m,{render:function(){this.container.className="textWidgetAnnotation"
var t=null
if(this.renderInteractiveForms){if(this.data.multiLine?(t=document.createElement("textarea"),t.textContent=this.data.fieldValue):(t=document.createElement("input"),t.type="text",t.setAttribute("value",this.data.fieldValue)),t.disabled=this.data.readOnly,null!==this.data.maxLen&&(t.maxLength=this.data.maxLen),this.data.comb){var n=this.data.rect[2]-this.data.rect[0],i=n/this.data.maxLen
t.classList.add("comb"),t.style.letterSpacing="calc("+i+"px - 1ch)"}}else{t=document.createElement("div"),t.textContent=this.data.fieldValue,t.style.verticalAlign="middle",t.style.display="table-cell"
var r=null
this.data.fontRefName&&(r=this.page.commonObjs.getData(this.data.fontRefName)),this._setTextStyle(t,r)}return null!==this.data.textAlignment&&(t.style.textAlign=e[this.data.textAlignment]),this.container.appendChild(t),this.container},_setTextStyle:function(t,e){var n=t.style
if(n.fontSize=this.data.fontSize+"px",n.direction=this.data.fontDirection<0?"rtl":"ltr",e){n.fontWeight=e.black?e.bold?"900":"bold":e.bold?"bold":"normal",n.fontStyle=e.italic?"italic":"normal"
var i=e.loadedName?'"'+e.loadedName+'", ':"",r=e.fallbackName||"Helvetica, sans-serif"
n.fontFamily=i+r}}}),t}(),v=function(){function t(t){m.call(this,t,t.renderInteractiveForms)}return s.inherit(t,m,{render:function(){this.container.className="buttonWidgetAnnotation checkBox"
var t=document.createElement("input")
return t.disabled=this.data.readOnly,t.type="checkbox",this.data.fieldValue&&"Off"!==this.data.fieldValue&&t.setAttribute("checked",!0),this.container.appendChild(t),this.container}}),t}(),b=function(){function t(t){m.call(this,t,t.renderInteractiveForms)}return s.inherit(t,m,{render:function(){this.container.className="buttonWidgetAnnotation radioButton"
var t=document.createElement("input")
return t.disabled=this.data.readOnly,t.type="radio",t.name=this.data.fieldName,this.data.fieldValue===this.data.buttonValue&&t.setAttribute("checked",!0),this.container.appendChild(t),this.container}}),t}(),y=function(){function t(t){m.call(this,t,t.renderInteractiveForms)}return s.inherit(t,m,{render:function(){this.container.className="choiceWidgetAnnotation"
var t=document.createElement("select")
t.disabled=this.data.readOnly,this.data.combo||(t.size=this.data.options.length,this.data.multiSelect&&(t.multiple=!0))
for(var e=0,n=this.data.options.length;e<n;e++){var i=this.data.options[e],r=document.createElement("option")
r.textContent=i.displayValue,r.value=i.exportValue,this.data.fieldValue.indexOf(i.displayValue)>=0&&r.setAttribute("selected",!0),t.appendChild(r)}return this.container.appendChild(t),this.container}}),t}(),x=function(){function t(t){var e=!(!t.data.title&&!t.data.contents)
f.call(this,t,e)}return s.inherit(t,f,{render:function(){this.container.className="popupAnnotation"
var t='[data-annotation-id="'+this.data.parentId+'"]',e=this.layer.querySelector(t)
if(!e)return this.container
var n=new S({container:this.container,trigger:e,color:this.data.color,title:this.data.title,contents:this.data.contents}),i=parseFloat(e.style.left),r=parseFloat(e.style.width)
return u.setProp("transformOrigin",this.container,-(i+r)+"px -"+e.style.top),this.container.style.left=i+r+"px",this.container.appendChild(n.render()),this.container}}),t}(),S=function(){function t(t){this.container=t.container,this.trigger=t.trigger,this.color=t.color,this.title=t.title,this.contents=t.contents,this.hideWrapper=t.hideWrapper||!1,this.pinned=!1}return t.prototype={render:function(){var t=document.createElement("div")
t.className="popupWrapper",this.hideElement=this.hideWrapper?t:this.container,this.hideElement.setAttribute("hidden",!0)
var e=document.createElement("div")
e.className="popup"
var n=this.color
if(n){var i=.7*(255-n[0])+n[0],r=.7*(255-n[1])+n[1],a=.7*(255-n[2])+n[2]
e.style.backgroundColor=s.makeCssRgb(0|i,0|r,0|a)}var o=this._formatContents(this.contents),c=document.createElement("h1")
return c.textContent=this.title,this.trigger.addEventListener("click",this._toggle.bind(this)),this.trigger.addEventListener("mouseover",this._show.bind(this,!1)),this.trigger.addEventListener("mouseout",this._hide.bind(this,!1)),e.addEventListener("click",this._hide.bind(this,!0)),e.appendChild(c),e.appendChild(o),t.appendChild(e),t},_formatContents:function(t){for(var e=document.createElement("p"),n=t.split(/(?:\r\n?|\n)/),i=0,r=n.length;i<r;++i){var a=n[i]
e.appendChild(document.createTextNode(a)),i<r-1&&e.appendChild(document.createElement("br"))}return e},_toggle:function(){this.pinned?this._hide(!0):this._show(!0)},_show:function(t){t&&(this.pinned=!0),this.hideElement.hasAttribute("hidden")&&(this.hideElement.removeAttribute("hidden"),this.container.style.zIndex+=1)},_hide:function(t){t&&(this.pinned=!1),this.hideElement.hasAttribute("hidden")||this.pinned||(this.hideElement.setAttribute("hidden",!0),this.container.style.zIndex-=1)}},t}(),k=function(){function t(t){var e=!!(t.data.hasPopup||t.data.title||t.data.contents)
f.call(this,t,e)}return s.inherit(t,f,{render:function(){return this.container.className="highlightAnnotation",this.data.hasPopup||this._createPopup(this.container,null,this.data),this.container}}),t}(),_=function(){function t(t){var e=!!(t.data.hasPopup||t.data.title||t.data.contents)
f.call(this,t,e)}return s.inherit(t,f,{render:function(){return this.container.className="underlineAnnotation",this.data.hasPopup||this._createPopup(this.container,null,this.data),this.container}}),t}(),C=function(){function t(t){var e=!!(t.data.hasPopup||t.data.title||t.data.contents)
f.call(this,t,e)}return s.inherit(t,f,{render:function(){return this.container.className="squigglyAnnotation",this.data.hasPopup||this._createPopup(this.container,null,this.data),this.container}}),t}(),w=function(){function t(t){var e=!!(t.data.hasPopup||t.data.title||t.data.contents)
f.call(this,t,e)}return s.inherit(t,f,{render:function(){return this.container.className="strikeoutAnnotation",this.data.hasPopup||this._createPopup(this.container,null,this.data),this.container}}),t}(),T=function(){function t(t){f.call(this,t,!0),this.filename=l(t.data.file.filename),this.content=t.data.file.content}return s.inherit(t,f,{render:function(){this.container.className="fileAttachmentAnnotation"
var t=document.createElement("div")
return t.style.height=this.container.style.height,t.style.width=this.container.style.width,t.addEventListener("dblclick",this._download.bind(this)),this.data.hasPopup||!this.data.title&&!this.data.contents||this._createPopup(this.container,t,this.data),this.container.appendChild(t),this.container},_download:function(){if(!this.downloadManager)return void h("Download cannot be started due to unavailable download manager")
this.downloadManager.downloadData(this.content,this.filename,"")}}),t}(),L=function(){return{render:function(t){for(var e=new i,n=0,r=t.annotations.length;n<r;n++){var a=t.annotations[n]
if(a){var s={data:a,layer:t.div,page:t.page,viewport:t.viewport,linkService:t.linkService,downloadManager:t.downloadManager,imageResourcesPath:t.imageResourcesPath||d("imageResourcesPath"),renderInteractiveForms:t.renderInteractiveForms||!1},o=e.create(s)
o.isRenderable&&t.div.appendChild(o.render())}}},update:function(t){for(var e=0,n=t.annotations.length;e<n;e++){var i=t.annotations[e],r=t.div.querySelector('[data-annotation-id="'+i.id+'"]')
r&&u.setProp("transform",r,"matrix("+t.viewport.transform.join(",")+")")}t.div.removeAttribute("hidden")}}}()
t.AnnotationLayer=L}(t.pdfjsDisplayAnnotationLayer={},t.pdfjsSharedUtil,t.pdfjsDisplayDOMUtils)}(this),function(t,e){!function(t,e,n){var i=e.Util,r=e.createPromiseCapability,a=n.CustomStyle,s=n.getDefaultSetting,o=function(){function t(t){return!f.test(t)}function e(e,n,r){var a=document.createElement("div"),o={style:null,angle:0,canvasWidth:0,isWhitespace:!1,originalTransform:null,paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0,scale:1}
if(e._textDivs.push(a),t(n.str))return o.isWhitespace=!0,void e._textDivProperties.set(a,o)
var c=i.transform(e._viewport.transform,n.transform),l=Math.atan2(c[1],c[0]),h=r[n.fontName]
h.vertical&&(l+=Math.PI/2)
var u=Math.sqrt(c[2]*c[2]+c[3]*c[3]),d=u
h.ascent?d=h.ascent*d:h.descent&&(d=(1+h.descent)*d)
var f,g
if(0===l?(f=c[4],g=c[5]-d):(f=c[4]+d*Math.sin(l),g=c[5]-d*Math.cos(l)),p[1]=f,p[3]=g,p[5]=u,p[7]=h.fontFamily,o.style=p.join(""),a.setAttribute("style",o.style),a.textContent=n.str,s("pdfBug")&&(a.dataset.fontName=n.fontName),0!==l&&(o.angle=l*(180/Math.PI)),n.str.length>1&&(h.vertical?o.canvasWidth=n.height*e._viewport.scale:o.canvasWidth=n.width*e._viewport.scale),e._textDivProperties.set(a,o),e._enhanceTextSelection){var m=1,A=0
0!==l&&(m=Math.cos(l),A=Math.sin(l))
var v,b,y=(h.vertical?n.height:n.width)*e._viewport.scale,x=u
0!==l?(v=[m,A,-A,m,f,g],b=i.getAxialAlignedBoundingBox([0,0,y,x],v)):b=[f,g,f+y,g+x],e._bounds.push({left:b[0],top:b[1],right:b[2],bottom:b[3],div:a,size:[y,x],m:v})}}function n(t){if(!t._canceled){var e=t._container,n=t._textDivs,i=t._capability,r=n.length
if(r>d)return t._renderingDone=!0,void i.resolve()
var s=document.createElement("canvas")
s.mozOpaque=!0
for(var o,c,l=s.getContext("2d",{alpha:!1}),h=0;h<r;h++){var u=n[h],f=t._textDivProperties.get(u)
if(!f.isWhitespace){var p=u.style.fontSize,g=u.style.fontFamily
p===o&&g===c||(l.font=p+" "+g,o=p,c=g)
var m=l.measureText(u.textContent).width
e.appendChild(u)
var A=""
0!==f.canvasWidth&&m>0&&(f.scale=f.canvasWidth/m,A="scaleX("+f.scale+")"),0!==f.angle&&(A="rotate("+f.angle+"deg) "+A),""!==A&&(f.originalTransform=A,a.setProp("transform",u,A)),t._textDivProperties.set(u,f)}}t._renderingDone=!0,i.resolve()}}function o(t){for(var e=t._bounds,n=t._viewport,r=c(n.width,n.height,e),a=0;a<r.length;a++){var s=e[a].div,o=t._textDivProperties.get(s)
if(0!==o.angle){var l=r[a],h=e[a],u=h.m,d=u[0],f=u[1],p=[[0,0],[0,h.size[1]],[h.size[0],0],h.size],g=new Float64Array(64)
p.forEach(function(t,e){var n=i.applyTransform(t,u)
g[e+0]=d&&(l.left-n[0])/d,g[e+4]=f&&(l.top-n[1])/f,g[e+8]=d&&(l.right-n[0])/d,g[e+12]=f&&(l.bottom-n[1])/f,g[e+16]=f&&(l.left-n[0])/-f,g[e+20]=d&&(l.top-n[1])/d,g[e+24]=f&&(l.right-n[0])/-f,g[e+28]=d&&(l.bottom-n[1])/d,g[e+32]=d&&(l.left-n[0])/-d,g[e+36]=f&&(l.top-n[1])/-f,g[e+40]=d&&(l.right-n[0])/-d,g[e+44]=f&&(l.bottom-n[1])/-f,g[e+48]=f&&(l.left-n[0])/f,g[e+52]=d&&(l.top-n[1])/-d,g[e+56]=f&&(l.right-n[0])/f,g[e+60]=d&&(l.bottom-n[1])/-d})
var m=function(t,e,n){for(var i=0,r=0;r<n;r++){var a=t[e++]
a>0&&(i=i?Math.min(a,i):a)}return i},A=1+Math.min(Math.abs(d),Math.abs(f))
o.paddingLeft=m(g,32,16)/A,o.paddingTop=m(g,48,16)/A,o.paddingRight=m(g,0,16)/A,o.paddingBottom=m(g,16,16)/A,t._textDivProperties.set(s,o)}else o.paddingLeft=e[a].left-r[a].left,o.paddingTop=e[a].top-r[a].top,o.paddingRight=r[a].right-e[a].right,o.paddingBottom=r[a].bottom-e[a].bottom,t._textDivProperties.set(s,o)}}function c(t,e,n){var i=n.map(function(t,e){return{x1:t.left,y1:t.top,x2:t.right,y2:t.bottom,index:e,x1New:void 0,x2New:void 0}})
l(t,i)
var r=new Array(n.length)
return i.forEach(function(t){var e=t.index
r[e]={left:t.x1New,top:0,right:t.x2New,bottom:0}}),n.map(function(e,n){var a=r[n],s=i[n]
s.x1=e.top,s.y1=t-a.right,s.x2=e.bottom,s.y2=t-a.left,s.index=n,s.x1New=void 0,s.x2New=void 0}),l(e,i),i.forEach(function(t){var e=t.index
r[e].top=t.x1New,r[e].bottom=t.x2New}),r}function l(t,e){e.sort(function(t,e){return t.x1-e.x1||t.index-e.index})
var n={x1:-1/0,y1:-1/0,x2:0,y2:1/0,index:-1,x1New:0,x2New:0},i=[{start:-1/0,end:1/0,boundary:n}]
e.forEach(function(t){for(var e=0;e<i.length&&i[e].end<=t.y1;)e++
for(var n=i.length-1;n>=0&&i[n].start>=t.y2;)n--
var r,a,s,o,c=-1/0
for(s=e;s<=n;s++){r=i[s],a=r.boundary
var l
l=a.x2>t.x1?a.index>t.index?a.x1New:t.x1:void 0===a.x2New?(a.x2+t.x1)/2:a.x2New,l>c&&(c=l)}for(t.x1New=c,s=e;s<=n;s++)r=i[s],a=r.boundary,void 0===a.x2New?a.x2>t.x1?a.index>t.index&&(a.x2New=a.x2):a.x2New=c:a.x2New>c&&(a.x2New=Math.max(c,a.x2))
var h=[],u=null
for(s=e;s<=n;s++){r=i[s],a=r.boundary
var d=a.x2>t.x2?a:t
u===d?h[h.length-1].end=r.end:(h.push({start:r.start,end:r.end,boundary:d}),u=d)}for(i[e].start<t.y1&&(h[0].start=t.y1,h.unshift({start:i[e].start,end:t.y1,boundary:i[e].boundary})),t.y2<i[n].end&&(h[h.length-1].end=t.y2,h.push({start:t.y2,end:i[n].end,boundary:i[n].boundary})),s=e;s<=n;s++)if(r=i[s],a=r.boundary,void 0===a.x2New){var f=!1
for(o=e-1;!f&&o>=0&&i[o].start>=a.y1;o--)f=i[o].boundary===a
for(o=n+1;!f&&o<i.length&&i[o].end<=a.y2;o++)f=i[o].boundary===a
for(o=0;!f&&o<h.length;o++)f=h[o].boundary===a
f||(a.x2New=c)}Array.prototype.splice.apply(i,[e,n-e+1].concat(h))}),i.forEach(function(e){var n=e.boundary
void 0===n.x2New&&(n.x2New=Math.max(t,n.x2))})}function h(t,e,n,i,a){this._textContent=t,this._container=e,this._viewport=n,this._textDivs=i||[],this._textDivProperties=new WeakMap,this._renderingDone=!1,this._canceled=!1,this._capability=r(),this._renderTimer=null,this._bounds=[],this._enhanceTextSelection=!!a}function u(t){var e=new h(t.textContent,t.container,t.viewport,t.textDivs,t.enhanceTextSelection)
return e._render(t.timeout),e}var d=1e5,f=/\S/,p=["left: ",0,"px; top: ",0,"px; font-size: ",0,"px; font-family: ","",";"]
return h.prototype={get promise(){return this._capability.promise},cancel:function(){this._canceled=!0,null!==this._renderTimer&&(clearTimeout(this._renderTimer),this._renderTimer=null),this._capability.reject("canceled")},_render:function(t){for(var i=this._textContent.items,r=this._textContent.styles,a=0,s=i.length;a<s;a++)e(this,i[a],r)
if(t){var o=this
this._renderTimer=setTimeout(function(){n(o),o._renderTimer=null},t)}else n(this)},expandTextDivs:function(t){if(this._enhanceTextSelection&&this._renderingDone){null!==this._bounds&&(o(this),this._bounds=null)
for(var e=0,n=this._textDivs.length;e<n;e++){var i=this._textDivs[e],r=this._textDivProperties.get(i)
if(!r.isWhitespace)if(t){var s="",c=""
1!==r.scale&&(s="scaleX("+r.scale+")"),0!==r.angle&&(s="rotate("+r.angle+"deg) "+s),0!==r.paddingLeft&&(c+=" padding-left: "+r.paddingLeft/r.scale+"px;",s+=" translateX("+-r.paddingLeft/r.scale+"px)"),0!==r.paddingTop&&(c+=" padding-top: "+r.paddingTop+"px;",s+=" translateY("+-r.paddingTop+"px)"),0!==r.paddingRight&&(c+=" padding-right: "+r.paddingRight/r.scale+"px;"),0!==r.paddingBottom&&(c+=" padding-bottom: "+r.paddingBottom+"px;"),""!==c&&i.setAttribute("style",r.style+c),""!==s&&a.setProp("transform",i,s)}else i.style.padding=0,a.setProp("transform",i,r.originalTransform||"")}}}},u}()
t.renderTextLayer=o}(t.pdfjsDisplayTextLayer={},t.pdfjsSharedUtil,t.pdfjsDisplayDOMUtils)}(this),function(t,e){!function(t,e,n){var i=e.shadow,r=n.getDefaultSetting,a=function(){function t(t,e,n){var i=t.createShader(n)
if(t.shaderSource(i,e),t.compileShader(i),!t.getShaderParameter(i,t.COMPILE_STATUS)){var r=t.getShaderInfoLog(i)
throw new Error("Error during shader compilation: "+r)}return i}function e(e,n){return t(e,n,e.VERTEX_SHADER)}function n(e,n){return t(e,n,e.FRAGMENT_SHADER)}function a(t,e){for(var n=t.createProgram(),i=0,r=e.length;i<r;++i)t.attachShader(n,e[i])
if(t.linkProgram(n),!t.getProgramParameter(n,t.LINK_STATUS)){var a=t.getProgramInfoLog(n)
throw new Error("Error during program linking: "+a)}return n}function s(t,e,n){t.activeTexture(n)
var i=t.createTexture()
return t.bindTexture(t.TEXTURE_2D,i),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),i}function o(){f||(p=document.createElement("canvas"),f=p.getContext("webgl",{premultipliedalpha:!1}))}function c(){var t,i
o(),t=p,p=null,i=f,f=null
var r=e(i,g),s=n(i,m),c=a(i,[r,s])
i.useProgram(c)
var l={}
l.gl=i,l.canvas=t,l.resolutionLocation=i.getUniformLocation(c,"u_resolution"),l.positionLocation=i.getAttribLocation(c,"a_position"),l.backdropLocation=i.getUniformLocation(c,"u_backdrop"),l.subtypeLocation=i.getUniformLocation(c,"u_subtype")
var h=i.getAttribLocation(c,"a_texCoord"),u=i.getUniformLocation(c,"u_image"),d=i.getUniformLocation(c,"u_mask"),v=i.createBuffer()
i.bindBuffer(i.ARRAY_BUFFER,v),i.bufferData(i.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),i.STATIC_DRAW),i.enableVertexAttribArray(h),i.vertexAttribPointer(h,2,i.FLOAT,!1,0,0),i.uniform1i(u,0),i.uniform1i(d,1),A=l}function l(t,e,n){var i=t.width,r=t.height
A||c()
var a=A,o=a.canvas,l=a.gl
o.width=i,o.height=r,l.viewport(0,0,l.drawingBufferWidth,l.drawingBufferHeight),l.uniform2f(a.resolutionLocation,i,r),n.backdrop?l.uniform4f(a.resolutionLocation,n.backdrop[0],n.backdrop[1],n.backdrop[2],1):l.uniform4f(a.resolutionLocation,0,0,0,0),l.uniform1i(a.subtypeLocation,"Luminosity"===n.subtype?1:0)
var h=s(l,t,l.TEXTURE0),u=s(l,e,l.TEXTURE1),d=l.createBuffer()
return l.bindBuffer(l.ARRAY_BUFFER,d),l.bufferData(l.ARRAY_BUFFER,new Float32Array([0,0,i,0,0,r,0,r,i,0,i,r]),l.STATIC_DRAW),l.enableVertexAttribArray(a.positionLocation),l.vertexAttribPointer(a.positionLocation,2,l.FLOAT,!1,0,0),l.clearColor(0,0,0,0),l.enable(l.BLEND),l.blendFunc(l.ONE,l.ONE_MINUS_SRC_ALPHA),l.clear(l.COLOR_BUFFER_BIT),l.drawArrays(l.TRIANGLES,0,6),l.flush(),l.deleteTexture(h),l.deleteTexture(u),l.deleteBuffer(d),o}function h(){var t,i
o(),t=p,p=null,i=f,f=null
var r=e(i,v),s=n(i,b),c=a(i,[r,s])
i.useProgram(c)
var l={}
l.gl=i,l.canvas=t,l.resolutionLocation=i.getUniformLocation(c,"u_resolution"),l.scaleLocation=i.getUniformLocation(c,"u_scale"),l.offsetLocation=i.getUniformLocation(c,"u_offset"),l.positionLocation=i.getAttribLocation(c,"a_position"),l.colorLocation=i.getAttribLocation(c,"a_color"),y=l}function u(t,e,n,i,r){y||h()
var a=y,s=a.canvas,o=a.gl
s.width=t,s.height=e,o.viewport(0,0,o.drawingBufferWidth,o.drawingBufferHeight),o.uniform2f(a.resolutionLocation,t,e)
var c,l,u,d=0
for(c=0,l=i.length;c<l;c++)switch(i[c].type){case"lattice":u=i[c].coords.length/i[c].verticesPerRow|0,d+=(u-1)*(i[c].verticesPerRow-1)*6
break
case"triangles":d+=i[c].coords.length}var f=new Float32Array(2*d),p=new Uint8Array(3*d),g=r.coords,m=r.colors,A=0,v=0
for(c=0,l=i.length;c<l;c++){var b=i[c],x=b.coords,S=b.colors
switch(b.type){case"lattice":var k=b.verticesPerRow
u=x.length/k|0
for(var _=1;_<u;_++)for(var C=_*k+1,w=1;w<k;w++,C++)f[A]=g[x[C-k-1]],f[A+1]=g[x[C-k-1]+1],f[A+2]=g[x[C-k]],f[A+3]=g[x[C-k]+1],f[A+4]=g[x[C-1]],f[A+5]=g[x[C-1]+1],p[v]=m[S[C-k-1]],p[v+1]=m[S[C-k-1]+1],p[v+2]=m[S[C-k-1]+2],p[v+3]=m[S[C-k]],p[v+4]=m[S[C-k]+1],p[v+5]=m[S[C-k]+2],p[v+6]=m[S[C-1]],p[v+7]=m[S[C-1]+1],p[v+8]=m[S[C-1]+2],f[A+6]=f[A+2],f[A+7]=f[A+3],f[A+8]=f[A+4],f[A+9]=f[A+5],f[A+10]=g[x[C]],f[A+11]=g[x[C]+1],p[v+9]=p[v+3],p[v+10]=p[v+4],p[v+11]=p[v+5],p[v+12]=p[v+6],p[v+13]=p[v+7],p[v+14]=p[v+8],p[v+15]=m[S[C]],p[v+16]=m[S[C]+1],p[v+17]=m[S[C]+2],A+=12,v+=18
break
case"triangles":for(var T=0,L=x.length;T<L;T++)f[A]=g[x[T]],f[A+1]=g[x[T]+1],p[v]=m[S[T]],p[v+1]=m[S[T]+1],p[v+2]=m[S[T]+2],A+=2,v+=3}}n?o.clearColor(n[0]/255,n[1]/255,n[2]/255,1):o.clearColor(0,0,0,0),o.clear(o.COLOR_BUFFER_BIT)
var P=o.createBuffer()
o.bindBuffer(o.ARRAY_BUFFER,P),o.bufferData(o.ARRAY_BUFFER,f,o.STATIC_DRAW),o.enableVertexAttribArray(a.positionLocation),o.vertexAttribPointer(a.positionLocation,2,o.FLOAT,!1,0,0)
var E=o.createBuffer()
return o.bindBuffer(o.ARRAY_BUFFER,E),o.bufferData(o.ARRAY_BUFFER,p,o.STATIC_DRAW),o.enableVertexAttribArray(a.colorLocation),o.vertexAttribPointer(a.colorLocation,3,o.UNSIGNED_BYTE,!1,0,0),o.uniform2f(a.scaleLocation,r.scaleX,r.scaleY),o.uniform2f(a.offsetLocation,r.offsetX,r.offsetY),o.drawArrays(o.TRIANGLES,0,d),o.flush(),o.deleteBuffer(P),o.deleteBuffer(E),s}function d(){A&&A.canvas&&(A.canvas.width=0,A.canvas.height=0),y&&y.canvas&&(y.canvas.width=0,y.canvas.height=0),A=null,y=null}var f,p,g="  attribute vec2 a_position;                                      attribute vec2 a_texCoord;                                                                                                      uniform vec2 u_resolution;                                                                                                      varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;       gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_texCoord = a_texCoord;                                      }                                                             ",m="  precision mediump float;                                                                                                        uniform vec4 u_backdrop;                                        uniform int u_subtype;                                          uniform sampler2D u_image;                                      uniform sampler2D u_mask;                                                                                                       varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec4 imageColor = texture2D(u_image, v_texCoord);               vec4 maskColor = texture2D(u_mask, v_texCoord);                 if (u_backdrop.a > 0.0) {                                         maskColor.rgb = maskColor.rgb * maskColor.a +                                   u_backdrop.rgb * (1.0 - maskColor.a);         }                                                               float lum;                                                      if (u_subtype == 0) {                                             lum = maskColor.a;                                            } else {                                                          lum = maskColor.r * 0.3 + maskColor.g * 0.59 +                        maskColor.b * 0.11;                                     }                                                               imageColor.a *= lum;                                            imageColor.rgb *= imageColor.a;                                 gl_FragColor = imageColor;                                    }                                                             ",A=null,v="  attribute vec2 a_position;                                      attribute vec3 a_color;                                                                                                         uniform vec2 u_resolution;                                      uniform vec2 u_scale;                                           uniform vec2 u_offset;                                                                                                          varying vec4 v_color;                                                                                                           void main() {                                                     vec2 position = (a_position + u_offset) * u_scale;              vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;         gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_color = vec4(a_color / 255.0, 1.0);                         }                                                             ",b="  precision mediump float;                                                                                                        varying vec4 v_color;                                                                                                           void main() {                                                     gl_FragColor = v_color;                                       }                                                             ",y=null
return{get isEnabled(){if(r("disableWebGL"))return!1
var t=!1
try{o(),t=!!f}catch(t){}return i(this,"isEnabled",t)},composeSMask:l,drawFigures:u,clear:d}}()
t.WebGLUtils=a}(t.pdfjsDisplayWebGL={},t.pdfjsSharedUtil,t.pdfjsDisplayDOMUtils)}(this),function(t,e){!function(t,e,n){function i(t){var e=l[t[0]]
return e||o("Unknown IR type: "+t[0]),e.fromIR(t)}var r=e.Util,a=e.info,s=e.isArray,o=e.error,c=n.WebGLUtils,l={}
l.RadialAxial={fromIR:function(t){var e=t[1],n=t[2],i=t[3],r=t[4],a=t[5],s=t[6]
return{type:"Pattern",getPattern:function(t){var o
"axial"===e?o=t.createLinearGradient(i[0],i[1],r[0],r[1]):"radial"===e&&(o=t.createRadialGradient(i[0],i[1],a,r[0],r[1],s))
for(var c=0,l=n.length;c<l;++c){var h=n[c]
o.addColorStop(h[0],h[1])}return o}}}}
var h=function(){function t(t,e,n,i,r,a,s,o){var c,l=e.coords,h=e.colors,u=t.data,d=4*t.width
l[n+1]>l[i+1]&&(c=n,n=i,i=c,c=a,a=s,s=c),l[i+1]>l[r+1]&&(c=i,i=r,r=c,c=s,s=o,o=c),l[n+1]>l[i+1]&&(c=n,n=i,i=c,c=a,a=s,s=c)
var f=(l[n]+e.offsetX)*e.scaleX,p=(l[n+1]+e.offsetY)*e.scaleY,g=(l[i]+e.offsetX)*e.scaleX,m=(l[i+1]+e.offsetY)*e.scaleY,A=(l[r]+e.offsetX)*e.scaleX,v=(l[r+1]+e.offsetY)*e.scaleY
if(!(p>=v))for(var b,y,x,S,k,_,C,w,T,L=h[a],P=h[a+1],E=h[a+2],R=h[s],I=h[s+1],D=h[s+2],j=h[o],O=h[o+1],F=h[o+2],M=Math.round(p),N=Math.round(v),U=M;U<=N;U++){U<m?(T=U<p?0:p===m?1:(p-U)/(p-m),b=f-(f-g)*T,y=L-(L-R)*T,x=P-(P-I)*T,S=E-(E-D)*T):(T=U>v?1:m===v?0:(m-U)/(m-v),b=g-(g-A)*T,y=R-(R-j)*T,x=I-(I-O)*T,S=D-(D-F)*T),T=U<p?0:U>v?1:(p-U)/(p-v),k=f-(f-A)*T,_=L-(L-j)*T,C=P-(P-O)*T,w=E-(E-F)*T
for(var B=Math.round(Math.min(b,k)),W=Math.round(Math.max(b,k)),G=d*U+4*B,X=B;X<=W;X++)T=(b-X)/(b-k),T=T<0?0:T>1?1:T,u[G++]=y-(y-_)*T|0,u[G++]=x-(x-C)*T|0,u[G++]=S-(S-w)*T|0,u[G++]=255}}function e(e,n,i){var r,a,s=n.coords,c=n.colors
switch(n.type){case"lattice":var l=n.verticesPerRow,h=Math.floor(s.length/l)-1,u=l-1
for(r=0;r<h;r++)for(var d=r*l,f=0;f<u;f++,d++)t(e,i,s[d],s[d+1],s[d+l],c[d],c[d+1],c[d+l]),t(e,i,s[d+l+1],s[d+1],s[d+l],c[d+l+1],c[d+1],c[d+l])
break
case"triangles":for(r=0,a=s.length;r<a;r+=3)t(e,i,s[r],s[r+1],s[r+2],c[r],c[r+1],c[r+2])
break
default:o("illigal figure")}}function n(t,n,i,r,a,s,o){var l,h,u,d,f=Math.floor(t[0]),p=Math.floor(t[1]),g=Math.ceil(t[2])-f,m=Math.ceil(t[3])-p,A=Math.min(Math.ceil(Math.abs(g*n[0]*1.1)),3e3),v=Math.min(Math.ceil(Math.abs(m*n[1]*1.1)),3e3),b=g/A,y=m/v,x={coords:i,colors:r,offsetX:-f,offsetY:-p,scaleX:1/b,scaleY:1/y},S=A+4,k=v+4
if(c.isEnabled)l=c.drawFigures(A,v,s,a,x),h=o.getCanvas("mesh",S,k,!1),h.context.drawImage(l,2,2),l=h.canvas
else{h=o.getCanvas("mesh",S,k,!1)
var _=h.context,C=_.createImageData(A,v)
if(s){var w=C.data
for(u=0,d=w.length;u<d;u+=4)w[u]=s[0],w[u+1]=s[1],w[u+2]=s[2],w[u+3]=255}for(u=0;u<a.length;u++)e(C,a[u],x)
_.putImageData(C,2,2),l=h.canvas}return{canvas:l,offsetX:f-2*b,offsetY:p-2*y,scaleX:b,scaleY:y}}return n}()
l.Mesh={fromIR:function(t){var e=t[2],n=t[3],i=t[4],a=t[5],s=t[6],o=t[8]
return{type:"Pattern",getPattern:function(t,c,l){var u
if(l)u=r.singularValueDecompose2dScale(t.mozCurrentTransform)
else if(u=r.singularValueDecompose2dScale(c.baseTransform),s){var d=r.singularValueDecompose2dScale(s)
u=[u[0]*d[0],u[1]*d[1]]}var f=h(a,u,e,n,i,l?null:o,c.cachedCanvases)
return l||(t.setTransform.apply(t,c.baseTransform),s&&t.transform.apply(t,s)),t.translate(f.offsetX,f.offsetY),t.scale(f.scaleX,f.scaleY),t.createPattern(f.canvas,"no-repeat")}}}},l.Dummy={fromIR:function(){return{type:"Pattern",getPattern:function(){return"hotpink"}}}}
var u=function(){function t(t,e,n,i,r){this.operatorList=t[2],this.matrix=t[3]||[1,0,0,1,0,0],this.bbox=t[4],this.xstep=t[5],this.ystep=t[6],this.paintType=t[7],this.tilingType=t[8],this.color=e,this.canvasGraphicsFactory=i,this.baseTransform=r,this.type="Pattern",this.ctx=n}var e={COLORED:1,UNCOLORED:2}
return t.prototype={createPatternCanvas:function(t){var e=this.operatorList,n=this.bbox,i=this.xstep,s=this.ystep,o=this.paintType,c=this.tilingType,l=this.color,h=this.canvasGraphicsFactory
a("TilingType: "+c)
var u=n[0],d=n[1],f=n[2],p=n[3],g=[u,d],m=[u+i,d+s],A=m[0]-g[0],v=m[1]-g[1],b=r.singularValueDecompose2dScale(this.matrix),y=r.singularValueDecompose2dScale(this.baseTransform),x=[b[0]*y[0],b[1]*y[1]]
A=Math.min(Math.ceil(Math.abs(A*x[0])),3e3),v=Math.min(Math.ceil(Math.abs(v*x[1])),3e3)
var S=t.cachedCanvases.getCanvas("pattern",A,v,!0),k=S.context,_=h.createCanvasGraphics(k)
_.groupLevel=t.groupLevel,this.setFillAndStrokeStyleToContext(k,o,l),this.setScale(A,v,i,s),this.transformToScale(_)
var C=[1,0,0,1,-g[0],-g[1]]
return _.transform.apply(_,C),this.clipBbox(_,n,u,d,f,p),_.executeOperatorList(e),S.canvas},setScale:function(t,e,n,i){this.scale=[t/n,e/i]},transformToScale:function(t){var e=this.scale,n=[e[0],0,0,e[1],0,0]
t.transform.apply(t,n)},scaleToContext:function(){var t=this.scale
this.ctx.scale(1/t[0],1/t[1])},clipBbox:function(t,e,n,i,r,a){if(e&&s(e)&&4===e.length){var o=r-n,c=a-i
t.ctx.rect(n,i,o,c),t.clip(),t.endPath()}},setFillAndStrokeStyleToContext:function(t,n,i){switch(n){case e.COLORED:var a=this.ctx
t.fillStyle=a.fillStyle,t.strokeStyle=a.strokeStyle
break
case e.UNCOLORED:var s=r.makeCssRgb(i[0],i[1],i[2])
t.fillStyle=s,t.strokeStyle=s
break
default:o("Unsupported paint type: "+n)}},getPattern:function(t,e){var n=this.createPatternCanvas(e)
return t=this.ctx,t.setTransform.apply(t,this.baseTransform),t.transform.apply(t,this.matrix),this.scaleToContext(),t.createPattern(n,"repeat")}},t}()
t.getShadingPatternFromIR=i,t.TilingPattern=u}(t.pdfjsDisplayPatternHelper={},t.pdfjsSharedUtil,t.pdfjsDisplayWebGL)}(this),function(t,e){!function(t,e,n,i,r){function a(t,e){var n=document.createElement("canvas")
return n.width=t,n.height=e,n}function s(t){t.mozCurrentTransform||(t._originalSave=t.save,t._originalRestore=t.restore,t._originalRotate=t.rotate,t._originalScale=t.scale,t._originalTranslate=t.translate,t._originalTransform=t.transform,t._originalSetTransform=t.setTransform,t._transformMatrix=t._transformMatrix||[1,0,0,1,0,0],t._transformStack=[],Object.defineProperty(t,"mozCurrentTransform",{get:function(){return this._transformMatrix}}),Object.defineProperty(t,"mozCurrentTransformInverse",{get:function(){var t=this._transformMatrix,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],o=e*r-n*i,c=n*i-e*r
return[r/o,n/c,i/c,e/o,(r*a-i*s)/c,(n*a-e*s)/o]}}),t.save=function(){var t=this._transformMatrix
this._transformStack.push(t),this._transformMatrix=t.slice(0,6),this._originalSave()},t.restore=function(){var t=this._transformStack.pop()
t&&(this._transformMatrix=t,this._originalRestore())},t.translate=function(t,e){var n=this._transformMatrix
n[4]=n[0]*t+n[2]*e+n[4],n[5]=n[1]*t+n[3]*e+n[5],this._originalTranslate(t,e)},t.scale=function(t,e){var n=this._transformMatrix
n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*e,n[3]=n[3]*e,this._originalScale(t,e)},t.transform=function(e,n,i,r,a,s){var o=this._transformMatrix
this._transformMatrix=[o[0]*e+o[2]*n,o[1]*e+o[3]*n,o[0]*i+o[2]*r,o[1]*i+o[3]*r,o[0]*a+o[2]*s+o[4],o[1]*a+o[3]*s+o[5]],t._originalTransform(e,n,i,r,a,s)},t.setTransform=function(e,n,i,r,a,s){this._transformMatrix=[e,n,i,r,a,s],t._originalSetTransform(e,n,i,r,a,s)},t.rotate=function(t){var e=Math.cos(t),n=Math.sin(t),i=this._transformMatrix
this._transformMatrix=[i[0]*e+i[2]*n,i[1]*e+i[3]*n,i[0]*-n+i[2]*e,i[1]*-n+i[3]*e,i[4],i[5]],this._originalRotate(t)})}function o(t){var e,n,i,r,a=t.width,s=t.height,o=a+1,c=new Uint8Array(o*(s+1)),l=new Uint8Array([0,2,4,0,1,0,5,4,8,10,0,8,0,2,1,0]),h=a+7&-8,u=t.data,d=new Uint8Array(h*s),f=0
for(e=0,r=u.length;e<r;e++)for(var p=128,g=u[e];p>0;)d[f++]=g&p?0:255,p>>=1
var m=0
for(f=0,0!==d[f]&&(c[0]=1,++m),n=1;n<a;n++)d[f]!==d[f+1]&&(c[n]=d[f]?2:1,++m),f++
for(0!==d[f]&&(c[n]=2,++m),e=1;e<s;e++){f=e*h,i=e*o,d[f-h]!==d[f]&&(c[i]=d[f]?1:8,++m)
var A=(d[f]?4:0)+(d[f-h]?8:0)
for(n=1;n<a;n++)A=(A>>2)+(d[f+1]?4:0)+(d[f-h+1]?8:0),l[A]&&(c[i+n]=l[A],++m),f++
if(d[f-h]!==d[f]&&(c[i+n]=d[f]?2:4,++m),m>1e3)return null}for(f=h*(s-1),i=e*o,0!==d[f]&&(c[i]=8,++m),n=1;n<a;n++)d[f]!==d[f+1]&&(c[i+n]=d[f]?4:8,++m),f++
if(0!==d[f]&&(c[i+n]=4,++m),m>1e3)return null
var v=new Int32Array([0,o,-1,0,-o,0,0,0,1]),b=[]
for(e=0;m&&e<=s;e++){for(var y=e*o,x=y+a;y<x&&!c[y];)y++
if(y!==x){var S,k=[y%o,e],_=c[y],C=y
do{var w=v[_]
do{y+=w}while(!c[y])
S=c[y],5!==S&&10!==S?(_=S,c[y]=0):(_=S&51*_>>4,c[y]&=_>>2|_<<2),k.push(y%o),k.push(y/o|0),--m}while(C!==y)
b.push(k),--e}}return function(t){t.save(),t.scale(1/a,-1/s),t.translate(0,-s),t.beginPath()
for(var e=0,n=b.length;e<n;e++){var i=b[e]
t.moveTo(i[0],i[1])
for(var r=2,o=i.length;r<o;r+=2)t.lineTo(i[r],i[r+1])}t.fill(),t.beginPath(),t.restore()}}var c=e.FONT_IDENTITY_MATRIX,l=e.IDENTITY_MATRIX,h=e.ImageKind,u=e.OPS,d=e.TextRenderingMode,f=e.Uint32ArrayView,p=e.Util,g=e.assert,m=e.info,A=e.isNum,v=e.isArray,b=e.isLittleEndian,y=e.error,x=e.shadow,S=e.warn,k=i.TilingPattern,_=i.getShadingPatternFromIR,C=r.WebGLUtils,w=n.hasCanvasTypedArrays,T=16,L={get value(){return x(L,"value",w())}},P={get value(){return x(P,"value",b())}},E=function(){function t(){this.cache=Object.create(null)}return t.prototype={getCanvas:function(t,e,n,i){var r
if(void 0!==this.cache[t])r=this.cache[t],r.canvas.width=e,r.canvas.height=n,r.context.setTransform(1,0,0,1,0,0)
else{var o=a(e,n),c=o.getContext("2d")
i&&s(c),this.cache[t]=r={canvas:o,context:c}}return r},clear:function(){for(var t in this.cache){var e=this.cache[t]
e.canvas.width=0,e.canvas.height=0,delete this.cache[t]}}},t}(),R=function(){function t(t){this.alphaIsShape=!1,this.fontSize=0,this.fontSizeScale=1,this.textMatrix=l,this.textMatrixScale=1,this.fontMatrix=c,this.leading=0,this.x=0,this.y=0,this.lineX=0,this.lineY=0,this.charSpacing=0,this.wordSpacing=0,this.textHScale=1,this.textRenderingMode=d.FILL,this.textRise=0,this.fillColor="#000000",this.strokeColor="#000000",this.patternFill=!1,this.fillAlpha=1,this.strokeAlpha=1,this.lineWidth=1,this.activeSMask=null,this.resumeSMaskCtx=null,this.old=t}return t.prototype={clone:function(){return Object.create(this)},setCurrentPoint:function(t,e){this.x=t,this.y=e}},t}(),I=function(){function t(t,e,n,i){this.ctx=t,this.current=new R,this.stateStack=[],this.pendingClip=null,this.pendingEOFill=!1,this.res=null,this.xobjs=null,this.commonObjs=e,this.objs=n,this.imageLayer=i,this.groupStack=[],this.processingType3=null,this.baseTransform=null,this.baseTransformStack=[],this.groupLevel=0,this.smaskStack=[],this.smaskCounter=0,this.tempSMask=null,this.cachedCanvases=new E,t&&s(t),this.cachedGetSinglePixelWidth=null}function e(t,e){if("undefined"!=typeof ImageData&&e instanceof ImageData)return void t.putImageData(e,0,0)
var n,i,r,a,s,o=e.height,c=e.width,l=o%T,u=(o-l)/T,d=0===l?u:u+1,p=t.createImageData(c,T),g=0,m=e.data,A=p.data
if(e.kind===h.GRAYSCALE_1BPP){var v=m.byteLength,b=L.value?new Uint32Array(A.buffer):new f(A),x=b.length,S=c+7>>3,k=4294967295,_=P.value||!L.value?4278190080:255
for(i=0;i<d;i++){for(a=i<u?T:l,n=0,r=0;r<a;r++){for(var C=v-g,w=0,E=C>S?c:8*C-7,R=-8&E,I=0,D=0;w<R;w+=8)D=m[g++],b[n++]=128&D?k:_,b[n++]=64&D?k:_,b[n++]=32&D?k:_,b[n++]=16&D?k:_,b[n++]=8&D?k:_,b[n++]=4&D?k:_,b[n++]=2&D?k:_,b[n++]=1&D?k:_
for(;w<E;w++)0===I&&(D=m[g++],I=128),b[n++]=D&I?k:_,I>>=1}for(;n<x;)b[n++]=0
t.putImageData(p,0,i*T)}}else if(e.kind===h.RGBA_32BPP){for(r=0,s=c*T*4,i=0;i<u;i++)A.set(m.subarray(g,g+s)),g+=s,t.putImageData(p,0,r),r+=T
i<d&&(s=c*l*4,A.set(m.subarray(g,g+s)),t.putImageData(p,0,r))}else if(e.kind===h.RGB_24BPP)for(a=T,s=c*a,i=0;i<d;i++){for(i>=u&&(a=l,s=c*a),n=0,r=s;r--;)A[n++]=m[g++],A[n++]=m[g++],A[n++]=m[g++],A[n++]=255
t.putImageData(p,0,i*T)}else y("bad image kind: "+e.kind)}function n(t,e){for(var n=e.height,i=e.width,r=n%T,a=(n-r)/T,s=0===r?a:a+1,o=t.createImageData(i,T),c=0,l=e.data,h=o.data,u=0;u<s;u++){for(var d=u<a?T:r,f=3,p=0;p<d;p++)for(var g=0,m=0;m<i;m++){if(!g){var A=l[c++]
g=128}h[f]=A&g?0:255,f+=4,g>>=1}t.putImageData(o,0,u*T)}}function i(t,e){for(var n=["strokeStyle","fillStyle","fillRule","globalAlpha","lineWidth","lineCap","lineJoin","miterLimit","globalCompositeOperation","font"],i=0,r=n.length;i<r;i++){var a=n[i]
void 0!==t[a]&&(e[a]=t[a])}void 0!==t.setLineDash&&(e.setLineDash(t.getLineDash()),e.lineDashOffset=t.lineDashOffset)}function r(t,e,n,i){for(var r=t.length,a=3;a<r;a+=4){var s=t[a]
if(0===s)t[a-3]=e,t[a-2]=n,t[a-1]=i
else if(s<255){var o=255-s
t[a-3]=t[a-3]*s+e*o>>8,t[a-2]=t[a-2]*s+n*o>>8,t[a-1]=t[a-1]*s+i*o>>8}}}function a(t,e,n){for(var i=t.length,r=3;r<i;r+=4){var a=n?n[t[r]]:t[r]
e[r]=e[r]*a*(1/255)|0}}function b(t,e,n){for(var i=t.length,r=3;r<i;r+=4){var a=77*t[r-3]+152*t[r-2]+28*t[r-1]
e[r]=n?e[r]*n[a>>8]>>8:e[r]*a>>16}}function w(t,e,n,i,s,o,c){var l,h=!!o,u=h?o[0]:0,d=h?o[1]:0,f=h?o[2]:0
l="Luminosity"===s?b:a
for(var p=Math.min(i,Math.ceil(1048576/n)),g=0;g<i;g+=p){var m=Math.min(p,i-g),A=t.getImageData(0,g,n,m),v=e.getImageData(0,g,n,m)
h&&r(A.data,u,d,f),l(A.data,v.data,c),t.putImageData(v,0,g)}}function I(t,e,n){var i=e.canvas,r=e.context
t.setTransform(e.scaleX,0,0,e.scaleY,e.offsetX,e.offsetY)
var a=e.backdrop||null
if(!e.transferMap&&C.isEnabled){var s=C.composeSMask(n.canvas,i,{subtype:e.subtype,backdrop:a})
return t.setTransform(1,0,0,1,0,0),void t.drawImage(s,e.offsetX,e.offsetY)}w(r,n,i.width,i.height,e.subtype,a,e.transferMap),t.drawImage(i,0,0)}var D=["butt","round","square"],j=["miter","round","bevel"],O={},F={}
t.prototype={beginDrawing:function(t,e,n){var i=this.ctx.canvas.width,r=this.ctx.canvas.height
if(this.ctx.save(),this.ctx.fillStyle="rgb(255, 255, 255)",this.ctx.fillRect(0,0,i,r),this.ctx.restore(),n){var a=this.cachedCanvases.getCanvas("transparent",i,r,!0)
this.compositeCtx=this.ctx,this.transparentCanvas=a.canvas,this.ctx=a.context,this.ctx.save(),this.ctx.transform.apply(this.ctx,this.compositeCtx.mozCurrentTransform)}this.ctx.save(),t&&this.ctx.transform.apply(this.ctx,t),this.ctx.transform.apply(this.ctx,e.transform),this.baseTransform=this.ctx.mozCurrentTransform.slice(),this.imageLayer&&this.imageLayer.beginLayout()},executeOperatorList:function(t,e,n,i){var r=t.argsArray,a=t.fnArray,s=e||0,o=r.length
if(o===s)return s
for(var c,l=o-s>10&&"function"==typeof n,h=l?Date.now()+15:0,d=0,f=this.commonObjs,p=this.objs;;){if(void 0!==i&&s===i.nextBreakPoint)return i.breakIt(s,n),s
if((c=a[s])!==u.dependency)this[c].apply(this,r[s])
else for(var g=r[s],m=0,A=g.length;m<A;m++){var v=g[m],b="g"===v[0]&&"_"===v[1],y=b?f:p
if(!y.isResolved(v))return y.get(v,n),s}if(++s===o)return s
if(l&&++d>10){if(Date.now()>h)return n(),s
d=0}}},endDrawing:function(){null!==this.current.activeSMask&&this.endSMaskGroup(),this.ctx.restore(),this.transparentCanvas&&(this.ctx=this.compositeCtx,this.ctx.save(),this.ctx.setTransform(1,0,0,1,0,0),this.ctx.drawImage(this.transparentCanvas,0,0),this.ctx.restore(),this.transparentCanvas=null),this.cachedCanvases.clear(),C.clear(),this.imageLayer&&this.imageLayer.endLayout()},setLineWidth:function(t){this.current.lineWidth=t,this.ctx.lineWidth=t},setLineCap:function(t){this.ctx.lineCap=D[t]},setLineJoin:function(t){this.ctx.lineJoin=j[t]},setMiterLimit:function(t){this.ctx.miterLimit=t},setDash:function(t,e){var n=this.ctx
void 0!==n.setLineDash&&(n.setLineDash(t),n.lineDashOffset=e)},setRenderingIntent:function(t){},setFlatness:function(t){},setGState:function(t){for(var e=0,n=t.length;e<n;e++){var i=t[e],r=i[0],a=i[1]
switch(r){case"LW":this.setLineWidth(a)
break
case"LC":this.setLineCap(a)
break
case"LJ":this.setLineJoin(a)
break
case"ML":this.setMiterLimit(a)
break
case"D":this.setDash(a[0],a[1])
break
case"RI":this.setRenderingIntent(a)
break
case"FL":this.setFlatness(a)
break
case"Font":this.setFont(a[0],a[1])
break
case"CA":this.current.strokeAlpha=i[1]
break
case"ca":this.current.fillAlpha=i[1],this.ctx.globalAlpha=i[1]
break
case"BM":if(a&&a.name&&"Normal"!==a.name){var s=a.name.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()}).substring(1)
this.ctx.globalCompositeOperation=s,this.ctx.globalCompositeOperation!==s&&S('globalCompositeOperation "'+s+'" is not supported')}else this.ctx.globalCompositeOperation="source-over"
break
case"SMask":this.current.activeSMask&&(this.stateStack.length>0&&this.stateStack[this.stateStack.length-1].activeSMask===this.current.activeSMask?this.suspendSMaskGroup():this.endSMaskGroup()),this.current.activeSMask=a?this.tempSMask:null,this.current.activeSMask&&this.beginSMaskGroup(),this.tempSMask=null}}},beginSMaskGroup:function(){var t=this.current.activeSMask,e=t.canvas.width,n=t.canvas.height,r="smaskGroupAt"+this.groupLevel,a=this.cachedCanvases.getCanvas(r,e,n,!0),s=this.ctx,o=s.mozCurrentTransform
this.ctx.save()
var c=a.context
c.scale(1/t.scaleX,1/t.scaleY),c.translate(-t.offsetX,-t.offsetY),c.transform.apply(c,o),t.startTransformInverse=c.mozCurrentTransformInverse,i(s,c),this.ctx=c,this.setGState([["BM","Normal"],["ca",1],["CA",1]]),this.groupStack.push(s),this.groupLevel++},suspendSMaskGroup:function(){var t=this.ctx
this.groupLevel--,this.ctx=this.groupStack.pop(),I(this.ctx,this.current.activeSMask,t),this.ctx.restore(),this.ctx.save(),i(t,this.ctx),this.current.resumeSMaskCtx=t
var e=p.transform(this.current.activeSMask.startTransformInverse,t.mozCurrentTransform)
this.ctx.transform.apply(this.ctx,e),t.save(),t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,t.canvas.width,t.canvas.height),t.restore()},resumeSMaskGroup:function(){var t=this.current.resumeSMaskCtx,e=this.ctx
this.ctx=t,this.groupStack.push(e),this.groupLevel++},endSMaskGroup:function(){var t=this.ctx
this.groupLevel--,this.ctx=this.groupStack.pop(),I(this.ctx,this.current.activeSMask,t),this.ctx.restore(),i(t,this.ctx)
var e=p.transform(this.current.activeSMask.startTransformInverse,t.mozCurrentTransform)
this.ctx.transform.apply(this.ctx,e)},save:function(){this.ctx.save()
var t=this.current
this.stateStack.push(t),this.current=t.clone(),this.current.resumeSMaskCtx=null},restore:function(){this.current.resumeSMaskCtx&&this.resumeSMaskGroup(),null===this.current.activeSMask||0!==this.stateStack.length&&this.stateStack[this.stateStack.length-1].activeSMask===this.current.activeSMask||this.endSMaskGroup(),0!==this.stateStack.length&&(this.current=this.stateStack.pop(),this.ctx.restore(),this.pendingClip=null,this.cachedGetSinglePixelWidth=null)},transform:function(t,e,n,i,r,a){this.ctx.transform(t,e,n,i,r,a),this.cachedGetSinglePixelWidth=null},constructPath:function(t,e){for(var n=this.ctx,i=this.current,r=i.x,a=i.y,s=0,o=0,c=t.length;s<c;s++)switch(0|t[s]){case u.rectangle:r=e[o++],a=e[o++]
var l=e[o++],h=e[o++]
0===l&&(l=this.getSinglePixelWidth()),0===h&&(h=this.getSinglePixelWidth())
var d=r+l,f=a+h
this.ctx.moveTo(r,a),this.ctx.lineTo(d,a),this.ctx.lineTo(d,f),this.ctx.lineTo(r,f),this.ctx.lineTo(r,a),this.ctx.closePath()
break
case u.moveTo:r=e[o++],a=e[o++],n.moveTo(r,a)
break
case u.lineTo:r=e[o++],a=e[o++],n.lineTo(r,a)
break
case u.curveTo:r=e[o+4],a=e[o+5],n.bezierCurveTo(e[o],e[o+1],e[o+2],e[o+3],r,a),o+=6
break
case u.curveTo2:n.bezierCurveTo(r,a,e[o],e[o+1],e[o+2],e[o+3]),r=e[o+2],a=e[o+3],o+=4
break
case u.curveTo3:r=e[o+2],a=e[o+3],n.bezierCurveTo(e[o],e[o+1],r,a,r,a),o+=4
break
case u.closePath:n.closePath()}i.setCurrentPoint(r,a)},closePath:function(){this.ctx.closePath()},stroke:function(t){t=void 0===t||t
var e=this.ctx,n=this.current.strokeColor
e.lineWidth=Math.max(.65*this.getSinglePixelWidth(),this.current.lineWidth),e.globalAlpha=this.current.strokeAlpha,n&&n.hasOwnProperty("type")&&"Pattern"===n.type?(e.save(),e.strokeStyle=n.getPattern(e,this),e.stroke(),e.restore()):e.stroke(),t&&this.consumePath(),e.globalAlpha=this.current.fillAlpha},closeStroke:function(){this.closePath(),this.stroke()},fill:function(t){t=void 0===t||t
var e=this.ctx,n=this.current.fillColor,i=this.current.patternFill,r=!1
i&&(e.save(),this.baseTransform&&e.setTransform.apply(e,this.baseTransform),e.fillStyle=n.getPattern(e,this),r=!0),this.pendingEOFill?(void 0!==e.mozFillRule?(e.mozFillRule="evenodd",e.fill(),e.mozFillRule="nonzero"):e.fill("evenodd"),this.pendingEOFill=!1):e.fill(),r&&e.restore(),t&&this.consumePath()},eoFill:function(){this.pendingEOFill=!0,this.fill()},fillStroke:function(){this.fill(!1),this.stroke(!1),this.consumePath()},eoFillStroke:function(){this.pendingEOFill=!0,this.fillStroke()},closeFillStroke:function(){this.closePath(),this.fillStroke()},closeEOFillStroke:function(){this.pendingEOFill=!0,this.closePath(),this.fillStroke()},endPath:function(){this.consumePath()},clip:function(){this.pendingClip=O},eoClip:function(){this.pendingClip=F},beginText:function(){this.current.textMatrix=l,this.current.textMatrixScale=1,this.current.x=this.current.lineX=0,this.current.y=this.current.lineY=0},endText:function(){var t=this.pendingTextPaths,e=this.ctx
if(void 0===t)return void e.beginPath()
e.save(),e.beginPath()
for(var n=0;n<t.length;n++){var i=t[n]
e.setTransform.apply(e,i.transform),e.translate(i.x,i.y),i.addToPath(e,i.fontSize)}e.restore(),e.clip(),e.beginPath(),delete this.pendingTextPaths},setCharSpacing:function(t){this.current.charSpacing=t},setWordSpacing:function(t){this.current.wordSpacing=t},setHScale:function(t){this.current.textHScale=t/100},setLeading:function(t){this.current.leading=-t},setFont:function(t,e){var n=this.commonObjs.get(t),i=this.current
if(n||y("Can't find font for "+t),i.fontMatrix=n.fontMatrix?n.fontMatrix:c,0!==i.fontMatrix[0]&&0!==i.fontMatrix[3]||S("Invalid font matrix for font "+t),e<0?(e=-e,i.fontDirection=-1):i.fontDirection=1,this.current.font=n,this.current.fontSize=e,!n.isType3Font){var r=n.loadedName||"sans-serif",a=n.black?"900":n.bold?"bold":"normal",s=n.italic?"italic":"normal",o='"'+r+'", '+n.fallbackName,l=e<16?16:e>100?100:e
this.current.fontSizeScale=e/l
var h=s+" "+a+" "+l+"px "+o
this.ctx.font=h}},setTextRenderingMode:function(t){this.current.textRenderingMode=t},setTextRise:function(t){this.current.textRise=t},moveText:function(t,e){this.current.x=this.current.lineX+=t,this.current.y=this.current.lineY+=e},setLeadingMoveText:function(t,e){this.setLeading(-e),this.moveText(t,e)},setTextMatrix:function(t,e,n,i,r,a){this.current.textMatrix=[t,e,n,i,r,a],this.current.textMatrixScale=Math.sqrt(t*t+e*e),this.current.x=this.current.lineX=0,this.current.y=this.current.lineY=0},nextLine:function(){this.moveText(0,this.current.leading)},paintChar:function(t,e,n){var i,r=this.ctx,a=this.current,s=a.font,o=a.textRenderingMode,c=a.fontSize/a.fontSizeScale,l=o&d.FILL_STROKE_MASK,h=!!(o&d.ADD_TO_PATH_FLAG)
if((s.disableFontFace||h)&&(i=s.getPathGenerator(this.commonObjs,t)),s.disableFontFace?(r.save(),r.translate(e,n),r.beginPath(),i(r,c),l!==d.FILL&&l!==d.FILL_STROKE||r.fill(),l!==d.STROKE&&l!==d.FILL_STROKE||r.stroke(),r.restore()):(l!==d.FILL&&l!==d.FILL_STROKE||r.fillText(t,e,n),l!==d.STROKE&&l!==d.FILL_STROKE||r.strokeText(t,e,n)),h){(this.pendingTextPaths||(this.pendingTextPaths=[])).push({transform:r.mozCurrentTransform,x:e,y:n,fontSize:c,addToPath:i})}},get isFontSubpixelAAEnabled(){var t=document.createElement("canvas").getContext("2d")
t.scale(1.5,1),t.fillText("I",0,10)
for(var e=t.getImageData(0,0,10,10).data,n=!1,i=3;i<e.length;i+=4)if(e[i]>0&&e[i]<255){n=!0
break}return x(this,"isFontSubpixelAAEnabled",n)},showText:function(t){var e=this.current,n=e.font
if(n.isType3Font)return this.showType3Text(t)
var i=e.fontSize
if(0!==i){var r=this.ctx,a=e.fontSizeScale,s=e.charSpacing,o=e.wordSpacing,c=e.fontDirection,l=e.textHScale*c,h=t.length,u=n.vertical,f=u?1:-1,p=n.defaultVMetrics,g=i*e.fontMatrix[0],m=e.textRenderingMode===d.FILL&&!n.disableFontFace
r.save(),r.transform.apply(r,e.textMatrix),r.translate(e.x,e.y+e.textRise),e.patternFill&&(r.fillStyle=e.fillColor.getPattern(r,this)),c>0?r.scale(l,-1):r.scale(l,1)
var v=e.lineWidth,b=e.textMatrixScale
if(0===b||0===v){var y=e.textRenderingMode&d.FILL_STROKE_MASK
y!==d.STROKE&&y!==d.FILL_STROKE||(this.cachedGetSinglePixelWidth=null,v=.65*this.getSinglePixelWidth())}else v/=b
1!==a&&(r.scale(a,a),v/=a),r.lineWidth=v
var x,S=0
for(x=0;x<h;++x){var k=t[x]
if(A(k))S+=f*k*i/1e3
else{var _,C,w,T,L=!1,P=(k.isSpace?o:0)+s,E=k.fontChar,R=k.accent,I=k.width
if(u){var D,j,O
D=k.vmetric||p,j=k.vmetric?D[1]:.5*I,j=-j*g,O=D[2]*g,I=D?-D[0]:I,_=j/a,C=(S+O)/a}else _=S/a,C=0
if(n.remeasure&&I>0){var F=1e3*r.measureText(E).width/i*a
if(I<F&&this.isFontSubpixelAAEnabled){var M=I/F
L=!0,r.save(),r.scale(M,1),_/=M}else I!==F&&(_+=(I-F)/2e3*i/a)}(k.isInFont||n.missingFile)&&(m&&!R?r.fillText(E,_,C):(this.paintChar(E,_,C),R&&(w=_+R.offset.x/a,T=C-R.offset.y/a,this.paintChar(R.fontChar,w,T))))
S+=I*g+P*c,L&&r.restore()}}u?e.y-=S*l:e.x+=S*l,r.restore()}},showType3Text:function(t){var e,n,i,r,a=this.ctx,s=this.current,o=s.font,l=s.fontSize,h=s.fontDirection,u=o.vertical?1:-1,f=s.charSpacing,g=s.wordSpacing,m=s.textHScale*h,v=s.fontMatrix||c,b=t.length,y=s.textRenderingMode===d.INVISIBLE
if(!y&&0!==l){for(this.cachedGetSinglePixelWidth=null,a.save(),a.transform.apply(a,s.textMatrix),a.translate(s.x,s.y),a.scale(m,h),e=0;e<b;++e)if(n=t[e],A(n))r=u*n*l/1e3,this.ctx.translate(r,0),s.x+=r*m
else{var x=(n.isSpace?g:0)+f,k=o.charProcOperatorList[n.operatorListId]
if(k){this.processingType3=n,this.save(),a.scale(l,l),a.transform.apply(a,v),this.executeOperatorList(k),this.restore()
var _=p.applyTransform([n.width,0],v)
i=_[0]*l+x,a.translate(i,0),s.x+=i*m}else S('Type3 character "'+n.operatorListId+'" is not available')}a.restore(),this.processingType3=null}},setCharWidth:function(t,e){},setCharWidthAndBounds:function(t,e,n,i,r,a){this.ctx.rect(n,i,r-n,a-i),this.clip(),this.endPath()},getColorN_Pattern:function(e){var n
if("TilingPattern"===e[0]){var i=e[1],r=this.baseTransform||this.ctx.mozCurrentTransform.slice(),a=this,s={createCanvasGraphics:function(e){return new t(e,a.commonObjs,a.objs)}}
n=new k(e,i,this.ctx,s,r)}else n=_(e)
return n},setStrokeColorN:function(){this.current.strokeColor=this.getColorN_Pattern(arguments)},setFillColorN:function(){this.current.fillColor=this.getColorN_Pattern(arguments),this.current.patternFill=!0},setStrokeRGBColor:function(t,e,n){var i=p.makeCssRgb(t,e,n)
this.ctx.strokeStyle=i,this.current.strokeColor=i},setFillRGBColor:function(t,e,n){var i=p.makeCssRgb(t,e,n)
this.ctx.fillStyle=i,this.current.fillColor=i,this.current.patternFill=!1},shadingFill:function(t){var e=this.ctx
this.save()
var n=_(t)
e.fillStyle=n.getPattern(e,this,!0)
var i=e.mozCurrentTransformInverse
if(i){var r=e.canvas,a=r.width,s=r.height,o=p.applyTransform([0,0],i),c=p.applyTransform([0,s],i),l=p.applyTransform([a,0],i),h=p.applyTransform([a,s],i),u=Math.min(o[0],c[0],l[0],h[0]),d=Math.min(o[1],c[1],l[1],h[1]),f=Math.max(o[0],c[0],l[0],h[0]),g=Math.max(o[1],c[1],l[1],h[1])
this.ctx.fillRect(u,d,f-u,g-d)}else this.ctx.fillRect(-1e10,-1e10,2e10,2e10)
this.restore()},beginInlineImage:function(){y("Should not call beginInlineImage")},beginImageData:function(){y("Should not call beginImageData")},paintFormXObjectBegin:function(t,e){if(this.save(),this.baseTransformStack.push(this.baseTransform),v(t)&&6===t.length&&this.transform.apply(this,t),this.baseTransform=this.ctx.mozCurrentTransform,v(e)&&4===e.length){var n=e[2]-e[0],i=e[3]-e[1]
this.ctx.rect(e[0],e[1],n,i),this.clip(),this.endPath()}},paintFormXObjectEnd:function(){this.restore(),this.baseTransform=this.baseTransformStack.pop()},beginGroup:function(t){this.save()
var e=this.ctx
t.isolated||m("TODO: Support non-isolated groups."),t.knockout&&S("Knockout groups not supported.")
var n=e.mozCurrentTransform
t.matrix&&e.transform.apply(e,t.matrix),g(t.bbox,"Bounding box is required.")
var r=p.getAxialAlignedBoundingBox(t.bbox,e.mozCurrentTransform),a=[0,0,e.canvas.width,e.canvas.height]
r=p.intersect(r,a)||[0,0,0,0]
var s=Math.floor(r[0]),o=Math.floor(r[1]),c=Math.max(Math.ceil(r[2])-s,1),l=Math.max(Math.ceil(r[3])-o,1),h=1,u=1
c>4096&&(h=c/4096,c=4096),l>4096&&(u=l/4096,l=4096)
var d="groupAt"+this.groupLevel
t.smask&&(d+="_smask_"+this.smaskCounter++%2)
var f=this.cachedCanvases.getCanvas(d,c,l,!0),A=f.context
A.scale(1/h,1/u),A.translate(-s,-o),A.transform.apply(A,n),t.smask?this.smaskStack.push({canvas:f.canvas,context:A,offsetX:s,offsetY:o,scaleX:h,scaleY:u,subtype:t.smask.subtype,backdrop:t.smask.backdrop,transferMap:t.smask.transferMap||null,startTransformInverse:null}):(e.setTransform(1,0,0,1,0,0),e.translate(s,o),e.scale(h,u)),i(e,A),this.ctx=A,this.setGState([["BM","Normal"],["ca",1],["CA",1]]),this.groupStack.push(e),this.groupLevel++,this.current.activeSMask=null},endGroup:function(t){this.groupLevel--
var e=this.ctx
this.ctx=this.groupStack.pop(),void 0!==this.ctx.imageSmoothingEnabled?this.ctx.imageSmoothingEnabled=!1:this.ctx.mozImageSmoothingEnabled=!1,t.smask?this.tempSMask=this.smaskStack.pop():this.ctx.drawImage(e.canvas,0,0),this.restore()},beginAnnotations:function(){this.save(),this.current=new R,this.baseTransform&&this.ctx.setTransform.apply(this.ctx,this.baseTransform)},endAnnotations:function(){this.restore()},beginAnnotation:function(t,e,n){if(this.save(),v(t)&&4===t.length){var i=t[2]-t[0],r=t[3]-t[1]
this.ctx.rect(t[0],t[1],i,r),this.clip(),this.endPath()}this.transform.apply(this,e),this.transform.apply(this,n)},endAnnotation:function(){this.restore()},paintJpegXObject:function(t,e,n){var i=this.objs.get(t)
if(!i)return void S("Dependent image isn't ready yet")
this.save()
var r=this.ctx
if(r.scale(1/e,-1/n),r.drawImage(i,0,0,i.width,i.height,0,-n,e,n),this.imageLayer){var a=r.mozCurrentTransformInverse,s=this.getCanvasPosition(0,0)
this.imageLayer.appendImage({objId:t,left:s[0],top:s[1],width:e/a[0],height:n/a[3]})}this.restore()},paintImageMaskXObject:function(t){var e=this.ctx,i=t.width,r=t.height,a=this.current.fillColor,s=this.current.patternFill,c=this.processingType3
if(c&&void 0===c.compiled&&(c.compiled=i<=1e3&&r<=1e3?o({data:t.data,width:i,height:r}):null),c&&c.compiled)return void c.compiled(e)
var l=this.cachedCanvases.getCanvas("maskCanvas",i,r),h=l.context
h.save(),n(h,t),h.globalCompositeOperation="source-in",h.fillStyle=s?a.getPattern(h,this):a,h.fillRect(0,0,i,r),h.restore(),this.paintInlineImageXObject(l.canvas)},paintImageMaskXObjectRepeat:function(t,e,i,r){var a=t.width,s=t.height,o=this.current.fillColor,c=this.current.patternFill,l=this.cachedCanvases.getCanvas("maskCanvas",a,s),h=l.context
h.save(),n(h,t),h.globalCompositeOperation="source-in",h.fillStyle=c?o.getPattern(h,this):o,h.fillRect(0,0,a,s),h.restore()
for(var u=this.ctx,d=0,f=r.length;d<f;d+=2)u.save(),u.transform(e,0,0,i,r[d],r[d+1]),u.scale(1,-1),u.drawImage(l.canvas,0,0,a,s,0,-1,1,1),u.restore()},paintImageMaskXObjectGroup:function(t){for(var e=this.ctx,i=this.current.fillColor,r=this.current.patternFill,a=0,s=t.length;a<s;a++){var o=t[a],c=o.width,l=o.height,h=this.cachedCanvases.getCanvas("maskCanvas",c,l),u=h.context
u.save(),n(u,o),u.globalCompositeOperation="source-in",u.fillStyle=r?i.getPattern(u,this):i,u.fillRect(0,0,c,l),u.restore(),e.save(),e.transform.apply(e,o.transform),e.scale(1,-1),e.drawImage(h.canvas,0,0,c,l,0,-1,1,1),e.restore()}},paintImageXObject:function(t){var e=this.objs.get(t)
if(!e)return void S("Dependent image isn't ready yet")
this.paintInlineImageXObject(e)},paintImageXObjectRepeat:function(t,e,n,i){var r=this.objs.get(t)
if(!r)return void S("Dependent image isn't ready yet")
for(var a=r.width,s=r.height,o=[],c=0,l=i.length;c<l;c+=2)o.push({transform:[e,0,0,n,i[c],i[c+1]],x:0,y:0,w:a,h:s})
this.paintInlineImageXObjectGroup(r,o)},paintInlineImageXObject:function(t){var n=t.width,i=t.height,r=this.ctx
this.save(),r.scale(1/n,-1/i)
var a,s,o=r.mozCurrentTransformInverse,c=o[0],l=o[1],h=Math.max(Math.sqrt(c*c+l*l),1),u=o[2],d=o[3],f=Math.max(Math.sqrt(u*u+d*d),1)
if(t instanceof HTMLElement||!t.data)a=t
else{s=this.cachedCanvases.getCanvas("inlineImage",n,i)
var p=s.context
e(p,t),a=s.canvas}for(var g=n,m=i,A="prescale1";h>2&&g>1||f>2&&m>1;){var v=g,b=m
h>2&&g>1&&(v=Math.ceil(g/2),h/=g/v),f>2&&m>1&&(b=Math.ceil(m/2),f/=m/b),s=this.cachedCanvases.getCanvas(A,v,b),p=s.context,p.clearRect(0,0,v,b),p.drawImage(a,0,0,g,m,0,0,v,b),a=s.canvas,g=v,m=b,A="prescale1"===A?"prescale2":"prescale1"}if(r.drawImage(a,0,0,g,m,0,-i,n,i),this.imageLayer){var y=this.getCanvasPosition(0,-i)
this.imageLayer.appendImage({imgData:t,left:y[0],top:y[1],width:n/o[0],height:i/o[3]})}this.restore()},paintInlineImageXObjectGroup:function(t,n){var i=this.ctx,r=t.width,a=t.height,s=this.cachedCanvases.getCanvas("inlineImage",r,a)
e(s.context,t)
for(var o=0,c=n.length;o<c;o++){var l=n[o]
if(i.save(),i.transform.apply(i,l.transform),i.scale(1,-1),i.drawImage(s.canvas,l.x,l.y,l.w,l.h,0,-1,1,1),this.imageLayer){var h=this.getCanvasPosition(l.x,l.y)
this.imageLayer.appendImage({imgData:t,left:h[0],top:h[1],width:r,height:a})}i.restore()}},paintSolidColorImageMask:function(){this.ctx.fillRect(0,0,1,1)},paintXObject:function(){S("Unsupported 'paintXObject' command.")},markPoint:function(t){},markPointProps:function(t,e){},beginMarkedContent:function(t){},beginMarkedContentProps:function(t,e){},endMarkedContent:function(){},beginCompat:function(){},endCompat:function(){},consumePath:function(){var t=this.ctx
this.pendingClip&&(this.pendingClip===F?void 0!==t.mozFillRule?(t.mozFillRule="evenodd",t.clip(),t.mozFillRule="nonzero"):t.clip("evenodd"):t.clip(),this.pendingClip=null),t.beginPath()},getSinglePixelWidth:function(t){if(null===this.cachedGetSinglePixelWidth){this.ctx.save()
var e=this.ctx.mozCurrentTransformInverse
this.ctx.restore(),this.cachedGetSinglePixelWidth=Math.sqrt(Math.max(e[0]*e[0]+e[1]*e[1],e[2]*e[2]+e[3]*e[3]))}return this.cachedGetSinglePixelWidth},getCanvasPosition:function(t,e){var n=this.ctx.mozCurrentTransform
return[n[0]*t+n[2]*e+n[4],n[1]*t+n[3]*e+n[5]]}}
for(var M in u)t.prototype[u[M]]=t.prototype[M]
return t}()
t.CanvasGraphics=I,t.createScratchCanvas=a}(t.pdfjsDisplayCanvas={},t.pdfjsSharedUtil,t.pdfjsDisplayDOMUtils,t.pdfjsDisplayPatternHelper,t.pdfjsDisplayWebGL)}(this),function(t,n){!function(t,n,i,r,a,s,o){function c(t,e,n,i){var r=new H
arguments.length>1&&S("getDocument is called with pdfDataRangeTransport, passwordCallback or progressCallback argument"),e&&(e instanceof Y||(e=Object.create(e),e.length=t.length,e.initialData=t.initialData,e.abort||(e.abort=function(){})),t=Object.create(t),t.range=e),r.onPassword=n||null,r.onProgress=i||null
var a
"string"==typeof t?a={url:t}:T(t)?a={data:t}:t instanceof Y?a={range:t}:("object"!=typeof t&&x("Invalid parameter in getDocument, need either Uint8Array, string or a parameter object"),t.url||t.data||t.range||x("Invalid parameter object: need either .data, .range or .url"),a=t)
var s={},o=null,c=null
for(var h in a)if("url"!==h||"undefined"==typeof window)if("range"!==h)if("worker"!==h)if("data"!==h||a[h]instanceof Uint8Array)s[h]=a[h]
else{var u=a[h]
"string"==typeof u?s[h]=E(u):"object"!=typeof u||null===u||isNaN(u.length)?T(u)?s[h]=new Uint8Array(u):x("Invalid PDF binary data: either typed array, string or array-like object is expected in the data property."):s[h]=new Uint8Array(u)}else c=a[h]
else o=a[h]
else s[h]=new URL(a[h],window.location).href
s.rangeChunkSize=s.rangeChunkSize||U,c||(c=new J,r._worker=c)
var f=r.docId
return c.promise.then(function(){if(r.destroyed)throw new Error("Loading aborted")
return l(c,s,o,f).then(function(t){if(r.destroyed)throw new Error("Loading aborted")
var e=new d(f,t,c.port),n=new Q(e,r,o)
r._transport=n,e.send("Ready",null)})}).catch(r._capability.reject),r}function l(t,e,n,i){return t.destroyed?Promise.reject(new Error("Worker was destroyed")):(e.disableAutoFetch=N("disableAutoFetch"),e.disableStream=N("disableStream"),e.chunkedViewerLoading=!!n,n&&(e.length=n.length,e.initialData=n.initialData),t.messageHandler.sendWithPromise("GetDocRequest",{docId:i,source:e,disableRange:N("disableRange"),maxImageSize:N("maxImageSize"),cMapUrl:N("cMapUrl"),cMapPacked:N("cMapPacked"),disableFontFace:N("disableFontFace"),disableCreateObjectURL:N("disableCreateObjectURL"),postMessageTransfers:N("postMessageTransfers")&&!W,docBaseUrl:e.docBaseUrl}).then(function(e){if(t.destroyed)throw new Error("Worker was destroyed")
return e}))}var h,u=n.InvalidPDFException,d=n.MessageHandler,f=n.MissingPDFException,p=n.PageViewport,g=(n.PasswordResponses,n.PasswordException),m=n.StatTimer,A=n.UnexpectedResponseException,v=n.UnknownErrorException,b=n.Util,y=n.createPromiseCapability,x=n.error,S=n.deprecated,k=n.getVerbosityLevel,_=n.info,C=n.isInt,w=n.isArray,T=n.isArrayBuffer,L=n.isSameOrigin,P=n.loadJpegStream,E=n.stringToBytes,R=n.globalScope,I=n.warn,D=i.FontFaceObject,j=i.FontLoader,O=r.CanvasGraphics,F=r.createScratchCanvas,M=a.Metadata,N=s.getDefaultSetting,U=65536,B=!1,W=!1,G=null,X=!1
"undefined"==typeof window&&(B=!0,void 0===require.ensure&&(require.ensure=require("node-ensure")),X=!0),"undefined"!=typeof __webpack_require__&&(X=!0),"undefined"!=typeof requirejs&&requirejs.toUrl&&(h=requirejs.toUrl("pdfjs-dist/build/pdf.worker.js"))
var z="undefined"!=typeof requirejs&&requirejs.load
G=X?function(t){require.ensure([],function(){var e=require("./pdf.worker.js")
t(e.WorkerMessageHandler)})}:z?function(t){requirejs(["pdfjs-dist/build/pdf.worker"],function(e){t(e.WorkerMessageHandler)})}:null
var H=function(){function t(){this._capability=y(),this._transport=null,this._worker=null,this.docId="d"+e++,this.destroyed=!1,this.onPassword=null,this.onProgress=null,this.onUnsupportedFeature=null}var e=0
return t.prototype={get promise(){return this._capability.promise},destroy:function(){return this.destroyed=!0,(this._transport?this._transport.destroy():Promise.resolve()).then(function(){this._transport=null,this._worker&&(this._worker.destroy(),this._worker=null)}.bind(this))},then:function(t,e){return this.promise.then.apply(this.promise,arguments)}},t}(),Y=function(){function t(t,e){this.length=t,this.initialData=e,this._rangeListeners=[],this._progressListeners=[],this._progressiveReadListeners=[],this._readyCapability=y()}return t.prototype={addRangeListener:function(t){this._rangeListeners.push(t)},addProgressListener:function(t){this._progressListeners.push(t)},addProgressiveReadListener:function(t){this._progressiveReadListeners.push(t)},onDataRange:function(t,e){for(var n=this._rangeListeners,i=0,r=n.length;i<r;++i)n[i](t,e)},onDataProgress:function(t){this._readyCapability.promise.then(function(){for(var e=this._progressListeners,n=0,i=e.length;n<i;++n)e[n](t)}.bind(this))},onDataProgressiveRead:function(t){this._readyCapability.promise.then(function(){for(var e=this._progressiveReadListeners,n=0,i=e.length;n<i;++n)e[n](t)}.bind(this))},transportReady:function(){this._readyCapability.resolve()},requestDataRange:function(t,e){throw new Error("Abstract method PDFDataRangeTransport.requestDataRange")},abort:function(){}},t}(),V=function(){function t(t,e,n){this.pdfInfo=t,this.transport=e,this.loadingTask=n}return t.prototype={get numPages(){return this.pdfInfo.numPages},get fingerprint(){return this.pdfInfo.fingerprint},getPage:function(t){return this.transport.getPage(t)},getPageIndex:function(t){return this.transport.getPageIndex(t)},getDestinations:function(){return this.transport.getDestinations()},getDestination:function(t){return this.transport.getDestination(t)},getPageLabels:function(){return this.transport.getPageLabels()},getAttachments:function(){return this.transport.getAttachments()},getJavaScript:function(){return this.transport.getJavaScript()},getOutline:function(){return this.transport.getOutline()},getMetadata:function(){return this.transport.getMetadata()},getData:function(){return this.transport.getData()},getDownloadInfo:function(){return this.transport.downloadInfoCapability.promise},getStats:function(){return this.transport.getStats()},cleanup:function(){this.transport.startCleanup()},destroy:function(){return this.loadingTask.destroy()}},t}(),q=function(){function t(t,e,n){this.pageIndex=t,this.pageInfo=e,this.transport=n,this.stats=new m,this.stats.enabled=N("enableStats"),this.commonObjs=n.commonObjs,this.objs=new K,this.cleanupAfterRender=!1,this.pendingCleanup=!1,this.intentStates=Object.create(null),this.destroyed=!1}return t.prototype={get pageNumber(){return this.pageIndex+1},get rotate(){return this.pageInfo.rotate},get ref(){return this.pageInfo.ref},get userUnit(){return this.pageInfo.userUnit},get view(){return this.pageInfo.view},getViewport:function(t,e){return arguments.length<2&&(e=this.rotate),new p(this.view,t,e,0,0)},getAnnotations:function(t){var e=t&&t.intent||null
return this.annotationsPromise&&this.annotationsIntent===e||(this.annotationsPromise=this.transport.getAnnotations(this.pageIndex,e),this.annotationsIntent=e),this.annotationsPromise},render:function(t){function e(t){var e=a.renderTasks.indexOf(s)
e>=0&&a.renderTasks.splice(e,1),c.cleanupAfterRender&&(c.pendingCleanup=!0),c._tryCleanup(),t?s.capability.reject(t):s.capability.resolve(),n.timeEnd("Rendering"),n.timeEnd("Overall")}var n=this.stats
n.time("Overall"),this.pendingCleanup=!1
var i="print"===t.intent?"print":"display",r=!0===t.renderInteractiveForms
this.intentStates[i]||(this.intentStates[i]=Object.create(null))
var a=this.intentStates[i]
a.displayReadyCapability||(a.receivingOperatorList=!0,a.displayReadyCapability=y(),a.operatorList={fnArray:[],argsArray:[],lastChunk:!1},this.stats.time("Page Request"),this.transport.messageHandler.send("RenderPageRequest",{pageIndex:this.pageNumber-1,intent:i,renderInteractiveForms:r}))
var s=new $(e,t,this.objs,this.commonObjs,a.operatorList,this.pageNumber)
s.useRequestAnimationFrame="print"!==i,a.renderTasks||(a.renderTasks=[]),a.renderTasks.push(s)
var o=s.task
t.continueCallback&&(S("render is used with continueCallback parameter"),o.onContinue=t.continueCallback)
var c=this
return a.displayReadyCapability.promise.then(function(t){if(c.pendingCleanup)return void e()
n.time("Rendering"),s.initializeGraphics(t),s.operatorListChanged()},function(t){e(t)}),o},getOperatorList:function(){function t(){if(n.operatorList.lastChunk){n.opListReadCapability.resolve(n.operatorList)
var t=n.renderTasks.indexOf(e)
t>=0&&n.renderTasks.splice(t,1)}}this.intentStates.oplist||(this.intentStates.oplist=Object.create(null))
var e,n=this.intentStates.oplist
return n.opListReadCapability||(e={},e.operatorListChanged=t,n.receivingOperatorList=!0,n.opListReadCapability=y(),n.renderTasks=[],n.renderTasks.push(e),n.operatorList={fnArray:[],argsArray:[],lastChunk:!1},this.transport.messageHandler.send("RenderPageRequest",{pageIndex:this.pageIndex,intent:"oplist"})),n.opListReadCapability.promise},getTextContent:function(t){return this.transport.messageHandler.sendWithPromise("GetTextContent",{pageIndex:this.pageNumber-1,normalizeWhitespace:!(!t||!0!==t.normalizeWhitespace),combineTextItems:!t||!0!==t.disableCombineTextItems})},_destroy:function(){this.destroyed=!0,this.transport.pageCache[this.pageIndex]=null
var t=[]
return Object.keys(this.intentStates).forEach(function(e){if("oplist"!==e){this.intentStates[e].renderTasks.forEach(function(e){var n=e.capability.promise.catch(function(){})
t.push(n),e.cancel()})}},this),this.objs.clear(),this.annotationsPromise=null,this.pendingCleanup=!1,Promise.all(t)},destroy:function(){S("page destroy method, use cleanup() instead"),this.cleanup()},cleanup:function(){this.pendingCleanup=!0,this._tryCleanup()},_tryCleanup:function(){this.pendingCleanup&&!Object.keys(this.intentStates).some(function(t){var e=this.intentStates[t]
return 0!==e.renderTasks.length||e.receivingOperatorList},this)&&(Object.keys(this.intentStates).forEach(function(t){delete this.intentStates[t]},this),this.objs.clear(),this.annotationsPromise=null,this.pendingCleanup=!1)},_startRenderPage:function(t,e){var n=this.intentStates[e]
n.displayReadyCapability&&n.displayReadyCapability.resolve(t)},_renderPageChunk:function(t,e){var n,i,r=this.intentStates[e]
for(n=0,i=t.length;n<i;n++)r.operatorList.fnArray.push(t.fnArray[n]),r.operatorList.argsArray.push(t.argsArray[n])
for(r.operatorList.lastChunk=t.lastChunk,n=0;n<r.renderTasks.length;n++)r.renderTasks[n].operatorListChanged()
t.lastChunk&&(r.receivingOperatorList=!1,this._tryCleanup())}},t}(),J=function(){function t(){return void 0!==h?h:N("workerSrc")?N("workerSrc"):e?e.replace(/\.js$/i,".worker.js"):void x("No PDFJS.workerSrc specified")}function n(){return s?s.promise:(s=y(),(G||function(e){b.loadScript(t(),function(){e(window.pdfjsDistBuildPdfWorker.WorkerMessageHandler)})})(s.resolve),s.promise)}function i(t){this._listeners=[],this._defer=t,this._deferred=Promise.resolve(void 0)}function r(t){var e="importScripts('"+t+"');"
return URL.createObjectURL(new Blob([e]))}function a(t){this.name=t,this.destroyed=!1,this._readyCapability=y(),this._port=null,this._webWorker=null,this._messageHandler=null,this._initialize()}var s,o=0
return i.prototype={postMessage:function(t,e){function n(t){if("object"!=typeof t||null===t)return t
if(i.has(t))return i.get(t)
var r,a
if((a=t.buffer)&&T(a)){var s=e&&e.indexOf(a)>=0
return r=t===a?t:s?new t.constructor(a,t.byteOffset,t.byteLength):new t.constructor(t),i.set(t,r),r}r=w(t)?[]:{},i.set(t,r)
for(var o in t){for(var c,l=t;!(c=Object.getOwnPropertyDescriptor(l,o));)l=Object.getPrototypeOf(l)
void 0!==c.value&&"function"!=typeof c.value&&(r[o]=n(c.value))}return r}if(!this._defer)return void this._listeners.forEach(function(e){e.call(this,{data:t})},this)
var i=new WeakMap,r={data:n(t)}
this._deferred.then(function(){this._listeners.forEach(function(t){t.call(this,r)},this)}.bind(this))},addEventListener:function(t,e){this._listeners.push(e)},removeEventListener:function(t,e){var n=this._listeners.indexOf(e)
this._listeners.splice(n,1)},terminate:function(){this._listeners=[]}},a.prototype={get promise(){return this._readyCapability.promise},get port(){return this._port},get messageHandler(){return this._messageHandler},_initialize:function(){if(!B&&!N("disableWorker")&&"undefined"!=typeof Worker){var e=t()
try{L(window.location.href,e)||(e=r(new URL(e,window.location).href))
var n=new Worker(e),i=new d("main","worker",n),a=function(){n.removeEventListener("error",s),i.destroy(),n.terminate(),this.destroyed?this._readyCapability.reject(new Error("Worker was destroyed")):this._setupFakeWorker()}.bind(this),s=function(t){this._webWorker||a()}.bind(this)
n.addEventListener("error",s),i.on("test",function(t){if(n.removeEventListener("error",s),this.destroyed)return void a()
t&&t.supportTypedArray?(this._messageHandler=i,this._port=n,this._webWorker=n,t.supportTransfers||(W=!0),this._readyCapability.resolve(),i.send("configure",{verbosity:k()})):(this._setupFakeWorker(),i.destroy(),n.terminate())}.bind(this)),i.on("console_log",function(t){console.log.apply(console,t)}),i.on("console_error",function(t){console.error.apply(console,t)}),i.on("ready",function(t){if(n.removeEventListener("error",s),this.destroyed)return void a()
try{o()}catch(t){this._setupFakeWorker()}}.bind(this))
var o=function(){var t=N("postMessageTransfers")&&!W,e=new Uint8Array([t?255:0])
try{i.send("test",e,[e.buffer])}catch(t){_("Cannot use postMessage transfers"),e[0]=0,i.send("test",e)}}
return void o()}catch(t){_("The worker has been disabled.")}}this._setupFakeWorker()},_setupFakeWorker:function(){B||N("disableWorker")||(I("Setting up fake worker."),B=!0),n().then(function(t){if(this.destroyed)return void this._readyCapability.reject(new Error("Worker was destroyed"))
var e=Uint8Array!==Float32Array,n=new i(e)
this._port=n
var r="fake"+o++,a=new d(r+"_worker",r,n)
t.setup(a,n)
var s=new d(r,r+"_worker",n)
this._messageHandler=s,this._readyCapability.resolve()}.bind(this))},destroy:function(){this.destroyed=!0,this._webWorker&&(this._webWorker.terminate(),this._webWorker=null),this._port=null,this._messageHandler&&(this._messageHandler.destroy(),this._messageHandler=null)}},a}(),Q=function(){function t(t,e,n){this.messageHandler=t,this.loadingTask=e,this.pdfDataRangeTransport=n,this.commonObjs=new K,this.fontLoader=new j(e.docId),this.destroyed=!1,this.destroyCapability=null,this._passwordCapability=null,this.pageCache=[],this.pagePromises=[],this.downloadInfoCapability=y(),this.setupMessageHandler()}return t.prototype={destroy:function(){if(this.destroyCapability)return this.destroyCapability.promise
this.destroyed=!0,this.destroyCapability=y(),this._passwordCapability&&this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"))
var t=[]
this.pageCache.forEach(function(e){e&&t.push(e._destroy())}),this.pageCache=[],this.pagePromises=[]
var e=this,n=this.messageHandler.sendWithPromise("Terminate",null)
return t.push(n),Promise.all(t).then(function(){e.fontLoader.clear(),e.pdfDataRangeTransport&&(e.pdfDataRangeTransport.abort(),e.pdfDataRangeTransport=null),e.messageHandler&&(e.messageHandler.destroy(),e.messageHandler=null),e.destroyCapability.resolve()},this.destroyCapability.reject),this.destroyCapability.promise},setupMessageHandler:function(){var t=this.messageHandler,e=this.loadingTask,n=this.pdfDataRangeTransport
n&&(n.addRangeListener(function(e,n){t.send("OnDataRange",{begin:e,chunk:n})}),n.addProgressListener(function(e){t.send("OnDataProgress",{loaded:e})}),n.addProgressiveReadListener(function(e){t.send("OnDataRange",{chunk:e})}),t.on("RequestDataRange",function(t){n.requestDataRange(t.begin,t.end)},this)),t.on("GetDoc",function(t){var e=t.pdfInfo
this.numPages=t.pdfInfo.numPages
var n=this.loadingTask,i=new V(e,this,n)
this.pdfDocument=i,n._capability.resolve(i)},this),t.on("PasswordRequest",function(t){if(this._passwordCapability=y(),e.onPassword){var n=function(t){this._passwordCapability.resolve({password:t})}.bind(this)
e.onPassword(n,t.code)}else this._passwordCapability.reject(new g(t.message,t.code))
return this._passwordCapability.promise},this),t.on("PasswordException",function(t){e._capability.reject(new g(t.message,t.code))},this),t.on("InvalidPDF",function(t){this.loadingTask._capability.reject(new u(t.message))},this),t.on("MissingPDF",function(t){this.loadingTask._capability.reject(new f(t.message))},this),t.on("UnexpectedResponse",function(t){this.loadingTask._capability.reject(new A(t.message,t.status))},this),t.on("UnknownError",function(t){this.loadingTask._capability.reject(new v(t.message,t.details))},this),t.on("DataLoaded",function(t){this.downloadInfoCapability.resolve(t)},this),t.on("PDFManagerReady",function(t){this.pdfDataRangeTransport&&this.pdfDataRangeTransport.transportReady()},this),t.on("StartRenderPage",function(t){if(!this.destroyed){var e=this.pageCache[t.pageIndex]
e.stats.timeEnd("Page Request"),e._startRenderPage(t.transparency,t.intent)}},this),t.on("RenderPageChunk",function(t){if(!this.destroyed){this.pageCache[t.pageIndex]._renderPageChunk(t.operatorList,t.intent)}},this),t.on("commonobj",function(t){if(!this.destroyed){var e=t[0],n=t[1]
if(!this.commonObjs.hasData(e))switch(n){case"Font":var i=t[2]
if("error"in i){var r=i.error
I("Error during font loading: "+r),this.commonObjs.resolve(e,r)
break}var a=null
N("pdfBug")&&R.FontInspector&&R.FontInspector.enabled&&(a={registerFont:function(t,e){R.FontInspector.fontAdded(t,e)}})
var s=new D(i,{isEvalSuported:N("isEvalSupported"),disableFontFace:N("disableFontFace"),fontRegistry:a})
this.fontLoader.bind([s],function(t){this.commonObjs.resolve(e,s)}.bind(this))
break
case"FontPath":this.commonObjs.resolve(e,t[2])
break
default:x("Got unknown common object type "+n)}}},this),t.on("obj",function(t){if(!this.destroyed){var e,n=t[0],i=t[1],r=t[2],a=this.pageCache[i]
if(!a.objs.hasData(n))switch(r){case"JpegStream":e=t[3],P(n,e,a.objs)
break
case"Image":e=t[3],a.objs.resolve(n,e)
e&&"data"in e&&e.data.length>8e6&&(a.cleanupAfterRender=!0)
break
default:x("Got unknown object type "+r)}}},this),t.on("DocProgress",function(t){if(!this.destroyed){var e=this.loadingTask
e.onProgress&&e.onProgress({loaded:t.loaded,total:t.total})}},this),t.on("PageError",function(t){if(!this.destroyed){var e=this.pageCache[t.pageNum-1],n=e.intentStates[t.intent]
if(n.displayReadyCapability?n.displayReadyCapability.reject(t.error):x(t.error),n.operatorList){n.operatorList.lastChunk=!0
for(var i=0;i<n.renderTasks.length;i++)n.renderTasks[i].operatorListChanged()}}},this),t.on("UnsupportedFeature",function(t){if(!this.destroyed){var e=t.featureId,n=this.loadingTask
n.onUnsupportedFeature&&n.onUnsupportedFeature(e),tt.notify(e)}},this),t.on("JpegDecode",function(t){if(this.destroyed)return Promise.reject(new Error("Worker was destroyed"))
var e=t[0],n=t[1]
return 3!==n&&1!==n?Promise.reject(new Error("Only 3 components or 1 component can be returned")):new Promise(function(t,i){var r=new Image
r.onload=function(){var e=r.width,i=r.height,a=e*i,s=4*a,o=new Uint8Array(a*n),c=F(e,i),l=c.getContext("2d")
l.drawImage(r,0,0)
var h,u,d=l.getImageData(0,0,e,i).data
if(3===n)for(h=0,u=0;h<s;h+=4,u+=3)o[u]=d[h],o[u+1]=d[h+1],o[u+2]=d[h+2]
else if(1===n)for(h=0,u=0;h<s;h+=4,u++)o[u]=d[h]
t({data:o,width:e,height:i})},r.onerror=function(){i(new Error("JpegDecode failed to load image"))},r.src=e})},this)},getData:function(){return this.messageHandler.sendWithPromise("GetData",null)},getPage:function(t,e){if(!C(t)||t<=0||t>this.numPages)return Promise.reject(new Error("Invalid page request"))
var n=t-1
if(n in this.pagePromises)return this.pagePromises[n]
var i=this.messageHandler.sendWithPromise("GetPage",{pageIndex:n}).then(function(t){if(this.destroyed)throw new Error("Transport destroyed")
var e=new q(n,t,this)
return this.pageCache[n]=e,e}.bind(this))
return this.pagePromises[n]=i,i},getPageIndex:function(t){return this.messageHandler.sendWithPromise("GetPageIndex",{ref:t}).catch(function(t){return Promise.reject(new Error(t))})},getAnnotations:function(t,e){return this.messageHandler.sendWithPromise("GetAnnotations",{pageIndex:t,intent:e})},getDestinations:function(){return this.messageHandler.sendWithPromise("GetDestinations",null)},getDestination:function(t){return this.messageHandler.sendWithPromise("GetDestination",{id:t})},getPageLabels:function(){return this.messageHandler.sendWithPromise("GetPageLabels",null)},getAttachments:function(){return this.messageHandler.sendWithPromise("GetAttachments",null)},getJavaScript:function(){return this.messageHandler.sendWithPromise("GetJavaScript",null)},getOutline:function(){return this.messageHandler.sendWithPromise("GetOutline",null)},getMetadata:function(){return this.messageHandler.sendWithPromise("GetMetadata",null).then(function(t){return{info:t[0],metadata:t[1]?new M(t[1]):null}})},getStats:function(){return this.messageHandler.sendWithPromise("GetStats",null)},startCleanup:function(){this.messageHandler.sendWithPromise("Cleanup",null).then(function(){for(var t=0,e=this.pageCache.length;t<e;t++){var n=this.pageCache[t]
n&&n.cleanup()}this.commonObjs.clear(),this.fontLoader.clear()}.bind(this))}},t}(),K=function(){function t(){this.objs=Object.create(null)}return t.prototype={ensureObj:function(t){if(this.objs[t])return this.objs[t]
var e={capability:y(),data:null,resolved:!1}
return this.objs[t]=e,e},get:function(t,e){if(e)return this.ensureObj(t).capability.promise.then(e),null
var n=this.objs[t]
return n&&n.resolved||x("Requesting object that isn't resolved yet "+t),n.data},resolve:function(t,e){var n=this.ensureObj(t)
n.resolved=!0,n.data=e,n.capability.resolve(e)},isResolved:function(t){var e=this.objs
return!!e[t]&&e[t].resolved},hasData:function(t){return this.isResolved(t)},getData:function(t){var e=this.objs
return e[t]&&e[t].resolved?e[t].data:null},clear:function(){this.objs=Object.create(null)}},t}(),Z=function(){function t(t){this._internalRenderTask=t,this.onContinue=null}return t.prototype={get promise(){return this._internalRenderTask.capability.promise},cancel:function(){this._internalRenderTask.cancel()},then:function(t,e){return this.promise.then.apply(this.promise,arguments)}},t}(),$=function(){function t(t,e,n,i,r,a){this.callback=t,this.params=e,this.objs=n,this.commonObjs=i,this.operatorListIdx=null,this.operatorList=r,this.pageNumber=a,this.running=!1,this.graphicsReadyCallback=null,this.graphicsReady=!1,this.useRequestAnimationFrame=!1,this.cancelled=!1,this.capability=y(),this.task=new Z(this),this._continueBound=this._continue.bind(this),this._scheduleNextBound=this._scheduleNext.bind(this),this._nextBound=this._next.bind(this)}return t.prototype={initializeGraphics:function(t){if(!this.cancelled){N("pdfBug")&&R.StepperManager&&R.StepperManager.enabled&&(this.stepper=R.StepperManager.create(this.pageNumber-1),this.stepper.init(this.operatorList),this.stepper.nextBreakPoint=this.stepper.getNextBreakPoint())
var e=this.params
this.gfx=new O(e.canvasContext,this.commonObjs,this.objs,e.imageLayer),this.gfx.beginDrawing(e.transform,e.viewport,t),this.operatorListIdx=0,this.graphicsReady=!0,this.graphicsReadyCallback&&this.graphicsReadyCallback()}},cancel:function(){this.running=!1,this.cancelled=!0,this.callback("cancelled")},operatorListChanged:function(){if(!this.graphicsReady)return void(this.graphicsReadyCallback||(this.graphicsReadyCallback=this._continueBound))
this.stepper&&this.stepper.updateOperatorList(this.operatorList),this.running||this._continue()},_continue:function(){this.running=!0,this.cancelled||(this.task.onContinue?this.task.onContinue(this._scheduleNextBound):this._scheduleNext())},_scheduleNext:function(){this.useRequestAnimationFrame&&"undefined"!=typeof window?window.requestAnimationFrame(this._nextBound):Promise.resolve(void 0).then(this._nextBound)},_next:function(){this.cancelled||(this.operatorListIdx=this.gfx.executeOperatorList(this.operatorList,this.operatorListIdx,this._continueBound,this.stepper),this.operatorListIdx===this.operatorList.argsArray.length&&(this.running=!1,this.operatorList.lastChunk&&(this.gfx.endDrawing(),this.callback())))}},t}(),tt=function(){var t=[]
return{listen:function(e){S("Global UnsupportedManager.listen is used:  use PDFDocumentLoadingTask.onUnsupportedFeature instead"),t.push(e)},notify:function(e){for(var n=0,i=t.length;n<i;n++)t[n](e)}}}()
t.version="1.7.225",t.build="17d135f",t.getDocument=c,t.PDFDataRangeTransport=Y,t.PDFWorker=J,t.PDFDocumentProxy=V,t.PDFPageProxy=q,t._UnsupportedManager=tt}(t.pdfjsDisplayAPI={},t.pdfjsSharedUtil,t.pdfjsDisplayFontLoader,t.pdfjsDisplayCanvas,t.pdfjsDisplayMetadata,t.pdfjsDisplayDOMUtils)}(this),function(t,e){!function(t,e,n,i,r,a,s,o){var c=e.globalScope,l=e.deprecated,h=e.warn,u=n.LinkTarget,d=n.DEFAULT_LINK_REL,f="undefined"==typeof window
c.PDFJS||(c.PDFJS={})
var p=c.PDFJS
p.version="1.7.225",p.build="17d135f",p.pdfBug=!1,void 0!==p.verbosity&&e.setVerbosityLevel(p.verbosity),delete p.verbosity,Object.defineProperty(p,"verbosity",{get:function(){return e.getVerbosityLevel()},set:function(t){e.setVerbosityLevel(t)},enumerable:!0,configurable:!0}),p.VERBOSITY_LEVELS=e.VERBOSITY_LEVELS,p.OPS=e.OPS,p.UNSUPPORTED_FEATURES=e.UNSUPPORTED_FEATURES,p.isValidUrl=n.isValidUrl,p.shadow=e.shadow,p.createBlob=e.createBlob,p.createObjectURL=function(t,n){return e.createObjectURL(t,n,p.disableCreateObjectURL)},Object.defineProperty(p,"isLittleEndian",{configurable:!0,get:function(){var t=e.isLittleEndian()
return e.shadow(p,"isLittleEndian",t)}}),p.removeNullCharacters=e.removeNullCharacters,p.PasswordResponses=e.PasswordResponses,p.PasswordException=e.PasswordException,p.UnknownErrorException=e.UnknownErrorException,p.InvalidPDFException=e.InvalidPDFException,p.MissingPDFException=e.MissingPDFException,p.UnexpectedResponseException=e.UnexpectedResponseException,p.Util=e.Util,p.PageViewport=e.PageViewport,p.createPromiseCapability=e.createPromiseCapability,p.maxImageSize=void 0===p.maxImageSize?-1:p.maxImageSize,p.cMapUrl=void 0===p.cMapUrl?null:p.cMapUrl,p.cMapPacked=void 0!==p.cMapPacked&&p.cMapPacked,p.disableFontFace=void 0!==p.disableFontFace&&p.disableFontFace,p.imageResourcesPath=void 0===p.imageResourcesPath?"":p.imageResourcesPath,p.disableWorker=void 0!==p.disableWorker&&p.disableWorker,p.workerSrc=void 0===p.workerSrc?null:p.workerSrc,p.disableRange=void 0!==p.disableRange&&p.disableRange,p.disableStream=void 0!==p.disableStream&&p.disableStream,p.disableAutoFetch=void 0!==p.disableAutoFetch&&p.disableAutoFetch,p.pdfBug=void 0!==p.pdfBug&&p.pdfBug,p.postMessageTransfers=void 0===p.postMessageTransfers||p.postMessageTransfers,p.disableCreateObjectURL=void 0!==p.disableCreateObjectURL&&p.disableCreateObjectURL,p.disableWebGL=void 0===p.disableWebGL||p.disableWebGL,p.externalLinkTarget=void 0===p.externalLinkTarget?u.NONE:p.externalLinkTarget,p.externalLinkRel=void 0===p.externalLinkRel?d:p.externalLinkRel,p.isEvalSupported=void 0===p.isEvalSupported||p.isEvalSupported
var g=p.openExternalLinksInNewWindow
delete p.openExternalLinksInNewWindow,Object.defineProperty(p,"openExternalLinksInNewWindow",{get:function(){return p.externalLinkTarget===u.BLANK},set:function(t){if(t&&l('PDFJS.openExternalLinksInNewWindow, please use "PDFJS.externalLinkTarget = PDFJS.LinkTarget.BLANK" instead.'),p.externalLinkTarget!==u.NONE)return void h("PDFJS.externalLinkTarget is already initialized")
p.externalLinkTarget=t?u.BLANK:u.NONE},enumerable:!0,configurable:!0}),g&&(p.openExternalLinksInNewWindow=g),p.getDocument=i.getDocument,p.PDFDataRangeTransport=i.PDFDataRangeTransport,p.PDFWorker=i.PDFWorker,Object.defineProperty(p,"hasCanvasTypedArrays",{configurable:!0,get:function(){var t=n.hasCanvasTypedArrays()
return e.shadow(p,"hasCanvasTypedArrays",t)}}),p.CustomStyle=n.CustomStyle,p.LinkTarget=u,p.addLinkAttributes=n.addLinkAttributes,p.getFilenameFromUrl=n.getFilenameFromUrl,p.isExternalLinkTargetSet=n.isExternalLinkTargetSet,p.AnnotationLayer=r.AnnotationLayer,p.renderTextLayer=a.renderTextLayer,p.Metadata=s.Metadata,p.SVGGraphics=o.SVGGraphics,p.UnsupportedManager=i._UnsupportedManager,t.globalScope=c,t.isWorker=f,t.PDFJS=c.PDFJS}(t.pdfjsDisplayGlobal={},t.pdfjsSharedUtil,t.pdfjsDisplayDOMUtils,t.pdfjsDisplayAPI,t.pdfjsDisplayAnnotationLayer,t.pdfjsDisplayTextLayer,t.pdfjsDisplayMetadata,t.pdfjsDisplaySVG)}(this)}).call(n),t.PDFJS=n.pdfjsDisplayGlobal.PDFJS,t.build=n.pdfjsDisplayAPI.build,t.version=n.pdfjsDisplayAPI.version,t.getDocument=n.pdfjsDisplayAPI.getDocument,t.PDFDataRangeTransport=n.pdfjsDisplayAPI.PDFDataRangeTransport,t.PDFWorker=n.pdfjsDisplayAPI.PDFWorker,t.renderTextLayer=n.pdfjsDisplayTextLayer.renderTextLayer,t.AnnotationLayer=n.pdfjsDisplayAnnotationLayer.AnnotationLayer,t.CustomStyle=n.pdfjsDisplayDOMUtils.CustomStyle,t.PasswordResponses=n.pdfjsSharedUtil.PasswordResponses,t.InvalidPDFException=n.pdfjsSharedUtil.InvalidPDFException,t.MissingPDFException=n.pdfjsSharedUtil.MissingPDFException,t.SVGGraphics=n.pdfjsDisplaySVG.SVGGraphics,t.UnexpectedResponseException=n.pdfjsSharedUtil.UnexpectedResponseException,t.OPS=n.pdfjsSharedUtil.OPS,t.UNSUPPORTED_FEATURES=n.pdfjsSharedUtil.UNSUPPORTED_FEATURES,t.isValidUrl=n.pdfjsDisplayDOMUtils.isValidUrl,t.createValidAbsoluteUrl=n.pdfjsSharedUtil.createValidAbsoluteUrl,t.createObjectURL=n.pdfjsSharedUtil.createObjectURL,t.removeNullCharacters=n.pdfjsSharedUtil.removeNullCharacters,t.shadow=n.pdfjsSharedUtil.shadow,t.createBlob=n.pdfjsSharedUtil.createBlob,t.getFilenameFromUrl=n.pdfjsDisplayDOMUtils.getFilenameFromUrl,t.addLinkAttributes=n.pdfjsDisplayDOMUtils.addLinkAttributes})
