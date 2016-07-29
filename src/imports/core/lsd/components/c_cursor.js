var CES = require('ces');
var BABYLON = require('../lib/babylon');
/**
 * ...
 * @author Brendon Smith
 * http://seacloud9.org
 * LightWeight 3D System Design engine
 */
class c_cursor {
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
		var _x = document.documentElement.clientWidth / 2;
		var _y = document.documentElement.clientHeight / 2;
    	this.pickResult = this.scene.pick(_x, _y);
    	this.scene.pickActions(this.pickResult.pickedMesh);
    	if(!CATAMARAN.isMobile()){
    		var rayPick = BABYLON.Ray(this.scene.activeCameras[0].position,  BABYLON.Vector3(0, 0, -1), 9000 );
        	this.scene.pickWithRay(rayPick, this.scene.pickTouchResultRay);
    	}
    }

    touchPick(){
    	var _x = document.documentElement.clientWidth / 2;
		var _y = document.documentElement.clientHeight / 2;
    	this.pickResult = this.scene.pick(_x, _y);
    	this.scene.pickActions(this.pickResult.pickedMesh);
    	if(CATAMARAN.isMobile()){
    		var rayPick = BABYLON.Ray(this.scene.activeCameras[0].position,  BABYLON.Vector3(0, 0, -1), 9000 );
        	this.scene.pickWithRay(rayPick, this.scene.pickTouchResultRay);
    	}
    }



	setListners(){
			window.addEventListener('mousedown', this.rayPick.bind(this));
    		window.addEventListener('mouseup', this.rayPick.bind(this));
    		window.addEventListener('click', this.rayPick.bind(this));
    		window.addEventListener('touchstart', this.touchPick.bind(this));
    		window.addEventListener('touchend', this.touchPick.bind(this));
    }


}
module.exports = c_cursor;