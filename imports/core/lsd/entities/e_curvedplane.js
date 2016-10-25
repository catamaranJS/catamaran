import * as CES from 'ces';
export { BABYLON } from '../lib/babylon';
import { utils } from '../utils/utils';
import { c_curvedplane } from '../components/c_curvedplane';
import { c_material } from '../components/c_material';
/**
 * ...
 * @author Brendon Smith
 * http://seacloud9.org
 * LightWeight 3D System Design engine
 */
export class e_curvedplane{
	constructor(_defaults = null){
		this.entity = new CES.Entity();
		this.mesh;
		this.material;
		this._defaults = _defaults == null ? this.defaults(): _defaults;
		this.init();
	}

	static defaults(){
		return{
			e_type:'e_curvedplane',
			_type:'curvedUI',
			name:'curvedUI',
			_layerMask: "0x0FFFFFFF",
			_isPickable: true,
			_hSize:3,
			_scaling:1.5,
			_position:'0,0,0',
			_rotation:'0,0,0',
			_material:'default',
			_scene:{}
		}
	}

	init(){		
		this.mesh = new c_curvedui(this._defaults);
		this.entity.addComponent(this.mesh);
		this.material = new c_material(this._defaults);
		this.entity.addComponent(this.material);
		this.mesh.obj.material = this.material.obj;
	}
}
