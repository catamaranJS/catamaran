"use strict";function _classCallCheck(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,a){for(var r=0;r<a.length;r++){var t=a[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(a,r,t){return r&&e(a.prototype,r),t&&e(a,t),a}}(),PhaserJS=function(){function e(){_classCallCheck(this,e),this.game=new Phaser.Game(window.innerWidth,window.innerHeight,Phaser.AUTO,"phaser-stage",{preload:self.preload,create:self.create,update:self.update})}return _createClass(e,[{key:"preload",value:function(){this.preloadBar=game.add.graphics(0,50),this.preloadBar.lineStyle(3,16777215,1),this.preloadBar.moveTo(0,0),this.preloadBar.lineTo(game.width,0),this.preloadBar.scale.x=0}},{key:"loadUpdate",value:function(){this.preloadBar.scale.x=.01*game.load.progress}},{key:"create",value:function(){}},{key:"update",value:function(){}}]),e}();exports.PhaserJS=PhaserJS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL1BoYXNlci5qcyJdLCJuYW1lcyI6WyJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImtleSIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsIlBoYXNlckpTIiwidGhpcyIsImdhbWUiLCJQaGFzZXIiLCJHYW1lIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiQVVUTyIsInByZWxvYWQiLCJzZWxmIiwiY3JlYXRlIiwidXBkYXRlIiwicHJlbG9hZEJhciIsImFkZCIsImdyYXBoaWNzIiwibGluZVN0eWxlIiwibW92ZVRvIiwibGluZVRvIiwid2lkdGgiLCJzY2FsZSIsIngiLCJsb2FkIiwicHJvZ3Jlc3MiXSwibWFwcGluZ3MiOiJBQUFBLFlBUUEsU0FBU0EsaUJBQWdCQyxFQUFVQyxHQUFlLEtBQU1ELFlBQW9CQyxJQUFnQixLQUFNLElBQUlDLFdBQVUscUNBTmhIQyxPQUFPQyxlQUFlQyxRQUFTLGNBQzNCQyxPQUFPLEdBR1gsSUFBSUMsY0FBZSxXQUFlLFFBQVNDLEdBQWlCQyxFQUFRQyxHQUFTLElBQUssR0FBSUMsR0FBSSxFQUFHQSxFQUFJRCxFQUFNRSxPQUFRRCxJQUFLLENBQUUsR0FBSUUsR0FBYUgsRUFBTUMsRUFBSUUsR0FBV0MsV0FBYUQsRUFBV0MsYUFBYyxFQUFPRCxFQUFXRSxjQUFlLEVBQVUsU0FBV0YsS0FBWUEsRUFBV0csVUFBVyxHQUFNYixPQUFPQyxlQUFlSyxFQUFRSSxFQUFXSSxJQUFLSixJQUFpQixNQUFPLFVBQVVaLEVBQWFpQixFQUFZQyxHQUFpSixNQUE5SEQsSUFBWVYsRUFBaUJQLEVBQVltQixVQUFXRixHQUFpQkMsR0FBYVgsRUFBaUJQLEVBQWFrQixHQUFxQmxCLE1BTnBoQm9CLFNBQVEsV0FVVCxRQVZDQSxLQXFCTHRCLGdCQUFnQnVCLEtBckJYRCxHQVdEQyxLQUFLQyxLQUFPLEdBQUlDLFFBQU9DLEtBQUtDLE9BQU9DLFdBQVlELE9BQU9FLFlBQWFKLE9BQU9LLEtBQU0sZ0JBQWtCQyxRQUFTQyxLQUFLRCxRQUFTRSxPQUFRRCxLQUFLQyxPQUFRQyxPQUFRRixLQUFLRSxTQXlDbkssTUF4QkExQixjQTVCU2MsSUE2QkxKLElBQUssVUFDTFgsTUFoQkcsV0FDSGdCLEtBQUtZLFdBQWFYLEtBQUtZLElBQUlDLFNBQVMsRUFBRyxJQUN2Q2QsS0FBS1ksV0FBV0csVUFBVSxFQUFHLFNBQVUsR0FDdkNmLEtBQUtZLFdBQVdJLE9BQU8sRUFBRyxHQUMxQmhCLEtBQUtZLFdBQVdLLE9BQU9oQixLQUFLaUIsTUFBTyxHQUNuQ2xCLEtBQUtZLFdBQVdPLE1BQU1DLEVBQUksS0FtQjFCekIsSUFBSyxhQUNMWCxNQWpCTSxXQUdSZ0IsS0FBS1ksV0FBV08sTUFBTUMsRUFBeUIsSUFBckJuQixLQUFLb0IsS0FBS0MsWUFvQmxDM0IsSUFBSyxTQUNMWCxNQWpCRSxlQW1CRlcsSUFBSyxTQUNMWCxNQWhCRSxnQkFqQ0dlLElBdURiaEIsU0FBUWdCLFNBQVdBIiwiZmlsZSI6InVpL1BoYXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQaGFzZXJKU3tcblx0Ly9waGFzZXIgcmVxdWlyZXMgeW91IHRvIGxvYWQgcGhhc2VySlMgZXh0ZXJuYWxseSBmaXJzdCB0byB1c2UgaXQgd2l0aCBjYXRhbWFyYW5KUy5cblxuICAgLyoqXG4gICAqIFJlcHJlc2VudHMgUGhhc2VySlMgaW50ZWdyYXRpb24gaW50byBDYXRhbWFyYW4gd2luZG93LkNBVEFNQVJBTi51aS50b3cuUGhhc2VySlMgZm9yIHVzZSByZXF1aXJlcyBvcmdpbmFsIGNvbnN0cnVjdG9yIHRvIGhhdmUgdXNlc1BoYXNlciBlbmFibGVkLiBSZXF1aXJlc1xuICAgKiBQaGFzZXIgdG8gYmUgaW5jbHVkZWQgYW5kIGxvYWRlZCBiZWZvcmUgdGhpcyBjYW4gYmUgaW50aWFsaXplZC4gVGhlIGdvYWwgb2YgdGhpcyBpcyB0byBzcGVlZCB1cCB0aGUgdXNlIG9mIFBoYXNlckpTIGJ5IGNyZWF0aW5nIGhlbHBlcnMsIGpzb24gb2JqIGZvciBsb2FkaW5nIG9mIHNjZW5lcy5cbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIFxuICAgKi9cblxuXHRjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0LCBQaGFzZXIuQVVUTywgJ3BoYXNlci1zdGFnZScsIHsgcHJlbG9hZDogc2VsZi5wcmVsb2FkLCBjcmVhdGU6IHNlbGYuY3JlYXRlLCB1cGRhdGU6IHNlbGYudXBkYXRlIH0pO1xuXHR9XHRcbiAgICAvL2h0dHA6Ly93d3cuaHRtbDVnYW1lZGV2cy5jb20vdG9waWMvNzI4MS1jcmVhdGluZy1hLXByb2dyZXNzYmFyL1xuICAgIHByZWxvYWQoKSB7XG4gICAgICAgIHRoaXMucHJlbG9hZEJhciA9IGdhbWUuYWRkLmdyYXBoaWNzKDAsIDUwKTtcbiAgICAgICAgdGhpcy5wcmVsb2FkQmFyLmxpbmVTdHlsZSgzLCAweGZmZmZmZiwgMSk7XG4gICAgICAgIHRoaXMucHJlbG9hZEJhci5tb3ZlVG8oMCwgMCk7XG4gICAgICAgIHRoaXMucHJlbG9hZEJhci5saW5lVG8oZ2FtZS53aWR0aCwgMCk7XG4gICAgICAgIHRoaXMucHJlbG9hZEJhci5zY2FsZS54ID0gMDsgLy8gc2V0IHRoZSBiYXIgdG8gdGhlIGJlZ2lubmluZyBwb3NpdGlvblxuICAgIH1cblxuICAgIGxvYWRVcGRhdGUoKSB7XG4gICAgICAvLyBldmVyeSBmcmFtZSBkdXJpbmcgbG9hZGluZywgc2V0IHRoZSBzY2FsZS54IG9mIHRoZSBiYXIgdG8gdGhlIHByb2dyZXNzIChhbiBpbnRlZ2VyIGJldHdlZW4gMFxuICAgICAgLy8gYW5kIDEwMCkgZGl2aWRlZCBieSAxMDAgdG8gZ2l2ZSBhIGZsb2F0IGJldHdlZW4gMCBhbmQgMVxuICAgICAgdGhpcy5wcmVsb2FkQmFyLnNjYWxlLnggPSBnYW1lLmxvYWQucHJvZ3Jlc3MgKiAwLjAxO1xuICAgIH1cblxuXG4gICAgY3JlYXRlKCkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIFxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=