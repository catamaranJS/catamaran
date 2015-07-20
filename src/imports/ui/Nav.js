class Nav{

       /**
       * Represents Catamaran Component that creates a simple navigation very similar to bootstrap
       * @param {obj} defualt creates navButtons is the button example '.navbar-toggle' just like 
       * bootstrap for mobile to click on and navLinks example '#mainNav'} is the ul that contains the links 
       * maxHeight is what gets animated set the height to be larger than your list
       */

		constructor(defaults = {navButton: '.navbar-toggle', navLinks: '#mainNav', maxHeight: '400px'}) {
            	this._settings = defaults;
                this._settings.navButton = new CATAMARAN.core.DOM(this._settings.navButton);
                this._settings.Li = new CATAMARAN.core.DOM(this._settings.navLinks + ' li');
                this._settings.navLinks = new CATAMARAN.core.DOM(this._settings.navLinks);
            	this.init()
		}

		init(){
		  this._settings.navButton.on('click', function(e) {
                this.triggerNav();
            }.bind(this));
        }

        triggerNav(){
            if(this._settings.navLinks[0].className.indexOf('open') == -1){
                this._settings.navLinks[0].className = this._settings.navLinks[0].className  + ' open';
            }

            if(this._settings.navLinks[0].style.maxHeight != this._settings.maxHeight){
                this._settings.navLinks[0].style.maxHeight = this._settings.maxHeight;
            }else{
                this._settings.navLinks[0].style.maxHeight = '1px';
            }

            
        }
		
       
           
            

}

module.exports = Nav;