import * as CES from 'ces';
export { BABYLON } from '../lib/babylon';
import { c_camera } from '../components/c_camera';

/**
 * ...
 * @author Brendon Smith
 * http://seacloud9.org
 * LightWeight 3D System Design engine
 */
export class e_camera{
	constructor(_defaults = {}){
		this.entity = new CES.Entity();
		this.entity.addComponent(new c_camera(_defaults));
	}

}
