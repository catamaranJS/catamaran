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
