var CES = require('ces');
var BABYLON = require('../lib/babylon');
var c_cameravr = require('../components/c_cameravr');
var c_cursor = require('../components/c_cursor');
var c_material = require('../components/c_material');
/**
 * ...
 * @author Brendon Smith
 * http://seacloud9.org
 * LightWeight 3D System Design engine
 */
class e_cameravr{
	constructor(_defaults = null){
		this._defaults = _defaults == null ? this.defaults(): _defaults;
		this.entity = new CES.Entity();
		this.cursor;
		this.camVR;
		this.material;
		this.init();
	}

	defaults(){
		return{
			_type:'vrCamera',
			_cursor:null,
			name:'vrCamera',
			_position:new BABYLON.Vector3(0, 0, 0),
			_rotation:new BABYLON.Vector3(0, 0, 0),
			_diffuseColor: utils.color(),
			_scene:{},
			_hasSystem:false
		}
	}

	init(){
		this.cursor = new c_cursor(this._defaults);
		this._defaults._cursor = this.cursor.obj;
		this.camVR = new c_cameravr(this._defaults);
		this.material = new c_material(this._defaults);
		this.cursor.material = this.material;
		this.entity.addComponent(this.material);
		this.entity.addComponent(this.cursor);
		this.entity.addComponent(this.camVR);
	}

}
module.exports = e_cameravr;