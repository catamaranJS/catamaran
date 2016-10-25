var CES = require('ces');
var BABYLON = require('../lib/babylon');
var c_light = require('../components/c_light');
/**
 * ...
 * @author Brendon Smith
 * http://seacloud9.org
 * LightWeight 3D System Design engine
 */
export class e_light{
	constructor(_defaults = null){
		this._defaults = _defaults == null ? this.defaults(): _defaults;
		this.entity = new CES.Entity();
		this.init();
	}

	static defaults(){
		return{
			_type:'Hemispheric',
			e_type:'e_light',
			name:'Hemispheric',
			_position:'0,0,0',
			_rotation:'0,0,0',
			_material:{
				    _alpah:1.0,
					_texture:null,
					_uScale: 1.0,
					_vScale: 1.0,
					_backFaceCulling: true,
					_vOffset: 0.0,
					_uOffset: 0.0,
					_hasAlpha:false,
					_diffuseColor: '127, 0, 140',
				},
			_scene:{}
		}
	}

	init(){
		this.entity.addComponent(new c_light(this._defaults));
	}
}