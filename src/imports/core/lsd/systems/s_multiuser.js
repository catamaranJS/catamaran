
var CES = require('CES');
var BABYLON = require('../lib/babylon');

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
    }

    update(dt){
      var entities = this.world.getEntities('multiuser');
      entities.forEach(function (entity) {
        this._entity  = entity._components.$multiuser;

        if(this.world._crurrentScene.activeCamera && this._entity.sysInit){
            this._entity.updateUser(this.world._crurrentScene.activeCameras[0].position, this.world._crurrentScene.activeCameras[0].rotation);
            for(let i = 0; i < this._entity.currentUsers.length; i++){
                if(this._entity.currentUsers[i].key != this._entity.currentUserKey){
                    if(! this.spriteDoesNotExist(this._entity.currentUsers[i].key, this._entity.sprites)){
                        this.generateUserSprites(this._entity.currentUsers[i], i);
                    }else{
                        this.updateUserSprites(this._entity.currentUsers[i], i);
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
                this._entity.sprites[i].sprite.playAnimation(Math.abs( 20 - parseInt(_data.spriteID)),  parseInt(_data.spriteID), true, 100);
            }
            this._entity.sprites[i].sprite.position =  _data.position;
            break;
        }
    }
}


generateUserSprites(_data, _id){
    var spriteManagerRider = new BABYLON.SpriteManager(_data.key, _data.sprite, 1, 128, this.scene);
    spriteManagerRider.layerMask = 3;
    spriteManagerRider.texture = this._entity.spManager.texture.clone();
    let player = new BABYLON.Sprite(_data.key, spriteManagerRider );
    player.isPickable = true;
    player.position = _data.position;
        //player.rotation = _data.data.rotation;
        player.size = 14.0;
        if(_data.zombieMode){
            player.playAnimation( 80,  100, true, 100);
        }else{
            player.playAnimation(Math.abs( 20 - parseInt(_data.data.spriteID)),  parseInt(_data.data.spriteID), true, 100);
        }
        this._entity.sprites.push({sprite:player, key:_data.key});
    }



}
module.exports = s_multiuser;