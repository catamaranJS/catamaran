var CES = require('ces');
var utils = require('./utils/utils');
var entities = require('./entities');
var systems = require('./systems');
var Request = require('../xhr/Request');
var BABYLON = require('./lib/babylon');
var VideoTextureExtended = require('./texture/videotextureextended');
var CurveUI = require('./ui/curvedui');
var SphereUI = require('./ui/sphereui');

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
 		this._e_sceneVid = new entities.e_scene(this._defaults);
 		this._e_cameravr = null;
 		this.camera = null;
 		this.world = new CES.World();
 		this.world.addEntity(this._e_scene.entity);
 		this.world.addEntity(this._e_sceneVid.entity);
 		this.canvas;
 		this.teleporterScene = true;
 		this.altSceneCamInit = false;
 		this.currentScene = 0;
    this._vidPlane = null;
 		this.renderSprites = true;
 		this._activeScenes = []
 		this._assets = [];
 		Promise.all([document.querySelector('canvas')]).then(this.init.apply(this));
 	}

 	fixCanvas(){
 	var canvasList = document.querySelectorAll('canvas');
       for(let i=0; i < canvasList.length; i++){
          canvasList[i].setAttribute("touch-action", 'none');
          canvasList[i].style.width = '';
          canvasList[i].style.height = '';
          canvasList[i].height = document.documentElement.clientHeight;
          canvasList[i].width = document.documentElement.clientWidth;
 		}	
 	}

 	init(){
 		this.canvas = document.querySelector('canvas');
 		this.defaults = new Request("/assets/scene/scene.json", this.dataLoaded.bind(this));
    window.babylonData = this.defaults;
 	}

 	dataLoaded(){
 		this._data  = this.defaults.data;
 		this.canvas.addEventListener('canvas_init', function (e) {
 			this.jsonAssets = this._data.assets;
 			this._crurrentScene = this._defaults._scene = this._e_scene.scene.scene;
      this._crurrentScene.pickActions = this.pickResult.bind(this);
      //this._crurrentScene.pickWithRayAction = this.pickWithRayAction.bind(this);
      this._crurrentScene.pickTouchResultRay = this.pickTouchResultRay.bind(this);
 			this._crurrentSceneVid =  this._e_sceneVid.scene.scene;
 			utils.assetsLoad.apply(this);
 		}.bind(this), false);

 	}

 	initListners(){
 		window.addEventListener("resize", function () {
 			this.fixCanvas();	
 			this._crurrentScene.getEngine().resize();
 			//this._crurrentSceneVid.getEngine().resize();
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

 	initVidScene(){
 		if(!this.altSceneCamInit){
 			this.altSceneCamInit = true;
 			var defaults =      {
 				"e_type": "e_cameravr",
 				_layerMask: 0x0FFFFFFF,
				_hasModal:false,
				_activeDialogLayer: 0x10000000,
 				"_position": BABYLON.Vector3.Zero(),
 				"_rotation": BABYLON.Vector3.Zero(),
 				"_cursor":null,
 				"_fpsUI":false,
 				"_name": "altCamera",
 				"_oneAxisRotation":true,
 				"_position":BABYLON.Vector3.Zero(),
 				"_rotation":BABYLON.Vector3.Zero(),
 				"_material": {
 					"name": "pink",
 					"_texture": null,
 					"_alpha": 1,
 					"_uScale": 1,
 					"_vScale": 1,
 					"_backFaceCulling": true,
 					"_vOffset": 0,
 					"_uOffset": 0,
 					"_hasAlpha": false,
 					"_diffuseColor":  new BABYLON.Color3(125,0,127)
 				},
 				"_scene": this._crurrentSceneVid
 			}

 			var ecamVR = new entities.e_cameravr(defaults);
 			this.world.addEntity(ecamVR.entity);

 		}
 		
 	
 		var boxDefaults = {
 			"e_type": "e_box",
 			_layerMask: 0x0FFFFFFF,
 			_activeDialogLayer: 0x10000000,
 			"_size": 10,
 			"_type": "Box",
 			"_name": "box999",
 			"_isPickable": true,
 			"_scaling": BABYLON.Vector3.Zero(),
 			"_position": BABYLON.Vector3.Zero(),
 			"_rotation": BABYLON.Vector3.Zero(),
 			"_material": {
 				"name": "pink",
 				"_texture": null,
 				"_alpha": 1,
 				"_uScale": 1,
 				"_vScale": 1,
 				"_backFaceCulling": false,
 				"_vOffset": 0,
 				"_uOffset": 0,
 				"_hasAlpha": false,
 				"_diffuseColor": new BABYLON.Color3(125,0,127)
 			},
 			"_scene": this._crurrentSceneVid
 		}

 		var ebox = new entities.e_box(boxDefaults);


 		this._activeScenes[1].renderLoop = function () {
 			if(this._crurrentSceneVid.activeCamera && this.world._multiuserInit ){
 				this._crurrentSceneVid.render();
 			}
 		}.bind(this);
 	}

 	toggleMeshes(_state){
 		for(let i = 0; i < this._crurrentScene.meshes.length; i++){
 			this._crurrentScene.meshes[i].isVisible = _state;
 		}
 	}

 	sceneVideo(videoID){
 		this.toggleMeshes(false);
 		_lsdengine._crurrentScene.spritesEnabled = false;
 		this._crurrentScene.activeCameras[0].position =  new BABYLON.Vector3(-0.8809513548279568, 0, -0.569289644689718);
    this._crurrentScene.activeCameras[0].rotation =  new BABYLON.Vector3( 0, 1.5091394112913126, 0);
 		var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, this._crurrentScene);
 		var materialsphere = new BABYLON.StandardMaterial("texture2", this._crurrentScene);
 		materialsphere.diffuseColor = new BABYLON.Color3(0.49019607843137253, 0, 0.4980392156862745); //Red
    materialsphere.alpha = 0.3;
    materialsphere.backFaceCulling = false;
    sphere.scaling = new BABYLON.Vector3(20,20,20);
    sphere.material = materialsphere;
    var videoTexture = new VideoTextureExtended("video", [babylonData.data.vidImports[0].loc], this._crurrentScene, false, false, 3);
    this._vidPlane = new CurveUI(this._crurrentScene, null, 'vid', function(){}, videoTexture);
    this._vidPlane.mesh.position = new BABYLON.Vector3(10, -1.8, 0);
    this._vidPlane.mesh.rotation = new BABYLON.Vector3(-1.5666,0,1.5);
    this._vidPlane.mesh.scaling = new BABYLON.Vector3(2,2,2);
    this._vidPlane.hitCount = 1;
    window._vidPlane = this._vidPlane
    }

 	exitsceneVideo(){
 		this.toggleMeshes(true);
 		_lsdengine._crurrentScene.spritesEnabled = true;
 	}

 	sceneTick(){
 			this.tick += .01;
 			window.tick = this.tick;
 			this.world.update(this.tick);
 	}

 	toggleScene(_sceneInt = 1){
 		this._engine.stopRenderLoop()
 		this.currentScene = _sceneInt;
 		setTimeout(function(){
			this.sceneRunRenderLoop();
 		}.bind(this), 2000);
 	}

 	sceneRunRenderLoop(){;
 		this._engine.runRenderLoop(function () {
 			this.sceneTick();
 			this._activeScenes[this.currentScene].renderLoop();
 		}.bind(this));
 	}



 	initSceneAnimation(){
 		this.tick = 0.01;
 		// todo remove this only for debugging purposes
 		window.scene = this._crurrentScene;
 		window.sceneVid = this._crurrentSceneVid;
 		window._lsdengine = this;

 		this._activeScenes.push(this._crurrentScene);
 		this._activeScenes.push(this._crurrentSceneVid);
 		this.world._crurrentScene = this._crurrentScene;
 		this.world._multiuserInit = false;
 		this.initSound();
 		//this.initVidScene();
 		this.world._crurrentSceneVid = this._crurrentSceneVid;
 		this.world.teleporterScene = this.teleporterScene;
 		this.world.currentSceneInt= this.currentScene;
 		this.world.renderSprites = this.renderSprites;

    var thirySixShowRing = BABYLON.Mesh.CreateTorus("circle1", 30, 2, 36,  this._crurrentScene, false);
    thirySixShowRing.position = BABYLON.Vector3.Zero();
    var materialsphereB = new BABYLON.StandardMaterial("texture2", this._crurrentScene);
    materialsphereB.diffuseColor = new BABYLON.Color3(0.30196078431372547, 0.8666666666666667, 0.8941176470588236); //blue
    materialsphereB.alpha = 0.2;
    materialsphereB.backFaceCulling = false;
    thirySixShowRing.scaling = new BABYLON.Vector3(8,8,8);
    thirySixShowRing.rotation = new BABYLON.Vector3(0,1.5708,0);
    thirySixShowRing.material = materialsphereB;
    this.showPlan = [];
    var vecTarget = BABYLON.Vector3.Zero();

    var numElements = 36, angle = 0, step = (2*Math.PI) / numElements;
    var radius = 60; 
    for(let i = 1; i < 36; i++){
       var plan = BABYLON.Mesh.CreatePlane("showPlane" + i , 5.0, this._crurrentScene);
       var materialPan = new BABYLON.StandardMaterial("textureMatPan" + i, this._crurrentScene);
       materialPan.diffuseTexture = new BABYLON.Texture("/assets/img/shImg"+i+".png", this._crurrentScene);
       materialPan.diffuseTexture.hasAlpha = true;//Has an alpha
       materialPan.specularPower = 64;
       materialPan.backFaceCulling = false;
       materialPan.diffuseColor = new BABYLON.Color3(1.00, 1.00, 1.00);
       materialPan.emissiveColor = new BABYLON.Color3(0.99, 0.94, 0.94);

       plan.material = materialPan;
       var x =  20 /2 + radius * Math.cos(angle);
       var z =  20  /2 + radius * Math.sin(angle);
       angle += step;
       plan.position.z = z;
       plan.position.x = x;
       vecTarget.scaleToRef( plan.position, 20 );
       plan.lookAt(vecTarget); 
       this.showPlan.push(plan);
    }

 		this._activeScenes[0].renderLoop = function () {
 			if(this._crurrentScene.activeCamera && this.world._multiuserInit ){
 				this._crurrentScene.render();
 			}
 		}.bind(this);
 		this._engine = this._crurrentScene.getEngine();
 		this.sceneRunRenderLoop();
 		

 	}

  toggleVideoPlay(){
    if(this._vidPlane.mesh.material.diffuseTexture.video.isPlaying){
        this._vidPlane.mesh.material.diffuseTexture.video.pause();
    }else{
        this._vidPlane.mesh.material.diffuseTexture.video.play();
    }
  }


  pickTouchResultRay(_item){
    if(this._vidPlane != null && _item != null){
        if(_item.id == this._vidPlane.mesh.id){
            this._vidPlane.hitCount += 1;
            if(this._vidPlane.hitCount % 4 == 0){
              this.toggleVideoPlay();
            }
            
        }
    }
  }



  pickResult(_pick){
    if(this._vidPlane != null && _pick != null){
        if(_pick.id == this._vidPlane.mesh.id){
            this.toggleVideoPlay();
        }
    }
      
  }


 	initSound(){
 		
 		if(window._sharedData != undefined && window._sharedData.Sound != null){
 			this._BabylonSound = new BABYLON.Sound(window._sharedData.Sound.sID, window._sharedData.trackURL, this._crurrentScene, null, { loop: true, autoplay: true });
 		}
 	}


 }
 module.exports = lsd;