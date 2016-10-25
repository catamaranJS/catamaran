import * as CES from 'ces';
import * as BABYLON from '../lib/babylon';
/**
 * ...
 * @author Brendon Smith
 * http://seacloud9.org
 * LightWeight 3D System Design engine
 */
export class c_cursor {
	constructor(_opts){
		this.name = _opts._name;
		this.canvas = _opts._canvas;
		this.scene = _opts._scene;
		this.cursorRing = BABYLON.Mesh.CreateTorus("cursorRing", 0.8, 0.11, 8, this.scene, false);
		this.cursorRing.position.x = 0;
	
		this.cursorRing.position.y = 0;
		this.cursorRing.position.z = 100;
		this.cursorRing.rotation.x = 1.5;
		this.cursorRing.layerMask = _opts._activeDialogLayer;

		this.options = {
			name:this.name,
			init: this.constructor,
			obj:null
		}
		this.setListners();
		this.obj = this.cursorRing;
		CES.Component.extend(this.options);
	}

	rayPick(){
    	this.pickResult = this.scene.pick(this.scene.pointerX, this.scene.pointerY);
  	 	//console.log(this.pickResult);
    }


	setListners(){
			window.addEventListener('mousedown', this.rayPick.bind(this));
    		window.addEventListener('mouseup', this.rayPick.bind(this));
    		window.addEventListener('click', this.rayPick.bind(this));
    }


}