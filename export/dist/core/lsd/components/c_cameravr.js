"use strict";function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,i){for(var s=0;s<i.length;s++){var e=i[s];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(i,s,e){return s&&t(i.prototype,s),e&&t(i,e),i}}(),CES=require("CES"),BABYLON=require("../lib/babylon"),utils=require("../utils/utils"),defaults=utils.defaultArgs();defaults._name="camera";var c_cameravr=function(){function t(){var i=arguments.length<=0||void 0===arguments[0]?defaults:arguments[0];_classCallCheck(this,t),this.rotationModal=i._hasModal,this.rotationModal&&(this.modal=document.createElement("div"),this.modal.classList.add("a-orientation-modal"),this.modal.style.display="none",document.body.appendChild(this.modal)),this.cursorEnt=null,this.cursor=i._cursor,this.cursorVR1=i._cursorVR1,this.cursorVR2=i._cursorVR2,this.canvasList=null,this.name=i._name,this.opts=i,this.obj,this.objVR=null,this.objOrthoVR=null,this.objOrtho=null,this.scene=i._scene,this.canvas=i._canvas,this.oneAxis=!0,this.mode="normal",this.fpsUIWindow=null,this.fpsUI=i._fpsUI,this.hud=null,this.glitchEnabled=!1;var s=document.querySelectorAll("canvas");this.canvasList=Array.from(s),90!==Math.abs(window.orientation)&&CATAMARAN.isMobile()?(this.toggleCanvas(),this.rotationModal&&(this.modal.style.display="block")):(this.toggleCanvas("block"),this.initVR()),this.setListners(),this.options={name:this.name,init:this.constructor,obj:this.obj,objOrtho:this.objOrtho,objOrthoVR:this.objOrthoVR,objVR:this.objVR},CES.Component.extend(this.options)}return _createClass(t,[{key:"initVR",value:function(){this.objOrtho=new BABYLON.FreeCamera("FreeCamera",BABYLON.Vector3.Zero(),this.opts._scene),this.objOrtho.setTarget(BABYLON.Vector3.Zero()),this.objOrtho.layerMask=this.opts._activeDialogLayer,this.obj=new BABYLON.VirtualJoysticksCamera("VJCamera",this.opts._position,this.scene),this.obj.attachControl(this.canvas,!1);try{CATAMARAN.isMobile(),this.inertiaSpeed="Android"==CATAMARAN._mobileOS?.6:.7,this.rotationSpeed="Android"==CATAMARAN._mobileOS?4:2,this.obj.inputs.attached.virtualJoystick._rightjoystick.reverseUpDown=!0,this.obj.inputs.attached.virtualJoystick._rightjoystick._rotateOnAxisRelativeToMesh=!0,this.obj.inputs.attached.virtualJoystick.camera.inertia=this.inertiaSpeed,this.obj.inputs.attached.virtualJoystick._rightjoystick._inverseRotationSpeed=this.rotationSpeed,this.obj.inputs.attached.virtualJoystick._rightjoystick._rotationSpeed=this.rotationSpeed,this.oneAxis&&(this.obj.inputs.attached.virtualJoystick._rightjoystick._axisTargetedByUpAndDown=3,this.obj.inputs.attached.virtualJoystick._rightjoystick._axisTargetedByLeftAndRight=1,this.obj.inputs.attached.virtualJoystick._leftjoystick._axisTargetedByUpAndDown=2,this.obj.inputs.attached.virtualJoystick._leftjoystick._axisTargetedByLeftAndRight=0),this.objVR=new BABYLON.VRDeviceOrientationFreeCamera("VRCamera",this.opts._position,this.scene,!1),this.objVR.checkCollisions=!1,this.objVR.applyGravity=!1,this.objVR.attachControl(this.canvas,!0),this.objOrthoVR=new BABYLON.WebVRFreeCamera("VRCamera2",new BABYLON.Vector3.Zero,this.scene,!1),this.objOrthoVR.setTarget(BABYLON.Vector3.Zero()),this.objOrthoVR.layerMask=this.opts._activeDialogLayer,this.objOrthoVR._rigCameras[0].layerMask=this.opts._activeDialogLayer,this.objOrthoVR._rigCameras[1].layerMask=this.opts._activeDialogLayer,this.objVR.position=this.obj.position;var t=document.querySelectorAll("canvas");this.canvasList=Array.from(t),this.setCanvasTouch()}catch(i){console.log(i),console.log("requires -> https://code.jquery.com/pep/0.4.1/pep.js")}this.scene.activeCameras.push(this.obj),this.scene.activeCameras.push(this.objOrtho),this.scene.activeCamera=this.obj,this.pickResult=null,this.fpsUI&&(this.bodyEL=new CATAMARAN.core.DOM("body"),this.fpsUIWindow=document.createElement("fpswindow"),this.fpsUIWindow.open=!0,this.fpsUIWindow.classList.add("fpsUIWindow"),this.bodyEL.append(this.fpsUIWindow),this.fpsUIWindow=new CATAMARAN.core.DOM(".fpsUIWindow")),CATAMARAN.debug&&this.debug()}},{key:"debug",value:function(){window.objVR=this.objVR,window.obj=this.obj,window.objOrtho=this.objOrtho,window.objOrthoVR=this.objOrthoVR}},{key:"toggle",value:function(){"normal"==this.mode?(this.mode="vr",null!=this.scene&&(this.scene.activeCameras[0]=this.objVR,this.scene.activeCameras[1]=this.objOrthoVR,this.cursor.position.z=30,this.glitchEnabled)):(this.mode="normal",null!=this.scene&&(this.scene.activeCameras[0]=this.obj,this.scene.activeCameras[1]=this.objOrtho,this.cursor.position.z=100))}},{key:"readDeviceOrientation",value:function(){90===Math.abs(window.orientation)?(this.toggleCanvas("block"),null==this.objVR&&this.initVR(),this.landscapeMode=!0,this.rotationModal&&(this.modal.style.display="none")):(this.toggleCanvas(),this.rotationModal&&(this.modal.style.display="block"),this.landscapeMode=!1),this.setCanvasTouch(),this.scene.getEngine().resize()}},{key:"toggleCanvas",value:function(){var t=arguments.length<=0||void 0===arguments[0]?"none":arguments[0];document.querySelector(".vr-button").style.display=t}},{key:"rayPick",value:function(){this.pickResult=this.scene.pick(this.scene.pointerX,this.scene.pointerY)}},{key:"setCanvasTouch",value:function(){for(var t=0;t<this.canvasList.length;t++)this.canvasList[t].setAttribute("touch-action","none"),this.canvasList[t].style.width="",this.canvasList[t].style.height="",this.canvasList[t].height=document.documentElement.clientHeight,this.canvasList[t].width=document.documentElement.clientWidth}},{key:"setListners",value:function(){this.setCanvasTouch(),document.querySelector(".vr-button").addEventListener("click",this.toggle.bind(this)),window.addEventListener("orientationchange",this.readDeviceOrientation.bind(this),!1),window.addEventListener("resize",function(){this.setCanvasTouch(),this.scene.getEngine().resize()}.bind(this))}}]),t}();module.exports=c_cameravr;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvbHNkL2NvbXBvbmVudHMvY19jYW1lcmF2ci5qcyJdLCJuYW1lcyI6WyJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsIkNFUyIsInJlcXVpcmUiLCJCQUJZTE9OIiwidXRpbHMiLCJkZWZhdWx0cyIsImRlZmF1bHRBcmdzIiwiX25hbWUiLCJjX2NhbWVyYXZyIiwiX29wdHMiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJ0aGlzIiwicm90YXRpb25Nb2RhbCIsIl9oYXNNb2RhbCIsIm1vZGFsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGUiLCJkaXNwbGF5IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY3Vyc29yRW50IiwiY3Vyc29yIiwiX2N1cnNvciIsImN1cnNvclZSMSIsIl9jdXJzb3JWUjEiLCJjdXJzb3JWUjIiLCJfY3Vyc29yVlIyIiwiY2FudmFzTGlzdCIsIm5hbWUiLCJvcHRzIiwib2JqIiwib2JqVlIiLCJvYmpPcnRob1ZSIiwib2JqT3J0aG8iLCJzY2VuZSIsIl9zY2VuZSIsImNhbnZhcyIsIl9jYW52YXMiLCJvbmVBeGlzIiwibW9kZSIsImZwc1VJV2luZG93IiwiZnBzVUkiLCJfZnBzVUkiLCJodWQiLCJnbGl0Y2hFbmFibGVkIiwicXVlcnlTZWxlY3RvckFsbCIsIkFycmF5IiwiZnJvbSIsIk1hdGgiLCJhYnMiLCJ3aW5kb3ciLCJvcmllbnRhdGlvbiIsIkNBVEFNQVJBTiIsImlzTW9iaWxlIiwidG9nZ2xlQ2FudmFzIiwiaW5pdFZSIiwic2V0TGlzdG5lcnMiLCJvcHRpb25zIiwiaW5pdCIsImNvbnN0cnVjdG9yIiwiQ29tcG9uZW50IiwiZXh0ZW5kIiwidmFsdWUiLCJGcmVlQ2FtZXJhIiwiVmVjdG9yMyIsIlplcm8iLCJzZXRUYXJnZXQiLCJsYXllck1hc2siLCJfYWN0aXZlRGlhbG9nTGF5ZXIiLCJWaXJ0dWFsSm95c3RpY2tzQ2FtZXJhIiwiX3Bvc2l0aW9uIiwiYXR0YWNoQ29udHJvbCIsImluZXJ0aWFTcGVlZCIsIl9tb2JpbGVPUyIsInJvdGF0aW9uU3BlZWQiLCJpbnB1dHMiLCJhdHRhY2hlZCIsInZpcnR1YWxKb3lzdGljayIsIl9yaWdodGpveXN0aWNrIiwicmV2ZXJzZVVwRG93biIsIl9yb3RhdGVPbkF4aXNSZWxhdGl2ZVRvTWVzaCIsImNhbWVyYSIsImluZXJ0aWEiLCJfaW52ZXJzZVJvdGF0aW9uU3BlZWQiLCJfcm90YXRpb25TcGVlZCIsIl9heGlzVGFyZ2V0ZWRCeVVwQW5kRG93biIsIl9heGlzVGFyZ2V0ZWRCeUxlZnRBbmRSaWdodCIsIl9sZWZ0am95c3RpY2siLCJWUkRldmljZU9yaWVudGF0aW9uRnJlZUNhbWVyYSIsImNoZWNrQ29sbGlzaW9ucyIsImFwcGx5R3Jhdml0eSIsIldlYlZSRnJlZUNhbWVyYSIsIl9yaWdDYW1lcmFzIiwicG9zaXRpb24iLCJzZXRDYW52YXNUb3VjaCIsImUiLCJjb25zb2xlIiwibG9nIiwiYWN0aXZlQ2FtZXJhcyIsInB1c2giLCJhY3RpdmVDYW1lcmEiLCJwaWNrUmVzdWx0IiwiYm9keUVMIiwiY29yZSIsIkRPTSIsIm9wZW4iLCJhcHBlbmQiLCJkZWJ1ZyIsInoiLCJsYW5kc2NhcGVNb2RlIiwiZ2V0RW5naW5lIiwicmVzaXplIiwiX21vZGUiLCJxdWVyeVNlbGVjdG9yIiwicGljayIsInBvaW50ZXJYIiwicG9pbnRlclkiLCJzZXRBdHRyaWJ1dGUiLCJ3aWR0aCIsImhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsImNsaWVudFdpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZSIsImJpbmQiLCJyZWFkRGV2aWNlT3JpZW50YXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUlBLFNBQVNBLGlCQUFnQkMsRUFBVUMsR0FBZSxLQUFNRCxZQUFvQkMsSUFBZ0IsS0FBTSxJQUFJQyxXQUFVLHFDQUZoSCxHQUFJQyxjQUFlLFdBQWUsUUFBU0MsR0FBaUJDLEVBQVFDLEdBQVMsSUFBSyxHQUFJQyxHQUFJLEVBQUdBLEVBQUlELEVBQU1FLE9BQVFELElBQUssQ0FBRSxHQUFJRSxHQUFhSCxFQUFNQyxFQUFJRSxHQUFXQyxXQUFhRCxFQUFXQyxhQUFjLEVBQU9ELEVBQVdFLGNBQWUsRUFBVSxTQUFXRixLQUFZQSxFQUFXRyxVQUFXLEdBQU1DLE9BQU9DLGVBQWVULEVBQVFJLEVBQVdNLElBQUtOLElBQWlCLE1BQU8sVUFBVVIsRUFBYWUsRUFBWUMsR0FBaUosTUFBOUhELElBQVlaLEVBQWlCSCxFQUFZaUIsVUFBV0YsR0FBaUJDLEdBQWFiLEVBQWlCSCxFQUFhZ0IsR0FBcUJoQixNQUY3aEJrQixJQUFNQyxRQUFRLE9BQ2RDLFFBQVVELFFBQVEsa0JBQ2xCRSxNQUFRRixRQUFRLGtCQUNoQkcsU0FBV0QsTUFBTUUsYUFDckJELFVBQVNFLE1BQVEsUUFjakIsSUFQT0MsWUFBVSxXQUNILFFBRFBBLEtBU0gsR0FSV0MsR0FBS0MsVUFBQXBCLFFBQUEsR0FBQXFCLFNBQUFELFVBQUEsR0FBR0wsU0FBUUssVUFBQSxFQVUzQjdCLGlCQUFnQitCLEtBWGJKLEdBRUhJLEtBQUtDLGNBQWdCSixFQUFNSyxVQUN4QkYsS0FBS0MsZ0JBQ05ELEtBQUtHLE1BQVFDLFNBQVNDLGNBQWMsT0FDcENMLEtBQUtHLE1BQU1HLFVBQVVDLElBQUksdUJBQ3pCUCxLQUFLRyxNQUFNSyxNQUFNQyxRQUFVLE9BQzNCTCxTQUFTTSxLQUFLQyxZQUFZWCxLQUFLRyxRQUdqQ0gsS0FBS1ksVUFBWSxLQUNqQlosS0FB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QUFLLGVBQ0xxRSxNQWRpQixXQWVmLEdBZmdCa0QsR0FBSzFHLFVBQUFwQixRQUFBLEdBQUFxQixTQUFBRCxVQUFBLEdBQUcsT0FBTUEsVUFBQSxFQUN6Qk0sVUFBU3FHLGNBQWMsY0FBY2pHLE1BQU1DLFFBQVUrRixLQW1CNUR2SCxJQUFLLFVBQ0xxRSxNQWpCWSxXQUNMdEQsS0FBSzZGLFdBQWE3RixLQUFLMEIsTUFBTWdGLEtBQUsxRyxLQUFLMEIsTUFBTWlGLFNBQVUzRyxLQUFLMEIsTUFBTWtGLGFBcUJ6RTNILElBQUssaUJBQ0xxRSxNQWxCa0IsV0FDYixJQUFJLEdBQUk3RSxHQUFFLEVBQUdBLEVBQUl1QixLQUFLbUIsV0FBV3pDLE9BQVFELElBQ3hDdUIsS0FBS21CLFdBQVcxQyxHQUFHb0ksYUFBYSxlQUFnQixRQUNoRDdHLEtBQUttQixXQUFXMUMsR0FBRytCLE1BQU1zRyxNQUFRLEdBQ2pDOUcsS0FBS21CLFdBQVcxQyxHQUFHK0IsTUFBTXVHLE9BQVMsR0FDbEMvRyxLQUFLbUIsV0FBVzFDLEdBQUdzSSxPQUFTM0csU0FBUzRHLGdCQUFnQkMsYUFDckRqSCxLQUFLbUIsV0FBVzFDLEdBQUdxSSxNQUFRMUcsU0FBUzRHLGdCQUFnQkUsZUFzQjFEakksSUFBSyxjQUNMcUUsTUFuQmEsV0FDVnRELEtBQUtzRixpQkFDTGxGLFNBQVNxRyxjQUFjLGNBQWNVLGlCQUFpQixRQUFTbkgsS0FBS29ILE9BQU9DLEtBQUtySCxPQUVsRjBDLE9BQU95RSxpQkFBaUIsb0JBQXFCbkgsS0FBS3NILHNCQUFzQkQsS0FBS3JILE9BQU8sR0FDcEYwQyxPQUFPeUUsaUJBQWlCLFNBQVUsV0FDaENuSCxLQUFLc0YsaUJBQ0x0RixLQUFLMEIsTUFBTTRFLFlBQVlDLFVBQ3ZCYyxLQUFLckgsV0E5TExKLElBb01MMkgsUUFBT0MsUUFBVTVIIiwiZmlsZSI6ImNvcmUvbHNkL2NvbXBvbmVudHMvY19jYW1lcmF2ci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBDRVMgPSByZXF1aXJlKCdDRVMnKTtcbnZhciBCQUJZTE9OID0gcmVxdWlyZSgnLi4vbGliL2JhYnlsb24nKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzL3V0aWxzJyk7XG52YXIgZGVmYXVsdHMgPSB1dGlscy5kZWZhdWx0QXJncygpO1xuZGVmYXVsdHMuX25hbWUgPSAnY2FtZXJhJztcbi8qKlxuICogLi4uXG4gKiBAYXV0aG9yIEJyZW5kb24gU21pdGhcbiAqIGh0dHA6Ly9zZWFjbG91ZDkub3JnXG4gKiBMaWdodFdlaWdodCAzRCBTeXN0ZW0gRGVzaWduIGVuZ2luZVxuICovXG4gY2xhc3MgY19jYW1lcmF2ciB7XG4gICBjb25zdHJ1Y3Rvcihfb3B0cyA9IGRlZmF1bHRzKXtcbiAgICB0aGlzLnJvdGF0aW9uTW9kYWwgPSBfb3B0cy5faGFzTW9kYWw7XG4gICAgaWYodGhpcy5yb3RhdGlvbk1vZGFsKXtcbiAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgnYS1vcmllbnRhdGlvbi1tb2RhbCcpO1xuICAgICAgdGhpcy5tb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5jdXJzb3JFbnQgPSBudWxsO1xuICAgIHRoaXMuY3Vyc29yID0gX29wdHMuX2N1cnNvcjtcbiAgICB0aGlzLmN1cnNvclZSMSA9IF9vcHRzLl9jdXJzb3JWUjE7XG4gICAgdGhpcy5jdXJzb3JWUjIgPSBfb3B0cy5fY3Vyc29yVlIyO1xuICAgIHRoaXMuY2FudmFzTGlzdCA9IG51bGw7XG4gICAgdGhpcy5uYW1lID0gX29wdHMuX25hbWU7XG4gICAgdGhpcy5vcHRzID0gX29wdHM7XG4gICAgdGhpcy5vYmo7XG4gICAgdGhpcy5vYmpWUiA9IG51bGw7XG4gICAgdGhpcy5vYmpPcnRob1ZSID0gbnVsbDtcbiAgICB0aGlzLm9iak9ydGhvID0gbnVsbDtcbiAgICB0aGlzLnNjZW5lID0gIF9vcHRzLl9zY2VuZTtcbiAgICB0aGlzLmNhbnZhcyA9IF9vcHRzLl9jYW52YXM7XG4gICAgdGhpcy5vbmVBeGlzID0gdHJ1ZTtcbiAgICB0aGlzLm1vZGUgPSAnbm9ybWFsJztcbiAgICB0aGlzLmZwc1VJV2luZG93ID0gbnVsbDtcbiAgICB0aGlzLmZwc1VJID0gX29wdHMuX2Zwc1VJO1xuICAgIHRoaXMuaHVkICA9IG51bGw7XG4gICAgdGhpcy5nbGl0Y2hFbmFibGVkID0gZmFsc2U7XG4gICAgdmFyIGNhbnZhc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdjYW52YXMnKTtcbiAgICB0aGlzLmNhbnZhc0xpc3QgPSBBcnJheS5mcm9tKGNhbnZhc0xpc3QpO1xuICAgIGlmKE1hdGguYWJzKHdpbmRvdy5vcmllbnRhdGlvbikgPT09IDkwIHx8ICFDQVRBTUFSQU4uaXNNb2JpbGUoKSl7XG4gICAgIHRoaXMudG9nZ2xlQ2FudmFzKCdibG9jaycpO1xuICAgICB0aGlzLmluaXRWUigpO1xuICAgfWVsc2V7XG4gICAgIHRoaXMudG9nZ2xlQ2FudmFzKCk7XG4gICAgIGlmKHRoaXMucm90YXRpb25Nb2RhbCl7XG4gICAgICB0aGlzLm1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICB9XG4gICAgIFxuICAgfVxuICAgdGhpcy5zZXRMaXN0bmVycygpO1xuICAgdGhpcy5vcHRpb25zID0ge1xuICAgICBuYW1lOnRoaXMubmFtZSxcbiAgICAgaW5pdDogdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgb2JqOnRoaXMub2JqLFxuICAgICBvYmpPcnRobzp0aGlzLm9iak9ydGhvLFxuICAgICBvYmpPcnRob1ZSOiB0aGlzLm9iak9ydGhvVlIsXG4gICAgIG9ialZSOnRoaXMub2JqVlJcbiAgIH1cbiAgIENFUy5Db21wb25lbnQuZXh0ZW5kKHRoaXMub3B0aW9ucyk7XG4gfVxuXG4gaW5pdFZSKCl7XG4gIHRoaXMub2JqT3J0aG8gID0gbmV3IEJBQllMT04uRnJlZUNhbWVyYShcIkZyZWVDYW1lcmFcIiwgQkFCWUxPTi5WZWN0b3IzLlplcm8oKSwgdGhpcy5vcHRzLl9zY2VuZSApO1xuXHRcdC8vdGhpcy5vYmpPcnRoby5tb2RlID0gQkFCWUxPTi5DYW1lcmEuT1JUSE9HUkFQSElDX0NBTUVSQTtcblx0XHQvL3RoaXMub2JqT3J0aG8uYXR0YWNoQ29udHJvbCh0aGlzLmNhbnZhcywgZmFsc2UpO1xuXHRcdHRoaXMub2JqT3J0aG8uc2V0VGFyZ2V0KEJBQllMT04uVmVjdG9yMy5aZXJvKCkpO1xuXHRcdHRoaXMub2JqT3J0aG8ubGF5ZXJNYXNrID0gdGhpcy5vcHRzLl9hY3RpdmVEaWFsb2dMYXllcjtcblx0XHR0aGlzLm9iaiA9IG5ldyBCQUJZTE9OLlZpcnR1YWxKb3lzdGlja3NDYW1lcmEoXCJWSkNhbWVyYVwiLCB0aGlzLm9wdHMuX3Bvc2l0aW9uLCB0aGlzLnNjZW5lKTtcbiAgICB0aGlzLm9iai5hdHRhY2hDb250cm9sKHRoaXMuY2FudmFzLCBmYWxzZSk7XG4gICAgdHJ5e1xuICAgICAgQ0FUQU1BUkFOLmlzTW9iaWxlKCk7XG4gICAgICB0aGlzLmluZXJ0aWFTcGVlZCAgPSBDQVRBTUFSQU4uX21vYmlsZU9TID09ICdBbmRyb2lkJyA/IDAuNiA6IDAuNztcbiAgICAgIHRoaXMucm90YXRpb25TcGVlZCAgPSBDQVRBTUFSQU4uX21vYmlsZU9TID09ICdBbmRyb2lkJz8gNCA6IDI7XG4gICAgICB0aGlzLm9iai5pbnB1dHMuYXR0YWNoZWQudmlydHVhbEpveXN0aWNrLl9yaWdodGpveXN0aWNrLnJldmVyc2VVcERvd24gPSB0cnVlO1xuICAgICAgdGhpcy5vYmouaW5wdXRzLmF0dGFjaGVkLnZpcnR1YWxKb3lzdGljay5fcmlnaHRqb3lzdGljay5fcm90YXRlT25BeGlzUmVsYXRpdmVUb01lc2ggPSB0cnVlO1xuICAgICAgdGhpcy5vYmouaW5wdXRzLmF0dGFjaGVkLnZpcnR1YWxKb3lzdGljay5jYW1lcmEuaW5lcnRpYSA9IHRoaXMuaW5lcnRpYVNwZWVkO1xuICAgICAgdGhpcy5vYmouaW5wdXRzLmF0dGFjaGVkLnZpcnR1YWxKb3lzdGljay5fcmlnaHRqb3lzdGljay5faW52ZXJzZVJvdGF0aW9uU3BlZWQgPSB0aGlzLnJvdGF0aW9uU3BlZWQ7XG4gICAgICB0aGlzLm9iai5pbnB1dHMuYXR0YWNoZWQudmlydHVhbEpveXN0aWNrLl9yaWdodGpveXN0aWNrLl9yb3RhdGlvblNwZWVkID0gdGhpcy5yb3RhdGlvblNwZWVkO1xuICAgICAgaWYodGhpcy5vbmVBeGlzKXtcbiAgICAgICB0aGlzLm9iai5pbnB1dHMuYXR0YWNoZWQudmlydHVhbEpveXN0aWNrLl9yaWdodGpveXN0aWNrLl9heGlzVGFyZ2V0ZWRCeVVwQW5kRG93biA9IDM7XG4gICAgICAgdGhpcy5vYmouaW5wdXRzLmF0dGFjaGVkLnZpcnR1YWxKb3lzdGljay5fcmlnaHRqb3lzdGljay5fYXhpc1RhcmdldGVkQnlMZWZ0QW5kUmlnaHQgPSAxO1xuICAgICAgIHRoaXMub2JqLmlucHV0cy5hdHRhY2hlZC52aXJ0dWFsSm95c3RpY2suX2xlZnRqb3lzdGljay5fYXhpc1RhcmdldGVkQnlVcEFuZERvd24gPSAyO1xuICAgICAgIHRoaXMub2JqLmlucHV0cy5hdHRhY2hlZC52aXJ0dWFsSm95c3RpY2suX2xlZnRqb3lzdGljay5fYXhpc1RhcmdldGVkQnlMZWZ0QW5kUmlnaHQgPSAwO1xuICAgICB9XG4gICAgIHRoaXMub2JqVlIgID0gbmV3IEJBQllMT04uVlJEZXZpY2VPcmllbnRhdGlvbkZyZWVDYW1lcmEoXCJWUkNhbWVyYVwiLCAgdGhpcy5vcHRzLl9wb3NpdGlvbiwgdGhpcy5zY2VuZSwgZmFsc2UpO1xuICAgICB0aGlzLm9ialZSLmNoZWNrQ29sbGlzaW9ucyA9IGZhbHNlO1xuICAgICB0aGlzLm9ialZSLmFwcGx5R3Jhdml0eSA9IGZhbHNlO1xuICAgICB0aGlzLm9ialZSLmF0dGFjaENvbnRyb2wodGhpcy5jYW52YXMgLCB0cnVlKTtcbiAgICAgdGhpcy5vYmpPcnRob1ZSICA9IG5ldyBCQUJZTE9OLldlYlZSRnJlZUNhbWVyYShcIlZSQ2FtZXJhMlwiLCBuZXcgQkFCWUxPTi5WZWN0b3IzLlplcm8oKSwgIHRoaXMuc2NlbmUsIGZhbHNlKTtcbiAgICAgdGhpcy5vYmpPcnRob1ZSLnNldFRhcmdldChCQUJZTE9OLlZlY3RvcjMuWmVybygpKTtcbiAgICAgdGhpcy5vYmpPcnRob1ZSLmxheWVyTWFzayA9IHRoaXMub3B0cy5fYWN0aXZlRGlhbG9nTGF5ZXI7XG4gICAgIHRoaXMub2JqT3J0aG9WUi5fcmlnQ2FtZXJhc1swXS5sYXllck1hc2sgPSAgdGhpcy5vcHRzLl9hY3RpdmVEaWFsb2dMYXllcjtcbiAgICAgdGhpcy5vYmpPcnRob1ZSLl9yaWdDYW1lcmFzWzFdLmxheWVyTWFzayA9ICB0aGlzLm9wdHMuX2FjdGl2ZURpYWxvZ0xheWVyO1xuICAgICB0aGlzLm9ialZSLnBvc2l0aW9uID0gdGhpcy5vYmoucG9zaXRpb247XG4gICAgIHZhciBjYW52YXNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY2FudmFzJyk7XG4gICAgIHRoaXMuY2FudmFzTGlzdCA9IEFycmF5LmZyb20oY2FudmFzTGlzdCk7XG4gICAgIHRoaXMuc2V0Q2FudmFzVG91Y2goKTtcbiAgIH1jYXRjaChlKXtcbiAgICAgY29uc29sZS5sb2coZSk7XG4gICAgIGNvbnNvbGUubG9nKCdyZXF1aXJlcyAtPiBodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9wZXAvMC40LjEvcGVwLmpzJyk7XG4gICB9XG4gICB0aGlzLnNjZW5lLmFjdGl2ZUNhbWVyYXMucHVzaCh0aGlzLm9iaik7XG4gICB0aGlzLnNjZW5lLmFjdGl2ZUNhbWVyYXMucHVzaCh0aGlzLm9iak9ydGhvKTtcbiAgIHRoaXMuc2NlbmUuYWN0aXZlQ2FtZXJhID0gdGhpcy5vYmo7XG4gICB0aGlzLnBpY2tSZXN1bHQgPSBudWxsO1xuXG4gICBpZih0aGlzLmZwc1VJKXtcbiAgICB0aGlzLmJvZHlFTCA9ICBuZXcgQ0FUQU1BUkFOLmNvcmUuRE9NKCdib2R5Jyk7XG4gICAgdGhpcy5mcHNVSVdpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmcHN3aW5kb3dcIik7XG4gICAgdGhpcy5mcHNVSVdpbmRvdy5vcGVuID0gdHJ1ZTtcbiAgICB0aGlzLmZwc1VJV2luZG93LmNsYXNzTGlzdC5hZGQoJ2Zwc1VJV2luZG93Jyk7XG4gICAgdGhpcy5ib2R5RUwuYXBwZW5kKCB0aGlzLmZwc1VJV2luZG93ICk7XG4gICAgdGhpcy5mcHNVSVdpbmRvdyA9IG5ldyBDQVRBTUFSQU4uY29yZS5ET00oJy5mcHNVSVdpbmRvdycpO1xuICB9XG4gIGlmKENBVEFNQVJBTi5kZWJ1Zyl7XG4gICB0aGlzLmRlYnVnKCk7XG4gfVxufVxuXG5kZWJ1Zygpe1xuICB3aW5kb3cub2JqVlIgPSB0aGlzLm9ialZSO1xuICB3aW5kb3cub2JqID0gdGhpcy5vYmo7XG4gIHdpbmRvdy5vYmpPcnRobyA9IHRoaXMub2JqT3J0aG87XG4gIHdpbmRvdy5vYmpPcnRob1ZSID0gdGhpcy5vYmpPcnRob1ZSO1xufVxuXG50b2dnbGUoKSB7XG4gIGlmICh0aGlzLm1vZGUgPT0gJ25vcm1hbCcpIHtcbiAgICB0aGlzLm1vZGUgPSAndnInO1xuICAgIGlmICh0aGlzLnNjZW5lICE9IG51bGwpIHtcbiAgICAgdGhpcy5zY2VuZS5hY3RpdmVDYW1lcmFzWzBdID0gdGhpcy5vYmpWUjtcbiAgICAgdGhpcy5zY2VuZS5hY3RpdmVDYW1lcmFzWzFdID0gdGhpcy5vYmpPcnRob1ZSO1xuICAgICB0aGlzLmN1cnNvci5wb3NpdGlvbi56ID0gMzA7XG4gICAgIGlmKHRoaXMuZ2xpdGNoRW5hYmxlZCl7XG4gICAgICAgICAgICAgICAgICAgIFx0Ly9meFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMubW9kZSA9ICdub3JtYWwnO1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2NlbmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUuYWN0aXZlQ2FtZXJhc1swXSA9IHRoaXMub2JqO1xuICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUuYWN0aXZlQ2FtZXJhc1sxXSA9IHRoaXMub2JqT3J0aG87XG4gICAgICAgICAgICAgICAgICAgdGhpcy5jdXJzb3IucG9zaXRpb24ueiA9IDEwMDtcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgIHJlYWREZXZpY2VPcmllbnRhdGlvbigpIHtcbiAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHdpbmRvdy5vcmllbnRhdGlvbikgPT09IDkwKSB7XG4gICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNhbnZhcygnYmxvY2snKTtcbiAgICAgICAgICAgICAgIGlmKHRoaXMub2JqVlIgPT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0VlIoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLmxhbmRzY2FwZU1vZGUgPSB0cnVlO1xuICAgICAgICAgICAgICBpZih0aGlzLnJvdGF0aW9uTW9kYWwpe1xuICAgICAgICAgICAgICAgIHRoaXMubW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ2FudmFzKCk7XG4gICAgICAgICAgICAgICBpZih0aGlzLnJvdGF0aW9uTW9kYWwpe1xuICAgICAgICAgICAgICAgICAgdGhpcy5tb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB0aGlzLmxhbmRzY2FwZU1vZGUgPSBmYWxzZTtcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgfVxuICAgICAgICAgICB0aGlzLnNldENhbnZhc1RvdWNoKCk7XG4gICAgICAgICAgIHRoaXMuc2NlbmUuZ2V0RW5naW5lKCkucmVzaXplKCk7XG5cbiAgICAgICAgIH1cblxuICAgICAgICAgdG9nZ2xlQ2FudmFzKF9tb2RlID0gJ25vbmUnKXtcbiAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZyLWJ1dHRvbicpLnN0eWxlLmRpc3BsYXkgPSBfbW9kZTtcbiAgICAgICAgIH1cblxuICAgICAgICAgcmF5UGljaygpe1xuICAgICAgICAgICB0aGlzLnBpY2tSZXN1bHQgPSB0aGlzLnNjZW5lLnBpY2sodGhpcy5zY2VuZS5wb2ludGVyWCwgdGhpcy5zY2VuZS5wb2ludGVyWSk7XG4gIFx0IFx0ICAgICAvL2NvbnNvbGUubG9nKHRoaXMucGlja1Jlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRDYW52YXNUb3VjaCgpe1xuICAgICAgICAgZm9yKGxldCBpPTA7IGkgPCB0aGlzLmNhbnZhc0xpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICAgIHRoaXMuY2FudmFzTGlzdFtpXS5zZXRBdHRyaWJ1dGUoXCJ0b3VjaC1hY3Rpb25cIiwgJ25vbmUnKTtcbiAgICAgICAgICB0aGlzLmNhbnZhc0xpc3RbaV0uc3R5bGUud2lkdGggPSAnJztcbiAgICAgICAgICB0aGlzLmNhbnZhc0xpc3RbaV0uc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgICAgICAgdGhpcy5jYW52YXNMaXN0W2ldLmhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgICAgdGhpcy5jYW52YXNMaXN0W2ldLndpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNldExpc3RuZXJzKCl7XG4gICAgICAgdGhpcy5zZXRDYW52YXNUb3VjaCgpO1xuICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52ci1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlLmJpbmQodGhpcykpO1xuICAgIFx0Ly93aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJheVBpY2suYmluZCh0aGlzKSk7XG4gICAgXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCB0aGlzLnJlYWREZXZpY2VPcmllbnRhdGlvbi5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgdGhpcy5zZXRDYW52YXNUb3VjaCgpO1xuICAgICAgIHRoaXMuc2NlbmUuZ2V0RW5naW5lKCkucmVzaXplKCk7XG4gICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICB9XG4gICAgXG5cbiAgfVxuICBtb2R1bGUuZXhwb3J0cyA9IGNfY2FtZXJhdnI7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9