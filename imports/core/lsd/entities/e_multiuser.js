var CES = require('ces');
var BABYLON = require('../lib/babylon');
var c_multiuser = require('../components/c_multiuser');
var c_material = require('../components/c_material');
var utils = require('../utils/utils');
/**
 * ...
 * @author Brendon Smith
 * http://seacloud9.org
 * LightWeight 3D System Design engine
 */
export class e_multiuser{
	constructor(_defaults = null){
		this.entity = new CES.Entity();
		this.mesh;
		//this.material;
		this._defaults = _defaults == null ? this.defaults(): _defaults;
		this.init();
	}

	static defaults(){
		return{
			e_type:'e_multiuser',
			_name:'multiuser',
			_layerMask: "0x0FFFFFFF",
			_isPickable: true,
			_fbURL: 'https://fascination.firebaseio.com/',
			_scaling:1,
			_position:'0,0,0',
			_rotation:'0,0,0',
			_material:'default',
			_scene:{}
		}
	}

	init(){		
		this.multiuser = new c_multiuser(this._defaults);
		this.entity.addComponent(this.multiuser);
		//this.material = new c_material(this._defaults);
		//this.entity.addComponent(this.material);
		//this.mesh.obj.material = this.material.obj;
	}
}


