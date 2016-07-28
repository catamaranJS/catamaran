var BABYLON = require('../lib/babylon');
class utils{
/**
 * ...
 * @author Brendon Smith
 * http://seacloud9.org
 * LightWeight 3D System Design engine
 */
	static defaultArgs(){



		var _defaults = 
		  { 
				_name:null, 
				_cursor: null,
				_hadModal:false,
				_appendEL:null,
				_cursorVR1: null,
				_cursorVR2: null,
				_layerMask: 0x0FFFFFFF,
				_activeDialogLayer: 0x10000000,
				_type:'FreeCamera', 
				_position:new BABYLON.Vector3(0, 0, 0), 
				_rotation:new BABYLON.Vector3(0, 0, 0), 
				_diameterTop:3,
				_diameterBottom:3,
				_diameter:10.0,
				_size:10.0,
				_subdivisions:6,
				_tesselation:6,
				_thickness:3,
				_segements:10.0,
				_canvas:null,
				_material:{
					_texture:null,
					_uScale: 1.0,
					_vScale: 1.0,
					_backFaceCulling: true,
					_vOffset: 0.0,
					_uOffset: 0.0,
					_hasAlpha:false,
					_diffuseColor: null,
				},
				_scene:{}
			}
		return _defaults;
	}

	/**
	 * 
	 * setsDefaultMaterial
	 */
	static returnDefaultMaterial(){
		 return {
	      "name": "default",
	      "_texture": null,
	      "_alpha": 1,
	      "_uScale": 1,
	      "_vScale": 1,
	      "_backFaceCulling": true,
	      "_vOffset": 0,
	      "_uOffset": 0,
	      "_hasAlpha": false,
	      "_diffuseColor": null
	    }
	}


	/**
	 * generates a random item from an array and returns it
	 * @param string _ScriptSrc: the script source you want to load 
	 * @param function _Callback: the callback you want to exectute after load
	 * @returns random item from given array
	 */

	static loadScript(_ScriptSrc, _Callback) {
		var _Head =  document.querySelector('head');
		var _Script = document.createElement('script');
		_Script.type = 'text/javascript';
		_Script.src = _ScriptSrc;
			_Script.onload = _Callback;
				_Script.onreadystatechange = function() {
					if (this.readyState == 'complete') {
					_Callback();
					}
				}
		_Head.appendChild(_Script);
	}


	/**
	 * generates a random item from an array and returns it
	 * @param array The array you want a random item from
	 * @returns random item from given array
	 */

	static randomArr(arr){
        return arr[Math.floor(Math.random()*arr.length)];
   	}

   	/**
	 * generates a random position from min and a max vector location
	 * @param min the minimum number you want to assing to the vector
	 * @param max the maximum number you want to assing to the vector
	 * @returns a random number that is in between the min and max values
	 */

    static randomPos(min, max){
        return Math.random() * (max - min) + min;
    }

	/**
	 * generates guid
	 */
	static guid() {
  	 function s4() {
	    return Math.floor((1 + Math.random()) * 0x10000)
	      .toString(16)
	      .substring(1);
	  }
	  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	    s4() + '-' + s4() + s4() + s4();
	}

	/**
	 * Overwrites obj1's values with obj2's and adds obj2's if non existent in obj1
	 * @param obj1
	 * @param obj2
	 * @returns obj3 a new object based on obj1 and obj2
	 */
	static merge_objects(obj1,obj2){
	    var obj3 = {};
	    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
	    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
	    return obj3;
	}

	/**
	 * converts degrees to radians 
	 * @param degrees
	 * @returns retunrs a radian
	 */
	static degToRad(degrees){
		return degrees * (Math.PI / 180);
	}

	/**
	 * returns a color3 or color4 object
	 * @param r 1 - 255
	 * @param g 1 - 255
	 * @param b 1 - 255
	 * @param alpha float 1.0 - 0.0
	 * @returns retunrs a color3 or color4
	 */
	static color(r = 125,g = 0,b = 127,a = null){
		if(a == null){
			return new BABYLON.Color3((r/255), (g/255), (b/255));
		}else{
			return new BABYLON.Color4((r/255), (g/255), (b/255), a);
		}
	}

	/**
	 * returns a color3 or color4 object
	 * @param _materials
	 * @param _name
	 * @returns retunrs a Material for the object
	 */
	static getMaterials(_materials, _name){
		//TODO: Images
		_materials.push(this.returnDefaultMaterial());
		
		for(let i = 0; i < _materials.length; i++){
			if(_materials[i].name == _name){
				if(typeof _materials[i]._diffuseColor != undefined && _materials[i]._diffuseColor != null){
					_materials[i]._diffuseColor = this.getColor(_materials[i]._diffuseColor);
				}
				return _materials[i];
			}
		}
	}

	/**
	 * returns a color
	 * @param _dataString expects a color string like "127, 129, 0" (RGB) ir "127, 129, 0, 0.5" (RGBA)
	 * @returns retunrs a color object after fetching the correct color type
	 */
	static getColor(_dataString){
		_dataString = _dataString.split(",");
		if(_dataString.length != 4){
			return this.color(parseInt(_dataString[0]), parseInt(_dataString[1]), parseInt(_dataString[2]));
		}else{
			return this.color(parseInt(_dataString[0]), parseInt(_dataString[1]), parseInt(_dataString[2]), parseFloat(_dataString[3]));
		}
	}

	/**
	 * returns a vector
	 * @param _dataString expects a vecotr string like "127, 129, 0" 
	 * @returns vector
	 */
	static getVector(_dataString, type = "position"){
		_dataString = _dataString.split(",");
		if(type == "position"){
			return new BABYLON.Vector3(parseInt(_dataString[0]), parseInt(_dataString[1]), parseInt(_dataString[2]));
		}else{
			return new BABYLON.Vector3(this.degToRad(parseInt(_dataString[0])), this.degToRad(parseInt(_dataString[1])), this.degToRad(parseInt(_dataString[2])));
		}
		
	}


	/*
		loads an asset 
		static assetsLoad
		arguments: 
		jsonAssets = [
            {name : "logo", src : "bartvr/img/bartVRLogo_b.png", type: 'image' },
            {name : "targetCam", src: "bartvr/img/target_sm.png", type: 'video'}
        ];
        arguments: assetHolder,
        arguments: callback when fininshed,
      */

	static assetsLoad(){
		var loader = new BABYLON.AssetsManager(this._crurrentScene);
        this.jsonAssets.forEach(function(obj) {

	        function imgAsset(){
				var img = loader.addTextureTask(obj.name, obj.src);
			    img.onSuccess = function(t) {
			            this._assets[t.name] = t.texture;
			    }.bind(this);

			    img.onError = function(t) {
			         console.log(t.name + ' - failed to load');
			    }.bind(this);
			}

	        switch(obj.type) {
			    case 'img':
			    	imgAsset();
			        break;
			    case 'audio':
			        //todo
					
			        break;
			    case 'video':
			        //todo
			        break;	
			    case 'hdr':
			        //todo
			        break;  	    	                
			    default:
			        imgAsset.apply(this);
			 }
			 loader.load();
		
        }.bind(this));
      
        loader.onFinish = this.assetLoadingFinished.bind(this);

	}
		
        

}				
module.exports = utils;


		