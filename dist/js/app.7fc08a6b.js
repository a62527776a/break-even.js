(function(t){function e(e){for(var n,o,c=e[0],h=e[1],u=e[2],s=0,f=[];s<c.length;s++)o=c[s],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(n in h)Object.prototype.hasOwnProperty.call(h,n)&&(t[n]=h[n]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,c=1;c<r.length;c++){var h=r[c];0!==i[h]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},i={app:0},a=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="https://a62527776a.github.io/break-even.js/dist/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],h=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=h;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"02ba":function(t,e,r){},"318c":function(t,e,r){"use strict";r("9b43")},"9b43":function(t,e,r){},c51a:function(t,e,r){"use strict";r("02ba")},cd49:function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23");function i(t,e,r,i,a,o){var c=Object(n["l"])("HelloWorld");return Object(n["h"])(),Object(n["c"])(c,{msg:"Welcome to Your Vue.js + TypeScript App"})}r("b680"),r("99af");var a=Object(n["f"])(" whats this? "),o={class:"wqdqwdqw"};function c(t,e,r,i,c,h){return Object(n["h"])(),Object(n["d"])("main",null,[a,Object(n["o"])(Object(n["e"])("input",{type:"range","onUpdate:modelValue":e[0]||(e[0]=function(t){return i.price=t}),min:-2500,max:2500},null,512),[[n["n"],i.price]]),Object(n["e"])("div",null,"当前盈亏："+Object(n["m"])(i.price),1),Object(n["e"])("div",null,"最大盈亏："+Object(n["m"])(i.prdRandom.maxPrice),1),(Object(n["h"])(!0),Object(n["d"])(n["a"],null,Object(n["k"])(i.prdRandom.trasferWeightItems,(function(t){return Object(n["h"])(),Object(n["d"])("div",{key:t.id},[Object(n["e"])("div",null,"初始权重 "+Object(n["m"])(t.weight),1),Object(n["e"])("div",null,"平衡权重 "+Object(n["m"])(t.transferWeight),1),Object(n["e"])("div",null,"平衡权重比例 "+Object(n["m"])((t.transferWeight/i.prdRandom.totalTransferWeight*100).toFixed(2))+"%",1)])})),128)),Object(n["e"])("div",null,Object(n["m"])(i.prdRandom.totalTransferWeight),1),Object(n["e"])("div",o,[(Object(n["h"])(!0),Object(n["d"])(n["a"],null,Object(n["k"])(i.prdRandom.trasferWeightItems,(function(t){return Object(n["h"])(),Object(n["d"])("div",{class:"gggg",key:t.id,style:Object(n["g"])("background: ".concat(t.background,";width: ").concat(t.transferWeight/i.prdRandom.totalTransferWeight*800,"px"))},null,4)})),128))])])}var h=r("d4ec"),u=r("bee2"),l=(r("e9c4"),r("d3b7"),r("159b"),r("4e82"),r("a1e9")),s=r("5c40"),f={setup:function(){var t=function(){function t(e,r){Object(h["a"])(this,t),this.weightItems=[],this.price=0,this.maxPrice=0,this.totalWeight=0,this.totalTransferWeight=0,this.initWeightItem(e),this.maxPrice=r}return Object(u["a"])(t,[{key:"setPrice",set:function(t){this.price=t}},{key:"priceMatrix",get:function(){var t=this.price/this.maxPrice;return[0-t,1+t]}},{key:"trasferWeightItems",get:function(){var t=this,e=JSON.parse(JSON.stringify(this.weightItems));this.totalTransferWeight=0,e.forEach((function(e){e.transferWeight=e.weightRegion[0]*t.priceMatrix[0]+e.weightRegion[1]*t.priceMatrix[1]}));for(var r=e.length-1;r>=0;r--)0!=r&&(e[r].transferWeight=e[r].transferWeight-e[r-1].transferWeight),this.totalTransferWeight+=e[r].transferWeight;return e}},{key:"initWeightItem",value:function(t){var e=this;t=t.sort((function(t,e){return e.weight-t.weight}));var r=0;t.every((function(t){e.totalWeight=t.weight}));for(var n=0;n<t.length;n++)t[n].weightRegion=[r,t[n].weight+r],r=t[n].weight+r;this.weightItems=t}}]),t}(),e=Object(l["m"])(0),r=[{id:1,weight:1,background:"rgb(".concat(Math.floor(255*Math.random()),", ").concat(Math.floor(255*Math.random()),", ").concat(Math.floor(255*Math.random()),")"),weightScale:0,weightRegion:[0,0],transferWeight:0},{id:2,weight:9,background:"rgb(".concat(Math.floor(255*Math.random()),", ").concat(Math.floor(255*Math.random()),", ").concat(Math.floor(255*Math.random()),")"),weightScale:0,weightRegion:[0,0],transferWeight:0},{id:3,weight:30,background:"rgb(".concat(Math.floor(255*Math.random()),", ").concat(Math.floor(255*Math.random()),", ").concat(Math.floor(255*Math.random()),")"),weightScale:0,weightRegion:[0,0],transferWeight:0},{id:4,weight:60,background:"rgb(".concat(Math.floor(255*Math.random()),", ").concat(Math.floor(255*Math.random()),", ").concat(Math.floor(255*Math.random()),")"),weightScale:0,weightRegion:[0,0],transferWeight:0}],n=Object(l["l"])(new t(r,2e3));return Object(s["G"])((function(){n.setPrice=e.value})),{price:e,prdRandom:n}}},d=(r("c51a"),r("6b0d")),g=r.n(d);const b=g()(f,[["render",c],["__scopeId","data-v-11379aed"]]);var p=b,m={name:"",components:{HelloWorld:p},setup:function(){}};r("318c");const O=g()(m,[["render",i]]);var j=O;Object(n["b"])(j).mount("#app")}});
//# sourceMappingURL=app.7fc08a6b.js.map