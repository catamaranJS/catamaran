import * as CES from 'ces';
import * as BABYLON from '../lib/babylon';
import { utils } from '../utils/utils';
var defaults = utils.defaultArgs();
defaults._name = 'multiuser';

/**
 * ...
 * @author Brendon Smith
 * http://seacloud9.org
 * LightWeight 3D System Design engine
 */

 export class c_multiuser extends CES.Component{
  constructor(_opts = defaults){
    super();
    this.name = _opts._name;
    this.firebaseRef = _opts._fbURL;
    this.scene =  _opts._scene;
    this.sysInit = false;
    this.userInit = false;
    utils.loadScript("https://cdn.firebase.com/js/client/2.3.0/firebase.js", this.setMultiUserData.bind(this));
    
  }

  setMultiUserData(){
    this.multiuser = new Firebase(this.firebaseRef);
    this.users = new Firebase(this.firebaseRef + 'users');
    this.user = {name:null, position:{x:0, y:0, z:0}, rotation:{x:0, y:0, z:0}, sprite:null};
    this.currentUsers = [];
    this.fakeUser = ['Tom','Richard','Jane','John','Dan','Josh','Brendon','Emma','Peter'];
    this.spriteImg = 'assets/sprites/users.png';
    this.sprites = [];
    this.Alerts = new Firebase(this.firebaseRef + 'alerts');
    this.currentAlerts = [];
    this.currentUserKey = null;
    this.executeUserRemoval = null;
    this.userToUpdate =  this.firebaseRef+ 'users/';
    this.spriteAnimations = [20,40,60,80];
    this.zombieMode = false;
    this.isCurrentlyUsing  = false;
    this.spManager = null;
    this.playerSprite = null;
    this.spriteID = 20;
    this.initSys();
  }

  initSys(){

    this.setUser(null, new BABYLON.Vector3(0, 0, 0));

    /*
    if( ! this.app._platform.is('android') ){
        this.hud = new BartVR_HeadsUpDisplay(this.scene, this);
    }
    */

    this.spManager  = new BABYLON.SpriteManager("userManager", this.spriteImg, 1000, 128, this.scene);
    this.spManager.layerMask = 3;
    this.playerSprite = new BABYLON.Sprite("player", this.spManager );
    this.playerSprite.isPickable = true;

   

    if(this.zombieMode){
      this.playerSprite.playAnimation( 80,  100, true, 100);
    }else{
      this.playerSprite.playAnimation(Math.abs( 20 - this.user.spriteID),  parseInt(this.user.spriteID), true, 100);
    }
    //this.scene.activeCamera.position = new BABYLON.Vector3(this.user.position.x, this.user.position.y, this.user.position.z);
    this.playerSprite.position = new BABYLON.Vector3(this.user.position.x, this.user.position.y, this.user.position.z);
    // this.scene.activeCamera.rotation = new BABYLON.Vector3(this.Data.user.rotation.x, this.Data.user.rotation.y, this.Data.user.rotation.z);
    this.sprites.push({sprite:this.playerSprite, key:this.currentUserKey});

   window.requestAnimationFrame(function(){
    this.Alerts.on("child_added", function(alertData) {
      this.currentAlerts.push(alertData.val());
    }.bind(this));

    this.Alerts.once("value", function(alertData) {
      alertData.forEach(function(data) {
        this.currentAlerts.push(data.val());
      }.bind(this));
    }.bind(this));

    this.users.on("child_changed", function(userData) {
      for(let i = 0; i < this.currentUsers.length; i++){
        if(userData.key() == this.currentUsers[i].key){
         this.currentUsers[i].data =  userData.val();
       }
     }
   }.bind(this));

    this.users.once("value", function(userData) {
        this.checkUsers(userData);
    }.bind(this));

    this.sysInit = true; 
    setTimeout(function(){
      this.addUsers();
    }.bind(this), 500);
  }.bind(this));
}

addUsers(){
    for(let i = 0; i < this.currentUsers.length; i++){
        if(this.currentUsers[i].key != this.currentUserKey){
            this.generateUserSprites(this.currentUsers[i], i);
        }
    }
    this.userInit = true;
}

checkUsers(userData){
  var userHaveLoaded = false;
      userData.forEach(function(data) {
        if(window.localStorage.getItem("vr_user_key") != null && data.key() == window.localStorage.getItem("vr_user_key") ){
          this.user = data.val();
          this.currentUserKey = data.key();
          this.userToUpdate +=  data.key();
          this.userToUpdate = new Firebase(this.userToUpdate);
          this.isCurrentlyUsing = true;
        }
        if(data.val().name != undefined && data.val().position != undefined && data.val().rotation != undefined && data.val().sprite != undefined && data.val().spriteID != undefined){
          if(!userHaveLoaded){
              userHaveLoaded = true;
              userData.forEach(function(data) {
               this.currentUsers.push({data:data.val(), key: data.key()});
              }.bind(this));
          }  
        }
      }.bind(this));
}

generateUserSprites(_data, _id){
    var spriteManagerRider = new BABYLON.SpriteManager(_data.key, _data.data.sprite, 1, 128, this.scene);
    spriteManagerRider.layerMask = 3;
    spriteManagerRider.texture = this.spManager.texture.clone();
    let player = new BABYLON.Sprite(_data.key, spriteManagerRider );
    player.isPickable = true;
    if(typeof  _data.data.position != undefined){
      player.position = _data.data.position;
    }else{
      player.position = new BABYLON.Vector3(this.user.position.x, this.user.position.y, this.user.position.z);
    }
    //player.rotation = _data.data.rotation;
    player.size = 14.0;
    if(_data.data.zombieMode){
        player.playAnimation( 80,  100, true, 100);
    }else{
        player.playAnimation(Math.abs( 20 - parseInt(_data.data.spriteID)),  parseInt(_data.data.spriteID), true, 100);
    }
    this.sprites.push({sprite:player, key:_data.key});
}

deleteUser(_dkey){
  var userRef = new Firebase(this.firebaseRef + 'users/'  + _dkey);
  userRef.once("value", function(_data) {
    var fountain = BABYLON.Mesh.CreateBox("foutain", 1.0, this.babylonMod.scene);
    fountain.isVisible = false;
    fountain.position = new BABYLON.Vector3(_data.val().position.x, _data.val().position.y, _data.val().position.z)
    var particleSystem = new BABYLON.ParticleSystem("particles", 1000, this.babylonMod.scene);
    particleSystem.particleTexture = new BABYLON.Texture("bartvr/img/textures/flare.png", this.babylonMod.scene);
    particleSystem.emitter = fountain; // the starting object, the emitter
    particleSystem.minEmitBox = new BABYLON.Vector3(-1, 0, 0); // Starting all from
    particleSystem.maxEmitBox = new BABYLON.Vector3(1, 0, 0); // To...
    particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
    particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
    particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);
    particleSystem.minSize = 0.1;
    particleSystem.maxSize = 0.5;
    particleSystem.minLifeTime = 0.1;
    particleSystem.maxLifeTime = 0.3;
    particleSystem.emitRate = 1000;
    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
    particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);
    particleSystem.direction1 = new BABYLON.Vector3(-4, 6, 4);
    particleSystem.direction2 = new BABYLON.Vector3(4, 6, -4);
    particleSystem.minEmitPower = 1;
    particleSystem.maxEmitPower = 3;
    particleSystem.updateSpeed = 0.005;
    particleSystem.start();
    setTimeout(function(){
      particleSystem.stop();
      particleSystem.dispose();
      for(let i = 0; i < this.scene.spriteManagers.length; i++){
        if(  this.scene.spriteManagers[i].name == _dkey){
          this.scene.spriteManagers[i].dispose();
        }
      }
      userRef.remove();
    }.bind(this), 5000);       
  }.bind(this), function (errorObject) {
   console.log(errorObject);
 });
}

