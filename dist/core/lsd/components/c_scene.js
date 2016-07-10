"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),CES=require("ces"),BABYLON=require("../lib/babylon"),c_scene=function(){function e(){var n=arguments.length<=0||void 0===arguments[0]?"scene":arguments[0];_classCallCheck(this,e),this.name=n,this.canvas,this.options={name:this.name,init:this.constructor,obj:null},Promise.all([document.querySelector("canvas")]).then(this.init.apply(this))}return _createClass(e,[{key:"init",value:function(){this.canvas=document.querySelector("canvas"),this.canvas.addEventListener("canvas_init",function(e){this.engine=new BABYLON.Engine(this.canvas,!0),this.scene=new BABYLON.Scene(this.engine),this.scene.clearColor=new BABYLON.Color4(0,0,0,1e-16),this.options.obj=this.scene,CES.Component.extend(this.options),document.querySelector("canvas").setAttribute("touch-action","none")}.bind(this),!1)}},{key:"finalize",value:function(){CES.Component.extend(this.options)}}]),e}();module.exports=c_scene;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvbHNkL2NvbXBvbmVudHMvY19zY2VuZS5qcyJdLCJuYW1lcyI6WyJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsIkNFUyIsInJlcXVpcmUiLCJCQUJZTE9OIiwiY19zY2VuZSIsIl9uYW1lIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwidGhpcyIsIm5hbWUiLCJjYW52YXMiLCJvcHRpb25zIiwiaW5pdCIsImNvbnN0cnVjdG9yIiwib2JqIiwiUHJvbWlzZSIsImFsbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRoZW4iLCJhcHBseSIsInZhbHVlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJlbmdpbmUiLCJFbmdpbmUiLCJzY2VuZSIsIlNjZW5lIiwiY2xlYXJDb2xvciIsIkNvbG9yNCIsIkNvbXBvbmVudCIsImV4dGVuZCIsInNldEF0dHJpYnV0ZSIsImJpbmQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUlBLFNBQVNBLGlCQUFnQkMsRUFBVUMsR0FBZSxLQUFNRCxZQUFvQkMsSUFBZ0IsS0FBTSxJQUFJQyxXQUFVLHFDQUZoSCxHQUFJQyxjQUFlLFdBQWUsUUFBU0MsR0FBaUJDLEVBQVFDLEdBQVMsSUFBSyxHQUFJQyxHQUFJLEVBQUdBLEVBQUlELEVBQU1FLE9BQVFELElBQUssQ0FBRSxHQUFJRSxHQUFhSCxFQUFNQyxFQUFJRSxHQUFXQyxXQUFhRCxFQUFXQyxhQUFjLEVBQU9ELEVBQVdFLGNBQWUsRUFBVSxTQUFXRixLQUFZQSxFQUFXRyxVQUFXLEdBQU1DLE9BQU9DLGVBQWVULEVBQVFJLEVBQVdNLElBQUtOLElBQWlCLE1BQU8sVUFBVVIsRUFBYWUsRUFBWUMsR0FBaUosTUFBOUhELElBQVlaLEVBQWlCSCxFQUFZaUIsVUFBV0YsR0FBaUJDLEdBQWFiLEVBQWlCSCxFQUFhZ0IsR0FBcUJoQixNQUY3aEJrQixJQUFNQyxRQUFRLE9BQ2RDLFFBQVVELFFBQVEsa0JBT2hCRSxRQUFPLFdBQ0QsUUFETkEsS0FTSixHQVJXQyxHQUFLQyxVQUFBaEIsUUFBQSxHQUFBaUIsU0FBQUQsVUFBQSxHQUFHLFFBQU9BLFVBQUEsRUFVMUJ6QixpQkFBZ0IyQixLQVhaSixHQUVKSSxLQUFLQyxLQUFPSixFQUNaRyxLQUFLRSxPQUNMRixLQUFLRyxTQUNKRixLQUFLRCxLQUFLQyxLQUNWRyxLQUFNSixLQUFLSyxZQUNYQyxJQUFJLE1BRUxDLFFBQVFDLEtBQUtDLFNBQVNDLGNBQWMsWUFBWUMsS0FBS1gsS0FBS0ksS0FBS1EsTUFBTVosT0FrQ3RFLE1BcEJBdkIsY0F2QkttQixJQXdCSlAsSUFBSyxPQUNMd0IsTUFiRyxXQUNGYixLQUFLRSxPQUFTTyxTQUFTQyxjQUFjLFVBQ3JDVixLQUFLRSxPQUFPWSxpQkFBaUIsY0FBZSxTQUFVQyxHQUNyRGYsS0FBS2dCLE9BQVMsR0FBSXJCLFNBQVFzQixPQUFPakIsS0FBS0UsUUFBUyxHQUMvQ0YsS0FBS2tCLE1BQVEsR0FBSXZCLFNBQVF3QixNQUFNbkIsS0FBS2dCLFFBQ3BDaEIsS0FBS2tCLE1BQU1FLFdBQWEsR0FBSXpCLFNBQVEwQixPQUFPLEVBQUUsRUFBRSxFQUFFLE9BQ2pEckIsS0FBS0csUUFBUUcsSUFBTU4sS0FBS2tCLE1BQ3hCekIsSUFBSTZCLFVBQVVDLE9BQU92QixLQUFLRyxTQUMxQk0sU0FBU0MsY0FBYyxVQUFVYyxhQUFhLGVBQWdCLFNBQzdEQyxLQUFLekIsT0FBTyxNQWdCZlgsSUFBSyxXQUNMd0IsTUFaTyxXQUNQcEIsSUFBSTZCLFVBQVVDLE9BQU92QixLQUFLRyxhQTNCdEJQLElBOEJOOEIsUUFBT0MsUUFBVS9CIiwiZmlsZSI6ImNvcmUvbHNkL2NvbXBvbmVudHMvY19zY2VuZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBDRVMgPSByZXF1aXJlKCdjZXMnKTtcbnZhciBCQUJZTE9OID0gcmVxdWlyZSgnLi4vbGliL2JhYnlsb24nKTtcbi8qKlxuICogLi4uXG4gKiBAYXV0aG9yIEJyZW5kb24gU21pdGhcbiAqIGh0dHA6Ly9zZWFjbG91ZDkub3JnXG4gKiBMaWdodFdlaWdodCAzRCBTeXN0ZW0gRGVzaWduIGVuZ2luZVxuICovXG5jbGFzcyBjX3NjZW5lIHtcblx0Y29uc3RydWN0b3IoX25hbWUgPSAnc2NlbmUnKXtcblx0XHR0aGlzLm5hbWUgPSBfbmFtZTtcblx0XHR0aGlzLmNhbnZhcztcblx0XHR0aGlzLm9wdGlvbnMgPSB7XG5cdFx0XHRuYW1lOnRoaXMubmFtZSxcblx0XHRcdGluaXQ6IHRoaXMuY29uc3RydWN0b3IsXG5cdFx0XHRvYmo6bnVsbFxuXHRcdH1cblx0XHRQcm9taXNlLmFsbChbZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyldKS50aGVuKHRoaXMuaW5pdC5hcHBseSh0aGlzKSk7XG5cdH1cblxuXHRpbml0KCl7XG5cdFx0XHR0aGlzLmNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xuXHRcdFx0dGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2FudmFzX2luaXQnLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHR0aGlzLmVuZ2luZSA9IG5ldyBCQUJZTE9OLkVuZ2luZSh0aGlzLmNhbnZhcyAsIHRydWUpO1xuXHRcdFx0XHR0aGlzLnNjZW5lID0gbmV3IEJBQllMT04uU2NlbmUodGhpcy5lbmdpbmUpO1xuXHRcdFx0XHR0aGlzLnNjZW5lLmNsZWFyQ29sb3IgPSBuZXcgQkFCWUxPTi5Db2xvcjQoMCwwLDAsMC4wMDAwMDAwMDAwMDAwMDAxKTsgXG5cdFx0XHRcdHRoaXMub3B0aW9ucy5vYmogPSB0aGlzLnNjZW5lO1xuXHRcdFx0XHRDRVMuQ29tcG9uZW50LmV4dGVuZCh0aGlzLm9wdGlvbnMpO1xuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKS5zZXRBdHRyaWJ1dGUoXCJ0b3VjaC1hY3Rpb25cIiwgJ25vbmUnKTtcblx0XHRcdH0uYmluZCh0aGlzKSwgZmFsc2UpO1xuXHR9XG5cblx0XG5cblx0ZmluYWxpemUoKXtcblx0XHRDRVMuQ29tcG9uZW50LmV4dGVuZCh0aGlzLm9wdGlvbnMpO1xuXHR9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGNfc2NlbmU7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9