"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),CES=require("ces"),BABYLON=require("../lib/babylon"),c_multiuser=require("../components/c_multiuser"),c_material=require("../components/c_material"),utils=require("../utils/utils"),e_multiuser=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];_classCallCheck(this,e),this.entity=new CES.Entity,this.mesh,this._defaults=null==t?this.defaults():t,this.init()}return _createClass(e,[{key:"init",value:function(){this.multiuser=new c_multiuser(this._defaults),this.entity.addComponent(this.multiuser)}}],[{key:"defaults",value:function(){return{e_type:"e_multiuser",_name:"multiuser",_layerMask:"0x0FFFFFFF",_isPickable:!0,_fbURL:"https://fascination.firebaseio.com/",_scaling:1,_position:"0,0,0",_rotation:"0,0,0",_material:"default",_scene:{}}}}]),e}();module.exports=e_multiuser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvbHNkL2VudGl0aWVzL2VfbXVsdGl1c2VyLmpzIl0sIm5hbWVzIjpbIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiQ0VTIiwicmVxdWlyZSIsIkJBQllMT04iLCJjX211bHRpdXNlciIsImNfbWF0ZXJpYWwiLCJ1dGlscyIsImVfbXVsdGl1c2VyIiwiX2RlZmF1bHRzIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwidGhpcyIsImVudGl0eSIsIkVudGl0eSIsIm1lc2giLCJkZWZhdWx0cyIsImluaXQiLCJ2YWx1ZSIsIm11bHRpdXNlciIsImFkZENvbXBvbmVudCIsImVfdHlwZSIsIl9uYW1lIiwiX2xheWVyTWFzayIsIl9pc1BpY2thYmxlIiwiX2ZiVVJMIiwiX3NjYWxpbmciLCJfcG9zaXRpb24iLCJfcm90YXRpb24iLCJfbWF0ZXJpYWwiLCJfc2NlbmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUlBLFNBQVNBLGlCQUFnQkMsRUFBVUMsR0FBZSxLQUFNRCxZQUFvQkMsSUFBZ0IsS0FBTSxJQUFJQyxXQUFVLHFDQUZoSCxHQUFJQyxjQUFlLFdBQWUsUUFBU0MsR0FBaUJDLEVBQVFDLEdBQVMsSUFBSyxHQUFJQyxHQUFJLEVBQUdBLEVBQUlELEVBQU1FLE9BQVFELElBQUssQ0FBRSxHQUFJRSxHQUFhSCxFQUFNQyxFQUFJRSxHQUFXQyxXQUFhRCxFQUFXQyxhQUFjLEVBQU9ELEVBQVdFLGNBQWUsRUFBVSxTQUFXRixLQUFZQSxFQUFXRyxVQUFXLEdBQU1DLE9BQU9DLGVBQWVULEVBQVFJLEVBQVdNLElBQUtOLElBQWlCLE1BQU8sVUFBVVIsRUFBYWUsRUFBWUMsR0FBaUosTUFBOUhELElBQVlaLEVBQWlCSCxFQUFZaUIsVUFBV0YsR0FBaUJDLEdBQWFiLEVBQWlCSCxFQUFhZ0IsR0FBcUJoQixNQUY3aEJrQixJQUFNQyxRQUFRLE9BQ2RDLFFBQVVELFFBQVEsa0JBQ2xCRSxZQUFjRixRQUFRLDZCQUN0QkcsV0FBYUgsUUFBUSw0QkFDckJJLE1BQVFKLFFBQVEsa0JBT2RLLFlBQVcsV0FDTCxRQUROQSxLQVNKLEdBUldDLEdBQVNDLFVBQUFuQixRQUFBLEdBQUFvQixTQUFBRCxVQUFBLEdBQUcsS0FBSUEsVUFBQSxFQVUzQjVCLGlCQUFnQjhCLEtBWFpKLEdBRUpJLEtBQUtDLE9BQVMsR0FBSVgsS0FBSVksT0FDdEJGLEtBQUtHLEtBRUxILEtBQUtILFVBQXlCLE1BQWJBLEVBQW9CRyxLQUFLSSxXQUFZUCxFQUN0REcsS0FBS0ssT0F5Q04sTUEzQkEvQixjQXBCS3NCLElBcUJKVixJQUFLLE9BQ0xvQixNQUVHLFdBQ0hOLEtBQUtPLFVBQVksR0FBSWQsYUFBWU8sS0FBS0gsV0FDdENHLEtBQUtDLE9BQU9PLGFBQWFSLEtBQUtPLGdCQUk5QnJCLElBQUssV0FDTG9CLE1BdEJjLFdBQ2QsT0FDQ0csT0FBTyxjQUNQQyxNQUFNLFlBQ05DLFdBQVksYUFDWkMsYUFBYSxFQUNiQyxPQUFRLHNDQUNSQyxTQUFTLEVBQ1RDLFVBQVUsUUFDVkMsVUFBVSxRQUNWQyxVQUFVLFVBQ1ZDLGVBcEJHdEIsSUFnQ051QixRQUFPQyxRQUFVeEIiLCJmaWxlIjoiY29yZS9sc2QvZW50aXRpZXMvZV9tdWx0aXVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQ0VTID0gcmVxdWlyZSgnY2VzJyk7XG52YXIgQkFCWUxPTiA9IHJlcXVpcmUoJy4uL2xpYi9iYWJ5bG9uJyk7XG52YXIgY19tdWx0aXVzZXIgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL2NfbXVsdGl1c2VyJyk7XG52YXIgY19tYXRlcmlhbCA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvY19tYXRlcmlhbCcpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMvdXRpbHMnKTtcbi8qKlxuICogLi4uXG4gKiBAYXV0aG9yIEJyZW5kb24gU21pdGhcbiAqIGh0dHA6Ly9zZWFjbG91ZDkub3JnXG4gKiBMaWdodFdlaWdodCAzRCBTeXN0ZW0gRGVzaWduIGVuZ2luZVxuICovXG5jbGFzcyBlX211bHRpdXNlcntcblx0Y29uc3RydWN0b3IoX2RlZmF1bHRzID0gbnVsbCl7XG5cdFx0dGhpcy5lbnRpdHkgPSBuZXcgQ0VTLkVudGl0eSgpO1xuXHRcdHRoaXMubWVzaDtcblx0XHQvL3RoaXMubWF0ZXJpYWw7XG5cdFx0dGhpcy5fZGVmYXVsdHMgPSBfZGVmYXVsdHMgPT0gbnVsbCA/IHRoaXMuZGVmYXVsdHMoKTogX2RlZmF1bHRzO1xuXHRcdHRoaXMuaW5pdCgpO1xuXHR9XG5cblx0c3RhdGljIGRlZmF1bHRzKCl7XG5cdFx0cmV0dXJue1xuXHRcdFx0ZV90eXBlOidlX211bHRpdXNlcicsXG5cdFx0XHRfbmFtZTonbXVsdGl1c2VyJyxcblx0XHRcdF9sYXllck1hc2s6IFwiMHgwRkZGRkZGRlwiLFxuXHRcdFx0X2lzUGlja2FibGU6IHRydWUsXG5cdFx0XHRfZmJVUkw6ICdodHRwczovL2Zhc2NpbmF0aW9uLmZpcmViYXNlaW8uY29tLycsXG5cdFx0XHRfc2NhbGluZzoxLFxuXHRcdFx0X3Bvc2l0aW9uOicwLDAsMCcsXG5cdFx0XHRfcm90YXRpb246JzAsMCwwJyxcblx0XHRcdF9tYXRlcmlhbDonZGVmYXVsdCcsXG5cdFx0XHRfc2NlbmU6e31cblx0XHR9XG5cdH1cblxuXHRpbml0KCl7XHRcdFxuXHRcdHRoaXMubXVsdGl1c2VyID0gbmV3IGNfbXVsdGl1c2VyKHRoaXMuX2RlZmF1bHRzKTtcblx0XHR0aGlzLmVudGl0eS5hZGRDb21wb25lbnQodGhpcy5tdWx0aXVzZXIpO1xuXHRcdC8vdGhpcy5tYXRlcmlhbCA9IG5ldyBjX21hdGVyaWFsKHRoaXMuX2RlZmF1bHRzKTtcblx0XHQvL3RoaXMuZW50aXR5LmFkZENvbXBvbmVudCh0aGlzLm1hdGVyaWFsKTtcblx0XHQvL3RoaXMubWVzaC5vYmoubWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFsLm9iajtcblx0fVxufVxubW9kdWxlLmV4cG9ydHMgPSBlX211bHRpdXNlcjtcblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=