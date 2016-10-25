export class DOM {
  /**
   * Represents Extending an html element accepts array of elements.
   * @constructor
   * @param {array} selector accepts jquery like selector.
   */
    constructor(selector) {
        var elements = document.querySelectorAll(selector);
        this.length = elements.length;
        this.children = [];
        if(navigator.userAgent.indexOf('Chrome') > -1){
          Object.assign(this, Array.prototype.slice.call(elements));
        }else{
          Object.assign(this, elements);
        }
        
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

    /**
     * Appends items to the DOM
     * @each
     * @param {appendElements} the elments you want to append
     */
    append(appendElements) {
      return this.each(function() {
            this.appendChild(appendElements);
        });
    }

     /**
     * text replaces text in a specific dom element
     * @each
     * @param {text} the text you want it to show
     */
    text(text) {
      return this.each(function() {
            this.innerHTML = text;
        });
    }

    /**
     * Hides elements in the DOM
     * @each
     */

    hide() {
        return this.each(function() {
            this.style.display = 'none';
        });
    }

    /**
     * Shows elements in the DOM
     * @each
     */


    show() {
        return this.each(function() {
            this.style.display = 'block';
        });
    }

    /**
     * isVisible checks to see if elment in the DOM is visible
     * @param {element}  the element in particular you are checking
     */


    static isVisible(element) {
        return element.offsetWidth > 0 && element.offsetHeight > 0;
    }
    
    /**
     * onVisible when item becaomes visible lets do something to it
     * @param {callback}  callback action to execute when item becomes visible
     */


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

    /**
     * addClass adds a class to DOM elements
     * @each
     * @param {className} the class you want to add
     */


    addClass( className ) {
        return this.each(function() {
            this.classList.add(className);
        });
    }

    /**
     * removeClass removes a class to DOM elements
     * @each
     * @param {className} the class you want to remove
     */
    
    removeClass( className ) {
        return this.each(function() {
            this.classList.remove(className);
        });
    }


     /**
     * hasClass checks DOM elements to see if a class is present 
     * @each
     * @param {className} the class you want to look for
     * @return {bool} returns true or false
     */

    hasClass( className ) {
        return this[0].classList.contains(className);
    }

    /**
     * toggle checks DOM elements add adds or removes a class
     * @each
     * @param {className} the class you want to toggle
     * todo remove self
     * 
     */


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
    
     /**
     * on checks DOM elements adds an event to it with a callback
     * @each
     * @param {event} the event type you want to apply
     * @param {callback} the callback you want to apply on the given event
     */

    on( event, callback ) {
        return this.each(function() {
            this.addEventListener(event, callback, false);
        });
    }

    /**
     * off checks DOM elements removes an event to it with a callback
     * @each
     * @param {event} the event type you want to removes
     * @param {callback} the callback you want to remove on the given event
     */

    
    off( event, callback ) {
        return this.each(function() {
            this.removeEventListener(event, callback, false);
        });
    }

    /**
     * width sets the width of a dom element if no width is given it returns the int width of the item instead of setting it
     * @param {width} the amount you want to apply
     * @return {int} returns the width of the item
     * @return {elment} in the event width has been set it will return the item and apply the width provided
     */

    width(w = null){
      var _w = w;
      if(_w == null){
            return this[0].offsetWidth;
      }
      return this.each(function() {
            this.style.width = _w;
        });
    }

    /**
     * height sets the height of a dom element if no height is given it returns the int height of the item instead of setting it
     * @param {height} the amount you want to apply
     * @return {int} returns the height of the item
     * @return {elment} in the event height has been set it will return the item and apply the height provided
     */

    height(h = null){
      var _h = h;
      if(_h == null){
           return this[0].offsetHeight;
      }
      return this.each(function() {
          this.style.height = _h;
        });
    }

    /**
     * css sets a series of css styles in a similar manner to jQuery
     * @each
     * @param {obj} the prorperties and property values you want to set example: {height:300px}, {height:300px, width:400px}    
     */

    css( obj ) {
        var _obj = obj;
        return this.each(function() {
          for(var item in _obj){
            this.style[item] = _obj[item];
          }
        });
    }
}
