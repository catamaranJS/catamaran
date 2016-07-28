'use strict';

//todo remove thsi polyfill
require('./polyfill');
var Symbol = require('implement');
var Events =  require('./imports/core/events/Events');
var DOM = require('./imports/core/dom/DOM');
var Carousel = require('./imports/ui/Carousel');
var Nav = require('./imports/ui/Nav');
var PhaserJS = require('./imports/ui/Phaser');
var Animation = require('./imports/ui/Animation');
var AniDom = require('./imports/ui/AniDom');
var Tap = require('tap.js');
var lsd = require('./imports/core/lsd/index.js');


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
    constructor(opts = {_lsd:{enabled:true, _appendEL:document.body}, usesPhaser:false, components:{carousel:false, nav:true}, vendor:{waypoints:false, routie:false, tap:true}}){


       this.core = {interval:{}};
       this.ui = {two:{}, components:{}, Animation:{}, AniDom:{}};
       this.vendor= {}; 
       this.debug = true;
       this.core.Events = Events;
       this.core.DOM = DOM;
       if(opts._lsd.enabled){
          this.core.lsd = new lsd(opts._lsd._appendEL);
       }
       
       this.ui.Animation = new Animation();
       this.ui.AniDom = new AniDom();
       
       if(opts.components.nav){
        this.ui.components.Nav = Nav;
       }

       if(opts.components.carousel){
        this.ui.components.Carousel = Carousel;
       }
       
       if(opts.usesPhaser){
            this.ui.two.Phaser = PhaserJS;
       }

       if(opts.vendor.tap){
        this.vendor.tap = {};
        this.vendor.tap = Tap;
       }


       
       console.log("            `--.-+.        `--..--o.               \n           `.---+..``     `------o.               \n           `-.--+. .``.`:/.//:.--o.               \n           `----+ossoyyyyyys/.---o.               \n          ..:oyhysosssssoooooo/:-o.               \n        `.+sooossoo+oos-.:+++++oos:               \n           +ys++oo+++/++/--/ssyoohho-             \n            /yysoo+//+osys/..-/  ./sys/`          \n             -yyyo+oso/-`           ./sy+-        \n              `oyyy:`                  `/ss-      \n                :yys.                     `.      \n                 `oyy:                            \n                   -sy+`                          \n                     :so`                         \n                       -s`                        \n                                  CatamaranJS 0.01a by Brendon Smith http://bit.ly/catamaranJS")
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

  ready(fn) {
    if (document.readyState != 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
}


}
//todo remove thsi polyfill hack
window.symbolPolyFill();

window.Catamaran = module.exports = Catamaran;
