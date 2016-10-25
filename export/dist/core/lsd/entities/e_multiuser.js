"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),CES=require("ces"),BABYLON=require("../lib/babylon"),c_multiuser=require("../components/c_multiuser"),c_material=require("../components/c_material"),utils=require("../utils/utils"),e_multiuser=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];_classCallCheck(this,e),this.entity=new CES.Entity,this.mesh,this._defaults=null==t?this.defaults():t,this.init()}return _createClass(e,[{key:"init",value:function(){this.multiuser=new c_multiuser(this._defaults),this.entity.addComponent(this.multiuser)}}],[{key:"defaults",value:function(){return{e_type:"e_multiuser",_name:"multiuser",_layerMask:"0x0FFFFFFF",_isPickable:!0,_fbURL:"https://fascination.firebaseio.com/",_scaling:1,_position:"0,0,0",_rotation:"0,0,0",_material:"default",_scene:{}}}}]),e}();exports.e_multiuser=e_multiuser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvbHNkL2VudGl0aWVzL2VfbXVsdGl1c2VyLmpzIl0sIm5hbWVzIjpbIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9jcmVhdGVDbGFzcyIsImRlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwia2V5IiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiQ0VTIiwicmVxdWlyZSIsIkJBQllMT04iLCJjX211bHRpdXNlciIsImNfbWF0ZXJpYWwiLCJ1dGlscyIsImVfbXVsdGl1c2VyIiwiX2RlZmF1bHRzIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwidGhpcyIsImVudGl0eSIsIkVudGl0eSIsIm1lc2giLCJkZWZhdWx0cyIsImluaXQiLCJtdWx0aXVzZXIiLCJhZGRDb21wb25lbnQiLCJlX3R5cGUiLCJfbmFtZSIsIl9sYXllck1hc2siLCJfaXNQaWNrYWJsZSIsIl9mYlVSTCIsIl9zY2FsaW5nIiwiX3Bvc2l0aW9uIiwiX3JvdGF0aW9uIiwiX21hdGVyaWFsIiwiX3NjZW5lIl0sIm1hcHBpbmdzIjoiQUFBQSxZQVFBLFNBQVNBLGlCQUFnQkMsRUFBVUMsR0FBZSxLQUFNRCxZQUFvQkMsSUFBZ0IsS0FBTSxJQUFJQyxXQUFVLHFDQU5oSEMsT0FBT0MsZUFBZUMsUUFBUyxjQUM5QkMsT0FBTyxHQUdSLElBQUlDLGNBQWUsV0FBZSxRQUFTQyxHQUFpQkMsRUFBUUMsR0FBUyxJQUFLLEdBQUlDLEdBQUksRUFBR0EsRUFBSUQsRUFBTUUsT0FBUUQsSUFBSyxDQUFFLEdBQUlFLEdBQWFILEVBQU1DLEVBQUlFLEdBQVdDLFdBQWFELEVBQVdDLGFBQWMsRUFBT0QsRUFBV0UsY0FBZSxFQUFVLFNBQVdGLEtBQVlBLEVBQVdHLFVBQVcsR0FBTWIsT0FBT0MsZUFBZUssRUFBUUksRUFBV0ksSUFBS0osSUFBaUIsTUFBTyxVQUFVWixFQUFhaUIsRUFBWUMsR0FBaUosTUFBOUhELElBQVlWLEVBQWlCUCxFQUFZbUIsVUFBV0YsR0FBaUJDLEdBQWFYLEVBQWlCUCxFQUFha0IsR0FBcUJsQixNQU43aEJvQixJQUFNQyxRQUFRLE9BQ2RDLFFBQVVELFFBQVEsa0JBQ2xCRSxZQUFjRixRQUFRLDZCQUN0QkcsV0FBYUgsUUFBUSw0QkFDckJJLE1BQVFKLFFBQVEsa0JBT1BLLFlBQVcsV0FDWixRQURDQSxLQWFYLEdBWldDLEdBQVNDLFVBQUFqQixRQUFBLEdBQUFrQixTQUFBRCxVQUFBLEdBQUcsS0FBSUEsVUFBQSxFQWMzQjlCLGlCQUFnQmdDLEtBZkxKLEdBRVhJLEtBQUtDLE9BQVMsR0FBSVgsS0FBSVksT0FDdEJGLEtBQUtHLEtBRUxILEtBQUtILFVBQXlCLE1BQWJBLEVBQW9CRyxLQUFLSSxXQUFZUCxFQUN0REcsS0FBS0ssT0E2Q04sTUEzQkE3QixjQXhCWW9CLElBeUJYVixJQUFLLE9BQ0xYLE1BRkcsV0FDSHlCLEtBQUtNLFVBQVksR0FBSWIsYUFBWU8sS0FBS0gsV0FDdENHLEtBQUtDLE9BQU9NLGFBQWFQLEtBQUtNLGdCQVE5QnBCLElBQUssV0FDTFgsTUExQmMsV0FDZCxPQUNDaUMsT0FBTyxjQUNQQyxNQUFNLFlBQ05DLFdBQVksYUFDWkMsYUFBYSxFQUNiQyxPQUFRLHNDQUNSQyxTQUFTLEVBQ1RDLFVBQVUsUUFDVkMsVUFBVSxRQUNWQyxVQUFVLFVBQ1ZDLGVBcEJVckIsSUFzRGJ0QixTQUFRc0IsWUFBY0EiLCJmaWxlIjoiY29yZS9sc2QvZW50aXRpZXMvZV9tdWx0aXVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQ0VTID0gcmVxdWlyZSgnY2VzJyk7XG52YXIgQkFCWUxPTiA9IHJlcXVpcmUoJy4uL2xpYi9iYWJ5bG9uJyk7XG52YXIgY19tdWx0aXVzZXIgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL2NfbXVsdGl1c2VyJyk7XG52YXIgY19tYXRlcmlhbCA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvY19tYXRlcmlhbCcpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMvdXRpbHMnKTtcbi8qKlxuICogLi4uXG4gKiBAYXV0aG9yIEJyZW5kb24gU21pdGhcbiAqIGh0dHA6Ly9zZWFjbG91ZDkub3JnXG4gKiBMaWdodFdlaWdodCAzRCBTeXN0ZW0gRGVzaWduIGVuZ2luZVxuICovXG5leHBvcnQgY2xhc3MgZV9tdWx0aXVzZXJ7XG5cdGNvbnN0cnVjdG9yKF9kZWZhdWx0cyA9IG51bGwpe1xuXHRcdHRoaXMuZW50aXR5ID0gbmV3IENFUy5FbnRpdHkoKTtcblx0XHR0aGlzLm1lc2g7XG5cdFx0Ly90aGlzLm1hdGVyaWFsO1xuXHRcdHRoaXMuX2RlZmF1bHRzID0gX2RlZmF1bHRzID09IG51bGwgPyB0aGlzLmRlZmF1bHRzKCk6IF9kZWZhdWx0cztcblx0XHR0aGlzLmluaXQoKTtcblx0fVxuXG5cdHN0YXRpYyBkZWZhdWx0cygpe1xuXHRcdHJldHVybntcblx0XHRcdGVfdHlwZTonZV9tdWx0aXVzZXInLFxuXHRcdFx0X25hbWU6J211bHRpdXNlcicsXG5cdFx0XHRfbGF5ZXJNYXNrOiBcIjB4MEZGRkZGRkZcIixcblx0XHRcdF9pc1BpY2thYmxlOiB0cnVlLFxuXHRcdFx0X2ZiVVJMOiAnaHR0cHM6Ly9mYXNjaW5hdGlvbi5maXJlYmFzZWlvLmNvbS8nLFxuXHRcdFx0X3NjYWxpbmc6MSxcblx0XHRcdF9wb3NpdGlvbjonMCwwLDAnLFxuXHRcdFx0X3JvdGF0aW9uOicwLDAsMCcsXG5cdFx0XHRfbWF0ZXJpYWw6J2RlZmF1bHQnLFxuXHRcdFx0X3NjZW5lOnt9XG5cdFx0fVxuXHR9XG5cblx0aW5pdCgpe1x0XHRcblx0XHR0aGlzLm11bHRpdXNlciA9IG5ldyBjX211bHRpdXNlcih0aGlzLl9kZWZhdWx0cyk7XG5cdFx0dGhpcy5lbnRpdHkuYWRkQ29tcG9uZW50KHRoaXMubXVsdGl1c2VyKTtcblx0XHQvL3RoaXMubWF0ZXJpYWwgPSBuZXcgY19tYXRlcmlhbCh0aGlzLl9kZWZhdWx0cyk7XG5cdFx0Ly90aGlzLmVudGl0eS5hZGRDb21wb25lbnQodGhpcy5tYXRlcmlhbCk7XG5cdFx0Ly90aGlzLm1lc2gub2JqLm1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbC5vYmo7XG5cdH1cbn1cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=