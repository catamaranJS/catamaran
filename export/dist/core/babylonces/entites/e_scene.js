"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var CES=require("ces"),BABYLON=require("../lib/babylon"),c_canvas=require("../components/c_canvas"),c_scene=require("../components/c_scene"),e_scene=function e(){_classCallCheck(this,e),this.entity=new CES.Entity,this.entity.addComponent(new c_canvas("canvas")),this.entity.addComponent(new c_scene("scene")),this.canvas=this.entity._components.$canvas,this.scene=this.entity._components.$scene};module.exports=e_scene;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvYmFieWxvbmNlcy9lbnRpdGVzL2Vfc2NlbmUuanMiXSwibmFtZXMiOlsiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIkNFUyIsInJlcXVpcmUiLCJCQUJZTE9OIiwiY19jYW52YXMiLCJjX3NjZW5lIiwiZV9zY2VuZSIsInRoaXMiLCJlbnRpdHkiLCJFbnRpdHkiLCJhZGRDb21wb25lbnQiLCJjYW52YXMiLCJfY29tcG9uZW50cyIsIiRjYW52YXMiLCJzY2VuZSIsIiRzY2VuZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLFlBRUEsU0FBU0EsaUJBQWdCQyxFQUFVQyxHQUFlLEtBQU1ELFlBQW9CQyxJQUFnQixLQUFNLElBQUlDLFdBQVUscUNBRmhILEdBQUlDLEtBQU1DLFFBQVEsT0FDZEMsUUFBVUQsUUFBUSxrQkFDbEJFLFNBQVdGLFFBQVEsMEJBQ25CRyxRQUFVSCxRQUFRLHlCQUVoQkksUUFDTSxRQUROQSxLQUtMVCxnQkFBZ0JVLEtBTFhELEdBRUpDLEtBQUtDLE9BQVMsR0FBSVAsS0FBSVEsT0FDdEJGLEtBQUtDLE9BQU9FLGFBQWEsR0FBSU4sVUFBUyxXQUN0Q0csS0FBS0MsT0FBT0UsYUFBYSxHQUFJTCxTQUFRLFVBQ3JDRSxLQUFLSSxPQUFTSixLQUFLQyxPQUFPSSxZQUFZQyxRQUN0Q04sS0FBS08sTUFBUVAsS0FBS0MsT0FBT0ksWUFBWUcsT0FJdkNDLFFBQU9DLFFBQVVYIiwiZmlsZSI6ImNvcmUvYmFieWxvbmNlcy9lbnRpdGVzL2Vfc2NlbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQ0VTID0gcmVxdWlyZSgnY2VzJyk7XG52YXIgQkFCWUxPTiA9IHJlcXVpcmUoJy4uL2xpYi9iYWJ5bG9uJyk7XG52YXIgY19jYW52YXMgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL2NfY2FudmFzJyk7XG52YXIgY19zY2VuZSA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvY19zY2VuZScpO1xuXG5jbGFzcyBlX3NjZW5le1xuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdHRoaXMuZW50aXR5ID0gbmV3IENFUy5FbnRpdHkoKTtcblx0XHR0aGlzLmVudGl0eS5hZGRDb21wb25lbnQobmV3IGNfY2FudmFzKCdjYW52YXMnKSk7XG5cdFx0dGhpcy5lbnRpdHkuYWRkQ29tcG9uZW50KG5ldyBjX3NjZW5lKCdzY2VuZScpKTtcblx0XHR0aGlzLmNhbnZhcyA9IHRoaXMuZW50aXR5Ll9jb21wb25lbnRzLiRjYW52YXM7XG5cdFx0dGhpcy5zY2VuZSA9IHRoaXMuZW50aXR5Ll9jb21wb25lbnRzLiRzY2VuZTtcblx0fVxuXG59XG5tb2R1bGUuZXhwb3J0cyA9IGVfc2NlbmU7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9