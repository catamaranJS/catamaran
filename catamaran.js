var CATAMARAN = CATAMARAN || function () {
    'use strict';
    var _catamaran = this;
    

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
                var listener = new EventListener(elementArr[i], fn);
            }
            if (listener['on' + event.toLowerCase()])
            return listener['on' + event.toLowerCase()].call();
        }
        return {
            _on: on
        }

     })();

    Element.prototype.isVisible = function() {
     return this.offsetWidth > 0 && this.offsetHeight > 0;
    }

    Element.prototype.onVisible = function (callback) {
                var self = this;
                if (self.isVisible()) {
                    callback.call(self);
                } else {
                    var timer = setInterval(function() {
                        if (self.isVisible()) {
                            callback.call(self);
                            clearInterval(timer);
                        }
                    }, 50);
                }
    }


};

var catamaranJS = new CATAMARAN();
