import * as CES from 'ces';
export { BABYLON } from '../lib/babylon';
import { utils } from '../utils/utils';
var defaults = utils.defaultArgs();
defaults._name = 'portal';
/**
 * ...
 * @author Brendon Smith
 * http://seacloud9.org
 * LightWeight 3D System Design engine
 */
export class c_portal {
	constructor(_opts = defaults){
		this.name = _opts._name + utils.guid();
		this.scene =  _opts._scene;
		this.obj = null;
		this.plane = null;
		this.hadFired = false;
		this.portalImg = _opts._portalImg;
		this._href = _opts._href;
		this._portalPosition = _opts._portalPosition;

		BABYLON.SceneLoader.ImportMesh("", "/assets/scene/", "portal.babylon", this.scene , function (newMeshes) {
                this.obj  = newMeshes[0];
                this.obj.scaling.x = this.obj.scaling.y = this.obj.scaling.z = 3;
                this.plane = BABYLON.Mesh.CreatePlane("plane", 0.5, scene);
            	this.plane.position.y =  1;
            	this.plane.parent = newMeshes[0];
            	newMeshes[1].parent = newMeshes[0];
            	newMeshes[2].parent = newMeshes[0];
            	newMeshes[3].parent = newMeshes[0];
            	for(let i = 0; i < newMeshes.length; i++){
            		newMeshes[i].checkCollisions = true;
            	}
	            var materialPlane = new BABYLON.StandardMaterial("portalImg", this.scene);
	            materialPlane.diffuseTexture = new BABYLON.Texture(this.portalImg, this.scene);
	            materialPlane.backFaceCulling = false;
	            this.plane.material = materialPlane;
	            this.obj.layerMask = parseInt(_opts._layerMask);
				this.obj.isPickable = _opts._isPickable;
				this.obj.position = _opts._position;
				this.obj.rotation = _opts._rotation;
				this.options = {
					name:this.name ,
					init: this.constructor,
					plane: this.plane,
					obj:this.obj
				}
				for(let i = 0; i < this.scene.cameras.length; i++){
					this.scene.cameras[i].onCollide = function (colMesh) {
						if (colMesh.uniqueId == newMeshes[2].uniqueId && !this.hadFired && this._portalPosition == null) {
							this.hadFired = true;
							window.location = _opts._href;
						}else{
							if(this._portalPosition != null){
								this.scene.activeCamera.position = utils.getVector(this._portalPosition);
							}
						}
					}	
				}
				CES.Component.extend(this.options);
         }.bind(this));
	}

}