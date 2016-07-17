"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),BABYLON=require("../lib/babylon"),utils=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"defaultArgs",value:function(){var e={_name:null,_cursor:null,_cursorVR1:null,_cursorVR2:null,_layerMask:268435455,_activeDialogLayer:268435456,_type:"FreeCamera",_position:new BABYLON.Vector3(0,0,0),_rotation:new BABYLON.Vector3(0,0,0),_diameterTop:3,_diameterBottom:3,_diameter:10,_size:10,_subdivisions:6,_tesselation:6,_thickness:3,_segements:10,_canvas:null,_material:{_texture:null,_uScale:1,_vScale:1,_backFaceCulling:!0,_vOffset:0,_uOffset:0,_hasAlpha:!1,_diffuseColor:null},_scene:{}};return e}},{key:"returnDefaultMaterial",value:function(){return{name:"default",_texture:null,_alpha:1,_uScale:1,_vScale:1,_backFaceCulling:!0,_vOffset:0,_uOffset:0,_hasAlpha:!1,_diffuseColor:null}}},{key:"guid",value:function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}},{key:"merge_objects",value:function(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n}},{key:"degToRad",value:function(e){return e*(Math.PI/180)}},{key:"color",value:function(){var e=arguments.length<=0||void 0===arguments[0]?125:arguments[0],t=arguments.length<=1||void 0===arguments[1]?0:arguments[1],n=arguments.length<=2||void 0===arguments[2]?127:arguments[2],r=arguments.length<=3||void 0===arguments[3]?null:arguments[3];return null==r?new BABYLON.Color3(e/255,t/255,n/255):new BABYLON.Color4(e/255,t/255,n/255,r)}},{key:"getMaterials",value:function(e,t){e.push(this.returnDefaultMaterial());for(var n=0;n<e.length;n++)if(e[n].name==t)return void 0!=typeof e[n]._diffuseColor&&null!=e[n]._diffuseColor&&(e[n]._diffuseColor=this.getColor(e[n]._diffuseColor)),e[n]}},{key:"getColor",value:function(e){return e=e.split(","),4!=e.length?this.color(parseInt(e[0]),parseInt(e[1]),parseInt(e[2])):this.color(parseInt(e[0]),parseInt(e[1]),parseInt(e[2]),parseFloat(e[3]))}},{key:"getVector",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?"position":arguments[1];return e=e.split(","),"position"==t?new BABYLON.Vector3(parseInt(e[0]),parseInt(e[1]),parseInt(e[2])):new BABYLON.Vector3(this.degToRad(parseInt(e[0])),this.degToRad(parseInt(e[1])),this.degToRad(parseInt(e[2])))}},{key:"assetsLoad",value:function(){var e=new BABYLON.AssetsManager(this._crurrentScene);this.jsonAssets.forEach(function(t){function n(){var n=e.addTextureTask(t.name,t.src);n.onSuccess=function(e){this._assets[e.name]=e.texture}.bind(this),n.onError=function(e){console.log(e.name+" - failed to load")}.bind(this)}switch(t.type){case"img":n();break;case"audio":break;case"video":break;case"hdr":break;default:n.apply(this)}e.load()}.bind(this)),e.onFinish=this.assetLoadingFinished.bind(this)}}]),e}();module.exports=utils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvbHNkL3V0aWxzL3V0aWxzLmpzIl0sIm5hbWVzIjpbIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiQkFCWUxPTiIsInJlcXVpcmUiLCJ1dGlscyIsInRoaXMiLCJ2YWx1ZSIsIl9kZWZhdWx0cyIsIl9uYW1lIiwiX2N1cnNvciIsIl9jdXJzb3JWUjEiLCJfY3Vyc29yVlIyIiwiX2xheWVyTWFzayIsIl9hY3RpdmVEaWFsb2dMYXllciIsIl90eXBlIiwiX3Bvc2l0aW9uIiwiVmVjdG9yMyIsIl9yb3RhdGlvbiIsIl9kaWFtZXRlclRvcCIsIl9kaWFtZXRlckJvdHRvbSIsIl9kaWFtZXRlciIsIl9zaXplIiwiX3N1YmRpdmlzaW9ucyIsIl90ZXNzZWxhdGlvbiIsIl90aGlja25lc3MiLCJfc2VnZW1lbnRzIiwiX2NhbnZhcyIsIl9tYXRlcmlhbCIsIl90ZXh0dXJlIiwiX3VTY2FsZSIsIl92U2NhbGUiLCJfYmFja0ZhY2VDdWxsaW5nIiwiX3ZPZmZzZXQiLCJfdU9mZnNldCIsIl9oYXNBbHBoYSIsIl9kaWZmdXNlQ29sb3IiLCJfc2NlbmUiLCJuYW1lIiwiX2FscGhhIiwiczQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsIm9iajEiLCJvYmoyIiwib2JqMyIsImF0dHJuYW1lIiwiZGVncmVlcyIsIlBJIiwiciIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsImciLCJiIiwiYSIsIkNvbG9yMyIsIkNvbG9yNCIsIl9tYXRlcmlhbHMiLCJwdXNoIiwicmV0dXJuRGVmYXVsdE1hdGVyaWFsIiwiZ2V0Q29sb3IiLCJfZGF0YVN0cmluZyIsInNwbGl0IiwiY29sb3IiLCJwYXJzZUludCIsInBhcnNlRmxvYXQiLCJ0eXBlIiwiZGVnVG9SYWQiLCJsb2FkZXIiLCJBc3NldHNNYW5hZ2VyIiwiX2NydXJyZW50U2NlbmUiLCJqc29uQXNzZXRzIiwiZm9yRWFjaCIsIm9iaiIsImltZ0Fzc2V0IiwiaW1nIiwiYWRkVGV4dHVyZVRhc2siLCJzcmMiLCJvblN1Y2Nlc3MiLCJ0IiwiX2Fzc2V0cyIsInRleHR1cmUiLCJiaW5kIiwib25FcnJvciIsImNvbnNvbGUiLCJsb2ciLCJhcHBseSIsImxvYWQiLCJvbkZpbmlzaCIsImFzc2V0TG9hZGluZ0ZpbmlzaGVkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFJQSxTQUFTQSxpQkFBZ0JDLEVBQVVDLEdBQWUsS0FBTUQsWUFBb0JDLElBQWdCLEtBQU0sSUFBSUMsV0FBVSxxQ0FGaEgsR0FBSUMsY0FBZSxXQUFlLFFBQVNDLEdBQWlCQyxFQUFRQyxHQUFTLElBQUssR0FBSUMsR0FBSSxFQUFHQSxFQUFJRCxFQUFNRSxPQUFRRCxJQUFLLENBQUUsR0FBSUUsR0FBYUgsRUFBTUMsRUFBSUUsR0FBV0MsV0FBYUQsRUFBV0MsYUFBYyxFQUFPRCxFQUFXRSxjQUFlLEVBQVUsU0FBV0YsS0FBWUEsRUFBV0csVUFBVyxHQUFNQyxPQUFPQyxlQUFlVCxFQUFRSSxFQUFXTSxJQUFLTixJQUFpQixNQUFPLFVBQVVSLEVBQWFlLEVBQVlDLEdBQWlKLE1BQTlIRCxJQUFZWixFQUFpQkgsRUFBWWlCLFVBQVdGLEdBQWlCQyxHQUFhYixFQUFpQkgsRUFBYWdCLEdBQXFCaEIsTUFGN2hCa0IsUUFBVUMsUUFBUSxrQkFDaEJDLE1BQUssV0FRVixRQVJLQSxLQVNKdEIsZ0JBQWdCdUIsS0FUWkQsR0E0UEwsTUFoUEFsQixjQVpLa0IsRUFBSyxPQWFUTixJQUFLLGNBUUxRLE1BZGlCLFdBSWpCLEdB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aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEJBQllMT04gPSByZXF1aXJlKCcuLi9saWIvYmFieWxvbicpO1xuY2xhc3MgdXRpbHN7XG4vKipcbiAqIC4uLlxuICogQGF1dGhvciBCcmVuZG9uIFNtaXRoXG4gKiBodHRwOi8vc2VhY2xvdWQ5Lm9yZ1xuICogTGlnaHRXZWlnaHQgM0QgU3lzdGVtIERlc2lnbiBlbmdpbmVcbiAqL1xuXHRzdGF0aWMgZGVmYXVsdEFyZ3MoKXtcblxuXG5cblx0XHR2YXIgX2RlZmF1bHRzID0gXG5cdFx0ICB7IFxuXHRcdFx0XHRfbmFtZTpudWxsLCBcblx0XHRcdFx0X2N1cnNvcjogbnVsbCxcblx0XHRcdFx0X2N1cnNvclZSMTogbnVsbCxcblx0XHRcdFx0X2N1cnNvclZSMjogbnVsbCxcblx0XHRcdFx0X2xheWVyTWFzazogMHgwRkZGRkZGRixcblx0XHRcdFx0X2FjdGl2ZURpYWxvZ0xheWVyOiAweDEwMDAwMDAwLFxuXHRcdFx0XHRfdHlwZTonRnJlZUNhbWVyYScsIFxuXHRcdFx0XHRfcG9zaXRpb246bmV3IEJBQllMT04uVmVjdG9yMygwLCAwLCAwKSwgXG5cdFx0XHRcdF9yb3RhdGlvbjpuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDAsIDApLCBcblx0XHRcdFx0X2RpYW1ldGVyVG9wOjMsXG5cdFx0XHRcdF9kaWFtZXRlckJvdHRvbTozLFxuXHRcdFx0XHRfZGlhbWV0ZXI6MTAuMCxcblx0XHRcdFx0X3NpemU6MTAuMCxcblx0XHRcdFx0X3N1YmRpdmlzaW9uczo2LFxuXHRcdFx0XHRfdGVzc2VsYXRpb246Nixcblx0XHRcdFx0X3RoaWNrbmVzczozLFxuXHRcdFx0XHRfc2VnZW1lbnRzOjEwLjAsXG5cdFx0XHRcdF9jYW52YXM6bnVsbCxcblx0XHRcdFx0X21hdGVyaWFsOntcblx0XHRcdFx0XHRfdGV4dHVyZTpudWxsLFxuXHRcdFx0XHRcdF91U2NhbGU6IDEuMCxcblx0XHRcdFx0XHRfdlNjYWxlOiAxLjAsXG5cdFx0XHRcdFx0X2JhY2tGYWNlQ3VsbGluZzogdHJ1ZSxcblx0XHRcdFx0XHRfdk9mZnNldDogMC4wLFxuXHRcdFx0XHRcdF91T2Zmc2V0OiAwLjAsXG5cdFx0XHRcdFx0X2hhc0FscGhhOmZhbHNlLFxuXHRcdFx0XHRcdF9kaWZmdXNlQ29sb3I6IG51bGwsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdF9zY2VuZTp7fVxuXHRcdFx0fVxuXHRcdHJldHVybiBfZGVmYXVsdHM7XG5cdH1cblxuXHQvKipcblx0ICogXG5cdCAqIHNldHNEZWZhdWx0TWF0ZXJpYWxcblx0ICovXG5cdHN0YXRpYyByZXR1cm5EZWZhdWx0TWF0ZXJpYWwoKXtcblx0XHQgcmV0dXJuIHtcblx0ICAgICAgXCJuYW1lXCI6IFwiZGVmYXVsdFwiLFxuXHQgICAgICBcIl90ZXh0dXJlXCI6IG51bGwsXG5cdCAgICAgIFwiX2FscGhhXCI6IDEsXG5cdCAgICAgIFwiX3VTY2FsZVwiOiAxLFxuXHQgICAgICBcIl92U2NhbGVcIjogMSxcblx0ICAgICAgXCJfYmFja0ZhY2VDdWxsaW5nXCI6IHRydWUsXG5cdCAgICAgIFwiX3ZPZmZzZXRcIjogMCxcblx0ICAgICAgXCJfdU9mZnNldFwiOiAwLFxuXHQgICAgICBcIl9oYXNBbHBoYVwiOiBmYWxzZSxcblx0ICAgICAgXCJfZGlmZnVzZUNvbG9yXCI6IG51bGxcblx0ICAgIH1cblx0fVxuXG5cdC8qKlxuXHQgKiBnZW5lcmF0ZXMgZ3VpZFxuXHQgKi9cblx0c3RhdGljIGd1aWQoKSB7XG4gIFx0IGZ1bmN0aW9uIHM0KCkge1xuXHQgICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXG5cdCAgICAgIC50b1N0cmluZygxNilcblx0ICAgICAgLnN1YnN0cmluZygxKTtcblx0ICB9XG5cdCAgcmV0dXJuIHM0KCkgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyAnLScgK1xuXHQgICAgczQoKSArICctJyArIHM0KCkgKyBzNCgpICsgczQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBPdmVyd3JpdGVzIG9iajEncyB2YWx1ZXMgd2l0aCBvYmoyJ3MgYW5kIGFkZHMgb2JqMidzIGlmIG5vbiBleGlzdGVudCBpbiBvYmoxXG5cdCAqIEBwYXJhbSBvYmoxXG5cdCAqIEBwYXJhbSBvYmoyXG5cdCAqIEByZXR1cm5zIG9iajMgYSBuZXcgb2JqZWN0IGJhc2VkIG9uIG9iajEgYW5kIG9iajJcblx0ICovXG5cdHN0YXRpYyBtZXJnZV9vYmplY3RzKG9iajEsb2JqMil7XG5cdCAgICB2YXIgb2JqMyA9IHt9O1xuXHQgICAgZm9yICh2YXIgYXR0cm5hbWUgaW4gb2JqMSkgeyBvYmozW2F0dHJuYW1lXSA9IG9iajFbYXR0cm5hbWVdOyB9XG5cdCAgICBmb3IgKHZhciBhdHRybmFtZSBpbiBvYmoyKSB7IG9iajNbYXR0cm5hbWVdID0gb2JqMlthdHRybmFtZV07IH1cblx0ICAgIHJldHVybiBvYmozO1xuXHR9XG5cblx0LyoqXG5cdCAqIGNvbnZlcnRzIGRlZ3JlZXMgdG8gcmFkaWFucyBcblx0ICogQHBhcmFtIGRlZ3JlZXNcblx0ICogQHJldHVybnMgcmV0dW5ycyBhIHJhZGlhblxuXHQgKi9cblx0c3RhdGljIGRlZ1RvUmFkKGRlZ3JlZXMpe1xuXHRcdHJldHVybiBkZWdyZWVzICogKE1hdGguUEkgLyAxODApO1xuXHR9XG5cblx0LyoqXG5cdCAqIHJldHVybnMgYSBjb2xvcjMgb3IgY29sb3I0IG9iamVjdFxuXHQgKiBAcGFyYW0gciAxIC0gMjU1XG5cdCAqIEBwYXJhbSBnIDEgLSAyNTVcblx0ICogQHBhcmFtIGIgMSAtIDI1NVxuXHQgKiBAcGFyYW0gYWxwaGEgZmxvYXQgMS4wIC0gMC4wXG5cdCAqIEByZXR1cm5zIHJldHVucnMgYSBjb2xvcjMgb3IgY29sb3I0XG5cdCAqL1xuXHRzdGF0aWMgY29sb3IociA9IDEyNSxnID0gMCxiID0gMTI3LGEgPSBudWxsKXtcblx0XHRpZihhID09IG51bGwpe1xuXHRcdFx0cmV0dXJuIG5ldyBCQUJZTE9OLkNvbG9yMygoci8yNTUpLCAoZy8yNTUpLCAoYi8yNTUpKTtcblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiBuZXcgQkFCWUxPTi5Db2xvcjQoKHIvMjU1KSwgKGcvMjU1KSwgKGIvMjU1KSwgYSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIHJldHVybnMgYSBjb2xvcjMgb3IgY29sb3I0IG9iamVjdFxuXHQgKiBAcGFyYW0gX21hdGVyaWFsc1xuXHQgKiBAcGFyYW0gX25hbWVcblx0ICogQHJldHVybnMgcmV0dW5ycyBhIE1hdGVyaWFsIGZvciB0aGUgb2JqZWN0XG5cdCAqL1xuXHRzdGF0aWMgZ2V0TWF0ZXJpYWxzKF9tYXRlcmlhbHMsIF9uYW1lKXtcblx0XHQvL1RPRE86IEltYWdlc1xuXHRcdF9tYXRlcmlhbHMucHVzaCh0aGlzLnJldHVybkRlZmF1bHRNYXRlcmlhbCgpKTtcblx0XHRcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgX21hdGVyaWFscy5sZW5ndGg7IGkrKyl7XG5cdFx0XHRpZihfbWF0ZXJpYWxzW2ldLm5hbWUgPT0gX25hbWUpe1xuXHRcdFx0XHRpZih0eXBlb2YgX21hdGVyaWFsc1tpXS5fZGlmZnVzZUNvbG9yICE9IHVuZGVmaW5lZCAmJiBfbWF0ZXJpYWxzW2ldLl9kaWZmdXNlQ29sb3IgIT0gbnVsbCl7XG5cdFx0XHRcdFx0X21hdGVyaWFsc1tpXS5fZGlmZnVzZUNvbG9yID0gdGhpcy5nZXRDb2xvcihfbWF0ZXJpYWxzW2ldLl9kaWZmdXNlQ29sb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBfbWF0ZXJpYWxzW2ldO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiByZXR1cm5zIGEgY29sb3Jcblx0ICogQHBhcmFtIF9kYXRhU3RyaW5nIGV4cGVjdHMgYSBjb2xvciBzdHJpbmcgbGlrZSBcIjEyNywgMTI5LCAwXCIgKFJHQikgaXIgXCIxMjcsIDEyOSwgMCwgMC41XCIgKFJHQkEpXG5cdCAqIEByZXR1cm5zIHJldHVucnMgYSBjb2xvciBvYmplY3QgYWZ0ZXIgZmV0Y2hpbmcgdGhlIGNvcnJlY3QgY29sb3IgdHlwZVxuXHQgKi9cblx0c3RhdGljIGdldENvbG9yKF9kYXRhU3RyaW5nKXtcblx0XHRfZGF0YVN0cmluZyA9IF9kYXRhU3RyaW5nLnNwbGl0KFwiLFwiKTtcblx0XHRpZihfZGF0YVN0cmluZy5sZW5ndGggIT0gNCl7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb2xvcihwYXJzZUludChfZGF0YVN0cmluZ1swXSksIHBhcnNlSW50KF9kYXRhU3RyaW5nWzFdKSwgcGFyc2VJbnQoX2RhdGFTdHJpbmdbMl0pKTtcblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiB0aGlzLmNvbG9yKHBhcnNlSW50KF9kYXRhU3RyaW5nWzBdKSwgcGFyc2VJbnQoX2RhdGFTdHJpbmdbMV0pLCBwYXJzZUludChfZGF0YVN0cmluZ1syXSksIHBhcnNlRmxvYXQoX2RhdGFTdHJpbmdbM10pKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogcmV0dXJucyBhIHZlY3RvclxuXHQgKiBAcGFyYW0gX2RhdGFTdHJpbmcgZXhwZWN0cyBhIHZlY290ciBzdHJpbmcgbGlrZSBcIjEyNywgMTI5LCAwXCIgXG5cdCAqIEByZXR1cm5zIHZlY3RvclxuXHQgKi9cblx0c3RhdGljIGdldFZlY3RvcihfZGF0YVN0cmluZywgdHlwZSA9IFwicG9zaXRpb25cIil7XG5cdFx0X2RhdGFTdHJpbmcgPSBfZGF0YVN0cmluZy5zcGxpdChcIixcIik7XG5cdFx0aWYodHlwZSA9PSBcInBvc2l0aW9uXCIpe1xuXHRcdFx0cmV0dXJuIG5ldyBCQUJZTE9OLlZlY3RvcjMocGFyc2VJbnQoX2RhdGFTdHJpbmdbMF0pLCBwYXJzZUludChfZGF0YVN0cmluZ1sxXSksIHBhcnNlSW50KF9kYXRhU3RyaW5nWzJdKSk7XG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gbmV3IEJBQllMT04uVmVjdG9yMyh0aGlzLmRlZ1RvUmFkKHBhcnNlSW50KF9kYXRhU3RyaW5nWzBdKSksIHRoaXMuZGVnVG9SYWQocGFyc2VJbnQoX2RhdGFTdHJpbmdbMV0pKSwgdGhpcy5kZWdUb1JhZChwYXJzZUludChfZGF0YVN0cmluZ1syXSkpKTtcblx0XHR9XG5cdFx0XG5cdH1cblxuXG5cdC8qXG5cdFx0bG9hZHMgYW4gYXNzZXQgXG5cdFx0c3RhdGljIGFzc2V0c0xvYWRcblx0XHRhcmd1bWVudHM6IFxuXHRcdGpzb25Bc3NldHMgPSBbXG4gICAgICAgICAgICB7bmFtZSA6IFwibG9nb1wiLCBzcmMgOiBcImJhcnR2ci9pbWcvYmFydFZSTG9nb19iLnBuZ1wiLCB0eXBlOiAnaW1hZ2UnIH0sXG4gICAgICAgICAgICB7bmFtZSA6IFwidGFyZ2V0Q2FtXCIsIHNyYzogXCJiYXJ0dnIvaW1nL3RhcmdldF9zbS5wbmdcIiwgdHlwZTogJ3ZpZGVvJ31cbiAgICAgICAgXTtcbiAgICAgICAgYXJndW1lbnRzOiBhc3NldEhvbGRlcixcbiAgICAgICAgYXJndW1lbnRzOiBjYWxsYmFjayB3aGVuIGZpbmluc2hlZCxcbiAgICAgICovXG5cblx0c3RhdGljIGFzc2V0c0xvYWQoKXtcblx0XHR2YXIgbG9hZGVyID0gbmV3IEJBQllMT04uQXNzZXRzTWFuYWdlcih0aGlzLl9jcnVycmVudFNjZW5lKTtcbiAgICAgICAgdGhpcy5qc29uQXNzZXRzLmZvckVhY2goZnVuY3Rpb24ob2JqKSB7XG5cblx0ICAgICAgICBmdW5jdGlvbiBpbWdBc3NldCgpe1xuXHRcdFx0XHR2YXIgaW1nID0gbG9hZGVyLmFkZFRleHR1cmVUYXNrKG9iai5uYW1lLCBvYmouc3JjKTtcblx0XHRcdCAgICBpbWcub25TdWNjZXNzID0gZnVuY3Rpb24odCkge1xuXHRcdFx0ICAgICAgICAgICAgdGhpcy5fYXNzZXRzW3QubmFtZV0gPSB0LnRleHR1cmU7XG5cdFx0XHQgICAgfS5iaW5kKHRoaXMpO1xuXG5cdFx0XHQgICAgaW1nLm9uRXJyb3IgPSBmdW5jdGlvbih0KSB7XG5cdFx0XHQgICAgICAgICBjb25zb2xlLmxvZyh0Lm5hbWUgKyAnIC0gZmFpbGVkIHRvIGxvYWQnKTtcblx0XHRcdCAgICB9LmJpbmQodGhpcyk7XG5cdFx0XHR9XG5cblx0ICAgICAgICBzd2l0Y2gob2JqLnR5cGUpIHtcblx0XHRcdCAgICBjYXNlICdpbWcnOlxuXHRcdFx0ICAgIFx0aW1nQXNzZXQoKTtcblx0XHRcdCAgICAgICAgYnJlYWs7XG5cdFx0XHQgICAgY2FzZSAnYXVkaW8nOlxuXHRcdFx0ICAgICAgICAvL3RvZG9cblx0XHRcdFx0XHRcblx0XHRcdCAgICAgICAgYnJlYWs7XG5cdFx0XHQgICAgY2FzZSAndmlkZW8nOlxuXHRcdFx0ICAgICAgICAvL3RvZG9cblx0XHRcdCAgICAgICAgYnJlYWs7XHRcblx0XHRcdCAgICBjYXNlICdoZHInOlxuXHRcdFx0ICAgICAgICAvL3RvZG9cblx0XHRcdCAgICAgICAgYnJlYWs7ICBcdCAgICBcdCAgICAgICAgICAgICAgICBcblx0XHRcdCAgICBkZWZhdWx0OlxuXHRcdFx0ICAgICAgICBpbWdBc3NldC5hcHBseSh0aGlzKTtcblx0XHRcdCB9XG5cdFx0XHQgbG9hZGVyLmxvYWQoKTtcblx0XHRcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgIFxuICAgICAgICBsb2FkZXIub25GaW5pc2ggPSB0aGlzLmFzc2V0TG9hZGluZ0ZpbmlzaGVkLmJpbmQodGhpcyk7XG5cblx0fVxuXHRcdFxuICAgICAgICBcblxufVx0XHRcdFx0XG5tb2R1bGUuZXhwb3J0cyA9IHV0aWxzO1xuXG5cblx0XHQiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=