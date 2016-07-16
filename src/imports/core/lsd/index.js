var CES = require('ces');
var utils = require('./utils/utils');
var entities = require('./entities');
var Request = require('../xhr/Request');


/**
 * ...
 * @author Brendon Smith
 * http://seacloud9.org
 * LightWeight 3D System Design engine
 */
 class lsd{
 	constructor(){
 		this._defaults = utils.defaultArgs();
 		this._data = null;
 		this._crurrentScene;
 		this._e_scene = new entities.e_scene();
 		this._e_cameravr = null;
 		this.camera = null;
 		this.world = new CES.World();
 		this.world.addEntity(this._e_scene.entity);
 		this.pickInterval = 1;
 		this.canvas;
 		this._assets = [];
 		Promise.all([document.querySelector('canvas')]).then(this.init.apply(this));
 	}

 	init(){
 		this.canvas = document.querySelector('canvas');
 		this.defaults = new Request("/assets/scene/scene.json", this.dataLoaded.bind(this));
 	}

 	dataLoaded(){
 		console.log(this.defaults.data);
 		this._data  = this.defaults.data;
 		this.canvas.addEventListener('canvas_init', function (e) {
 			this.jsonAssets = this._data.assets;
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

 	loopEntites(_functionCall){
 		for(let i = 0; i < this._data.entities.length; i++){
 			_functionCall(i);
 		}
 	}

 	setDefaultsAndMaterials(i){
 		this._data.entities[i].defaults._scene = this._crurrentScene;
 		try{
 			this._data.entities[i].defaults = utils.merge_objects(eval('entities.' + this._data.entities[i].defaults.e_type+".defaults()"), this._data.entities[i].defaults);
 		}catch(e){
 			console.log(e + ' - error loading entity no defaults set');
 		}
 	}

 	setVectorsAndOtherDefaults(i){
 		if(typeof this._data.entities[i].defaults._material != undefined){
 			this._data.entities[i].defaults._material = utils.getMaterials(this._data.materials, this._data.entities[i].defaults._material);
 		}
 		if(typeof this._data.entities[i].defaults._position != undefined){
 			this._data.entities[i].defaults._position = utils.getVector(this._data.entities[i].defaults._position);
 		}
 		if(typeof this._data.entities[i].defaults._rotation != undefined){
 			this._data.entities[i].defaults._rotation = utils.getVector(this._data.entities[i].defaults._rotation, 'rotation');
 		}
 		try{
 			var ent = eval("new entities." + this._data.entities[i].defaults.e_type + "(this._data.entities[i].defaults)");
 			this.world.addEntity(ent.entity);
 		}catch(e){
 			console.log(e + ' - error loading entity');
 		}
 	}

 	assetLoadingFinished(){
 		
 		this.loopEntites(this.setDefaultsAndMaterials.bind(this));
 		this.loopEntites(this.setVectorsAndOtherDefaults.bind(this));

 		this._defaults._name = 'camera';
 		this._defaults._canvas = this.canvas;
 		this._defaults._position = new BABYLON.Vector3(0, 0, 0);
 		this._defaults._fpsUI = true;
 		this._e_cameravr = new entities.e_cameravr(this._defaults);
 		this.camera = this._e_cameravr.camVR;
 		this.world.addEntity(this._e_cameravr.entity);
 		this.initSceneAnimation();
 		this.initListners();
 	}

 	initSceneAnimation(){
 		this.tick = 0.01;
 		// todo remove this only for debugging purposes
 		window.scene = this._crurrentScene;
 		this._crurrentScene.getEngine().runRenderLoop(function () {
 			this.tick += .01;
 			window.tick = this.tick;
 			if(this.tick % this.pickInterval  <= 0.9 && this.tick % this.pickInterval  >= 0.89){
 				this._e_cameravr.cursor.rayPick();
 			}
 			if(this._crurrentScene.activeCamera){
 				if(this.camera.fpsUI){
 					this.camera.fpsUIWindow.text(parseInt(this._crurrentScene.getEngine().fps));
 				}
 				this.world.update(this.tick);
 				this._crurrentScene.render();
 			}
 		}.bind(this));
 	}
 }
 module.exports = lsd;