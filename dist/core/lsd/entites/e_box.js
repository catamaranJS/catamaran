"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),CES=require("ces"),BABYLON=require("../lib/babylon"),c_mesh=require("../components/c_mesh"),c_material=require("../components/c_material"),utils=require("./utils/utils"),e_box=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];_classCallCheck(this,e),this.entity=new CES.Entity,this._defaults,this.mesh,this.material,null==t&&(this._defaults=this.defaults()),this.init()}return _createClass(e,[{key:"defaults",value:function(){return{_size:10,name:"box",_position:new BABYLON.Vector3(0,0,0),_rotation:new BABYLON.Vector3(0,0,0),_texture:null,_uScale:1,_vScale:1,_backFaceCulling:!0,_vOffset:0,_uOffset:0,_hasAlpha:!1,_diffuseColor:utils.color(),_hasSystem:!1}}},{key:"init",value:function(){this.mesh=new c_mesh(this._defaults),this.entity.addComponent(this.mesh),this.material=new c_material(this._defaults),this.entity.addComponent(this.material),this.mesh.obj.material=this.material.obj}}]),e}();module.exports=e_box;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvbHNkL2VudGl0ZXMvZV9ib3guanMiXSwibmFtZXMiOlsiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9jcmVhdGVDbGFzcyIsImRlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJDRVMiLCJyZXF1aXJlIiwiQkFCWUxPTiIsImNfbWVzaCIsImNfbWF0ZXJpYWwiLCJ1dGlscyIsImVfYm94IiwiX2RlZmF1bHRzIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwidGhpcyIsImVudGl0eSIsIkVudGl0eSIsIm1lc2giLCJtYXRlcmlhbCIsImRlZmF1bHRzIiwiaW5pdCIsInZhbHVlIiwiX3NpemUiLCJuYW1lIiwiX3Bvc2l0aW9uIiwiVmVjdG9yMyIsIl9yb3RhdGlvbiIsIl90ZXh0dXJlIiwiX3VTY2FsZSIsIl92U2NhbGUiLCJfYmFja0ZhY2VDdWxsaW5nIiwiX3ZPZmZzZXQiLCJfdU9mZnNldCIsIl9oYXNBbHBoYSIsIl9kaWZmdXNlQ29sb3IiLCJjb2xvciIsIl9oYXNTeXN0ZW0iLCJhZGRDb21wb25lbnQiLCJvYmoiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUlBLFNBQVNBLGlCQUFnQkMsRUFBVUMsR0FBZSxLQUFNRCxZQUFvQkMsSUFBZ0IsS0FBTSxJQUFJQyxXQUFVLHFDQUZoSCxHQUFJQyxjQUFlLFdBQWUsUUFBU0MsR0FBaUJDLEVBQVFDLEdBQVMsSUFBSyxHQUFJQyxHQUFJLEVBQUdBLEVBQUlELEVBQU1FLE9BQVFELElBQUssQ0FBRSxHQUFJRSxHQUFhSCxFQUFNQyxFQUFJRSxHQUFXQyxXQUFhRCxFQUFXQyxhQUFjLEVBQU9ELEVBQVdFLGNBQWUsRUFBVSxTQUFXRixLQUFZQSxFQUFXRyxVQUFXLEdBQU1DLE9BQU9DLGVBQWVULEVBQVFJLEVBQVdNLElBQUtOLElBQWlCLE1BQU8sVUFBVVIsRUFBYWUsRUFBWUMsR0FBaUosTUFBOUhELElBQVlaLEVBQWlCSCxFQUFZaUIsVUFBV0YsR0FBaUJDLEdBQWFiLEVBQWlCSCxFQUFhZ0IsR0FBcUJoQixNQUY3aEJrQixJQUFNQyxRQUFRLE9BQ2RDLFFBQVVELFFBQVEsa0JBQ2xCRSxPQUFTRixRQUFRLHdCQUNqQkcsV0FBYUgsUUFBUSw0QkFDckJJLE1BQVFKLFFBQVEsaUJBT2RLLE1BQUssV0FDQyxRQUROQSxLQVNKLEdBUldDLEdBQVNDLFVBQUFuQixRQUFBLEdBQUFvQixTQUFBRCxVQUFBLEdBQUcsS0FBSUEsVUFBQSxFQVUzQjVCLGlCQUFnQjhCLEtBWFpKLEdBRUpJLEtBQUtDLE9BQVMsR0FBSVgsS0FBSVksT0FDdEJGLEtBQUtILFVBQ0xHLEtBQUtHLEtBQ0xILEtBQUtJLFNBQ1csTUFBYlAsSUFDRkcsS0FBS0gsVUFBWUcsS0FBS0ssWUFFdkJMLEtBQUtNLE9BNENOLE1BOUJBaEMsY0F2QktzQixJQXdCSlYsSUFBSyxXQUNMcUIsTUFiTyxXQUNQLE9BQ0NDLE1BQU0sR0FDTkMsS0FBSyxNQUNMQyxVQUFVLEdBQUlsQixTQUFRbUIsUUFBUSxFQUFHLEVBQUcsR0FDcENDLFVBQVUsR0FBSXBCLFNBQVFtQixRQUFRLEVBQUcsRUFBRyxHQUNwQ0UsU0FBUyxLQUNUQyxRQUFTLEVBQ1RDLFFBQVMsRUFDVEMsa0JBQWlCLEVBQ2pCQyxTQUFVLEVBQ1ZDLFNBQVUsRUFDVkMsV0FBVyxFQUNYQyxjQUFlekIsTUFBTTBCLFFBQ3JCQyxZQUFXLE1BaUJacEMsSUFBSyxPQUNMcUIsTUFkRyxXQUNIUCxLQUFLRyxLQUFPLEdBQUlWLFFBQU9PLEtBQUtILFdBQzVCRyxLQUFLQyxPQUFPc0IsYUFBYXZCLEtBQUtHLE1BQzlCSCxLQUFLSSxTQUFXLEdBQUlWLFlBQVdNLEtBQUtILFdBQ3BDRyxLQUFLQyxPQUFPc0IsYUFBYXZCLEtBQUtJLFVBQzlCSixLQUFLRyxLQUFLcUIsSUFBSXBCLFNBQVdKLEtBQUtJLFNBQVNvQixRQW5DbkM1QixJQXNDTjZCLFFBQU9DLFFBQVU5QiIsImZpbGUiOiJjb3JlL2xzZC9lbnRpdGVzL2VfYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIENFUyA9IHJlcXVpcmUoJ2NlcycpO1xudmFyIEJBQllMT04gPSByZXF1aXJlKCcuLi9saWIvYmFieWxvbicpO1xudmFyIGNfbWVzaCA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvY19tZXNoJyk7XG52YXIgY19tYXRlcmlhbCA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvY19tYXRlcmlhbCcpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscy91dGlscycpO1xuLyoqXG4gKiAuLi5cbiAqIEBhdXRob3IgQnJlbmRvbiBTbWl0aFxuICogaHR0cDovL3NlYWNsb3VkOS5vcmdcbiAqIExpZ2h0V2VpZ2h0IDNEIFN5c3RlbSBEZXNpZ24gZW5naW5lXG4gKi9cbmNsYXNzIGVfYm94e1xuXHRjb25zdHJ1Y3RvcihfZGVmYXVsdHMgPSBudWxsKXtcblx0XHR0aGlzLmVudGl0eSA9IG5ldyBDRVMuRW50aXR5KCk7XG5cdFx0dGhpcy5fZGVmYXVsdHM7XG5cdFx0dGhpcy5tZXNoO1xuXHRcdHRoaXMubWF0ZXJpYWw7XG5cdFx0aWYoX2RlZmF1bHRzID09IG51bGwpe1xuXHRcdFx0dGhpcy5fZGVmYXVsdHMgPSB0aGlzLmRlZmF1bHRzKCk7XG5cdFx0fVxuXHRcdHRoaXMuaW5pdCgpO1xuXHR9XG5cblx0ZGVmYXVsdHMoKXtcblx0XHRyZXR1cm57XG5cdFx0XHRfc2l6ZToxMCxcblx0XHRcdG5hbWU6J2JveCcsXG5cdFx0XHRfcG9zaXRpb246bmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAwKSxcblx0XHRcdF9yb3RhdGlvbjpuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAsIDApLFxuXHRcdFx0X3RleHR1cmU6bnVsbCxcblx0XHRcdF91U2NhbGU6IDEuMCxcblx0XHRcdF92U2NhbGU6IDEuMCxcblx0XHRcdF9iYWNrRmFjZUN1bGxpbmc6dHJ1ZSxcblx0XHRcdF92T2Zmc2V0OiAwLjAsXG5cdFx0XHRfdU9mZnNldDogMC4wLFxuXHRcdFx0X2hhc0FscGhhOiBmYWxzZSxcblx0XHRcdF9kaWZmdXNlQ29sb3I6IHV0aWxzLmNvbG9yKCksXG5cdFx0XHRfaGFzU3lzdGVtOmZhbHNlXG5cdFx0fVxuXHR9XG5cblx0aW5pdCgpe1xuXHRcdHRoaXMubWVzaCA9IG5ldyBjX21lc2godGhpcy5fZGVmYXVsdHMpO1xuXHRcdHRoaXMuZW50aXR5LmFkZENvbXBvbmVudCh0aGlzLm1lc2gpO1xuXHRcdHRoaXMubWF0ZXJpYWwgPSBuZXcgY19tYXRlcmlhbCh0aGlzLl9kZWZhdWx0cyk7XG5cdFx0dGhpcy5lbnRpdHkuYWRkQ29tcG9uZW50KHRoaXMubWF0ZXJpYWwpO1xuXHRcdHRoaXMubWVzaC5vYmoubWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFsLm9iajtcblx0fVxufVxubW9kdWxlLmV4cG9ydHMgPSBlX2JveDsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=