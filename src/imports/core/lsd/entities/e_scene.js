var CES = require('ces');
var BABYLON = require('../lib/babylon');
var c_canvas = require('../components/c_canvas');
var c_scene = require('../components/c_scene');
/**
 * ...
 * @author Brendon Smith
 * http://seacloud9.org
 * LightWeight 3D System Design engine
 */
class e_scene{
	constructor(){
		this.entity = new CES.Entity();
		this.entity.addComponent(new c_canvas('canvas'));
		this.entity.addComponent(new c_scene('scene'));
		this.canvas = this.entity._components.$canvas;
		this.scene = this.entity._components.$scene;
	}

}
module.exports = e_scene;