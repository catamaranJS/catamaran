var _Events = require('./Events');
var _Extend = require('./Extend');
var _Carousel = require('./Carousel');
var _Phaser = require('./Phaser');
var _Animation = require('./Animation');

if (typeof console == "undefined") {
  window.console = {
    log: function () {}
  };
};

class Catamaran {

    constructor(opts = {usesPhaser:false}){
       this.Events = _Events;
       this.Extend = _Extend;
       this.UI = {};
       this.UI.two = {};
       this.UI.Animation = {};
       this.UI.Components = {};
       this.interval = {};
       this.UI.Components.Carousel = _Carousel;
       this.UI.two.Phaser = _Phaser;
       this.UI.Animation = _Animation;

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
