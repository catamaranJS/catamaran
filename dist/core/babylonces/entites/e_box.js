"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var CES=require("ces"),BABYLON=require("../lib/babylon"),c_mesh=require("../components/c_mesh"),c_material=require("../components/c_material"),e_box=function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];_classCallCheck(this,e),this.entity=new CES.Entity;var n=new c_mesh(t);this.entity.addComponent(n);var a=new c_material(t);this.entity.addComponent(a),n.obj.material=a.obj};module.exports=e_box;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvYmFieWxvbmNlcy9lbnRpdGVzL2VfYm94LmpzIl0sIm5hbWVzIjpbIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJDRVMiLCJyZXF1aXJlIiwiQkFCWUxPTiIsImNfbWVzaCIsImNfbWF0ZXJpYWwiLCJlX2JveCIsIl9kZWZhdWx0cyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInRoaXMiLCJlbnRpdHkiLCJFbnRpdHkiLCJtZXNoIiwiYWRkQ29tcG9uZW50IiwibWF0Iiwib2JqIiwibWF0ZXJpYWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUVBLFNBQVNBLGlCQUFnQkMsRUFBVUMsR0FBZSxLQUFNRCxZQUFvQkMsSUFBZ0IsS0FBTSxJQUFJQyxXQUFVLHFDQUZoSCxHQUFJQyxLQUFNQyxRQUFRLE9BQ2RDLFFBQVVELFFBQVEsa0JBQ2xCRSxPQUFTRixRQUFRLHdCQUNqQkcsV0FBYUgsUUFBUSw0QkFFbkJJLE1BQ00sUUFETkEsS0FLTCxHQUpZQyxHQUFTQyxVQUFBQyxRQUFBLEdBQUFDLFNBQUFGLFVBQUEsTUFBS0EsVUFBQSxFQU0xQlgsaUJBQWdCYyxLQVBYTCxHQUVKSyxLQUFLQyxPQUFTLEdBQUlYLEtBQUlZLE1BQ3RCLElBQUlDLEdBQU8sR0FBSVYsUUFBT0csRUFDdEJJLE1BQUtDLE9BQU9HLGFBQWFELEVBQ3pCLElBQUlFLEdBQU0sR0FBSVgsWUFBV0UsRUFDekJJLE1BQUtDLE9BQU9HLGFBQWFDLEdBQ3pCRixFQUFLRyxJQUFJQyxTQUFXRixFQUFJQyxJQUcxQkUsUUFBT0MsUUFBVWQiLCJmaWxlIjoiY29yZS9iYWJ5bG9uY2VzL2VudGl0ZXMvZV9ib3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQ0VTID0gcmVxdWlyZSgnY2VzJyk7XG52YXIgQkFCWUxPTiA9IHJlcXVpcmUoJy4uL2xpYi9iYWJ5bG9uJyk7XG52YXIgY19tZXNoID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9jX21lc2gnKTtcbnZhciBjX21hdGVyaWFsID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9jX21hdGVyaWFsJyk7XG5cbmNsYXNzIGVfYm94e1xuXHRjb25zdHJ1Y3RvcihfZGVmYXVsdHMgPSB7fSl7XG5cdFx0dGhpcy5lbnRpdHkgPSBuZXcgQ0VTLkVudGl0eSgpO1xuXHRcdHZhciBtZXNoID0gbmV3IGNfbWVzaChfZGVmYXVsdHMpO1xuXHRcdHRoaXMuZW50aXR5LmFkZENvbXBvbmVudChtZXNoKTtcblx0XHR2YXIgbWF0ID0gbmV3IGNfbWF0ZXJpYWwoX2RlZmF1bHRzKTtcblx0XHR0aGlzLmVudGl0eS5hZGRDb21wb25lbnQobWF0KTtcblx0XHRtZXNoLm9iai5tYXRlcmlhbCA9IG1hdC5vYmo7XG5cdH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZV9ib3g7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9