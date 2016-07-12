var CES = require('ces');
var BABYLON = require('../lib/babylon');
var utils = require('../utils/utils');
var defaults = utils.defaultArgs();
defaults._name = 'material';
/**
 * ...
 * @author Brendon Smith
 * http://seacloud9.org
 * LightWeight 3D System Design engine
 */
class c_material {
	constructor(_opts = defaults){
		this.name = _opts._name + utils.guid();
		this.obj = null;
		this._opts = _opts;
		switch(_opts._type) {
		    case 'Standard':
		    	this.StandardMaterial();
		        break;
		    case 'Shader':
		        //todo
		        break;
		    case 'Dynamic':
		        //todo
		        break;	
		    case 'Fresenel':
		        //todo
		        break;
		    case 'PBR':
		        //todo
		        break;    	    	                
		    default:
		        this.StandardMaterial();
		 }
		this.options = {
			name:this.name ,
			init: this.constructor,
			obj:this.obj
		}
		CES.Component.extend(this.options);
	}

	StandardMaterial(){
		this.obj = new BABYLON.StandardMaterial("texturePlane", this._opts._scene);
		this.obj.alpha = parseFloat(this._opts._material._alpha);
		if(this._opts._material._texture != null){
			this.obj.diffuseTexture = this._opts._material._texture;
			this.obj.diffuseTexture.uScale = this._opts._material._uScale;//Repeat 5 times on the Vertical Axes
			this.obj.diffuseTexture.vScale = this._opts._material._vScale;//Repeat 5 times on the Horizontal Axes
			this.obj.backFaceCulling = this._opts._material._backFaceCulling;//Always show the front and the back of an element
			this.obj.diffuseTexture.vOffset = this._opts._material._vOffset;//Vertical offset of 10%
    		this.obj.diffuseTexture.uOffset = this._opts._material._uOffset;//Horizontal offset of 40%
    		this.obj.diffuseTexture.hasAlpha = this._opts._material._hasAlpha;
		}
		
		
    	if(this._opts._material._diffuseColor != null){
    		this.obj.diffuseColor =this._opts._material._diffuseColor;
    	}
	}

}
module.exports = c_material;