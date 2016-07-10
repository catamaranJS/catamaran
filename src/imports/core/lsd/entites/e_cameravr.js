var CES = require('ces');
var BABYLON = require('../lib/babylon');
var c_cameravr = require('../components/c_cameravr');
var c_cursor = require('../components/c_cursor');
var c_material = require('../components/c_material');
/**
 * ...
 * @author Brendon Smith
 * http://seacloud9.org
 * LightWeight 3D System Design engine
 */
class e_cameravr{
	constructor(_defaults = {}){
		this.entity = new CES.Entity();
		this.cursor = new c_cursor(_defaults);
		_defaults._cursor = this.cursor.obj;
		this.camVR = new c_cameravr(_defaults);
		this.mat = new c_material(_defaults);
		this.cursor.material = this.mat;
		this.entity.addComponent(this.mat);
		this.entity.addComponent(this.cursor);
		_defaults._positon =  BABYLON.Vector3.Zero();
		this.entity.addComponent(this.camVR);
	}

}
module.exports = e_cameravr;