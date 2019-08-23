!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=12)}([function(t){t.exports=[{id:"XWaQXcbk0",title:"JavaScript essentials",body:"Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc",priority:2},{id:"pkXzyRp1P",title:"Refresh HTML and CSS",body:"Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.",priority:1},{id:"QMom9q4Ku",title:"Get comfy with Frontend frameworks",body:"First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.",priority:1},{id:"k2k0UrjZG",title:"Winter clothes",body:"Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",priority:0}]},function(t,e,n){"use strict";var o,r,s,i=n(5),c="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function a(){s=!1}function u(t){if(t){if(t!==o){if(t.length!==c.length)throw new Error("Custom alphabet for shortid must be "+c.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter(function(t,e,n){return e!==n.lastIndexOf(t)});if(e.length)throw new Error("Custom alphabet for shortid must be "+c.length+" unique characters. These characters were not unique: "+e.join(", "));o=t,a()}}else o!==c&&(o=c,a())}function d(){return s||(s=function(){o||u(c);for(var t,e=o.split(""),n=[],r=i.nextValue();e.length>0;)r=i.nextValue(),t=Math.floor(r*e.length),n.push(e.splice(t,1)[0]);return n.join("")}())}t.exports={get:function(){return o||c},characters:function(t){return u(t),o},seed:function(t){i.seed(t),r!==t&&(a(),r=t)},lookup:function(t){return d()[t]},shuffled:d}},function(t,e,n){"use strict";t.exports=n(4)},function(t,e,n){},function(t,e,n){"use strict";var o=n(1),r=n(6),s=n(10),i=n(11)||0;function c(){return r(i)}t.exports=c,t.exports.generate=c,t.exports.seed=function(e){return o.seed(e),t.exports},t.exports.worker=function(e){return i=e,t.exports},t.exports.characters=function(t){return void 0!==t&&o.characters(t),o.shuffled()},t.exports.isValid=s},function(t,e,n){"use strict";var o=1;t.exports={nextValue:function(){return(o=(9301*o+49297)%233280)/233280},seed:function(t){o=t}}},function(t,e,n){"use strict";var o,r,s=n(7),i=(n(1),1459707606518),c=6;t.exports=function(t){var e="",n=Math.floor(.001*(Date.now()-i));return n===r?o++:(o=0,r=n),e+=s(c),e+=s(t),o>0&&(e+=s(o)),e+=s(n)}},function(t,e,n){"use strict";var o=n(1),r=n(8),s=n(9);t.exports=function(t){for(var e,n=0,i="";!e;)i+=s(r,o.get(),1),e=t<Math.pow(16,n+1),n++;return i}},function(t,e,n){"use strict";var o,r="object"==typeof window&&(window.crypto||window.msCrypto);o=r&&r.getRandomValues?function(t){return r.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],n=0;n<t;n++)e.push(Math.floor(256*Math.random()));return e},t.exports=o},function(t,e){t.exports=function(t,e,n){var o=(2<<Math.log(e.length-1)/Math.LN2)-1,r=Math.ceil(1.6*o*n/e.length);n=+n;for(var s="";;)for(var i=t(r),c=0;c<r;c++){var a=i[c]&o;if(e[a]&&(s+=e[a]).length===n)return s}}},function(t,e,n){"use strict";var o=n(1);t.exports=function(t){return!(!t||"string"!=typeof t||t.length<6||new RegExp("[^"+o.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t))}},function(t,e,n){"use strict";t.exports=0},function(t,e,n){"use strict";n.r(e);n(3);const o={LOW:0,NORMAL:1,HIGH:2},r="edit",s="delete",i="expand_more",c="expand_less",a="delete-note",u="edit-note",d="increase-priority",l="decrease-priority";var f=n(2),p=n.n(f);class m{constructor(t){this._notes=t}get notes(){return this._notes}addItem(t,e){const n={id:p.a.generate(),title:t,body:e,priority:o.LOW};return this._notes.push(n),n}search(t){return this._notes.filter(e=>e.body.toLowerCase().includes(t.toLowerCase()))}saveNote(t){return this._notes.push(t),t}findNoteById(t){return this._notes.find(e=>e.id===t)}updateNotePriority(t,e){let n=this.findNoteById(t);return n.priority=e,n}filterNotesByQuery(t){let e=[];const n=this._notes.filter(e=>e.title.toLowerCase().includes(t.toLowerCase())||e.body.toLowerCase().includes(t.toLowerCase()));return e.push(n),e}filterNotesByPriority(t){let e=[];const n=this._notes.filter(e=>e.priority===t);return e.push(n),e}updateNoteContent(t,e){const n=this.findNoteById(t);n&&Object.assign(n,e)}deleteNote(t){let e=this.findNoteById(t);this._notes.splice(this._notes.indexOf(e),1)}}var h=n(0);const y=new m(h),g={list:document.querySelector(".note-list"),submitBtn:document.querySelector(".button"),formEditor:document.querySelector(".note-editor"),formSearch:document.querySelector(".search-form")},v=(t,e)=>{const n=document.createElement("button");n.classList.add("action"),n.dataset.action=`${t}`;const o=document.createElement("i");return o.classList.add("material-icons"),o.classList.add("action__icon"),o.textContent=`${e}`,n.appendChild(o),n},w=({id:t,title:e,body:n})=>{const f=document.createElement("li");f.classList.add("note-list__item"),f.dataset.id=t;const p=document.createElement("div");p.classList.add("note");const m=document.createElement("div");m.classList.add("note__content");const h=document.createElement("h2");h.classList.add("note__title"),h.textContent=e;const y=document.createElement("p");return y.classList.add("note__body"),y.textContent=n,p.appendChild(m),p.appendChild((()=>{const t=document.createElement("footer");t.classList.add("note__footer");const e=document.createElement("section");e.classList.add("note__section");const n=document.createElement("section");n.classList.add("note__section");const f=document.createElement("span");return f.classList.add("note__priority"),f.textContent=`Priority: ${o.LOW}`,e.append(v(l,i),v(d,c)),e.appendChild(f),t.append(e),n.append(v(u,r),v(a,s)),t.append(n),t})()),m.append(h,y),f.append(p),f},x=(t,e)=>{const n=e.map(t=>w(t));t.innerHTML="",t.append(...n)},b=new m(h);x(g.list,h),g.formEditor.addEventListener("submit",t=>{t.preventDefault();const[e,n]=t.target.elements;if(""===e.value.trim()||""===n.value.trim())return alert("Необходимо заполнить все поля!");const o=e.value,r=n.value,s=b.addItem(o,r),i=w(s);console.log(i),g.list.append(i),g.formEditor.reset()}),g.list.addEventListener("click",({target:t})=>{if("I"!==t.nodeName)return;t.closest("button").dataset.action===a&&(t=>{const e=t.closest(".note-list__item"),n=e.dataset.id;y.deleteNote(n),e.remove()})(t)}),g.formSearch.addEventListener("input",t=>{const e=b.search(t.target.value);x(g.list,e)})}]);
//# sourceMappingURL=bundle.js.map