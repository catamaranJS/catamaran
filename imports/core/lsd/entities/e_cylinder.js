var CES = require('ces');
var BABYLON = require('../lib/babylon');
var c_mesh = require('../components/c_mesh');
var c_material = require('../components/c_material');
var utils = require('../utils/utils');
/**
 * ...
 * @author Brendon Smith
 * http://seacloud9.org
 * LightWeight 3D System Design engine
 */
export class e_cylinder{
	constructor(_defaults = null){
		this.entity = new CES.Entity();
		this.mesh;
		this.material;
		this._defaults = _defaults == null ? this.defaults(): _defaults;
		this.init();
	}

	static defaults(){
		return{
			e_type:'e_cylinder',
			_segments:10.0,
			_diameter:10.0,
			_isPickable: true,
			_scaling:1,
			_type:'Cylinder',
			_name:'Cylinder',
			_layerMask: "0x0FFFFFFF",
			_position:'0,0,0',
			_rotation:'0,0,0',
			_scene:{}
		}
	}

	init(){		
		this.mesh = new c_mesh(this._defaults);
		this.entity.addComponent(this.mesh);
		this.material = new c_material(this._defaults);
		this.entity.addComponent(this.material);
		this.mesh.obj.material = this.material.obj;
	}
}