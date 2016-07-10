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
				_texture:null,
				_uScale: 1.0,
				_vScale: 1.0,
				_backFaceCulling: true,
				_vOffset: 0.0,
				_uOffset: 0.0,
				_hasAlpha:false,
				_diffuseColor: null,
				_hasSystem:false,
				_scene:{}
			}
		return _defaults;
	}

	static guid() {
  	 function s4() {
	    return Math.floor((1 + Math.random()) * 0x10000)
	      .toString(16)
	      .substring(1);
	  }
	  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	    s4() + '-' + s4() + s4() + s4();
	}

	static degToRad(degrees){
		return degrees * (Math.PI / 180);
	}

	static color(r = 125,g = 0,b = 127,a = null){
		if(a == null){
			return new BABYLON.Color3(r, g, b);
		}else{
			return new BABYLON.Color4(r, g, b, a);
		}
	}



	static assetsLoad(){
		var loader = new BABYLON.AssetsManager(this._crurrentScene);
		/*
		static assetsLoad
		arguments: 
		jsonAssets = [
            {name : "logo", src : "bartvr/img/bartVRLogo_b.png", type: 'image' },
            {name : "targetCam", src: "bartvr/img/target_sm.png", type: 'video'}
        ];
        arguments: assetHolder,
        arguments: callback when fininshed,
        */
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


		