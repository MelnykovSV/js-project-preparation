var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},i={},r=e.parcelRequire27d3;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},e.parcelRequire27d3=r),r.register("aaQnt",(function(e,t){
/*!
 * jQuery JavaScript Library v3.6.4
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-03-08T15:28Z
 */
!function(t,n){"object"==typeof e.exports?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t)}("undefined"!=typeof window?window:e.exports,(function(e,t){var n=[],i=Object.getPrototypeOf,r=n.slice,s=n.flat?function(e){return n.flat.call(e)}:function(e){return n.concat.apply([],e)},o=n.push,a=n.indexOf,c={},l=c.toString,u=c.hasOwnProperty,h=u.toString,d=h.call(Object),p={},f=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},g=function(e){return null!=e&&e===e.window},m=e.document,_={type:!0,src:!0,nonce:!0,noModule:!0};function v(e,t,n){var i,r,s=(n=n||m).createElement("script");if(s.text=e,t)for(i in _)(r=t[i]||t.getAttribute&&t.getAttribute(i))&&s.setAttribute(i,r);n.head.appendChild(s).parentNode.removeChild(s)}function y(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[l.call(e)]||"object":typeof e}var w="3.6.4",b=function(e,t){return new b.fn.init(e,t)};function C(e){var t=!!e&&"length"in e&&e.length,n=y(e);return!f(e)&&!g(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}b.fn=b.prototype={jquery:w,constructor:b,length:0,toArray:function(){return r.call(this)},get:function(e){return null==e?r.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return b.each(this,e)},map:function(e){return this.pushStack(b.map(this,(function(t,n){return e.call(t,n,t)})))},slice:function(){return this.pushStack(r.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(b.grep(this,(function(e,t){return(t+1)%2})))},odd:function(){return this.pushStack(b.grep(this,(function(e,t){return t%2})))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:o,sort:n.sort,splice:n.splice},b.extend=b.fn.extend=function(){var e,t,n,i,r,s,o=arguments[0]||{},a=1,c=arguments.length,l=!1;for("boolean"==typeof o&&(l=o,o=arguments[a]||{},a++),"object"==typeof o||f(o)||(o={}),a===c&&(o=this,a--);a<c;a++)if(null!=(e=arguments[a]))for(t in e)i=e[t],"__proto__"!==t&&o!==i&&(l&&i&&(b.isPlainObject(i)||(r=Array.isArray(i)))?(n=o[t],s=r&&!Array.isArray(n)?[]:r||b.isPlainObject(n)?n:{},r=!1,o[t]=b.extend(l,s,i)):void 0!==i&&(o[t]=i));return o},b.extend({expando:"jQuery"+(w+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==l.call(e))&&(!(t=i(e))||"function"==typeof(n=u.call(t,"constructor")&&t.constructor)&&h.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){v(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,i=0;if(C(e))for(n=e.length;i<n&&!1!==t.call(e[i],i,e[i]);i++);else for(i in e)if(!1===t.call(e[i],i,e[i]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?b.merge(n,"string"==typeof e?[e]:e):o.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:a.call(t,e,n)},merge:function(e,t){for(var n=+t.length,i=0,r=e.length;i<n;i++)e[r++]=t[i];return e.length=r,e},grep:function(e,t,n){for(var i=[],r=0,s=e.length,o=!n;r<s;r++)!t(e[r],r)!==o&&i.push(e[r]);return i},map:function(e,t,n){var i,r,o=0,a=[];if(C(e))for(i=e.length;o<i;o++)null!=(r=t(e[o],o,n))&&a.push(r);else for(o in e)null!=(r=t(e[o],o,n))&&a.push(r);return s(a)},guid:1,support:p}),"function"==typeof Symbol&&(b.fn[Symbol.iterator]=n[Symbol.iterator]),b.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(e,t){c["[object "+t+"]"]=t.toLowerCase()}));var T=
/*!
 * Sizzle CSS Selector Engine v2.3.10
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2023-02-14
 */
function(e){var t,n,i,r,s,o,a,c,l,u,h,d,p,f,g,m,_,v,y,w="sizzle"+1*new Date,b=e.document,C=0,T=0,I=ce(),E=ce(),k=ce(),S=ce(),x=function(e,t){return e===t&&(h=!0),0},N={}.hasOwnProperty,P=[],R=P.pop,A=P.push,D=P.push,O=P.slice,L=function(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1},M="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",F="[\\x20\\t\\r\\n\\f]",q="(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",j="\\[[\\x20\\t\\r\\n\\f]*("+q+")(?:"+F+"*([*^$|!~]?=)"+F+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+q+"))|)"+F+"*\\]",U=":("+q+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+j+")*)|.*)\\)|)",H=new RegExp(F+"+","g"),W=new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$","g"),B=new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),V=new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),z=new RegExp(F+"|>"),$=new RegExp(U),K=new RegExp("^"+q+"$"),G={ID:new RegExp("^#("+q+")"),CLASS:new RegExp("^\\.("+q+")"),TAG:new RegExp("^("+q+"|[*])"),ATTR:new RegExp("^"+j),PSEUDO:new RegExp("^"+U),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)","i"),bool:new RegExp("^(?:"+M+")$","i"),needsContext:new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,J=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},ie=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,re=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},se=function(){d()},oe=we((function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()}),{dir:"parentNode",next:"legend"});try{D.apply(P=O.call(b.childNodes),b.childNodes),P[b.childNodes.length].nodeType}catch(e){D={apply:P.length?function(e,t){A.apply(e,O.call(t))}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}function ae(e,t,i,r){var s,a,l,u,h,f,_,v=t&&t.ownerDocument,b=t?t.nodeType:9;if(i=i||[],"string"!=typeof e||!e||1!==b&&9!==b&&11!==b)return i;if(!r&&(d(t),t=t||p,g)){if(11!==b&&(h=Z.exec(e)))if(s=h[1]){if(9===b){if(!(l=t.getElementById(s)))return i;if(l.id===s)return i.push(l),i}else if(v&&(l=v.getElementById(s))&&y(t,l)&&l.id===s)return i.push(l),i}else{if(h[2])return D.apply(i,t.getElementsByTagName(e)),i;if((s=h[3])&&n.getElementsByClassName&&t.getElementsByClassName)return D.apply(i,t.getElementsByClassName(s)),i}if(n.qsa&&!S[e+" "]&&(!m||!m.test(e))&&(1!==b||"object"!==t.nodeName.toLowerCase())){if(_=e,v=t,1===b&&(z.test(e)||V.test(e))){for((v=ee.test(e)&&_e(t.parentNode)||t)===t&&n.scope||((u=t.getAttribute("id"))?u=u.replace(ie,re):t.setAttribute("id",u=w)),a=(f=o(e)).length;a--;)f[a]=(u?"#"+u:":scope")+" "+ye(f[a]);_=f.join(",")}try{return D.apply(i,v.querySelectorAll(_)),i}catch(t){S(e,!0)}finally{u===w&&t.removeAttribute("id")}}}return c(e.replace(W,"$1"),t,i,r)}function ce(){var e=[];return function t(n,r){return e.push(n+" ")>i.cacheLength&&delete t[e.shift()],t[n+" "]=r}}function le(e){return e[w]=!0,e}function ue(e){var t=p.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function he(e,t){for(var n=e.split("|"),r=n.length;r--;)i.attrHandle[n[r]]=t}function de(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(i)return i;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function pe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function fe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ge(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&oe(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function me(e){return le((function(t){return t=+t,le((function(n,i){for(var r,s=e([],n.length,t),o=s.length;o--;)n[r=s[o]]&&(n[r]=!(i[r]=n[r]))}))}))}function _e(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in n=ae.support={},s=ae.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},d=ae.setDocument=function(e){var t,r,o=e?e.ownerDocument||e:b;return o!=p&&9===o.nodeType&&o.documentElement?(f=(p=o).documentElement,g=!s(p),b!=p&&(r=p.defaultView)&&r.top!==r&&(r.addEventListener?r.addEventListener("unload",se,!1):r.attachEvent&&r.attachEvent("onunload",se)),n.scope=ue((function(e){return f.appendChild(e).appendChild(p.createElement("div")),void 0!==e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length})),n.cssHas=ue((function(){try{return p.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}})),n.attributes=ue((function(e){return e.className="i",!e.getAttribute("className")})),n.getElementsByTagName=ue((function(e){return e.appendChild(p.createComment("")),!e.getElementsByTagName("*").length})),n.getElementsByClassName=Q.test(p.getElementsByClassName),n.getById=ue((function(e){return f.appendChild(e).id=w,!p.getElementsByName||!p.getElementsByName(w).length})),n.getById?(i.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},i.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(i.filter.ID=function(e){var t=e.replace(te,ne);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},i.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n,i,r,s=t.getElementById(e);if(s){if((n=s.getAttributeNode("id"))&&n.value===e)return[s];for(r=t.getElementsByName(e),i=0;s=r[i++];)if((n=s.getAttributeNode("id"))&&n.value===e)return[s]}return[]}}),i.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],r=0,s=t.getElementsByTagName(e);if("*"===e){for(;n=s[r++];)1===n.nodeType&&i.push(n);return i}return s},i.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&g)return t.getElementsByClassName(e)},_=[],m=[],(n.qsa=Q.test(p.querySelectorAll))&&(ue((function(e){var t;f.appendChild(e).innerHTML="<a id='"+w+"'></a><select id='"+w+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),e.querySelectorAll("[selected]").length||m.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|"+M+")"),e.querySelectorAll("[id~="+w+"-]").length||m.push("~="),(t=p.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||m.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),e.querySelectorAll(":checked").length||m.push(":checked"),e.querySelectorAll("a#"+w+"+*").length||m.push(".#.+[+~]"),e.querySelectorAll("\\\f"),m.push("[\\r\\n\\f]")})),ue((function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=p.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&m.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&m.push(":enabled",":disabled"),f.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&m.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),m.push(",.*:")}))),(n.matchesSelector=Q.test(v=f.matches||f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ue((function(e){n.disconnectedMatch=v.call(e,"*"),v.call(e,"[s!='']:x"),_.push("!=",U)})),n.cssHas||m.push(":has"),m=m.length&&new RegExp(m.join("|")),_=_.length&&new RegExp(_.join("|")),t=Q.test(f.compareDocumentPosition),y=t||Q.test(f.contains)?function(e,t){var n=9===e.nodeType&&e.documentElement||e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},x=t?function(e,t){if(e===t)return h=!0,0;var i=!e.compareDocumentPosition-!t.compareDocumentPosition;return i||(1&(i=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===i?e==p||e.ownerDocument==b&&y(b,e)?-1:t==p||t.ownerDocument==b&&y(b,t)?1:u?L(u,e)-L(u,t):0:4&i?-1:1)}:function(e,t){if(e===t)return h=!0,0;var n,i=0,r=e.parentNode,s=t.parentNode,o=[e],a=[t];if(!r||!s)return e==p?-1:t==p?1:r?-1:s?1:u?L(u,e)-L(u,t):0;if(r===s)return de(e,t);for(n=e;n=n.parentNode;)o.unshift(n);for(n=t;n=n.parentNode;)a.unshift(n);for(;o[i]===a[i];)i++;return i?de(o[i],a[i]):o[i]==b?-1:a[i]==b?1:0},p):p},ae.matches=function(e,t){return ae(e,null,null,t)},ae.matchesSelector=function(e,t){if(d(e),n.matchesSelector&&g&&!S[t+" "]&&(!_||!_.test(t))&&(!m||!m.test(t)))try{var i=v.call(e,t);if(i||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return i}catch(e){S(t,!0)}return ae(t,p,null,[e]).length>0},ae.contains=function(e,t){return(e.ownerDocument||e)!=p&&d(e),y(e,t)},ae.attr=function(e,t){(e.ownerDocument||e)!=p&&d(e);var r=i.attrHandle[t.toLowerCase()],s=r&&N.call(i.attrHandle,t.toLowerCase())?r(e,t,!g):void 0;return void 0!==s?s:n.attributes||!g?e.getAttribute(t):(s=e.getAttributeNode(t))&&s.specified?s.value:null},ae.escape=function(e){return(e+"").replace(ie,re)},ae.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ae.uniqueSort=function(e){var t,i=[],r=0,s=0;if(h=!n.detectDuplicates,u=!n.sortStable&&e.slice(0),e.sort(x),h){for(;t=e[s++];)t===e[s]&&(r=i.push(s));for(;r--;)e.splice(i[r],1)}return u=null,e},r=ae.getText=function(e){var t,n="",i=0,s=e.nodeType;if(s){if(1===s||9===s||11===s){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=r(e)}else if(3===s||4===s)return e.nodeValue}else for(;t=e[i++];)n+=r(t);return n},(i=ae.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ae.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ae.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&$.test(n)&&(t=o(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=I[e+" "];return t||(t=new RegExp("(^|[\\x20\\t\\r\\n\\f])"+e+"("+F+"|$)"),I(e,(function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})))},ATTR:function(e,t,n){return function(i){var r=ae.attr(i,e);return null==r?"!="===t:!t||(r+="","="===t?r===n:"!="===t?r!==n:"^="===t?n&&0===r.indexOf(n):"*="===t?n&&r.indexOf(n)>-1:"$="===t?n&&r.slice(-n.length)===n:"~="===t?(" "+r.replace(H," ")+" ").indexOf(n)>-1:"|="===t&&(r===n||r.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,i,r){var s="nth"!==e.slice(0,3),o="last"!==e.slice(-4),a="of-type"===t;return 1===i&&0===r?function(e){return!!e.parentNode}:function(t,n,c){var l,u,h,d,p,f,g=s!==o?"nextSibling":"previousSibling",m=t.parentNode,_=a&&t.nodeName.toLowerCase(),v=!c&&!a,y=!1;if(m){if(s){for(;g;){for(d=t;d=d[g];)if(a?d.nodeName.toLowerCase()===_:1===d.nodeType)return!1;f=g="only"===e&&!f&&"nextSibling"}return!0}if(f=[o?m.firstChild:m.lastChild],o&&v){for(y=(p=(l=(u=(h=(d=m)[w]||(d[w]={}))[d.uniqueID]||(h[d.uniqueID]={}))[e]||[])[0]===C&&l[1])&&l[2],d=p&&m.childNodes[p];d=++p&&d&&d[g]||(y=p=0)||f.pop();)if(1===d.nodeType&&++y&&d===t){u[e]=[C,p,y];break}}else if(v&&(y=p=(l=(u=(h=(d=t)[w]||(d[w]={}))[d.uniqueID]||(h[d.uniqueID]={}))[e]||[])[0]===C&&l[1]),!1===y)for(;(d=++p&&d&&d[g]||(y=p=0)||f.pop())&&((a?d.nodeName.toLowerCase()!==_:1!==d.nodeType)||!++y||(v&&((u=(h=d[w]||(d[w]={}))[d.uniqueID]||(h[d.uniqueID]={}))[e]=[C,y]),d!==t)););return(y-=r)===i||y%i==0&&y/i>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ae.error("unsupported pseudo: "+e);return r[w]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?le((function(e,n){for(var i,s=r(e,t),o=s.length;o--;)e[i=L(e,s[o])]=!(n[i]=s[o])})):function(e){return r(e,0,n)}):r}},pseudos:{not:le((function(e){var t=[],n=[],i=a(e.replace(W,"$1"));return i[w]?le((function(e,t,n,r){for(var s,o=i(e,null,r,[]),a=e.length;a--;)(s=o[a])&&(e[a]=!(t[a]=s))})):function(e,r,s){return t[0]=e,i(t,null,s,n),t[0]=null,!n.pop()}})),has:le((function(e){return function(t){return ae(e,t).length>0}})),contains:le((function(e){return e=e.replace(te,ne),function(t){return(t.textContent||r(t)).indexOf(e)>-1}})),lang:le((function(e){return K.test(e||"")||ae.error("unsupported lang: "+e),e=e.replace(te,ne).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}})),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return X.test(e.nodeName)},input:function(e){return J.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:me((function(){return[0]})),last:me((function(e,t){return[t-1]})),eq:me((function(e,t,n){return[n<0?n+t:n]})),even:me((function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e})),odd:me((function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e})),lt:me((function(e,t,n){for(var i=n<0?n+t:n>t?t:n;--i>=0;)e.push(i);return e})),gt:me((function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e}))}}).pseudos.nth=i.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=pe(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=fe(t);function ve(){}function ye(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i}function we(e,t,n){var i=t.dir,r=t.next,s=r||i,o=n&&"parentNode"===s,a=T++;return t.first?function(t,n,r){for(;t=t[i];)if(1===t.nodeType||o)return e(t,n,r);return!1}:function(t,n,c){var l,u,h,d=[C,a];if(c){for(;t=t[i];)if((1===t.nodeType||o)&&e(t,n,c))return!0}else for(;t=t[i];)if(1===t.nodeType||o)if(u=(h=t[w]||(t[w]={}))[t.uniqueID]||(h[t.uniqueID]={}),r&&r===t.nodeName.toLowerCase())t=t[i]||t;else{if((l=u[s])&&l[0]===C&&l[1]===a)return d[2]=l[2];if(u[s]=d,d[2]=e(t,n,c))return!0}return!1}}function be(e){return e.length>1?function(t,n,i){for(var r=e.length;r--;)if(!e[r](t,n,i))return!1;return!0}:e[0]}function Ce(e,t,n,i,r){for(var s,o=[],a=0,c=e.length,l=null!=t;a<c;a++)(s=e[a])&&(n&&!n(s,i,r)||(o.push(s),l&&t.push(a)));return o}function Te(e,t,n,i,r,s){return i&&!i[w]&&(i=Te(i)),r&&!r[w]&&(r=Te(r,s)),le((function(s,o,a,c){var l,u,h,d=[],p=[],f=o.length,g=s||function(e,t,n){for(var i=0,r=t.length;i<r;i++)ae(e,t[i],n);return n}(t||"*",a.nodeType?[a]:a,[]),m=!e||!s&&t?g:Ce(g,d,e,a,c),_=n?r||(s?e:f||i)?[]:o:m;if(n&&n(m,_,a,c),i)for(l=Ce(_,p),i(l,[],a,c),u=l.length;u--;)(h=l[u])&&(_[p[u]]=!(m[p[u]]=h));if(s){if(r||e){if(r){for(l=[],u=_.length;u--;)(h=_[u])&&l.push(m[u]=h);r(null,_=[],l,c)}for(u=_.length;u--;)(h=_[u])&&(l=r?L(s,h):d[u])>-1&&(s[l]=!(o[l]=h))}}else _=Ce(_===o?_.splice(f,_.length):_),r?r(null,o,_,c):D.apply(o,_)}))}function Ie(e){for(var t,n,r,s=e.length,o=i.relative[e[0].type],a=o||i.relative[" "],c=o?1:0,u=we((function(e){return e===t}),a,!0),h=we((function(e){return L(t,e)>-1}),a,!0),d=[function(e,n,i){var r=!o&&(i||n!==l)||((t=n).nodeType?u(e,n,i):h(e,n,i));return t=null,r}];c<s;c++)if(n=i.relative[e[c].type])d=[we(be(d),n)];else{if((n=i.filter[e[c].type].apply(null,e[c].matches))[w]){for(r=++c;r<s&&!i.relative[e[r].type];r++);return Te(c>1&&be(d),c>1&&ye(e.slice(0,c-1).concat({value:" "===e[c-2].type?"*":""})).replace(W,"$1"),n,c<r&&Ie(e.slice(c,r)),r<s&&Ie(e=e.slice(r)),r<s&&ye(e))}d.push(n)}return be(d)}return ve.prototype=i.filters=i.pseudos,i.setFilters=new ve,o=ae.tokenize=function(e,t){var n,r,s,o,a,c,l,u=E[e+" "];if(u)return t?0:u.slice(0);for(a=e,c=[],l=i.preFilter;a;){for(o in n&&!(r=B.exec(a))||(r&&(a=a.slice(r[0].length)||a),c.push(s=[])),n=!1,(r=V.exec(a))&&(n=r.shift(),s.push({value:n,type:r[0].replace(W," ")}),a=a.slice(n.length)),i.filter)!(r=G[o].exec(a))||l[o]&&!(r=l[o](r))||(n=r.shift(),s.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ae.error(e):E(e,c).slice(0)},a=ae.compile=function(e,t){var n,r=[],s=[],a=k[e+" "];if(!a){for(t||(t=o(e)),n=t.length;n--;)(a=Ie(t[n]))[w]?r.push(a):s.push(a);a=k(e,function(e,t){var n=t.length>0,r=e.length>0,s=function(s,o,a,c,u){var h,f,m,_=0,v="0",y=s&&[],w=[],b=l,T=s||r&&i.find.TAG("*",u),I=C+=null==b?1:Math.random()||.1,E=T.length;for(u&&(l=o==p||o||u);v!==E&&null!=(h=T[v]);v++){if(r&&h){for(f=0,o||h.ownerDocument==p||(d(h),a=!g);m=e[f++];)if(m(h,o||p,a)){c.push(h);break}u&&(C=I)}n&&((h=!m&&h)&&_--,s&&y.push(h))}if(_+=v,n&&v!==_){for(f=0;m=t[f++];)m(y,w,o,a);if(s){if(_>0)for(;v--;)y[v]||w[v]||(w[v]=R.call(c));w=Ce(w)}D.apply(c,w),u&&!s&&w.length>0&&_+t.length>1&&ae.uniqueSort(c)}return u&&(C=I,l=b),y};return n?le(s):s}(s,r)),a.selector=e}return a},c=ae.select=function(e,t,n,r){var s,c,l,u,h,d="function"==typeof e&&e,p=!r&&o(e=d.selector||e);if(n=n||[],1===p.length){if((c=p[0]=p[0].slice(0)).length>2&&"ID"===(l=c[0]).type&&9===t.nodeType&&g&&i.relative[c[1].type]){if(!(t=(i.find.ID(l.matches[0].replace(te,ne),t)||[])[0]))return n;d&&(t=t.parentNode),e=e.slice(c.shift().value.length)}for(s=G.needsContext.test(e)?0:c.length;s--&&(l=c[s],!i.relative[u=l.type]);)if((h=i.find[u])&&(r=h(l.matches[0].replace(te,ne),ee.test(c[0].type)&&_e(t.parentNode)||t))){if(c.splice(s,1),!(e=r.length&&ye(c)))return D.apply(n,r),n;break}}return(d||a(e,p))(r,t,!g,n,!t||ee.test(e)&&_e(t.parentNode)||t),n},n.sortStable=w.split("").sort(x).join("")===w,n.detectDuplicates=!!h,d(),n.sortDetached=ue((function(e){return 1&e.compareDocumentPosition(p.createElement("fieldset"))})),ue((function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")}))||he("type|href|height|width",(function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)})),n.attributes&&ue((function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}))||he("value",(function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue})),ue((function(e){return null==e.getAttribute("disabled")}))||he(M,(function(e,t,n){var i;if(!n)return!0===e[t]?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null})),ae}(e);b.find=T,b.expr=T.selectors,b.expr[":"]=b.expr.pseudos,b.uniqueSort=b.unique=T.uniqueSort,b.text=T.getText,b.isXMLDoc=T.isXML,b.contains=T.contains,b.escapeSelector=T.escape;var I=function(e,t,n){for(var i=[],r=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(r&&b(e).is(n))break;i.push(e)}return i},E=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=b.expr.match.needsContext;function S(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var x=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function N(e,t,n){return f(t)?b.grep(e,(function(e,i){return!!t.call(e,i,e)!==n})):t.nodeType?b.grep(e,(function(e){return e===t!==n})):"string"!=typeof t?b.grep(e,(function(e){return a.call(t,e)>-1!==n})):b.filter(t,e,n)}b.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?b.find.matchesSelector(i,e)?[i]:[]:b.find.matches(e,b.grep(t,(function(e){return 1===e.nodeType})))},b.fn.extend({find:function(e){var t,n,i=this.length,r=this;if("string"!=typeof e)return this.pushStack(b(e).filter((function(){for(t=0;t<i;t++)if(b.contains(r[t],this))return!0})));for(n=this.pushStack([]),t=0;t<i;t++)b.find(e,r[t],n);return i>1?b.uniqueSort(n):n},filter:function(e){return this.pushStack(N(this,e||[],!1))},not:function(e){return this.pushStack(N(this,e||[],!0))},is:function(e){return!!N(this,"string"==typeof e&&k.test(e)?b(e):e||[],!1).length}});var P,R=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(b.fn.init=function(e,t,n){var i,r;if(!e)return this;if(n=n||P,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:R.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof b?t[0]:t,b.merge(this,b.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:m,!0)),x.test(i[1])&&b.isPlainObject(t))for(i in t)f(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(r=m.getElementById(i[2]))&&(this[0]=r,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):f(e)?void 0!==n.ready?n.ready(e):e(b):b.makeArray(e,this)}).prototype=b.fn,P=b(m);var A=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}b.fn.extend({has:function(e){var t=b(e,this),n=t.length;return this.filter((function(){for(var e=0;e<n;e++)if(b.contains(this,t[e]))return!0}))},closest:function(e,t){var n,i=0,r=this.length,s=[],o="string"!=typeof e&&b(e);if(!k.test(e))for(;i<r;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(o?o.index(n)>-1:1===n.nodeType&&b.find.matchesSelector(n,e))){s.push(n);break}return this.pushStack(s.length>1?b.uniqueSort(s):s)},index:function(e){return e?"string"==typeof e?a.call(b(e),this[0]):a.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(b.uniqueSort(b.merge(this.get(),b(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return I(e,"parentNode")},parentsUntil:function(e,t,n){return I(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return I(e,"nextSibling")},prevAll:function(e){return I(e,"previousSibling")},nextUntil:function(e,t,n){return I(e,"nextSibling",n)},prevUntil:function(e,t,n){return I(e,"previousSibling",n)},siblings:function(e){return E((e.parentNode||{}).firstChild,e)},children:function(e){return E(e.firstChild)},contents:function(e){return null!=e.contentDocument&&i(e.contentDocument)?e.contentDocument:(S(e,"template")&&(e=e.content||e),b.merge([],e.childNodes))}},(function(e,t){b.fn[e]=function(n,i){var r=b.map(this,t,n);return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(r=b.filter(i,r)),this.length>1&&(D[e]||b.uniqueSort(r),A.test(e)&&r.reverse()),this.pushStack(r)}}));var L=/[^\x20\t\r\n\f]+/g;function M(e){return e}function F(e){throw e}function q(e,t,n,i){var r;try{e&&f(r=e.promise)?r.call(e).done(t).fail(n):e&&f(r=e.then)?r.call(e,t,n):t.apply(void 0,[e].slice(i))}catch(e){n.apply(void 0,[e])}}b.Callbacks=function(e){e="string"==typeof e?function(e){var t={};return b.each(e.match(L)||[],(function(e,n){t[n]=!0})),t}(e):b.extend({},e);var t,n,i,r,s=[],o=[],a=-1,c=function(){for(r=r||e.once,i=t=!0;o.length;a=-1)for(n=o.shift();++a<s.length;)!1===s[a].apply(n[0],n[1])&&e.stopOnFalse&&(a=s.length,n=!1);e.memory||(n=!1),t=!1,r&&(s=n?[]:"")},l={add:function(){return s&&(n&&!t&&(a=s.length-1,o.push(n)),function t(n){b.each(n,(function(n,i){f(i)?e.unique&&l.has(i)||s.push(i):i&&i.length&&"string"!==y(i)&&t(i)}))}(arguments),n&&!t&&c()),this},remove:function(){return b.each(arguments,(function(e,t){for(var n;(n=b.inArray(t,s,n))>-1;)s.splice(n,1),n<=a&&a--})),this},has:function(e){return e?b.inArray(e,s)>-1:s.length>0},empty:function(){return s&&(s=[]),this},disable:function(){return r=o=[],s=n="",this},disabled:function(){return!s},lock:function(){return r=o=[],n||t||(s=n=""),this},locked:function(){return!!r},fireWith:function(e,n){return r||(n=[e,(n=n||[]).slice?n.slice():n],o.push(n),t||c()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!i}};return l},b.extend({Deferred:function(t){var n=[["notify","progress",b.Callbacks("memory"),b.Callbacks("memory"),2],["resolve","done",b.Callbacks("once memory"),b.Callbacks("once memory"),0,"resolved"],["reject","fail",b.Callbacks("once memory"),b.Callbacks("once memory"),1,"rejected"]],i="pending",r={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},catch:function(e){return r.then(null,e)},pipe:function(){var e=arguments;return b.Deferred((function(t){b.each(n,(function(n,i){var r=f(e[i[4]])&&e[i[4]];s[i[1]]((function(){var e=r&&r.apply(this,arguments);e&&f(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[i[0]+"With"](this,r?[e]:arguments)}))})),e=null})).promise()},then:function(t,i,r){var s=0;function o(t,n,i,r){return function(){var a=this,c=arguments,l=function(){var e,l;if(!(t<s)){if((e=i.apply(a,c))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,f(l)?r?l.call(e,o(s,n,M,r),o(s,n,F,r)):(s++,l.call(e,o(s,n,M,r),o(s,n,F,r),o(s,n,M,n.notifyWith))):(i!==M&&(a=void 0,c=[e]),(r||n.resolveWith)(a,c))}},u=r?l:function(){try{l()}catch(e){b.Deferred.exceptionHook&&b.Deferred.exceptionHook(e,u.stackTrace),t+1>=s&&(i!==F&&(a=void 0,c=[e]),n.rejectWith(a,c))}};t?u():(b.Deferred.getStackHook&&(u.stackTrace=b.Deferred.getStackHook()),e.setTimeout(u))}}return b.Deferred((function(e){n[0][3].add(o(0,e,f(r)?r:M,e.notifyWith)),n[1][3].add(o(0,e,f(t)?t:M)),n[2][3].add(o(0,e,f(i)?i:F))})).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},s={};return b.each(n,(function(e,t){var o=t[2],a=t[5];r[t[1]]=o.add,a&&o.add((function(){i=a}),n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),o.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=o.fireWith})),r.promise(s),t&&t.call(s,s),s},when:function(e){var t=arguments.length,n=t,i=Array(n),s=r.call(arguments),o=b.Deferred(),a=function(e){return function(n){i[e]=this,s[e]=arguments.length>1?r.call(arguments):n,--t||o.resolveWith(i,s)}};if(t<=1&&(q(e,o.done(a(n)).resolve,o.reject,!t),"pending"===o.state()||f(s[n]&&s[n].then)))return o.then();for(;n--;)q(s[n],a(n),o.reject);return o.promise()}});var j=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;b.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&j.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},b.readyException=function(t){e.setTimeout((function(){throw t}))};var U=b.Deferred();function H(){m.removeEventListener("DOMContentLoaded",H),e.removeEventListener("load",H),b.ready()}b.fn.ready=function(e){return U.then(e).catch((function(e){b.readyException(e)})),this},b.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--b.readyWait:b.isReady)||(b.isReady=!0,!0!==e&&--b.readyWait>0||U.resolveWith(m,[b]))}}),b.ready.then=U.then,"complete"===m.readyState||"loading"!==m.readyState&&!m.documentElement.doScroll?e.setTimeout(b.ready):(m.addEventListener("DOMContentLoaded",H),e.addEventListener("load",H));var W=function(e,t,n,i,r,s,o){var a=0,c=e.length,l=null==n;if("object"===y(n))for(a in r=!0,n)W(e,t,a,n[a],!0,s,o);else if(void 0!==i&&(r=!0,f(i)||(o=!0),l&&(o?(t.call(e,i),t=null):(l=t,t=function(e,t,n){return l.call(b(e),n)})),t))for(;a<c;a++)t(e[a],n,o?i:i.call(e[a],a,t(e[a],n)));return r?e:l?t.call(e):c?t(e[0],n):s},B=/^-ms-/,V=/-([a-z])/g;function z(e,t){return t.toUpperCase()}function $(e){return e.replace(B,"ms-").replace(V,z)}var K=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=b.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},K(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var i,r=this.cache(e);if("string"==typeof t)r[$(t)]=n;else for(i in t)r[$(i)]=t[i];return r},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][$(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,i=e[this.expando];if(void 0!==i){if(void 0!==t){n=(t=Array.isArray(t)?t.map($):(t=$(t))in i?[t]:t.match(L)||[]).length;for(;n--;)delete i[t[n]]}(void 0===t||b.isEmptyObject(i))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!b.isEmptyObject(t)}};var Y=new G,J=new G,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function Z(e,t,n){var i;if(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(Q,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(i))){try{n=function(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:X.test(e)?JSON.parse(e):e)}(n)}catch(e){}J.set(e,t,n)}else n=void 0;return n}b.extend({hasData:function(e){return J.hasData(e)||Y.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),b.fn.extend({data:function(e,t){var n,i,r,s=this[0],o=s&&s.attributes;if(void 0===e){if(this.length&&(r=J.get(s),1===s.nodeType&&!Y.get(s,"hasDataAttrs"))){for(n=o.length;n--;)o[n]&&0===(i=o[n].name).indexOf("data-")&&(i=$(i.slice(5)),Z(s,i,r[i]));Y.set(s,"hasDataAttrs",!0)}return r}return"object"==typeof e?this.each((function(){J.set(this,e)})):W(this,(function(t){var n;if(s&&void 0===t)return void 0!==(n=J.get(s,e))||void 0!==(n=Z(s,e))?n:void 0;this.each((function(){J.set(this,e,t)}))}),null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each((function(){J.remove(this,e)}))}}),b.extend({queue:function(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=Y.get(e,t),n&&(!i||Array.isArray(n)?i=Y.access(e,t,b.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),i=n.length,r=n.shift(),s=b._queueHooks(e,t);"inprogress"===r&&(r=n.shift(),i--),r&&("fx"===t&&n.unshift("inprogress"),delete s.stop,r.call(e,(function(){b.dequeue(e,t)}),s)),!i&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:b.Callbacks("once memory").add((function(){Y.remove(e,[t+"queue",n])}))})}}),b.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?b.queue(this[0],e):void 0===t?this:this.each((function(){var n=b.queue(this,e,t);b._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&b.dequeue(this,e)}))},dequeue:function(e){return this.each((function(){b.dequeue(this,e)}))},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,r=b.Deferred(),s=this,o=this.length,a=function(){--i||r.resolveWith(s,[s])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";o--;)(n=Y.get(s[o],e+"queueHooks"))&&n.empty&&(i++,n.empty.add(a));return a(),r.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],ie=m.documentElement,re=function(e){return b.contains(e.ownerDocument,e)},se={composed:!0};ie.getRootNode&&(re=function(e){return b.contains(e.ownerDocument,e)||e.getRootNode(se)===e.ownerDocument});var oe=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&re(e)&&"none"===b.css(e,"display")};function ae(e,t,n,i){var r,s,o=20,a=i?function(){return i.cur()}:function(){return b.css(e,t,"")},c=a(),l=n&&n[3]||(b.cssNumber[t]?"":"px"),u=e.nodeType&&(b.cssNumber[t]||"px"!==l&&+c)&&te.exec(b.css(e,t));if(u&&u[3]!==l){for(c/=2,l=l||u[3],u=+c||1;o--;)b.style(e,t,u+l),(1-s)*(1-(s=a()/c||.5))<=0&&(o=0),u/=s;u*=2,b.style(e,t,u+l),n=n||[]}return n&&(u=+u||+c||0,r=n[1]?u+(n[1]+1)*n[2]:+n[2],i&&(i.unit=l,i.start=u,i.end=r)),r}var ce={};function le(e){var t,n=e.ownerDocument,i=e.nodeName,r=ce[i];return r||(t=n.body.appendChild(n.createElement(i)),r=b.css(t,"display"),t.parentNode.removeChild(t),"none"===r&&(r="block"),ce[i]=r,r)}function ue(e,t){for(var n,i,r=[],s=0,o=e.length;s<o;s++)(i=e[s]).style&&(n=i.style.display,t?("none"===n&&(r[s]=Y.get(i,"display")||null,r[s]||(i.style.display="")),""===i.style.display&&oe(i)&&(r[s]=le(i))):"none"!==n&&(r[s]="none",Y.set(i,"display",n)));for(s=0;s<o;s++)null!=r[s]&&(e[s].style.display=r[s]);return e}b.fn.extend({show:function(){return ue(this,!0)},hide:function(){return ue(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each((function(){oe(this)?b(this).show():b(this).hide()}))}});var he,de,pe=/^(?:checkbox|radio)$/i,fe=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,ge=/^$|^module$|\/(?:java|ecma)script/i;he=m.createDocumentFragment().appendChild(m.createElement("div")),(de=m.createElement("input")).setAttribute("type","radio"),de.setAttribute("checked","checked"),de.setAttribute("name","t"),he.appendChild(de),p.checkClone=he.cloneNode(!0).cloneNode(!0).lastChild.checked,he.innerHTML="<textarea>x</textarea>",p.noCloneChecked=!!he.cloneNode(!0).lastChild.defaultValue,he.innerHTML="<option></option>",p.option=!!he.lastChild;var me={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function _e(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&S(e,t)?b.merge([e],n):n}function ve(e,t){for(var n=0,i=e.length;n<i;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}me.tbody=me.tfoot=me.colgroup=me.caption=me.thead,me.th=me.td,p.option||(me.optgroup=me.option=[1,"<select multiple='multiple'>","</select>"]);var ye=/<|&#?\w+;/;function we(e,t,n,i,r){for(var s,o,a,c,l,u,h=t.createDocumentFragment(),d=[],p=0,f=e.length;p<f;p++)if((s=e[p])||0===s)if("object"===y(s))b.merge(d,s.nodeType?[s]:s);else if(ye.test(s)){for(o=o||h.appendChild(t.createElement("div")),a=(fe.exec(s)||["",""])[1].toLowerCase(),c=me[a]||me._default,o.innerHTML=c[1]+b.htmlPrefilter(s)+c[2],u=c[0];u--;)o=o.lastChild;b.merge(d,o.childNodes),(o=h.firstChild).textContent=""}else d.push(t.createTextNode(s));for(h.textContent="",p=0;s=d[p++];)if(i&&b.inArray(s,i)>-1)r&&r.push(s);else if(l=re(s),o=_e(h.appendChild(s),"script"),l&&ve(o),n)for(u=0;s=o[u++];)ge.test(s.type||"")&&n.push(s);return h}var be=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Te(){return!1}function Ie(e,t){return e===function(){try{return m.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,i,r,s){var o,a;if("object"==typeof t){for(a in"string"!=typeof n&&(i=i||n,n=void 0),t)Ee(e,a,n,i,t[a],s);return e}if(null==i&&null==r?(r=n,i=n=void 0):null==r&&("string"==typeof n?(r=i,i=void 0):(r=i,i=n,n=void 0)),!1===r)r=Te;else if(!r)return e;return 1===s&&(o=r,r=function(e){return b().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=b.guid++)),e.each((function(){b.event.add(this,t,r,i,n)}))}function ke(e,t,n){n?(Y.set(e,t,!1),b.event.add(e,t,{namespace:!1,handler:function(e){var i,s,o=Y.get(this,t);if(1&e.isTrigger&&this[t]){if(o.length)(b.event.special[t]||{}).delegateType&&e.stopPropagation();else if(o=r.call(arguments),Y.set(this,t,o),i=n(this,t),this[t](),o!==(s=Y.get(this,t))||i?Y.set(this,t,!1):s={},o!==s)return e.stopImmediatePropagation(),e.preventDefault(),s&&s.value}else o.length&&(Y.set(this,t,{value:b.event.trigger(b.extend(o[0],b.Event.prototype),o.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,t)&&b.event.add(e,t,Ce)}b.event={global:{},add:function(e,t,n,i,r){var s,o,a,c,l,u,h,d,p,f,g,m=Y.get(e);if(K(e))for(n.handler&&(n=(s=n).handler,r=s.selector),r&&b.find.matchesSelector(ie,r),n.guid||(n.guid=b.guid++),(c=m.events)||(c=m.events=Object.create(null)),(o=m.handle)||(o=m.handle=function(t){return void 0!==b&&b.event.triggered!==t.type?b.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(L)||[""]).length;l--;)p=g=(a=be.exec(t[l])||[])[1],f=(a[2]||"").split(".").sort(),p&&(h=b.event.special[p]||{},p=(r?h.delegateType:h.bindType)||p,h=b.event.special[p]||{},u=b.extend({type:p,origType:g,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&b.expr.match.needsContext.test(r),namespace:f.join(".")},s),(d=c[p])||((d=c[p]=[]).delegateCount=0,h.setup&&!1!==h.setup.call(e,i,f,o)||e.addEventListener&&e.addEventListener(p,o)),h.add&&(h.add.call(e,u),u.handler.guid||(u.handler.guid=n.guid)),r?d.splice(d.delegateCount++,0,u):d.push(u),b.event.global[p]=!0)},remove:function(e,t,n,i,r){var s,o,a,c,l,u,h,d,p,f,g,m=Y.hasData(e)&&Y.get(e);if(m&&(c=m.events)){for(l=(t=(t||"").match(L)||[""]).length;l--;)if(p=g=(a=be.exec(t[l])||[])[1],f=(a[2]||"").split(".").sort(),p){for(h=b.event.special[p]||{},d=c[p=(i?h.delegateType:h.bindType)||p]||[],a=a[2]&&new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"),o=s=d.length;s--;)u=d[s],!r&&g!==u.origType||n&&n.guid!==u.guid||a&&!a.test(u.namespace)||i&&i!==u.selector&&("**"!==i||!u.selector)||(d.splice(s,1),u.selector&&d.delegateCount--,h.remove&&h.remove.call(e,u));o&&!d.length&&(h.teardown&&!1!==h.teardown.call(e,f,m.handle)||b.removeEvent(e,p,m.handle),delete c[p])}else for(p in c)b.event.remove(e,p+t[l],n,i,!0);b.isEmptyObject(c)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,i,r,s,o,a=new Array(arguments.length),c=b.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[c.type]||[],u=b.event.special[c.type]||{};for(a[0]=c,t=1;t<arguments.length;t++)a[t]=arguments[t];if(c.delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,c)){for(o=b.event.handlers.call(this,c,l),t=0;(r=o[t++])&&!c.isPropagationStopped();)for(c.currentTarget=r.elem,n=0;(s=r.handlers[n++])&&!c.isImmediatePropagationStopped();)c.rnamespace&&!1!==s.namespace&&!c.rnamespace.test(s.namespace)||(c.handleObj=s,c.data=s.data,void 0!==(i=((b.event.special[s.origType]||{}).handle||s.handler).apply(r.elem,a))&&!1===(c.result=i)&&(c.preventDefault(),c.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,c),c.result}},handlers:function(e,t){var n,i,r,s,o,a=[],c=t.delegateCount,l=e.target;if(c&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(s=[],o={},n=0;n<c;n++)void 0===o[r=(i=t[n]).selector+" "]&&(o[r]=i.needsContext?b(r,this).index(l)>-1:b.find(r,this,null,[l]).length),o[r]&&s.push(i);s.length&&a.push({elem:l,handlers:s})}return l=this,c<t.length&&a.push({elem:l,handlers:t.slice(c)}),a},addProp:function(e,t){Object.defineProperty(b.Event.prototype,e,{enumerable:!0,configurable:!0,get:f(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[b.expando]?e:new b.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&S(t,"input")&&ke(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&S(t,"input")&&ke(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&S(t,"input")&&Y.get(t,"click")||S(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},b.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},b.Event=function(e,t){if(!(this instanceof b.Event))return new b.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&b.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[b.expando]=!0},b.Event.prototype={constructor:b.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},b.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},b.event.addProp),b.each({focus:"focusin",blur:"focusout"},(function(e,t){b.event.special[e]={setup:function(){return ke(this,e,Ie),!1},trigger:function(){return ke(this,e),!0},_default:function(t){return Y.get(t.target,e)},delegateType:t}})),b.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=this,r=e.relatedTarget,s=e.handleObj;return r&&(r===i||b.contains(i,r))||(e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t),n}}})),b.fn.extend({on:function(e,t,n,i){return Ee(this,e,t,n,i)},one:function(e,t,n,i){return Ee(this,e,t,n,i,1)},off:function(e,t,n){var i,r;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(r in e)this.off(r,t,e[r]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each((function(){b.event.remove(this,e,n,t)}))}});var Se=/<script|<style|<link/i,xe=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Pe(e,t){return S(e,"table")&&S(11!==t.nodeType?t:t.firstChild,"tr")&&b(e).children("tbody")[0]||e}function Re(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Ae(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function De(e,t){var n,i,r,s,o,a;if(1===t.nodeType){if(Y.hasData(e)&&(a=Y.get(e).events))for(r in Y.remove(t,"handle events"),a)for(n=0,i=a[r].length;n<i;n++)b.event.add(t,r,a[r][n]);J.hasData(e)&&(s=J.access(e),o=b.extend({},s),J.set(t,o))}}function Oe(e,t,n,i){t=s(t);var r,o,a,c,l,u,h=0,d=e.length,g=d-1,m=t[0],_=f(m);if(_||d>1&&"string"==typeof m&&!p.checkClone&&xe.test(m))return e.each((function(r){var s=e.eq(r);_&&(t[0]=m.call(this,r,s.html())),Oe(s,t,n,i)}));if(d&&(o=(r=we(t,e[0].ownerDocument,!1,e,i)).firstChild,1===r.childNodes.length&&(r=o),o||i)){for(c=(a=b.map(_e(r,"script"),Re)).length;h<d;h++)l=r,h!==g&&(l=b.clone(l,!0,!0),c&&b.merge(a,_e(l,"script"))),n.call(e[h],l,h);if(c)for(u=a[a.length-1].ownerDocument,b.map(a,Ae),h=0;h<c;h++)l=a[h],ge.test(l.type||"")&&!Y.access(l,"globalEval")&&b.contains(u,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?b._evalUrl&&!l.noModule&&b._evalUrl(l.src,{nonce:l.nonce||l.getAttribute("nonce")},u):v(l.textContent.replace(Ne,""),l,u))}return e}function Le(e,t,n){for(var i,r=t?b.filter(t,e):e,s=0;null!=(i=r[s]);s++)n||1!==i.nodeType||b.cleanData(_e(i)),i.parentNode&&(n&&re(i)&&ve(_e(i,"script")),i.parentNode.removeChild(i));return e}b.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var i,r,s,o,a,c,l,u=e.cloneNode(!0),h=re(e);if(!(p.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(o=_e(u),i=0,r=(s=_e(e)).length;i<r;i++)a=s[i],c=o[i],l=void 0,"input"===(l=c.nodeName.toLowerCase())&&pe.test(a.type)?c.checked=a.checked:"input"!==l&&"textarea"!==l||(c.defaultValue=a.defaultValue);if(t)if(n)for(s=s||_e(e),o=o||_e(u),i=0,r=s.length;i<r;i++)De(s[i],o[i]);else De(e,u);return(o=_e(u,"script")).length>0&&ve(o,!h&&_e(e,"script")),u},cleanData:function(e){for(var t,n,i,r=b.event.special,s=0;void 0!==(n=e[s]);s++)if(K(n)){if(t=n[Y.expando]){if(t.events)for(i in t.events)r[i]?b.event.remove(n,i):b.removeEvent(n,i,t.handle);n[Y.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),b.fn.extend({detach:function(e){return Le(this,e,!0)},remove:function(e){return Le(this,e)},text:function(e){return W(this,(function(e){return void 0===e?b.text(this):this.empty().each((function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)}))}),null,e,arguments.length)},append:function(){return Oe(this,arguments,(function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Pe(this,e).appendChild(e)}))},prepend:function(){return Oe(this,arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Pe(this,e);t.insertBefore(e,t.firstChild)}}))},before:function(){return Oe(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this)}))},after:function(){return Oe(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)}))},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(b.cleanData(_e(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map((function(){return b.clone(this,e,t)}))},html:function(e){return W(this,(function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Se.test(e)&&!me[(fe.exec(e)||["",""])[1].toLowerCase()]){e=b.htmlPrefilter(e);try{for(;n<i;n++)1===(t=this[n]||{}).nodeType&&(b.cleanData(_e(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)}),null,e,arguments.length)},replaceWith:function(){var e=[];return Oe(this,arguments,(function(t){var n=this.parentNode;b.inArray(this,e)<0&&(b.cleanData(_e(this)),n&&n.replaceChild(t,this))}),e)}}),b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(e,t){b.fn[e]=function(e){for(var n,i=[],r=b(e),s=r.length-1,a=0;a<=s;a++)n=a===s?this:this.clone(!0),b(r[a])[t](n),o.apply(i,n.get());return this.pushStack(i)}}));var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Fe=/^--/,qe=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},je=function(e,t,n){var i,r,s={};for(r in t)s[r]=e.style[r],e.style[r]=t[r];for(r in i=n.call(e),t)e.style[r]=s[r];return i},Ue=new RegExp(ne.join("|"),"i"),He=new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$","g");function We(e,t,n){var i,r,s,o,a=Fe.test(t),c=e.style;return(n=n||qe(e))&&(o=n.getPropertyValue(t)||n[t],a&&o&&(o=o.replace(He,"$1")||void 0),""!==o||re(e)||(o=b.style(e,t)),!p.pixelBoxStyles()&&Me.test(o)&&Ue.test(t)&&(i=c.width,r=c.minWidth,s=c.maxWidth,c.minWidth=c.maxWidth=c.width=o,o=n.width,c.width=i,c.minWidth=r,c.maxWidth=s)),void 0!==o?o+"":o}function Be(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function t(){if(u){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(l).appendChild(u);var t=e.getComputedStyle(u);i="1%"!==t.top,c=12===n(t.marginLeft),u.style.right="60%",o=36===n(t.right),r=36===n(t.width),u.style.position="absolute",s=12===n(u.offsetWidth/3),ie.removeChild(l),u=null}}function n(e){return Math.round(parseFloat(e))}var i,r,s,o,a,c,l=m.createElement("div"),u=m.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",p.clearCloneStyle="content-box"===u.style.backgroundClip,b.extend(p,{boxSizingReliable:function(){return t(),r},pixelBoxStyles:function(){return t(),o},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),c},scrollboxSize:function(){return t(),s},reliableTrDimensions:function(){var t,n,i,r;return null==a&&(t=m.createElement("table"),n=m.createElement("tr"),i=m.createElement("div"),t.style.cssText="position:absolute;left:-11111px;border-collapse:separate",n.style.cssText="border:1px solid",n.style.height="1px",i.style.height="9px",i.style.display="block",ie.appendChild(t).appendChild(n).appendChild(i),r=e.getComputedStyle(n),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===n.offsetHeight,ie.removeChild(t)),a}}))}();var Ve=["Webkit","Moz","ms"],ze=m.createElement("div").style,$e={};function Ke(e){var t=b.cssProps[e]||$e[e];return t||(e in ze?e:$e[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),n=Ve.length;n--;)if((e=Ve[n]+t)in ze)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Je={letterSpacing:"0",fontWeight:"400"};function Xe(e,t,n){var i=te.exec(t);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):t}function Qe(e,t,n,i,r,s){var o="width"===t?1:0,a=0,c=0;if(n===(i?"border":"content"))return 0;for(;o<4;o+=2)"margin"===n&&(c+=b.css(e,n+ne[o],!0,r)),i?("content"===n&&(c-=b.css(e,"padding"+ne[o],!0,r)),"margin"!==n&&(c-=b.css(e,"border"+ne[o]+"Width",!0,r))):(c+=b.css(e,"padding"+ne[o],!0,r),"padding"!==n?c+=b.css(e,"border"+ne[o]+"Width",!0,r):a+=b.css(e,"border"+ne[o]+"Width",!0,r));return!i&&s>=0&&(c+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-s-c-a-.5))||0),c}function Ze(e,t,n){var i=qe(e),r=(!p.boxSizingReliable()||n)&&"border-box"===b.css(e,"boxSizing",!1,i),s=r,o=We(e,t,i),a="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(o)){if(!n)return o;o="auto"}return(!p.boxSizingReliable()&&r||!p.reliableTrDimensions()&&S(e,"tr")||"auto"===o||!parseFloat(o)&&"inline"===b.css(e,"display",!1,i))&&e.getClientRects().length&&(r="border-box"===b.css(e,"boxSizing",!1,i),(s=a in e)&&(o=e[a])),(o=parseFloat(o)||0)+Qe(e,t,n||(r?"border":"content"),s,i,o)+"px"}function et(e,t,n,i,r){return new et.prototype.init(e,t,n,i,r)}b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var r,s,o,a=$(t),c=Fe.test(t),l=e.style;if(c||(t=Ke(a)),o=b.cssHooks[t]||b.cssHooks[a],void 0===n)return o&&"get"in o&&void 0!==(r=o.get(e,!1,i))?r:l[t];"string"===(s=typeof n)&&(r=te.exec(n))&&r[1]&&(n=ae(e,t,r),s="number"),null!=n&&n==n&&("number"!==s||c||(n+=r&&r[3]||(b.cssNumber[a]?"":"px")),p.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),o&&"set"in o&&void 0===(n=o.set(e,n,i))||(c?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,i){var r,s,o,a=$(t);return Fe.test(t)||(t=Ke(a)),(o=b.cssHooks[t]||b.cssHooks[a])&&"get"in o&&(r=o.get(e,!0,n)),void 0===r&&(r=We(e,t,i)),"normal"===r&&t in Je&&(r=Je[t]),""===n||n?(s=parseFloat(r),!0===n||isFinite(s)?s||0:r):r}}),b.each(["height","width"],(function(e,t){b.cssHooks[t]={get:function(e,n,i){if(n)return!Ge.test(b.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,t,i):je(e,Ye,(function(){return Ze(e,t,i)}))},set:function(e,n,i){var r,s=qe(e),o=!p.scrollboxSize()&&"absolute"===s.position,a=(o||i)&&"border-box"===b.css(e,"boxSizing",!1,s),c=i?Qe(e,t,i,a,s):0;return a&&o&&(c-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(s[t])-Qe(e,t,"border",!1,s)-.5)),c&&(r=te.exec(n))&&"px"!==(r[3]||"px")&&(e.style[t]=n,n=b.css(e,t)),Xe(0,n,c)}}})),b.cssHooks.marginLeft=Be(p.reliableMarginLeft,(function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-je(e,{marginLeft:0},(function(){return e.getBoundingClientRect().left})))+"px"})),b.each({margin:"",padding:"",border:"Width"},(function(e,t){b.cssHooks[e+t]={expand:function(n){for(var i=0,r={},s="string"==typeof n?n.split(" "):[n];i<4;i++)r[e+ne[i]+t]=s[i]||s[i-2]||s[0];return r}},"margin"!==e&&(b.cssHooks[e+t].set=Xe)})),b.fn.extend({css:function(e,t){return W(this,(function(e,t,n){var i,r,s={},o=0;if(Array.isArray(t)){for(i=qe(e),r=t.length;o<r;o++)s[t[o]]=b.css(e,t[o],!1,i);return s}return void 0!==n?b.style(e,t,n):b.css(e,t)}),e,t,arguments.length>1)}}),b.Tween=et,et.prototype={constructor:et,init:function(e,t,n,i,r,s){this.elem=e,this.prop=n,this.easing=r||b.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=s||(b.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}},et.prototype.init.prototype=et.prototype,et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=b.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):1!==e.elem.nodeType||!b.cssHooks[e.prop]&&null==e.elem.style[Ke(e.prop)]?e.elem[e.prop]=e.now:b.style(e.elem,e.prop,e.now+e.unit)}}},et.propHooks.scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},b.fx=et.prototype.init,b.fx.step={};var tt,nt,it=/^(?:toggle|show|hide)$/,rt=/queueHooks$/;function st(){nt&&(!1===m.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(st):e.setTimeout(st,b.fx.interval),b.fx.tick())}function ot(){return e.setTimeout((function(){tt=void 0})),tt=Date.now()}function at(e,t){var n,i=0,r={height:e};for(t=t?1:0;i<4;i+=2-t)r["margin"+(n=ne[i])]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function ct(e,t,n){for(var i,r=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),s=0,o=r.length;s<o;s++)if(i=r[s].call(n,t,e))return i}function lt(e,t,n){var i,r,s=0,o=lt.prefilters.length,a=b.Deferred().always((function(){delete c.elem})),c=function(){if(r)return!1;for(var t=tt||ot(),n=Math.max(0,l.startTime+l.duration-t),i=1-(n/l.duration||0),s=0,o=l.tweens.length;s<o;s++)l.tweens[s].run(i);return a.notifyWith(e,[l,i,n]),i<1&&o?n:(o||a.notifyWith(e,[l,1,0]),a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{},easing:b.easing._default},n),originalProperties:t,originalOptions:n,startTime:tt||ot(),duration:n.duration,tweens:[],createTween:function(t,n){var i=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(i),i},stop:function(t){var n=0,i=t?l.tweens.length:0;if(r)return this;for(r=!0;n<i;n++)l.tweens[n].run(1);return t?(a.notifyWith(e,[l,1,0]),a.resolveWith(e,[l,t])):a.rejectWith(e,[l,t]),this}}),u=l.props;for(!function(e,t){var n,i,r,s,o;for(n in e)if(r=t[i=$(n)],s=e[n],Array.isArray(s)&&(r=s[1],s=e[n]=s[0]),n!==i&&(e[i]=s,delete e[n]),(o=b.cssHooks[i])&&"expand"in o)for(n in s=o.expand(s),delete e[i],s)n in e||(e[n]=s[n],t[n]=r);else t[i]=r}(u,l.opts.specialEasing);s<o;s++)if(i=lt.prefilters[s].call(l,e,u,l.opts))return f(i.stop)&&(b._queueHooks(l.elem,l.opts.queue).stop=i.stop.bind(i)),i;return b.map(u,ct,l),f(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),b.fx.timer(b.extend(c,{elem:e,anim:l,queue:l.opts.queue})),l}b.Animation=b.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ae(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){f(e)?(t=e,e=["*"]):e=e.match(L);for(var n,i=0,r=e.length;i<r;i++)n=e[i],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var i,r,s,o,a,c,l,u,h="width"in t||"height"in t,d=this,p={},f=e.style,g=e.nodeType&&oe(e),m=Y.get(e,"fxshow");for(i in n.queue||(null==(o=b._queueHooks(e,"fx")).unqueued&&(o.unqueued=0,a=o.empty.fire,o.empty.fire=function(){o.unqueued||a()}),o.unqueued++,d.always((function(){d.always((function(){o.unqueued--,b.queue(e,"fx").length||o.empty.fire()}))}))),t)if(r=t[i],it.test(r)){if(delete t[i],s=s||"toggle"===r,r===(g?"hide":"show")){if("show"!==r||!m||void 0===m[i])continue;g=!0}p[i]=m&&m[i]||b.style(e,i)}if((c=!b.isEmptyObject(t))||!b.isEmptyObject(p))for(i in h&&1===e.nodeType&&(n.overflow=[f.overflow,f.overflowX,f.overflowY],null==(l=m&&m.display)&&(l=Y.get(e,"display")),"none"===(u=b.css(e,"display"))&&(l?u=l:(ue([e],!0),l=e.style.display||l,u=b.css(e,"display"),ue([e]))),("inline"===u||"inline-block"===u&&null!=l)&&"none"===b.css(e,"float")&&(c||(d.done((function(){f.display=l})),null==l&&(u=f.display,l="none"===u?"":u)),f.display="inline-block")),n.overflow&&(f.overflow="hidden",d.always((function(){f.overflow=n.overflow[0],f.overflowX=n.overflow[1],f.overflowY=n.overflow[2]}))),c=!1,p)c||(m?"hidden"in m&&(g=m.hidden):m=Y.access(e,"fxshow",{display:l}),s&&(m.hidden=!g),g&&ue([e],!0),d.done((function(){for(i in g||ue([e]),Y.remove(e,"fxshow"),p)b.style(e,i,p[i])}))),c=ct(g?m[i]:0,i,d),i in m||(m[i]=c.start,g&&(c.end=c.start,c.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),b.speed=function(e,t,n){var i=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||f(e)&&e,duration:e,easing:n&&t||t&&!f(t)&&t};return b.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in b.fx.speeds?i.duration=b.fx.speeds[i.duration]:i.duration=b.fx.speeds._default),null!=i.queue&&!0!==i.queue||(i.queue="fx"),i.old=i.complete,i.complete=function(){f(i.old)&&i.old.call(this),i.queue&&b.dequeue(this,i.queue)},i},b.fn.extend({fadeTo:function(e,t,n,i){return this.filter(oe).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var r=b.isEmptyObject(e),s=b.speed(t,n,i),o=function(){var t=lt(this,b.extend({},e),s);(r||Y.get(this,"finish"))&&t.stop(!0)};return o.finish=o,r||!1===s.queue?this.each(o):this.queue(s.queue,o)},stop:function(e,t,n){var i=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each((function(){var t=!0,r=null!=e&&e+"queueHooks",s=b.timers,o=Y.get(this);if(r)o[r]&&o[r].stop&&i(o[r]);else for(r in o)o[r]&&o[r].stop&&rt.test(r)&&i(o[r]);for(r=s.length;r--;)s[r].elem!==this||null!=e&&s[r].queue!==e||(s[r].anim.stop(n),t=!1,s.splice(r,1));!t&&n||b.dequeue(this,e)}))},finish:function(e){return!1!==e&&(e=e||"fx"),this.each((function(){var t,n=Y.get(this),i=n[e+"queue"],r=n[e+"queueHooks"],s=b.timers,o=i?i.length:0;for(n.finish=!0,b.queue(this,e,[]),r&&r.stop&&r.stop.call(this,!0),t=s.length;t--;)s[t].elem===this&&s[t].queue===e&&(s[t].anim.stop(!0),s.splice(t,1));for(t=0;t<o;t++)i[t]&&i[t].finish&&i[t].finish.call(this);delete n.finish}))}}),b.each(["toggle","show","hide"],(function(e,t){var n=b.fn[t];b.fn[t]=function(e,i,r){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(at(t,!0),e,i,r)}})),b.each({slideDown:at("show"),slideUp:at("hide"),slideToggle:at("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(e,t){b.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}})),b.timers=[],b.fx.tick=function(){var e,t=0,n=b.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||b.fx.stop(),tt=void 0},b.fx.timer=function(e){b.timers.push(e),b.fx.start()},b.fx.interval=13,b.fx.start=function(){nt||(nt=!0,st())},b.fx.stop=function(){nt=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fn.delay=function(t,n){return t=b.fx&&b.fx.speeds[t]||t,n=n||"fx",this.queue(n,(function(n,i){var r=e.setTimeout(n,t);i.stop=function(){e.clearTimeout(r)}}))},function(){var e=m.createElement("input"),t=m.createElement("select").appendChild(m.createElement("option"));e.type="checkbox",p.checkOn=""!==e.value,p.optSelected=t.selected,(e=m.createElement("input")).value="t",e.type="radio",p.radioValue="t"===e.value}();var ut,ht=b.expr.attrHandle;b.fn.extend({attr:function(e,t){return W(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each((function(){b.removeAttr(this,e)}))}}),b.extend({attr:function(e,t,n){var i,r,s=e.nodeType;if(3!==s&&8!==s&&2!==s)return void 0===e.getAttribute?b.prop(e,t,n):(1===s&&b.isXMLDoc(e)||(r=b.attrHooks[t.toLowerCase()]||(b.expr.match.bool.test(t)?ut:void 0)),void 0!==n?null===n?void b.removeAttr(e,t):r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):r&&"get"in r&&null!==(i=r.get(e,t))?i:null==(i=b.find.attr(e,t))?void 0:i)},attrHooks:{type:{set:function(e,t){if(!p.radioValue&&"radio"===t&&S(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,i=0,r=t&&t.match(L);if(r&&1===e.nodeType)for(;n=r[i++];)e.removeAttribute(n)}}),ut={set:function(e,t,n){return!1===t?b.removeAttr(e,n):e.setAttribute(n,n),n}},b.each(b.expr.match.bool.source.match(/\w+/g),(function(e,t){var n=ht[t]||b.find.attr;ht[t]=function(e,t,i){var r,s,o=t.toLowerCase();return i||(s=ht[o],ht[o]=r,r=null!=n(e,t,i)?o:null,ht[o]=s),r}}));var dt=/^(?:input|select|textarea|button)$/i,pt=/^(?:a|area)$/i;function ft(e){return(e.match(L)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(L)||[]}b.fn.extend({prop:function(e,t){return W(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each((function(){delete this[b.propFix[e]||e]}))}}),b.extend({prop:function(e,t,n){var i,r,s=e.nodeType;if(3!==s&&8!==s&&2!==s)return 1===s&&b.isXMLDoc(e)||(t=b.propFix[t]||t,r=b.propHooks[t]),void 0!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:e[t]=n:r&&"get"in r&&null!==(i=r.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){var t=b.find.attr(e,"tabindex");return t?parseInt(t,10):dt.test(e.nodeName)||pt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),p.optSelected||(b.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),b.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){b.propFix[this.toLowerCase()]=this})),b.fn.extend({addClass:function(e){var t,n,i,r,s,o;return f(e)?this.each((function(t){b(this).addClass(e.call(this,t,gt(this)))})):(t=mt(e)).length?this.each((function(){if(i=gt(this),n=1===this.nodeType&&" "+ft(i)+" "){for(s=0;s<t.length;s++)r=t[s],n.indexOf(" "+r+" ")<0&&(n+=r+" ");o=ft(n),i!==o&&this.setAttribute("class",o)}})):this},removeClass:function(e){var t,n,i,r,s,o;return f(e)?this.each((function(t){b(this).removeClass(e.call(this,t,gt(this)))})):arguments.length?(t=mt(e)).length?this.each((function(){if(i=gt(this),n=1===this.nodeType&&" "+ft(i)+" "){for(s=0;s<t.length;s++)for(r=t[s];n.indexOf(" "+r+" ")>-1;)n=n.replace(" "+r+" "," ");o=ft(n),i!==o&&this.setAttribute("class",o)}})):this:this.attr("class","")},toggleClass:function(e,t){var n,i,r,s,o=typeof e,a="string"===o||Array.isArray(e);return f(e)?this.each((function(n){b(this).toggleClass(e.call(this,n,gt(this),t),t)})):"boolean"==typeof t&&a?t?this.addClass(e):this.removeClass(e):(n=mt(e),this.each((function(){if(a)for(s=b(this),r=0;r<n.length;r++)i=n[r],s.hasClass(i)?s.removeClass(i):s.addClass(i);else void 0!==e&&"boolean"!==o||((i=gt(this))&&Y.set(this,"__className__",i),this.setAttribute&&this.setAttribute("class",i||!1===e?"":Y.get(this,"__className__")||""))})))},hasClass:function(e){var t,n,i=0;for(t=" "+e+" ";n=this[i++];)if(1===n.nodeType&&(" "+ft(gt(n))+" ").indexOf(t)>-1)return!0;return!1}});var _t=/\r/g;b.fn.extend({val:function(e){var t,n,i,r=this[0];return arguments.length?(i=f(e),this.each((function(n){var r;1===this.nodeType&&(null==(r=i?e.call(this,n,b(this).val()):e)?r="":"number"==typeof r?r+="":Array.isArray(r)&&(r=b.map(r,(function(e){return null==e?"":e+""}))),(t=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,r,"value")||(this.value=r))}))):r?(t=b.valHooks[r.type]||b.valHooks[r.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(r,"value"))?n:"string"==typeof(n=r.value)?n.replace(_t,""):null==n?"":n:void 0}}),b.extend({valHooks:{option:{get:function(e){var t=b.find.attr(e,"value");return null!=t?t:ft(b.text(e))}},select:{get:function(e){var t,n,i,r=e.options,s=e.selectedIndex,o="select-one"===e.type,a=o?null:[],c=o?s+1:r.length;for(i=s<0?c:o?s:0;i<c;i++)if(((n=r[i]).selected||i===s)&&!n.disabled&&(!n.parentNode.disabled||!S(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){for(var n,i,r=e.options,s=b.makeArray(t),o=r.length;o--;)((i=r[o]).selected=b.inArray(b.valHooks.option.get(i),s)>-1)&&(n=!0);return n||(e.selectedIndex=-1),s}}}}),b.each(["radio","checkbox"],(function(){b.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=b.inArray(b(e).val(),t)>-1}},p.checkOn||(b.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})})),p.focusin="onfocusin"in e;var vt=/^(?:focusinfocus|focusoutblur)$/,yt=function(e){e.stopPropagation()};b.extend(b.event,{trigger:function(t,n,i,r){var s,o,a,c,l,h,d,p,_=[i||m],v=u.call(t,"type")?t.type:t,y=u.call(t,"namespace")?t.namespace.split("."):[];if(o=p=a=i=i||m,3!==i.nodeType&&8!==i.nodeType&&!vt.test(v+b.event.triggered)&&(v.indexOf(".")>-1&&(y=v.split("."),v=y.shift(),y.sort()),l=v.indexOf(":")<0&&"on"+v,(t=t[b.expando]?t:new b.Event(v,"object"==typeof t&&t)).isTrigger=r?2:3,t.namespace=y.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+y.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:b.makeArray(n,[t]),d=b.event.special[v]||{},r||!d.trigger||!1!==d.trigger.apply(i,n))){if(!r&&!d.noBubble&&!g(i)){for(c=d.delegateType||v,vt.test(c+v)||(o=o.parentNode);o;o=o.parentNode)_.push(o),a=o;a===(i.ownerDocument||m)&&_.push(a.defaultView||a.parentWindow||e)}for(s=0;(o=_[s++])&&!t.isPropagationStopped();)p=o,t.type=s>1?c:d.bindType||v,(h=(Y.get(o,"events")||Object.create(null))[t.type]&&Y.get(o,"handle"))&&h.apply(o,n),(h=l&&o[l])&&h.apply&&K(o)&&(t.result=h.apply(o,n),!1===t.result&&t.preventDefault());return t.type=v,r||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(_.pop(),n)||!K(i)||l&&f(i[v])&&!g(i)&&((a=i[l])&&(i[l]=null),b.event.triggered=v,t.isPropagationStopped()&&p.addEventListener(v,yt),i[v](),t.isPropagationStopped()&&p.removeEventListener(v,yt),b.event.triggered=void 0,a&&(i[l]=a)),t.result}},simulate:function(e,t,n){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0});b.event.trigger(i,null,t)}}),b.fn.extend({trigger:function(e,t){return this.each((function(){b.event.trigger(e,t,this)}))},triggerHandler:function(e,t){var n=this[0];if(n)return b.event.trigger(e,t,n,!0)}}),p.focusin||b.each({focus:"focusin",blur:"focusout"},(function(e,t){var n=function(e){b.event.simulate(t,e.target,b.event.fix(e))};b.event.special[t]={setup:function(){var i=this.ownerDocument||this.document||this,r=Y.access(i,t);r||i.addEventListener(e,n,!0),Y.access(i,t,(r||0)+1)},teardown:function(){var i=this.ownerDocument||this.document||this,r=Y.access(i,t)-1;r?Y.access(i,t,r):(i.removeEventListener(e,n,!0),Y.remove(i,t))}}}));var wt=e.location,bt={guid:Date.now()},Ct=/\?/;b.parseXML=function(t){var n,i;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){}return i=n&&n.getElementsByTagName("parsererror")[0],n&&!i||b.error("Invalid XML: "+(i?b.map(i.childNodes,(function(e){return e.textContent})).join("\n"):t)),n};var Tt=/\[\]$/,It=/\r?\n/g,Et=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function St(e,t,n,i){var r;if(Array.isArray(t))b.each(t,(function(t,r){n||Tt.test(e)?i(e,r):St(e+"["+("object"==typeof r&&null!=r?t:"")+"]",r,n,i)}));else if(n||"object"!==y(t))i(e,t);else for(r in t)St(e+"["+r+"]",t[r],n,i)}b.param=function(e,t){var n,i=[],r=function(e,t){var n=f(t)?t():t;i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,(function(){r(this.name,this.value)}));else for(n in e)St(n,e[n],t,r);return i.join("&")},b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this})).filter((function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&kt.test(this.nodeName)&&!Et.test(e)&&(this.checked||!pe.test(e))})).map((function(e,t){var n=b(this).val();return null==n?null:Array.isArray(n)?b.map(n,(function(e){return{name:t.name,value:e.replace(It,"\r\n")}})):{name:t.name,value:n.replace(It,"\r\n")}})).get()}});var xt=/%20/g,Nt=/#.*$/,Pt=/([?&])_=[^&]*/,Rt=/^(.*?):[ \t]*([^\r\n]*)$/gm,At=/^(?:GET|HEAD)$/,Dt=/^\/\//,Ot={},Lt={},Mt="*/".concat("*"),Ft=m.createElement("a");function qt(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var i,r=0,s=t.toLowerCase().match(L)||[];if(f(n))for(;i=s[r++];)"+"===i[0]?(i=i.slice(1)||"*",(e[i]=e[i]||[]).unshift(n)):(e[i]=e[i]||[]).push(n)}}function jt(e,t,n,i){var r={},s=e===Lt;function o(a){var c;return r[a]=!0,b.each(e[a]||[],(function(e,a){var l=a(t,n,i);return"string"!=typeof l||s||r[l]?s?!(c=l):void 0:(t.dataTypes.unshift(l),o(l),!1)})),c}return o(t.dataTypes[0])||!r["*"]&&o("*")}function Ut(e,t){var n,i,r=b.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((r[n]?e:i||(i={}))[n]=t[n]);return i&&b.extend(!0,e,i),e}Ft.href=wt.href,b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:wt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Mt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ut(Ut(e,b.ajaxSettings),t):Ut(b.ajaxSettings,e)},ajaxPrefilter:qt(Ot),ajaxTransport:qt(Lt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,r,s,o,a,c,l,u,h,d,p=b.ajaxSetup({},n),f=p.context||p,g=p.context&&(f.nodeType||f.jquery)?b(f):b.event,_=b.Deferred(),v=b.Callbacks("once memory"),y=p.statusCode||{},w={},C={},T="canceled",I={readyState:0,getResponseHeader:function(e){var t;if(l){if(!o)for(o={};t=Rt.exec(s);)o[t[1].toLowerCase()+" "]=(o[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=o[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return l?s:null},setRequestHeader:function(e,t){return null==l&&(e=C[e.toLowerCase()]=C[e.toLowerCase()]||e,w[e]=t),this},overrideMimeType:function(e){return null==l&&(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(l)I.always(e[I.status]);else for(t in e)y[t]=[y[t],e[t]];return this},abort:function(e){var t=e||T;return i&&i.abort(t),E(0,t),this}};if(_.promise(I),p.url=((t||p.url||wt.href)+"").replace(Dt,wt.protocol+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=(p.dataType||"*").toLowerCase().match(L)||[""],null==p.crossDomain){c=m.createElement("a");try{c.href=p.url,c.href=c.href,p.crossDomain=Ft.protocol+"//"+Ft.host!=c.protocol+"//"+c.host}catch(e){p.crossDomain=!0}}if(p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),jt(Ot,p,n,I),l)return I;for(h in(u=b.event&&p.global)&&0==b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!At.test(p.type),r=p.url.replace(Nt,""),p.hasContent?p.data&&p.processData&&0===(p.contentType||"").indexOf("application/x-www-form-urlencoded")&&(p.data=p.data.replace(xt,"+")):(d=p.url.slice(r.length),p.data&&(p.processData||"string"==typeof p.data)&&(r+=(Ct.test(r)?"&":"?")+p.data,delete p.data),!1===p.cache&&(r=r.replace(Pt,"$1"),d=(Ct.test(r)?"&":"?")+"_="+bt.guid+++d),p.url=r+d),p.ifModified&&(b.lastModified[r]&&I.setRequestHeader("If-Modified-Since",b.lastModified[r]),b.etag[r]&&I.setRequestHeader("If-None-Match",b.etag[r])),(p.data&&p.hasContent&&!1!==p.contentType||n.contentType)&&I.setRequestHeader("Content-Type",p.contentType),I.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Mt+"; q=0.01":""):p.accepts["*"]),p.headers)I.setRequestHeader(h,p.headers[h]);if(p.beforeSend&&(!1===p.beforeSend.call(f,I,p)||l))return I.abort();if(T="abort",v.add(p.complete),I.done(p.success),I.fail(p.error),i=jt(Lt,p,n,I)){if(I.readyState=1,u&&g.trigger("ajaxSend",[I,p]),l)return I;p.async&&p.timeout>0&&(a=e.setTimeout((function(){I.abort("timeout")}),p.timeout));try{l=!1,i.send(w,E)}catch(e){if(l)throw e;E(-1,e)}}else E(-1,"No Transport");function E(t,n,o,c){var h,d,m,w,C,T=n;l||(l=!0,a&&e.clearTimeout(a),i=void 0,s=c||"",I.readyState=t>0?4:0,h=t>=200&&t<300||304===t,o&&(w=function(e,t,n){for(var i,r,s,o,a=e.contents,c=e.dataTypes;"*"===c[0];)c.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(r in a)if(a[r]&&a[r].test(i)){c.unshift(r);break}if(c[0]in n)s=c[0];else{for(r in n){if(!c[0]||e.converters[r+" "+c[0]]){s=r;break}o||(o=r)}s=s||o}if(s)return s!==c[0]&&c.unshift(s),n[s]}(p,I,o)),!h&&b.inArray("script",p.dataTypes)>-1&&b.inArray("json",p.dataTypes)<0&&(p.converters["text script"]=function(){}),w=function(e,t,n,i){var r,s,o,a,c,l={},u=e.dataTypes.slice();if(u[1])for(o in e.converters)l[o.toLowerCase()]=e.converters[o];for(s=u.shift();s;)if(e.responseFields[s]&&(n[e.responseFields[s]]=t),!c&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),c=s,s=u.shift())if("*"===s)s=c;else if("*"!==c&&c!==s){if(!(o=l[c+" "+s]||l["* "+s]))for(r in l)if((a=r.split(" "))[1]===s&&(o=l[c+" "+a[0]]||l["* "+a[0]])){!0===o?o=l[r]:!0!==l[r]&&(s=a[0],u.unshift(a[1]));break}if(!0!==o)if(o&&e.throws)t=o(t);else try{t=o(t)}catch(e){return{state:"parsererror",error:o?e:"No conversion from "+c+" to "+s}}}return{state:"success",data:t}}(p,w,I,h),h?(p.ifModified&&((C=I.getResponseHeader("Last-Modified"))&&(b.lastModified[r]=C),(C=I.getResponseHeader("etag"))&&(b.etag[r]=C)),204===t||"HEAD"===p.type?T="nocontent":304===t?T="notmodified":(T=w.state,d=w.data,h=!(m=w.error))):(m=T,!t&&T||(T="error",t<0&&(t=0))),I.status=t,I.statusText=(n||T)+"",h?_.resolveWith(f,[d,T,I]):_.rejectWith(f,[I,T,m]),I.statusCode(y),y=void 0,u&&g.trigger(h?"ajaxSuccess":"ajaxError",[I,p,h?d:m]),v.fireWith(f,[I,T]),u&&(g.trigger("ajaxComplete",[I,p]),--b.active||b.event.trigger("ajaxStop")))}return I},getJSON:function(e,t,n){return b.get(e,t,n,"json")},getScript:function(e,t){return b.get(e,void 0,t,"script")}}),b.each(["get","post"],(function(e,t){b[t]=function(e,n,i,r){return f(n)&&(r=r||i,i=n,n=void 0),b.ajax(b.extend({url:e,type:t,dataType:r,data:n,success:i},b.isPlainObject(e)&&e))}})),b.ajaxPrefilter((function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")})),b._evalUrl=function(e,t,n){return b.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){b.globalEval(e,t,n)}})},b.fn.extend({wrapAll:function(e){var t;return this[0]&&(f(e)&&(e=e.call(this[0])),t=b(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e})).append(this)),this},wrapInner:function(e){return f(e)?this.each((function(t){b(this).wrapInner(e.call(this,t))})):this.each((function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)}))},wrap:function(e){var t=f(e);return this.each((function(n){b(this).wrapAll(t?e.call(this,n):e)}))},unwrap:function(e){return this.parent(e).not("body").each((function(){b(this).replaceWith(this.childNodes)})),this}}),b.expr.pseudos.hidden=function(e){return!b.expr.pseudos.visible(e)},b.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},b.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Ht={0:200,1223:204},Wt=b.ajaxSettings.xhr();p.cors=!!Wt&&"withCredentials"in Wt,p.ajax=Wt=!!Wt,b.ajaxTransport((function(t){var n,i;if(p.cors||Wt&&!t.crossDomain)return{send:function(r,s){var o,a=t.xhr();if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(o in t.xhrFields)a[o]=t.xhrFields[o];for(o in t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest"),r)a.setRequestHeader(o,r[o]);n=function(e){return function(){n&&(n=i=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!=typeof a.status?s(0,"error"):s(a.status,a.statusText):s(Ht[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=n(),i=a.onerror=a.ontimeout=n("error"),void 0!==a.onabort?a.onabort=i:a.onreadystatechange=function(){4===a.readyState&&e.setTimeout((function(){n&&i()}))},n=n("abort");try{a.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}})),b.ajaxPrefilter((function(e){e.crossDomain&&(e.contents.script=!1)})),b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",(function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")})),b.ajaxTransport("script",(function(e){var t,n;if(e.crossDomain||e.scriptAttrs)return{send:function(i,r){t=b("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&r("error"===e.type?404:200,e.type)}),m.head.appendChild(t[0])},abort:function(){n&&n()}}}));var Bt,Vt=[],zt=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Vt.pop()||b.expando+"_"+bt.guid++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",(function(t,n,i){var r,s,o,a=!1!==t.jsonp&&(zt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&zt.test(t.data)&&"data");if(a||"jsonp"===t.dataTypes[0])return r=t.jsonpCallback=f(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(zt,"$1"+r):!1!==t.jsonp&&(t.url+=(Ct.test(t.url)?"&":"?")+t.jsonp+"="+r),t.converters["script json"]=function(){return o||b.error(r+" was not called"),o[0]},t.dataTypes[0]="json",s=e[r],e[r]=function(){o=arguments},i.always((function(){void 0===s?b(e).removeProp(r):e[r]=s,t[r]&&(t.jsonpCallback=n.jsonpCallback,Vt.push(r)),o&&f(s)&&s(o[0]),o=s=void 0})),"script"})),p.createHTMLDocument=((Bt=m.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Bt.childNodes.length),b.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(p.createHTMLDocument?((i=(t=m.implementation.createHTMLDocument("")).createElement("base")).href=m.location.href,t.head.appendChild(i)):t=m),s=!n&&[],(r=x.exec(e))?[t.createElement(r[1])]:(r=we([e],t,s),s&&s.length&&b(s).remove(),b.merge([],r.childNodes)));var i,r,s},b.fn.load=function(e,t,n){var i,r,s,o=this,a=e.indexOf(" ");return a>-1&&(i=ft(e.slice(a)),e=e.slice(0,a)),f(t)?(n=t,t=void 0):t&&"object"==typeof t&&(r="POST"),o.length>0&&b.ajax({url:e,type:r||"GET",dataType:"html",data:t}).done((function(e){s=arguments,o.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)})).always(n&&function(e,t){o.each((function(){n.apply(this,s||[e.responseText,t,e])}))}),this},b.expr.pseudos.animated=function(e){return b.grep(b.timers,(function(t){return e===t.elem})).length},b.offset={setOffset:function(e,t,n){var i,r,s,o,a,c,l=b.css(e,"position"),u=b(e),h={};"static"===l&&(e.style.position="relative"),a=u.offset(),s=b.css(e,"top"),c=b.css(e,"left"),("absolute"===l||"fixed"===l)&&(s+c).indexOf("auto")>-1?(o=(i=u.position()).top,r=i.left):(o=parseFloat(s)||0,r=parseFloat(c)||0),f(t)&&(t=t.call(e,n,b.extend({},a))),null!=t.top&&(h.top=t.top-a.top+o),null!=t.left&&(h.left=t.left-a.left+r),"using"in t?t.using.call(e,h):u.css(h)}},b.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each((function(t){b.offset.setOffset(this,e,t)}));var t,n,i=this[0];return i?i.getClientRects().length?(t=i.getBoundingClientRect(),n=i.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,i=this[0],r={top:0,left:0};if("fixed"===b.css(i,"position"))t=i.getBoundingClientRect();else{for(t=this.offset(),n=i.ownerDocument,e=i.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===b.css(e,"position");)e=e.parentNode;e&&e!==i&&1===e.nodeType&&((r=b(e).offset()).top+=b.css(e,"borderTopWidth",!0),r.left+=b.css(e,"borderLeftWidth",!0))}return{top:t.top-r.top-b.css(i,"marginTop",!0),left:t.left-r.left-b.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){for(var e=this.offsetParent;e&&"static"===b.css(e,"position");)e=e.offsetParent;return e||ie}))}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(e,t){var n="pageYOffset"===t;b.fn[e]=function(i){return W(this,(function(e,i,r){var s;if(g(e)?s=e:9===e.nodeType&&(s=e.defaultView),void 0===r)return s?s[t]:e[i];s?s.scrollTo(n?s.pageXOffset:r,n?r:s.pageYOffset):e[i]=r}),e,i,arguments.length)}})),b.each(["top","left"],(function(e,t){b.cssHooks[t]=Be(p.pixelPosition,(function(e,n){if(n)return n=We(e,t),Me.test(n)?b(e).position()[t]+"px":n}))})),b.each({Height:"height",Width:"width"},(function(e,t){b.each({padding:"inner"+e,content:t,"":"outer"+e},(function(n,i){b.fn[i]=function(r,s){var o=arguments.length&&(n||"boolean"!=typeof r),a=n||(!0===r||!0===s?"margin":"border");return W(this,(function(t,n,r){var s;return g(t)?0===i.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(s=t.documentElement,Math.max(t.body["scroll"+e],s["scroll"+e],t.body["offset"+e],s["offset"+e],s["client"+e])):void 0===r?b.css(t,n,a):b.style(t,n,r,a)}),t,o?r:void 0,o)}}))})),b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(e,t){b.fn[t]=function(e){return this.on(t,e)}})),b.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),b.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),(function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}));var $t=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;b.proxy=function(e,t){var n,i,s;if("string"==typeof t&&(n=e[t],t=e,e=n),f(e))return i=r.call(arguments,2),s=function(){return e.apply(t||this,i.concat(r.call(arguments)))},s.guid=e.guid=e.guid||b.guid++,s},b.holdReady=function(e){e?b.readyWait++:b.ready(!0)},b.isArray=Array.isArray,b.parseJSON=JSON.parse,b.nodeName=S,b.isFunction=f,b.isWindow=g,b.camelCase=$,b.type=y,b.now=Date.now,b.isNumeric=function(e){var t=b.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},b.trim=function(e){return null==e?"":(e+"").replace($t,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],(function(){return b}));var Kt=e.jQuery,Gt=e.$;return b.noConflict=function(t){return e.$===b&&(e.$=Gt),t&&e.jQuery===b&&(e.jQuery=Kt),b},void 0===t&&(e.jQuery=e.$=b),b}))}));var s,o,a,c=s={};function l(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function h(e){if(o===setTimeout)return setTimeout(e,0);if((o===l||!o)&&setTimeout)return o=setTimeout,setTimeout(e,0);try{return o(e,0)}catch(t){try{return o.call(null,e,0)}catch(t){return o.call(this,e,0)}}}!function(){try{o="function"==typeof setTimeout?setTimeout:l}catch(e){o=l}try{a="function"==typeof clearTimeout?clearTimeout:u}catch(e){a=u}}();var d,p=[],f=!1,g=-1;function m(){f&&d&&(f=!1,d.length?p=d.concat(p):g=-1,p.length&&_())}function _(){if(!f){var e=h(m);f=!0;for(var t=p.length;t;){for(d=p,p=[];++g<t;)d&&d[g].run();g=-1,t=p.length}d=null,f=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===u||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function y(){}c.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];p.push(new v(e,t)),1!==p.length||f||h(_)},v.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=y,c.addListener=y,c.once=y,c.off=y,c.removeListener=y,c.removeAllListeners=y,c.emit=y,c.prependListener=y,c.prependOnceListener=y,c.listeners=function(e){return[]},c.binding=function(e){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(e){throw new Error("process.chdir is not supported")},c.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const w=!1,b=!1,C="${JSCORE_VERSION}",T=function(e,t){if(!e)throw I(t)},I=function(e){return new Error("Firebase Database ("+C+") INTERNAL ASSERT FAILED: "+e)},E=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},k={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=r>>2,u=(3&r)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(E(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw new S;const c=r<<2|s>>4;if(i.push(c),64!==o){const e=s<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const x=function(e){const t=E(e);return k.encodeByteArray(t,!0)},N=function(e){return x(e).replace(/\./g,"")},P=function(e){try{return k.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function R(e){return A(void 0,e)}function A(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=A(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const D=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,O=()=>{try{return D()||(()=>{if(void 0===s||void 0===s.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&P(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},L=e=>{var t,n;return null===(n=null===(t=O())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},M=e=>{const t=L(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},F=e=>{var t;return null===(t=O())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class q{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[N(JSON.stringify({alg:"none",type:"JWT"})),N(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function H(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(U())}function W(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function B(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function V(){const e=U();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function z(){return!0===w||!0===b}function $(){try{return"object"==typeof indexedDB}catch(e){return!1}}class K extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,K.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,G.prototype.create)}}class G{create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(Y,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new K(i,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const Y=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e){return JSON.parse(e)}function X(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=J(P(s[0])||""),n=J(P(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:r}},Z=function(e){const t=Q(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},ee=function(e){const t=Q(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function te(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ne(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function ie(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function re(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function se(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(oe(n)&&oe(s)){if(!se(n,s))return!1}else if(n!==s)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function oe(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ae(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function ce(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function le(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=c^o&(a^c),r=1518500249):(i=o^a^c,r=1859775393):e<60?(i=o&a|c&(o|a),r=2400959708):(i=o^a^c,r=3395469782);const t=(s<<5|s>>>27)+i+l+r+n[e]&4294967295;l=c,c=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;for(;i<t;){if(0===s)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<t;)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}}function he(e,t){const n=new de(e,t);return n.subscribe.bind(n)}class de{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=pe),void 0===i.error&&(i.error=pe),void 0===i.complete&&(i.complete=pe);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function pe(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ge=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const t=r-55296;i++,T(i<e.length,"Surrogate pair missing trail surrogate.");r=65536+(t<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},me=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _e(e){return e&&e._delegate?e._delegate:e}class ve{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ye{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new q;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,"[DEFAULT]"===i?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class we{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ye(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be=[];var Ce,Te;(Te=Ce||(Ce={}))[Te.DEBUG=0]="DEBUG",Te[Te.VERBOSE=1]="VERBOSE",Te[Te.INFO=2]="INFO",Te[Te.WARN=3]="WARN",Te[Te.ERROR=4]="ERROR",Te[Te.SILENT=5]="SILENT";const Ie={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},Ee=Ce.INFO,ke={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},Se=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=ke[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class xe{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Ie[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}constructor(e){this.name=e,this._logLevel=Ee,this._logHandler=Se,this._userLogHandler=null,be.push(this)}}let Ne,Pe;const Re=new WeakMap,Ae=new WeakMap,De=new WeakMap,Oe=new WeakMap,Le=new WeakMap;let Me={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Ae.get(e);if("objectStoreNames"===t)return e.objectStoreNames||De.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return je(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Fe(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Pe||(Pe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Ue(this),t),je(Re.get(this))}:function(...t){return je(e.apply(Ue(this),t))}:function(t,...n){const i=e.call(Ue(this),t,...n);return De.set(i,t.sort?t.sort():[t]),je(i)}}function qe(e){return"function"==typeof e?Fe(e):(e instanceof IDBTransaction&&function(e){if(Ae.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));Ae.set(e,t)}(e),t=e,(Ne||(Ne=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Me):e);var t}function je(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(je(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Re.set(t,e)})).catch((()=>{})),Le.set(t,e),t}(e);if(Oe.has(e))return Oe.get(e);const t=qe(e);return t!==e&&(Oe.set(e,t),Le.set(t,e)),t}const Ue=e=>Le.get(e);function He(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=je(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(je(o.result),e.oldVersion,e.newVersion,je(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(e=>r(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const We=["get","getKey","getAll","getAllKeys","count"],Be=["put","add","delete","clear"],Ve=new Map;function ze(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Ve.get(t))return Ve.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=Be.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!We.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return Ve.set(t,s),s}Me=(e=>({...e,get:(t,n,i)=>ze(t,n)||e.get(t,n,i),has:(t,n)=>!!ze(t,n)||e.has(t,n)}))(Me);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $e{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const Ke=new xe("@firebase/app"),Ge={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Ye=new Map,Je=new Map;function Xe(e,t){try{e.container.addComponent(t)}catch(n){Ke.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Qe(e){const t=e.name;if(Je.has(t))return Ke.debug(`There were multiple attempts to register component ${t}.`),!1;Je.set(t,e);for(const t of Ye.values())Xe(t,e);return!0}function Ze(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const et=new G("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tt{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw et.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ve("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw et.create("bad-app-name",{appName:String(r)});var s;if(n||(n=null===(s=O())||void 0===s?void 0:s.config),!n)throw et.create("no-options");const o=Ye.get(r);if(o){if(se(n,o.options)&&se(i,o.config))return o;throw et.create("duplicate-app",{appName:r})}const a=new we(r);for(const e of Je.values())a.addComponent(e);const c=new tt(n,i,a);return Ye.set(r,c),c}function it(e="[DEFAULT]"){const t=Ye.get(e);if(!t&&"[DEFAULT]"===e)return nt();if(!t)throw et.create("no-app",{appName:e});return t}function rt(e,t,n){var i;let r=null!==(i=Ge[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ke.warn(e.join(" "))}Qe(new ve(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}let st=null;function ot(){return st||(st=He("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw et.create("idb-open",{originalErrorMessage:e.message})}))),st}async function at(e,t){try{const n=(await ot()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");return await i.put(t,ct(e)),n.done}catch(e){if(e instanceof K)Ke.warn(e.message);else{const t=et.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Ke.warn(t.message)}}}function ct(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=ut();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=ut(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),dt(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),dt(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=N(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ht(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function ut(){return(new Date).toISOString().substring(0,10)}class ht{async runIndexedDBEnvironmentCheck(){return!!$()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await ot()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(ct(e))}catch(e){if(e instanceof K)Ke.warn(e.message);else{const t=et.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Ke.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return at(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return at(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function dt(e){return N(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt;pt="",Qe(new ve("platform-logger",(e=>new $e(e)),"PRIVATE")),Qe(new ve("heartbeat",(e=>new lt(e)),"PRIVATE")),rt("@firebase/app","0.9.9",pt),rt("@firebase/app","0.9.9","esm2017"),rt("fire-js","");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ft="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt{set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),X(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:J(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}constructor(e){this.domStorage_=e,this.prefix_="firebase:"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return te(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}constructor(){this.cache_={},this.isInMemoryStorage=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new gt(t)}}catch(e){}return new mt},vt=_t("localStorage"),yt=_t("sessionStorage"),wt=new xe("@firebase/database"),bt=function(){let e=1;return function(){return e++}}(),Ct=function(e){const t=ge(e),n=new ue;n.update(t);const i=n.digest();return k.encodeByteArray(i)},Tt=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=Tt.apply(null,i):t+="object"==typeof i?X(i):i,t+=" "}return t};let It=null,Et=!0;const kt=function(e,t){T(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(wt.logLevel=Ce.VERBOSE,It=wt.log.bind(wt),t&&yt.set("logging_enabled",!0)):"function"==typeof e?It=e:(It=null,yt.remove("logging_enabled"))},St=function(...e){if(!0===Et&&(Et=!1,null===It&&!0===yt.get("logging_enabled")&&kt(!0)),It){const t=Tt.apply(null,e);It(t)}},xt=function(e){return function(...t){St(e,...t)}},Nt=function(...e){const t="FIREBASE INTERNAL ERROR: "+Tt(...e);wt.error(t)},Pt=function(...e){const t=`FIREBASE FATAL ERROR: ${Tt(...e)}`;throw wt.error(t),new Error(t)},Rt=function(...e){const t="FIREBASE WARNING: "+Tt(...e);wt.warn(t)},At=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Dt=function(e,t){if(e===t)return 0;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return-1;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return 1;{const n=Ht(e),i=Ht(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},Ot=function(e,t){return e===t?0:e<t?-1:1},Lt=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+X(t))},Mt=function(e){if("object"!=typeof e||null===e)return X(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=X(t[i]),n+=":",n+=Mt(e[t[i]]);return n+="}",n},Ft=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function qt(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const jt=function(e){T(!At(e),"Invalid JSON number");const t=1023;let n,i,r,s,o;0===e?(i=0,r=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=s+t,r=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(i=0,r=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const c=a.join("");let l="";for(o=0;o<64;o+=8){let e=parseInt(c.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()};const Ut=new RegExp("^-?(0*)\\d{1,10}$"),Ht=function(e){if(Ut.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Wt=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw Rt("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Bt=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vt{getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){Rt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(St("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Rt(e)}constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}}class $t{getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}constructor(e){this.accessToken=e}}$t.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Kt=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gt{isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&vt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}constructor(e,t,n,i,r=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=vt.get("host:"+e)||this._host}}function Yt(e,t,n){let i;if(T("string"==typeof t,"typeof type must == string"),T("object"==typeof n,"typeof params must == object"),"websocket"===t)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const r=[];return qt(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{incrementCounter(e,t=1){te(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return R(this.counters_)}constructor(){this.counters_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt={},Qt={};function Zt(e){const t=e.toString();return Xt[t]||(Xt[t]=new Jt),Xt[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class en{closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Wt((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new en(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(z()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new nn(((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Kt.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){tn.forceAllow_=!0}static forceDisallow(){tn.forceDisallow_=!0}static isAvailable(){return!z()&&(!!tn.forceAllow_||!(tn.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=X(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=x(t),i=Ft(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(z())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=X(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=xt(e),this.stats_=Zt(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),Yt(t,"long_polling",e))}}class nn{static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||St("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){z()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{St("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,z())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=bt(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=nn.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){St("frame writing exception"),e.stack&&St(e.stack),St(e)}}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rn=null;"undefined"!=typeof MozWebSocket?rn=MozWebSocket:"undefined"!=typeof WebSocket&&(rn=WebSocket);class sn{static connectionURL_(e,t,n,i,r){const s={v:"5"};return!z()&&"undefined"!=typeof location&&location.hostname&&Kt.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),i&&(s.ac=i),r&&(s.p=r),Yt(e,"websocket",s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,vt.set("previous_websocket_failure",!0);try{let e;if(z()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${ft}/${s.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new rn(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){sn.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==rn&&!sn.forceDisallow_}static previouslyFailed(){return vt.isInMemoryStorage||!0===vt.get("previous_websocket_failure")}markConnectionHealthy(){vt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=J(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=X(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Ft(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=xt(this.connId),this.stats_=Zt(t),this.connURL=sn.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}}sn.responsesRequiredToBeHealthy=2,sn.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class on{static get ALL_TRANSPORTS(){return[tn,sn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=sn&&sn.isAvailable();let n=t&&!sn.previouslyFailed();if(e.webSocketOnly&&(t||Rt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[sn];else{const e=this.transports_=[];for(const t of on.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);on.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}constructor(e){this.initTransports_(e)}}on.globalTransportInitialized_=!1;class an{start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Bt((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Lt("t",e),n=Lt("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Lt("t",e),n=Lt("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Lt("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?Nt("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Nt("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&Rt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Bt((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Bt((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(vt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}constructor(e,t,n,i,r,s,o,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=xt("c:"+this.id+":"),this.transportManager_=new on(t),this.log_("Connection created"),this.start_()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){T(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends ln{static getInstance(){return new un}getInitialEvent(e){return T("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||H()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}}function dn(){return new hn("")}function pn(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function fn(e){return e.pieces_.length-e.pieceNum_}function gn(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new hn(e.pieces_,t)}function mn(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function _n(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function vn(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new hn(t,0)}function yn(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof hn)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new hn(n,0)}function wn(e){return e.pieceNum_>=e.pieces_.length}function bn(e,t){const n=pn(e),i=pn(t);if(null===n)return t;if(n===i)return bn(gn(e),gn(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Cn(e,t){if(fn(e)!==fn(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Tn(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(fn(e)>fn(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class In{constructor(e,t){this.errorPrefix_=t,this.parts_=_n(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=me(this.parts_[e]);En(this)}}function En(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+kn(e))}function kn(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends ln{static getInstance(){return new Sn}getInitialEvent(e){return T("visible"===e,"Unknown event type: "+e),[this.visible_]}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends cn{sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(X(r)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new q,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,(r=>{const s=r.d,o=r.s;xn.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&te(e,"w")){const n=ne(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();Rt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||ee(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Z(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+X(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Nt("Unrecognized action received from server: "+X(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+xn.nextConnectionId_++,r=this.lastSessionId;let s=!1,o=null;const a=function(){o?o.close():(s=!0,n())},c=function(e){T(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:c};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,c]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);s?St("getToken() completed but was canceled"):(St("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=c&&c.token,o=new an(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{Rt(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),r))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&Rt(e),a())}}}interrupt(e){St("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){St("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ie(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Mt(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new hn(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){St("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){St("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";z()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+ft.replace(/\./g,"-")]=1,H()?e["framework.cordova"]=1:B()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=un.getInstance().currentlyOnline();return ie(this.interruptReasons_)&&e}constructor(e,t,n,i,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=xn.nextPersistentConnectionId_++,this.log_=xt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!z())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Sn.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&un.getInstance().on("online",this.onOnline_,this)}}xn.nextPersistentConnectionId_=0,xn.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nn{static Wrap(e,t){return new Nn(e,t)}constructor(e,t){this.name=e,this.node=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Nn("[MIN_NAME]",e),i=new Nn("[MIN_NAME]",t);return 0!==this.compare(n,i)}minPost(){return Nn.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rn;class An extends Pn{static get __EMPTY_NODE(){return Rn}static set __EMPTY_NODE(e){Rn=e}compare(e,t){return Dt(e.name,t.name)}isDefinedOn(e){throw I("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Nn.MIN}maxPost(){return new Nn("[MAX_NAME]",Rn)}makePost(e,t){return T("string"==typeof e,"KeyIndex indexValue must always be a string."),new Nn(e,Rn)}toString(){return".key"}}const Dn=new An;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}}class Ln{copy(e,t,n,i,r){return new Ln(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Mn.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Mn.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ln.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ln.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Ln.RED,this.left=null!=i?i:Mn.EMPTY_NODE,this.right=null!=r?r:Mn.EMPTY_NODE}}Ln.RED=!0,Ln.BLACK=!1;class Mn{insert(e,t){return new Mn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ln.BLACK,null,null))}remove(e){return new Mn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ln.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new On(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new On(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new On(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new On(this.root_,null,this.comparator_,!0,e)}constructor(e,t=Mn.EMPTY_NODE){this.comparator_=e,this.root_=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fn(e,t){return Dt(e.name,t.name)}function qn(e,t){return Dt(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jn;Mn.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new Ln(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Un=function(e){return"number"==typeof e?"number:"+jt(e):"string:"+e},Hn=function(e){if(e.isLeafNode()){const t=e.val();T("string"==typeof t||"number"==typeof t||"object"==typeof t&&te(t,".sv"),"Priority must be a string or number.")}else T(e===jn||e.isEmpty(),"priority of unexpected type.");T(e===jn||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Wn,Bn,Vn;class zn{static set __childrenNodeConstructor(e){Wn=e}static get __childrenNodeConstructor(){return Wn}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new zn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:zn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return wn(e)?this:".priority"===pn(e)?this.priorityNode_:zn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:zn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=pn(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(T(".priority"!==n||1===fn(e),".priority must be the last token in a path"),this.updateImmediateChild(n,zn.__childrenNodeConstructor.EMPTY_NODE.updateChild(gn(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Un(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?jt(this.value_):this.value_,this.lazyHash_=Ct(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===zn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof zn.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=zn.VALUE_TYPE_ORDER.indexOf(t),r=zn.VALUE_TYPE_ORDER.indexOf(n);return T(i>=0,"Unknown leaf type: "+t),T(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}constructor(e,t=zn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,T(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Hn(this.priorityNode_)}}zn.VALUE_TYPE_ORDER=["object","boolean","number","string"];const $n=new class extends Pn{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?Dt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Nn.MIN}maxPost(){return new Nn("[MAX_NAME]",new zn("[PRIORITY-POST]",Vn))}makePost(e,t){const n=Bn(e);return new Nn(t,new zn("[PRIORITY-POST]",n))}toString(){return".priority"}},Kn=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Kn,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}}const Yn=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Ln(a,o.node,Ln.BLACK,null,null);{const c=parseInt(s/2,10)+t,l=r(t,c),u=r(c+1,i);return o=e[c],a=n?n(o):o,new Ln(a,o.node,Ln.BLACK,l,u)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const l=r(s+1,a),u=e[s],h=n?n(u):u;c(new Ln(h,u.node,i,null,l))},c=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Ln.BLACK):(a(i,Ln.BLACK),a(i,Ln.RED))}return s}(new Gn(e.length));return new Mn(i||t,s)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jn;const Xn={};class Qn{static get Default(){return T(Xn&&$n,"ChildrenNode.ts has not been loaded"),Jn=Jn||new Qn({".priority":Xn},{".priority":$n}),Jn}get(e){const t=ne(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Mn?t:null}hasIndex(e){return te(this.indexSet_,e.toString())}addIndex(e,t){T(e!==Dn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(Nn.Wrap);let s,o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),n.push(o),o=r.getNext();s=i?Yn(n,e.getCompare()):Xn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const l=Object.assign({},this.indexes_);return l[a]=s,new Qn(l,c)}addToIndexes(e,t){const n=re(this.indexes_,((n,i)=>{const r=ne(this.indexSet_,i);if(T(r,"Missing index implementation for "+i),n===Xn){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(Nn.Wrap);let s=i.getNext();for(;s;)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),Yn(n,r.getCompare())}return Xn}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new Nn(e.name,i))),r.insert(e,e.node)}}));return new Qn(n,this.indexSet_)}removeFromIndexes(e,t){const n=re(this.indexes_,(n=>{if(n===Xn)return n;{const i=t.get(e.name);return i?n.remove(new Nn(e.name,i)):n}}));return new Qn(n,this.indexSet_)}constructor(e,t){this.indexes_=e,this.indexSet_=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zn;class ei{static get EMPTY_NODE(){return Zn||(Zn=new ei(new Mn(qn),null,Qn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Zn}updatePriority(e){return this.children_.isEmpty()?this:new ei(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Zn:t}}getChild(e){const t=pn(e);return null===t?this:this.getImmediateChild(t).getChild(gn(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(T(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Nn(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?Zn:this.priorityNode_;return new ei(i,s,r)}}updateChild(e,t){const n=pn(e);if(null===n)return t;{T(".priority"!==pn(e)||1===fn(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(gn(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild($n,((s,o)=>{t[s]=o.val(e),n++,r&&ei.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Un(this.getPriority().val())+":"),this.forEachChild($n,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":Ct(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Nn(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Nn(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Nn(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Nn.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Nn.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ti?-1:0}withIndex(e){if(e===Dn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ei(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Dn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator($n),n=t.getIterator($n);let i=e.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===Dn?null:this.indexMap_.get(e.toString())}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Hn(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}}ei.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const ti=new class extends ei{compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ei.EMPTY_NODE}isEmpty(){return!1}constructor(){super(new Mn(qn),ei.EMPTY_NODE,Qn.Default)}};Object.defineProperties(Nn,{MIN:{value:new Nn("[MIN_NAME]",ei.EMPTY_NODE)},MAX:{value:new Nn("[MAX_NAME]",ti)}}),An.__EMPTY_NODE=ei.EMPTY_NODE,zn.__childrenNodeConstructor=ei,jn=ti,function(e){Vn=e}(ti);function ni(e,t=null){if(null===e)return ei.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),T(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new zn(e,ni(t))}if(e instanceof Array){let n=ei.EMPTY_NODE;return qt(e,((t,i)=>{if(te(e,t)&&"."!==t.substring(0,1)){const e=ni(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(ni(t))}{const n=[];let i=!1;if(qt(e,((e,t)=>{if("."!==e.substring(0,1)){const r=ni(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new Nn(e,r)))}})),0===n.length)return ei.EMPTY_NODE;const r=Yn(n,Fn,(e=>e.name),qn);if(i){const e=Yn(n,$n.getCompare());return new ei(r,ni(t),new Qn({".priority":e},{".priority":$n}))}return new ei(r,ni(t),Qn.Default)}}!function(e){Bn=e}(ni);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ii extends Pn{extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?Dt(e.name,t.name):r}makePost(e,t){const n=ni(e),i=ei.EMPTY_NODE.updateChild(this.indexPath_,n);return new Nn(t,i)}maxPost(){const e=ei.EMPTY_NODE.updateChild(this.indexPath_,ti);return new Nn("[MAX_NAME]",e)}toString(){return _n(this.indexPath_,0).join("/")}constructor(e){super(),this.indexPath_=e,T(!wn(e)&&".priority"!==pn(e),"Can't create PathIndex with empty path or .priority key")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=new class extends Pn{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?Dt(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Nn.MIN}maxPost(){return Nn.MAX}makePost(e,t){const n=ni(e);return new Nn(t,n)}toString(){return".value"}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(e){return{type:"value",snapshotNode:e}}function oi(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function ai(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function ci(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class li{updateChild(e,t,n,i,r,s){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(ai(t,o)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(oi(t,n)):s.trackChildChange(ci(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild($n,((e,i)=>{t.hasChild(e)||n.trackChildChange(ai(e,i))})),t.isLeafNode()||t.forEachChild($n,((t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(ci(t,i,r))}else n.trackChildChange(oi(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ei.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}constructor(e){this.index_=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,i,r,s){return this.matches(new Nn(t,n))||(n=ei.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=ei.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(ei.EMPTY_NODE);const r=this;return t.forEachChild($n,((e,t)=>{r.matches(new Nn(e,t))||(i=i.updateImmediateChild(e,ei.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}constructor(e){this.indexedFilter_=new li(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ui.getStartPost_(e),this.endPost_=ui.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{updateChild(e,t,n,i,r,s){return this.rangedFilter_.matches(new Nn(t,n))||(n=ei.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=ei.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=ei.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;i=i.updateImmediateChild(t.name,t.node),n++}}}else{let e;i=t.withIndex(this.index_),i=i.updatePriority(ei.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:i=i.updateImmediateChild(t.name,ei.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const o=e;T(o.numChildren()===this.limit_,"");const a=new Nn(t,n),c=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),l=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let u=i.getChildAfterChild(this.index_,c,this.reverse_);for(;null!=u&&(u.name===t||o.hasChild(u.name));)u=i.getChildAfterChild(this.index_,u,this.reverse_);const h=null==u?1:s(u,a);if(l&&!n.isEmpty()&&h>=0)return null!=r&&r.trackChildChange(ci(t,n,e)),o.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(ai(t,e));const n=o.updateImmediateChild(t,ei.EMPTY_NODE);return null!=u&&this.rangedFilter_.matches(u)?(null!=r&&r.trackChildChange(oi(u.name,u.node)),n.updateImmediateChild(u.name,u.node)):n}}return n.isEmpty()?e:l&&s(c,a)>=0?(null!=r&&(r.trackChildChange(ai(c.name,c.node)),r.trackChildChange(oi(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(c.name,ei.EMPTY_NODE)):e}constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new ui(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===$n}copy(){const e=new di;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=$n}}function pi(e){const t={};if(e.isDefault())return t;let n;if(e.index_===$n?n="$priority":e.index_===ri?n="$value":e.index_===Dn?n="$key":(T(e.index_ instanceof ii,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=X(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=X(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+X(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=X(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+X(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function fi(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==$n&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends cn{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const s=gi.getListenId_(e,n),o={};this.listens_[s]=o;const a=pi(e._queryParams);this.restRequest_(r+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),ne(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=gi.getListenId_(e,t);delete this.listens_[n]}get(e){const t=pi(e._queryParams),n=e._path.toString(),i=new q;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ae(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=J(o.responseText)}catch(e){Rt("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&Rt("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=xt("p:rest:"),this.listens_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}constructor(){this.rootNode_=ei.EMPTY_NODE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(){return{value:null,children:new Map}}function vi(e,t,n){if(wn(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=pn(t);e.children.has(i)||e.children.set(i,_i());vi(e.children.get(i),t=gn(t),n)}}function yi(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,i)=>{yi(i,new hn(t.toString()+"/"+e),n)}))}class wi{get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&qt(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}constructor(e){this.collection_=e,this.last_=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;qt(e,((e,i)=>{i>0&&te(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Bt(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new wi(e);const n=1e4+2e4*Math.random();Bt(this.reportStats_.bind(this),Math.floor(n))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ci,Ti;function Ii(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Ti=Ci||(Ci={}))[Ti.OVERWRITE=0]="OVERWRITE",Ti[Ti.MERGE=1]="MERGE",Ti[Ti.ACK_USER_WRITE=2]="ACK_USER_WRITE",Ti[Ti.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class Ei{operationForChild(e){if(wn(this.path)){if(null!=this.affectedTree.value)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new hn(e));return new Ei(dn(),t,this.revert)}}return T(pn(this.path)===e,"operationForChild called for unrelated child."),new Ei(gn(this.path),this.affectedTree,this.revert)}constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Ci.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{operationForChild(e){return wn(this.path)?new ki(this.source,dn()):new ki(this.source,gn(this.path))}constructor(e,t){this.source=e,this.path=t,this.type=Ci.LISTEN_COMPLETE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{operationForChild(e){return wn(this.path)?new Si(this.source,dn(),this.snap.getImmediateChild(e)):new Si(this.source,gn(this.path),this.snap)}constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Ci.OVERWRITE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{operationForChild(e){if(wn(this.path)){const t=this.children.subtree(new hn(e));return t.isEmpty()?null:t.value?new Si(this.source,dn(),t.value):new xi(this.source,dn(),t)}return T(pn(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new xi(this.source,gn(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Ci.MERGE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(wn(e))return this.isFullyInitialized()&&!this.filtered_;const t=pn(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Ri(e,t,n,i,r,s){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw I("Should only compare child_ events.");const i=new Nn(t.childName,t.snapshotNode),r=new Nn(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),o.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function Ai(e,t){return{eventCache:e,serverCache:t}}function Di(e,t,n,i){return Ai(new Ni(t,n,i),e.serverCache)}function Oi(e,t,n,i){return Ai(e.eventCache,new Ni(t,n,i))}function Li(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Mi(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fi;class qi{static fromObject(e){let t=new qi(null);return qt(e,((e,n)=>{t=t.set(new hn(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:dn(),value:this.value};if(wn(e))return null;{const n=pn(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(gn(e),t);if(null!=r){return{path:yn(new hn(n),r.path),value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(wn(e))return this;{const t=pn(e),n=this.children.get(t);return null!==n?n.subtree(gn(e)):new qi(null)}}set(e,t){if(wn(e))return new qi(t,this.children);{const n=pn(e),i=(this.children.get(n)||new qi(null)).set(gn(e),t),r=this.children.insert(n,i);return new qi(this.value,r)}}remove(e){if(wn(e))return this.children.isEmpty()?new qi(null):new qi(null,this.children);{const t=pn(e),n=this.children.get(t);if(n){const i=n.remove(gn(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new qi(null):new qi(this.value,r)}return this}}get(e){if(wn(e))return this.value;{const t=pn(e),n=this.children.get(t);return n?n.get(gn(e)):null}}setTree(e,t){if(wn(e))return t;{const n=pn(e),i=(this.children.get(n)||new qi(null)).setTree(gn(e),t);let r;return r=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new qi(this.value,r)}}fold(e){return this.fold_(dn(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(yn(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,dn(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(wn(e))return null;{const i=pn(e),r=this.children.get(i);return r?r.findOnPath_(gn(e),yn(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,dn(),t)}foreachOnPath_(e,t,n){if(wn(e))return this;{this.value&&n(t,this.value);const i=pn(e),r=this.children.get(i);return r?r.foreachOnPath_(gn(e),yn(t,i),n):new qi(null)}}foreach(e){this.foreach_(dn(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(yn(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}constructor(e,t=(()=>(Fi||(Fi=new Mn(Ot)),Fi))()){this.value=e,this.children=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{static empty(){return new ji(new qi(null))}constructor(e){this.writeTree_=e}}function Ui(e,t,n){if(wn(t))return new ji(new qi(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=bn(r,t);return s=s.updateChild(o,n),new ji(e.writeTree_.set(r,s))}{const i=new qi(n),r=e.writeTree_.setTree(t,i);return new ji(r)}}}function Hi(e,t,n){let i=e;return qt(n,((e,n)=>{i=Ui(i,yn(t,e),n)})),i}function Wi(e,t){if(wn(t))return ji.empty();{const n=e.writeTree_.setTree(t,new qi(null));return new ji(n)}}function Bi(e,t){return null!=Vi(e,t)}function Vi(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(bn(n.path,t)):null}function zi(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild($n,((e,n)=>{t.push(new Nn(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Nn(e,n.value))})),t}function $i(e,t){if(wn(t))return e;{const n=Vi(e,t);return new ji(null!=n?new qi(n):e.writeTree_.subtree(t))}}function Ki(e){return e.writeTree_.isEmpty()}function Gi(e,t){return Yi(dn(),e.writeTree_,t)}function Yi(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?(T(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=Yi(yn(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(yn(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(e,t){return lr(t,e)}function Xi(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));T(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&Qi(t,i.path)?r=!1:Tn(i.path,t.path)&&(s=!0)),o--}if(r){if(s)return function(e){e.visibleWrites=er(e.allWrites,Zi,dn()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=Wi(e.visibleWrites,i.path);else{qt(i.children,(t=>{e.visibleWrites=Wi(e.visibleWrites,yn(i.path,t))}))}return!0}return!1}function Qi(e,t){if(e.snap)return Tn(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Tn(yn(e.path,n),t))return!0;return!1}function Zi(e){return e.visible}function er(e,t,n){let i=ji.empty();for(let r=0;r<e.length;++r){const s=e[r];if(t(s)){const e=s.path;let t;if(s.snap)Tn(n,e)?(t=bn(n,e),i=Ui(i,t,s.snap)):Tn(e,n)&&(t=bn(e,n),i=Ui(i,dn(),s.snap.getChild(t)));else{if(!s.children)throw I("WriteRecord should have .snap or .children");if(Tn(n,e))t=bn(n,e),i=Hi(i,t,s.children);else if(Tn(e,n))if(t=bn(e,n),wn(t))i=Hi(i,dn(),s.children);else{const e=ne(s.children,pn(t));if(e){const n=e.getChild(gn(t));i=Ui(i,dn(),n)}}}}}return i}function tr(e,t,n,i,r){if(i||r){const s=$i(e.visibleWrites,t);if(!r&&Ki(s))return n;if(r||null!=n||Bi(s,dn())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(Tn(e.path,t)||Tn(t,e.path))};return Gi(er(e.allWrites,s,t),n||ei.EMPTY_NODE)}return null}{const i=Vi(e.visibleWrites,t);if(null!=i)return i;{const i=$i(e.visibleWrites,t);if(Ki(i))return n;if(null!=n||Bi(i,dn())){return Gi(i,n||ei.EMPTY_NODE)}return null}}}function nr(e,t,n,i){return tr(e.writeTree,e.treePath,t,n,i)}function ir(e,t){return function(e,t,n){let i=ei.EMPTY_NODE;const r=Vi(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild($n,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=$i(e.visibleWrites,t);return n.forEachChild($n,((e,t)=>{const n=Gi($i(r,new hn(e)),t);i=i.updateImmediateChild(e,n)})),zi(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return zi($i(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function rr(e,t,n,i){return function(e,t,n,i,r){T(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=yn(t,n);if(Bi(e.visibleWrites,s))return null;{const t=$i(e.visibleWrites,s);return Ki(t)?r.getChild(n):Gi(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function sr(e,t){return function(e,t){return Vi(e.visibleWrites,t)}(e.writeTree,yn(e.treePath,t))}function or(e,t,n,i,r,s){return function(e,t,n,i,r,s,o){let a;const c=$i(e.visibleWrites,t),l=Vi(c,dn());if(null!=l)a=l;else{if(null==n)return[];a=Gi(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let c=n.getNext();for(;c&&e.length<r;)0!==t(c,i)&&e.push(c),c=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,r,s)}function ar(e,t,n){return function(e,t,n,i){const r=yn(t,n),s=Vi(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n))return Gi($i(e.visibleWrites,r),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function cr(e,t){return lr(yn(e.treePath,t),e.writeTree)}function lr(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{trackChildChange(e){const t=e.type,n=e.childName;T("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),T(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,ci(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,ai(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,oi(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw I("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,ci(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}constructor(){this.changeMap=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class dr{getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Ni(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ar(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Mi(this.viewCache_),r=or(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(e,t,n,i,r){const s=new ur;let o,a;if(n.type===Ci.OVERWRITE){const c=n;c.source.fromUser?o=mr(e,t,c.path,c.snap,i,r,s):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered()&&!wn(c.path),o=gr(e,t,c.path,c.snap,i,r,a,s))}else if(n.type===Ci.MERGE){const c=n;c.source.fromUser?o=function(e,t,n,i,r,s,o){let a=t;return i.foreach(((i,c)=>{const l=yn(n,i);_r(t,pn(l))&&(a=mr(e,a,l,c,r,s,o))})),i.foreach(((i,c)=>{const l=yn(n,i);_r(t,pn(l))||(a=mr(e,a,l,c,r,s,o))})),a}(e,t,c.path,c.children,i,r,s):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered(),o=yr(e,t,c.path,c.children,i,r,a,s))}else if(n.type===Ci.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,i,r,s){let o;if(null!=sr(i,n))return t;{const a=new dr(i,t,r),c=t.eventCache.getNode();let l;if(wn(n)||".priority"===pn(n)){let n;if(t.serverCache.isFullyInitialized())n=nr(i,Mi(t));else{const e=t.serverCache.getNode();T(e instanceof ei,"serverChildren would be complete if leaf node"),n=ir(i,e)}l=e.filter.updateFullNode(c,n,s)}else{const r=pn(n);let u=ar(i,r,t.serverCache);null==u&&t.serverCache.isCompleteForChild(r)&&(u=c.getImmediateChild(r)),l=null!=u?e.filter.updateChild(c,r,u,gn(n),a,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(c,r,ei.EMPTY_NODE,gn(n),a,s):c,l.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=nr(i,Mi(t)),o.isLeafNode()&&(l=e.filter.updateFullNode(l,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=sr(i,dn()),Di(t,l,o,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,a.path,i,r,s):function(e,t,n,i,r,s,o){if(null!=sr(r,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=i.value){if(wn(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return gr(e,t,n,c.getNode().getChild(n),r,s,a,o);if(wn(n)){let i=new qi(null);return c.getNode().forEachChild(Dn,((e,t)=>{i=i.set(new hn(e),t)})),yr(e,t,n,i,r,s,a,o)}return t}{let l=new qi(null);return i.foreach(((e,t)=>{const i=yn(n,e);c.isCompleteForPath(i)&&(l=l.set(e,c.getNode().getChild(i)))})),yr(e,t,n,l,r,s,a,o)}}(e,t,a.path,a.affectedTree,i,r,s)}else{if(n.type!==Ci.LISTEN_COMPLETE)throw I("Unknown operation type: "+n.type);o=function(e,t,n,i,r){const s=t.serverCache,o=Oi(t,s.getNode(),s.isFullyInitialized()||wn(n),s.isFiltered());return fr(e,o,n,i,hr,r)}(e,t,n.path,i,s)}const c=s.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Li(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(si(Li(t)))}}(t,o,c),{viewCache:o,changes:c}}function fr(e,t,n,i,r,s){const o=t.eventCache;if(null!=sr(i,n))return t;{let a,c;if(wn(n))if(T(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Mi(t),r=ir(i,n instanceof ei?n:ei.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,s)}else{const n=nr(i,Mi(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const l=pn(n);if(".priority"===l){T(1===fn(n),"Can't have a priority with additional path components");const r=o.getNode();c=t.serverCache.getNode();const s=rr(i,n,r,c);a=null!=s?e.filter.updatePriority(r,s):o.getNode()}else{const u=gn(n);let h;if(o.isCompleteForChild(l)){c=t.serverCache.getNode();const e=rr(i,n,o.getNode(),c);h=null!=e?o.getNode().getImmediateChild(l).updateChild(u,e):o.getNode().getImmediateChild(l)}else h=ar(i,l,t.serverCache);a=null!=h?e.filter.updateChild(o.getNode(),l,h,u,r,s):o.getNode()}}return Di(t,a,o.isFullyInitialized()||wn(n),e.filter.filtersNodes())}}function gr(e,t,n,i,r,s,o,a){const c=t.serverCache;let l;const u=o?e.filter:e.filter.getIndexedFilter();if(wn(n))l=u.updateFullNode(c.getNode(),i,null);else if(u.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,i);l=u.updateFullNode(c.getNode(),e,null)}else{const e=pn(n);if(!c.isCompleteForPath(n)&&fn(n)>1)return t;const r=gn(n),s=c.getNode().getImmediateChild(e).updateChild(r,i);l=".priority"===e?u.updatePriority(c.getNode(),s):u.updateChild(c.getNode(),e,s,r,hr,null)}const h=Oi(t,l,c.isFullyInitialized()||wn(n),u.filtersNodes());return fr(e,h,n,r,new dr(r,h,s),a)}function mr(e,t,n,i,r,s,o){const a=t.eventCache;let c,l;const u=new dr(r,t,s);if(wn(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),c=Di(t,l,!0,e.filter.filtersNodes());else{const r=pn(n);if(".priority"===r)l=e.filter.updatePriority(t.eventCache.getNode(),i),c=Di(t,l,a.isFullyInitialized(),a.isFiltered());else{const s=gn(n),l=a.getNode().getImmediateChild(r);let h;if(wn(s))h=i;else{const e=u.getCompleteChild(r);h=null!=e?".priority"===mn(s)&&e.getChild(vn(s)).isEmpty()?e:e.updateChild(s,i):ei.EMPTY_NODE}if(l.equals(h))c=t;else{c=Di(t,e.filter.updateChild(a.getNode(),r,h,s,u,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function _r(e,t){return e.eventCache.isCompleteForChild(t)}function vr(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function yr(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=wn(n)?i:new qi(null).setTree(n,i);const u=t.serverCache.getNode();return c.children.inorderTraversal(((n,i)=>{if(u.hasChild(n)){const c=vr(0,t.serverCache.getNode().getImmediateChild(n),i);l=gr(e,l,new hn(n),c,r,s,o,a)}})),c.children.inorderTraversal(((n,i)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!u.hasChild(n)&&!c){const c=vr(0,t.serverCache.getNode().getImmediateChild(n),i);l=gr(e,l,new hn(n),c,r,s,o,a)}})),l}class wr{get query(){return this.query_}constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new li(n.getIndex()),r=(s=n).loadsAllData()?new li(s.getIndex()):s.hasLimit()?new hi(s):new ui(s);var s;this.processor_=function(e){return{filter:e}}(r);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(ei.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(ei.EMPTY_NODE,a.getNode(),null),u=new Ni(c,o.isFullyInitialized(),i.filtersNodes()),h=new Ni(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ai(h,u),this.eventGenerator_=new Pi(this.query_)}}function br(e,t){const n=Mi(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!wn(t)&&!n.getImmediateChild(pn(t)).isEmpty())?n.getChild(t):null}function Cr(e){return 0===e.eventRegistrations_.length}function Tr(e,t,n){const i=[];if(n){T(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,r);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function Ir(e,t,n,i){t.type===Ci.MERGE&&null!==t.source.queryId&&(T(Mi(e.viewCache_),"We should always have a full cache before handling merges"),T(Li(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,s=pr(e.processor_,r,t,n,i);var o,a;return o=e.processor_,a=s.viewCache,T(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),T(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),T(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,Er(e,s.changes,s.viewCache.eventCache.getNode(),null)}function Er(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const r=[],s=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Ri(e,r,"child_removed",t,i,n),Ri(e,r,"child_added",t,i,n),Ri(e,r,"child_moved",s,i,n),Ri(e,r,"child_changed",t,i,n),Ri(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kr,Sr;class xr{constructor(){this.views=new Map}}function Nr(e,t,n,i){const r=t.source.queryId;if(null!==r){const s=e.views.get(r);return T(null!=s,"SyncTree gave us an op for an invalid query."),Ir(s,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(Ir(s,t,n,i));return r}}function Pr(e,t,n,i,r){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=nr(n,r?i:null),s=!1;e?s=!0:i instanceof ei?(e=ir(n,i),s=!1):(e=ei.EMPTY_NODE,s=!1);const o=Ai(new Ni(e,s,!1),new Ni(i,r,!1));return new wr(t,o)}return o}function Rr(e,t,n,i,r,s){const o=Pr(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,i=[];n.getNode().isLeafNode()||n.getNode().forEachChild($n,((e,t)=>{i.push(oi(e,t))}));return n.isFullyInitialized()&&i.push(si(n.getNode())),Er(e,i,n.getNode(),t)}(o,n)}function Ar(e,t,n,i){const r=t._queryIdentifier,s=[];let o=[];const a=Fr(e);if("default"===r)for(const[t,r]of e.views.entries())o=o.concat(Tr(r,n,i)),Cr(r)&&(e.views.delete(t),r.query._queryParams.loadsAllData()||s.push(r.query));else{const t=e.views.get(r);t&&(o=o.concat(Tr(t,n,i)),Cr(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!Fr(e)&&s.push(new(T(kr,"Reference.ts has not been loaded"),kr)(t._repo,t._path)),{removed:s,events:o}}function Dr(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Or(e,t){let n=null;for(const i of e.views.values())n=n||br(i,t);return n}function Lr(e,t){if(t._queryParams.loadsAllData())return qr(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Mr(e,t){return null!=Lr(e,t)}function Fr(e){return null!=qr(e)}function qr(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jr=1;class Ur{constructor(e){this.listenProvider_=e,this.syncPointTree_=new qi(null),this.pendingWriteTree_={visibleWrites:ji.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Hr(e,t,n,i,r){return function(e,t,n,i,r){T(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=Ui(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,r),r?Yr(e,new Si({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Wr(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(Xi(e.pendingWriteTree_,t)){let t=new qi(null);return null!=i.snap?t=t.set(dn(),!0):qt(i.children,(e=>{t=t.set(new hn(e),!0)})),Yr(e,new Ei(i.path,t,n))}return[]}function Br(e,t,n){return Yr(e,new Si({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Vr(e,t,n,i,r=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&("default"===t._queryIdentifier||Mr(o,t))){const c=Ar(o,t,n,i);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(s));const l=c.removed;if(a=c.events,!r){const n=-1!==l.findIndex((e=>e._queryParams.loadsAllData())),r=e.syncPointTree_.findOnPath(s,((e,t)=>Fr(t)));if(n&&!r){const t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&Fr(t)){return[qr(t)]}{let e=[];return t&&(e=Dr(t)),qt(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const i=n[t],r=i.query,s=Qr(e,i);e.listenProvider_.startListening(rs(r),Zr(e,r),s.hashFn,s.onComplete)}}}if(!r&&l.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(rs(t),n)}else l.forEach((t=>{const n=e.queryToTagMap.get(es(t));e.listenProvider_.stopListening(rs(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=es(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,l)}return a}function zr(e,t,n,i){const r=ts(e,i);if(null!=r){const i=ns(r),s=i.path,o=i.queryId,a=bn(s,t);return is(e,s,new Si(Ii(o),a,n))}return[]}function $r(e,t,n,i=!1){const r=t._path;let s=null,o=!1;e.syncPointTree_.foreachOnPath(r,((e,t)=>{const n=bn(e,r);s=s||Or(t,n),o=o||Fr(t)}));let a,c=e.syncPointTree_.get(r);if(c?(o=o||Fr(c),s=s||Or(c,dn())):(c=new xr,e.syncPointTree_=e.syncPointTree_.set(r,c)),null!=s)a=!0;else{a=!1,s=ei.EMPTY_NODE;e.syncPointTree_.subtree(r).foreachChild(((e,t)=>{const n=Or(t,dn());n&&(s=s.updateImmediateChild(e,n))}))}const l=Mr(c,t);if(!l&&!t._queryParams.loadsAllData()){const n=es(t);T(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=jr++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let u=Rr(c,t,n,Ji(e.pendingWriteTree_,r),s,a);if(!l&&!o&&!i){const n=Lr(c,t);u=u.concat(function(e,t,n){const i=t._path,r=Zr(e,t),s=Qr(e,n),o=e.listenProvider_.startListening(rs(t),r,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(i);if(r)T(!Fr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!wn(e)&&t&&Fr(t))return[qr(t).query];{let e=[];return t&&(e=e.concat(Dr(t).map((e=>e.query)))),qt(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(rs(i),Zr(e,i))}}return o}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))}return u}function Kr(e,t,n){const i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Or(n,bn(e,t));if(i)return i}));return tr(i,t,r,n,!0)}function Gr(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const r=bn(e,n);i=i||Or(t,r)}));let r=e.syncPointTree_.get(n);r?i=i||Or(r,dn()):(r=new xr,e.syncPointTree_=e.syncPointTree_.set(n,r));const s=null!=i,o=s?new Ni(i,!0,!1):null;return function(e){return Li(e.viewCache_)}(Pr(r,t,Ji(e.pendingWriteTree_,t._path),s?o.getNode():ei.EMPTY_NODE,s))}function Yr(e,t){return Jr(t,e.syncPointTree_,null,Ji(e.pendingWriteTree_,dn()))}function Jr(e,t,n,i){if(wn(e.path))return Xr(e,t,n,i);{const r=t.get(dn());null==n&&null!=r&&(n=Or(r,dn()));let s=[];const o=pn(e.path),a=e.operationForChild(o),c=t.children.get(o);if(c&&a){const e=n?n.getImmediateChild(o):null,t=cr(i,o);s=s.concat(Jr(a,c,e,t))}return r&&(s=s.concat(Nr(r,e,i,n))),s}}function Xr(e,t,n,i){const r=t.get(dn());null==n&&null!=r&&(n=Or(r,dn()));let s=[];return t.children.inorderTraversal(((t,r)=>{const o=n?n.getImmediateChild(t):null,a=cr(i,t),c=e.operationForChild(t);c&&(s=s.concat(Xr(c,r,o,a)))})),r&&(s=s.concat(Nr(r,e,i,n))),s}function Qr(e,t){const n=t.query,i=Zr(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||ei.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?function(e,t,n){const i=ts(e,n);if(i){const n=ns(i),r=n.path,s=n.queryId,o=bn(r,t);return is(e,r,new ki(Ii(s),o))}return[]}(e,n._path,i):function(e,t){return Yr(e,new ki({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return Vr(e,n,null,i)}}}}function Zr(e,t){const n=es(t);return e.queryToTagMap.get(n)}function es(e){return e._path.toString()+"$"+e._queryIdentifier}function ts(e,t){return e.tagToQueryMap.get(t)}function ns(e){const t=e.indexOf("$");return T(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new hn(e.substr(0,t))}}function is(e,t,n){const i=e.syncPointTree_.get(t);T(i,"Missing sync point for query tag that we're tracking");return Nr(i,n,Ji(e.pendingWriteTree_,t),null)}function rs(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(T(Sr,"Reference.ts has not been loaded"),Sr)(e._repo,e._path):e}class ss{getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ss(t)}node(){return this.node_}constructor(e){this.node_=e}}class os{getImmediateChild(e){const t=yn(this.path_,e);return new os(this.syncTree_,t)}node(){return Kr(this.syncTree_,this.path_)}constructor(e,t){this.syncTree_=e,this.path_=t}}const as=function(e,t,n){return e&&"object"==typeof e?(T(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?cs(e[".sv"],t,n):"object"==typeof e[".sv"]?ls(e[".sv"],t):void T(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},cs=function(e,t,n){if("timestamp"===e)return n.timestamp;T(!1,"Unexpected server value: "+e)},ls=function(e,t,n){e.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&T(!1,"Unexpected increment value: "+i);const r=t.node();if(T(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const s=r.getValue();return"number"!=typeof s?i:s+i},us=function(e,t,n,i){return ds(t,new os(n,e),i)},hs=function(e,t,n){return ds(e,new ss(t),n)};function ds(e,t,n){const i=e.getPriority().val(),r=as(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=as(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new zn(s,ni(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new zn(r))),i.forEachChild($n,((e,i)=>{const r=ds(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))})),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function fs(e,t){let n=t instanceof hn?t:new hn(t),i=e,r=pn(n);for(;null!==r;){const e=ne(i.node.children,r)||{children:{},childCount:0};i=new ps(r,i,e),n=gn(n),r=pn(n)}return i}function gs(e){return e.node.value}function ms(e,t){e.node.value=t,bs(e)}function _s(e){return e.node.childCount>0}function vs(e,t){qt(e.node.children,((n,i)=>{t(new ps(n,e,i))}))}function ys(e,t,n,i){n&&!i&&t(e),vs(e,(e=>{ys(e,t,!0,i)})),n&&i&&t(e)}function ws(e){return new hn(null===e.parent?e.name:ws(e.parent)+"/"+e.name)}function bs(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===gs(e)&&!_s(e)}(n),r=te(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,bs(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,bs(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const Cs=/[\[\].#$\/\u0000-\u001F\u007F]/,Ts=/[\[\].#$\u0000-\u001F\u007F]/,Is=function(e){return"string"==typeof e&&0!==e.length&&!Cs.test(e)},Es=function(e){return"string"==typeof e&&0!==e.length&&!Ts.test(e)},ks=function(e,t,n,i){i&&void 0===t||Ss(fe(e,"value"),t,n)},Ss=function(e,t,n){const i=n instanceof hn?new In(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+kn(i));if("function"==typeof t)throw new Error(e+"contains a function "+kn(i)+" with contents = "+t.toString());if(At(t))throw new Error(e+"contains "+t.toString()+" "+kn(i));if("string"==typeof t&&t.length>10485760/3&&me(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+kn(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(qt(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!Is(t)))throw new Error(e+" contains an invalid key ("+t+") "+kn(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=me(a),En(o),Ss(e,s,i),function(e){const t=e.parts_.pop();e.byteLength_-=me(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&r)throw new Error(e+' contains ".value" child '+kn(i)+" in addition to actual children.")}},xs=function(e,t,n,i){if(!(i&&void 0===n||Es(n)))throw new Error(fe(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Ns=function(e,t){if(".info"===pn(t))throw new Error(e+" failed = Can't modify data under /.info/")},Ps=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Is(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Es(e)}(n))throw new Error(fe(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rs{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function As(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||Cn(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function Ds(e,t,n){As(e,n),Os(e,(e=>Tn(e,t)||Tn(t,e)))}function Os(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){t(r.path)?(Ls(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Ls(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();It&&St("event: "+n.toString()),Wt(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Rs,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=_i(),this.transactionQueueTree_=new ps,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}}function Fs(e,t,n){if(e.stats_=Zt(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new gi(e.repoInfo_,((t,n,i,r)=>{Us(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Hs(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{X(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new xn(e.repoInfo_,t,((t,n,i,r)=>{Us(e,t,n,i,r)}),(t=>{Hs(e,t)}),(t=>{!function(e,t){qt(t,((t,n)=>{Ws(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return Qt[n]||(Qt[n]=t()),Qt[n]}(e.repoInfo_,(()=>new bi(e.stats_,e.server_))),e.infoData_=new mi,e.infoSyncTree_=new Ur({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Br(e.infoSyncTree_,t._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),Ws(e,"connected",!1),e.serverSyncTree_=new Ur({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const s=r(n,i);Ds(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function qs(e){const t=e.infoData_.getNode(new hn(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function js(e){return(t=(t={timestamp:qs(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function Us(e,t,n,i,r){e.dataUpdateCount++;const s=new hn(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r)if(i){const t=re(n,(e=>ni(e)));o=function(e,t,n,i){const r=ts(e,i);if(r){const i=ns(r),s=i.path,o=i.queryId,a=bn(s,t),c=qi.fromObject(n);return is(e,s,new xi(Ii(o),a,c))}return[]}(e.serverSyncTree_,s,t,r)}else{const t=ni(n);o=zr(e.serverSyncTree_,s,t,r)}else if(i){const t=re(n,(e=>ni(e)));o=function(e,t,n){const i=qi.fromObject(n);return Yr(e,new xi({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,s,t)}else{const t=ni(n);o=Br(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=Js(e,s)),Ds(e.eventQueue_,a,o)}function Hs(e,t){Ws(e,"connected",t),!1===t&&function(e){$s(e,"onDisconnectEvents");const t=js(e),n=_i();yi(e.onDisconnect_,dn(),((i,r)=>{const s=us(i,r,e.serverSyncTree_,t);vi(n,i,s)}));let i=[];yi(n,dn(),((t,n)=>{i=i.concat(Br(e.serverSyncTree_,t,n));const r=to(e,t);Js(e,r)})),e.onDisconnect_=_i(),Ds(e.eventQueue_,dn(),i)}(e)}function Ws(e,t,n){const i=new hn("/.info/"+t),r=ni(n);e.infoData_.updateSnapshot(i,r);const s=Br(e.infoSyncTree_,i,r);Ds(e.eventQueue_,i,s)}function Bs(e){return e.nextWriteId_++}function Vs(e,t,n,i,r){$s(e,"set",{path:t.toString(),value:n,priority:i});const s=js(e),o=ni(n,i),a=Kr(e.serverSyncTree_,t),c=hs(o,a,s),l=Bs(e),u=Hr(e.serverSyncTree_,t,c,l,!0);As(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),((n,i)=>{const s="ok"===n;s||Rt("set at "+t+" failed: "+n);const o=Wr(e.serverSyncTree_,l,!s);Ds(e.eventQueue_,t,o),Ks(e,r,n,i)}));const h=to(e,t);Js(e,h),Ds(e.eventQueue_,h,[])}function zs(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}function $s(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),St(n,...t)}function Ks(e,t,n,i){t&&Wt((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let r=e;i&&(r+=": "+i);const s=new Error(r);s.code=e,t(s)}}))}function Gs(e,t,n){return Kr(e.serverSyncTree_,t,n)||ei.EMPTY_NODE}function Ys(e,t=e.transactionQueueTree_){if(t||eo(e,t),gs(t)){const n=Qs(e,t);T(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),r=Gs(e,t,i);let s=r;const o=r.hash();for(let e=0;e<n.length;e++){const i=n[e];T(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const r=bn(t,i.path);s=s.updateChild(r,i.currentOutputSnapshotRaw)}const a=s.val(!0),c=t;e.server_.put(c.toString(),a,(i=>{$s(e,"transaction put response",{path:c.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(Wr(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();eo(e,fs(e.transactionQueueTree_,t)),Ys(e,e.transactionQueueTree_),Ds(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)Wt(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{Rt("transaction at "+c.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}Js(e,t)}}),o)}(e,ws(t),n)}else _s(t)&&vs(t,(t=>{Ys(e,t)}))}function Js(e,t){const n=Xs(e,t),i=ws(n);return function(e,t,n){if(0===t.length)return;const i=[];let r=[];const s=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const c=t[a],l=bn(n,c.path);let u,h=!1;if(T(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===c.status)h=!0,u=c.abortReason,r=r.concat(Wr(e.serverSyncTree_,c.currentWriteId,!0));else if(0===c.status)if(c.retryCount>=25)h=!0,u="maxretry",r=r.concat(Wr(e.serverSyncTree_,c.currentWriteId,!0));else{const n=Gs(e,c.path,s);c.currentInputSnapshot=n;const i=t[a].update(n.val());if(void 0!==i){Ss("transaction failed: Data returned ",i,c.path);let t=ni(i);"object"==typeof i&&null!=i&&te(i,".priority")||(t=t.updatePriority(n.getPriority()));const o=c.currentWriteId,a=js(e),l=hs(t,n,a);c.currentOutputSnapshotRaw=t,c.currentOutputSnapshotResolved=l,c.currentWriteId=Bs(e),s.splice(s.indexOf(o),1),r=r.concat(Hr(e.serverSyncTree_,c.path,l,c.currentWriteId,c.applyLocally)),r=r.concat(Wr(e.serverSyncTree_,o,!0))}else h=!0,u="nodata",r=r.concat(Wr(e.serverSyncTree_,c.currentWriteId,!0))}Ds(e.eventQueue_,n,r),r=[],h&&(t[a].status=2,o=t[a].unwatcher,setTimeout(o,Math.floor(0)),t[a].onComplete&&("nodata"===u?i.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):i.push((()=>t[a].onComplete(new Error(u),!1,null)))))}var o;eo(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)Wt(i[e]);Ys(e,e.transactionQueueTree_)}(e,Qs(e,n),i),i}function Xs(e,t){let n,i=e.transactionQueueTree_;for(n=pn(t);null!==n&&void 0===gs(i);)i=fs(i,n),n=pn(t=gn(t));return i}function Qs(e,t){const n=[];return Zs(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Zs(e,t,n){const i=gs(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);vs(t,(t=>{Zs(e,t,n)}))}function eo(e,t){const n=gs(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,ms(t,n.length>0?n:void 0)}vs(t,(t=>{eo(e,t)}))}function to(e,t){const n=ws(Xs(e,t)),i=fs(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{no(e,t)})),no(e,i),ys(i,(t=>{no(e,t)})),n}function no(e,t){const n=gs(t);if(n){const i=[];let r=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(T(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(T(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(Wr(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?ms(t,void 0):n.length=s+1,Ds(e.eventQueue_,ws(t),r);for(let e=0;e<i.length;e++)Wt(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=function(e,t){const n=ro(e),i=n.namespace;"firebase.com"===n.domain&&Pt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||Pt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Rt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Gt(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new hn(n.pathString)}},ro=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",c=443;if("string"==typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(r=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(u,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Rt(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const p=t.slice(0,l);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d.ns)}return{host:t,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};!function(){let e=0;const t=[]}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class so{getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+X(this.snapshot.exportVal())}constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}}class oo{getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class co{get key(){return wn(this._path)?null:mn(this._path)}get ref(){return new lo(this._repo,this._path)}get _queryIdentifier(){const e=fi(this._queryParams),t=Mt(e);return"{}"===t?"default":t}get _queryObject(){return fi(this._queryParams)}isEqual(e){if(!((e=_e(e))instanceof co))return!1;const t=this._repo===e._repo,n=Cn(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}}class lo extends co{get parent(){const e=vn(this._path);return null===e?null:new lo(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}constructor(e,t){super(e,t,new di,!1)}}class uo{get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new hn(e),n=po(this.ref,e);return new uo(this._node.getChild(t),n,$n)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new uo(n,po(this.ref,t),$n))))}hasChild(e){const t=new hn(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}constructor(e,t,n){this._node=e,this.ref=t,this._index=n}}function ho(e,t){return(e=_e(e))._checkNotDeleted("ref"),void 0!==t?po(e._root,t):e._root}function po(e,t){var n,i,r,s;return null===pn((e=_e(e))._path)?(n="child",i="path",s=!1,(r=t)&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),xs(n,i,r,s)):xs("child","path",t,!1),new lo(e._repo,yn(e._path,t))}function fo(e,t){e=_e(e),Ns("set",e._path),ks("set",t,e._path,!1);const n=new q;return Vs(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function go(e){e=_e(e);const t=new ao((()=>{})),n=new mo(t);return function(e,t,n){const i=Gr(e.serverSyncTree_,t);return null!=i?Promise.resolve(i):e.server_.get(t).then((i=>{const r=ni(i).withIndex(t._queryParams.getIndex());let s;if($r(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())s=Br(e.serverSyncTree_,t._path,r);else{const n=Zr(e.serverSyncTree_,t);s=zr(e.serverSyncTree_,t._path,r,n)}return Ds(e.eventQueue_,t._path,s),Vr(e.serverSyncTree_,t,n,null,!0),r}),(n=>($s(e,"get for query "+X(t)+" failed: "+n),Promise.reject(new Error(n)))))}(e._repo,e,n).then((t=>new uo(t,new lo(e._repo,e._path),e._queryParams.getIndex())))}class mo{respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new so("value",this,new uo(e.snapshotNode,new lo(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new oo(this,e,t):null}matches(e){return e instanceof mo&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}constructor(e){this.callbackContext=e}}!function(e){T(!kr,"__referenceConstructor has already been defined"),kr=e}(lo),function(e){T(!Sr,"__referenceConstructor has already been defined"),Sr=e}(lo);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _o={};let vo=!1;function yo(e,t,n,i,r){let o=i||e.options.databaseURL;void 0===o&&(e.options.projectId||Pt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),St("Using default host for project ",e.options.projectId),o=`${e.options.projectId}-default-rtdb.firebaseio.com`);let a,c,l=io(o,r),u=l.repoInfo;void 0!==s&&s.env&&(c=s.env.FIREBASE_DATABASE_EMULATOR_HOST),c?(a=!0,o=`http://${c}?ns=${u.namespace}`,l=io(o,r),u=l.repoInfo):a=!l.repoInfo.secure;const h=r&&a?new $t($t.OWNER):new zt(e.name,e.options,t);Ps("Invalid Firebase Database URL",l),wn(l.path)||Pt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=function(e,t,n,i){let r=_o[t.name];r||(r={},_o[t.name]=r);let s=r[e.toURLString()];s&&Pt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new Ms(e,vo,n,i),r[e.toURLString()]=s,s}(u,e,h,new Vt(e.name,n));return new wo(d,e)}class wo{get _repo(){return this._instanceStarted||(Fs(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new lo(this._repo,dn())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=_o[t];n&&n[e.key]===e||Pt(`Database ${t}(${e.repoInfo_}) has already been deleted.`),zs(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&Pt("Cannot call "+e+" on a deleted database.")}constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}}xn.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},xn.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){ft="9.21.0",Qe(new ve("database",((e,{instanceIdentifier:t})=>yo(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),rt("@firebase/database","0.14.4",e),rt("@firebase/database","0.14.4","esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */();function bo(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;function Co(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const To=Co,Io=new G("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Eo=new xe("@firebase/auth");function ko(e,...t){Eo.logLevel<=Ce.ERROR&&Eo.error(`Auth (9.21.0): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(e,...t){throw Po(e,...t)}function xo(e,...t){return Po(e,...t)}function No(e,t,n){const i=Object.assign(Object.assign({},To()),{[t]:n});return new G("auth","Firebase",i).create(t,{appName:e.name})}function Po(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return Io.create(e,...t)}function Ro(e,t,...n){if(!e)throw Po(t,...n)}function Ao(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ko(t),new Error(t)}function Do(e,t){e||Ao(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Lo(){return"http:"===Mo()||"https:"===Mo()}function Mo(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Lo()||W()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qo{get(){return Fo()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,Do(t>e,"Short delay should be less than long delay!"),this.isMobile=H()||B()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(e,t){Do(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Ao("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Ao("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Ao("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Wo=new qo(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Vo(e,t,n,i,r={}){return zo(e,r,(async()=>{let r={},s={};i&&("GET"===t?s=i:r={body:JSON.stringify(i)});const o=ae(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Uo.fetch()(Ko(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function zo(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},Ho),t);try{const t=new Go(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw Yo(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Yo(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Yo(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw Yo(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw No(e,a,o);So(e,a)}}catch(t){if(t instanceof K)throw t;So(e,"network-request-failed",{message:String(t)})}}async function $o(e,t,n,i,r={}){const s=await Vo(e,t,n,i,r);return"mfaPendingCredential"in s&&So(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Ko(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?jo(e.config,r):`${e.config.apiScheme}://${r}`}class Go{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(xo(this.auth,"network-request-failed"))),Wo.get())}))}}function Yo(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=xo(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jo(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(e){return 1e3*Number(e)}function Qo(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return ko("JWT malformed, contained fewer than 3 sections"),null;try{const e=P(n);return e?JSON.parse(e):(ko("Failed to decode base64 JWT payload"),null)}catch(e){return ko("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Zo(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof K&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class ea{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{_initializeTime(){this.lastSignInTime=Jo(this.lastLoginAt),this.creationTime=Jo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function na(e){var t;const n=e.auth,i=await e.getIdToken(),r=await Zo(e,async function(e,t){return Vo(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));Ro(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=bo(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ta(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ia{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ro(e.idToken,"internal-error"),Ro(void 0!==e.idToken,"internal-error"),Ro(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Qo(e);return Ro(t,"internal-error"),Ro(void 0!==t.exp,"internal-error"),Ro(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Ro(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await zo(e,{},(async()=>{const n=ae({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,s=Ko(e,i,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Uo.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new ia;return n&&(Ro("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(Ro("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(Ro("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ia,this.toJSON())}_performRefresh(){return Ao("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(e,t){Ro("string"==typeof e||void 0===e,"internal-error",{appName:t})}class sa{async getIdToken(e){const t=await Zo(this,this.stsTokenManager.getToken(this.auth,e));return Ro(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=_e(e),i=await n.getIdToken(t),r=Qo(i);Ro(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Jo(Xo(r.auth_time)),issuedAtTime:Jo(Xo(r.iat)),expirationTime:Jo(Xo(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=_e(e);await na(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Ro(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new sa(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ro(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await na(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Zo(this,async function(e,t){return Vo(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,_=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:y,isAnonymous:w,providerData:b,stsTokenManager:C}=t;Ro(v&&C,e,"internal-error");const T=ia.fromJSON(this.name,C);Ro("string"==typeof v,e,"internal-error"),ra(u,e.name),ra(h,e.name),Ro("boolean"==typeof y,e,"internal-error"),Ro("boolean"==typeof w,e,"internal-error"),ra(d,e.name),ra(p,e.name),ra(f,e.name),ra(g,e.name),ra(m,e.name),ra(_,e.name);const I=new sa({uid:v,auth:e,email:h,emailVerified:y,displayName:u,isAnonymous:w,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:T,createdAt:m,lastLoginAt:_});return b&&Array.isArray(b)&&(I.providerData=b.map((e=>Object.assign({},e)))),g&&(I._redirectEventId=g),I}static async _fromIdTokenResponse(e,t,n=!1){const i=new ia;i.updateFromServerResponse(t);const r=new sa({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await na(r),r}constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=bo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ea(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ta(r.createdAt||void 0,r.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=new Map;function aa(e){Do(e instanceof Function,"Expected a class definition");let t=oa.get(e);return t?(Do(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,oa.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}ca.type="NONE";const la=ca;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(e,t,n){return`firebase:${e}:${t}:${n}`}class ha{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?sa._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ha(aa(la),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||aa(la);const s=ua(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const i=sa._fromJSON(e,t);n!==r&&(o=i),r=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new ha(r,e,n)):new ha(r,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=ua(this.userKey,i.apiKey,r),this.fullPersistenceKey=ua("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ma(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(pa(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(va(t))return"Blackberry";if(ya(t))return"Webos";if(fa(t))return"Safari";if((t.includes("chrome/")||ga(t))&&!t.includes("edge/"))return"Chrome";if(_a(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function pa(e=U()){return/firefox\//i.test(e)}function fa(e=U()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ga(e=U()){return/crios\//i.test(e)}function ma(e=U()){return/iemobile/i.test(e)}function _a(e=U()){return/android/i.test(e)}function va(e=U()){return/blackberry/i.test(e)}function ya(e=U()){return/webos/i.test(e)}function wa(e=U()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ba(){return V()&&10===document.documentMode}function Ca(e=U()){return wa(e)||_a(e)||ya(e)||va(e)||/windows phone/i.test(e)||ma(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ta(e,t=[]){let n;switch(e){case"Browser":n=da(U());break;case"Worker":n=`${da(U())}-${e}`;break;default:n=e}return`${n}/JsCore/9.21.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ia(e,t){return Vo(e,"GET","/v2/recaptchaConfig",Bo(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(e){return void 0!==e&&void 0!==e.enterprise}class ka{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(e){return new Promise(((t,n)=>{const i=document.createElement("script");var r,s;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=xo("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(i)}))}function xa(e){return`__${e}${Math.floor(1e6*Math.random())}`}class Na{async verify(e="verify",t=!1){function n(t,n,i){const r=window.grecaptcha;Ea(r)?r.enterprise.ready((()=>{r.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{Ia(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new ka(i);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((r=>{if(!t&&Ea(window.grecaptcha))n(r,e,i);else{if("undefined"==typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));Sa("https://www.google.com/recaptcha/enterprise.js?render="+r).then((()=>{n(r,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}constructor(e){this.type="recaptcha-enterprise",this.auth=Da(e)}}async function Pa(e,t,n,i=!1){const r=new Na(e);let s;try{s=await r.verify(n)}catch(e){s=await r.verify(n,!0)}const o=Object.assign({},t);return i?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=aa(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await ha.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Ro(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await na(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?_e(e):null;return t&&Ro(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ro(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(aa(e))}))}async initializeRecaptchaConfig(){const e=await Ia(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new ka(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new Na(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new G("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&aa(e)||this._popupRedirectResolver;Ro(t,this,"argument-error"),this.redirectPersistenceManager=await ha.create(this,[aa(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Ro(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ro(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ta(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Eo.logLevel<=Ce.WARN&&Eo.warn(`Auth (9.21.0): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Oa(this),this.idTokenSubscription=new Oa(this),this.beforeStateQueue=new Ra(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Io,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}}function Da(e){return _e(e)}class Oa{get next(){return Ro(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=he((e=>this.observer=e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(e,t,n){const i=Da(e);Ro(i._canInitEmulator,i,"emulator-config-failed"),Ro(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),s=Ma(t),{host:o,port:a}=function(e){const t=Ma(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:Fa(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:Fa(t)}}}(t),c=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Ma(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Fa(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class qa{toJSON(){return Ao("not implemented")}_getIdTokenResponse(e){return Ao("not implemented")}_linkToIdToken(e,t){return Ao("not implemented")}_getReauthenticationResolver(e){return Ao("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ja(e,t){return Vo(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ua(e,t){return $o(e,"POST","/v1/accounts:signInWithPassword",Bo(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ha extends qa{static _fromEmailAndPassword(e,t){return new Ha(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ha(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await Pa(e,n,"signInWithPassword");return Ua(e,t)}return Ua(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await Pa(e,n,"signInWithPassword");return Ua(e,t)}return Promise.reject(t)}));case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return $o(e,"POST","/v1/accounts:signInWithEmailLink",Bo(e,t))}(e,{email:this._email,oobCode:this._password});default:So(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return ja(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return $o(e,"POST","/v1/accounts:signInWithEmailLink",Bo(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:So(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wa(e,t){return $o(e,"POST","/v1/accounts:signInWithIdp",Bo(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba extends qa{static _fromParams(e){const t=new Ba(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):So("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=bo(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new Ba(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return Wa(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Wa(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Wa(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ae(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class za extends qa{static _fromVerification(e,t){return new za({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new za({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return $o(e,"POST","/v1/accounts:signInWithPhoneNumber",Bo(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await $o(e,"POST","/v1/accounts:signInWithPhoneNumber",Bo(e,t));if(n.temporaryProof)throw Yo(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return $o(e,"POST","/v1/accounts:signInWithPhoneNumber",Bo(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Va)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new za({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{static parseLink(e){const t=function(e){const t=ce(le(e)).link,n=t?ce(le(t)).deep_link_id:null,i=ce(le(e)).deep_link_id;return(i?ce(le(i)).link:null)||i||n||t||e}(e);try{return new $a(t)}catch(e){return null}}constructor(e){var t,n,i,r,s,o;const a=ce(le(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);Ro(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ka{static credential(e,t){return Ha._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=$a.parseLink(t);return Ro(n,"argument-error"),Ha._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=Ka.PROVIDER_ID}}Ka.PROVIDER_ID="password",Ka.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ka.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ga{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya extends Ga{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ja extends Ya{static credential(e){return Ba._fromParams({providerId:Ja.PROVIDER_ID,signInMethod:Ja.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ja.credentialFromTaggedObject(e)}static credentialFromError(e){return Ja.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ja.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}Ja.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ja.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xa extends Ya{static credential(e,t){return Ba._fromParams({providerId:Xa.PROVIDER_ID,signInMethod:Xa.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Xa.credentialFromTaggedObject(e)}static credentialFromError(e){return Xa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Xa.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Xa.GOOGLE_SIGN_IN_METHOD="google.com",Xa.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qa extends Ya{static credential(e){return Ba._fromParams({providerId:Qa.PROVIDER_ID,signInMethod:Qa.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qa.credentialFromTaggedObject(e)}static credentialFromError(e){return Qa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Qa.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Qa.GITHUB_SIGN_IN_METHOD="github.com",Qa.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Za extends Ya{static credential(e,t){return Ba._fromParams({providerId:Za.PROVIDER_ID,signInMethod:Za.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Za.credentialFromTaggedObject(e)}static credentialFromError(e){return Za.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Za.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ec(e,t){return $o(e,"POST","/v1/accounts:signUp",Bo(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Za.TWITTER_SIGN_IN_METHOD="twitter.com",Za.PROVIDER_ID="twitter.com";class tc{static async _fromIdTokenResponse(e,t,n,i=!1){const r=await sa._fromIdTokenResponse(e,n,i),s=nc(n);return new tc({user:r,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=nc(n);return new tc({user:e,providerId:i,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function nc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ic extends K{static _fromErrorAndOperation(e,t,n,i){return new ic(e,t,n,i)}constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,ic.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function rc(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ic._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sc(e,t,n=!1){const i=await Zo(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return tc._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function oc(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await Zo(e,rc(i,r,t,e),n);Ro(s.idToken,i,"internal-error");const o=Qo(s.idToken);Ro(o,i,"internal-error");const{sub:a}=o;return Ro(e.uid===a,i,"user-mismatch"),tc._forOperation(e,r,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&So(i,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ac(e,t,n=!1){const i="signIn",r=await rc(e,i,t),s=await tc._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function cc(e,t){return ac(Da(e),t)}async function lc(e,t,n){var i;const r=Da(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(i=r._getRecaptchaConfig())||void 0===i?void 0:i.emailPasswordEnabled){const e=await Pa(r,s,"signUpPassword");o=ec(r,e)}else o=ec(r,s).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await Pa(r,s,"signUpPassword");return ec(r,e)}return Promise.reject(e)}));const a=await o.catch((e=>Promise.reject(e))),c=await tc._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function uc(e,t,n){return cc(_e(e),Ka.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(e,t,n,i){return _e(e).onAuthStateChanged(t,n,i)}new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dc{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc extends dc{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);ba()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=U();return fa(e)||wa(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Ca(),this._shouldAllowMigration=!0}}pc.type="LOCAL";const fc=pc;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc extends dc{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}gc.type="SESSION";const mc=gc;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _c{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new _c(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vc(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_c.receivers=[];class yc{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const c=vc("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bc(){return void 0!==wc().WorkerGlobalScope&&"function"==typeof wc().importScripts}class Cc{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function Tc(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Ic(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Cc(e).toPromise()}(),t(await Ic()))}))}))}async function Ec(e,t,n){const i=Tc(e,!0).put({fbase_key:t,value:n});return new Cc(i).toPromise()}function kc(e,t){const n=Tc(e,!0).delete(t);return new Cc(n).toPromise()}class Sc{async _openDb(){return this.db||(this.db=await Ic()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_c._getInstance(bc()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new yc(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ic();return await Ec(e,"__sak","1"),await kc(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Ec(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Tc(e,!1).get(t),i=await new Cc(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>kc(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Tc(e,!1).getAll();return new Cc(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}Sc.type="LOCAL";const xc=Sc;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
xa("rcb"),new qo(3e4,6e4);async function Nc(e,t,n){var i;const r=await n.verify();try{let s;if(Ro("string"==typeof r,e,"argument-error"),Ro("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){Ro("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Vo(e,"POST","/v2/accounts/mfaEnrollment:start",Bo(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{Ro("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;Ro(n,e,"missing-multi-factor-info");const o=await function(e,t){return Vo(e,"POST","/v2/accounts/mfaSignIn:start",Bo(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Vo(e,"POST","/v1/accounts:sendVerificationCode",Bo(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pc{verifyPhoneNumber(e,t){return Nc(this.auth,e,_e(t))}static credential(e,t){return za._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Pc.credentialFromTaggedObject(t)}static credentialFromError(e){return Pc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?za._fromTokenResponse(t,n):null}constructor(e){this.providerId=Pc.PROVIDER_ID,this.auth=Da(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rc(e,t){return t?aa(t):(Ro(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pc.PROVIDER_ID="phone",Pc.PHONE_SIGN_IN_METHOD="phone";class Ac extends qa{_getIdTokenResponse(e){return Wa(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Wa(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Wa(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function Dc(e){return ac(e.auth,new Ac(e),e.bypassAuthState)}function Oc(e){const{auth:t,user:n}=e;return Ro(n,t,"internal-error"),oc(n,new Ac(e),e.bypassAuthState)}async function Lc(e){const{auth:t,user:n}=e;return Ro(n,t,"internal-error"),sc(n,new Ac(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Dc;case"linkViaPopup":case"linkViaRedirect":return Lc;case"reauthViaPopup":case"reauthViaRedirect":return Oc;default:So(this.auth,"internal-error")}}resolve(e){Do(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Do(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc=new qo(2e3,1e4);class qc extends Mc{async executeNotNull(){const e=await this.execute();return Ro(e,this.auth,"internal-error"),e}async onExecution(){Do(1===this.filter.length,"Popup operations only handle one event");const e=vc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(xo(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(xo(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qc.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(xo(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Fc.get())};e()}constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,qc.currentPopupAction&&qc.currentPopupAction.cancel(),qc.currentPopupAction=this}}qc.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const jc=new Map;class Uc extends Mc{async execute(){let e=jc.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Bc(t),i=Wc(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}jc.set(this.auth._key(),e)}return this.bypassAuthState||jc.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function Hc(e,t){jc.set(e._key(),t)}function Wc(e){return aa(e._redirectPersistence)}function Bc(e){return ua("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vc(e,t,n=!1){const i=Da(e),r=Rc(i,t),s=new Uc(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}class zc{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Kc(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Kc(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(xo(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has($c(e))}saveEventToCache(e){this.cachedEventUids.add($c(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function $c(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Kc({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Gc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Yc=/^https?/;async function Jc(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Vo(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Xc(e))return}catch(e){}So(e,"unauthorized-domain")}function Xc(e){const t=Oo(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Yc.test(n))return!1;if(Gc.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=new qo(3e4,6e4);function Zc(){const e=wc().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let el=null;function tl(e){return el=el||function(e){return new Promise(((t,n)=>{var i,r,s;function o(){Zc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Zc(),n(xo(e,"network-request-failed"))},timeout:Qc.get()})}if(null===(r=null===(i=wc().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=wc().gapi)||void 0===s?void 0:s.load)){const t=xa("iframefcb");return wc()[t]=()=>{gapi.load?o():n(xo(e,"network-request-failed"))},Sa(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw el=null,e}))}(e),el}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl=new qo(5e3,15e3),il={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sl(e){const t=e.config;Ro(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?jo(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:"9.21.0"},r=rl.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${ae(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ol={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class al{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function cl(e,t,n,i=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ol),{width:i.toString(),height:r.toString(),top:s,left:o}),l=U().toLowerCase();n&&(a=ga(l)?"_blank":n),pa(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=U()){var t;return wa(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new al(null);const h=window.open(t||"",a,u);Ro(h,e,"popup-blocked");try{h.focus()}catch(e){}return new al(h)}const ll=encodeURIComponent("fac");async function ul(e,t,n,i,r,s){Ro(e.config.authDomain,e,"auth-domain-config-required"),Ro(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:"9.21.0",eventId:r};if(t instanceof Ga){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",ie(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Ya){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];const c=await e._getAppCheckToken(),l=c?`#${ll}=${encodeURIComponent(c)}`:"";return`${function({config:e}){return e.emulator?jo(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${ae(a).slice(1)}${l}`}const hl=class{async _openPopup(e,t,n,i){var r;Do(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return cl(e,await ul(e,t,n,Oo(),i),vc())}async _openRedirect(e,t,n,i){await this._originValidation(e);return function(e){wc().location.href=e}(await ul(e,t,n,Oo(),i)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Do(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await tl(e),n=wc().gapi;return Ro(n,e,"internal-error"),t.open({where:document.body,url:sl(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:il,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=xo(e,"network-request-failed"),s=wc().setTimeout((()=>{i(r)}),nl.get());function o(){wc().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{i(r)}))}))))}(e),n=new zc(e);return t.register("authEvent",(t=>{Ro(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&t(!!r),So(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Jc(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ca()||fa()||wa()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mc,this._completeRedirectFn=Vc,this._overrideRedirectResult=Hc}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dl{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ro(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pl=F("authIdTokenMaxAge")||300;let fl=null;var gl;gl="Browser",Qe(new ve("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;Ro(s&&!s.includes(":"),"invalid-api-key",{appName:n.name}),Ro(!(null==o?void 0:o.includes(":")),"argument-error",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:gl,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ta(gl)},c=new Aa(n,i,r,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(aa);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(c,t),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Qe(new ve("auth-internal",(e=>{const t=Da(e.getProvider("auth").getImmediate());return new dl(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),rt("@firebase/auth","0.23.1",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(gl)),rt("@firebase/auth","0.23.1","esm2017");const ml={favourite:[],read:[],theme:"light"};var _l={};!function(e){e(["jquery"],(function(e){return function(){var t,n,i,r=0,s="error",o="info",a="success",c="warning",l={clear:function(n,i){var r=f();t||u(r);h(n,r,i)||function(n){for(var i=t.children(),r=i.length-1;r>=0;r--)h(e(i[r]),n)}(r)},remove:function(n){var i=f();t||u(i);if(n&&0===e(":focus",n).length)return void g(n);t.children().length&&t.remove()},error:function(e,t,n){return p({type:s,iconClass:f().iconClasses.error,message:e,optionsOverride:n,title:t})},getContainer:u,info:function(e,t,n){return p({type:o,iconClass:f().iconClasses.info,message:e,optionsOverride:n,title:t})},options:{},subscribe:function(e){n=e},success:function(e,t,n){return p({type:a,iconClass:f().iconClasses.success,message:e,optionsOverride:n,title:t})},version:"2.1.4",warning:function(e,t,n){return p({type:c,iconClass:f().iconClasses.warning,message:e,optionsOverride:n,title:t})}};return l;function u(n,i){return n||(n=f()),(t=e("#"+n.containerId)).length||i&&(t=function(n){return(t=e("<div/>").attr("id",n.containerId).addClass(n.positionClass)).appendTo(e(n.target)),t}(n)),t}function h(t,n,i){var r=!(!i||!i.force)&&i.force;return!(!t||!r&&0!==e(":focus",t).length)&&(t[n.hideMethod]({duration:n.hideDuration,easing:n.hideEasing,complete:function(){g(t)}}),!0)}function d(e){n&&n(e)}function p(n){var s=f(),o=n.iconClass||s.iconClass;if(void 0!==n.optionsOverride&&(s=e.extend(s,n.optionsOverride),o=n.optionsOverride.iconClass||o),!function(e,t){if(e.preventDuplicates){if(t.message===i)return!0;i=t.message}return!1}(s,n)){r++,t=u(s,!0);var a=null,c=e("<div/>"),l=e("<div/>"),h=e("<div/>"),p=e("<div/>"),m=e(s.closeHtml),_={intervalId:null,hideEta:null,maxHideTime:null},v={toastId:r,state:"visible",startTime:new Date,options:s,map:n};return n.iconClass&&c.addClass(s.toastClass).addClass(o),function(){if(n.title){var e=n.title;s.escapeHtml&&(e=y(n.title)),l.append(e).addClass(s.titleClass),c.append(l)}}(),function(){if(n.message){var e=n.message;s.escapeHtml&&(e=y(n.message)),h.append(e).addClass(s.messageClass),c.append(h)}}(),s.closeButton&&(m.addClass(s.closeClass).attr("role","button"),c.prepend(m)),s.progressBar&&(p.addClass(s.progressClass),c.prepend(p)),s.rtl&&c.addClass("rtl"),s.newestOnTop?t.prepend(c):t.append(c),function(){var e="";switch(n.iconClass){case"toast-success":case"toast-info":e="polite";break;default:e="assertive"}c.attr("aria-live",e)}(),c.hide(),c[s.showMethod]({duration:s.showDuration,easing:s.showEasing,complete:s.onShown}),s.timeOut>0&&(a=setTimeout(w,s.timeOut),_.maxHideTime=parseFloat(s.timeOut),_.hideEta=(new Date).getTime()+_.maxHideTime,s.progressBar&&(_.intervalId=setInterval(T,10))),function(){s.closeOnHover&&c.hover(C,b);!s.onclick&&s.tapToDismiss&&c.click(w);s.closeButton&&m&&m.click((function(e){e.stopPropagation?e.stopPropagation():void 0!==e.cancelBubble&&!0!==e.cancelBubble&&(e.cancelBubble=!0),s.onCloseClick&&s.onCloseClick(e),w(!0)}));s.onclick&&c.click((function(e){s.onclick(e),w()}))}(),d(v),s.debug&&console&&console.log(v),c}function y(e){return null==e&&(e=""),e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function w(t){var n=t&&!1!==s.closeMethod?s.closeMethod:s.hideMethod,i=t&&!1!==s.closeDuration?s.closeDuration:s.hideDuration,r=t&&!1!==s.closeEasing?s.closeEasing:s.hideEasing;if(!e(":focus",c).length||t)return clearTimeout(_.intervalId),c[n]({duration:i,easing:r,complete:function(){g(c),clearTimeout(a),s.onHidden&&"hidden"!==v.state&&s.onHidden(),v.state="hidden",v.endTime=new Date,d(v)}})}function b(){(s.timeOut>0||s.extendedTimeOut>0)&&(a=setTimeout(w,s.extendedTimeOut),_.maxHideTime=parseFloat(s.extendedTimeOut),_.hideEta=(new Date).getTime()+_.maxHideTime)}function C(){clearTimeout(a),_.hideEta=0,c.stop(!0,!0)[s.showMethod]({duration:s.showDuration,easing:s.showEasing})}function T(){var e=(_.hideEta-(new Date).getTime())/_.maxHideTime*100;p.width(e+"%")}}function f(){return e.extend({},{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,closeMethod:!1,closeDuration:!1,closeEasing:!1,closeOnHover:!0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',closeClass:"toast-close-button",newestOnTop:!0,preventDuplicates:!1,progressBar:!1,progressClass:"toast-progress",rtl:!1},l.options)}function g(e){t||(t=u()),e.is(":visible")||(e.remove(),e=null,0===t.children().length&&(t.remove(),i=void 0))}}()}))}("function"==typeof define&&define.amd?define:function(e,t){_l?_l=t(r("aaQnt")):window.toastr=t(window.jQuery)}),t(_l).options={closeButton:!0,debug:!1,newestOnTop:!0,progressBar:!0,positionClass:"toast-top-right",preventDuplicates:!1,onclick:null,showDuration:300,hideDuration:1e3,timeOut:5e3,extendedTimeOut:1e3,showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"};const vl=t(_l);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
rt("firebase","9.21.0","app");const yl=nt({apiKey:"AIzaSyC-f08qD6BqdVE49Fk1Hrhnb18ww-swp9s",authDomain:"blended1-js-project.firebaseapp.com",databaseURL:"https://blended1-js-project-default-rtdb.europe-west1.firebasedatabase.app",projectId:"blended1-js-project",storageBucket:"blended1-js-project.appspot.com",messagingSenderId:"453737683945",appId:"1:453737683945:web:0c3c25fcb2a4883929c978",measurementId:"G-93VBB2L2Q1"}),wl=function(e=it()){const t=Ze(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Ze(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(se(n.getOptions(),null!=t?t:{}))return e;So(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:hl,persistence:[xc,fc,mc]}),i=F("authTokenSyncURL");if(i){const e=(r=i,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>pl)return;const i=null==t?void 0:t.token;fl!==i&&(fl=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){_e(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){_e(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}var r;const s=L("auth");return s&&La(n,`http://${s}`),n}(yl),bl=document.querySelector(".auth-component");var Cl=new class{signUp(e){e.preventDefault();const t=e.target.elements.email.value,n=e.target.elements.password.value;t&&n.length>=6&&(bl.classList.remove("signed-out"),lc(wl,t,n).then((e=>{const t=e.user;console.log(t)})).catch((e=>{vl.error([e.code,e.message],"Sorry, unexpected error occured"),bl.classList.add("signed-out")})).finally((()=>{e.target.classList.add("visually-hidden")})))}signIn(e){e.preventDefault();const t=e.target.elements.email.value.trim(),n=e.target.elements.password.value.trim();t&&n.length>=6&&(bl.classList.remove("signed-out"),uc(wl,t,n).then((e=>{const t=e.user;console.log(t)})).catch((e=>{vl.error([e.code,e.message],"Sorry, unexpected error occured")})).finally((()=>{e.target.classList.add("visually-hidden")})))}signOutUser(){var e;bl.classList.remove("signed-in"),(e=wl,_e(e).signOut()).then((()=>{})).catch((e=>{bl.classList.add("signed-in"),vl.error([e.code,e.message],"Sorry, unexpected error occured")}))}authSentry(){hc(wl,(e=>{e?(Il.getUserData().then((e=>{e?kl.set(e):kl.set(ml)})),bl.querySelector(".auth-component__user-email").textContent=`${e.email}`,bl.classList.add("signed-in")):(localStorage.getItem("globalState")?kl.set(JSON.parse(localStorage.getItem("globalState"))):(kl.set(ml),kl.writeToLocalStorage()),bl.classList.add("signed-out"))}))}isAuthenticated(){return new Promise((e=>{hc(wl,(t=>{e(!!t)}))}))}getCurrentUserId(){const e=wl.currentUser;if(null!==e)return e.uid}};const Tl=function(e=it(),t){const n=Ze(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=M("database");e&&function(e,t,n,i={}){(e=_e(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&Pt("Cannot call useEmulator() after instance has already been initialized.");const r=e._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&Pt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new $t($t.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:j(i.mockUserToken,e.app.options.projectId);s=new $t(t)}!function(e,t,n,i){e.repoInfo_=new Gt(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}(r,t,n,s)}(n,...e)}return n}(yl);var Il=new class{writeUserData(){const e=Cl.getCurrentUserId(),t=kl.get();fo(ho(Tl,"users/"+e),t)}async getUserData(){const e=Cl.getCurrentUserId();return await go(ho(Tl,"users/"+e)).then((e=>{if(e.exists()){return{...ml,...e.val()}}console.log("No data available")})).catch((e=>{vl.error([e.code,e.message],"Sorry, unexpected error occured")}))}};let El=JSON.parse(JSON.stringify(ml));var kl=Object.freeze(new class{get(){return El}set(e){El=JSON.parse(JSON.stringify(e)),this.saveData()}favourite(){return El.favourite}read(){return El.read}theme(){return El.read}setFavourite(e){El.favourite=e,this.saveData()}setRead(e){El.read=e,this.saveData()}setTheme(e){El.theme=e,this.saveData()}writeToLocalStorage(){localStorage.setItem("globalState",JSON.stringify(El))}async saveData(){await Cl.isAuthenticated()?Il.writeUserData():this.writeToLocalStorage()}});const Sl=document.querySelector(".auth-component"),xl=document.querySelector(".sign-up-form"),Nl=document.querySelector(".sign-in-form"),Pl=document.querySelector(".test-button"),Rl=document.querySelector(".state-button");Cl.authSentry(),xl.addEventListener("submit",Cl.signUp),Nl.addEventListener("submit",Cl.signIn),Sl.addEventListener("click",(e=>{e.target.classList.contains("auth-component__sign-out-button")&&Cl.signOutUser(),e.target.classList.contains("auth-component__sign-up-button")&&xl.classList.remove("visually-hidden"),e.target.classList.contains("auth-component__sign-in-button")&&Nl.classList.remove("visually-hidden")})),Pl.addEventListener("click",(()=>{Cl.getCurrentUserId()})),Rl.addEventListener("click",(()=>{console.log(kl.get())}));document.querySelector(".state-manipulator").addEventListener("click",(e=>{switch(e.target.className){case"add-to-favourite":kl.setFavourite([...kl.favourite(),{title:"some title",text:"some text"}]);break;case"remove-from-favourite":{const e=kl.favourite();e.pop(),kl.setFavourite(e);break}case"add-to-read":kl.setRead([...kl.read(),{title:"some title",text:"some text"}]);break;case"remove-from-read":{const e=kl.read();e.pop(),kl.setRead(e);break}case"light-theme":kl.setTheme("light");break;case"dark-theme":kl.setTheme("dark");break;case"other-theme":kl.setTheme("other")}}));
//# sourceMappingURL=index.ae18d21a.js.map
