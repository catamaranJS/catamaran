
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

    toggle(className){
      var self = this;
      return this.each(function() {
            if(this.classList.contains(className)){
              self.removeClass(className);
            }else{
              self.addClass(className);
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