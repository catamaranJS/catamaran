var CES = require('ces');
var BABYLON = require('../lib/babylon');
var c_camera = require('../components/c_camera');
/**
 * ...
 * @author Brendon Smith
 * http://seacloud9.org
 */
class e_camera{
	constructor(_defaults = {}){
		this.entity = new CES.Entity();
		this.entity.addComponent(new c_camera(_defaults));
	}

}
module.exports = e_camera;