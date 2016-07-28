var CES = require('ces');
var utils = require('./utils/utils');
var entities = require('./entities');
var systems = require('./systems');
var Request = require('../xhr/Request');


/**
 * ...
 * @author Brendon Smith
 * http://seacloud9.org
 * LightWeight 3D System Design engine
 */
 class lsd{
 	constructor(_appendEl = document.body){
 		this._defaults = utils.defaultArgs();
 		this._defaults._appendEL = _appendEl;
 		this._data = null;
 		this._crurrentScene;
 		this._e_scene = new entities.e_scene(this._defaults);
 		this._e_cameravr = null;
 		this.camera = null;
 		this.world = new CES.World();
 		this.world.addEntity(this._e_scene.entity);
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

 	loopJsonArr(_functionCall, _type = 'entities'){
 		switch(_type) {
		    case 'entities':
		        for(let i = 0; i < this._data.entities.length; i++){
		 			_functionCall(i);
		 		}
		        break;
		    case 'systems':
		         for(let i = 0; i < this._data.systems.length; i++){
		 			_functionCall(i);
		 		}
		        break;	        		        
		    default:
		     	for(let i = 0; i < this._data.entities.length; i++){
		 			_functionCall(i);
		 		}
		
		}
 		
 	}

 	setDefaultsAndMaterials(i){
 		this._data.entities[i].defaults._scene = this._crurrentScene;
 		this._data.entities[i].defaults._canvas = this.canvas;
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

 	setSystems(i){
 		try{
 			this._data.systems[i].defaults._canvas = this.canvas;
 			this._data.systems[i].defaults._scene = this._crurrentScene;
 			this.world.addSystem( eval("new systems." + this._data.systems[i].defaults.s_type + "(this._data.systems[i].defaults)"));
 		}catch(e){
 			console.log(e + ' - error loading system');
 		}
 	}


 	assetLoadingFinished(){
 		this.loopJsonArr(this.setDefaultsAndMaterials.bind(this));
 		this.loopJsonArr(this.setVectorsAndOtherDefaults.bind(this));
 		this.loopJsonArr(this.setSystems.bind(this), 'systems');
 		this.initSceneAnimation();
 		this.initListners();
 	}

 	initSceneAnimation(){
 		this.tick = 0.01;
 		// todo remove this only for debugging purposes
 		window.scene = this._crurrentScene;
 		this.world._crurrentScene = this._crurrentScene;
 		this.world._multiuserInit = false;
 		this._crurrentScene.getEngine().runRenderLoop(function () {
 			this.tick += .01;
 			window.tick = this.tick;
 			this.world.update(this.tick);
 			if(this._crurrentScene.activeCamera && this.world._multiuserInit){
 				this._crurrentScene.render();
 			}
 		}.bind(this));
 	}
 }
 module.exports = lsd;