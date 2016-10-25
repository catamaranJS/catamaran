import * as CES from 'ces';
import {utils} from './utils/utils';
import * as entities from './entities';
import * as systems from './systems';
import { Request } from '../xhr/Request';
import * as BABYLON from './lib/babylon';

/**
 * ...
 * @author Brendon Smith
 * http://seacloud9.org
 * LightWeight 3D System Design engine
 */
 export class lsd{
 	constructor(_appendEl = document.body){
 		this._defaults = utils.defaultArgs();
    this._defaultsScene_two = utils.defaultArgs();
 		this._defaultsScene_two._appendEL = this._defaults._appendEL = _appendEl;
 		this._data = null;
 		this._currentScene;
 		this._e_scene = new entities.e_scene(this._defaults);
    this._e_scene_two = new entities.e_scene(this._defaultsScene_two);
 		this._e_cameravr = null;
    this._scenes = [];
    this._activeScene = 0;
 		this.camera = null;
 		this.world = new CES.World();
 		this.world.addEntity(this._e_scene.entity);
    this.world.addEntity(this._e_scene_two.entity);
 		this.canvas;
 		this._assets = [];
 		Promise.all([document.querySelector('canvas')]).then(this.init.apply(this));
 	}

 	init(){
 		this.canvas = document.querySelector('canvas');
 		this.defaults = new Request("/assets/scene/scene.json", this.dataLoaded.bind(this));
 	}

 	dataLoaded(){
 		this._data  = this.defaults.data;
 		this.canvas.addEventListener('canvas_init', function (e) {
 			this.jsonAssets = this._data.assets;
 			this._currentScene = this._defaults._scene = this._e_scene.scene.scene;
      this._scenes.push(this._currentScene);
      this._currentAltScene  = this._e_scene_two.scene.scene;
      this._scenes.push(this._currentAltScene);
 			utils.assetsLoad.apply(this);
 		}.bind(this), false);

 	}

 	initListners(){
 		window.addEventListener("resize", function () {
 			this.canvas.heigth = window.innerHeight;
 			this.canvas.width = window.innerWidth;	
 			this._currentScene.getEngine().resize();
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
 		this._data.entities[i].defaults._scene = this._currentScene;
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
 			this._data.systems[i].defaults._scene = this._currentScene;
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

  swapScene(){
    var camSwap = this._scenes[this._activeScene].activeCameras;
    var prevScene = this._scenes[this._activeScene];
    this._activeScene  = this._activeScene == 0 ? 1:0;
    this._scenes[this._activeScene].activeCameras = camSwap;
    this._scenes[this._activeScene].lights = prevScene.lights;
    for(let i = 0; i < this._scenes[this._activeScene].activeCameras.length; i++){
          this._scenes[this._activeScene].activeCameras[i]._scene = this._scenes[this._activeScene];
    }

  }


  sceneDemo(){
    var sphere = BABYLON.Mesh.CreateSphere("sphereTest", 16, 2, this._scenes[this._activeScene]);
    sphere.position.y = 1;
    sphere.layerMask = 0x0FFFFFFF;
  }

 	initSceneAnimation(){
 		this.tick = 0.01;
 		// todo remove this only for debugging purposes
 		window.scene = this._scenes[this._activeScene];
 		this.world._currentScene = this._currentScene;
    // todo meh disable multiuser 
 		this.world._multiuserInit = true;
    this._defaults._scene.collisionsEnabled = true;
    for(let i = 0; i < this._defaults._scene.cameras.length; i++){
          this._defaults._scene.cameras[i].checkCollisions = true;
    }
    this._scenes[0].renderLoop = function () {
      if(this._currentScene.activeCamera && this.world._multiuserInit){
        this._currentScene.render();
      }
    }.bind(this);

    
    this._scenes[1].renderLoop = function () {
        this._currentAltScene.render();
    }.bind(this);
    

 		this._scenes[this._activeScene].getEngine().runRenderLoop(function () {
 			this.tick += .01;
 			window.tick = this.tick;
 			this.world.update(this.tick);
 			this._scenes[this._activeScene].renderLoop();
 		}.bind(this));


 	}



 	//below this is code that should eventually be eliminiated only for hackathon purposes

 	initSound(){
 		console.log(window._sharedData);
 		if(window._sharedData.Sound != null){
 			this._BabylonSound = new BABYLON.Sound(window._sharedData.Sound.sID, window._sharedData.trackURL);
 		}
 	}


 }