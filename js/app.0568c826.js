(function(e){function t(t){for(var o,s,i=t[0],c=t[1],l=t[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(o=!1)}o&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},a={app:0},r=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},5465:function(e,t,n){},a5d2:function(e,t,n){"use strict";var o=n("5465"),a=n.n(o);a.a},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",{staticClass:"heading"},[e._v("Fudo Ipsum")]),n("span",[e._v("Lorem Ipsum for people of culture")]),n("form",{staticClass:"selection-form"},[n("label",{staticClass:"label-heading",attrs:{for:"types"}},[e._v("Select types you need")]),n("div",{staticClass:"checkboxes"},[n("label",{staticClass:"label-checkbox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.rawOptions,expression:"rawOptions"}],attrs:{name:"raw-option",type:"checkbox",value:"waifu"},domProps:{checked:Array.isArray(e.rawOptions)?e._i(e.rawOptions,"waifu")>-1:e.rawOptions},on:{change:function(t){var n=e.rawOptions,o=t.target,a=!!o.checked;if(Array.isArray(n)){var r="waifu",s=e._i(n,r);o.checked?s<0&&(e.rawOptions=n.concat([r])):s>-1&&(e.rawOptions=n.slice(0,s).concat(n.slice(s+1)))}else e.rawOptions=a}}}),n("span",{staticClass:"label-text"},[e._v("Waifu")])]),n("label",{staticClass:"label-checkbox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.rawOptions,expression:"rawOptions"}],attrs:{name:"raw-option",type:"checkbox",value:"husbando"},domProps:{checked:Array.isArray(e.rawOptions)?e._i(e.rawOptions,"husbando")>-1:e.rawOptions},on:{change:function(t){var n=e.rawOptions,o=t.target,a=!!o.checked;if(Array.isArray(n)){var r="husbando",s=e._i(n,r);o.checked?s<0&&(e.rawOptions=n.concat([r])):s>-1&&(e.rawOptions=n.slice(0,s).concat(n.slice(s+1)))}else e.rawOptions=a}}}),n("span",{staticClass:"label-text"},[e._v("Husbando")])])]),n("label",{staticClass:"label-length"},[n("span",{staticClass:"label-text"},[e._v("Length (words)")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.options.length,expression:"options.length"}],staticClass:"textbox",attrs:{name:"length",type:"number",value:"0"},domProps:{value:e.options.length},on:{input:function(t){t.target.composing||e.$set(e.options,"length",t.target.value)}}})]),n("button",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.generateLorem(t)}}},[e._v("Generate")])]),e.loremIpsum?n("div",{staticClass:"output flex flex-wrap justify-center"},[n("p",{staticClass:"w-full"},[e._v(e._s(e.loremIpsum))]),n("button",{staticClass:"button",on:{click:e.copyToClipboard}},[e._v("Copy to clipboard")])]):e._e()])},r=[],s=(n("caad"),n("2532"),n("d4ec")),i=n("bee2"),c=n("262e"),l=n("2caf"),u=n("9ab4"),p=n("60a3"),f=(n("99af"),n("a15b"),n("2909")),d=["Skadi","Amiya","Darknesss","Blue Poison"],b=["Silver Ash","Flamebringer","Sasuke","Itachi"],h=function(e){var t=[],n=[];e.waifu&&(t=[].concat(Object(f["a"])(t),d)),e.husbando&&(t=[].concat(Object(f["a"])(t),b));for(var o=e.length||10,a=0;a<o;a+=1)n.push(t[Math.floor(Math.random()*t.length)]);return n.join(" ")},v=function(e){Object(c["a"])(n,e);var t=Object(l["a"])(n);function n(){var e;return Object(s["a"])(this,n),e=t.apply(this,arguments),e.loremIpsum="",e.rawOptions=[],e.options={waifu:!1,husbando:!1,length:20},e}return Object(i["a"])(n,[{key:"onRawOptionsChanged",value:function(e){e.includes("waifu")?this.options.waifu=!0:this.options.waifu=!1,e.includes("husbando")?this.options.husbando=!0:this.options.husbando=!1}},{key:"generateLorem",value:function(){this.loremIpsum=h(this.options)}},{key:"copyToClipboard",value:function(){navigator.clipboard.writeText(this.loremIpsum)}}]),n}(p["b"]);Object(u["a"])([Object(p["c"])("rawOptions")],v.prototype,"onRawOptionsChanged",null),v=Object(u["a"])([p["a"]],v);var w=v,g=w,m=(n("a5d2"),n("2877")),O=Object(m["a"])(g,a,r,!1,null,null,null),y=O.exports,k=n("9483");Object(k["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(y)}}).$mount("#app")}});
//# sourceMappingURL=app.0568c826.js.map