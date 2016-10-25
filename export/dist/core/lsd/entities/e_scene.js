"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var CES=require("ces"),BABYLON=require("../lib/babylon"),c_canvas=require("../components/c_canvas"),c_scene=require("../components/c_scene"),e_scene=function e(){var n=arguments.length<=0||void 0===arguments[0]?null:arguments[0];_classCallCheck(this,e),this.entity=new CES.Entity,this.entity.addComponent(new c_canvas("canvas",n)),this.entity.addComponent(new c_scene("scene")),this.canvas=this.entity._components.$canvas,this.scene=this.entity._components.$scene};exports.e_scene=e_scene;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvbHNkL2VudGl0aWVzL2Vfc2NlbmUuanMiXSwibmFtZXMiOlsiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiQ0VTIiwicmVxdWlyZSIsIkJBQllMT04iLCJjX2NhbnZhcyIsImNfc2NlbmUiLCJlX3NjZW5lIiwiX29wdHMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJ0aGlzIiwiZW50aXR5IiwiRW50aXR5IiwiYWRkQ29tcG9uZW50IiwiY2FudmFzIiwiX2NvbXBvbmVudHMiLCIkY2FudmFzIiwic2NlbmUiLCIkc2NlbmUiXSwibWFwcGluZ3MiOiJBQUFBLFlBTUEsU0FBU0EsaUJBQWdCQyxFQUFVQyxHQUFlLEtBQU1ELFlBQW9CQyxJQUFnQixLQUFNLElBQUlDLFdBQVUscUNBSmhIQyxPQUFPQyxlQUFlQyxRQUFTLGNBQzlCQyxPQUFPLEdBSFIsSUFBSUMsS0FBTUMsUUFBUSxPQUNkQyxRQUFVRCxRQUFRLGtCQUNsQkUsU0FBV0YsUUFBUSwwQkFDbkJHLFFBQVVILFFBQVEseUJBT1RJLFFBQ0QsUUFEQ0EsS0FVWixHQVRZQyxHQUFLQyxVQUFBQyxRQUFBLEdBQUFDLFNBQUFGLFVBQUEsR0FBRyxLQUFJQSxVQUFBLEVBV3hCZixpQkFBZ0JrQixLQVpKTCxHQUVYSyxLQUFLQyxPQUFTLEdBQUlYLEtBQUlZLE9BQ3RCRixLQUFLQyxPQUFPRSxhQUFhLEdBQUlWLFVBQVMsU0FBVUcsSUFDaERJLEtBQUtDLE9BQU9FLGFBQWEsR0FBSVQsU0FBUSxVQUNyQ00sS0FBS0ksT0FBU0osS0FBS0MsT0FBT0ksWUFBWUMsUUFDdENOLEtBQUtPLE1BQVFQLEtBQUtDLE9BQU9JLFlBQVlHLE9BZXZDcEIsU0FBUU8sUUFBVUEiLCJmaWxlIjoiY29yZS9sc2QvZW50aXRpZXMvZV9zY2VuZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBDRVMgPSByZXF1aXJlKCdjZXMnKTtcbnZhciBCQUJZTE9OID0gcmVxdWlyZSgnLi4vbGliL2JhYnlsb24nKTtcbnZhciBjX2NhbnZhcyA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvY19jYW52YXMnKTtcbnZhciBjX3NjZW5lID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9jX3NjZW5lJyk7XG4vKipcbiAqIC4uLlxuICogQGF1dGhvciBCcmVuZG9uIFNtaXRoXG4gKiBodHRwOi8vc2VhY2xvdWQ5Lm9yZ1xuICogTGlnaHRXZWlnaHQgM0QgU3lzdGVtIERlc2lnbiBlbmdpbmVcbiAqL1xuZXhwb3J0IGNsYXNzIGVfc2NlbmV7XG5cdGNvbnN0cnVjdG9yKF9vcHRzID0gbnVsbCl7XG5cdFx0dGhpcy5lbnRpdHkgPSBuZXcgQ0VTLkVudGl0eSgpO1xuXHRcdHRoaXMuZW50aXR5LmFkZENvbXBvbmVudChuZXcgY19jYW52YXMoJ2NhbnZhcycsIF9vcHRzKSk7XG5cdFx0dGhpcy5lbnRpdHkuYWRkQ29tcG9uZW50KG5ldyBjX3NjZW5lKCdzY2VuZScpKTtcblx0XHR0aGlzLmNhbnZhcyA9IHRoaXMuZW50aXR5Ll9jb21wb25lbnRzLiRjYW52YXM7XG5cdFx0dGhpcy5zY2VuZSA9IHRoaXMuZW50aXR5Ll9jb21wb25lbnRzLiRzY2VuZTtcblx0fVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=