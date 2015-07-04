var _Events = require('./core/events/Events');
var _Extend = require('./core/extend/Extend');
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
   * Catamaran builds main library for use exports as window.CATAMARAN for use.
   * Catamaran is a light weight library to speed up basic websites and also allowing rapid webGL 2d/3d for those who want more interactive websites.
   * Catamaran can be used for simple mobile portfolio, wordpress sites, and interactive sites that take use of PhaserJS / PixiJS / BabylonJS.  Catamaran
   * comes with a baisic component library of ui tools for use including but not limited to carousels, menus, sliders, etc.. Catamaran is made to stand alone it also includes
   * a lightweight CSS library that has a basic grid, menu component, and normalizes html5 content.
   * @constructor
   * @param {object} default object sent to setup various options.
   */
    constructor(opts = {usesPhaser:false, components:{carousel:false}}){
       this.core = {};
       this.ui = {};
       this.ui.two = {};
       this.ui.components = {};
       this.ui.Animation = {};
       this.core.interval = {};

       this.core.Events = _Events;
       this.core.Extend = _Extend;
       this.ui.Animation = new _Animation();
       
       if(opts.components.carousel){
        this.ui.components.Carousel = _Carousel;
       }
       
       if(opts.usesPhaser){
            this.ui.two.Phaser = _Phaser;
       }
       

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


window.CATAMARAN =  new Catamaran({usesPhaser:true, components:{carousel:true}});
