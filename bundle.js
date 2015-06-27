(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Events = require('./events/Events-compiled');
var Extend = require('./extend/Extend-compiled');
var Carousel = require('./ui/Carousel-compiled');

var Catamaran = (function () {
    function Catamaran() {
        _classCallCheck(this, Catamaran);

        this.Events = Events;
        this.Extend = Extend;
        this.UI = {};
        this.interval = {};
        this.UI.Carousel = Carousel;
    }

    _createClass(Catamaran, [{
        key: 'extend',
        value: function extend(ns, ns_string) {
            var parts = ns_string.split('.');
            parent = ns;
            var pl;
            var i;
            if (parts[0] == 'CATAMARAN') {
                parts = parts.slice(1);
            }
            pl = parts.length;
            for (i = 0; i < pl; i++) {
                if (typeof parent[parts[i]] == 'undefined') {
                    parent[parts[i]] = {};
                }
                parent = parent[parts[i]];
            }
            return parent;
        }
    }, {
        key: 'isInteger',
        value: function isInteger(x) {
            return (x ^ 0) === x;
        }
    }, {
        key: 'findCenter',
        value: function findCenter(selector) {
            return document.querySelector(selector).offsetWidth / 2;
        }
    }, {
        key: 'getRandomArr',
        value: function getRandomArr(arr) {
            return Math.floor(Math.random() * arr.length);
        }
    }, {
        key: 'isMobile',
        value: function isMobile() {
            switch (true) {
                case /Android/i.test(navigator.userAgent):
                    this._mobileOS = 'android';
                    return true;
                case /webOS/i.test(navigator.userAgent):
                    this._mobileOS = 'webos';
                    return true;
                case /iPhone/i.test(navigator.userAgent):
                    this._mobileOS = 'iphone';
                    return true;
                case /iPad/i.test(navigator.userAgent):
                    this._mobileOS = 'ipad';
                    return true;
                case /iPod/i.test(navigator.userAgent):
                    this._mobileOS = 'ipod';
                    return true;
                case /BlackBerry/i.test(navigator.userAgent):
                    this._mobileOS = 'blackberry';
                    return true;
                case /Windows Phone/i.test(navigator.userAgent):
                    this._mobileOS = 'windows';
                    return true;
                default:
                    return false;
            }
        }
    }]);

    return Catamaran;
})();

window.CATAMARAN = new Catamaran();

},{"./events/Events-compiled":2,"./extend/Extend-compiled":3,"./ui/Carousel-compiled":4}],2:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Events = (function () {
    function Events() {
        _classCallCheck(this, Events);
    }

    _createClass(Events, null, [{
        key: 'on',
        value: function on(elementArr, event, fn) {
            if (typeof elementArr == 'string') elementArr = document.querySelectorAll(elementArr);
            for (var i = 0, len = elementArr.length; i < len; i++) {
                elementArr[i].addEventListener(event.toLowerCase(), fn);
            }
        }
    }]);

    return Events;
})();

