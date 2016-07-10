var CES = require('ces');
var BABYLON = require('../lib/babylon');
/**
 * ...
 * @author Brendon Smith
 * http://seacloud9.org
 * LightWeight 3D System Design engine
 */
class c_scene {
	constructor(_name = 'scene'){
		this.name = _name;
		this.canvas;
		this.options = {
			name:this.name,
			init: this.constructor,
			obj:null
		}
		Promise.all([document.querySelector('canvas')]).then(this.init.apply(this));
	}

	init(){
			this.canvas = document.querySelector('canvas');
			this.canvas.addEventListener('canvas_init', function (e) {
				this.engine = new BABYLON.Engine(this.canvas , true);
				this.scene = new BABYLON.Scene(this.engine);
				this.scene.clearColor = new BABYLON.Color4(0,0,0,0.0000000000000001); 
				this.options.obj = this.scene;
				CES.Component.extend(this.options);
				document.querySelector('canvas').setAttribute("touch-action", 'none');
			}.bind(this), false);
	}

	

	finalize(){
		CES.Component.extend(this.options);
	}
}
module.exports = c_scene;