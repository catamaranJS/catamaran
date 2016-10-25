import * as CES from 'ces';
import * as BABYLON from '../lib/babylon';
import { utils } from '../utils/utils';
var defaults = utils.defaultArgs();
defaults._name = 'camera';
/**
 * ...
 * @author Brendon Smith
 * http://seacloud9.org
 * LightWeight 3D System Design engine
 */
 export class c_cameravr {
   constructor(_opts = defaults){
    this.rotationModal = _opts._hasModal;
    if(this.rotationModal){
      this.modal = document.createElement('div');
      this.modal.classList.add('a-orientation-modal');
      this.modal.style.display = 'none';
      document.body.appendChild(this.modal);
    }
    
    this.cursorEnt = null;
    this.cursor = _opts._cursor;
    this.cursorVR1 = _opts._cursorVR1;
    this.cursorVR2 = _opts._cursorVR2;
    this.canvasList = null;
    this.name = _opts._name;
    this.opts = _opts;
    this.obj;
    this.objVR = null;
    this.objOrthoVR = null;
    this.objOrtho = null;
    this.scene =  _opts._scene;
    this.canvas = _opts._canvas;
    this.oneAxis = true;
    this.mode = 'normal';
    this.fpsUIWindow = null;
    this.fpsUI = _opts._fpsUI;
    this.hud  = null;
    this.glitchEnabled = false;
    var canvasList = document.querySelectorAll('canvas');
    this.canvasList = Array.from(canvasList);
    if(Math.abs(window.orientation) === 90 || !CATAMARAN.isMobile()){
     this.toggleCanvas('block');
     this.initVR();
   }else{
     this.toggleCanvas();
     if(this.rotationModal){
      this.modal.style.display = 'block';
     }
     
   }
   this.setListners();
   this.options = {
     name:this.name,
     init: this.constructor,
     obj:this.obj,
     objOrtho:this.objOrtho,
     objOrthoVR: this.objOrthoVR,
     objVR:this.objVR
   }
   CES.Component.extend(this.options);
 }

 initVR(){
  this.objOrtho  = new BABYLON.FreeCamera("FreeCamera", BABYLON.Vector3.Zero(), this.opts._scene );
		//this.objOrtho.mode = BABYLON.Camera.ORTHOGRAPHIC_CAMERA;
		//this.objOrtho.attachControl(this.canvas, false);
		this.objOrtho.setTarget(BABYLON.Vector3.Zero());
		this.objOrtho.layerMask = this.opts._activeDialogLayer;
		this.obj = new BABYLON.VirtualJoysticksCamera("VJCamera", this.opts._position, this.scene);
    this.obj.attachControl(this.canvas, false);
    try{
      CATAMARAN.isMobile();
      this.inertiaSpeed  = CATAMARAN._mobileOS == 'Android' ? 0.6 : 0.7;
      this.rotationSpeed  = CATAMARAN._mobileOS == 'Android'? 4 : 2;
      this.obj.inputs.attached.virtualJoystick._rightjoystick.reverseUpDown = true;
      this.obj.inputs.attached.virtualJoystick._rightjoystick._rotateOnAxisRelativeToMesh = true;
      this.obj.inputs.attached.virtualJoystick.camera.inertia = this.inertiaSpeed;
      this.obj.inputs.attached.virtualJoystick._rightjoystick._inverseRotationSpeed = this.rotationSpeed;
      this.obj.inputs.attached.virtualJoystick._rightjoystick._rotationSpeed = this.rotationSpeed;
      if(this.oneAxis){
       this.obj.inputs.attached.virtualJoystick._rightjoystick._axisTargetedByUpAndDown = 3;
       this.obj.inputs.attached.virtualJoystick._rightjoystick._axisTargetedByLeftAndRight = 1;
       this.obj.inputs.attached.virtualJoystick._leftjoystick._axisTargetedByUpAndDown = 2;
       this.obj.inputs.attached.virtualJoystick._leftjoystick._axisTargetedByLeftAndRight = 0;
     }
     this.objVR  = new BABYLON.VRDeviceOrientationFreeCamera("VRCamera",  this.opts._position, this.scene, false);
     this.objVR.checkCollisions = false;
     this.objVR.applyGravity = false;
     this.objVR.attachControl(this.canvas , true);
     this.objOrthoVR  = new BABYLON.WebVRFreeCamera("VRCamera2", new BABYLON.Vector3.Zero(),  this.scene, false);
     this.objOrthoVR.setTarget(BABYLON.Vector3.Zero());
     this.objOrthoVR.layerMask = this.opts._activeDialogLayer;
     this.objOrthoVR._rigCameras[0].layerMask =  this.opts._activeDialogLayer;
     this.objOrthoVR._rigCameras[1].layerMask =  this.opts._activeDialogLayer;
     this.objVR.position = this.obj.position;
     var canvasList = document.querySelectorAll('canvas');
     this.canvasList = Array.from(canvasList);
     this.setCanvasTouch();
   }catch(e){
     console.log(e);
     console.log('requires -> https://code.jquery.com/pep/0.4.1/pep.js');
   }
   this.scene.activeCameras.push(this.obj);
   this.scene.activeCameras.push(this.objOrtho);
   this.scene.activeCamera = this.obj;
   this.pickResult = null;

   if(this.fpsUI){
    this.bodyEL =  new CATAMARAN.core.DOM('body');
    this.fpsUIWindow = document.createElement("fpswindow");
    this.fpsUIWindow.open = true;
    this.fpsUIWindow.classList.add('fpsUIWindow');
    this.bodyEL.append( this.fpsUIWindow );
    this.fpsUIWindow = new CATAMARAN.core.DOM('.fpsUIWindow');
  }
  if(CATAMARAN.debug){
   this.debug();
 }
}

debug(){
  window.objVR = this.objVR;
  window.obj = this.obj;
  window.objOrtho = this.objOrtho;
  window.objOrthoVR = this.objOrthoVR;
}

toggle() {
  if (this.mode == 'normal') {
    this.mode = 'vr';
    if (this.scene != null) {
     this.scene.activeCameras[0] = this.objVR;
     this.scene.activeCameras[1] = this.objOrthoVR;
     this.cursor.position.z = 30;
     if(this.glitchEnabled){
                    	//fx
                    }
                  }
                } else {
                  this.mode = 'normal';
                  if (this.scene != null) {
                   this.scene.activeCameras[0] = this.obj;
                   this.scene.activeCameras[1] = this.objOrtho;
                   this.cursor.position.z = 100;
                 }
               }
             }

             readDeviceOrientation() {
              if (Math.abs(window.orientation) === 90) {
               this.toggleCanvas('block');
               if(this.objVR == null){
                this.initVR();
              }
              this.landscapeMode = true;
              if(this.rotationModal){
                this.modal.style.display = 'none';
              }
            } else {
             
               this.toggleCanvas();
               if(this.rotationModal){
                  this.modal.style.display = 'block';
                }
               this.landscapeMode = false;
             
           }
           this.setCanvasTouch();
           this.scene.getEngine().resize();

         }

         toggleCanvas(_mode = 'none'){
           document.querySelector('.vr-button').style.display = _mode;
         }

         rayPick(){
           this.pickResult = this.scene.pick(this.scene.pointerX, this.scene.pointerY);
  	 	     //console.log(this.pickResult);
        }

        setCanvasTouch(){
         for(let i=0; i < this.canvasList.length; i++){
          this.canvasList[i].setAttribute("touch-action", 'none');
          this.canvasList[i].style.width = '';
          this.canvasList[i].style.height = '';
          this.canvasList[i].height = document.documentElement.clientHeight;
          this.canvasList[i].width = document.documentElement.clientWidth;
        }
      }

      setListners(){
       this.setCanvasTouch();
       document.querySelector('.vr-button').addEventListener('click', this.toggle.bind(this));
    	//window.addEventListener('click', this.rayPick.bind(this));
    	window.addEventListener('orientationchange', this.readDeviceOrientation.bind(this), false);
    	window.addEventListener("resize", function () {
       this.setCanvasTouch();
       this.scene.getEngine().resize();
     }.bind(this));

    }
    

  }