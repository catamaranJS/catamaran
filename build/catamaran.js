!function e(t,n,r){function i(a,s){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+a+"'")}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return i(n?n:e)},c,c.exports,e,t,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=e("./core/events/Events"),s=r(a),u=e("./core/dom/DOM"),c=r(u),l=e("./ui/Carousel"),h=r(l),f=e("./ui/Phaser"),d=r(f),v=e("./ui/Animation"),p=r(v),y=e("./ui/AniDom"),m=r(y),w=e("../src/node_modules/tap.js/tap.js"),b=r(w);"undefined"==typeof console&&(window.console={log:function(){}});var A=function(){function e(){var t=void 0===arguments[0]?{usesPhaser:!1,components:{carousel:!1},vendor:{waypoints:!1,routie:!1,tap:!0}}:arguments[0];i(this,e),this.core={interval:{}},this.ui={two:{},components:{},Animation:{},AniDom:{}},this.vendor={},this.core.Events=s["default"],this.core.DOM=c["default"],this.ui.Animation=new p["default"],this.ui.AniDom=new m["default"],t.components.carousel&&(this.ui.components.Carousel=h["default"]),t.usesPhaser&&(this.ui.two.Phaser=d["default"]),t.vendor.tap&&(this.vendor.tap={},this.vendor.tap=b["default"]),console.log("                |\n               /|\\\n              / | \\\n             /  |  \\\n            /   |   \\\n           /    |    \\\n          /     |     \\\n         /      |      \\\n        /       |       \\\n       /________|        \\\n           _____|__    ___\\_\n    ______/ = = = =\\__/__/_/\n   /                      /\n  /\\_____________________/\n / /        /  /\n/_/        /__/\n \n CatamaranJS 0.01a by Brendon Smith http://bit.ly/catamaranJS")}return o(e,[{key:"extend",value:function(e,t){var n=t.split(".");parent=e;var r,i;for("CATAMARAN"==n[0]&&(n=n.slice(1)),r=n.length,i=0;r>i;i++)"undefined"==typeof parent[n[i]]&&(parent[n[i]]={}),parent=parent[n[i]];return parent}},{key:"isInteger",value:function(e){return(0^e)===e}},{key:"findCenter",value:function(e){return document.querySelector(e).offsetWidth/2}},{key:"getRandomArr",value:function(e){return Math.floor(Math.random()*e.length)}},{key:"isMobile",value:function(){switch(!0){case/Android/i.test(navigator.userAgent):return this._mobileOS="android",!0;case/webOS/i.test(navigator.userAgent):return this._mobileOS="webos",!0;case/iPhone/i.test(navigator.userAgent):return this._mobileOS="iphone",!0;case/iPad/i.test(navigator.userAgent):return this._mobileOS="ipad",!0;case/iPod/i.test(navigator.userAgent):return this._mobileOS="ipod",!0;case/BlackBerry/i.test(navigator.userAgent):return this._mobileOS="blackberry",!0;case/Windows Phone/i.test(navigator.userAgent):return this._mobileOS="windows",!0;default:return!1}}}]),e}();window.CATAMARAN=new A({usesPhaser:!0,components:{carousel:!0},vendor:{tap:!0}})},{"../src/node_modules/tap.js/tap.js":8,"./core/dom/DOM":2,"./core/events/Events":3,"./ui/AniDom":4,"./ui/Animation":5,"./ui/Carousel":6,"./ui/Phaser":7}],2:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(void 0===e||null===e)throw new TypeError("Cannot convert first argument to object");for(var t=Object(e),n=1;n<arguments.length;n++){var r=arguments[n];if(void 0!==r&&null!==r){r=Object(r);for(var i=Object.keys(Object(r)),o=0,a=i.length;a>o;o++){var s=i[o],u=Object.getOwnPropertyDescriptor(r,s);void 0!==u&&u.enumerable&&(t[s]=r[s])}}}return t}}),Array.from||(Array.from=function(){var e=Object.prototype.toString,t=function(t){return"function"==typeof t||"[object Function]"===e.call(t)},n=function(e){var t=Number(e);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t},r=Math.pow(2,53)-1,i=function(e){var t=n(e);return Math.min(Math.max(t,0),r)};return function(e){var n=this,r=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var o,a=arguments.length>1?arguments[1]:void 0;if("undefined"!=typeof a){if(!t(a))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(o=arguments[2])}for(var s,u=i(r.length),c=t(n)?Object(new n(u)):new Array(u),l=0;u>l;)s=r[l],c[l]=a?"undefined"==typeof o?a(s,l):a.call(o,s,l):s,l+=1;return c.length=u,c}}());var o=function(){function e(t){r(this,e);var n=document.querySelectorAll(t);this.length=n.length,this.children=[],Object.assign(this,n)}return i(e,[{key:"each",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,o=Array.from(this)[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value;e.call(a)}}catch(s){n=!0,r=s}finally{try{!t&&o["return"]&&o["return"]()}finally{if(n)throw r}}return this}},{key:"hide",value:function(){return this.each(function(){this.style.display="none"})}},{key:"show",value:function(){return this.each(function(){this.style.display="block"})}},{key:"onVisible",value:function(e){return this.each(function(){if(CATAMARAN.core.DOM.isVisible(this))e.call(this);else var t=setInterval(function(){CATAMARAN.core.DOM.isVisible(this)&&(e.call(this),clearInterval(t))},50)})}},{key:"addClass",value:function(e){return this.each(function(){this.classList.add(e)})}},{key:"removeClass",value:function(e){return this.each(function(){this.classList.remove(e)})}},{key:"hasClass",value:function(e){return this[0].classList.contains(e)}},{key:"on",value:function(e,t){return this.each(function(){this.addEventListener(e,t,!1)})}},{key:"off",value:function(e,t){return this.each(function(){this.removeEventListener(e,t,!1)})}},{key:"width",value:function(){var e=void 0===arguments[0]?null:arguments[0],t=e;return null==t?this[0].offsetWidth:this.each(function(){this.style.width=t})}},{key:"height",value:function(){var e=void 0===arguments[0]?null:arguments[0],t=e;return null==t?this[0].offsetHeight:this.each(function(){this.style.height=t})}},{key:"css",value:function(e){var t=e;return this.each(function(){for(var e in t)this.style[e]=t[e]})}}],[{key:"isVisible",value:function(e){return e.offsetWidth>0&&e.offsetHeight>0}}]),e}();t.exports=o},{}],3:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){r(this,e),this.topics={},this.hOP=this.topics.hasOwnProperty}return i(e,[{key:"subscribe",value:function(e,t){var n=this;this.hOP.call(this.topics,e)||(this.topics[e]=[]);var r=this.topics[e].push(t)-1;return{remove:function(){delete n.topics[e][r]}}}},{key:"publish",value:function(e,t){this.hOP.call(this.topics,e)&&this.topics[e].forEach(function(e){e(void 0!=t?t:{})})}}],[{key:"on",value:function(e,t,n){if(void 0===e&&(e=null),"string"==typeof e){e=document.querySelectorAll(e);for(var r=0,i=e.length;i>r;r++)e[r].addEventListener(t.toLowerCase(),n)}else addEventListener(t.toLowerCase(),n)}},{key:"off",value:function(e,t,n){if(void 0===e&&(e=null),"string"==typeof e){e=document.querySelectorAll(e);for(var r=0,i=e.length;i>r;r++)e[r].removeEventListener(t.toLowerCase(),n)}else removeEventListener(t.toLowerCase(),n)}}]),e}();t.exports=o},{}],4:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e,t,n){for(var r=!0;r;){var i=e,o=t,a=n;s=c=u=void 0,r=!1,null===i&&(i=Function.prototype);var s=Object.getOwnPropertyDescriptor(i,o);if(void 0!==s){if("value"in s)return s.value;var u=s.get;return void 0===u?void 0:u.call(a)}var c=Object.getPrototypeOf(i);if(null===c)return void 0;e=c,t=o,n=a,r=!0}},u=e("./Animation.js"),c=r(u),l=function(e){function t(){i(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.frames=[],this.lastId=0,this.batch={hash:{},read:[],write:[],mode:null}}return o(t,e),a(t,[{key:"read",value:function(e,t){var n=this.add("read",e,t),r=n.id;this.batch.read.push(n.id);var i="reading"===this.batch.mode||this.batch.scheduled;return i?r:(this.scheduleBatch(),r)}},{key:"write",value:function(e,t){var n=this.add("write",e,t),r=this.batch.mode,i=n.id;this.batch.write.push(n.id);var o="writing"===r||"reading"===r||this.batch.scheduled;return o?i:(this.scheduleBatch(),i)}},{key:"defer",value:function(e,t,n){"function"==typeof e&&(n=t,t=e,e=1);var r=this,i=e-1;return this.schedule(i,function(){r.run({fn:t,ctx:n})})}},{key:"clear",value:function(e){if("function"==typeof e)return this.clearFrame(e);e=Number(e);var t=this.batch.hash[e];if(t){var n=this.batch[t.type],r=n.indexOf(e);delete this.batch.hash[e],~r&&n.splice(r,1)}}},{key:"clearFrame",value:function(e){var t=this.frames.indexOf(e);~t&&this.frames.splice(t,1)}},{key:"scheduleBatch",value:function(){var e=this;this.schedule(0,function(){e.batch.scheduled=!1,e.runBatch()}),this.batch.scheduled=!0}},{key:"uniqueId",value:function(){return++this.lastId}},{key:"flush",value:function(e){for(var t;t=e.shift();)this.run(this.batch.hash[t])}},{key:"runBatch",value:function(){try{this.batch.mode="reading",this.flush(this.batch.read),this.batch.mode="writing",this.flush(this.batch.write),this.batch.mode=null}catch(e){throw this.runBatch(),e}}},{key:"add",value:function(e,t,n){var r=this.uniqueId();return this.batch.hash[r]={id:r,fn:t,ctx:n,type:e}}},{key:"run",value:function(e){var t=e.ctx||this,n=e.fn;if(delete this.batch.hash[e.id],!this.onError)return n.call(t);try{n.call(t)}catch(r){this.onError(r)}}},{key:"loop",value:function(){var e=this,t=this.raf;this.looping||(t(function n(){var r=e.frames.shift();e.frames.length?t(n):e.looping=!1,r&&r()}),this.looping=!0)}},{key:"schedule",value:function(e,t){return this.frames[e]?this.schedule(e+1,t):(this.loop(),this.frames[e]=t)}}]),t}(c["default"]);t.exports=l},{"./Animation.js":5}],5:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){r(this,e),this.raf=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)},this.animating=!0,this.interval=1,this.timers=[]}return i(e,[{key:"stop",value:function(){this.animating=!1}},{key:"handleAnimation",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){animating&&(this.raf(handleAnimation),this.tick())})},{key:"tick",value:function(){this.interval+=1}},{key:"timer",value:function(e){e()&&this.timers.push(e)&&!this.animating&&(this.animating=!0,handleAnimation())}},{key:"linearEase",value:function(e,t,n,r){return n*e/r+t}},{key:"easeInQuad",value:function(e,t,n,r){return n*(e/=r)*e+t}},{key:"easeOutQuad",value:function(e,t,n,r){return-n*(e/=r)*(e-2)+t}},{key:"easeInOutQuad",value:function(e,t,n,r){return(e/=r/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}},{key:"easeInCubic",value:function(e,t,n,r){return n*Math.pow(e/r,3)+t}},{key:"easeOutCubic",value:function(e,t,n,r){return n*(Math.pow(e/r-1,3)+1)+t}},{key:"easeInOutCubic",value:function(e,t,n,r){return(e/=r/2)<1?n/2*Math.pow(e,3)+t:n/2*(Math.pow(e-2,3)+2)+t}},{key:"easeInQuart",value:function(e,t,n,r){return n*Math.pow(e/r,4)+t}},{key:"easeOutQuart",value:function(e,t,n,r){return-n*(Math.pow(e/r-1,4)-1)+t}},{key:"easeInOutQuart",value:function(e,t,n,r){return(e/=r/2)<1?n/2*Math.pow(e,4)+t:-n/2*(Math.pow(e-2,4)-2)+t}},{key:"easeInQuint",value:function(e,t,n,r){return n*Math.pow(e/r,5)+t}},{key:"easeOutQuint",value:function(e,t,n,r){return n*(Math.pow(e/r-1,5)+1)+t}},{key:"easeInOutQuint",value:function(e,t,n,r){return(e/=r/2)<1?n/2*Math.pow(e,5)+t:n/2*(Math.pow(e-2,5)+2)+t}},{key:"easeInSine",value:function(e,t,n,r){return n*(1-Math.cos(e/r*(Math.PI/2)))+t}},{key:"easeOutSine",value:function(e,t,n,r){return n*Math.sin(e/r*(Math.PI/2))+t}},{key:"easeInOutSine",value:function(e,t,n,r){return n/2*(1-Math.cos(Math.PI*e/r))+t}},{key:"easeInExpo",value:function(e,t,n,r){return n*Math.pow(2,10*(e/r-1))+t}},{key:"easeOutExpo",value:function(e,t,n,r){return n*(-Math.pow(2,-10*e/r)+1)+t}},{key:"easeInOutExpo",value:function(e,t,n,r){return(e/=r/2)<1?n/2*Math.pow(2,10*(e-1))+t:n/2*(-Math.pow(2,-10*--e)+2)+t}},{key:"easeInCirc",value:function(e,t,n,r){return n*(1-Math.sqrt(1-(e/=r)*e))+t}},{key:"easeOutCirc",value:function(e,t,n,r){return n*Math.sqrt(1-(e=e/r-1)*e)+t}},{key:"easeInOutCirc",value:function(e,t,n,r){return(e/=r/2)<1?n/2*(1-Math.sqrt(1-e*e))+t:n/2*(Math.sqrt(1-(e-=2)*e)+1)+t}}]),e}();t.exports=o},{}],6:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t){var n=void 0===arguments[1]?{speed:4,fadeIn:!0,fadeDelay:250}:arguments[1];r(this,e),this._settings=n,this._selectorArr=document.querySelectorAll(t),this._elmArr=new CATAMARAN.core.DOM(t),this.init()}return i(e,[{key:"init",value:function(){function e(){s=d[0].scrollWidth;var e=new CATAMARAN.core.DOM(".forward"),t=new CATAMARAN.core.DOM(".backward");CATAMARAN.isMobile()?(d[0].setAttribute("style","overflow-y:hidden; overflow-x:scroll"),d[0].scrollLeft=0,e.hide(),t.hide()):(d[0].setAttribute("style","overflow:visible"),d[0].scrollLeft=0,e.show(),t.show()),l._update()}for(var t=this,n=0,r=t._selectorArr.length;r>n;n++){var i,o,a,s,u,c=new CATAMARAN.core.DOM("."+t._elmArr[n].className),l=t._selectorArr[n],h='<span class="forward"></span>',f='<span class="backward"></span>',d=l.querySelectorAll(".reel"),v=l.querySelectorAll("article"),p=0;if(t._settings.fadeIn){for(var n=0,r=v.length;r>n;n++)v[n].classList.add("loading");c.onVisible(function(){var e,n=v.length-Math.ceil(window.innerWidth/a);e=window.setInterval(function(){var t=l.querySelectorAll(".loading"),r=t[0];if(t.length<=n){window.clearInterval(e);for(var i=0,o=v.length;o>i;i++)v[i].classList.remove("loading")}else"undefined"!=typeof r&&r.classList.remove("loading")},t._settings.fadeDelay)},50)}l._update=function(){p=0,o=-1*s+window.innerWidth,i=0,l._updatePos()},l._updatePos=function(){d[0].setAttribute("style","transform:translate("+p+"px, 0)")},l.insertAdjacentHTML("beforeEnd",h);var y=new CATAMARAN.core.DOM(".forward");y.hide(),CATAMARAN.core.Events.on(".forward","mouseenter",function(e){CATAMARAN.core.interval=window.setInterval(function(){p-=t._settings.speed,o>=p&&(window.clearInterval(CATAMARAN.core.interval),p=o),l._updatePos()},10)}),CATAMARAN.core.Events.on(".forward","mouseleave",function(e){window.clearInterval(CATAMARAN.core.interval)}),l.insertAdjacentHTML("beforeEnd",f);var m=new CATAMARAN.core.DOM(".backward");m.hide(),CATAMARAN.core.Events.on(".backward","mouseenter",function(e){CATAMARAN.core.interval=window.setInterval(function(){p+=t._settings.speed,p>=i&&(window.clearInterval(u),p=i),l._updatePos()},10)}),CATAMARAN.core.Events.on(".backward","mouseleave",function(e){window.clearInterval(CATAMARAN.core.interval)}),e(),CATAMARAN.core.Events.on("body","resize",function(t){e()})}}}]),e}();t.exports=o},{}],7:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){r(this,e),this.game=new Phaser.Game(window.innerWidth,window.innerHeight,Phaser.AUTO,"phaser-stage",{preload:self.preload,create:self.create,update:self.update})}return i(e,[{key:"preload",value:function(){this.preloadBar=game.add.graphics(0,50),this.preloadBar.lineStyle(3,16777215,1),this.preloadBar.moveTo(0,0),this.preloadBar.lineTo(game.width,0),this.preloadBar.scale.x=0}},{key:"loadUpdate",value:function(){this.preloadBar.scale.x=.01*game.load.progress}},{key:"create",value:function(){}},{key:"update",value:function(){}}]),e}();t.exports=o},{}],8:[function(e,t,n){!function(e,r){"use strict";"function"==typeof define&&define.amd?define(function(){return e.Tap=r(e,e.document)}):"object"==typeof n?t.exports=r(e,e.document):e.Tap=r(e,e.document)}("undefined"!=typeof window?window:this,function(e,t){"use strict";function n(e){this.el="object"==typeof e?e:t.getElementById(e),this.moved=!1,this.startX=0,this.startY=0,this.hasTouchEventOccured=!1,this.el.addEventListener("touchstart",this,!1),this.el.addEventListener("mousedown",this,!1)}return n.prototype.start=function(e){"touchstart"===e.type?(this.hasTouchEventOccured=!0,this.el.addEventListener("touchmove",this,!1),this.el.addEventListener("touchend",this,!1),this.el.addEventListener("touchcancel",this,!1)):"mousedown"===e.type&&this.el.addEventListener("mouseup",this,!1),this.moved=!1,this.startX="touchstart"===e.type?e.touches[0].clientX:e.clientX,this.startY="touchstart"===e.type?e.touches[0].clientY:e.clientY},n.prototype.move=function(e){(Math.abs(e.touches[0].clientX-this.startX)>10||Math.abs(e.touches[0].clientY-this.startY)>10)&&(this.moved=!0)},n.prototype.end=function(n){var r;this.el.removeEventListener("touchmove",this,!1),this.el.removeEventListener("touchend",this,!1),this.el.removeEventListener("touchcancel",this,!1),this.el.removeEventListener("mouseup",this,!1),this.moved||(e.CustomEvent?r=new e.CustomEvent("tap",{bubbles:!0,cancelable:!0}):(r=t.createEvent("Event"),r.initEvent("tap",!0,!0)),n.stopPropagation(),n.target.dispatchEvent(r)||n.preventDefault())},n.prototype.cancel=function(){this.hasTouchEventOccured=!1,this.moved=!1,this.startX=0,this.startY=0},n.prototype.destroy=function(){this.el.removeEventListener("touchstart",this,!1),this.el.removeEventListener("touchmove",this,!1),this.el.removeEventListener("touchend",this,!1),this.el.removeEventListener("touchcancel",this,!1),this.el.removeEventListener("mousedown",this,!1),this.el.removeEventListener("mouseup",this,!1)},n.prototype.handleEvent=function(e){switch(e.type){case"touchstart":this.start(e);break;case"touchmove":this.move(e);break;case"touchend":this.end(e);break;case"touchcancel":this.cancel(e);break;case"mousedown":this.start(e);break;case"mouseup":this.end(e)}},n})},{}]},{},[1]);