setUser(_user = {name: 'userName', position: {x:0, y:0, z:0}}, _pos = {} ){
  if(window.localStorage.getItem("vr_user") == null){
    _pos.x = utils.randomPos(-85, 2);
    _pos.y = 0;
    _pos.z = utils.randomPos(5, 15);
    var _username = null;
    if(this.user.name == null){
      _username =  utils.randomArr(this.fakeUser);
    }else{
      _username = this.user.name;
    }
    try{
      window.localStorage.setItem("vr_user", _username);
    }catch(e){
      alert('please allow local storage please disable private mode');
    }
    this.user = {name:_username, position: _pos, rotation: new BABYLON.Vector3(0, 0, 0), sprite:this.spriteImg, spriteID: utils.randomArr(this.spriteAnimations) };

    this.users.once("value", function(userData) {
        this.checkUsers(userData);
    }.bind(this));


    this.users = this.users.push( this.user);  
    this.currentUserKey = this.users.key();
    try{
      window.localStorage.setItem("vr_user_key", this.currentUserKey );
    }catch(e){
        console.log(e);
    }

  }
}


updateUser(position, rotation){
  if(this.sysInit){
      if(this.isCurrentlyUsing){
        this.userToUpdate.set({name: this.user.name, position: position, rotation: rotation, sprite: this.user.sprite,  spriteID: this.user.spriteID });
      }else{
        if(this.user.name != null){
          this.users.set({name: this.user.name, position: position, rotation: rotation, sprite: this.user.sprite, spriteID: this.user.spriteID });
        }
      }
  }
}

debug(){

}


}