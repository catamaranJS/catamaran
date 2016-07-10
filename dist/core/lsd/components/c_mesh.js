"use strict";function _classCallCheck(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}var CES=require("ces"),BABYLON=require("../lib/babylon"),utils=require("../utils/utils"),defaults=utils.defaultArgs();defaults._name="mesh";var c_mesh=function e(){var s=arguments.length<=0||void 0===arguments[0]?defaults:arguments[0];switch(_classCallCheck(this,e),this.name=s._name+utils.guid(),this.obj=null,s._type){case"Box":this.obj=BABYLON.Mesh.CreateBox(this.name,s._size,s._scene);break;case"Sphere":this.obj=BABYLON.Mesh.CreateSphere(this.name,s._segments,s._diameter,s._scene);break;case"Plane":this.obj=BABYLON.Mesh.CreatePlane(this.name,s._size,s._scene);break;case"Cylinder":this.obj=BABYLON.Mesh.CreateCylinder(this.name,s._height,s._diameterTop,s._diameterBottom,s._tesselation,s._subdivisions,s._scene,!1);break;case"Torus":this.obj=BABYLON.Mesh.CreateTorus(this.name,s._diameter,s._thickness,s._tesselation,s._scene,!1);break;default:this.obj=BABYLON.Mesh.CreateBox(this.name,s._size,s._scene)}window.testMesh=this.obj,this.obj.layerMask=s._layerMask,this.options={name:this.name,init:this.constructor,obj:this.obj},CES.Component.extend(this.options)};module.exports=c_mesh;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvbHNkL2NvbXBvbmVudHMvY19tZXNoLmpzIl0sIm5hbWVzIjpbIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJDRVMiLCJyZXF1aXJlIiwiQkFCWUxPTiIsInV0aWxzIiwiZGVmYXVsdHMiLCJkZWZhdWx0QXJncyIsIl9uYW1lIiwiY19tZXNoIiwiX29wdHMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJ0aGlzIiwibmFtZSIsImd1aWQiLCJvYmoiLCJfdHlwZSIsIk1lc2giLCJDcmVhdGVCb3giLCJfc2l6ZSIsIl9zY2VuZSIsIkNyZWF0ZVNwaGVyZSIsIl9zZWdtZW50cyIsIl9kaWFtZXRlciIsIkNyZWF0ZVBsYW5lIiwiQ3JlYXRlQ3lsaW5kZXIiLCJfaGVpZ2h0IiwiX2RpYW1ldGVyVG9wIiwiX2RpYW1ldGVyQm90dG9tIiwiX3Rlc3NlbGF0aW9uIiwiX3N1YmRpdmlzaW9ucyIsIkNyZWF0ZVRvcnVzIiwiX3RoaWNrbmVzcyIsIndpbmRvdyIsInRlc3RNZXNoIiwibGF5ZXJNYXNrIiwiX2xheWVyTWFzayIsIm9wdGlvbnMiLCJpbml0IiwiY29uc3RydWN0b3IiLCJDb21wb25lbnQiLCJleHRlbmQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUVBLFNBQVNBLGlCQUFnQkMsRUFBVUMsR0FBZSxLQUFNRCxZQUFvQkMsSUFBZ0IsS0FBTSxJQUFJQyxXQUFVLHFDQUZoSCxHQUFJQyxLQUFNQyxRQUFRLE9BQ2RDLFFBQVVELFFBQVEsa0JBQ2xCRSxNQUFRRixRQUFRLGtCQUNoQkcsU0FBV0QsTUFBTUUsYUFDckJELFVBQVNFLE1BQVEsTUFZakIsSUFMTUMsUUFDTSxRQUROQSxLQU1MLEdBTFlDLEdBQUtDLFVBQUFDLFFBQUEsR0FBQUMsU0FBQUYsVUFBQSxHQUFHTCxTQUFRSyxVQUFBLEVBRzNCLFFBSURiLGdCQUFnQmdCLEtBUlhMLEdBRUpLLEtBQUtDLEtBQU9MLEVBQU1GLE1BQVFILE1BQU1XLE9BQ2hDRixLQUFLRyxJQUFNLEtBQ0pQLEVBQU1RLE9BQ1QsSUFBSyxNQUNESixLQUFLRyxJQUFLYixRQUFRZSxLQUFLQyxVQUFVTixLQUFLQyxLQUFPTCxFQUFNVyxNQUFPWCxFQUFNWSxPQUNoRSxNQUNKLEtBQUssU0FFUFIsS0FBS0csSUFBTWIsUUFBUWUsS0FBS0ksYUFBYVQsS0FBS0MsS0FBT0wsRUFBTWMsVUFBV2QsRUFBTWUsVUFBV2YsRUFBTVksT0FDbkYsTUFDSixLQUFLLFFBQ0FSLEtBQUtHLElBQU1iLFFBQVFlLEtBQUtPLFlBQVlaLEtBQUtDLEtBQU9MLEVBQU1XLE1BQU9YLEVBQU1ZLE9BQ3BFLE1BQ0osS0FBSyxXQUVQUixLQUFLRyxJQUFNYixRQUFRZSxLQUFLUSxlQUFlYixLQUFLQyxLQUFPTCxFQUFNa0IsUUFBU2xCLEVBQU1tQixhQUFlbkIsRUFBTW9CLGdCQUFpQnBCLEVBQU1xQixhQUFjckIsRUFBTXNCLGNBQWV0QixFQUFNWSxRQUFRLEVBQy9KLE1BQ0osS0FBSyxRQUVQUixLQUFLRyxJQUFNYixRQUFRZSxLQUFLYyxZQUFZbkIsS0FBS0MsS0FBT0wsRUFBTWUsVUFBV2YsRUFBTXdCLFdBQVl4QixFQUFNcUIsYUFBY3JCLEVBQU1ZLFFBQVEsRUFDL0csTUFDSixTQUNJUixLQUFLRyxJQUFLYixRQUFRZSxLQUFLQyxVQUFVTixLQUFLQyxLQUFNTCxFQUFNVyxNQUFPWCxFQUFNWSxRQUV2RWEsT0FBT0MsU0FBV3RCLEtBQUtHLElBQ3ZCSCxLQUFLRyxJQUFJb0IsVUFBWTNCLEVBQU00QixXQUMzQnhCLEtBQUt5QixTQUNKeEIsS0FBS0QsS0FBS0MsS0FDVnlCLEtBQU0xQixLQUFLMkIsWUFDWHhCLElBQUlILEtBQUtHLEtBRVZmLElBQUl3QyxVQUFVQyxPQUFPN0IsS0FBS3lCLFNBSTVCSyxRQUFPQyxRQUFVcEMiLCJmaWxlIjoiY29yZS9sc2QvY29tcG9uZW50cy9jX21lc2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQ0VTID0gcmVxdWlyZSgnY2VzJyk7XG52YXIgQkFCWUxPTiA9IHJlcXVpcmUoJy4uL2xpYi9iYWJ5bG9uJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscy91dGlscycpO1xudmFyIGRlZmF1bHRzID0gdXRpbHMuZGVmYXVsdEFyZ3MoKTtcbmRlZmF1bHRzLl9uYW1lID0gJ21lc2gnO1xuLyoqXG4gKiAuLi5cbiAqIEBhdXRob3IgQnJlbmRvbiBTbWl0aFxuICogaHR0cDovL3NlYWNsb3VkOS5vcmdcbiAqIExpZ2h0V2VpZ2h0IDNEIFN5c3RlbSBEZXNpZ24gZW5naW5lXG4gKi9cbmNsYXNzIGNfbWVzaCB7XG5cdGNvbnN0cnVjdG9yKF9vcHRzID0gZGVmYXVsdHMpe1xuXHRcdHRoaXMubmFtZSA9IF9vcHRzLl9uYW1lICsgdXRpbHMuZ3VpZCgpO1xuXHRcdHRoaXMub2JqID0gbnVsbDtcblx0XHRzd2l0Y2goX29wdHMuX3R5cGUpIHtcblx0XHQgICAgY2FzZSAnQm94Jzpcblx0XHQgICAgICAgIHRoaXMub2JqPSBCQUJZTE9OLk1lc2guQ3JlYXRlQm94KHRoaXMubmFtZSAsIF9vcHRzLl9zaXplLCBfb3B0cy5fc2NlbmUpO1xuXHRcdCAgICAgICAgYnJlYWs7XG5cdFx0ICAgIGNhc2UgJ1NwaGVyZSc6XG5cdFx0ICAgICAgICAvLyhuYW1lIG9mIHRoZSBzcGhlcmUsIHNlZ21lbnRzLCBkaWFtZXRlciwgc2NlbmUpIFxuXHRcdFx0XHR0aGlzLm9iaiA9IEJBQllMT04uTWVzaC5DcmVhdGVTcGhlcmUodGhpcy5uYW1lICwgX29wdHMuX3NlZ21lbnRzLCBfb3B0cy5fZGlhbWV0ZXIsIF9vcHRzLl9zY2VuZSk7XG5cdFx0ICAgICAgICBicmVhaztcblx0XHQgICAgY2FzZSAnUGxhbmUnOlxuXHRcdCAgICAgICAgIHRoaXMub2JqID0gQkFCWUxPTi5NZXNoLkNyZWF0ZVBsYW5lKHRoaXMubmFtZSAsIF9vcHRzLl9zaXplLCBfb3B0cy5fc2NlbmUpO1xuXHRcdCAgICAgICAgYnJlYWs7XHRcdCAgICAgICAgXG5cdFx0ICAgIGNhc2UgJ0N5bGluZGVyJzpcblx0XHQgICAgICAgXHQvLyhuYW1lLCBoZWlnaHQsIGRpYW1ldGVyLCB0ZXNzZWxsYXRpb24sIHNjZW5lLCB1cGRhdGFibGUpXG5cdFx0XHRcdHRoaXMub2JqID0gQkFCWUxPTi5NZXNoLkNyZWF0ZUN5bGluZGVyKHRoaXMubmFtZSAsIF9vcHRzLl9oZWlnaHQsIF9vcHRzLl9kaWFtZXRlclRvcCwgIF9vcHRzLl9kaWFtZXRlckJvdHRvbSwgX29wdHMuX3Rlc3NlbGF0aW9uLCBfb3B0cy5fc3ViZGl2aXNpb25zLCBfb3B0cy5fc2NlbmUsIGZhbHNlKTtcblx0XHQgICAgICAgIGJyZWFrO1xuXHRcdCAgICBjYXNlICdUb3J1cyc6XG5cdFx0ICAgICAgICAvLyAobmFtZSwgZGlhbWV0ZXIsIHRoaWNrbmVzcywgdGVzc2VsbGF0aW9uLCBzY2VuZSwgdXBkYXRhYmxlKVxuXHRcdFx0XHR0aGlzLm9iaiA9IEJBQllMT04uTWVzaC5DcmVhdGVUb3J1cyh0aGlzLm5hbWUgLCBfb3B0cy5fZGlhbWV0ZXIsIF9vcHRzLl90aGlja25lc3MsIF9vcHRzLl90ZXNzZWxhdGlvbiwgX29wdHMuX3NjZW5lLCBmYWxzZSk7XG5cdFx0ICAgICAgICBicmVhaztcdCAgICAgICAgXHRcdCAgICAgICAgXG5cdFx0ICAgIGRlZmF1bHQ6XG5cdFx0ICAgICAgICB0aGlzLm9iaj0gQkFCWUxPTi5NZXNoLkNyZWF0ZUJveCh0aGlzLm5hbWUsIF9vcHRzLl9zaXplLCBfb3B0cy5fc2NlbmUpO1xuXHRcdCB9XG5cdFx0d2luZG93LnRlc3RNZXNoID0gdGhpcy5vYmo7XG5cdFx0dGhpcy5vYmoubGF5ZXJNYXNrID0gX29wdHMuX2xheWVyTWFzaztcblx0XHR0aGlzLm9wdGlvbnMgPSB7XG5cdFx0XHRuYW1lOnRoaXMubmFtZSAsXG5cdFx0XHRpbml0OiB0aGlzLmNvbnN0cnVjdG9yLFxuXHRcdFx0b2JqOnRoaXMub2JqXG5cdFx0fVxuXHRcdENFUy5Db21wb25lbnQuZXh0ZW5kKHRoaXMub3B0aW9ucyk7XG5cdH1cblxufVxubW9kdWxlLmV4cG9ydHMgPSBjX21lc2g7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9