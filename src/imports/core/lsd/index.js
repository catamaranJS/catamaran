var CES = require('ces');
var utils = require('./utils/utils');
var e_scene = require('./entites/e_scene');
var e_cameravr = require('./entites/e_cameravr');
var e_box = require('./entites/e_box');
var e_light = require('./entites/e_light');
/**
 * ...
 * @author Brendon Smith
 * http://seacloud9.org
 * LightWeight 3D System Design engine
 */
class lsd{
	constructor(){
		this._defaults = utils.defaultArgs();
		this._crurrentScene;
		this._e_scene = new e_scene();
		this._e_cameravr = null;
		this.world = new CES.World();
		this.world.addEntity(this._e_scene.entity);
		this.pickInterval = 1;
		this.canvas;
		this._assets = [];
		Promise.all([document.querySelector('canvas')]).then(this.init.apply(this));
	}

	init(){
			this.canvas = document.querySelector('canvas');
			this.canvas.addEventListener('canvas_init', function (e) {
				this.jsonAssets = [
		            {name : "grass", src : "/assets/img/grass.jpg", type: 'image' }
		        ];
		        this._crurrentScene = this._defaults._scene = this._e_scene.scene.scene;
				utils.assetsLoad.apply(this);
			}.bind(this), false);
	}

	initListners(){
		window.addEventListener("resize", function () {
		        	this.canvas.heigth = window.innerHeight;
        			this.canvas.width = window.innerWidth;	
		            this._crurrentScene.getEngine().resize();
		        }.bind(this));
	}

	assetLoadingFinished(){
				this._defaults._name =  this._defaults._type = 'box';
				//this._defaults._texture = this._assets["grass"];
				this._defaults._diffuseColor = utils.color();
				this._defaults._position = new BABYLON.Vector3(0, 0, 0);
				var box = new e_box(this._defaults);
				this.world.addEntity(box.entity);
				this._defaults._name =  this._defaults._type = 'Hemispheric';
				this._defaults._position = new BABYLON.Vector3(0, 10, 0);
				var light = new e_light(this._defaults);
				this.world.addEntity(light.entity);
				this._defaults._name = 'camera';
				this._defaults._canvas = this.canvas;
				this._defaults._position = new BABYLON.Vector3(0, 0, 0);
				this._e_cameravr = new e_cameravr(this._defaults);
				this.world.addEntity(this._e_cameravr.entity);



				this.initSceneAnimation();
				this.initListners();
		        
	}

	initSceneAnimation(){
			this.tick = 0.01;
			this._crurrentScene.getEngine().runRenderLoop(function () {
			this.tick += .01;
			window.tick = this.tick;
			if(this.tick % this.pickInterval  <= 0.9 && this.tick % this.pickInterval  >= 0.89){
				this._e_cameravr.cursor.rayPick();
			}
			if(this._crurrentScene.activeCamera){
			    this._crurrentScene.render();
			}
			this.world.update(this.tick);
			}.bind(this));
	}
}
module.exports = lsd;