"use strict";function _classCallCheck(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,a){for(var r=0;r<a.length;r++){var t=a[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(a,r,t){return r&&e(a.prototype,r),t&&e(a,t),a}}(),PhaserJS=function(){function e(){_classCallCheck(this,e),this.game=new Phaser.Game(window.innerWidth,window.innerHeight,Phaser.AUTO,"phaser-stage",{preload:self.preload,create:self.create,update:self.update})}return _createClass(e,[{key:"preload",value:function(){this.preloadBar=game.add.graphics(0,50),this.preloadBar.lineStyle(3,16777215,1),this.preloadBar.moveTo(0,0),this.preloadBar.lineTo(game.width,0),this.preloadBar.scale.x=0}},{key:"loadUpdate",value:function(){this.preloadBar.scale.x=.01*game.load.progress}},{key:"create",value:function(){}},{key:"update",value:function(){}}]),e}();module.exports=PhaserJS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL1BoYXNlci5qcyJdLCJuYW1lcyI6WyJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsIlBoYXNlckpTIiwidGhpcyIsImdhbWUiLCJQaGFzZXIiLCJHYW1lIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiQVVUTyIsInByZWxvYWQiLCJzZWxmIiwiY3JlYXRlIiwidXBkYXRlIiwidmFsdWUiLCJwcmVsb2FkQmFyIiwiYWRkIiwiZ3JhcGhpY3MiLCJsaW5lU3R5bGUiLCJtb3ZlVG8iLCJsaW5lVG8iLCJ3aWR0aCIsInNjYWxlIiwieCIsImxvYWQiLCJwcm9ncmVzcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLFlBSUEsU0FBU0EsaUJBQWdCQyxFQUFVQyxHQUFlLEtBQU1ELFlBQW9CQyxJQUFnQixLQUFNLElBQUlDLFdBQVUscUNBRmhILEdBQUlDLGNBQWUsV0FBZSxRQUFTQyxHQUFpQkMsRUFBUUMsR0FBUyxJQUFLLEdBQUlDLEdBQUksRUFBR0EsRUFBSUQsRUFBTUUsT0FBUUQsSUFBSyxDQUFFLEdBQUlFLEdBQWFILEVBQU1DLEVBQUlFLEdBQVdDLFdBQWFELEVBQVdDLGFBQWMsRUFBT0QsRUFBV0UsY0FBZSxFQUFVLFNBQVdGLEtBQVlBLEVBQVdHLFVBQVcsR0FBTUMsT0FBT0MsZUFBZVQsRUFBUUksRUFBV00sSUFBS04sSUFBaUIsTUFBTyxVQUFVUixFQUFhZSxFQUFZQyxHQUFpSixNQUE5SEQsSUFBWVosRUFBaUJILEVBQVlpQixVQUFXRixHQUFpQkMsR0FBYWIsRUFBaUJILEVBQWFnQixHQUFxQmhCLE1BRjNoQmtCLFNBQVEsV0FVRixRQVZOQSxLQWlCRXBCLGdCQUFnQnFCLEtBakJsQkQsR0FXTUMsS0FBS0MsS0FBTyxHQUFJQyxRQUFPQyxLQUFLQyxPQUFPQyxXQUFZRCxPQUFPRSxZQUFhSixPQUFPSyxLQUFNLGdCQUFrQkMsUUFBU0MsS0FBS0QsUUFBU0UsT0FBUUQsS0FBS0MsT0FBUUMsT0FBUUYsS0FBS0UsU0FxQ25LLE1BMUJBNUIsY0F0QkVnQixJQXVCRUosSUFBSyxVQUdMaUIsTUFaRyxXQUNIWixLQUFLYSxXQUFhWixLQUFLYSxJQUFJQyxTQUFTLEVBQUcsSUFDdkNmLEtBQUthLFdBQVdHLFVBQVUsRUFBRyxTQUFVLEdBQ3ZDaEIsS0FBS2EsV0FBV0ksT0FBTyxFQUFHLEdBQzFCakIsS0FBS2EsV0FBV0ssT0FBT2pCLEtBQUtrQixNQUFPLEdBQ25DbkIsS0FBS2EsV0FBV08sTUFBTUMsRUFBSSxLQWUxQjFCLElBQUssYUFDTGlCLE1BYk0sV0FHUlosS0FBS2EsV0FBV08sTUFBTUMsRUFBeUIsSUFBckJwQixLQUFLcUIsS0FBS0MsWUFnQmxDNUIsSUFBSyxTQUNMaUIsTUFiRSxlQWVGakIsSUFBSyxTQUNMaUIsTUFaRSxnQkFqQ0piLElBc0NOeUIsUUFBT0MsUUFBVTFCIiwiZmlsZSI6InVpL1BoYXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBoYXNlckpTe1xuXHQvL3BoYXNlciByZXF1aXJlcyB5b3UgdG8gbG9hZCBwaGFzZXJKUyBleHRlcm5hbGx5IGZpcnN0IHRvIHVzZSBpdCB3aXRoIGNhdGFtYXJhbkpTLlxuXG4gICAvKipcbiAgICogUmVwcmVzZW50cyBQaGFzZXJKUyBpbnRlZ3JhdGlvbiBpbnRvIENhdGFtYXJhbiB3aW5kb3cuQ0FUQU1BUkFOLnVpLnRvdy5QaGFzZXJKUyBmb3IgdXNlIHJlcXVpcmVzIG9yZ2luYWwgY29uc3RydWN0b3IgdG8gaGF2ZSB1c2VzUGhhc2VyIGVuYWJsZWQuIFJlcXVpcmVzXG4gICAqIFBoYXNlciB0byBiZSBpbmNsdWRlZCBhbmQgbG9hZGVkIGJlZm9yZSB0aGlzIGNhbiBiZSBpbnRpYWxpemVkLiBUaGUgZ29hbCBvZiB0aGlzIGlzIHRvIHNwZWVkIHVwIHRoZSB1c2Ugb2YgUGhhc2VySlMgYnkgY3JlYXRpbmcgaGVscGVycywganNvbiBvYmogZm9yIGxvYWRpbmcgb2Ygc2NlbmVzLlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogXG4gICAqL1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lID0gbmV3IFBoYXNlci5HYW1lKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQsIFBoYXNlci5BVVRPLCAncGhhc2VyLXN0YWdlJywgeyBwcmVsb2FkOiBzZWxmLnByZWxvYWQsIGNyZWF0ZTogc2VsZi5jcmVhdGUsIHVwZGF0ZTogc2VsZi51cGRhdGUgfSk7XG5cdH1cdFxuICAgIC8vaHR0cDovL3d3dy5odG1sNWdhbWVkZXZzLmNvbS90b3BpYy83MjgxLWNyZWF0aW5nLWEtcHJvZ3Jlc3NiYXIvXG4gICAgcHJlbG9hZCgpIHtcbiAgICAgICAgdGhpcy5wcmVsb2FkQmFyID0gZ2FtZS5hZGQuZ3JhcGhpY3MoMCwgNTApO1xuICAgICAgICB0aGlzLnByZWxvYWRCYXIubGluZVN0eWxlKDMsIDB4ZmZmZmZmLCAxKTtcbiAgICAgICAgdGhpcy5wcmVsb2FkQmFyLm1vdmVUbygwLCAwKTtcbiAgICAgICAgdGhpcy5wcmVsb2FkQmFyLmxpbmVUbyhnYW1lLndpZHRoLCAwKTtcbiAgICAgICAgdGhpcy5wcmVsb2FkQmFyLnNjYWxlLnggPSAwOyAvLyBzZXQgdGhlIGJhciB0byB0aGUgYmVnaW5uaW5nIHBvc2l0aW9uXG4gICAgfVxuXG4gICAgbG9hZFVwZGF0ZSgpIHtcbiAgICAgIC8vIGV2ZXJ5IGZyYW1lIGR1cmluZyBsb2FkaW5nLCBzZXQgdGhlIHNjYWxlLnggb2YgdGhlIGJhciB0byB0aGUgcHJvZ3Jlc3MgKGFuIGludGVnZXIgYmV0d2VlbiAwXG4gICAgICAvLyBhbmQgMTAwKSBkaXZpZGVkIGJ5IDEwMCB0byBnaXZlIGEgZmxvYXQgYmV0d2VlbiAwIGFuZCAxXG4gICAgICB0aGlzLnByZWxvYWRCYXIuc2NhbGUueCA9IGdhbWUubG9hZC5wcm9ncmVzcyAqIDAuMDE7XG4gICAgfVxuXG5cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBoYXNlckpTOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==