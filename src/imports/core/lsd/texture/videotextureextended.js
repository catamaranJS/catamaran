var BABYLON = require('../lib/babylon');
var Texture = BABYLON.Texture;
class VideoTextureExtended extends BABYLON.VideoTexture{
	
    constructor(name, urlsOrVideo, scene, generateMipMaps = false, invertY = false, samplingMode = 3, _callback = function(){}) {
     	super(name, urlsOrVideo, scene, generateMipMaps, invertY, samplingMode);
     	this._autoLaunch = false;
     	this._callback = _callback;
    }


}

module.exports = VideoTextureExtended;