"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),BABYLON=require("../lib/babylon"),utils=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"defaultArgs",value:function(){var e={_name:null,_type:"FreeCamera",_position:new BABYLON.Vector3(0,0,0),_rotation:new BABYLON.Vector3(0,0,0),_diameterTop:3,_diameterBottom:3,_diameter:10,_size:10,_subdivisions:6,_tesselation:6,_thickness:3,_segements:10,_canvas:null,_texture:null,_uScale:1,_vScale:1,_backFaceCulling:!0,_vOffset:0,_uOffset:0,_hasAlpha:!1,_diffuseColor:null,_scene:{}};return e}},{key:"guid",value:function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}},{key:"degToRad",value:function(e){return e*(Math.PI/180)}},{key:"color",value:function(){var e=arguments.length<=0||void 0===arguments[0]?125:arguments[0],n=arguments.length<=1||void 0===arguments[1]?0:arguments[1],t=arguments.length<=2||void 0===arguments[2]?127:arguments[2],a=arguments.length<=3||void 0===arguments[3]?null:arguments[3];return null==a?new BABYLON.Color3(e,n,t):new BABYLON.Color4(e,n,t,a)}},{key:"assetsLoad",value:function(){var e=new BABYLON.AssetsManager(this._crurrentScene);this.jsonAssets.forEach(function(n){function t(){var t=e.addTextureTask(n.name,n.src);t.onSuccess=function(e){this._assets[e.name]=e.texture}.bind(this),t.onError=function(e){console.log(e.name+" - failed to load")}.bind(this)}switch(n.type){case"img":t();break;case"audio":break;case"video":break;case"hdr":break;default:t.apply(this)}e.load()}.bind(this)),e.onFinish=this.assetLoadingFinished.bind(this)}}]),e}();module.exports=utils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvYmFieWxvbmNlcy91dGlscy91dGlscy5qcyJdLCJuYW1lcyI6WyJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsIkJBQllMT04iLCJyZXF1aXJlIiwidXRpbHMiLCJ0aGlzIiwidmFsdWUiLCJfZGVmYXVsdHMiLCJfbmFtZSIsIl90eXBlIiwiX3Bvc2l0aW9uIiwiVmVjdG9yMyIsIl9yb3RhdGlvbiIsIl9kaWFtZXRlclRvcCIsIl9kaWFtZXRlckJvdHRvbSIsIl9kaWFtZXRlciIsIl9zaXplIiwiX3N1YmRpdmlzaW9ucyIsIl90ZXNzZWxhdGlvbiIsIl90aGlja25lc3MiLCJfc2VnZW1lbnRzIiwiX2NhbnZhcyIsIl90ZXh0dXJlIiwiX3VTY2FsZSIsIl92U2NhbGUiLCJfYmFja0ZhY2VDdWxsaW5nIiwiX3ZPZmZzZXQiLCJfdU9mZnNldCIsIl9oYXNBbHBoYSIsIl9kaWZmdXNlQ29sb3IiLCJfc2NlbmUiLCJzNCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwiZGVncmVlcyIsIlBJIiwiciIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsImciLCJiIiwiYSIsIkNvbG9yMyIsIkNvbG9yNCIsImxvYWRlciIsIkFzc2V0c01hbmFnZXIiLCJfY3J1cnJlbnRTY2VuZSIsImpzb25Bc3NldHMiLCJmb3JFYWNoIiwib2JqIiwiaW1nQXNzZXQiLCJpbWciLCJhZGRUZXh0dXJlVGFzayIsIm5hbWUiLCJzcmMiLCJvblN1Y2Nlc3MiLCJ0IiwiX2Fzc2V0cyIsInRleHR1cmUiLCJiaW5kIiwib25FcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiYXBwbHkiLCJsb2FkIiwib25GaW5pc2giLCJhc3NldExvYWRpbmdGaW5pc2hlZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLFlBSUEsU0FBU0EsaUJBQWdCQyxFQUFVQyxHQUFlLEtBQU1ELFlBQW9CQyxJQUFnQixLQUFNLElBQUlDLFdBQVUscUNBRmhILEdBQUlDLGNBQWUsV0FBZSxRQUFTQyxHQUFpQkMsRUFBUUMsR0FBUyxJQUFLLEdBQUlDLEdBQUksRUFBR0EsRUFBSUQsRUFBTUUsT0FBUUQsSUFBSyxDQUFFLEdBQUlFLEdBQWFILEVBQU1DLEVBQUlFLEdBQVdDLFdBQWFELEVBQVdDLGFBQWMsRUFBT0QsRUFBV0UsY0FBZSxFQUFVLFNBQVdGLEtBQVlBLEVBQVdHLFVBQVcsR0FBTUMsT0FBT0MsZUFBZVQsRUFBUUksRUFBV00sSUFBS04sSUFBaUIsTUFBTyxVQUFVUixFQUFhZSxFQUFZQyxHQUFpSixNQUE5SEQsSUFBWVosRUFBaUJILEVBQVlpQixVQUFXRixHQUFpQkMsR0FBYWIsRUFBaUJILEVBQWFnQixHQUFxQmhCLE1BRjdoQmtCLFFBQVVDLFFBQVEsa0JBQ2hCQyxNQUFLLFdBUVYsUUFSS0EsS0FTSnRCLGdCQUFnQnVCLEtBVFpELEdBdUhMLE1BM0dBbEIsY0FaS2tCLEVBQUssT0FhVE4sSUFBSyxjQUNMUSxNQVppQixXQUNqQixHQUFJQyxJQUVGQyxNQUFNLEtBQ05DLE1BQU0sYUFDTkMsVUFBVSxHQUFJUixTQUFRUyxRQUFRLEVBQUcsRUFBRyxHQUNwQ0MsVUFBVSxHQUFJVixTQUFRUyxRQUFRLEVBQUcsRUFBRyxHQUNwQ0UsYUFBYSxFQUNiQyxnQkFBZ0IsRUFDaEJDLFVBQVUsR0FDVkMsTUFBTSxHQUNOQyxjQUFjLEVBQ2RDLGFBQWEsRUFDYkMsV0FBVyxFQUNYQyxXQUFXLEdBQ1hDLFFBQVEsS0FDUkMsU0FBUyxLQUNUQyxRQUFTLEVBQ1RDLFFBQVMsRUFDVEMsa0JBQWtCLEVBQ2xCQyxTQUFVLEVBQ1ZDLFNBQVUsRUFDVkMsV0FBVSxFQUNWQyxjQUFlLEtBQ2ZDLFVBRUYsT0FBT3ZCLE1BY1BULElBQUssT0FDTFEsTUFaVSxXQUNSLFFBQVN5QixLQUNSLE1BQU9DLE1BQUtDLE1BQTRCLE9BQXJCLEVBQUlELEtBQUtFLFdBQ3pCQyxTQUFTLElBQ1RDLFVBQVUsR0FFZixNQUFPTCxLQUFPQSxJQUFPLElBQU1BLElBQU8sSUFBTUEsSUFBTyxJQUM3Q0EsSUFBTyxJQUFNQSxJQUFPQSxJQUFPQSxPQVk5QmpDLElBQUssV0FDTFEsTUFWYyxTQUFDK0IsR0FDZixNQUFPQSxJQUFXTCxLQUFLTSxHQUFLLFFBYTVCeEMsSUFBSyxRQUNMUSxNQVhXLFdBWVYsR0FaV2lDLEdBQUNDLFVBQUFqRCxRQUFBLEdBQUFrRCxTQUFBRCxVQUFBLEdBQUcsSUFBR0EsVUFBQSxHQUFDRSxFQUFDRixVQUFBakQsUUFBQSxHQUFBa0QsU0FBQUQsVUFBQSxHQUFHLEVBQUNBLFVBQUEsR0FBQ0csRUFBQ0gsVUFBQWpELFFBQUEsR0FBQWtELFNBQUFELFVBQUEsR0FBRyxJQUFHQSxVQUFBLEdBQUNJLEVBQUNKLFVBQUFqRCxRQUFBLEdBQUFrRCxTQUFBRCxVQUFBLEdBQUcsS0FBSUEsVUFBQSxFQUMxQyxPQUFRLE9BQUxJLEVBQ0ssR0FBSTFDLFNBQVEyQyxPQUFPTixFQUFHRyxFQUFHQyxHQUV6QixHQUFJekMsU0FBUTRDLE9BQU9QLEVBQUdHLEVBQUdDLEVBQUdDLE1Bb0JwQzlDLElBQUssYUFDTFEsTUFmZ0IsV0FDaEIsR0FBSXlDLEdBQVMsR0FBSTdDLFNBQVE4QyxjQUFjM0MsS0FBSzRDLGVBV3RDNUMsTUFBSzZDLFdBQVdDLFFBQVEsU0FBU0MsR0FFaEMsUUFBU0MsS0FDZCxHQUFJQyxHQUFNUCxFQUFPUSxlQUFlSCxFQUFJSSxLQUFNSixFQUFJSyxJQUMzQ0gsR0FBSUksVUFBWSxTQUFTQyxHQUNqQnRELEtBQUt1RCxRQUFRRCxFQUFFSCxNQUFRRyxFQUFFRSxTQUMvQkMsS0FBS3pELE1BRVBpRCxFQUFJUyxRQUFVLFNBQVNKLEdBQ2xCSyxRQUFRQyxJQUFJTixFQUFFSCxLQUFPLHNCQUN4Qk0sS0FBS3pELE1BR0wsT0FBTytDLEVBQUljLE1BQ2IsSUFBSyxNQUNKYixHQUNHLE1BQ0osS0FBSyxRQUdELEtBQ0osS0FBSyxRQUVELEtBQ0osS0FBSyxNQUVELEtBQ0osU0FDSUEsRUFBU2MsTUFBTTlELE1BRXRCMEMsRUFBT3FCLFFBRUROLEtBQUt6RCxPQUdQMEMsRUFBT3NCLFNBQVdoRSxLQUFLaUUscUJBQXFCUixLQUFLekQsVUF0R25ERCxJQTZHTm1FLFFBQU9DLFFBQVVwRSIsImZpbGUiOiJjb3JlL2JhYnlsb25jZXMvdXRpbHMvdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQkFCWUxPTiA9IHJlcXVpcmUoJy4uL2xpYi9iYWJ5bG9uJyk7XG5jbGFzcyB1dGlsc3tcblxuXHRzdGF0aWMgZGVmYXVsdEFyZ3MoKXtcblx0XHR2YXIgX2RlZmF1bHRzID0gXG5cdFx0ICB7IFxuXHRcdFx0XHRfbmFtZTpudWxsLCBcblx0XHRcdFx0X3R5cGU6J0ZyZWVDYW1lcmEnLCBcblx0XHRcdFx0X3Bvc2l0aW9uOm5ldyBCQUJZTE9OLlZlY3RvcjMoMCwgMCwgMCksIFxuXHRcdFx0XHRfcm90YXRpb246bmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAwKSwgXG5cdFx0XHRcdF9kaWFtZXRlclRvcDozLFxuXHRcdFx0XHRfZGlhbWV0ZXJCb3R0b206Myxcblx0XHRcdFx0X2RpYW1ldGVyOjEwLjAsXG5cdFx0XHRcdF9zaXplOjEwLjAsXG5cdFx0XHRcdF9zdWJkaXZpc2lvbnM6Nixcblx0XHRcdFx0X3Rlc3NlbGF0aW9uOjYsXG5cdFx0XHRcdF90aGlja25lc3M6Myxcblx0XHRcdFx0X3NlZ2VtZW50czoxMC4wLFxuXHRcdFx0XHRfY2FudmFzOm51bGwsXG5cdFx0XHRcdF90ZXh0dXJlOm51bGwsXG5cdFx0XHRcdF91U2NhbGU6IDEuMCxcblx0XHRcdFx0X3ZTY2FsZTogMS4wLFxuXHRcdFx0XHRfYmFja0ZhY2VDdWxsaW5nOiB0cnVlLFxuXHRcdFx0XHRfdk9mZnNldDogMC4wLFxuXHRcdFx0XHRfdU9mZnNldDogMC4wLFxuXHRcdFx0XHRfaGFzQWxwaGE6ZmFsc2UsXG5cdFx0XHRcdF9kaWZmdXNlQ29sb3I6IG51bGwsXG5cdFx0XHRcdF9zY2VuZTp7fVxuXHRcdFx0fVxuXHRcdHJldHVybiBfZGVmYXVsdHM7XG5cdH1cblxuXHRzdGF0aWMgZ3VpZCgpIHtcbiAgXHQgZnVuY3Rpb24gczQoKSB7XG5cdCAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcblx0ICAgICAgLnRvU3RyaW5nKDE2KVxuXHQgICAgICAuc3Vic3RyaW5nKDEpO1xuXHQgIH1cblx0ICByZXR1cm4gczQoKSArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArXG5cdCAgICBzNCgpICsgJy0nICsgczQoKSArIHM0KCkgKyBzNCgpO1xuXHR9XG5cblx0c3RhdGljIGRlZ1RvUmFkKGRlZ3JlZXMpe1xuXHRcdHJldHVybiBkZWdyZWVzICogKE1hdGguUEkgLyAxODApO1xuXHR9XG5cblx0c3RhdGljIGNvbG9yKHIgPSAxMjUsZyA9IDAsYiA9IDEyNyxhID0gbnVsbCl7XG5cdFx0aWYoYSA9PSBudWxsKXtcblx0XHRcdHJldHVybiBuZXcgQkFCWUxPTi5Db2xvcjMociwgZywgYik7XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gbmV3IEJBQllMT04uQ29sb3I0KHIsIGcsIGIsIGEpO1xuXHRcdH1cblx0fVxuXG5cblxuXHRzdGF0aWMgYXNzZXRzTG9hZCgpe1xuXHRcdHZhciBsb2FkZXIgPSBuZXcgQkFCWUxPTi5Bc3NldHNNYW5hZ2VyKHRoaXMuX2NydXJyZW50U2NlbmUpO1xuXHRcdC8qXG5cdFx0c3RhdGljIGFzc2V0c0xvYWRcblx0XHRhcmd1bWVudHM6IFxuXHRcdGpzb25Bc3NldHMgPSBbXG4gICAgICAgICAgICB7bmFtZSA6IFwibG9nb1wiLCBzcmMgOiBcImJhcnR2ci9pbWcvYmFydFZSTG9nb19iLnBuZ1wiLCB0eXBlOiAnaW1hZ2UnIH0sXG4gICAgICAgICAgICB7bmFtZSA6IFwidGFyZ2V0Q2FtXCIsIHNyYzogXCJiYXJ0dnIvaW1nL3RhcmdldF9zbS5wbmdcIiwgdHlwZTogJ3ZpZGVvJ31cbiAgICAgICAgXTtcbiAgICAgICAgYXJndW1lbnRzOiBhc3NldEhvbGRlcixcbiAgICAgICAgYXJndW1lbnRzOiBjYWxsYmFjayB3aGVuIGZpbmluc2hlZCxcbiAgICAgICAgKi9cbiAgICAgICAgdGhpcy5qc29uQXNzZXRzLmZvckVhY2goZnVuY3Rpb24ob2JqKSB7XG5cblx0ICAgICAgICBmdW5jdGlvbiBpbWdBc3NldCgpe1xuXHRcdFx0XHR2YXIgaW1nID0gbG9hZGVyLmFkZFRleHR1cmVUYXNrKG9iai5uYW1lLCBvYmouc3JjKTtcblx0XHRcdCAgICBpbWcub25TdWNjZXNzID0gZnVuY3Rpb24odCkge1xuXHRcdFx0ICAgICAgICAgICAgdGhpcy5fYXNzZXRzW3QubmFtZV0gPSB0LnRleHR1cmU7XG5cdFx0XHQgICAgfS5iaW5kKHRoaXMpO1xuXG5cdFx0XHQgICAgaW1nLm9uRXJyb3IgPSBmdW5jdGlvbih0KSB7XG5cdFx0XHQgICAgICAgICBjb25zb2xlLmxvZyh0Lm5hbWUgKyAnIC0gZmFpbGVkIHRvIGxvYWQnKTtcblx0XHRcdCAgICB9LmJpbmQodGhpcyk7XG5cdFx0XHR9XG5cblx0ICAgICAgICBzd2l0Y2gob2JqLnR5cGUpIHtcblx0XHRcdCAgICBjYXNlICdpbWcnOlxuXHRcdFx0ICAgIFx0aW1nQXNzZXQoKTtcblx0XHRcdCAgICAgICAgYnJlYWs7XG5cdFx0XHQgICAgY2FzZSAnYXVkaW8nOlxuXHRcdFx0ICAgICAgICAvL3RvZG9cblx0XHRcdFx0XHRcblx0XHRcdCAgICAgICAgYnJlYWs7XG5cdFx0XHQgICAgY2FzZSAndmlkZW8nOlxuXHRcdFx0ICAgICAgICAvL3RvZG9cblx0XHRcdCAgICAgICAgYnJlYWs7XHRcblx0XHRcdCAgICBjYXNlICdoZHInOlxuXHRcdFx0ICAgICAgICAvL3RvZG9cblx0XHRcdCAgICAgICAgYnJlYWs7ICBcdCAgICBcdCAgICAgICAgICAgICAgICBcblx0XHRcdCAgICBkZWZhdWx0OlxuXHRcdFx0ICAgICAgICBpbWdBc3NldC5hcHBseSh0aGlzKTtcblx0XHRcdCB9XG5cdFx0XHQgbG9hZGVyLmxvYWQoKTtcblx0XHRcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICBcbiAgICAgICAgIFxuICAgICAgICBsb2FkZXIub25GaW5pc2ggPSB0aGlzLmFzc2V0TG9hZGluZ0ZpbmlzaGVkLmJpbmQodGhpcyk7XG5cblx0fVxuXHRcdFxuICAgICAgICBcblxufVx0XHRcdFx0XG5tb2R1bGUuZXhwb3J0cyA9IHV0aWxzO1xuXG5cblx0XHQiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=