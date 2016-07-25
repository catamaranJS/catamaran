
var CES = require('CES');
var BABYLON = require('../lib/babylon');

/**
 * ...
 * @author Brendon Smith
 * http://seacloud9.org
 * LightWeight 3D System Design engine
 */
class s_cameravr extends CES.System{
    constructor(_opts){
        super();
        this._opts = _opts;
    }

    update(dt){
          var entities = this.world.getEntities('vrCamera');
            entities.forEach(function (entity) {
                    if(this.world._crurrentScene.activeCamera){
                        var cam = entity._components.$vrCamera;
                    if(dt % this._opts._pickInterval  <= 0.9 && dt % this._opts._pickInterval  >= 0.89){
                        cam.cursorEnt.rayPick();
                    }
                    if(cam.fpsUI){
                        cam.fpsUIWindow.text(parseInt(this.world._crurrentScene.getEngine().fps));
                    }
                }
            }.bind(this));
    }

}
module.exports = s_cameravr;