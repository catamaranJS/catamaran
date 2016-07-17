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

	static defaults(){
		return{
			_type:'vrCamera',
			e_type:'e_cameravr',
			_layerMask: 0x0FFFFFFF,
			_activeDialogLayer: 0x10000000,
			_cursor:null,
			_fpsUI:false,
			_name:'vrCamera',
			_oneAxisRotation:true,
			_position:'0,0,0',
			_rotation:'0,0,0',
			_material:'default',
			_canvas:null,
			_scene:{},
		}
	}

	init(){
		this.cursor = new c_cursor(this._defaults);
		this._defaults._cursor = this.cursor.obj;
		this.camVR = new c_cameravr(this._defaults);
		this.camVR.cursorEnt = this.cursor;
		this.fpsUIWindow = this.camVR.fpsUIWindow;
		this.material = new c_material(this._defaults);
		this.cursor.material = this.material;
		this.entity.addComponent(this.material);
		this.entity.addComponent(this.cursor);
		this.entity.addComponent(this.camVR);
	}

}
module.exports = e_cameravr;