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
