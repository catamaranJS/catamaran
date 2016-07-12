var CES = require('ces');
var BABYLON = require('../lib/babylon');
var utils = require('../utils/utils');

var defaults = utils.defaultArgs();
defaults._name = 'light';

/**
 * ...
 * @author Brendon Smith
 * http://seacloud9.org
 * LightWeight 3D System Design engine
 */

class c_light {
	constructor(_opts = defaults){
		this.name = _opts._name + utils.guid();
		this.obj = null;
		switch(_opts._type) {
		    case 'Hemispheric':
		        this.obj= new BABYLON.HemisphericLight(this.name,  _opts._position,  _opts._scene);
		        break;
		    case 'Point':
				this.obj = new BABYLON.PointLight(this.name,  _opts._position,  _opts._scene);
		        break;
		    case 'Directional':
		         this.obj = new BABYLON.DirectionalLight(this.name,  _opts._position,  _opts._scene);
		        break;		        
		    default:
		        this.obj= new BABYLON.HemisphericLight(this.name,  _opts._position,  _opts._scene);
		 }
		 this.obj.intensity = 0.8;
		this.options = {
			name:this.name ,
			init: this.constructor,
			obj:this.obj
		}
		CES.Component.extend(this.options);
	}

}
module.exports = c_light;