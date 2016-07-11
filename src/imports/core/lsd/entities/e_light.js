var CES = require('ces');
var BABYLON = require('../lib/babylon');
var c_light = require('../components/c_light');
/**
 * ...
 * @author Brendon Smith
 * http://seacloud9.org
 * LightWeight 3D System Design engine
 */
class e_light{
	constructor(_defaults = null){
		this._defaults = _defaults == null ? this.defaults(): _defaults;
		this.entity = new CES.Entity();
		this.init();
	}

	defaults(){
		return{
			_type:'Hemispheric',
			name:'Hemispheric',
			_position:new BABYLON.Vector3(0, 10, 0),
			_rotation:new BABYLON.Vector3(0, 0, 0),
			_scene:{},
			_hasSystem:false
		}
	}

	init(){
		this.entity.addComponent(new c_light(this._defaults));
	}
}
module.exports = e_light;