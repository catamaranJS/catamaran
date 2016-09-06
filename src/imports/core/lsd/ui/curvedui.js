class CurveUI {

    constructor(_scene, _image, _name, _callback = null, _mat = null) {
        this.scene = _scene;
        this._image = _image;
        this._name = _name;
        this._mat = _mat;
        this.mesh = null;
        this.hSize = 3;
        this.hitSphere = null;
        this._hitCallback = _callback;
        this.init();
        this.alphamodes = [
			BABYLON.Engine.ALPHA_COMBINE,
			BABYLON.Engine.ALPHA_ADD,
			BABYLON.Engine.ALPHA_SUBTRACT,
			BABYLON.Engine.ALPHA_MULTIPLY,
			BABYLON.Engine.ALPHA_MAXIMIZED
		];
    }


    setMeshVals(_item){
    	this.mesh = _item;
		this.mesh.setGaze = this.setGaze;
		this.mesh.endGaze = this.endGaze;
		this.mesh.hitTime = null;
		this.mesh.setTimerInterval = this.setTimerInterval;
		this.mesh.intervalID = null;
    	this.mesh.hitCallback = this._hitCallback;
    	this.mesh.isPickable = true;
    }

    init(){
    	var mat = new BABYLON.StandardMaterial(this._name+ "mat", this.scene );
    	mat.specularPower = 64;
        mat.diffuseColor = new BABYLON.Color3(1.00, 1.00, 1.00);
        mat.emissiveColor = new BABYLON.Color3(0.99, 0.94, 0.94);
    	var sd = BABYLON.Mesh.DOUBLESIDE;
    	if(this._mat  == null ){
    		mat.diffuseTexture = new BABYLON.Texture(this._image, this.scene);
	    	mat.diffuseTexture.hasAlpha = true;
	    	mat.useLogarithmicDepth = true;
	    	mat.disableDepthWrite = false;
		  	mat.alpha = 1;
		  	mat.hasAlpha = true;
		  	mat.backFaceCulling = false;
		  }else{
		  	 this._mat.video.pause();
		  	 this._mat.video.isPlaying = false;
		  	 this._mat.video.addEventListener('playing', function(){
			      this._mat.video.isPlaying = true;
			 }.bind(this))
			 this._mat.video.addEventListener('pause', function(){
			       this._mat.video.isPlaying = false;
			  }.bind(this))

             mat.diffuseTexture = this._mat;
		  }
    	
		// parabola
		var paths = [];
		for (var t = 0; t < this.hSize; t++) {
			var path = [];
			for (var k = -2; k <= 2; k++) {
			  var x = k;
			  var y = (k * k) / 5;
			  var z = t;
			  path.push(new BABYLON.Vector3(x, y, z));
			}
			paths.push(path);
		}
		
		var _curveUI = BABYLON.Mesh.CreateRibbon(this._name, paths, false, false, 0, this.scene, true, sd);
		_curveUI.scaling.x = 0.5;
		_curveUI.scaling.y = 0.5;
		_curveUI.scaling.z = 0.5;
		_curveUI.material = mat;
		window._mat = this._mat;
		if(this._name == "vid"){
			_curveUI.actionManager = new BABYLON.ActionManager(this.scene);
		    _curveUI.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
				this._mat.video.play();
			}));
		}
		

		//_curveUI.checkCollisions = true;
		this.setMeshVals(_curveUI);
		this.generateHitSphere();
	 }

	 setTimerInterval(){
	 	this.intervalID = null;
	 	this.intervalID = setInterval(this.hitCallback, 2000);
	 }

	 setGaze(){
	 	this.hitTime = new Date().getTime();
	 	this.setTimerInterval.apply(this);
	 }

	 endGaze(){
	 	var end = new Date().getTime();
		var time = end - this.hitTime;
		this.hitTime = null;
		clearInterval(this.intervalID);
		return time;
	 }

	 generateHitSphere(){
	 	this.hitSphere = BABYLON.Mesh.CreateSphere(this._name+"hitSphere", 16, 0.1, this.scene);
	 	this.hitSphere.parent = this.mesh;
	 	this.hitSphere.position.z = 1.0;
	 	this.hitSphere.position.y = 1;
	 	this.hitSphere.scaling.y = 4;
	 	this.hitSphere.scaling.x = 4;
	 	this.hitSphere.scaling.z = 4;
	 	this.hitSphere.isVisible = false;
	 }

}

module.exports = CurveUI;