parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Wa6v":[function(require,module,exports) {
"use strict";var e=document.querySelector("#time"),n=document.querySelector("#duration");function r(){if(n.value>60||"0"===n.value||""===n.value)return document.querySelector("#max-60").innerHTML="Valor no valido.";o(t(n.value)),document.querySelector("#init").style.display="none",document.querySelector("#btn-open").style.display="block",document.querySelector("#max-60").innerHTML=""}function t(e){for(var n=0;n<=60;n++)if(e==="".concat(n)){e=n;break}e||(e=30);for(var r=[],t=6,o=0;t<=11;o+=e)o>=60&&(o-=60,t++),o<10?r.push(t+":0"+o):r.push(t+":"+o);return r}function o(n){e.childElementCount>1&&(e.innerHTML="");for(var r=0,t=n.length;r<t;r++){var o=n[r],u=document.createElement("option");u.value=o,u.innerHTML=o,u.id=o,e.appendChild(u)}}document.querySelector("#btn-confirm-hours").addEventListener("click",r);
},{}],"nNxO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.dateNow=t;var e=new Date;function t(){var t;return t=e.getDate()<10?"0"+e.getDate():e.getDate(),e.getFullYear()+"-"+(e.getMonth()+1)+"-"+t}
},{}],"f5X3":[function(require,module,exports) {
"use strict";function e(e){document.querySelector("#alert-message").innerHTML="".concat(e),document.querySelector("#alert-message").style.color="#721c24",document.querySelector("#alert-message").style.display="block"}function t(){document.querySelector("#alert-message").innerHTML="",document.querySelector("#alert-message").style.display="none"}Object.defineProperty(exports,"__esModule",{value:!0}),exports.openAlert=e,exports.cleanAlert=t;
},{}],"oTJk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.openForm=a,exports.closeForm=d;var e=require("./utils/dateNow"),t=require("./utils/alert"),o=document.querySelector("#content-form"),r=document.querySelector("#name"),u=document.querySelector("#phone"),l=document.querySelector("#direction"),c=document.querySelector("#input-date"),n=document.querySelector("#time");function a(){o.style.display="block",o.style.top="0"}function d(){o.style.top="-100%",r.value="",u.value="",l.value="",c.value=(0,e.dateNow)(),n.value="--",(0,t.cleanAlert)()}
},{"./utils/dateNow":"nNxO","./utils/alert":"f5X3"}],"d6sW":[function(require,module,exports) {
"use strict";require("./utils/createHours");var e=require("./dinamicForm"),t=require("./utils/dateNow"),n=require("./utils/alert"),a=document.querySelector("#name"),o=document.querySelector("#phone"),l=document.querySelector("#direction"),c=document.querySelector("#input-date"),r=document.querySelector("#time"),u=document.querySelector("#list"),d=document.querySelector("#alert-message"),i=new Date,v=[];function m(t){v.push(t),s(),alert("cita registrada"),(0,e.closeForm)()}function s(){r.value="--";for(var e=[],t=0,n=v.length;t<n;t++){var a=v[t],o=document.getElementById("".concat(a.time));o.style.display="inline-block",document.querySelector("#input-date").value===a.date&&e.push(o)}for(var l=0,c=e.length;l<c;l++){e[l].style.display="none"}}function p(){return c.value&&"--"!==r.value&&l.value&&o.value&&a.value?a.value.length<6||o.value.length<6||l.value.length<6?(0,n.openAlert)("Intruduzca datos validos."):c.valueAsDate.getDate()+1<i.getDate()?(0,n.openAlert)("Fecha no valida."):(m({name:"".concat(a.value),phone:"".concat(o.value),direction:"".concat(l.value),date:c.value,time:"".concat(r.value)}),y(),a.value="",o.value="",l.value="",c.value=(0,t.dateNow)(),r.value="--",void(0,n.cleanAlert)()):(0,n.openAlert)("Complete todos los campos.")}function y(){for(var e=document.createElement("tr"),t=0,n=v.length;t<n;t++){var a=v[t];e.innerHTML="<td>".concat(a.name,"</td>\n        <td>").concat(a.phone,"</td>\n        <td>").concat(a.time,"</td>\n        <td>").concat(a.date,"</td>"),u.appendChild(e)}}c.min=(0,t.dateNow)(),c.value=(0,t.dateNow)(),c.addEventListener("change",s),document.querySelector("#btn-save").addEventListener("click",p),document.querySelector("#btn-open").addEventListener("click",e.openForm),document.querySelector("#btn-close").addEventListener("click",e.closeForm);
},{"./utils/createHours":"Wa6v","./dinamicForm":"oTJk","./utils/dateNow":"nNxO","./utils/alert":"f5X3"}]},{},["d6sW"], null)