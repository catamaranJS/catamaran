import * as CES from 'ces';
import * as BABYLON from '../lib/babylon';
import { utils } from '../utils/utils';
var defaults = utils.defaultArgs();
defaults._name = 'mesh';
/**
 * ...
 * @author Brendon Smith
 * http://seacloud9.org
 * LightWeight 3D System Design engine
 */
export class c_mesh {
	constructor(_opts = defaults){
		this.name = _opts._name + utils.guid();
		this.obj = null;
		switch(_opts._type) {
		    case 'Box':
		        this.obj= BABYLON.Mesh.CreateBox(this.name , _opts._size, _opts._scene);
		        break;
		    case 'Sphere':
		        //(name of the sphere, segments, diameter, scene) 
				this.obj = BABYLON.Mesh.CreateSphere(this.name , _opts._segments, _opts._diameter, _opts._scene);
		        break;
		    case 'Plane':
		         this.obj = BABYLON.Mesh.CreatePlane(this.name , _opts._size, _opts._scene);
		        break;		        
		    case 'Cylinder':
		       	//(name, height, diameter, tessellation, scene, updatable)
				this.obj = BABYLON.Mesh.CreateCylinder(this.name , _opts._height, _opts._diameterTop,  _opts._diameterBottom, _opts._tesselation, _opts._subdivisions, _opts._scene, false);
		        break;
		    case 'Torus':
		        // (name, diameter, thickness, tessellation, scene, updatable)
				this.obj = BABYLON.Mesh.CreateTorus(this.name , _opts._diameter, _opts._thickness, _opts._tesselation, _opts._scene, false);
		        break;	
		     case 'Ribbon':
		        // (name: string, pathArray: Vector3[][], closeArray: boolean, closePath: boolean, offset: number, scene: Scene, updatable?: boolean, sideOrientation?: number, instance?: Mesh)
				this.obj = BABYLON.Mesh.CreateRibbon(this.name, _opts._path, _opts._closeArray = false, _opts._closePath = false,  _opts._offset = 0, _opts._scene,  _opts._updateable = true, _opts._sideOreientation = BABYLON.Mesh.DOUBLESIDE, _opts._instance = undefined);
		        break;	            		        
		    default:
		        this.obj= BABYLON.Mesh.CreateBox(this.name, _opts._size, _opts._scene);
		 }
		this.obj.layerMask = parseInt(_opts._layerMask);
		this.obj.isPickable = _opts._isPickable;
		this.obj.position = _opts._position;
		this.obj.rotation = _opts._rotation;
		this.options = {
			name:this.name ,
			init: this.constructor,
			obj:this.obj
		}
		CES.Component.extend(this.options);
	}

}