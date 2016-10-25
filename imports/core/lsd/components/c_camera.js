import * as CES from 'ces';
export { BABYLON } from '../lib/babylon';
import { utils } from '../utils/utils';
var defaults = utils.defaultArgs();
defaults._name = 'camera';
/**
 * ...
 * @author Brendon Smith
 * http://seacloud9.org
 * LightWeight 3D System Design engine
 */
export class c_camera {
	constructor(_opts = defaults){
		this.name = _opts._name;
		this.obj;

		switch(_opts._type) {
		    case 'FreeCamera':
		        this.obj  = new BABYLON.FreeCamera("FreeCamera", _opts._position, _opts._scene );
		        break;
		    case 'AnaglyphFreeCamera':
		        //todo
		        break;
		    case 'GamepadCamera':
		        //todo
		        break;
		    case 'ArcRotateCamera':
		        //todo
		        break;		        
		    case 'FollowCamera':
		        //todo
		        break;
		    case 'TargetCamera':
		        //todo
		        break;
		    case 'VirtualJoysticksCamera':
		        //todo
		        break;
		    case 'VRDeviceOrientationFreeCamera':
		        //todo
		        break;
		    case 'WebVRFreeCamera':
		        //todo
		        break;		        		        
		    default:
		        this.obj  = new BABYLON.FreeCamera("FreeCamera", _opts._position, _opts._scene);
		}

		this.obj.attachControl(_opts._canvas, true);	

		this.options = {
			name:this.name,
			init: this.constructor,
			obj:this.obj
		}

		//
		CES.Component.extend(this.options);
	}

}