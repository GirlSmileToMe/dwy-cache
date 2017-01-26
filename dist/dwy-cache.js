!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.dwyCache=e():t.dwyCache=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.CacheModel=e.CacheList=e.LFUStrategy=e.LRUStrategy=e.FIFOStrategy=void 0;var o=n(1);Object.defineProperty(e,"CacheModel",{enumerable:!0,get:function(){return o.CacheModel}});var u=n(22),i=r(u),f=n(23),c=r(f),a=n(90),s=r(a),l=r(o);e.FIFOStrategy=i.default,e.LRUStrategy=c.default,e.LFUStrategy=s.default,e.CacheList=l.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.CacheModel=void 0;var o=n(2),u=r(o),i=n(3),f=r(i),c=e.CacheModel=function(){function t(e,n,r){(0,u.default)(this,t),this.name=e,this.value=n,this.createdAt=this.usedAt=Date.now(),this.frequency=1,this.expire=r}return(0,f.default)(t,[{key:"increaseFrequency",value:function(){return this.frequency++,this}},{key:"updateUsedTime",value:function(){return this.usedAt=Date.now(),this}},{key:"isExpired",value:function(){var t=this.expire,e=this.usedAt;return"number"==typeof t&&Date.now()-e>=t}},{key:"reset",value:function(){return this.createdAt=this.usedAt=Date.now(),this.frequency=1,this}}]),t}(),a=function(){function t(e){(0,u.default)(this,t);var n=e||{},r=n.max,o=n.strategy,i=n.expire;this.max=r||10,this._strategy=o,this.expire=i,this.dataStore=[]}return(0,f.default)(t,[{key:"use",value:function(t){this._strategy=t;var e=this.dataStore;e.length>0&&e.forEach(function(t){return t.reset()})}},{key:"put",value:function(t,e,n){var r=new c(t,e,n||this.expire);this.strategy.beforePut.call(this),this.strategy.put.call(this,r)}},{key:"get",value:function(t){var e=this.dataStore.find(function(e){return e.name===t});if(e)return e.isExpired()?this.remove(e):(this.strategy.afterHit.call(this,e),e.value)}},{key:"setMax",value:function(t){if("number"!=typeof t)throw new Error("max should be number");var e=this.max,n=this.dataStore;this.max=t,n.length<t||t<e&&this.dataStore.splice(0,e-t)}},{key:"remove",value:function(t){var e=this.getItemIndex(t);this.dataStore.splice(e,1)}},{key:"clear",value:function(){this.dataStore=[]}},{key:"getLast",value:function(){return this.dataStore[this.dataStore.length-1]}},{key:"getFirst",value:function(){return this.dataStore[0]}},{key:"getItemIndex",value:function(t){return this.dataStore.indexOf(t)}},{key:"getLength",value:function(){return this.dataStore.length}},{key:"strategy",get:function(){if(!this._strategy)throw new Error("must set strategy first.set strategy via cacheList.use(strategy)");return this._strategy}}]),t}();e.default=a},function(t,e){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(4),u=r(o);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,u.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){t.exports={default:n(5),__esModule:!0}},function(t,e,n){n(6);var r=n(9).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(7);r(r.S+r.F*!n(17),"Object",{defineProperty:n(13).f})},function(t,e,n){var r=n(8),o=n(9),u=n(10),i=n(12),f="prototype",c=function(t,e,n){var a,s,l,p=t&c.F,d=t&c.G,y=t&c.S,h=t&c.P,v=t&c.B,b=t&c.W,_=d?o:o[e]||(o[e]={}),g=_[f],x=d?r:y?r[e]:(r[e]||{})[f];d&&(n=e);for(a in n)s=!p&&x&&void 0!==x[a],s&&a in _||(l=s?x[a]:n[a],_[a]=d&&"function"!=typeof x[a]?n[a]:v&&s?u(l,r):b&&x[a]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[f]=t[f],e}(l):h&&"function"==typeof l?u(Function.call,l):l,h&&((_.virtual||(_.virtual={}))[a]=l,t&c.R&&g&&!g[a]&&i(g,a,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(11);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(13),o=n(21);t.exports=n(17)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(14),o=n(16),u=n(20),i=Object.defineProperty;e.f=n(17)?Object.defineProperty:function(t,e,n){if(r(t),e=u(e,!0),r(n),o)try{return i(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(15);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(17)&&!n(18)(function(){return 7!=Object.defineProperty(n(19)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){t.exports=!n(18)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(15),o=n(8).document,u=r(o)&&r(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},function(t,e,n){var r=n(15);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),u=r(o),i=n(3),f=r(i),c=function(){function t(){(0,u.default)(this,t)}return(0,f.default)(t,[{key:"put",value:function(t){this.dataStore.push(t)}},{key:"beforePut",value:function(){var t=this.dataStore.length;t>=this.max&&this.dataStore.shift()}},{key:"afterHit",value:function(){}}]),t}();e.default=c},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(24),u=r(o),i=n(2),f=r(i),c=n(3),a=r(c),s=n(35),l=r(s),p=n(82),d=r(p),y=n(22),h=r(y),v=function(t){function e(){return(0,f.default)(this,e),(0,l.default)(this,(e.__proto__||(0,u.default)(e)).apply(this,arguments))}return(0,d.default)(e,t),(0,a.default)(e,[{key:"afterHit",value:function(t){var e=this.dataStore,n=this.getItemIndex(t);e.splice(n,1),e.push(t)}}]),e}(h.default);e.default=v},function(t,e,n){t.exports={default:n(25),__esModule:!0}},function(t,e,n){n(26),t.exports=n(9).Object.getPrototypeOf},function(t,e,n){var r=n(27),o=n(29);n(34)("getPrototypeOf",function(){return function(t){return o(r(t))}})},function(t,e,n){var r=n(28);t.exports=function(t){return Object(r(t))}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(30),o=n(27),u=n(31)("IE_PROTO"),i=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?i:null}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(32)("keys"),o=n(33);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(8),o="__core-js_shared__",u=r[o]||(r[o]={});t.exports=function(t){return u[t]||(u[t]={})}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(7),o=n(9),u=n(18);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],i={};i[t]=e(n),r(r.S+r.F*u(function(){n(1)}),"Object",i)}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(36),u=r(o);e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":(0,u.default)(e))&&"function"!=typeof e?t:e}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(37),u=r(o),i=n(66),f=r(i),c="function"==typeof f.default&&"symbol"==typeof u.default?function(t){return typeof t}:function(t){return t&&"function"==typeof f.default&&t.constructor===f.default&&t!==f.default.prototype?"symbol":typeof t};e.default="function"==typeof f.default&&"symbol"===c(u.default)?function(t){return"undefined"==typeof t?"undefined":c(t)}:function(t){return t&&"function"==typeof f.default&&t.constructor===f.default&&t!==f.default.prototype?"symbol":"undefined"==typeof t?"undefined":c(t)}},function(t,e,n){t.exports={default:n(38),__esModule:!0}},function(t,e,n){n(39),n(61),t.exports=n(65).f("iterator")},function(t,e,n){"use strict";var r=n(40)(!0);n(42)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(41),o=n(28);t.exports=function(t){return function(e,n){var u,i,f=String(o(e)),c=r(n),a=f.length;return c<0||c>=a?t?"":void 0:(u=f.charCodeAt(c),u<55296||u>56319||c+1===a||(i=f.charCodeAt(c+1))<56320||i>57343?t?f.charAt(c):u:t?f.slice(c,c+2):(u-55296<<10)+(i-56320)+65536)}}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){"use strict";var r=n(43),o=n(7),u=n(44),i=n(12),f=n(30),c=n(45),a=n(46),s=n(59),l=n(29),p=n(60)("iterator"),d=!([].keys&&"next"in[].keys()),y="@@iterator",h="keys",v="values",b=function(){return this};t.exports=function(t,e,n,_,g,x,m){a(n,e,_);var O,S,w,j=function(t){if(!d&&t in E)return E[t];switch(t){case h:return function(){return new n(this,t)};case v:return function(){return new n(this,t)}}return function(){return new n(this,t)}},M=e+" Iterator",P=g==v,k=!1,E=t.prototype,F=E[p]||E[y]||g&&E[g],A=F||j(g),I=g?P?j("entries"):A:void 0,T="Array"==e?E.entries||F:F;if(T&&(w=l(T.call(new t)),w!==Object.prototype&&(s(w,M,!0),r||f(w,p)||i(w,p,b))),P&&F&&F.name!==v&&(k=!0,A=function(){return F.call(this)}),r&&!m||!d&&!k&&E[p]||i(E,p,A),c[e]=A,c[M]=b,g)if(O={values:P?A:j(v),keys:x?A:j(h),entries:I},m)for(S in O)S in E||u(E,S,O[S]);else o(o.P+o.F*(d||k),e,O);return O}},function(t,e){t.exports=!0},function(t,e,n){t.exports=n(12)},function(t,e){t.exports={}},function(t,e,n){"use strict";var r=n(47),o=n(21),u=n(59),i={};n(12)(i,n(60)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(i,{next:o(1,n)}),u(t,e+" Iterator")}},function(t,e,n){var r=n(14),o=n(48),u=n(57),i=n(31)("IE_PROTO"),f=function(){},c="prototype",a=function(){var t,e=n(19)("iframe"),r=u.length,o="<",i=">";for(e.style.display="none",n(58).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+i+"document.F=Object"+o+"/script"+i),t.close(),a=t.F;r--;)delete a[c][u[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(f[c]=r(t),n=new f,f[c]=null,n[i]=t):n=a(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(13),o=n(14),u=n(49);t.exports=n(17)?Object.defineProperties:function(t,e){o(t);for(var n,i=u(e),f=i.length,c=0;f>c;)r.f(t,n=i[c++],e[n]);return t}},function(t,e,n){var r=n(50),o=n(57);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(30),o=n(51),u=n(54)(!1),i=n(31)("IE_PROTO");t.exports=function(t,e){var n,f=o(t),c=0,a=[];for(n in f)n!=i&&r(f,n)&&a.push(n);for(;e.length>c;)r(f,n=e[c++])&&(~u(a,n)||a.push(n));return a}},function(t,e,n){var r=n(52),o=n(28);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(53);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(51),o=n(55),u=n(56);t.exports=function(t){return function(e,n,i){var f,c=r(e),a=o(c.length),s=u(i,a);if(t&&n!=n){for(;a>s;)if(f=c[s++],f!=f)return!0}else for(;a>s;s++)if((t||s in c)&&c[s]===n)return t||s||0;return!t&&-1}}},function(t,e,n){var r=n(41),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(41),o=Math.max,u=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):u(t,e)}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){t.exports=n(8).document&&document.documentElement},function(t,e,n){var r=n(13).f,o=n(30),u=n(60)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,u)&&r(t,u,{configurable:!0,value:e})}},function(t,e,n){var r=n(32)("wks"),o=n(33),u=n(8).Symbol,i="function"==typeof u,f=t.exports=function(t){return r[t]||(r[t]=i&&u[t]||(i?u:o)("Symbol."+t))};f.store=r},function(t,e,n){n(62);for(var r=n(8),o=n(12),u=n(45),i=n(60)("toStringTag"),f=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],c=0;c<5;c++){var a=f[c],s=r[a],l=s&&s.prototype;l&&!l[i]&&o(l,i,a),u[a]=u.Array}},function(t,e,n){"use strict";var r=n(63),o=n(64),u=n(45),i=n(51);t.exports=n(42)(Array,"Array",function(t,e){this._t=i(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),u.Arguments=u.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){e.f=n(60)},function(t,e,n){t.exports={default:n(67),__esModule:!0}},function(t,e,n){n(68),n(79),n(80),n(81),t.exports=n(9).Symbol},function(t,e,n){"use strict";var r=n(8),o=n(30),u=n(17),i=n(7),f=n(44),c=n(69).KEY,a=n(18),s=n(32),l=n(59),p=n(33),d=n(60),y=n(65),h=n(70),v=n(71),b=n(72),_=n(75),g=n(14),x=n(51),m=n(20),O=n(21),S=n(47),w=n(76),j=n(78),M=n(13),P=n(49),k=j.f,E=M.f,F=w.f,A=r.Symbol,I=r.JSON,T=I&&I.stringify,C="prototype",L=d("_hidden"),N=d("toPrimitive"),q={}.propertyIsEnumerable,D=s("symbol-registry"),R=s("symbols"),U=s("op-symbols"),W=Object[C],H="function"==typeof A,J=r.QObject,G=!J||!J[C]||!J[C].findChild,K=u&&a(function(){return 7!=S(E({},"a",{get:function(){return E(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=k(W,e);r&&delete W[e],E(t,e,n),r&&t!==W&&E(W,e,r)}:E,z=function(t){var e=R[t]=S(A[C]);return e._k=t,e},B=H&&"symbol"==typeof A.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof A},Y=function(t,e,n){return t===W&&Y(U,e,n),g(t),e=m(e,!0),g(n),o(R,e)?(n.enumerable?(o(t,L)&&t[L][e]&&(t[L][e]=!1),n=S(n,{enumerable:O(0,!1)})):(o(t,L)||E(t,L,O(1,{})),t[L][e]=!0),K(t,e,n)):E(t,e,n)},Q=function(t,e){g(t);for(var n,r=b(e=x(e)),o=0,u=r.length;u>o;)Y(t,n=r[o++],e[n]);return t},V=function(t,e){return void 0===e?S(t):Q(S(t),e)},X=function(t){var e=q.call(this,t=m(t,!0));return!(this===W&&o(R,t)&&!o(U,t))&&(!(e||!o(this,t)||!o(R,t)||o(this,L)&&this[L][t])||e)},Z=function(t,e){if(t=x(t),e=m(e,!0),t!==W||!o(R,e)||o(U,e)){var n=k(t,e);return!n||!o(R,e)||o(t,L)&&t[L][e]||(n.enumerable=!0),n}},$=function(t){for(var e,n=F(x(t)),r=[],u=0;n.length>u;)o(R,e=n[u++])||e==L||e==c||r.push(e);return r},tt=function(t){for(var e,n=t===W,r=F(n?U:x(t)),u=[],i=0;r.length>i;)!o(R,e=r[i++])||n&&!o(W,e)||u.push(R[e]);return u};H||(A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===W&&e.call(U,n),o(this,L)&&o(this[L],t)&&(this[L][t]=!1),K(this,t,O(1,n))};return u&&G&&K(W,t,{configurable:!0,set:e}),z(t)},f(A[C],"toString",function(){return this._k}),j.f=Z,M.f=Y,n(77).f=w.f=$,n(74).f=X,n(73).f=tt,u&&!n(43)&&f(W,"propertyIsEnumerable",X,!0),y.f=function(t){return z(d(t))}),i(i.G+i.W+i.F*!H,{Symbol:A});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)d(et[nt++]);for(var et=P(d.store),nt=0;et.length>nt;)h(et[nt++]);i(i.S+i.F*!H,"Symbol",{for:function(t){return o(D,t+="")?D[t]:D[t]=A(t)},keyFor:function(t){if(B(t))return v(D,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){G=!0},useSimple:function(){G=!1}}),i(i.S+i.F*!H,"Object",{create:V,defineProperty:Y,defineProperties:Q,getOwnPropertyDescriptor:Z,getOwnPropertyNames:$,getOwnPropertySymbols:tt}),I&&i(i.S+i.F*(!H||a(function(){var t=A();return"[null]"!=T([t])||"{}"!=T({a:t})||"{}"!=T(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!B(t)){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return e=r[1],"function"==typeof e&&(n=e),!n&&_(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!B(e))return e}),r[1]=e,T.apply(I,r)}}}),A[C][N]||n(12)(A[C],N,A[C].valueOf),l(A,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){var r=n(33)("meta"),o=n(15),u=n(30),i=n(13).f,f=0,c=Object.isExtensible||function(){return!0},a=!n(18)(function(){return c(Object.preventExtensions({}))}),s=function(t){i(t,r,{value:{i:"O"+ ++f,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!u(t,r)){if(!c(t))return"F";if(!e)return"E";s(t)}return t[r].i},p=function(t,e){if(!u(t,r)){if(!c(t))return!0;if(!e)return!1;s(t)}return t[r].w},d=function(t){return a&&y.NEED&&c(t)&&!u(t,r)&&s(t),t},y=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:d}},function(t,e,n){var r=n(8),o=n(9),u=n(43),i=n(65),f=n(13).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=u?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||f(e,t,{value:i.f(t)})}},function(t,e,n){var r=n(49),o=n(51);t.exports=function(t,e){for(var n,u=o(t),i=r(u),f=i.length,c=0;f>c;)if(u[n=i[c++]]===e)return n}},function(t,e,n){var r=n(49),o=n(73),u=n(74);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var i,f=n(t),c=u.f,a=0;f.length>a;)c.call(t,i=f[a++])&&e.push(i);return e}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(53);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(51),o=n(77).f,u={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],f=function(t){try{return o(t)}catch(t){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==u.call(t)?f(t):o(r(t))}},function(t,e,n){var r=n(50),o=n(57).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(74),o=n(21),u=n(51),i=n(20),f=n(30),c=n(16),a=Object.getOwnPropertyDescriptor;e.f=n(17)?a:function(t,e){if(t=u(t),e=i(e,!0),c)try{return a(t,e)}catch(t){}if(f(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e){},function(t,e,n){n(70)("asyncIterator")},function(t,e,n){n(70)("observable")},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(83),u=r(o),i=n(87),f=r(i),c=n(36),a=r(c);e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":(0,a.default)(e)));t.prototype=(0,f.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(u.default?(0,u.default)(t,e):t.__proto__=e)}},function(t,e,n){t.exports={default:n(84),__esModule:!0}},function(t,e,n){n(85),t.exports=n(9).Object.setPrototypeOf},function(t,e,n){var r=n(7);r(r.S,"Object",{setPrototypeOf:n(86).set})},function(t,e,n){var r=n(15),o=n(14),u=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n(10)(Function.call,n(78).f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return u(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:u}},function(t,e,n){t.exports={default:n(88),__esModule:!0}},function(t,e,n){n(89);var r=n(9).Object;t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){var r=n(7);r(r.S,"Object",{create:n(47)})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(24),u=r(o),i=n(2),f=r(i),c=n(3),a=r(c),s=n(35),l=r(s),p=n(82),d=r(p),y=n(22),h=r(y),v=function(t){function e(){return(0,f.default)(this,e),(0,l.default)(this,(e.__proto__||(0,u.default)(e)).apply(this,arguments))}return(0,d.default)(e,t),(0,a.default)(e,[{key:"put",value:function(t){this.dataStore.unshift(t)}},{key:"afterHit",value:function(t){var e=this.dataStore;t.increaseFrequency(),t.updateUsedTime(),e.sort(function(t,e){return t.frequency===e.frequency?t.usedAt-e.usedAt:t.frequency-e.frequency})}}]),e}(h.default);e.default=v}])});