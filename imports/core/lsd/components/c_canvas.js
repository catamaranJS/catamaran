import * as CES from 'ces';
import * as BABYLON from '../lib/babylon';
/**
 * ...
 * @author Brendon Smith
 * http://seacloud9.org
 * LightWeight 3D System Design engine
 */
export class c_canvas {
	constructor(_name = 'canvas', _opts){
		this.name = _name;
		this.canvas = document.createElement('canvas');
		this._appendEL = _opts._appendEL;
		this._appendEL.appendChild(this.canvas);
        this.canvas.style.width = document.documentElement.clientWidth + 'px';
        this.canvas.style.height = document.documentElement.clientHeight + 'px';
        this.canvas.style.display = 'block';
        this.canvas.style.float = 'left';
        this.canvas.event = new Event('canvas_init');
        //BABYLON.SceneLoader.ShowLoadingScreen = false;
        this.canvas.addEventListener('touchmove', function (event) {
	      event.preventDefault();
	    });
		Promise.all([document.querySelector('canvas')]).then(this.init.apply(this));
		this.options = {
			name:this.name ,
			init: this.constructor,
			obj:null
		}

	}

	init(){
		setTimeout(function(){
			this.options.obj = this.canvas;
			CES.Component.extend(this.options);
			this.canvas.dispatchEvent(this.canvas.event);
		}.bind(this), 200)
	}

}