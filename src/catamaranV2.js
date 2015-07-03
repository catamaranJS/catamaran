var _Events = require('./events/Events');
var _Extend = require('./extend/Extend');
var _Carousel = require('./ui/Carousel');
var _Phaser = require('./ui/Phaser');
var _Animation = require('./ui/Animation');

if (typeof console == "undefined") {
  window.console = {
    log: function () {}
  };
};

class Catamaran {
   /**
   * Represents Catamaran builds main library for use exports as window.CATAMARAN for use.
   * @constructor
   * @param {object} default object sent to setup various options.
   */
    constructor(opts = {usesPhaser:false}){
       this.Events = _Events;
       this.Extend = _Extend;
       this.ui = {};
       this.ui.two = {};
       this.ui.Animation = {};
       this.ui.components = {};
       this.interval = {};
       this.ui.components.Carousel = _Carousel;
       this.ui.two.Phaser = _Phaser;
       this.ui.Animation = new _Animation();

    }

    extend(ns, ns_string) {
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

    isInteger(x) {
        return (x ^ 0) === x;
    }

    findCenter(selector) {
        return document.querySelector(selector).offsetWidth / 2;
    }

    getRandomArr(arr) {
        return Math.floor(Math.random() * arr.length)
    }

    isMobile() {
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


}


window.CATAMARAN =  new Catamaran();
