(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Events = require('./events/Events-compiled');
var Extend = require('./extend/Extend-compiled');

var Catamaran = (function () {
    function Catamaran() {
        _classCallCheck(this, Catamaran);

        this.Events = Events;
        this.Extend = Extend;
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
                    _catamaran.Utils._mobileOS = 'android';
                    return true;
                case /webOS/i.test(navigator.userAgent):
                    _catamaran.Utils._mobileOS = 'webos';
                    return true;
                case /iPhone/i.test(navigator.userAgent):
                    _catamaran.Utils._mobileOS = 'iphone';
                    return true;
                case /iPad/i.test(navigator.userAgent):
                    _catamaran.Utils._mobileOS = 'ipad';
                    return true;
                case /iPod/i.test(navigator.userAgent):
                    _catamaran.Utils._mobileOS = 'ipod';
                    return true;
                case /BlackBerry/i.test(navigator.userAgent):
                    _catamaran.Utils._mobileOS = 'blackberry';
                    return true;
                case /Windows Phone/i.test(navigator.userAgent):
                    _catamaran.Utils._mobileOS = 'windows';
                    return true;
                default:
                    return false;
            }
        }
    }]);

    return Catamaran;
})();

window.CATAMARAN = new Catamaran();

},{"./events/Events-compiled":2,"./extend/Extend-compiled":3}],2:[function(require,module,exports){
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
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Extend = (function () {
    function Extend(_element) {
        _classCallCheck(this, Extend);

        this.element = _element;
    }

    _createClass(Extend, [{
        key: 'hide',
        value: function hide() {
            return this.element.style.display = 'none';
        }
    }, {
        key: 'show',
        value: function show() {
            return this.element.style.display = 'block';
        }
    }, {
        key: 'isVisible',
        value: function isVisible() {
            return this.element.offsetWidth > 0 && this.element.offsetHeight > 0;
        }
    }, {
        key: 'onVisible',
        value: function onVisible(callback) {
            if (this.extend.isVisible()) {
                callback.call(self);
            } else {
                var timer = setInterval(function () {
                    if (this.extend.isVisible()) {
                        callback.call(self);
                        clearInterval(timer);
                    }
                }, 50);
            }
        }
    }, {
        key: 'children',
        value: function children(selector) {
            return this.element.querySelectorAll(selector);
        }
    }]);

    return Extend;
})();

module.exports = Extend;

},{}]},{},[1]);
