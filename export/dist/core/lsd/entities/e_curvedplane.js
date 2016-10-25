"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),_ces=require("ces"),CES=_interopRequireWildcard(_ces),_libBabylon=require("../lib/babylon"),BABYLON=_interopRequireWildcard(_libBabylon),_utilsUtils=require("../utils/utils"),_componentsC_curvedplane=require("../components/c_curvedplane"),_componentsC_material=require("../components/c_material"),e_curvedplane=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];_classCallCheck(this,e),this.entity=new CES.Entity,this.mesh,this.material,this._defaults=null==t?this.defaults():t,this.init()}return _createClass(e,[{key:"init",value:function(){this.mesh=new c_curvedui(this._defaults),this.entity.addComponent(this.mesh),this.material=new _componentsC_material.c_material(this._defaults),this.entity.addComponent(this.material),this.mesh.obj.material=this.material.obj}}],[{key:"defaults",value:function(){return{e_type:"e_curvedplane",_type:"curvedUI",name:"curvedUI",_layerMask:"0x0FFFFFFF",_isPickable:!0,_hSize:3,_scaling:1.5,_position:"0,0,0",_rotation:"0,0,0",_material:"default",_scene:{}}}}]),e}();exports.e_curvedplane=e_curvedplane;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvbHNkL2VudGl0aWVzL2VfY3VydmVkcGxhbmUuanMiXSwibmFtZXMiOlsiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJvYmoiLCJfX2VzTW9kdWxlIiwibmV3T2JqIiwia2V5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfY2VzIiwicmVxdWlyZSIsIkNFUyIsIl9saWJCYWJ5bG9uIiwiQkFCWUxPTiIsIl91dGlsc1V0aWxzIiwiX2NvbXBvbmVudHNDX2N1cnZlZHBsYW5lIiwiX2NvbXBvbmVudHNDX21hdGVyaWFsIiwiZV9jdXJ2ZWRwbGFuZSIsIl9kZWZhdWx0cyIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsInRoaXMiLCJlbnRpdHkiLCJFbnRpdHkiLCJtZXNoIiwibWF0ZXJpYWwiLCJkZWZhdWx0cyIsImluaXQiLCJjX2N1cnZlZHVpIiwiYWRkQ29tcG9uZW50IiwiY19tYXRlcmlhbCIsImVfdHlwZSIsIl90eXBlIiwibmFtZSIsIl9sYXllck1hc2siLCJfaXNQaWNrYWJsZSIsIl9oU2l6ZSIsIl9zY2FsaW5nIiwiX3Bvc2l0aW9uIiwiX3JvdGF0aW9uIiwiX21hdGVyaWFsIiwiX3NjZW5lIl0sIm1hcHBpbmdzIjoiQUFBQSxZQVFBLFNBQVNBLHlCQUF3QkMsR0FBTyxHQUFJQSxHQUFPQSxFQUFJQyxXQUFjLE1BQU9ELEVBQWMsSUFBSUUsS0FBYSxJQUFXLE1BQVBGLEVBQWUsSUFBSyxHQUFJRyxLQUFPSCxHQUFXSSxPQUFPQyxVQUFVQyxlQUFlQyxLQUFLUCxFQUFLRyxLQUFNRCxFQUFPQyxHQUFPSCxFQUFJRyxHQUFtQyxPQUF6QkQsR0FBTyxXQUFhRixFQUFZRSxFQUVyUSxRQUFTTSxpQkFBZ0JDLEVBQVVDLEdBQWUsS0FBTUQsWUFBb0JDLElBQWdCLEtBQU0sSUFBSUMsV0FBVSxxQ0FSaEhQLE9BQU9RLGVBQWVDLFFBQVMsY0FDOUJDLE9BQU8sR0FHUixJQUFJQyxjQUFlLFdBQWUsUUFBU0MsR0FBaUJDLEVBQVFDLEdBQVMsSUFBSyxHQUFJQyxHQUFJLEVBQUdBLEVBQUlELEVBQU1FLE9BQVFELElBQUssQ0FBRSxHQUFJRSxHQUFhSCxFQUFNQyxFQUFJRSxHQUFXQyxXQUFhRCxFQUFXQyxhQUFjLEVBQU9ELEVBQVdFLGNBQWUsRUFBVSxTQUFXRixLQUFZQSxFQUFXRyxVQUFXLEdBQU1wQixPQUFPUSxlQUFlSyxFQUFRSSxFQUFXbEIsSUFBS2tCLElBQWlCLE1BQU8sVUFBVVgsRUFBYWUsRUFBWUMsR0FBaUosTUFBOUhELElBQVlULEVBQWlCTixFQUFZTCxVQUFXb0IsR0FBaUJDLEdBQWFWLEVBQWlCTixFQUFhZ0IsR0FBcUJoQixNQU03aEJpQixLQUFPQyxRQVpVLE9BQVRDLElBQUc5Qix3QkFBQTRCLE1BZ0JYRyxZQUFjRixRQWZPLGtCQUFiRyxRQUFPaEMsd0JBQUErQixhQW1CZkUsWUFBY0osUUFsQkksa0JBb0JsQksseUJBQTJCTCxRQW5CRCwrQkFxQjFCTSxzQkFBd0JOLFFBcEJELDRCQU9kTyxjQUFhLFdBQ2QsUUFEQ0EsS0F3QlgsR0F2QldDLEdBQVNDLFVBQUFqQixRQUFBLEdBQUFrQixTQUFBRCxVQUFBLEdBQUcsS0FBSUEsVUFBQSxFQXlCM0I3QixpQkFBZ0IrQixLQTFCTEosR0FFWEksS0FBS0MsT0FBUyxHQUFJWCxLQUFJWSxPQUN0QkYsS0FBS0csS0FDTEgsS0FBS0ksU0FDTEosS0FBS0gsVUFBeUIsTUFBYkEsRUFBb0JHLEtBQUtLLFdBQVlSLEVBQ3RERyxLQUFLTSxPQXlETixNQTVCQTlCLGNBbkNZb0IsSUFvQ1hoQyxJQUFLLE9BQ0xXLE1BWkcsV0FDSHlCLEtBQUtHLEtBQU8sR0FBSUksWUFBV1AsS0FBS0gsV0FDaENHLEtBQUtDLE9BQU9PLGFBQWFSLEtBQUtHLE1BQzlCSCxLQUFLSSxTQUFXLEdBQUFULHVCQUFBYyxXQUFlVCxLQUFLSCxXQUNwQ0csS0FBS0MsT0FBT08sYUFBYVIsS0FBS0ksVUFDOUJKLEtBQUtHLEtBQUsxQyxJQUFJMkMsU0FBV0osS0FBS0ksU0FBUzNDLFNBZXZDRyxJQUFLLFdBQ0xXLE1BckNjLFdBQ2QsT0FDQ21DLE9BQU8sZ0JBQ1BDLE1BQU0sV0FDTkMsS0FBSyxXQUNMQyxXQUFZLGFBQ1pDLGFBQWEsRUFDYkMsT0FBTyxFQUNQQyxTQUFTLElBQ1RDLFVBQVUsUUFDVkMsVUFBVSxRQUNWQyxVQUFVLFVBQ1ZDLGVBckJVeEIsSUFrRWJ0QixTQUFRc0IsY0FBZ0JBIiwiZmlsZSI6ImNvcmUvbHNkL2VudGl0aWVzL2VfY3VydmVkcGxhbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBDRVMgZnJvbSAnY2VzJztcbmltcG9ydCAqIGFzIEJBQllMT04gZnJvbSAnLi4vbGliL2JhYnlsb24nO1xuaW1wb3J0IHsgdXRpbHMgfSBmcm9tICcuLi91dGlscy91dGlscyc7XG5pbXBvcnQgeyBjX2N1cnZlZHBsYW5lIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jX2N1cnZlZHBsYW5lJztcbmltcG9ydCB7IGNfbWF0ZXJpYWwgfSBmcm9tICcuLi9jb21wb25lbnRzL2NfbWF0ZXJpYWwnO1xuLyoqXG4gKiAuLi5cbiAqIEBhdXRob3IgQnJlbmRvbiBTbWl0aFxuICogaHR0cDovL3NlYWNsb3VkOS5vcmdcbiAqIExpZ2h0V2VpZ2h0IDNEIFN5c3RlbSBEZXNpZ24gZW5naW5lXG4gKi9cbmV4cG9ydCBjbGFzcyBlX2N1cnZlZHBsYW5le1xuXHRjb25zdHJ1Y3RvcihfZGVmYXVsdHMgPSBudWxsKXtcblx0XHR0aGlzLmVudGl0eSA9IG5ldyBDRVMuRW50aXR5KCk7XG5cdFx0dGhpcy5tZXNoO1xuXHRcdHRoaXMubWF0ZXJpYWw7XG5cdFx0dGhpcy5fZGVmYXVsdHMgPSBfZGVmYXVsdHMgPT0gbnVsbCA/IHRoaXMuZGVmYXVsdHMoKTogX2RlZmF1bHRzO1xuXHRcdHRoaXMuaW5pdCgpO1xuXHR9XG5cblx0c3RhdGljIGRlZmF1bHRzKCl7XG5cdFx0cmV0dXJue1xuXHRcdFx0ZV90eXBlOidlX2N1cnZlZHBsYW5lJyxcblx0XHRcdF90eXBlOidjdXJ2ZWRVSScsXG5cdFx0XHRuYW1lOidjdXJ2ZWRVSScsXG5cdFx0XHRfbGF5ZXJNYXNrOiBcIjB4MEZGRkZGRkZcIixcblx0XHRcdF9pc1BpY2thYmxlOiB0cnVlLFxuXHRcdFx0X2hTaXplOjMsXG5cdFx0XHRfc2NhbGluZzoxLjUsXG5cdFx0XHRfcG9zaXRpb246JzAsMCwwJyxcblx0XHRcdF9yb3RhdGlvbjonMCwwLDAnLFxuXHRcdFx0X21hdGVyaWFsOidkZWZhdWx0Jyxcblx0XHRcdF9zY2VuZTp7fVxuXHRcdH1cblx0fVxuXG5cdGluaXQoKXtcdFx0XG5cdFx0dGhpcy5tZXNoID0gbmV3IGNfY3VydmVkdWkodGhpcy5fZGVmYXVsdHMpO1xuXHRcdHRoaXMuZW50aXR5LmFkZENvbXBvbmVudCh0aGlzLm1lc2gpO1xuXHRcdHRoaXMubWF0ZXJpYWwgPSBuZXcgY19tYXRlcmlhbCh0aGlzLl9kZWZhdWx0cyk7XG5cdFx0dGhpcy5lbnRpdHkuYWRkQ29tcG9uZW50KHRoaXMubWF0ZXJpYWwpO1xuXHRcdHRoaXMubWVzaC5vYmoubWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFsLm9iajtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9