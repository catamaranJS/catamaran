"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,a,s){return a&&e(t.prototype,a),s&&e(t,s),t}}(),CES=require("ces"),BABYLON=require("../lib/babylon"),utils=require("../utils/utils"),defaults=utils.defaultArgs();defaults._name="material";var c_material=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?defaults:arguments[0];switch(_classCallCheck(this,e),this.name=t._name+utils.guid(),this.obj=null,this._opts=t,t._type){case"Standard":this.StandardMaterial();break;case"Shader":break;case"Dynamic":break;case"Fresenel":break;case"PBR":break;default:this.StandardMaterial()}this.options={name:this.name,init:this.constructor,obj:this.obj},CES.Component.extend(this.options)}return _createClass(e,[{key:"StandardMaterial",value:function(){this.obj=new BABYLON.StandardMaterial("texturePlane",this._opts._scene),null!=this._opts._material._texture&&(this.obj.diffuseTexture=this._opts._material._texture,this.obj.diffuseTexture.uScale=this._opts._material._uScale,this.obj.diffuseTexture.vScale=this._opts._material._vScale,this.obj.backFaceCulling=this._opts._material._backFaceCulling,this.obj.diffuseTexture.vOffset=this._opts._material._vOffset,this.obj.diffuseTexture.uOffset=this._opts._material._uOffset,this.obj.diffuseTexture.hasAlpha=this._opts._material._hasAlpha),null!=this._opts._material._diffuseColor&&(console.log(this._opts._material._diffuseColor),this.obj.diffuseColor=this._opts._material._diffuseColor)}}]),e}();module.exports=c_material;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvbHNkL2NvbXBvbmVudHMvY19tYXRlcmlhbC5qcyJdLCJuYW1lcyI6WyJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsIkNFUyIsInJlcXVpcmUiLCJCQUJZTE9OIiwidXRpbHMiLCJkZWZhdWx0cyIsImRlZmF1bHRBcmdzIiwiX25hbWUiLCJjX21hdGVyaWFsIiwiX29wdHMiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJ0aGlzIiwibmFtZSIsImd1aWQiLCJvYmoiLCJfdHlwZSIsIlN0YW5kYXJkTWF0ZXJpYWwiLCJvcHRpb25zIiwiaW5pdCIsImNvbnN0cnVjdG9yIiwiQ29tcG9uZW50IiwiZXh0ZW5kIiwidmFsdWUiLCJfc2NlbmUiLCJfbWF0ZXJpYWwiLCJfdGV4dHVyZSIsImRpZmZ1c2VUZXh0dXJlIiwidVNjYWxlIiwiX3VTY2FsZSIsInZTY2FsZSIsIl92U2NhbGUiLCJiYWNrRmFjZUN1bGxpbmciLCJfYmFja0ZhY2VDdWxsaW5nIiwidk9mZnNldCIsIl92T2Zmc2V0IiwidU9mZnNldCIsIl91T2Zmc2V0IiwiaGFzQWxwaGEiLCJfaGFzQWxwaGEiLCJfZGlmZnVzZUNvbG9yIiwiY29uc29sZSIsImxvZyIsImRpZmZ1c2VDb2xvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLFlBSUEsU0FBU0EsaUJBQWdCQyxFQUFVQyxHQUFlLEtBQU1ELFlBQW9CQyxJQUFnQixLQUFNLElBQUlDLFdBQVUscUNBRmhILEdBQUlDLGNBQWUsV0FBZSxRQUFTQyxHQUFpQkMsRUFBUUMsR0FBUyxJQUFLLEdBQUlDLEdBQUksRUFBR0EsRUFBSUQsRUFBTUUsT0FBUUQsSUFBSyxDQUFFLEdBQUlFLEdBQWFILEVBQU1DLEVBQUlFLEdBQVdDLFdBQWFELEVBQVdDLGFBQWMsRUFBT0QsRUFBV0UsY0FBZSxFQUFVLFNBQVdGLEtBQVlBLEVBQVdHLFVBQVcsR0FBTUMsT0FBT0MsZUFBZVQsRUFBUUksRUFBV00sSUFBS04sSUFBaUIsTUFBTyxVQUFVUixFQUFhZSxFQUFZQyxHQUFpSixNQUE5SEQsSUFBWVosRUFBaUJILEVBQVlpQixVQUFXRixHQUFpQkMsR0FBYWIsRUFBaUJILEVBQWFnQixHQUFxQmhCLE1BRjdoQmtCLElBQU1DLFFBQVEsT0FDZEMsUUFBVUQsUUFBUSxrQkFDbEJFLE1BQVFGLFFBQVEsa0JBQ2hCRyxTQUFXRCxNQUFNRSxhQUNyQkQsVUFBU0UsTUFBUSxVQWNqQixJQVBNQyxZQUFVLFdBQ0osUUFETkEsS0FTSixHQVJXQyxHQUFLQyxVQUFBcEIsUUFBQSxHQUFBcUIsU0FBQUQsVUFBQSxHQUFHTCxTQUFRSyxVQUFBLEVBSTNCLFFBTUE3QixnQkFBZ0IrQixLQVhaSixHQUVKSSxLQUFLQyxLQUFPSixFQUFNRixNQUFRSCxNQUFNVSxPQUNoQ0YsS0FBS0csSUFBTSxLQUNYSCxLQUFLSCxNQUFRQSxFQUNOQSxFQUFNTyxPQUNULElBQUssV0FDSkosS0FBS0ssa0JBQ0YsTUFDSixLQUFLLFNBRUQsS0FDSixLQUFLLFVBRUQsS0FDSixLQUFLLFdBRUQsS0FDSixLQUFLLE1BRUQsS0FDSixTQUNJTCxLQUFLSyxtQkFFYkwsS0FBS00sU0FDSkwsS0FBS0QsS0FBS0MsS0FDVk0sS0FBTVAsS0FBS1EsWUFDWEwsSUFBSUgsS0FBS0csS0FFVmQsSUFBSW9CLFVBQVVDLE9BQU9WLEtBQUtNLFNBbUMzQixNQXJCQWpDLGNBM0NLdUIsSUE0Q0pYLElBQUssbUJBQ0wwQixNQWJlLFdBQ2ZYLEtBQUtHLElBQU0sR0FBSVosU0FBUWMsaUJBQWlCLGVBQWdCTCxLQUFLSCxNQUFNZSxRQUMvQixNQUFqQ1osS0FBS0gsTUFBTWdCLFVBQVVDLFdBQ3ZCZCxLQUFLRyxJQUFJWSxlQUFpQmYsS0FBS0gsTUFBTWdCLFVBQVVDLFNBQy9DZCxLQUFLRyxJQUFJWSxlQUFlQyxPQUFTaEIsS0FBS0gsTUFBTWdCLFVBQVVJLFFBQ3REakIsS0FBS0csSUFBSVksZUFBZUcsT0FBU2xCLEtBQUtILE1BQU1nQixVQUFVTSxRQUN0RG5CLEtBQUtHLElBQUlpQixnQkFBa0JwQixLQUFLSCxNQUFNZ0IsVUFBVVEsaUJBQ2hEckIsS0FBS0csSUFBSVksZUFBZU8sUUFBVXRCLEtBQUtILE1BQU1nQixVQUFVVSxTQUNwRHZCLEtBQUtHLElBQUlZLGVBQWVTLFFBQVV4QixLQUFLSCxNQUFNZ0IsVUFBVVksU0FDdkR6QixLQUFLRyxJQUFJWSxlQUFlVyxTQUFXMUIsS0FBS0gsTUFBTWdCLFVBQVVjLFdBSWhCLE1BQXRDM0IsS0FBS0gsTUFBTWdCLFVBQVVlLGdCQUN2QkMsUUFBUUMsSUFBSTlCLEtBQUtILE1BQU1nQixVQUFVZSxlQUNqQzVCLEtBQUtHLElBQUk0QixhQUFjL0IsS0FBS0gsTUFBTWdCLFVBQVVlLG1CQS9DNUNoQyxJQW9ETm9DLFFBQU9DLFFBQVVyQyIsImZpbGUiOiJjb3JlL2xzZC9jb21wb25lbnRzL2NfbWF0ZXJpYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQ0VTID0gcmVxdWlyZSgnY2VzJyk7XG52YXIgQkFCWUxPTiA9IHJlcXVpcmUoJy4uL2xpYi9iYWJ5bG9uJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscy91dGlscycpO1xudmFyIGRlZmF1bHRzID0gdXRpbHMuZGVmYXVsdEFyZ3MoKTtcbmRlZmF1bHRzLl9uYW1lID0gJ21hdGVyaWFsJztcbi8qKlxuICogLi4uXG4gKiBAYXV0aG9yIEJyZW5kb24gU21pdGhcbiAqIGh0dHA6Ly9zZWFjbG91ZDkub3JnXG4gKiBMaWdodFdlaWdodCAzRCBTeXN0ZW0gRGVzaWduIGVuZ2luZVxuICovXG5jbGFzcyBjX21hdGVyaWFsIHtcblx0Y29uc3RydWN0b3IoX29wdHMgPSBkZWZhdWx0cyl7XG5cdFx0dGhpcy5uYW1lID0gX29wdHMuX25hbWUgKyB1dGlscy5ndWlkKCk7XG5cdFx0dGhpcy5vYmogPSBudWxsO1xuXHRcdHRoaXMuX29wdHMgPSBfb3B0cztcblx0XHRzd2l0Y2goX29wdHMuX3R5cGUpIHtcblx0XHQgICAgY2FzZSAnU3RhbmRhcmQnOlxuXHRcdCAgICBcdHRoaXMuU3RhbmRhcmRNYXRlcmlhbCgpO1xuXHRcdCAgICAgICAgYnJlYWs7XG5cdFx0ICAgIGNhc2UgJ1NoYWRlcic6XG5cdFx0ICAgICAgICAvL3RvZG9cblx0XHQgICAgICAgIGJyZWFrO1xuXHRcdCAgICBjYXNlICdEeW5hbWljJzpcblx0XHQgICAgICAgIC8vdG9kb1xuXHRcdCAgICAgICAgYnJlYWs7XHRcblx0XHQgICAgY2FzZSAnRnJlc2VuZWwnOlxuXHRcdCAgICAgICAgLy90b2RvXG5cdFx0ICAgICAgICBicmVhaztcblx0XHQgICAgY2FzZSAnUEJSJzpcblx0XHQgICAgICAgIC8vdG9kb1xuXHRcdCAgICAgICAgYnJlYWs7ICAgIFx0ICAgIFx0ICAgICAgICAgICAgICAgIFxuXHRcdCAgICBkZWZhdWx0OlxuXHRcdCAgICAgICAgdGhpcy5TdGFuZGFyZE1hdGVyaWFsKCk7XG5cdFx0IH1cblx0XHR0aGlzLm9wdGlvbnMgPSB7XG5cdFx0XHRuYW1lOnRoaXMubmFtZSAsXG5cdFx0XHRpbml0OiB0aGlzLmNvbnN0cnVjdG9yLFxuXHRcdFx0b2JqOnRoaXMub2JqXG5cdFx0fVxuXHRcdENFUy5Db21wb25lbnQuZXh0ZW5kKHRoaXMub3B0aW9ucyk7XG5cdH1cblxuXHRTdGFuZGFyZE1hdGVyaWFsKCl7XG5cdFx0dGhpcy5vYmogPSBuZXcgQkFCWUxPTi5TdGFuZGFyZE1hdGVyaWFsKFwidGV4dHVyZVBsYW5lXCIsIHRoaXMuX29wdHMuX3NjZW5lKTtcblx0XHRpZih0aGlzLl9vcHRzLl9tYXRlcmlhbC5fdGV4dHVyZSAhPSBudWxsKXtcblx0XHRcdHRoaXMub2JqLmRpZmZ1c2VUZXh0dXJlID0gdGhpcy5fb3B0cy5fbWF0ZXJpYWwuX3RleHR1cmU7XG5cdFx0XHR0aGlzLm9iai5kaWZmdXNlVGV4dHVyZS51U2NhbGUgPSB0aGlzLl9vcHRzLl9tYXRlcmlhbC5fdVNjYWxlOy8vUmVwZWF0IDUgdGltZXMgb24gdGhlIFZlcnRpY2FsIEF4ZXNcblx0XHRcdHRoaXMub2JqLmRpZmZ1c2VUZXh0dXJlLnZTY2FsZSA9IHRoaXMuX29wdHMuX21hdGVyaWFsLl92U2NhbGU7Ly9SZXBlYXQgNSB0aW1lcyBvbiB0aGUgSG9yaXpvbnRhbCBBeGVzXG5cdFx0XHR0aGlzLm9iai5iYWNrRmFjZUN1bGxpbmcgPSB0aGlzLl9vcHRzLl9tYXRlcmlhbC5fYmFja0ZhY2VDdWxsaW5nOy8vQWx3YXlzIHNob3cgdGhlIGZyb250IGFuZCB0aGUgYmFjayBvZiBhbiBlbGVtZW50XG5cdFx0XHR0aGlzLm9iai5kaWZmdXNlVGV4dHVyZS52T2Zmc2V0ID0gdGhpcy5fb3B0cy5fbWF0ZXJpYWwuX3ZPZmZzZXQ7Ly9WZXJ0aWNhbCBvZmZzZXQgb2YgMTAlXG4gICAgXHRcdHRoaXMub2JqLmRpZmZ1c2VUZXh0dXJlLnVPZmZzZXQgPSB0aGlzLl9vcHRzLl9tYXRlcmlhbC5fdU9mZnNldDsvL0hvcml6b250YWwgb2Zmc2V0IG9mIDQwJVxuICAgIFx0XHR0aGlzLm9iai5kaWZmdXNlVGV4dHVyZS5oYXNBbHBoYSA9IHRoaXMuX29wdHMuX21hdGVyaWFsLl9oYXNBbHBoYTtcblx0XHR9XG5cdFx0XG5cdFx0XG4gICAgXHRpZih0aGlzLl9vcHRzLl9tYXRlcmlhbC5fZGlmZnVzZUNvbG9yICE9IG51bGwpe1xuICAgIFx0XHRjb25zb2xlLmxvZyh0aGlzLl9vcHRzLl9tYXRlcmlhbC5fZGlmZnVzZUNvbG9yKTtcbiAgICBcdFx0dGhpcy5vYmouZGlmZnVzZUNvbG9yID10aGlzLl9vcHRzLl9tYXRlcmlhbC5fZGlmZnVzZUNvbG9yO1xuICAgIFx0fVxuXHR9XG5cbn1cbm1vZHVsZS5leHBvcnRzID0gY19tYXRlcmlhbDsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=