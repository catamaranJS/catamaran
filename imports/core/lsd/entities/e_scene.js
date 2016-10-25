import * as CES from 'ces';
import * as BABYLON from '../lib/babylon';
import { utils } from '../utils/utils';
import { c_canvas } from '../components/c_canvas';
import { c_scene } from '../components/c_scene';
/**
 * ...
 * @author Brendon Smith
 * http://seacloud9.org
 * LightWeight 3D System Design engine
 */
export class e_scene{
	constructor(_opts = null){
		this.entity = new CES.Entity();
		this.entity.addComponent(new c_canvas('canvas', _opts));
		this.entity.addComponent(new c_scene('scene'));
		this.canvas = this.entity._components.$canvas;
		this.scene = this.entity._components.$scene;
	}

}
