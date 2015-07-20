'use strict';

//todo remove thsi polyfill
import Symbol from '../src/node_modules/es6-symbol/implement.js';
import _Events from './core/events/Events';
import _DOM from './core/dom/DOM';
import _Carousel from './ui/Carousel';
import _Nav from './ui/Nav';
import _Phaser from './ui/Phaser';
import _Animation from './ui/Animation';
import _AniDom from './ui/AniDom';
import _Tap from '../src/node_modules/tap.js/tap.js';
import _Polyfill from './polyfill';





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
    constructor(opts = {usesPhaser:false, components:{carousel:false, nav:true}, vendor:{waypoints:false, routie:false, tap:true}}){


       this.core = {interval:{}};
       this.ui = {two:{}, components:{}, Animation:{}, AniDom:{}};
       this.vendor= {};

       this.core.Events = _Events;
       this.core.DOM = _DOM;
       this.ui.Animation = new _Animation();
       this.ui.AniDom = new _AniDom();
       
       if(opts.components.nav){
        this.ui.components.Nav = _Nav;
       }

       if(opts.components.carousel){
        this.ui.components.Carousel = _Carousel;
       }
       
       if(opts.usesPhaser){
            this.ui.two.Phaser = _Phaser;
       }

       if(opts.vendor.tap){
        this.vendor.tap = {};
        this.vendor.tap = _Tap;
       }


       
       console.log("                |\n               /|\\\n              / | \\\n             /  |  \\\n            /   |   \\\n           /    |    \\\n          /     |     \\\n         /      |      \\\n        /       |       \\\n       /________|        \\\n           _____|__    ___\\_\n    ______/ = = = =\\__/__/_/\n   /                      /\n  /\\_____________________/\n / /        /  /\n/_/        /__/\n \n CatamaranJS 0.01a by Brendon Smith http://bit.ly/catamaranJS")
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
//todo remove thsi polyfill hack
window.symbolPolyFill();
window.CATAMARAN =  new Catamaran({usesPhaser:true, components:{carousel:true, nav:true}, vendor:{tap:true}});