module.exports = Events;

},{}],3:[function(require,module,exports){
//polyfill https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

if (!Object.assign) {
    Object.defineProperty(Object, 'assign', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function value(target) {
            'use strict';
            if (target === undefined || target === null) {
                throw new TypeError('Cannot convert first argument to object');
            }

            var to = Object(target);
            for (var i = 1; i < arguments.length; i++) {
                var nextSource = arguments[i];
                if (nextSource === undefined || nextSource === null) {
                    continue;
                }
                nextSource = Object(nextSource);

                var keysArray = Object.keys(Object(nextSource));
                for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                    var nextKey = keysArray[nextIndex];
                    var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                    if (desc !== undefined && desc.enumerable) {
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
    });
}
// polyfill  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
// Production steps of ECMA-262, Edition 6, 22.1.2.1
// Reference: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from
if (!Array.from) {
    Array.from = (function () {
        var toStr = Object.prototype.toString;
        var isCallable = function isCallable(fn) {
            return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
        };
        var toInteger = function toInteger(value) {
            var number = Number(value);
            if (isNaN(number)) {
                return 0;
            }
            if (number === 0 || !isFinite(number)) {
                return number;
            }
            return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
        };
        var maxSafeInteger = Math.pow(2, 53) - 1;
        var toLength = function toLength(value) {
            var len = toInteger(value);
            return Math.min(Math.max(len, 0), maxSafeInteger);
        };

        // The length property of the from method is 1.
        return function from(arrayLike /*, mapFn, thisArg */) {
            // 1. Let C be the this value.
            var C = this;

            // 2. Let items be ToObject(arrayLike).
            var items = Object(arrayLike);

            // 3. ReturnIfAbrupt(items).
            if (arrayLike == null) {
                throw new TypeError('Array.from requires an array-like object - not null or undefined');
            }

            // 4. If mapfn is undefined, then let mapping be false.
            var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
            var T;
            if (typeof mapFn !== 'undefined') {
                // 5. else     
                // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
                if (!isCallable(mapFn)) {
                    throw new TypeError('Array.from: when provided, the second argument must be a function');
                }

                // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
                if (arguments.length > 2) {
                    T = arguments[2];
                }
            }

            // 10. Let lenValue be Get(items, "length").
            // 11. Let len be ToLength(lenValue).
            var len = toLength(items.length);

            // 13. If IsConstructor(C) is true, then
            // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
            // 14. a. Else, Let A be ArrayCreate(len).
            var A = isCallable(C) ? Object(new C(len)) : new Array(len);

            // 16. Let k be 0.
            var k = 0;
            // 17. Repeat, while k < len… (also steps a - h)
            var kValue;
            while (k < len) {
                kValue = items[k];
                if (mapFn) {
                    A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
                } else {
                    A[k] = kValue;
                }
                k += 1;
            }
            // 18. Let putStatus be Put(A, "length", len, true).
            A.length = len;
            // 20. Return A.
            return A;
        };
    })();
}

var Extend = (function () {
    function Extend(selector) {
        _classCallCheck(this, Extend);

        var elements = document.querySelectorAll(selector);
        this.length = elements.length;
        this.children = [];
        Object.assign(this, elements);
    }

    _createClass(Extend, [{
        key: 'each',
        value: function each(callback) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = Array.from(this)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var el = _step.value;

                    callback.call(el);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator['return']) {
                        _iterator['return']();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return this;
        }
    }, {
        key: 'hide',
        value: function hide() {
            return this.each(function () {
                this.style.display = 'none';
            });
        }
    }, {
        key: 'show',
        value: function show() {
            return this.each(function () {
                this.style.display = 'block';
            });
        }
    }, {
        key: 'onVisible',
        value: function onVisible(callback) {
            return this.each(function () {
                if (CATAMARAN.Extend.isVisible(this)) {
                    callback.call(this);
                } else {
                    var timer = setInterval(function () {
                        if (CATAMARAN.Extend.isVisible(this)) {
                            callback.call(this);
                            clearInterval(timer);
                        }
                    }, 50);
                }
            });
        }
    }, {
        key: 'addClass',
        value: function addClass(className) {
            return this.each(function () {
                this.classList.add(className);
            });
        }
    }, {
        key: 'removeClass',
        value: function removeClass(className) {
            return this.each(function () {
                this.classList.remove(className);
            });
        }
    }, {
        key: 'hasClass',
        value: function hasClass(className) {
            return this[0].classList.contains(className);
        }
    }, {
        key: 'on',
        value: function on(event, callback) {
            return this.each(function () {
                this.addEventListener(event, callback, false);
            });
        }
    }], [{
        key: 'isVisible',
        value: function isVisible(element) {
            return element.offsetWidth > 0 && element.offsetHeight > 0;
        }
    }]);

    return Extend;
})();

module.exports = Extend;

},{}],4:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Carousel = (function () {
    function Carousel(selector) {
        var settings = arguments[1] === undefined ? { speed: 4, fadeIn: true, fadeDelay: 250 } : arguments[1];

        _classCallCheck(this, Carousel);

        this._settings = settings;
        this._selectorArr = document.querySelectorAll(selector);
        this._elmArr = new CATAMARAN.Extend(selector);
        this.init();
    }

    _createClass(Carousel, [{
        key: 'init',
        value: function init() {
            var _carousel = this;
            for (var i = 0, len = _carousel._selectorArr.length; i < len; i++) {
                var self = new CATAMARAN.Extend('.' + _carousel._elmArr[i].className),
                    elm = _carousel._selectorArr[i],
                    forward = '<span class="forward"></span>',
                    backward = '<span class="backward"></span>',
                    reel = elm.querySelectorAll('.reel'),
                    items = elm.querySelectorAll('article'),
                    pos = 0,
                    leftLimit,
                    rightLimit,
                    itemWidth,
                    reelWidth,
                    timerId;

                if (_carousel._settings.fadeIn) {
                    for (var i = 0, len = items.length; i < len; i++) {
                        items[i].classList.add('loading');
                    }

                    self.onVisible(function () {
                        var timerId,
                            limit = items.length - Math.ceil(window.innerWidth / itemWidth);

                        timerId = window.setInterval(function () {
                            var x = elm.querySelectorAll('.loading'),
                                xf = x[0];

                            if (x.length <= limit) {

                                window.clearInterval(timerId);

                                for (var i = 0, len = items.length; i < len; i++) {
                                    items[i].classList.remove('loading');
                                }
                                return;
                            }
                            if (typeof xf != 'undefined') {
                                xf.classList.remove('loading');
                            }
                        }, _carousel._settings.fadeDelay);
                    }, 50);
                }

                elm._update = function () {
                    pos = 0;
                    rightLimit = -1 * reelWidth + window.innerWidth;
                    leftLimit = 0;
                    elm._updatePos();
                };

                elm._updatePos = function () {
                    reel[0].setAttribute('style', 'transform:translate(' + pos + 'px, 0)');
                };
                elm.insertAdjacentHTML('beforeEnd', forward);
                var _forward = new CATAMARAN.Extend('.forward');
                _forward.hide();
                CATAMARAN.Events.on('.forward', 'mouseenter', function (e) {
                    CATAMARAN.interval = window.setInterval(function () {
                        pos -= _carousel._settings.speed;
                        if (pos <= rightLimit) {
                            window.clearInterval(CATAMARAN.interval);
                            pos = rightLimit;
                        }
                        elm._updatePos();
                    }, 10);
                });

                CATAMARAN.Events.on('.forward', 'mouseleave', function (e) {
                    window.clearInterval(CATAMARAN.interval);
                });

                elm.insertAdjacentHTML('beforeEnd', backward);
                var _backward = new CATAMARAN.Extend('.backward');
                _backward.hide();
                CATAMARAN.Events.on('.backward', 'mouseenter', function (e) {
                    CATAMARAN.interval = window.setInterval(function () {
                        pos += _carousel._settings.speed;
                        if (pos >= leftLimit) {
                            window.clearInterval(timerId);
                            pos = leftLimit;
                        }
                        elm._updatePos();
                    }, 10);
                });
                CATAMARAN.Events.on('.backward', 'mouseleave', function (e) {
                    window.clearInterval(CATAMARAN.interval);
                });
                setupCarousel();
                CATAMARAN.Events.on('body', 'resize', function (e) {
                    setupCarousel();
                });
            }

            function setupCarousel() {
                reelWidth = reel[0].scrollWidth;
                if (CATAMARAN.isMobile()) {
                    reel[0].setAttribute('style', 'overflow-y:hidden; overflow-x:scroll');
                    reel[0].scrollLeft = 0;
                    forward.hide();
                    backward.hide();
                } else {
                    reel[0].setAttribute('style', 'overflow:visible');
                    reel[0].scrollLeft = 0;
                    var forwardC = new CATAMARAN.Extend('.forward');
                    var backwardC = new CATAMARAN.Extend('.backward');
                    forwardC.show();
                    backwardC.show();
                }
                elm._update();
            }
        }
    }]);

    return Carousel;
})();

module.exports = Carousel;

},{}]},{},[1]);
