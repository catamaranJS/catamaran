import * as CES from 'ces';
export { BABYLON } from '../lib/babylon';
import { utils } from '../utils/utils';
var defaults = utils.defaultArgs();
defaults._name = 'material';
/**
 * ...
 * @author Brendon Smith
 * http://seacloud9.org
 * LightWeight 3D System Design engine
 */
export class c_curvedplane {
	constructor(_opts = defaults){
		this.name = _opts._name + utils.guid();
		this.obj = null;
		this._opts = _opts;
		
		var paths = [];
		for (var t = 0; t < _opts._hSize; t++) {
			var path = [];
			for (var k = -2; k <= 2; k++) {
			  var x = k;
			  var y = (k * k) / 5;
			  var z = t;
			  path.push(new BABYLON.Vector3(x, y, z));
			}
			paths.push(path);
		}
		
		this.obj = BABYLON.Mesh.CreateRibbon(this.name, paths, false, false, 0, _opts._scene, true, BABYLON.Mesh.DOUBLESIDE);
		this.obj.scaling.x =  _opts._scaling[0];
		this.obj.scaling.y =  _opts._scaling[1];
		this.obj.scaling.z =  _opts._scaling[2];
		this.obj.material = mat;


		if(_opts._hasPicking){
			this.generateHitSphere();
		} 
		

		this.options = {
			name:this.name ,
			init: this.constructor,
			obj:this.obj
		}
		CES.Component.extend(this.options);
	}

	generateHitSphere(){
		this.hitSphere = BABYLON.Mesh.CreateSphere(this.name+"hitSphere", 16, 0.1, _opts._scene);
	 	this.hitSphere.parent = this.obj;
	 	this.hitSphere.position.z = 1.0;
	 	this.hitSphere.position.y = 1;
	 	this.hitSphere.isVisible = false;
	}

	

}