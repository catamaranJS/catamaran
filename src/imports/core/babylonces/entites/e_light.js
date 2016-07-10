var CES = require('ces');
var BABYLON = require('../lib/babylon');
var c_light = require('../components/c_light');
/**
 * ...
 * @author Brendon Smith
 * http://seacloud9.org
 */
class e_light{
	constructor(_defaults = {}){
		this.entity = new CES.Entity();
		this.entity.addComponent(new c_light(_defaults));
	}
}
module.exports = e_light;