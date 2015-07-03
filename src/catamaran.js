var CATAMARAN = CATAMARAN || function () {
    'use strict';
    var _catamaran = this;
    _catamaran.interval;


    
    _catamaran.Ui = (function(){

        function Phaser(){
            self = this;
            self.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'phaser-stage', { preload: self.preload, create: self.create, update: self.update });

            function preload() {
        

            }

            function create() {
                
            }

            function update() {
                
            }
        }


        function carousel(selector, settings){
            var _carousel = this;
            var _settings = settings || {
                        speed: 4,
                        fadeIn: true,
                        fadeDelay: 250
            }
            var _selectorArr = document.querySelectorAll(selector);

            for (var i = 0, len = _selectorArr.length; i < len; i++) {
                    var self = _selectorArr[i],
                    forward = '<span class="forward"></span>',
                    backward = '<span class="backward"></span>',
                    reel = self.extend.children('.reel'),
                    items = self.extend.children('article'),
                    pos = 0,
                    leftLimit,
                    rightLimit,
                    itemWidth,
                    reelWidth,
                    timerId;

                if (_settings.fadeIn) {
                        for(var i = 0, len = items.length; i < len; i++){
                            items[i].classList.add('loading');
                        }

                        self.extend.onVisible(function() {
                            var timerId,
                                limit = items.length - Math.ceil(window.innerWidth / itemWidth);

                            timerId = window.setInterval(function() {
                                var x = self.extend.children('.loading'), xf = x[0];

                                if (x.length <= limit) {

                                    window.clearInterval(timerId);

                                    for(var i = 0, len = items.length; i < len; i++){
                                        items[i].classList.remove('loading');
                                    }   
                                    return;

                                }
                                if(typeof xf != 'undefined'){
                                    xf.classList.remove('loading');
                                }
                            }, _settings.fadeDelay);
                        }, 50);
                    }

                self._update = function() {
                        pos = 0;
                        rightLimit = (-1 * reelWidth) + window.innerWidth;
                        leftLimit = 0;
                        self._updatePos();
                };

                
                self._updatePos = function() { reel[0].setAttribute('style', 'transform:translate(' + pos + 'px, 0)')};

                    self.insertAdjacentHTML('beforeEnd',forward);
                    var _forward = self.querySelector('.forward');
                    _forward.extend.hide();
                    _catamaran.Events._on('.forward', 'mouseenter', function(e) {
                            _catamaran.interval  = window.setInterval(function() {
                                pos -= _settings.speed;
                                if (pos <= rightLimit)
                                {
                                    window.clearInterval(_catamaran.interval);
                                    pos = rightLimit;
                                }
                                self._updatePos();
                            }, 10);
                    });

                    _catamaran.Events._on('.forward', 'mouseleave', function(e) {
                        window.clearInterval(_catamaran.interval);     
                    });

                    self.insertAdjacentHTML('beforeEnd',backward);
                    var _backward = self.querySelector('.backward');
                    _backward.extend.hide();
                    _catamaran.Events._on('.backward', 'mouseenter', function(e) {
                            _catamaran.interval  = window.setInterval(function() {
                                pos += _settings.speed;
                                if (pos >= leftLimit) {
                                    window.clearInterval(timerId);
                                    pos = leftLimit;
                                }
                                self._updatePos();
                            }, 10);
                    });
                    _catamaran.Events._on('.backward', 'mouseleave', function(e) {
                        window.clearInterval(_catamaran.interval);     
                    });
                    setupCarousel();  
                    _catamaran.Events._on('body', 'resize', function(e) {
                        setupCarousel();   
                    });
                    
                   


            }

            function setupCarousel(){
                reelWidth = reel[0].scrollWidth;
                if (_catamaran.Utils._isMobile()) {
                    reel[0].setAttribute('style', 'overflow-y:hidden; overflow-x:scroll');
                    reel[0].scrollLeft = 0;
                    forward.extend.hide();
                    backward.extend.hide();
                }
                else {
                    reel[0].setAttribute('style', 'overflow:visible');
                    reel[0].scrollLeft = 0;
                    document.querySelector('.forward').extend.show();
                    document.querySelector('.backward').extend.show();
                }
                self._update();
            }
        }
        

        return {
            _carousel: carousel,
            _phaser: phaser
        }

    })();


    _catamaran.Utils = (function(){

        function extend( ns, ns_string ) {
            var parts = ns_string.split('.');
            parent = ns;
            var pl;
            var i;
            if (parts[0] == "CATAMARAN") {
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

        function isInteger(x) { 
            return (x^0) === x; 
        }

        function findCenter(selector){
            return document.querySelector(selector).offsetWidth / 2;
        } 

        function getRandomArr(arr) {
            return Math.floor(Math.random() * arr.length)
        }

        function isMobile() { 
            switch(true) {
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


        return {
            _extend: extend,
            _findCenter: findCenter,
            _isMobile: isMobile,
            _getRandomArr:getRandomArr,
            _isInteger: isInteger
        }
    })();

    _catamaran.Events = (function(){
        function on(elementArr, event, fn) {
            if (typeof elementArr == 'string')
            elementArr = document.querySelectorAll(elementArr);
            for (var i = 0, len = elementArr.length; i < len; i++) {
                elementArr[i].addEventListener(event.toLowerCase(), fn)
            }
        }
        return {
            _on: on
        }

     })();


    var extend = function(element) {
        this.element = element;
    };

    extend.prototype = {
        hide: function() {
            return this.element.style.display = 'none';
        },
        show: function() {
            return this.element.style.display = 'block';
        },
        isVisible: function() {
             return this.element.offsetWidth > 0 && this.element.offsetHeight > 0;
        },
        onVisible: function(callback) {
            var self = this.element;
            if (self.extend.isVisible()) {
                callback.call(self);
            } else {
                var timer = setInterval(function() {
                    if (self.extend.isVisible()) {
                        callback.call(self);
                        clearInterval(timer);
                    }
                }, 50);
            }
        },
        children: function(selector){
            return this.element.querySelectorAll(selector);
        }
    };

    Object.defineProperty(Element.prototype, "extend", {
        get: function () {
            Object.defineProperty(this, "extend", {
                value: new extend(this)
            });
            return this.extend;
        },
        configurable: true,
        writeable: false
    });

};


var catamaranJS = new CATAMARAN();
