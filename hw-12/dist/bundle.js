!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=34)}([function(t,e,n){"use strict";e.__esModule=!0,e.extend=s,e.indexOf=function(t,e){for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return n;return-1},e.escapeExpression=function(t){if("string"!=typeof t){if(t&&t.toHTML)return t.toHTML();if(null==t)return"";if(!t)return t+"";t=""+t}if(!i.test(t))return t;return t.replace(o,a)},e.isEmpty=function(t){return!t&&0!==t||!(!u(t)||0!==t.length)},e.createFrame=function(t){var e=s({},t);return e._parent=t,e},e.blockParams=function(t,e){return t.path=e,t},e.appendContextPath=function(t,e){return(t?t+".":"")+e};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},o=/[&<>"'`=]/g,i=/[&<>"'`=]/;function a(t){return r[t]}function s(t){for(var e=1;e<arguments.length;e++)for(var n in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],n)&&(t[n]=arguments[e][n]);return t}var c=Object.prototype.toString;e.toString=c;var l=function(t){return"function"==typeof t};l(/x/)&&(e.isFunction=l=function(t){return"function"==typeof t&&"[object Function]"===c.call(t)}),e.isFunction=l;var u=Array.isArray||function(t){return!(!t||"object"!=typeof t)&&"[object Array]"===c.call(t)};e.isArray=u},function(t,e,n){"use strict";e.__esModule=!0;var r=["description","fileName","lineNumber","message","name","number","stack"];function o(t,e){var n=e&&e.loc,i=void 0,a=void 0;n&&(t+=" - "+(i=n.start.line)+":"+(a=n.start.column));for(var s=Error.prototype.constructor.call(this,t),c=0;c<r.length;c++)this[r[c]]=s[r[c]];Error.captureStackTrace&&Error.captureStackTrace(this,o);try{n&&(this.lineNumber=i,Object.defineProperty?Object.defineProperty(this,"column",{value:a,enumerable:!0}):this.column=a)}catch(t){}}o.prototype=new Error,e.default=o,t.exports=e.default},function(t,e,n){"use strict";var r,o,i,a=n(26),s="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function c(){i=!1}function l(t){if(t){if(t!==r){if(t.length!==s.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter(function(t,e,n){return e!==n.lastIndexOf(t)});if(e.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. These characters were not unique: "+e.join(", "));r=t,c()}}else r!==s&&(r=s,c())}function u(){return i||(i=function(){r||l(s);for(var t,e=r.split(""),n=[],o=a.nextValue();e.length>0;)o=a.nextValue(),t=Math.floor(o*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return r||s},characters:function(t){return l(t),r},seed:function(t){a.seed(t),o!==t&&(c(),o=t)},lookup:function(t){return u()[t]},shuffled:u}},function(t,e,n){var r=n(8);t.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(t,e,n,r,o){var i,a=null!=e?e:t.nullContext||{},s=n.helperMissing,c=t.escapeExpression;return'<li class="note-list__item" data-id="'+c("function"==typeof(i=null!=(i=n.id||(null!=e?e.id:e))?i:s)?i.call(a,{name:"id",hash:{},data:o}):i)+'">\r\n  <div class="note">\r\n    <div class="note__content">\r\n      <h2 class="note__title">'+c("function"==typeof(i=null!=(i=n.title||(null!=e?e.title:e))?i:s)?i.call(a,{name:"title",hash:{},data:o}):i)+'</h2>\r\n      <p class="note__body">'+c("function"==typeof(i=null!=(i=n.body||(null!=e?e.body:e))?i:s)?i.call(a,{name:"body",hash:{},data:o}):i)+'</p>\r\n    </div>\r\n    <footer class="note__footer">\r\n      <section class="note__section">\r\n        <button class="action" data-action="decrease-priority">\r\n          <i class="material-icons action__icon">expand_more</i>\r\n        </button>\r\n        <button class="action" data-action="increase-priority">\r\n          <i class="material-icons action__icon">expand_less</i>\r\n        </button>\r\n        <span class="note__priority">Priority: '+c("function"==typeof(i=null!=(i=n.priority||(null!=e?e.priority:e))?i:s)?i.call(a,{name:"priority",hash:{},data:o}):i)+'</span>\r\n      </section>\r\n      <section class="note__section">\r\n        <button class="action" data-action="edit-note">\r\n          <i class="material-icons action__icon">edit</i>\r\n        </button>\r\n        <button class="action" data-action="delete-note">\r\n          <i class="material-icons action__icon">delete</i>\r\n        </button>\r\n      </section>\r\n    </footer>\r\n  </div>\r\n</li>'},useData:!0})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.HandlebarsEnvironment=l;var o=n(0),i=r(n(1)),a=n(10),s=n(18),c=r(n(20));e.VERSION="4.1.2";e.COMPILER_REVISION=7;e.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};function l(t,e,n){this.helpers=t||{},this.partials=e||{},this.decorators=n||{},a.registerDefaultHelpers(this),s.registerDefaultDecorators(this)}l.prototype={constructor:l,logger:c.default,log:c.default.log,registerHelper:function(t,e){if("[object Object]"===o.toString.call(t)){if(e)throw new i.default("Arg not supported with multiple helpers");o.extend(this.helpers,t)}else this.helpers[t]=e},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,e){if("[object Object]"===o.toString.call(t))o.extend(this.partials,t);else{if(void 0===e)throw new i.default('Attempting to register a partial called "'+t+'" as undefined');this.partials[t]=e}},unregisterPartial:function(t){delete this.partials[t]},registerDecorator:function(t,e){if("[object Object]"===o.toString.call(t)){if(e)throw new i.default("Arg not supported with multiple decorators");o.extend(this.decorators,t)}else this.decorators[t]=e},unregisterDecorator:function(t){delete this.decorators[t]}};var u=c.default.log;e.log=u,e.createFrame=o.createFrame,e.logger=c.default},function(t,e,n){"use strict";t.exports=n(25)},function(t){t.exports=[{id:"XWaQXcbk0",title:"JavaScript essentials",body:"Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc",priority:2},{id:"pkXzyRp1P",title:"Refresh HTML and CSS",body:"Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.",priority:1},{id:"QMom9q4Ku",title:"Get comfy with Frontend frameworks",body:"First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.",priority:1},{id:"k2k0UrjZG",title:"Winter clothes",body:"Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",priority:0}]},function(t,e,n){},function(t,e,n){t.exports=n(9).default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}e.__esModule=!0;var i=o(n(4)),a=r(n(21)),s=r(n(1)),c=o(n(0)),l=o(n(22)),u=r(n(23));function d(){var t=new i.HandlebarsEnvironment;return c.extend(t,i),t.SafeString=a.default,t.Exception=s.default,t.Utils=c,t.escapeExpression=c.escapeExpression,t.VM=l,t.template=function(e){return l.template(e,t)},t}var f=d();f.create=d,u.default(f),f.default=f,e.default=f,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.registerDefaultHelpers=function(t){o.default(t),i.default(t),a.default(t),s.default(t),c.default(t),l.default(t),u.default(t)};var o=r(n(11)),i=r(n(12)),a=r(n(13)),s=r(n(14)),c=r(n(15)),l=r(n(16)),u=r(n(17))},function(t,e,n){"use strict";e.__esModule=!0;var r=n(0);e.default=function(t){t.registerHelper("blockHelperMissing",function(e,n){var o=n.inverse,i=n.fn;if(!0===e)return i(this);if(!1===e||null==e)return o(this);if(r.isArray(e))return e.length>0?(n.ids&&(n.ids=[n.name]),t.helpers.each(e,n)):o(this);if(n.data&&n.ids){var a=r.createFrame(n.data);a.contextPath=r.appendContextPath(n.data.contextPath,n.name),n={data:a}}return i(e,n)})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var r,o=n(0),i=n(1),a=(r=i)&&r.__esModule?r:{default:r};e.default=function(t){t.registerHelper("each",function(t,e){if(!e)throw new a.default("Must pass iterator to #each");var n=e.fn,r=e.inverse,i=0,s="",c=void 0,l=void 0;function u(e,r,i){c&&(c.key=e,c.index=r,c.first=0===r,c.last=!!i,l&&(c.contextPath=l+e)),s+=n(t[e],{data:c,blockParams:o.blockParams([t[e],e],[l+e,null])})}if(e.data&&e.ids&&(l=o.appendContextPath(e.data.contextPath,e.ids[0])+"."),o.isFunction(t)&&(t=t.call(this)),e.data&&(c=o.createFrame(e.data)),t&&"object"==typeof t)if(o.isArray(t))for(var d=t.length;i<d;i++)i in t&&u(i,i,i===t.length-1);else{var f=void 0;for(var p in t)t.hasOwnProperty(p)&&(void 0!==f&&u(f,i-1),f=p,i++);void 0!==f&&u(f,i-1,!0)}return 0===i&&(s=r(this)),s})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var r,o=n(1),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(t){t.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new i.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var r=n(0);e.default=function(t){t.registerHelper("if",function(t,e){return r.isFunction(t)&&(t=t.call(this)),!e.hash.includeZero&&!t||r.isEmpty(t)?e.inverse(this):e.fn(this)}),t.registerHelper("unless",function(e,n){return t.helpers.if.call(this,e,{fn:n.inverse,inverse:n.fn,hash:n.hash})})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){t.registerHelper("log",function(){for(var e=[void 0],n=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)e.push(arguments[r]);var o=1;null!=n.hash.level?o=n.hash.level:n.data&&null!=n.data.level&&(o=n.data.level),e[0]=o,t.log.apply(t,e)})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){t.registerHelper("lookup",function(t,e){return t?"constructor"!==e||t.propertyIsEnumerable(e)?t[e]:void 0:t})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var r=n(0);e.default=function(t){t.registerHelper("with",function(t,e){r.isFunction(t)&&(t=t.call(this));var n=e.fn;if(r.isEmpty(t))return e.inverse(this);var o=e.data;return e.data&&e.ids&&((o=r.createFrame(e.data)).contextPath=r.appendContextPath(e.data.contextPath,e.ids[0])),n(t,{data:o,blockParams:r.blockParams([t],[o&&o.contextPath])})})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.registerDefaultDecorators=function(t){i.default(t)};var r,o=n(19),i=(r=o)&&r.__esModule?r:{default:r}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(0);e.default=function(t){t.registerDecorator("inline",function(t,e,n,o){var i=t;return e.partials||(e.partials={},i=function(o,i){var a=n.partials;n.partials=r.extend({},a,e.partials);var s=t(o,i);return n.partials=a,s}),e.partials[o.args[0]]=o.fn,i})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var r=n(0),o={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(t){if("string"==typeof t){var e=r.indexOf(o.methodMap,t.toLowerCase());t=e>=0?e:parseInt(t,10)}return t},log:function(t){if(t=o.lookupLevel(t),"undefined"!=typeof console&&o.lookupLevel(o.level)<=t){var e=o.methodMap[t];console[e]||(e="log");for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];console[e].apply(console,r)}}};e.default=o,t.exports=e.default},function(t,e,n){"use strict";function r(t){this.string=t}e.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},e.default=r,t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.checkRevision=function(t){var e=t&&t[0]||1,n=s.COMPILER_REVISION;if(e!==n){if(e<n){var r=s.REVISION_CHANGES[n],o=s.REVISION_CHANGES[e];throw new a.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+o+").")}throw new a.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}},e.template=function(t,e){if(!e)throw new a.default("No environment passed to template");if(!t||!t.main)throw new a.default("Unknown template object: "+typeof t);t.main.decorator=t.main_d,e.VM.checkRevision(t.compiler);var n={strict:function(t,e){if(!(e in t))throw new a.default('"'+e+'" not defined in '+t);return t[e]},lookup:function(t,e){for(var n=t.length,r=0;r<n;r++)if(t[r]&&null!=t[r][e])return t[r][e]},lambda:function(t,e){return"function"==typeof t?t.call(e):t},escapeExpression:o.escapeExpression,invokePartial:function(n,r,i){i.hash&&(r=o.extend({},r,i.hash),i.ids&&(i.ids[0]=!0));n=e.VM.resolvePartial.call(this,n,r,i);var s=e.VM.invokePartial.call(this,n,r,i);null==s&&e.compile&&(i.partials[i.name]=e.compile(n,t.compilerOptions,e),s=i.partials[i.name](r,i));if(null!=s){if(i.indent){for(var c=s.split("\n"),l=0,u=c.length;l<u&&(c[l]||l+1!==u);l++)c[l]=i.indent+c[l];s=c.join("\n")}return s}throw new a.default("The partial "+i.name+" could not be compiled when running in runtime-only mode")},fn:function(e){var n=t[e];return n.decorator=t[e+"_d"],n},programs:[],program:function(t,e,n,r,o){var i=this.programs[t],a=this.fn(t);return e||o||r||n?i=c(this,t,a,e,n,r,o):i||(i=this.programs[t]=c(this,t,a)),i},data:function(t,e){for(;t&&e--;)t=t._parent;return t},merge:function(t,e){var n=t||e;return t&&e&&t!==e&&(n=o.extend({},e,t)),n},nullContext:Object.seal({}),noop:e.VM.noop,compilerInfo:t.compiler};function r(e){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=o.data;r._setup(o),!o.partial&&t.useData&&(i=function(t,e){e&&"root"in e||((e=e?s.createFrame(e):{}).root=t);return e}(e,i));var a=void 0,c=t.useBlockParams?[]:void 0;function l(e){return""+t.main(n,e,n.helpers,n.partials,i,c,a)}return t.useDepths&&(a=o.depths?e!=o.depths[0]?[e].concat(o.depths):o.depths:[e]),(l=u(t.main,l,n,o.depths||[],i,c))(e,o)}return r.isTop=!0,r._setup=function(r){r.partial?(n.helpers=r.helpers,n.partials=r.partials,n.decorators=r.decorators):(n.helpers=n.merge(r.helpers,e.helpers),t.usePartial&&(n.partials=n.merge(r.partials,e.partials)),(t.usePartial||t.useDecorators)&&(n.decorators=n.merge(r.decorators,e.decorators)))},r._child=function(e,r,o,i){if(t.useBlockParams&&!o)throw new a.default("must pass block params");if(t.useDepths&&!i)throw new a.default("must pass parent depths");return c(n,e,t[e],r,0,o,i)},r},e.wrapProgram=c,e.resolvePartial=function(t,e,n){t?t.call||n.name||(n.name=t,t=n.partials[t]):t="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name];return t},e.invokePartial=function(t,e,n){var r=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var i=void 0;n.fn&&n.fn!==l&&function(){n.data=s.createFrame(n.data);var t=n.fn;i=n.data["partial-block"]=function(e){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=s.createFrame(n.data),n.data["partial-block"]=r,t(e,n)},t.partials&&(n.partials=o.extend({},n.partials,t.partials))}();void 0===t&&i&&(t=i);if(void 0===t)throw new a.default("The partial "+n.name+" could not be found");if(t instanceof Function)return t(e,n)},e.noop=l;var r,o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(1),a=(r=i)&&r.__esModule?r:{default:r},s=n(4);function c(t,e,n,r,o,i,a){function s(e){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],s=a;return!a||e==a[0]||e===t.nullContext&&null===a[0]||(s=[e].concat(a)),n(t,e,t.helpers,t.partials,o.data||r,i&&[o.blockParams].concat(i),s)}return(s=u(n,s,t,a,r,i)).program=e,s.depth=a?a.length:0,s.blockParams=o||0,s}function l(){return""}function u(t,e,n,r,i,a){if(t.decorator){var s={};e=t.decorator(e,s,n,r&&r[0],i,a,r),o.extend(e,s)}return e}},function(t,e,n){"use strict";(function(n){e.__esModule=!0,e.default=function(t){var e=void 0!==n?n:window,r=e.Handlebars;t.noConflict=function(){return e.Handlebars===t&&(e.Handlebars=r),t}},t.exports=e.default}).call(this,n(24))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r=n(2),o=n(27),i=n(31),a=n(32)||0;function s(){return o(a)}t.exports=s,t.exports.generate=s,t.exports.seed=function(e){return r.seed(e),t.exports},t.exports.worker=function(e){return a=e,t.exports},t.exports.characters=function(t){return void 0!==t&&r.characters(t),r.shuffled()},t.exports.isValid=i},function(t,e,n){"use strict";var r=1;t.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(t){r=t}}},function(t,e,n){"use strict";var r,o,i=n(28),a=(n(2),1459707606518),s=6;t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-a));return n===o?r++:(r=0,o=n),e+=i(s),e+=i(t),r>0&&(e+=i(r)),e+=i(n)}},function(t,e,n){"use strict";var r=n(2),o=n(29),i=n(30);t.exports=function(t){for(var e,n=0,a="";!e;)a+=i(o,r.get(),1),e=t<Math.pow(16,n+1),n++;return a}},function(t,e,n){"use strict";var r,o="object"==typeof window&&(window.crypto||window.msCrypto);r=o&&o.getRandomValues?function(t){return o.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},t.exports=r},function(t,e){t.exports=function(t,e,n){var r=(2<<Math.log(e.length-1)/Math.LN2)-1,o=Math.ceil(1.6*r*n/e.length);n=+n;for(var i="";;)for(var a=t(o),s=0;s<o;s++){var c=a[s]&r;if(e[c]&&(i+=e[c]).length===n)return i}}},function(t,e,n){"use strict";var r=n(2);t.exports=function(t){return!(!t||"string"!=typeof t||t.length<6||new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t))}},function(t,e,n){"use strict";t.exports=0},function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(7);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var r,o=function(){return(o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},i=function(){return function(t){this.options=t}}();!function(t){t[t.Add=0]="Add",t[t.Remove=1]="Remove"}(r||(r={}));var a,s,c,l,u,d=function(){function t(){this.notifications=[]}return t.prototype.push=function(t){this.notifications.push(t),this.updateFn(t,r.Add,this.notifications)},t.prototype.splice=function(t,e){var n=this.notifications.splice(t,e)[0];this.updateFn(n,r.Remove,this.notifications)},t.prototype.indexOf=function(t){return this.notifications.indexOf(t)},t.prototype.onupdate=function(t){this.updateFn=t},t}(),f={types:[{type:"success",className:"notyf__toast--success",backgroundColor:"#3dc763",icon:{className:"notyf__icon--success",tagName:"i"}},{type:"error",className:"notyf__toast--error",backgroundColor:"#ed3d3d",icon:{className:"notyf__icon--error",tagName:"i"}}],duration:2e3,ripple:!0},p=function(){function t(){this.notifications=[];var t=document.createDocumentFragment(),e=this._createHTLMElement({tagName:"div",className:"notyf"});t.appendChild(e),document.body.appendChild(t),this.container=e,this.animationEndEventName=this._getAnimationEndEventName(),this._createA11yContainer()}return t.prototype.update=function(t,e){e===r.Add?this.addNotification(t):e===r.Remove&&this.removeNotification(t)},t.prototype.removeNotification=function(t){var e,n,r=this,o=this._popRenderedNotification(t);o&&((e=o.node).classList.add("notyf__toast--disappear"),e.addEventListener(this.animationEndEventName,n=function(t){t.target===e&&(e.removeEventListener(r.animationEndEventName,n),r.container.removeChild(e))}))},t.prototype.addNotification=function(t){var e=this._renderNotification(t);this.notifications.push({notification:t,node:e}),this._announce(t.options.message||"Notification")},t.prototype._renderNotification=function(t){var e=this._buildNotificationCard(t),n=t.options.className;return n&&e.classList.add(n),this.container.appendChild(e),e},t.prototype._popRenderedNotification=function(t){for(var e=-1,n=0;n<this.notifications.length&&e<0;n++)this.notifications[n].notification===t&&(e=n);if(-1!==e)return this.notifications.splice(e,1)[0]},t.prototype._buildNotificationCard=function(t){var e=t.options,n=e.icon,r=this._createHTLMElement({tagName:"div",className:"notyf__toast"}),o=this._createHTLMElement({tagName:"div",className:"notyf__ripple"}),i=this._createHTLMElement({tagName:"div",className:"notyf__wrapper"}),a=this._createHTLMElement({tagName:"div",className:"notyf__message"});a.innerHTML=e.message||"";var s=e.backgroundColor;if(n&&"object"==typeof n){var c=this._createHTLMElement({tagName:"div",className:"notyf__icon"}),l=this._createHTLMElement({tagName:n.tagName||"i",className:n.className,text:n.text});s&&(l.style.color=s),c.appendChild(l),i.appendChild(c)}return i.appendChild(a),r.appendChild(i),s&&(e.ripple?(o.style.backgroundColor=s,r.appendChild(o)):r.style.backgroundColor=s),r},t.prototype._createHTLMElement=function(t){var e=t.tagName,n=t.className,r=t.text,o=document.createElement(e);return n&&(o.className=n),o.textContent=r||null,o},t.prototype._createA11yContainer=function(){var t=this._createHTLMElement({tagName:"div",className:"notyf-announcer"});t.setAttribute("aria-atomic","true"),t.setAttribute("aria-live","polite"),t.style.border="0",t.style.clip="rect(0 0 0 0)",t.style.height="1px",t.style.margin="-1px",t.style.overflow="hidden",t.style.padding="0",t.style.position="absolute",t.style.width="1px",t.style.outline="0",document.body.appendChild(t),this.a11yContainer=t},t.prototype._announce=function(t){var e=this;this.a11yContainer.textContent="",setTimeout(function(){e.a11yContainer.textContent=t},100)},t.prototype._getAnimationEndEventName=function(){var t,e=document.createElement("_fake"),n={MozTransition:"animationend",OTransition:"oAnimationEnd",WebkitTransition:"webkitAnimationEnd",transition:"animationend"};for(t in n)if(void 0!==e.style[t])return n[t];return"animationend"},t}(),h=function(){function t(t){var e=this;this.notifications=new d,this.view=new p;var n=this.registerTypes(t);this.options=o({},f,t),this.options.types=n,this.notifications.onupdate(function(t,n){e.view.update(t,n)})}return t.prototype.error=function(t){var e=this.normalizeOptions("error",t);this.open(e)},t.prototype.success=function(t){var e=this.normalizeOptions("success",t);this.open(e)},t.prototype.open=function(t){var e=this.options.types.find(function(e){return e.type===t.type})||{},n=o({},e,t);n.ripple=void 0===n.ripple?this.options.ripple:n.ripple;var r=new i(n);this._pushNotification(r)},t.prototype._pushNotification=function(t){var e=this;this.notifications.push(t);var n=t.options.duration||this.options.duration;setTimeout(function(){var n=e.notifications.indexOf(t);e.notifications.splice(n,1)},n)},t.prototype.normalizeOptions=function(t,e){var n={type:t};return"string"==typeof e?n.message=e:"object"==typeof e&&(n=o({},n,e)),n},t.prototype.registerTypes=function(t){var e=(t&&t.types||[]).slice();return f.types.map(function(t){var n=e.findIndex(function(e){return e.type===t.type}),r=-1!==n?e.splice(n,1)[0]:{};return o({},t,r)}).concat(e)},t}(),v=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},m=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),y=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)},g=(a=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],s=function(){function t(e){var n=e.targetModal,r=e.triggers,o=void 0===r?[]:r,i=e.onShow,a=void 0===i?function(){}:i,s=e.onClose,c=void 0===s?function(){}:s,l=e.openTrigger,u=void 0===l?"data-micromodal-trigger":l,d=e.closeTrigger,f=void 0===d?"data-micromodal-close":d,p=e.disableScroll,h=void 0!==p&&p,m=e.disableFocus,g=void 0!==m&&m,b=e.awaitCloseAnimation,_=void 0!==b&&b,w=e.debugMode,x=void 0!==w&&w;v(this,t),this.modal=document.getElementById(n),this.config={debugMode:x,disableScroll:h,openTrigger:u,closeTrigger:f,onShow:a,onClose:c,awaitCloseAnimation:_,disableFocus:g},o.length>0&&this.registerTriggers.apply(this,y(o)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}return m(t,[{key:"registerTriggers",value:function(){for(var t=this,e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];n.filter(Boolean).forEach(function(e){e.addEventListener("click",function(){return t.showModal()})})}},{key:"showModal",value:function(){this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add("is-open"),this.setFocusToFirstNode(),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.onShow(this.modal)}},{key:"closeModal",value:function(){var t=this.modal;this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus(),this.config.onClose(this.modal),this.config.awaitCloseAnimation?this.modal.addEventListener("animationend",function e(){t.classList.remove("is-open"),t.removeEventListener("animationend",e,!1)},!1):t.classList.remove("is-open")}},{key:"closeModalById",value:function(t){this.modal=document.getElementById(t),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(t){if(this.config.disableScroll){var e=document.querySelector("body");switch(t){case"enable":Object.assign(e.style,{overflow:"",height:""});break;case"disable":Object.assign(e.style,{overflow:"hidden",height:"100vh"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(t){t.target.hasAttribute(this.config.closeTrigger)&&(this.closeModal(),t.preventDefault())}},{key:"onKeydown",value:function(t){27===t.keyCode&&this.closeModal(t),9===t.keyCode&&this.maintainFocus(t)}},{key:"getFocusableNodes",value:function(){var t=this.modal.querySelectorAll(a);return Array.apply(void 0,y(t))}},{key:"setFocusToFirstNode",value:function(){if(!this.config.disableFocus){var t=this.getFocusableNodes();t.length&&t[0].focus()}}},{key:"maintainFocus",value:function(t){var e=this.getFocusableNodes();if(this.modal.contains(document.activeElement)){var n=e.indexOf(document.activeElement);t.shiftKey&&0===n&&(e[e.length-1].focus(),t.preventDefault()),t.shiftKey||n!==e.length-1||(e[0].focus(),t.preventDefault())}else e[0].focus()}}]),t}(),c=null,l=function(t){if(!document.getElementById(t))return console.warn("MicroModal v0.3.2: ❗Seems like you have missed %c'"+t+"'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'+t+'"></div>'),!1},u=function(t,e){if(function(t){if(t.length<=0)console.warn("MicroModal v0.3.2: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>')}(t),!e)return!0;for(var n in e)l(n);return!0},{init:function(t){var e=Object.assign({},{openTrigger:"data-micromodal-trigger"},t),n=[].concat(y(document.querySelectorAll("["+e.openTrigger+"]"))),r=function(t,e){var n=[];return t.forEach(function(t){var r=t.attributes[e].value;void 0===n[r]&&(n[r]=[]),n[r].push(t)}),n}(n,e.openTrigger);if(!0!==e.debugMode||!1!==u(n,r))for(var o in r){var i=r[o];e.targetModal=o,e.triggers=[].concat(y(i)),new s(e)}},show:function(t,e){var n=e||{};n.targetModal=t,!0===n.debugMode&&!1===l(t)||(c=new s(n)).showModal()},close:function(t){t?c.closeModalById(t):c.closeModal()}}),b=n(3),_=n.n(b),w=function(t){try{var e=localStorage.getItem(t);return null===e?void 0:JSON.parse(e)}catch(t){console.error("Got error: ",t)}},x=function(t,e){try{var n=JSON.stringify(e);localStorage.setItem(t,n)}catch(t){console.error("Set error: ",t)}},M=function(t){try{localStorage.removeItem(t)}catch(t){console.error("Set error: ",t)}},E=function(t){return t.map(function(t){return _()(t)}).join("")},k=function(t,e){t.innerHTML="";var n=w("notes");if(n)return t.insertAdjacentHTML("beforeend",E(n));t.insertAdjacentHTML("beforeend",E(e))},N=function(t,e){t.innerHTML="",t.insertAdjacentHTML("beforeend",E(e))},C=function(t,e){var n=function(t){return _()(t)}(e);t.insertAdjacentHTML("beforeend",n)},T=function(t){return t.closest(".note-list__item")},P=function(t){t.remove()},S=function(){return{list:document.querySelector(".note-list"),openModalBtn:document.querySelector(".page-header__button"),formEditor:document.querySelector(".note-editor"),formSearch:document.querySelector(".search-form")}},L=0,O="Заметка успешно удалена",j="Заметка успешно добавлена 🎉",A="Заполните поля редактора",I="delete-note",H=n(5),F=n.n(H);function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var D=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._notes=e}var e,n,r;return e=t,(n=[{key:"storageItems",value:function(){var t=w("notes");return t&&(this._notes=t),this._notes}},{key:"addItem",value:function(t,e){var n=this;return new Promise(function(r,o){setTimeout(function(){var i={id:F.a.generate(),title:t,body:e,priority:L};n.saveNote(i).catch(console.error()),r(i),o("Error")},0)})}},{key:"saveNote",value:function(t){var e=this;return new Promise(function(n,r){setTimeout(function(){e.storageItems().push(t),x("notes",e._notes),n(t),r("Error")},0)})}},{key:"findNoteById",value:function(t){return this.storageItems().find(function(e){return e.id===t})}},{key:"deleteNote",value:function(t){var e=this;return new Promise(function(n,r){setTimeout(function(){var o=e.findNoteById(t);o&&(x("notes",e.storageItems().filter(function(e){return e.id!==t})),n(o)),r("Error")},0)})}},{key:"updateNotePriority",value:function(t,e){var n=this;return new Promise(function(r,o){setTimeout(function(){var i=n.findNoteById(t);i&&(i.priority=e,x("notes",n._notes),r(i)),o("Error")},0)})}},{key:"filterNotesByQuery",value:function(t){var e=this;return new Promise(function(n,r){setTimeout(function(){var o=e.storageItems().filter(function(e){return e.title.toLowerCase().includes(t.toLowerCase())||e.body.toLowerCase().includes(t.toLowerCase())});n(o),r("Error")},0)})}},{key:"filterNotesByPriority",value:function(t){var e=this;return new Promise(function(n,r){setTimeout(function(){var o=e.storageItems().filter(function(e){return e.priority===t});n(o),r("Error")},0)})}},{key:"updateNoteContent",value:function(t,e){var n=this;return new Promise(function(r,o){setTimeout(function(){var i=n.findNoteById(t);i&&(Object.assign(i,e),x("notes",n._notes),r(i)),o("Error")},0)})}},{key:"notes",get:function(){return this._notes}}])&&R(e.prototype,n),r&&R(e,r),t}(),B=n(6);n(33);function V(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var q=new D(B),G=new h,K=S();k(K.list,q._notes);K.formEditor.addEventListener("submit",function(t){t.preventDefault();var e=V(t.target.elements,2),n=e[0],r=e[1];if(""===n.value.trim()||""===r.value.trim())return G.error(A);var o=n.value,i=r.value;q.addItem(o,i).then(function(t){return C(K.list,t)}).catch(console.error()),G.success(j),M("noteInput"),M("noteTextarea"),t.currentTarget.reset(),g.close("note-editor-modal")}),K.formEditor.addEventListener("keyup",function(t){var e=V(t.currentTarget.elements,2),n=e[0],r=e[1];x("noteInput",n.value),x("noteTextarea",r.value)}),K.list.addEventListener("click",function(t){var e=t.target;if("I"===e.nodeName&&e.closest("button").dataset.action===I){var n=T(e);return q.deleteNote(n.dataset.id),P(n),G.success(O)}}),K.formSearch.addEventListener("input",function(t){q.filterNotesByQuery(t.target.value).then(function(t){return N(K.list,t)}).catch(console.error())}),K.openModalBtn.addEventListener("click",function(){g.show("note-editor-modal");var t=w("noteInput"),e=w("noteTextarea");if(t||e){var n=V(K.formEditor.elements,2),r=n[0],o=n[1];r.value=t,o.value=e}})}]);
//# sourceMappingURL=bundle.js.map