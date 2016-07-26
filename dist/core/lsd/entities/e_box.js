"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}}(),CES=require("ces"),BABYLON=require("../lib/babylon"),c_mesh=require("../components/c_mesh"),c_material=require("../components/c_material"),utils=require("../utils/utils"),e_box=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0];_classCallCheck(this,e),this.entity=new CES.Entity,this.mesh,this.material,this._defaults=null==t?this.defaults():t,this.init()}return _createClass(e,[{key:"init",value:function(){this.mesh=new c_mesh(this._defaults),this.entity.addComponent(this.mesh),this.material=new c_material(this._defaults),this.entity.addComponent(this.material),this.mesh.obj.material=this.material.obj}}],[{key:"defaults",value:function(){return{e_type:"e_box",_size:10,_type:"Box",_name:"box",_layerMask:"0x0FFFFFFF",_isPickable:!0,_scaling:1,_position:"0,0,0",_rotation:"0,0,0",_material:"default",_scene:{}}}}]),e}();module.exports=e_box;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvbHNkL2VudGl0aWVzL2VfYm94LmpzIl0sIm5hbWVzIjpbIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiQ0VTIiwicmVxdWlyZSIsIkJBQllMT04iLCJjX21lc2giLCJjX21hdGVyaWFsIiwidXRpbHMiLCJlX2JveCIsIl9kZWZhdWx0cyIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsInRoaXMiLCJlbnRpdHkiLCJFbnRpdHkiLCJtZXNoIiwibWF0ZXJpYWwiLCJkZWZhdWx0cyIsImluaXQiLCJ2YWx1ZSIsImFkZENvbXBvbmVudCIsIm9iaiIsImVfdHlwZSIsIl9zaXplIiwiX3R5cGUiLCJfbmFtZSIsIl9sYXllck1hc2siLCJfaXNQaWNrYWJsZSIsIl9zY2FsaW5nIiwiX3Bvc2l0aW9uIiwiX3JvdGF0aW9uIiwiX21hdGVyaWFsIiwiX3NjZW5lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFJQSxTQUFTQSxpQkFBZ0JDLEVBQVVDLEdBQWUsS0FBTUQsWUFBb0JDLElBQWdCLEtBQU0sSUFBSUMsV0FBVSxxQ0FGaEgsR0FBSUMsY0FBZSxXQUFlLFFBQVNDLEdBQWlCQyxFQUFRQyxHQUFTLElBQUssR0FBSUMsR0FBSSxFQUFHQSxFQUFJRCxFQUFNRSxPQUFRRCxJQUFLLENBQUUsR0FBSUUsR0FBYUgsRUFBTUMsRUFBSUUsR0FBV0MsV0FBYUQsRUFBV0MsYUFBYyxFQUFPRCxFQUFXRSxjQUFlLEVBQVUsU0FBV0YsS0FBWUEsRUFBV0csVUFBVyxHQUFNQyxPQUFPQyxlQUFlVCxFQUFRSSxFQUFXTSxJQUFLTixJQUFpQixNQUFPLFVBQVVSLEVBQWFlLEVBQVlDLEdBQWlKLE1BQTlIRCxJQUFZWixFQUFpQkgsRUFBWWlCLFVBQVdGLEdBQWlCQyxHQUFhYixFQUFpQkgsRUFBYWdCLEdBQXFCaEIsTUFGN2hCa0IsSUFBTUMsUUFBUSxPQUNkQyxRQUFVRCxRQUFRLGtCQUNsQkUsT0FBU0YsUUFBUSx3QkFDakJHLFdBQWFILFFBQVEsNEJBQ3JCSSxNQUFRSixRQUFRLGtCQU9kSyxNQUFLLFdBQ0MsUUFETkEsS0FTSixHQVJXQyxHQUFTQyxVQUFBbkIsUUFBQSxHQUFBb0IsU0FBQUQsVUFBQSxHQUFHLEtBQUlBLFVBQUEsRUFVM0I1QixpQkFBZ0I4QixLQVhaSixHQUVKSSxLQUFLQyxPQUFTLEdBQUlYLEtBQUlZLE9BQ3RCRixLQUFLRyxLQUNMSCxLQUFLSSxTQUNMSixLQUFLSCxVQUF5QixNQUFiQSxFQUFvQkcsS0FBS0ssV0FBWVIsRUFDdERHLEtBQUtNLE9BMENOLE1BNUJBaEMsY0FwQktzQixJQXFCSlYsSUFBSyxPQUNMcUIsTUFHRyxXQUNIUCxLQUFLRyxLQUFPLEdBQUlWLFFBQU9PLEtBQUtILFdBQzVCRyxLQUFLQyxPQUFPTyxhQUFhUixLQUFLRyxNQUM5QkgsS0FBS0ksU0FBVyxHQUFJVixZQUFXTSxLQUFLSCxXQUNwQ0csS0FBS0MsT0FBT08sYUFBYVIsS0FBS0ksVUFDOUJKLEtBQUtHLEtBQUtNLElBQUlMLFNBQVdKLEtBQUtJLFNBQVNLLFNBQXZDdkIsSUFBSyxXQUNMcUIsTUF0QmMsV0FDZCxPQUNDRyxPQUFPLFFBQ1BDLE1BQU0sR0FDTkMsTUFBTSxNQUNOQyxNQUFNLE1BQ05DLFdBQVksYUFDWkMsYUFBYSxFQUNiQyxTQUFTLEVBQ1RDLFVBQVUsUUFDVkMsVUFBVSxRQUNWQyxVQUFVLFVBQ1ZDLGVBckJHeEIsSUFpQ055QixRQUFPQyxRQUFVMUIiLCJmaWxlIjoiY29yZS9sc2QvZW50aXRpZXMvZV9ib3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQ0VTID0gcmVxdWlyZSgnY2VzJyk7XG52YXIgQkFCWUxPTiA9IHJlcXVpcmUoJy4uL2xpYi9iYWJ5bG9uJyk7XG52YXIgY19tZXNoID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9jX21lc2gnKTtcbnZhciBjX21hdGVyaWFsID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9jX21hdGVyaWFsJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscy91dGlscycpO1xuLyoqXG4gKiAuLi5cbiAqIEBhdXRob3IgQnJlbmRvbiBTbWl0aFxuICogaHR0cDovL3NlYWNsb3VkOS5vcmdcbiAqIExpZ2h0V2VpZ2h0IDNEIFN5c3RlbSBEZXNpZ24gZW5naW5lXG4gKi9cbmNsYXNzIGVfYm94e1xuXHRjb25zdHJ1Y3RvcihfZGVmYXVsdHMgPSBudWxsKXtcblx0XHR0aGlzLmVudGl0eSA9IG5ldyBDRVMuRW50aXR5KCk7XG5cdFx0dGhpcy5tZXNoO1xuXHRcdHRoaXMubWF0ZXJpYWw7XG5cdFx0dGhpcy5fZGVmYXVsdHMgPSBfZGVmYXVsdHMgPT0gbnVsbCA/IHRoaXMuZGVmYXVsdHMoKTogX2RlZmF1bHRzO1xuXHRcdHRoaXMuaW5pdCgpO1xuXHR9XG5cblx0c3RhdGljIGRlZmF1bHRzKCl7XG5cdFx0cmV0dXJue1xuXHRcdFx0ZV90eXBlOidlX2JveCcsXG5cdFx0XHRfc2l6ZToxMCxcblx0XHRcdF90eXBlOidCb3gnLFxuXHRcdFx0X25hbWU6J2JveCcsXG5cdFx0XHRfbGF5ZXJNYXNrOiBcIjB4MEZGRkZGRkZcIixcblx0XHRcdF9pc1BpY2thYmxlOiB0cnVlLFxuXHRcdFx0X3NjYWxpbmc6MSxcblx0XHRcdF9wb3NpdGlvbjonMCwwLDAnLFxuXHRcdFx0X3JvdGF0aW9uOicwLDAsMCcsXG5cdFx0XHRfbWF0ZXJpYWw6J2RlZmF1bHQnLFxuXHRcdFx0X3NjZW5lOnt9XG5cdFx0fVxuXHR9XG5cblx0aW5pdCgpe1x0XHRcblx0XHR0aGlzLm1lc2ggPSBuZXcgY19tZXNoKHRoaXMuX2RlZmF1bHRzKTtcblx0XHR0aGlzLmVudGl0eS5hZGRDb21wb25lbnQodGhpcy5tZXNoKTtcblx0XHR0aGlzLm1hdGVyaWFsID0gbmV3IGNfbWF0ZXJpYWwodGhpcy5fZGVmYXVsdHMpO1xuXHRcdHRoaXMuZW50aXR5LmFkZENvbXBvbmVudCh0aGlzLm1hdGVyaWFsKTtcblx0XHR0aGlzLm1lc2gub2JqLm1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbC5vYmo7XG5cdH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZV9ib3g7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9