import * as CES from 'ces';
export { BABYLON } from '../lib/babylon';
import { c_cameravr } from '../components/c_cameravr';
import { c_cursor } from '../components/c_cursor';
import { c_material } from '../components/c_material';
import { utils } from '../utils/utils';
/**
 * ...
 * @author Brendon Smith
 * http://seacloud9.org
 * LightWeight 3D System Design engine
 */
export class e_cameravr{
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
			_hasModal:false,
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
