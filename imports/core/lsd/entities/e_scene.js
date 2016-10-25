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
export class e_scene{
	constructor(_opts = null){
		this.entity = new CES.Entity();
		this.entity.addComponent(new c_canvas('canvas', _opts));
		this.entity.addComponent(new c_scene('scene'));
		this.canvas = this.entity._components.$canvas;
		this.scene = this.entity._components.$scene;
	}

}
