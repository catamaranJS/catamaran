import * as CES from 'ces';
import * as BABYLON from '../lib/babylon';

/**
 * ...
 * @author Brendon Smith
 * http://seacloud9.org
 * LightWeight 3D System Design engine
 */
 class s_multiuser extends CES.System{
    constructor(_opts){
        super();
        this._opts = _opts;
        this._entity = null;
        this._zombieModeEnabled = false;
    }

    update(dt){
      var entities = this.world.getEntities('multiuser');
      entities.forEach(function (entity) {
        this._entity  = entity._components.$multiuser;
        this.world._multiuserInit = this._entity.sysInit;
        if(this.world._currentScene.activeCamera && this._entity.sysInit && this._entity.userInit){
            this._entity.updateUser(this.world._currentScene.activeCameras[0].position, this.world._currentScene.activeCameras[0].rotation);
            
            for(let i = 0; i < this._entity.currentUsers.length; i++){
                if(this._entity.currentUsers[i].key != this._entity.currentUserKey){
                    if(! this.spriteDoesNotExist(this._entity.currentUsers[i].key, this._entity.sprites)){
                        this._entity.generateUserSprites(this._entity.currentUsers[i], i);
                    }else{
                        if(this._entity.zombieMode){
                            this._zombieModeEnabled = true;
                        }else{
                            this._zombieModeEnabled = false;
                        }
                        this.updateUserSprites(this._entity.currentUsers[i]);
                    }
                }
            }
        }
    }.bind(this));
  }

    spriteDoesNotExist(value, array) {
        var found = false;
        for(var i = 0; i < array.length; i++) {
            if (array[i].key == value) {
                return found = true;
                break;
            }
        }
        return found;
    }


    updateUserSprites(_data){
        for(var i = 0; i < this._entity.sprites.length; i++) {
            if (this._entity.sprites[i].key != undefined && _data.key == this._entity.sprites[i].key) {
                if(this._entity.zombieMode){
                    this._entity.sprites[i].sprite.playAnimation( 80,  100, true, 100);
                }else{
                    if(this._zombieModeEnabled){
                        this._entity.sprites[i].sprite.playAnimation(Math.abs( 20 - parseInt(_data.data.spriteID)),  parseInt(_data.data.spriteID), true, 100);
                    }
                }
                this._entity.sprites[i].sprite.position =  _data.data.position;
                break;
            }
        }
    }

}
module.exports = s_multiuser;