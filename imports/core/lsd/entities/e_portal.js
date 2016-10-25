var CES = require('ces');
var BABYLON = require('../lib/babylon');
var c_portal = require('../components/c_portal');
var c_material = require('../components/c_material');
var utils = require('../utils/utils');
/**
 * ...
 * @author Brendon Smith
 * http://seacloud9.org
 * LightWeight 3D System Design engine
 */
export class e_portal{
	constructor(_defaults = null){
		this.entity = new CES.Entity();
		this.mesh;
		this.material;
		this._defaults = _defaults == null ? this.defaults(): _defaults;
		this.init();
	}

	static defaults(){
		return{
			e_type:'e_portal',
			_size:10,
			_type:'Portal',
			_name:'portal',
			_layerMask: "0x0FFFFFFF",
			_isPickable: true,
			_portalImg:"/assets/img/amiga.jpg",
			_scaling:1,
			_position:'0,0,0',
			_rotation:'0,0,0',
			_material:'default',
			_href:'http://google.com',
			_portalPosition:null,
			_scene:{}
		}
	}

	init(){		
		this.mesh = new c_portal(this._defaults);
		this.entity.addComponent(this.mesh);
		this.material = new c_material(this._defaults);
		this.entity.addComponent(this.material);
		//this.mesh.obj.material = this.material.obj;
	}
}



