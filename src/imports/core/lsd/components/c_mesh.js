var CES = require('ces');
var BABYLON = require('../lib/babylon');
var utils = require('../utils/utils');
var defaults = utils.defaultArgs();
defaults._name = 'mesh';
/**
 * ...
 * @author Brendon Smith
 * http://seacloud9.org
 * LightWeight 3D System Design engine
 */
class c_mesh {
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
		    default:
		        this.obj= BABYLON.Mesh.CreateBox(this.name, _opts._size, _opts._scene);
		 }
		this.obj.layerMask = parseInt(_opts._layerMask);
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
module.exports = c_mesh;