"use strict";function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,i){for(var s=0;s<i.length;s++){var e=i[s];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(i,s,e){return s&&t(i.prototype,s),e&&t(i,e),i}}(),CES=require("CES"),BABYLON=require("../lib/babylon"),utils=require("../utils/utils"),defaults=utils.defaultArgs();defaults._name="camera";var c_cameravr=function(){function t(){var i=arguments.length<=0||void 0===arguments[0]?defaults:arguments[0];_classCallCheck(this,t),this.modal=document.createElement("div"),this.cursorEnt=null,this.modal.classList.add("a-orientation-modal"),this.modal.style.display="none",this.cursor=i._cursor,this.cursorVR1=i._cursorVR1,this.cursorVR2=i._cursorVR2,document.body.appendChild(this.modal),this.canvasList=null,this.name=i._name,this.opts=i,this.obj,this.objVR=null,this.objOrthoVR=null,this.objOrtho=null,this.scene=i._scene,this.canvas=i._canvas,this.oneAxis=!0,this.mode="normal",this.fpsUIWindow=null,this.fpsUI=i._fpsUI,this.hud=null,this.glitchEnabled=!1;var s=document.querySelectorAll("canvas");this.canvasList=Array.from(s),90!==Math.abs(window.orientation)&&CATAMARAN.isMobile()?(this.toggleCanvas(),this.modal.style.display="block"):(this.toggleCanvas("block"),this.initVR()),this.setListners(),this.options={name:this.name,init:this.constructor,obj:this.obj,objOrtho:this.objOrtho,objOrthoVR:this.objOrthoVR,objVR:this.objVR},CES.Component.extend(this.options)}return _createClass(t,[{key:"initVR",value:function(){this.objOrtho=new BABYLON.FreeCamera("FreeCamera",BABYLON.Vector3.Zero(),this.opts._scene),this.objOrtho.setTarget(BABYLON.Vector3.Zero()),this.objOrtho.layerMask=this.opts._activeDialogLayer,this.obj=new BABYLON.VirtualJoysticksCamera("VJCamera",this.opts._position,this.scene),this.obj.attachControl(this.canvas,!1);try{CATAMARAN.isMobile(),this.inertiaSpeed="Android"==CATAMARAN._mobileOS?.6:.7,this.rotationSpeed="Android"==CATAMARAN._mobileOS?4:2,this.obj.inputs.attached.virtualJoystick._rightjoystick.reverseUpDown=!0,this.obj.inputs.attached.virtualJoystick._rightjoystick._rotateOnAxisRelativeToMesh=!0,this.obj.inputs.attached.virtualJoystick.camera.inertia=this.inertiaSpeed,this.obj.inputs.attached.virtualJoystick._rightjoystick._inverseRotationSpeed=this.rotationSpeed,this.obj.inputs.attached.virtualJoystick._rightjoystick._rotationSpeed=this.rotationSpeed,this.oneAxis&&(this.obj.inputs.attached.virtualJoystick._rightjoystick._axisTargetedByUpAndDown=3,this.obj.inputs.attached.virtualJoystick._rightjoystick._axisTargetedByLeftAndRight=1,this.obj.inputs.attached.virtualJoystick._leftjoystick._axisTargetedByUpAndDown=2,this.obj.inputs.attached.virtualJoystick._leftjoystick._axisTargetedByLeftAndRight=0),this.objVR=new BABYLON.VRDeviceOrientationFreeCamera("VRCamera",this.opts._position,this.scene,!1),this.objVR.checkCollisions=!1,this.objVR.applyGravity=!1,this.objVR.attachControl(this.canvas,!0),this.objOrthoVR=new BABYLON.WebVRFreeCamera("VRCamera2",new BABYLON.Vector3.Zero,this.scene,!1),this.objOrthoVR.setTarget(BABYLON.Vector3.Zero()),this.objOrthoVR.layerMask=this.opts._activeDialogLayer,this.objOrthoVR._rigCameras[0].layerMask=this.opts._activeDialogLayer,this.objOrthoVR._rigCameras[1].layerMask=this.opts._activeDialogLayer,this.objVR.position=this.obj.position;var t=document.querySelectorAll("canvas");this.canvasList=Array.from(t),this.setCanvasTouch()}catch(i){console.log(i),console.log("requires -> https://code.jquery.com/pep/0.4.1/pep.js")}this.scene.activeCameras.push(this.obj),this.scene.activeCameras.push(this.objOrtho),this.scene.activeCamera=this.obj,this.pickResult=null,this.fpsUI&&(this.bodyEL=new CATAMARAN.core.DOM("body"),this.fpsUIWindow=document.createElement("fpswindow"),this.fpsUIWindow.open=!0,this.fpsUIWindow.classList.add("fpsUIWindow"),this.bodyEL.append(this.fpsUIWindow),this.fpsUIWindow=new CATAMARAN.core.DOM(".fpsUIWindow")),CATAMARAN.debug&&this.debug()}},{key:"debug",value:function(){window.objVR=this.objVR,window.obj=this.obj,window.objOrtho=this.objOrtho,window.objOrthoVR=this.objOrthoVR}},{key:"toggle",value:function(){"normal"==this.mode?(this.mode="vr",null!=this.scene&&(this.scene.activeCameras[0]=this.objVR,this.scene.activeCameras[1]=this.objOrthoVR,this.cursor.position.z=30,this.glitchEnabled)):(this.mode="normal",null!=this.scene&&(this.scene.activeCameras[0]=this.obj,this.scene.activeCameras[1]=this.objOrtho,this.cursor.position.z=100))}},{key:"readDeviceOrientation",value:function(){90===Math.abs(window.orientation)?(this.toggleCanvas("block"),null==this.objVR&&this.initVR(),this.landscapeMode=!0,this.modal.style.display="none"):(this.toggleCanvas(),this.modal.style.display="block",this.landscapeMode=!1),this.setCanvasTouch(),this.scene.getEngine().resize()}},{key:"toggleCanvas",value:function(){var t=arguments.length<=0||void 0===arguments[0]?"none":arguments[0];document.querySelector(".vr-button").style.display=t}},{key:"rayPick",value:function(){this.pickResult=this.scene.pick(this.scene.pointerX,this.scene.pointerY)}},{key:"setCanvasTouch",value:function(){for(var t=0;t<this.canvasList.length;t++)this.canvasList[t].setAttribute("touch-action","none"),this.canvasList[t].style.width="",this.canvasList[t].style.height="",this.canvasList[t].height=document.documentElement.clientHeight,this.canvasList[t].width=document.documentElement.clientWidth}},{key:"setListners",value:function(){this.setCanvasTouch(),document.querySelector(".vr-button").addEventListener("click",this.toggle.bind(this)),window.addEventListener("orientationchange",this.readDeviceOrientation.bind(this),!1),window.addEventListener("resize",function(){this.setCanvasTouch(),this.scene.getEngine().resize()}.bind(this))}}]),t}();module.exports=c_cameravr;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvbHNkL2NvbXBvbmVudHMvY19jYW1lcmF2ci5qcyJdLCJuYW1lcyI6WyJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsIkNFUyIsInJlcXVpcmUiLCJCQUJZTE9OIiwidXRpbHMiLCJkZWZhdWx0cyIsImRlZmF1bHRBcmdzIiwiX25hbWUiLCJjX2NhbWVyYXZyIiwiX29wdHMiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJ0aGlzIiwibW9kYWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjdXJzb3JFbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdHlsZSIsImRpc3BsYXkiLCJjdXJzb3IiLCJfY3Vyc29yIiwiY3Vyc29yVlIxIiwiX2N1cnNvclZSMSIsImN1cnNvclZSMiIsIl9jdXJzb3JWUjIiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjYW52YXNMaXN0IiwibmFtZSIsIm9wdHMiLCJvYmoiLCJvYmpWUiIsIm9iak9ydGhvVlIiLCJvYmpPcnRobyIsInNjZW5lIiwiX3NjZW5lIiwiY2FudmFzIiwiX2NhbnZhcyIsIm9uZUF4aXMiLCJtb2RlIiwiZnBzVUlXaW5kb3ciLCJmcHNVSSIsIl9mcHNVSSIsImh1ZCIsImdsaXRjaEVuYWJsZWQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiQXJyYXkiLCJmcm9tIiwiTWF0aCIsImFicyIsIndpbmRvdyIsIm9yaWVudGF0aW9uIiwiQ0FUQU1BUkFOIiwiaXNNb2JpbGUiLCJ0b2dnbGVDYW52YXMiLCJpbml0VlIiLCJzZXRMaXN0bmVycyIsIm9wdGlvbnMiLCJpbml0IiwiY29uc3RydWN0b3IiLCJDb21wb25lbnQiLCJleHRlbmQiLCJ2YWx1ZSIsIkZyZWVDYW1lcmEiLCJWZWN0b3IzIiwiWmVybyIsInNldFRhcmdldCIsImxheWVyTWFzayIsIl9hY3RpdmVEaWFsb2dMYXllciIsIlZpcnR1YWxKb3lzdGlja3NDYW1lcmEiLCJfcG9zaXRpb24iLCJhdHRhY2hDb250cm9sIiwiaW5lcnRpYVNwZWVkIiwiX21vYmlsZU9TIiwicm90YXRpb25TcGVlZCIsImlucHV0cyIsImF0dGFjaGVkIiwidmlydHVhbEpveXN0aWNrIiwiX3JpZ2h0am95c3RpY2siLCJyZXZlcnNlVXBEb3duIiwiX3JvdGF0ZU9uQXhpc1JlbGF0aXZlVG9NZXNoIiwiY2FtZXJhIiwiaW5lcnRpYSIsIl9pbnZlcnNlUm90YXRpb25TcGVlZCIsIl9yb3RhdGlvblNwZWVkIiwiX2F4aXNUYXJnZXRlZEJ5VXBBbmREb3duIiwiX2F4aXNUYXJnZXRlZEJ5TGVmdEFuZFJpZ2h0IiwiX2xlZnRqb3lzdGljayIsIlZSRGV2aWNlT3JpZW50YXRpb25GcmVlQ2FtZXJhIiwiY2hlY2tDb2xsaXNpb25zIiwiYXBwbHlHcmF2aXR5IiwiV2ViVlJGcmVlQ2FtZXJhIiwiX3JpZ0NhbWVyYXMiLCJwb3NpdGlvbiIsInNldENhbnZhc1RvdWNoIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJhY3RpdmVDYW1lcmFzIiwicHVzaCIsImFjdGl2ZUNhbWVyYSIsInBpY2tSZXN1bHQiLCJib2R5RUwiLCJjb3JlIiwiRE9NIiwib3BlbiIsImFwcGVuZCIsImRlYnVnIiwieiIsImxhbmRzY2FwZU1vZGUiLCJnZXRFbmdpbmUiLCJyZXNpemUiLCJfbW9kZSIsInF1ZXJ5U2VsZWN0b3IiLCJwaWNrIiwicG9pbnRlclgiLCJwb2ludGVyWSIsInNldEF0dHJpYnV0ZSIsIndpZHRoIiwiaGVpZ2h0IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0IiwiY2xpZW50V2lkdGgiLCJhZGRFdmVudExpc3Rl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LE1BQU1DLFFBQVU4RixLQXFCNURySCxJQUFLLFVBQ0xtRSxNQW5CWSxXQUNMcEQsS0FBSzJGLFdBQWEzRixLQUFLd0IsTUFBTWdGLEtBQUt4RyxLQUFLd0IsTUFBTWlGLFNBQVV6RyxLQUFLd0IsTUFBTWtGLGFBdUJ6RXpILElBQUssaUJBQ0xtRSxNQXBCa0IsV0FDYixJQUFJLEdBQUkzRSxHQUFFLEVBQUdBLEVBQUl1QixLQUFLaUIsV0FBV3ZDLE9BQVFELElBQ3hDdUIsS0FBS2lCLFdBQVd4QyxHQUFHa0ksYUFBYSxlQUFnQixRQUNoRDNHLEtBQUtpQixXQUFXeEMsR0FBRzhCLE1BQU1xRyxNQUFRLEdBQ2pDNUcsS0FBS2lCLFdBQVd4QyxHQUFHOEIsTUFBTXNHLE9BQVMsR0FDbEM3RyxLQUFLaUIsV0FBV3hDLEdBQUdvSSxPQUFTM0csU0FBUzRHLGdCQUFnQkMsYUFDckQvRyxLQUFLaUIsV0FBV3hDLEdBQUdtSSxNQUFRMUcsU0FBUzRHLGdCQUFnQkUsZUF3QjFEL0gsSUFBSyxjQUNMbUUsTUFyQmEsV0FDVnBELEtBQUtvRixpQkFDTGxGLFNBQVNxRyxjQUFjLGNBQWNVLGlCQUFpQixRQUFTakgsS0FBS2tILE9BQU9DLEtBQUtuSCxPQUVsRndDLE9BQU95RSxpQkFBaUIsb0JBQXFCakgsS0FBS29ILHNCQUFzQkQsS0FBS25ILE9BQU8sR0FDcEZ3QyxPQUFPeUUsaUJBQWlCLFNBQVUsV0FDaENqSCxLQUFLb0YsaUJBQ0xwRixLQUFLd0IsTUFBTTRFLFlBQVlDLFVBQ3ZCYyxLQUFLbkgsV0FqTExKLElBdUxMeUgsUUFBT0MsUUFBVTFIIiwiZmlsZSI6ImNvcmUvbHNkL2NvbXBvbmVudHMvY19jYW1lcmF2ci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBDRVMgPSByZXF1aXJlKCdDRVMnKTtcbnZhciBCQUJZTE9OID0gcmVxdWlyZSgnLi4vbGliL2JhYnlsb24nKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzL3V0aWxzJyk7XG52YXIgZGVmYXVsdHMgPSB1dGlscy5kZWZhdWx0QXJncygpO1xuZGVmYXVsdHMuX25hbWUgPSAnY2FtZXJhJztcbi8qKlxuICogLi4uXG4gKiBAYXV0aG9yIEJyZW5kb24gU21pdGhcbiAqIGh0dHA6Ly9zZWFjbG91ZDkub3JnXG4gKiBMaWdodFdlaWdodCAzRCBTeXN0ZW0gRGVzaWduIGVuZ2luZVxuICovXG4gY2xhc3MgY19jYW1lcmF2ciB7XG4gICBjb25zdHJ1Y3Rvcihfb3B0cyA9IGRlZmF1bHRzKXtcbiAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5jdXJzb3JFbnQgPSBudWxsO1xuICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgnYS1vcmllbnRhdGlvbi1tb2RhbCcpO1xuICAgIHRoaXMubW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0aGlzLmN1cnNvciA9IF9vcHRzLl9jdXJzb3I7XG4gICAgdGhpcy5jdXJzb3JWUjEgPSBfb3B0cy5fY3Vyc29yVlIxO1xuICAgIHRoaXMuY3Vyc29yVlIyID0gX29wdHMuX2N1cnNvclZSMjtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubW9kYWwpO1xuICAgIHRoaXMuY2FudmFzTGlzdCA9IG51bGw7XG4gICAgdGhpcy5uYW1lID0gX29wdHMuX25hbWU7XG4gICAgdGhpcy5vcHRzID0gX29wdHM7XG4gICAgdGhpcy5vYmo7XG4gICAgdGhpcy5vYmpWUiA9IG51bGw7XG4gICAgdGhpcy5vYmpPcnRob1ZSID0gbnVsbDtcbiAgICB0aGlzLm9iak9ydGhvID0gbnVsbDtcbiAgICB0aGlzLnNjZW5lID0gIF9vcHRzLl9zY2VuZTtcbiAgICB0aGlzLmNhbnZhcyA9IF9vcHRzLl9jYW52YXM7XG4gICAgdGhpcy5vbmVBeGlzID0gdHJ1ZTtcbiAgICB0aGlzLm1vZGUgPSAnbm9ybWFsJztcbiAgICB0aGlzLmZwc1VJV2luZG93ID0gbnVsbDtcbiAgICB0aGlzLmZwc1VJID0gX29wdHMuX2Zwc1VJO1xuICAgIHRoaXMuaHVkICA9IG51bGw7XG4gICAgdGhpcy5nbGl0Y2hFbmFibGVkID0gZmFsc2U7XG4gICAgdmFyIGNhbnZhc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYW52YXMnKTtcbiAgICB0aGlzLmNhbnZhc0xpc3QgPSBBcnJheS5mcm9tKGNhbnZhc0xpc3QpO1xuICAgIGlmKE1hdGguYWJzKHdpbmRvdy5vcmllbnRhdGlvbikgPT09IDkwIHx8ICFDQVRBTUFSQU4uaXNNb2JpbGUoKSl7XG4gICAgIHRoaXMudG9nZ2xlQ2FudmFzKCdibG9jaycpO1xuICAgICB0aGlzLmluaXRWUigpO1xuICAgfWVsc2V7XG4gICAgIHRoaXMudG9nZ2xlQ2FudmFzKCk7XG4gICAgIHRoaXMubW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICB9XG4gICB0aGlzLnNldExpc3RuZXJzKCk7XG4gICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgIG5hbWU6dGhpcy5uYW1lLFxuICAgICBpbml0OiB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICBvYmo6dGhpcy5vYmosXG4gICAgIG9iak9ydGhvOnRoaXMub2JqT3J0aG8sXG4gICAgIG9iak9ydGhvVlI6IHRoaXMub2JqT3J0aG9WUixcbiAgICAgb2JqVlI6dGhpcy5vYmpWUlxuICAgfVxuICAgQ0VTLkNvbXBvbmVudC5leHRlbmQodGhpcy5vcHRpb25zKTtcbiB9XG5cbiBpbml0VlIoKXtcbiAgdGhpcy5vYmpPcnRobyAgPSBuZXcgQkFCWUxPTi5GcmVlQ2FtZXJhKFwiRnJlZUNhbWVyYVwiLCBCQUJZTE9OLlZlY3RvcjMuWmVybygpLCB0aGlzLm9wdHMuX3NjZW5lICk7XG5cdFx0Ly90aGlzLm9iak9ydGhvLm1vZGUgPSBCQUJZTE9OLkNhbWVyYS5PUlRIT0dSQVBISUNfQ0FNRVJBO1xuXHRcdC8vdGhpcy5vYmpPcnRoby5hdHRhY2hDb250cm9sKHRoaXMuY2FudmFzLCBmYWxzZSk7XG5cdFx0dGhpcy5vYmpPcnRoby5zZXRUYXJnZXQoQkFCWUxPTi5WZWN0b3IzLlplcm8oKSk7XG5cdFx0dGhpcy5vYmpPcnRoby5sYXllck1hc2sgPSB0aGlzLm9wdHMuX2FjdGl2ZURpYWxvZ0xheWVyO1xuXHRcdHRoaXMub2JqID0gbmV3IEJBQllMT04uVmlydHVhbEpveXN0aWNrc0NhbWVyYShcIlZKQ2FtZXJhXCIsIHRoaXMub3B0cy5fcG9zaXRpb24sIHRoaXMuc2NlbmUpO1xuICAgIHRoaXMub2JqLmF0dGFjaENvbnRyb2wodGhpcy5jYW52YXMsIGZhbHNlKTtcbiAgICB0cnl7XG4gICAgICBDQVRBTUFSQU4uaXNNb2JpbGUoKTtcbiAgICAgIHRoaXMuaW5lcnRpYVNwZWVkICA9IENBVEFNQVJBTi5fbW9iaWxlT1MgPT0gJ0FuZHJvaWQnID8gMC42IDogMC43O1xuICAgICAgdGhpcy5yb3RhdGlvblNwZWVkICA9IENBVEFNQVJBTi5fbW9iaWxlT1MgPT0gJ0FuZHJvaWQnPyA0IDogMjtcbiAgICAgIHRoaXMub2JqLmlucHV0cy5hdHRhY2hlZC52aXJ0dWFsSm95c3RpY2suX3JpZ2h0am95c3RpY2sucmV2ZXJzZVVwRG93biA9IHRydWU7XG4gICAgICB0aGlzLm9iai5pbnB1dHMuYXR0YWNoZWQudmlydHVhbEpveXN0aWNrLl9yaWdodGpveXN0aWNrLl9yb3RhdGVPbkF4aXNSZWxhdGl2ZVRvTWVzaCA9IHRydWU7XG4gICAgICB0aGlzLm9iai5pbnB1dHMuYXR0YWNoZWQudmlydHVhbEpveXN0aWNrLmNhbWVyYS5pbmVydGlhID0gdGhpcy5pbmVydGlhU3BlZWQ7XG4gICAgICB0aGlzLm9iai5pbnB1dHMuYXR0YWNoZWQudmlydHVhbEpveXN0aWNrLl9yaWdodGpveXN0aWNrLl9pbnZlcnNlUm90YXRpb25TcGVlZCA9IHRoaXMucm90YXRpb25TcGVlZDtcbiAgICAgIHRoaXMub2JqLmlucHV0cy5hdHRhY2hlZC52aXJ0dWFsSm95c3RpY2suX3JpZ2h0am95c3RpY2suX3JvdGF0aW9uU3BlZWQgPSB0aGlzLnJvdGF0aW9uU3BlZWQ7XG4gICAgICBpZih0aGlzLm9uZUF4aXMpe1xuICAgICAgIHRoaXMub2JqLmlucHV0cy5hdHRhY2hlZC52aXJ0dWFsSm95c3RpY2suX3JpZ2h0am95c3RpY2suX2F4aXNUYXJnZXRlZEJ5VXBBbmREb3duID0gMztcbiAgICAgICB0aGlzLm9iai5pbnB1dHMuYXR0YWNoZWQudmlydHVhbEpveXN0aWNrLl9yaWdodGpveXN0aWNrLl9heGlzVGFyZ2V0ZWRCeUxlZnRBbmRSaWdodCA9IDE7XG4gICAgICAgdGhpcy5vYmouaW5wdXRzLmF0dGFjaGVkLnZpcnR1YWxKb3lzdGljay5fbGVmdGpveXN0aWNrLl9heGlzVGFyZ2V0ZWRCeVVwQW5kRG93biA9IDI7XG4gICAgICAgdGhpcy5vYmouaW5wdXRzLmF0dGFjaGVkLnZpcnR1YWxKb3lzdGljay5fbGVmdGpveXN0aWNrLl9heGlzVGFyZ2V0ZWRCeUxlZnRBbmRSaWdodCA9IDA7XG4gICAgIH1cbiAgICAgdGhpcy5vYmpWUiAgPSBuZXcgQkFCWUxPTi5WUkRldmljZU9yaWVudGF0aW9uRnJlZUNhbWVyYShcIlZSQ2FtZXJhXCIsICB0aGlzLm9wdHMuX3Bvc2l0aW9uLCB0aGlzLnNjZW5lLCBmYWxzZSk7XG4gICAgIHRoaXMub2JqVlIuY2hlY2tDb2xsaXNpb25zID0gZmFsc2U7XG4gICAgIHRoaXMub2JqVlIuYXBwbHlHcmF2aXR5ID0gZmFsc2U7XG4gICAgIHRoaXMub2JqVlIuYXR0YWNoQ29udHJvbCh0aGlzLmNhbnZhcyAsIHRydWUpO1xuICAgICB0aGlzLm9iak9ydGhvVlIgID0gbmV3IEJBQllMT04uV2ViVlJGcmVlQ2FtZXJhKFwiVlJDYW1lcmEyXCIsIG5ldyBCQUJZTE9OLlZlY3RvcjMuWmVybygpLCAgdGhpcy5zY2VuZSwgZmFsc2UpO1xuICAgICB0aGlzLm9iak9ydGhvVlIuc2V0VGFyZ2V0KEJBQllMT04uVmVjdG9yMy5aZXJvKCkpO1xuICAgICB0aGlzLm9iak9ydGhvVlIubGF5ZXJNYXNrID0gdGhpcy5vcHRzLl9hY3RpdmVEaWFsb2dMYXllcjtcbiAgICAgdGhpcy5vYmpPcnRob1ZSLl9yaWdDYW1lcmFzWzBdLmxheWVyTWFzayA9ICB0aGlzLm9wdHMuX2FjdGl2ZURpYWxvZ0xheWVyO1xuICAgICB0aGlzLm9iak9ydGhvVlIuX3JpZ0NhbWVyYXNbMV0ubGF5ZXJNYXNrID0gIHRoaXMub3B0cy5fYWN0aXZlRGlhbG9nTGF5ZXI7XG4gICAgIHRoaXMub2JqVlIucG9zaXRpb24gPSB0aGlzLm9iai5wb3NpdGlvbjtcbiAgICAgdmFyIGNhbnZhc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYW52YXMnKTtcbiAgICAgdGhpcy5jYW52YXNMaXN0ID0gQXJyYXkuZnJvbShjYW52YXNMaXN0KTtcbiAgICAgdGhpcy5zZXRDYW52YXNUb3VjaCgpO1xuICAgfWNhdGNoKGUpe1xuICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgY29uc29sZS5sb2coJ3JlcXVpcmVzIC0+IGh0dHBzOi8vY29kZS5qcXVlcnkuY29tL3BlcC8wLjQuMS9wZXAuanMnKTtcbiAgIH1cbiAgIHRoaXMuc2NlbmUuYWN0aXZlQ2FtZXJhcy5wdXNoKHRoaXMub2JqKTtcbiAgIHRoaXMuc2NlbmUuYWN0aXZlQ2FtZXJhcy5wdXNoKHRoaXMub2JqT3J0aG8pO1xuICAgdGhpcy5zY2VuZS5hY3RpdmVDYW1lcmEgPSB0aGlzLm9iajtcbiAgIHRoaXMucGlja1Jlc3VsdCA9IG51bGw7XG5cbiAgIGlmKHRoaXMuZnBzVUkpe1xuICAgIHRoaXMuYm9keUVMID0gIG5ldyBDQVRBTUFSQU4uY29yZS5ET00oJ2JvZHknKTtcbiAgICB0aGlzLmZwc1VJV2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZwc3dpbmRvd1wiKTtcbiAgICB0aGlzLmZwc1VJV2luZG93Lm9wZW4gPSB0cnVlO1xuICAgIHRoaXMuZnBzVUlXaW5kb3cuY2xhc3NMaXN0LmFkZCgnZnBzVUlXaW5kb3cnKTtcbiAgICB0aGlzLmJvZHlFTC5hcHBlbmQoIHRoaXMuZnBzVUlXaW5kb3cgKTtcbiAgICB0aGlzLmZwc1VJV2luZG93ID0gbmV3IENBVEFNQVJBTi5jb3JlLkRPTSgnLmZwc1VJV2luZG93Jyk7XG4gIH1cbiAgaWYoQ0FUQU1BUkFOLmRlYnVnKXtcbiAgIHRoaXMuZGVidWcoKTtcbiB9XG59XG5cbmRlYnVnKCl7XG4gIHdpbmRvdy5vYmpWUiA9IHRoaXMub2JqVlI7XG4gIHdpbmRvdy5vYmogPSB0aGlzLm9iajtcbiAgd2luZG93Lm9iak9ydGhvID0gdGhpcy5vYmpPcnRobztcbiAgd2luZG93Lm9iak9ydGhvVlIgPSB0aGlzLm9iak9ydGhvVlI7XG59XG5cbnRvZ2dsZSgpIHtcbiAgaWYgKHRoaXMubW9kZSA9PSAnbm9ybWFsJykge1xuICAgIHRoaXMubW9kZSA9ICd2cic7XG4gICAgaWYgKHRoaXMuc2NlbmUgIT0gbnVsbCkge1xuICAgICB0aGlzLnNjZW5lLmFjdGl2ZUNhbWVyYXNbMF0gPSB0aGlzLm9ialZSO1xuICAgICB0aGlzLnNjZW5lLmFjdGl2ZUNhbWVyYXNbMV0gPSB0aGlzLm9iak9ydGhvVlI7XG4gICAgIHRoaXMuY3Vyc29yLnBvc2l0aW9uLnogPSAzMDtcbiAgICAgaWYodGhpcy5nbGl0Y2hFbmFibGVkKXtcbiAgICAgICAgICAgICAgICAgICAgXHQvL2Z4XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGhpcy5tb2RlID0gJ25vcm1hbCc7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5zY2VuZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5hY3RpdmVDYW1lcmFzWzBdID0gdGhpcy5vYmo7XG4gICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5hY3RpdmVDYW1lcmFzWzFdID0gdGhpcy5vYmpPcnRobztcbiAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnNvci5wb3NpdGlvbi56ID0gMTAwO1xuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgcmVhZERldmljZU9yaWVudGF0aW9uKCkge1xuICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMod2luZG93Lm9yaWVudGF0aW9uKSA9PT0gOTApIHtcbiAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ2FudmFzKCdibG9jaycpO1xuICAgICAgICAgICAgICAgaWYodGhpcy5vYmpWUiA9PSBudWxsKXtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRWUigpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMubGFuZHNjYXBlTW9kZSA9IHRydWU7XG4gICAgICAgICAgICAgIHRoaXMubW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgdGhpcy50b2dnbGVDYW52YXMoKTtcbiAgICAgICAgICAgICB0aGlzLm1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgIHRoaXMubGFuZHNjYXBlTW9kZSA9IGZhbHNlO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIHRoaXMuc2V0Q2FudmFzVG91Y2goKTtcbiAgICAgICAgICAgdGhpcy5zY2VuZS5nZXRFbmdpbmUoKS5yZXNpemUoKTtcblxuICAgICAgICAgfVxuXG4gICAgICAgICB0b2dnbGVDYW52YXMoX21vZGUgPSAnbm9uZScpe1xuICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudnItYnV0dG9uJykuc3R5bGUuZGlzcGxheSA9IF9tb2RlO1xuICAgICAgICAgfVxuXG4gICAgICAgICByYXlQaWNrKCl7XG4gICAgICAgICAgIHRoaXMucGlja1Jlc3VsdCA9IHRoaXMuc2NlbmUucGljayh0aGlzLnNjZW5lLnBvaW50ZXJYLCB0aGlzLnNjZW5lLnBvaW50ZXJZKTtcbiAgXHQgXHQgICAgIC8vY29uc29sZS5sb2codGhpcy5waWNrUmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldENhbnZhc1RvdWNoKCl7XG4gICAgICAgICBmb3IobGV0IGk9MDsgaSA8IHRoaXMuY2FudmFzTGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgdGhpcy5jYW52YXNMaXN0W2ldLnNldEF0dHJpYnV0ZShcInRvdWNoLWFjdGlvblwiLCAnbm9uZScpO1xuICAgICAgICAgIHRoaXMuY2FudmFzTGlzdFtpXS5zdHlsZS53aWR0aCA9ICcnO1xuICAgICAgICAgIHRoaXMuY2FudmFzTGlzdFtpXS5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICAgICAgICB0aGlzLmNhbnZhc0xpc3RbaV0uaGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICAgICAgICB0aGlzLmNhbnZhc0xpc3RbaV0ud2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc2V0TGlzdG5lcnMoKXtcbiAgICAgICB0aGlzLnNldENhbnZhc1RvdWNoKCk7XG4gICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZyLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGUuYmluZCh0aGlzKSk7XG4gICAgXHQvL3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmF5UGljay5iaW5kKHRoaXMpKTtcbiAgICBcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdvcmllbnRhdGlvbmNoYW5nZScsIHRoaXMucmVhZERldmljZU9yaWVudGF0aW9uLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICBcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICB0aGlzLnNldENhbnZhc1RvdWNoKCk7XG4gICAgICAgdGhpcy5zY2VuZS5nZXRFbmdpbmUoKS5yZXNpemUoKTtcbiAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIH1cbiAgICBcblxuICB9XG4gIG1vZHVsZS5leHBvcnRzID0gY19jYW1lcmF2cjsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=