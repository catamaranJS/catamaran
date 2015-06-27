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
                            window.clearInterval(_catamaran.interval);
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
                    var backwardC = new CATAMARAN.Extend('.forward');
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
