import Events from "events/Events";
import Extend from "extend/Extend";

class Catamaran {


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

    static isInteger(x) {
        return (x ^ 0) === x;
    }

    static findCenter(selector) {
        return document.querySelector(selector).offsetWidth / 2;
    }

    static getRandomArr(arr) {
        return Math.floor(Math.random() * arr.length)
    }

    static isMobile() {
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
}



