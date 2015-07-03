"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),Carousel=function(){function e(n){var t=void 0===arguments[1]?{speed:4,fadeIn:!0,fadeDelay:250}:arguments[1];_classCallCheck(this,e),this._settings=t,this._selectorArr=document.querySelectorAll(n),this._elmArr=new CATAMARAN.Extend(n),this.init()}return _createClass(e,[{key:"init",value:function(){function e(){s=f[0].scrollWidth;var e=new CATAMARAN.Extend(".forward"),n=new CATAMARAN.Extend(".backward");CATAMARAN.isMobile()?(f[0].setAttribute("style","overflow-y:hidden; overflow-x:scroll"),f[0].scrollLeft=0,e.hide(),n.hide()):(f[0].setAttribute("style","overflow:visible"),f[0].scrollLeft=0,e.show(),n.show()),d._update()}for(var n=this,t=0,r=n._selectorArr.length;r>t;t++){var a,o,l,s,i,A=new CATAMARAN.Extend("."+n._elmArr[t].className),d=n._selectorArr[t],c='<span class="forward"></span>',u='<span class="backward"></span>',f=d.querySelectorAll(".reel"),w=d.querySelectorAll("article"),v=0;if(n._settings.fadeIn){for(var t=0,r=w.length;r>t;t++)w[t].classList.add("loading");A.onVisible(function(){var e,t=w.length-Math.ceil(window.innerWidth/l);e=window.setInterval(function(){var n=d.querySelectorAll(".loading"),r=n[0];if(n.length<=t){window.clearInterval(e);for(var a=0,o=w.length;o>a;a++)w[a].classList.remove("loading")}else"undefined"!=typeof r&&r.classList.remove("loading")},n._settings.fadeDelay)},50)}d._update=function(){v=0,o=-1*s+window.innerWidth,a=0,d._updatePos()},d._updatePos=function(){f[0].setAttribute("style","transform:translate("+v+"px, 0)")},d.insertAdjacentHTML("beforeEnd",c);var h=new CATAMARAN.Extend(".forward");h.hide(),CATAMARAN.Events.on(".forward","mouseenter",function(e){CATAMARAN.interval=window.setInterval(function(){v-=n._settings.speed,o>=v&&(window.clearInterval(CATAMARAN.interval),v=o),d._updatePos()},10)}),CATAMARAN.Events.on(".forward","mouseleave",function(e){window.clearInterval(CATAMARAN.interval)}),d.insertAdjacentHTML("beforeEnd",u);var C=new CATAMARAN.Extend(".backward");C.hide(),CATAMARAN.Events.on(".backward","mouseenter",function(e){CATAMARAN.interval=window.setInterval(function(){v+=n._settings.speed,v>=a&&(window.clearInterval(i),v=a),d._updatePos()},10)}),CATAMARAN.Events.on(".backward","mouseleave",function(e){window.clearInterval(CATAMARAN.interval)}),e(),CATAMARAN.Events.on("body","resize",function(n){e()})}}}]),e}();module.exports=Carousel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL0Nhcm91c2VsLmpzIl0sIm5hbWVzIjpbIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiQ2Fyb3VzZWwiLCJzZWxlY3RvciIsInNldHRpbmdzIiwidW5kZWZpbmVkIiwiYXJndW1lbnRzIiwic3BlZWQiLCJmYWRlSW4iLCJmYWRlRGVsYXkiLCJ0aGlzIiwiX3NldHRpbmdzIiwiX3NlbGVjdG9yQXJyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiX2VsbUFyciIsIkNBVEFNQVJBTiIsIkV4dGVuZCIsImluaXQiLCJ2YWx1ZSIsInNldHVwQ2Fyb3VzZWwiLCJyZWVsV2lkdGgiLCJyZWVsIiwic2Nyb2xsV2lkdGgiLCJmb3J3YXJkQyIsImJhY2t3YXJkQyIsImlzTW9iaWxlIiwic2V0QXR0cmlidXRlIiwic2Nyb2xsTGVmdCIsImhpZGUiLCJzaG93IiwiZWxtIiwiX3VwZGF0ZSIsIl9jYXJvdXNlbCIsImxlbiIsImxlZnRMaW1pdCIsInJpZ2h0TGltaXQiLCJpdGVtV2lkdGgiLCJ0aW1lcklkIiwic2VsZiIsImNsYXNzTmFtZSIsImZvcndhcmQiLCJiYWNrd2FyZCIsIml0ZW1zIiwicG9zIiwiY2xhc3NMaXN0IiwiYWRkIiwib25WaXNpYmxlIiwibGltaXQiLCJNYXRoIiwiY2VpbCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJzZXRJbnRlcnZhbCIsIngiLCJ4ZiIsImNsZWFySW50ZXJ2YWwiLCJyZW1vdmUiLCJfdXBkYXRlUG9zIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiX2ZvcndhcmQiLCJFdmVudHMiLCJvbiIsImUiLCJpbnRlcnZhbCIsIl9iYWNrd2FyZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLFlBSUEsU0FBU0EsaUJBQWdCQyxFQUFVQyxHQUFlLEtBQU1ELFlBQW9CQyxJQUFnQixLQUFNLElBQUlDLFdBQVUscUNBRmhILEdBQUlDLGNBQWUsV0FBZSxRQUFTQyxHQUFpQkMsRUFBUUMsR0FBUyxJQUFLLEdBQUlDLEdBQUksRUFBR0EsRUFBSUQsRUFBTUUsT0FBUUQsSUFBSyxDQUFFLEdBQUlFLEdBQWFILEVBQU1DLEVBQUlFLEdBQVdDLFdBQWFELEVBQVdDLGFBQWMsRUFBT0QsRUFBV0UsY0FBZSxFQUFVLFNBQVdGLEtBQVlBLEVBQVdHLFVBQVcsR0FBTUMsT0FBT0MsZUFBZVQsRUFBUUksRUFBV00sSUFBS04sSUFBaUIsTUFBTyxVQUFVUixFQUFhZSxFQUFZQyxHQUFpSixNQUE5SEQsSUFBWVosRUFBaUJILEVBQVlpQixVQUFXRixHQUFpQkMsR0FBYWIsRUFBaUJILEVBQWFnQixHQUFxQmhCLE1BRjNoQmtCLFNBQVEsV0FTRCxRQVRQQSxHQVNRQyxHQU9OLEdBUGdCQyxHQUFRQyxTQUFBQyxVQUFBLElBQUtDLE1BQU8sRUFBRUMsUUFBUSxFQUFNQyxVQUFXLEtBQUtILFVBQUEsRUFTcEV4QixpQkFBZ0I0QixLQWxCbEJSLEdBVU9RLEtBQUtDLFVBQVlQLEVBQ2pCTSxLQUFLRSxhQUFlQyxTQUFTQyxpQkFBaUJYLEdBQzlDTyxLQUFLSyxRQUFVLEdBQUlDLFdBQVVDLE9BQU9kLEdBQ3BDTyxLQUFLUSxPQW1JZCxNQXRIQWhDLGNBMUJFZ0IsSUEyQkVKLElBQUssT0FDTHFCLE1BWkYsV0FvR00sUUFBU0MsS0FDTEMsRUFBWUMsRUFBSyxHQUFHQyxXQUNwQixJQUFJQyxHQUFZLEdBQUlSLFdBQVVDLE9BQU8sWUFDakNRLEVBQWEsR0FBSVQsV0FBVUMsT0FBTyxZQUNsQ0QsV0FBVVUsWUFDVkosRUFBSyxHQUFHSyxhQUFhLFFBQVMs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OiJ1aS9DYXJvdXNlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENhcm91c2Vse1xuXG4gICAgICAgLyoqXG4gICAgICAgKiBSZXByZXNlbnRzIENhdGFtYXJhbiBDb21wb25lbnQgdGhhdCBjcmVhdGVzIGEgc2ltcGxlIGNhcm9zZWwgd2luZG93LkNBVEFNQVJBTi51aS5jb21wb25lbnRzLkNhcm91c2VsICBcbiAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHRoZSBzZWxlY3RvciB1c2VzIHF1ZXJ5U2VsZWN0b3JBbGwgdHJ1bnMgdGhlIG9iamVjdCBpbnRvIGFuIGFycmF5IG9mIGVsZW1lbnRzIHRvIHVzZSB3aXRoIHdpbmRvdy5DQVRBTUFSQU4uRXh0ZW5kIG9iamVjdCBcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkZWZhdWx0IHNldHRpbmdzIGFyZSB7IHNwZWVkOiA0LGZhZGVJbjogdHJ1ZSwgZmFkZURlbGF5OiAyNTAgfS5cbiAgICAgICAqL1xuXG5cdFx0Y29uc3RydWN0b3Ioc2VsZWN0b3IsIHNldHRpbmdzID0geyBzcGVlZDogNCxmYWRlSW46IHRydWUsIGZhZGVEZWxheTogMjUwIH0pIHtcbiAgICAgICAgICAgIFx0dGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICAgICAgICAgIFx0dGhpcy5fc2VsZWN0b3JBcnIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIFx0dGhpcy5fZWxtQXJyID0gbmV3IENBVEFNQVJBTi5FeHRlbmQoc2VsZWN0b3IpO1xuICAgICAgICAgICAgXHR0aGlzLmluaXQoKVxuXHRcdH1cblxuXHRcdGluaXQoKXtcblx0XHRcdHZhciBfY2Fyb3VzZWwgPSB0aGlzO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IF9jYXJvdXNlbC5fc2VsZWN0b3JBcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGYgPSBuZXcgQ0FUQU1BUkFOLkV4dGVuZCgnLicgKyBfY2Fyb3VzZWwuX2VsbUFycltpXS5jbGFzc05hbWUpLFxuICAgICAgICAgICAgICAgICAgICBlbG0gPSAgX2Nhcm91c2VsLl9zZWxlY3RvckFycltpXSxcbiAgICAgICAgICAgICAgICAgICAgZm9yd2FyZCA9ICc8c3BhbiBjbGFzcz1cImZvcndhcmRcIj48L3NwYW4+JyxcbiAgICAgICAgICAgICAgICAgICAgYmFja3dhcmQgPSAnPHNwYW4gY2xhc3M9XCJiYWNrd2FyZFwiPjwvc3Bhbj4nLFxuICAgICAgICAgICAgICAgICAgICByZWVsID0gZWxtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWVsJyksXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zID0gZWxtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2FydGljbGUnKSxcbiAgICAgICAgICAgICAgICAgICAgcG9zID0gMCxcbiAgICAgICAgICAgICAgICAgICAgbGVmdExpbWl0LFxuICAgICAgICAgICAgICAgICAgICByaWdodExpbWl0LFxuICAgICAgICAgICAgICAgICAgICBpdGVtV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHJlZWxXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgdGltZXJJZDtcblxuICAgICAgICAgICAgICAgIGlmIChfY2Fyb3VzZWwuX3NldHRpbmdzLmZhZGVJbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMCwgbGVuID0gaXRlbXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zW2ldLmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5vblZpc2libGUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWVySWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0ID0gaXRlbXMubGVuZ3RoIC0gTWF0aC5jZWlsKHdpbmRvdy5pbm5lcldpZHRoIC8gaXRlbVdpZHRoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVySWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB4ID0gZWxtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5sb2FkaW5nJyksIHhmID0geFswXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoeC5sZW5ndGggPD0gbGltaXQpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGltZXJJZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDAsIGxlbiA9IGl0ZW1zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgeGYgIT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGYuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgX2Nhcm91c2VsLl9zZXR0aW5ncy5mYWRlRGVsYXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbG0uX3VwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0TGltaXQgPSAoLTEgKiByZWVsV2lkdGgpICsgd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0TGltaXQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxtLl91cGRhdGVQb3MoKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZWxtLl91cGRhdGVQb3MgPSBmdW5jdGlvbigpIHsgXG4gICAgICAgICAgICAgICAgXHRyZWVsWzBdLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAndHJhbnNmb3JtOnRyYW5zbGF0ZSgnICsgcG9zICsgJ3B4LCAwKScpfTtcbiAgICAgICAgICAgICAgICAgICAgZWxtLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlRW5kJyxmb3J3YXJkKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9mb3J3YXJkID0gbmV3IENBVEFNQVJBTi5FeHRlbmQoJy5mb3J3YXJkJyk7XG4gICAgICAgICAgICAgICAgICAgIF9mb3J3YXJkLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgQ0FUQU1BUkFOLkV2ZW50cy5vbignLmZvcndhcmQnLCAnbW91c2VlbnRlcicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDQVRBTUFSQU4uaW50ZXJ2YWwgID0gd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MgLT0gX2Nhcm91c2VsLl9zZXR0aW5ncy5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvcyA8PSByaWdodExpbWl0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChDQVRBTUFSQU4uaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zID0gcmlnaHRMaW1pdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbG0uX3VwZGF0ZVBvcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgQ0FUQU1BUkFOLkV2ZW50cy5vbignLmZvcndhcmQnLCAnbW91c2VsZWF2ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKENBVEFNQVJBTi5pbnRlcnZhbCk7ICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZWxtLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlRW5kJyxiYWNrd2FyZCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYmFja3dhcmQgPSAgbmV3IENBVEFNQVJBTi5FeHRlbmQoJy5iYWNrd2FyZCcpO1xuICAgICAgICAgICAgICAgICAgICBfYmFja3dhcmQuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICBDQVRBTUFSQU4uRXZlbnRzLm9uKCcuYmFja3dhcmQnLCAnbW91c2VlbnRlcicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDQVRBTUFSQU4uaW50ZXJ2YWwgID0gd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MgKz0gX2Nhcm91c2VsLl9zZXR0aW5ncy5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvcyA+PSBsZWZ0TGltaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRpbWVySWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zID0gbGVmdExpbWl0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsbS5fdXBkYXRlUG9zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgQ0FUQU1BUkFOLkV2ZW50cy5vbignLmJhY2t3YXJkJywgJ21vdXNlbGVhdmUnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChDQVRBTUFSQU4uaW50ZXJ2YWwpOyAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzZXR1cENhcm91c2VsKCk7ICBcbiAgICAgICAgICAgICAgICAgICAgQ0FUQU1BUkFOLkV2ZW50cy5vbignYm9keScsICdyZXNpemUnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR1cENhcm91c2VsKCk7ICAgXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICBcblxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldHVwQ2Fyb3VzZWwoKXtcbiAgICAgICAgICAgICAgICByZWVsV2lkdGggPSByZWVsWzBdLnNjcm9sbFdpZHRoO1xuICAgICAgICAgICAgICAgIHZhciBmb3J3YXJkQyA9ICBuZXcgQ0FUQU1BUkFOLkV4dGVuZCgnLmZvcndhcmQnKTtcbiAgICAgICAgICAgICAgICB2YXIgYmFja3dhcmRDID0gIG5ldyBDQVRBTUFSQU4uRXh0ZW5kKCcuYmFja3dhcmQnKTtcbiAgICAgICAgICAgICAgICBpZiAoQ0FUQU1BUkFOLmlzTW9iaWxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVlbFswXS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ292ZXJmbG93LXk6aGlkZGVuOyBvdmVyZmxvdy14OnNjcm9sbCcpO1xuICAgICAgICAgICAgICAgICAgICByZWVsWzBdLnNjcm9sbExlZnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICBmb3J3YXJkQy5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJhY2t3YXJkQy5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWVsWzBdLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnb3ZlcmZsb3c6dmlzaWJsZScpO1xuICAgICAgICAgICAgICAgICAgICByZWVsWzBdLnNjcm9sbExlZnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZm9yd2FyZEMuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICBiYWNrd2FyZEMuc2hvdygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbG0uX3VwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cdFx0XG4gICAgICAgICAgIFxuICAgICAgICAgICAgXG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYXJvdXNlbDsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=