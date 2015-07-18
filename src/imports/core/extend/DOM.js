//polyfill https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
if (!Object.assign) {
  Object.defineProperty(Object, 'assign', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function(target) {
      'use strict';
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert first argument to object');
      }

      var to = Object(target);
      for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];
        if (nextSource === undefined || nextSource === null) {
          continue;
        }
        nextSource = Object(nextSource);

        var keysArray = Object.keys(Object(nextSource));
        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
      return to;
    }
  });
}
// polyfill  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
// Production steps of ECMA-262, Edition 6, 22.1.2.1
// Reference: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from
if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) { return 0; }
      if (number === 0 || !isFinite(number)) { return number; }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike/*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError("Array.from requires an array-like object - not null or undefined");
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else      
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }());
}


class DOM {
  /**
   * Represents Extending an html element accepts array of elements.
   * @constructor
   * @param {array} selector accepts jquery like selector.
   */
    constructor(selector) {
        var elements = document.querySelectorAll(selector);
        this.length = elements.length;
        this.children = [];
        Object.assign(this, elements);
    }

  /**
   * loops though every element like jquery
   * @each
   * @param {function}  this is the callback
   */
    each( callback ) {
        for ( let el of Array.from(this) ) {
            callback.call( el );
        }
        return this;
    }


    hide() {
        return this.each(function() {
            this.style.display = 'none';
        });
    }

    show() {
        return this.each(function() {
            this.style.display = 'block';
        });
    }

    static isVisible(element) {
        return element.offsetWidth > 0 && element.offsetHeight > 0;
    }
    
    onVisible(callback) {
        return this.each(function() {
            if (CATAMARAN.core.DOM.isVisible(this)) {
                callback.call(this);
            } else {
                var timer = setInterval(function() {
                    if (CATAMARAN.core.DOM.isVisible(this)) {
                        callback.call(this);
                        clearInterval(timer);
                    }
                }, 50);
            }
        });
        
    }

    addClass( className ) {
        return this.each(function() {
            this.classList.add(className);
        });
    }
    
    removeClass( className ) {
        return this.each(function() {
            this.classList.remove(className);
        });
    }

    hasClass( className ) {
        return this[0].classList.contains(className);
    }

    toggle(className, callback = null){
      var self = this;
      return this.each(function() {
            if(this.classList.contains(className)){
              self.removeClass(className);
            }else{
              self.addClass(className);
            }

            if(callback != null){
              callback();
            }
        });
    }
    
    on( event, callback ) {
        return this.each(function() {
            this.addEventListener(event, callback, false);
        });
    }
    
    off( event, callback ) {
        return this.each(function() {
            this.removeEventListener(event, callback, false);
        });
    }

    width(w = null){
      var _w = w;
      if(_w == null){
            return this[0].offsetWidth;
      }
      return this.each(function() {
            this.style.width = _w;
        });
    }

    height(h = null){
      var _h = h;
      if(_h == null){
           return this[0].offsetHeight;
      }
      return this.each(function() {
          this.style.height = _h;
        });
    }

    css( obj ) {
        var _obj = obj;
        return this.each(function() {
          for(var item in _obj){
            this.style[item] = _obj[item];
          }
        });
    }



}

module.exports = DOM;