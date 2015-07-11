class Carousel{

       /**
       * Represents Catamaran Component that creates a simple carosel window.CATAMARAN.ui.components.Carousel  
       * @constructor
       * @param {string} the selector uses querySelectorAll truns the object into an array of elements to use with window.CATAMARAN.Extend object 
       * @param {object} default settings are { speed: 4,fadeIn: true, fadeDelay: 250 }.
       */

		constructor(selector, settings = { speed: 4,fadeIn: true, fadeDelay: 250 }) {
            	this._settings = settings;
            	this._selectorArr = document.querySelectorAll(selector);
            	this._elmArr = new CATAMARAN.core.DOM(selector);
            	this.init()
		}

		init(){
			var _carousel = this;
			for (var i = 0, len = _carousel._selectorArr.length; i < len; i++) {
                    var self = new CATAMARAN.core.DOM('.' + _carousel._elmArr[i].className),
                    elm =  _carousel._selectorArr[i],
                    forward = '<span class="forward"></span>',
                    backward = '<span class="backward"></span>',
                    reel = elm.querySelectorAll('.reel'),
                    items = elm.querySelectorAll('article'),
                    pos = 0,
                    leftLimit,
                    rightLimit,
                    itemWidth,
                    reelWidth,
                    timerId;

                if (_carousel._settings.fadeIn) {
                        for(var i = 0, len = items.length; i < len; i++){
                            items[i].classList.add('loading');
                        }

                        self.onVisible(function() {
                            var timerId,
                                limit = items.length - Math.ceil(window.innerWidth / itemWidth);

                            timerId = window.setInterval(function() {
                                var x = elm.querySelectorAll('.loading'), xf = x[0];

                                if (x.length <= limit) {

                                    window.clearInterval(timerId);

                                    for(var i = 0, len = items.length; i < len; i++){
                                        items[i].classList.remove('loading');
                                    }   
                                    return;

                                }
                                if(typeof xf != 'undefined'){
                                    xf.classList.remove('loading');
                                }
                            }, _carousel._settings.fadeDelay);
                        }, 50);
                    }

                elm._update = function() {
                        pos = 0;
                        rightLimit = (-1 * reelWidth) + window.innerWidth;
                        leftLimit = 0;
                        elm._updatePos();
                };

                
                elm._updatePos = function() { 
                	reel[0].setAttribute('style', 'transform:translate(' + pos + 'px, 0)')};
                    elm.insertAdjacentHTML('beforeEnd',forward);
                    var _forward = new CATAMARAN.core.DOM('.forward');
                    _forward.hide();
                    CATAMARAN.core.Events.on('.forward', 'mouseenter', function(e) {
                            CATAMARAN.core.interval  = window.setInterval(function() {
                                pos -= _carousel._settings.speed;
                                if (pos <= rightLimit)
                                {
                                    window.clearInterval(CATAMARAN.core.interval);
                                    pos = rightLimit;
                                }
                                elm._updatePos();
                            }, 10);
                    });

                    CATAMARAN.core.Events.on('.forward', 'mouseleave', function(e) {
                        window.clearInterval(CATAMARAN.core.interval);     
                    });

                    elm.insertAdjacentHTML('beforeEnd',backward);
                    var _backward =  new CATAMARAN.core.DOM('.backward');
                    _backward.hide();
                    CATAMARAN.core.Events.on('.backward', 'mouseenter', function(e) {
                            CATAMARAN.core.interval  = window.setInterval(function() {
                                pos += _carousel._settings.speed;
                                if (pos >= leftLimit) {
                                    window.clearInterval(timerId);
                                    pos = leftLimit;
                                }
                                elm._updatePos();
                            }, 10);
                    });
                    CATAMARAN.core.Events.on('.backward', 'mouseleave', function(e) {
                        window.clearInterval(CATAMARAN.core.interval);     
                    });
                    setupCarousel();  
                    CATAMARAN.core.Events.on('body', 'resize', function(e) {
                        setupCarousel();   
                    });
                    
                   


            }

            function setupCarousel(){
                reelWidth = reel[0].scrollWidth;
                var forwardC =  new CATAMARAN.core.DOM('.forward');
                var backwardC =  new CATAMARAN.core.DOM('.backward');
                if (CATAMARAN.isMobile()) {
                    reel[0].setAttribute('style', 'overflow-y:hidden; overflow-x:scroll');
                    reel[0].scrollLeft = 0;
                    forwardC.hide();
                    backwardC.hide();
                }
                else {
                    reel[0].setAttribute('style', 'overflow:visible');
                    reel[0].scrollLeft = 0;
                    
                    forwardC.show();
                    backwardC.show();
                }
                elm._update();
            }
        }
		
           
            

}

module.exports = Carousel;