var CES = require('ces');
var BABYLON = require('../lib/babylon');
var c_mesh = require('../components/c_mesh');
var c_material = require('../components/c_material');
/**
 * ...
 * @author Brendon Smith
 * http://seacloud9.org
 * LightWeight 3D System Design engine
 */
class e_box{
	constructor(_defaults = {}){
		this.entity = new CES.Entity();
		var mesh = new c_mesh(_defaults);
		this.entity.addComponent(mesh);
		var mat = new c_material(_defaults);
		this.entity.addComponent(mat);
		mesh.obj.material = mat.obj;
	}
}
module.exports = e_box;