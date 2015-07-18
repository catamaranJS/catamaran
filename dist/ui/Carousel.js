"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,r,t){return r&&e(n.prototype,r),t&&e(n,t),n}}(),Carousel=function(){function e(n){var r=void 0===arguments[1]?{speed:4,fadeIn:!0,fadeDelay:250}:arguments[1];_classCallCheck(this,e),this._settings=r,this._selectorArr=document.querySelectorAll(n),this._elmArr=new CATAMARAN.core.DOM(n),this.init()}return _createClass(e,[{key:"init",value:function(){function e(){l=f[0].scrollWidth;var e=new CATAMARAN.core.DOM(".forward"),n=new CATAMARAN.core.DOM(".backward");CATAMARAN.isMobile()?(console.log(f[0]),f[0].className=f[0].className+" caroselTouch",f[0].scrollLeft=0,e.hide(),n.hide()):(f[0].setAttribute("style","overflow:visible"),f[0].scrollLeft=0,e.show(),n.show()),A._update()}for(var n=this,r=0,t=n._selectorArr.length;t>r;r++){var o,a,s,l,i,c=new CATAMARAN.core.DOM("."+n._elmArr[r].className),A=n._selectorArr[r],d='<span class="forward"></span>',u='<span class="backward"></span>',f=A.querySelectorAll(".reel"),w=A.querySelectorAll("article"),v=0;if(n._settings.fadeIn){for(var r=0,t=w.length;t>r;r++)w[r].classList.add("loading");c.onVisible(function(){var e,r=w.length-Math.ceil(window.innerWidth/s);e=window.setInterval(function(){var n=A.querySelectorAll(".loading"),t=n[0];if(n.length<=r){window.clearInterval(e);for(var o=0,a=w.length;a>o;o++)w[o].classList.remove("loading")}else"undefined"!=typeof t&&t.classList.remove("loading")},n._settings.fadeDelay)},50)}A._update=function(){v=0,a=-1*l+window.innerWidth,o=0,A._updatePos()},A._updatePos=function(){f[0].setAttribute("style","transform:translate("+v+"px, 0)")},A.insertAdjacentHTML("beforeEnd",d);var M=new CATAMARAN.core.DOM(".forward");M.hide(),CATAMARAN.core.Events.on(".forward","mouseenter",function(e){CATAMARAN.core.interval=window.setInterval(function(){v-=n._settings.speed,a>=v&&(window.clearInterval(CATAMARAN.core.interval),v=a),A._updatePos()},10)}),CATAMARAN.core.Events.on(".forward","mouseleave",function(e){window.clearInterval(CATAMARAN.core.interval)}),A.insertAdjacentHTML("beforeEnd",u);var h=new CATAMARAN.core.DOM(".backward");h.hide(),CATAMARAN.core.Events.on(".backward","mouseenter",function(e){CATAMARAN.core.interval=window.setInterval(function(){v+=n._settings.speed,v>=o&&(window.clearInterval(i),v=o),A._updatePos()},10)}),CATAMARAN.core.Events.on(".backward","mouseleave",function(e){window.clearInterval(CATAMARAN.core.interval)}),e(),CATAMARAN.core.Events.on("body","resize",function(n){e()})}}}]),e}();module.exports=Carousel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL0Nhcm91c2VsLmpzIl0sIm5hbWVzIjpbIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwiQ2Fyb3VzZWwiLCJzZWxlY3RvciIsInNldHRpbmdzIiwidW5kZWZpbmVkIiwiYXJndW1lbnRzIiwic3BlZWQiLCJmYWRlSW4iLCJmYWRlRGVsYXkiLCJ0aGlzIiwiX3NldHRpbmdzIiwiX3NlbGVjdG9yQXJyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiX2VsbUFyciIsIkNBVEFNQVJBTiIsImNvcmUiLCJET00iLCJpbml0IiwidmFsdWUiLCJzZXR1cENhcm91c2VsIiwicmVlbFdpZHRoIiwicmVlbCIsInNjcm9sbFdpZHRoIiwiZm9yd2FyZEMiLCJiYWNrd2FyZEMiLCJpc01vYmlsZSIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc05hbWUiLCJzY3JvbGxMZWZ0IiwiaGlkZSIsInNldEF0dHJpYnV0ZSIsInNob3ciLCJlbG0iLCJfdXBkYXRlIiwiX2Nhcm91c2VsIiwibGVuIiwibGVmdExpbWl0IiwicmlnaHRMaW1pdCIsIml0ZW1XaWR0aCIsInRpbWVySWQiLCJzZWxmIiwiZm9yd2FyZCIsImJhY2t3YXJkIiwiaXRlbXMiLCJwb3MiLCJjbGFzc0xpc3QiLCJhZGQiLCJvblZpc2libGUiLCJsaW1pdCIsIk1hdGgiLCJjZWlsIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInNldEludGVydmFsIiwieCIsInhmIiwiY2xlYXJJbnRlcnZhbCIsInJlbW92ZSIsIl91cGRhdGVQb3MiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJfZm9yd2FyZCIsIkV2ZW50cyIsIm9uIiwiZSIsImludGVydmFsIiwiX2JhY2t3YXJkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFJQSxTQUFTQSxpQkFBZ0JDLEVBQVVDLEdBQWUsS0FBTUQsWUFBb0JDLElBQWdCLEtBQU0sSUFBSUMsV0FBVSxxQ0FGaEgsR0FBSUMsY0FBZSxXQUFlLFFBQVNDLEdBQWlCQyxFQUFRQyxHQUFTLElBQUssR0FBSUMsR0FBSSxFQUFHQSxFQUFJRCxFQUFNRSxPQUFRRCxJQUFLLENBQUUsR0FBSUUsR0FBYUgsRUFBTUMsRUFBSUUsR0FBV0MsV0FBYUQsRUFBV0MsYUFBYyxFQUFPRCxFQUFXRSxjQUFlLEVBQVUsU0FBV0YsS0FBWUEsRUFBV0csVUFBVyxHQUFNQyxPQUFPQyxlQUFlVCxFQUFRSSxFQUFXTSxJQUFLTixJQUFpQixNQUFPLFVBQVVSLEVBQWFlLEVBQVlDLEdBQWlKLE1BQTlIRCxJQUFZWixFQUFpQkgsRUFBWWlCLFVBQVdGLEdBQWlCQyxHQUFhYixFQUFpQkgsRUFBYWdCLEdBQXFCaEIsTUFGM2hCa0IsU0FBUSxXQVNELFFBVFBBLEdBU1FDLEdBT04sR0FQZ0JDLEdBQVFDLFNBQUFDLFVBQUEsSUFBS0MsTUFBTyxFQUFFQyxRQUFRLEVBQU1DLFVBQVcsS0FBS0gsVUFBQSxFQVNwRXhCLGlCQUFnQjRCLEtBbEJsQlIsR0FVT1EsS0FBS0MsVUFBWVAsRUFDakJNLEtBQUtFLGFBQWVDLFNBQVNDLGlCQUFpQlgsR0FDOUNPLEtBQUtLLFFBQVUsR0FBSUMsV0FBVUMsS0FBS0MsSUFBSWYsR0FDdENPLEtBQUtTLE9Bb0lkLE1BdkhBakMsY0ExQkVnQixJQTJCRUosSUFBSyxPQUNMc0IsTUFaRixXQW9HTSxRQUFTQyxLQUNMQyxFQUFZQyxFQUFLLEdBQUdDLFdBQ3BCLElBQUlDLEdBQVksR0FBSVQsV0FBVUMsS0FBS0MsSUFBSSxZQUNuQ1EsRUFBYSxHQUFJVixXQUFVQyxLQUFLQyxJQUFJLFlBQ3BDRixXQUFVVyxZQUNWQyxRQUFRQyxJQUFJTixFQUFLLElBQ2pCQSxFQUFLLEdBQUdPLFVBQVlQLEVBQUssR0FBR08sVUFBYSxnQkFDekNQLEVBQUssR0FBR1EsV0FBYSxFQUNyQk4sRUFBU08sT0FDVE4sRUFBVU0sU0FHVlQsRUFBSyxHQUFHVSxhQUFhLFFBQVMsb0JBQzlCVixFQUFLLEdBQUdRLFdBQWEsRUFFckJOLEVBQVNTLE9BQ1RSLEVBQVVRLFFBRWRDLEVBQUlDLFVBcEhqQixJQUFLLEdBRERDLEdBQVkzQixLQUNQcEIsRUFBSSxFQUFHZ0QsRUFBTUQsRUFBVXpCLGFBQWFyQixPQUFZK0MsRUFBSmhELEVBQVNBLElBQUssQ0FDbEQsR0FPQWlELEdBQ0FDLEVBQ0FDLEVBQ0FuQixFQUNBb0IsRUFYSUMsRUFBTyxHQUFJM0IsV0FBVUMsS0FBS0MsSUFBSSxJQUFNbUIsRUFBVXRCLFFBQVF6QixHQUFHd0MsV0FDN0RLLEVBQU9FLEVBQVV6QixhQUFhdEIsR0FDOUJzRCxFQUFVLGdDQUNWQyxFQUFXLGlDQUNYdEIsRUFBT1ksRUFBSXJCLGlCQUFpQixTQUM1QmdDLEVBQVFYLEVBQUlyQixpQkFBaUIsV0FDN0JpQyxFQUFNLENBT1YsSUFBSVYsRUFBVTFCLFVBQVVILE9BQVEsQ0FDeEIsSUFBSSxHQUFJbEIsR0FBSSxFQUFHZ0QsRUFBTVEsRUFBTXZELE9BQVkrQyxFQUFKaEQsRUFBU0EsSUFDeEN3RCxFQUFNeEQsR0FBRzBELFVBQVVDLElBQUksVUFHM0JOLEdBQUtPLFVBQVUsV0FDWCxHQUFJUixHQUNBUyxFQUFRTCxFQUFNdkQsT0FBUzZELEtBQUtDLEtBQUtDLE9BQU9DLFdBQWFkLEVBRXpEQyxHQUFVWSxPQUFPRSxZQUFZLFdBQ3pCLEdBQUlDLEdBQUl0QixFQUFJckIsaUJBQWlCLFlBQWE0QyxFQUFLRCxFQUFFLEVBRWpELElBQUlBLEVBQUVsRSxRQUFVNEQsRUFBaEIsQ0FFSUcsT0FBT0ssY0FBY2pCLEVBRXJCLEtBQUksR0FBSXBELEdBQUksRUFBR2dELEVBQU1RLEVBQU12RCxPQUFZK0MsRUFBSmhELEVBQVNBLElBQ3hDd0QsRUFBTXhELEdBQUcwRCxVQUFVWSxPQUFPLGVBS2xCLG1CQUFORixJQUNOQSxFQUFHVixVQUFVWSxPQUFPLFlBRXpCdkIsRUFBVTFCLFVBQVVGLFlBQ3hCLElBR1gwQixFQUFJQyxRQUFVLFdBQ05XLEVBQU0sRUFDTlAsRUFBYyxHQUFLbEIsRUFBYWdDLE9BQU9DLFdBQ3ZDaEIsRUFBWSxFQUNaSixFQUFJMEIsY0FJWjFCLEVBQUkwQixXQUFhLFdBQ2hCdEMsRUFBSyxHQUFHVSxhQUFhLFFBQVMsdUJBQXlCYyxFQUFNLFdBQzFEWixFQUFJMkIsbUJBQW1CLFlBQVlsQixFQUNuQyxJQUFJbUIsR0FBVyxHQUFJL0MsV0FBVUMsS0FBS0MsSUFBSSxXQUN0QzZDLEdBQVMvQixPQUNUaEIsVUFBVUMsS0FBSytDLE9BQU9DLEdBQUcsV0FBWSxhQUFjLFNBQVNDLEdBQ3BEbEQsVUFBVUMsS0FBS2tELFNBQVliLE9BQU9FLFlBQVksV0FDMUNULEdBQU9WLEVBQVUxQixVQUFVSixNQUNoQmlDLEdBQVBPLElBRUFPLE9BQU9LLGNBQWMzQyxVQUFVQyxLQUFLa0QsVUFDcENwQixFQUFNUCxHQUVWTCxFQUFJMEIsY0FDTCxNQUdYN0MsVUFBVUMsS0FBSytDLE9BQU9DLEdBQUcsV0FBWSxhQUFjLFNBQVNDLEdBQ3hEWixPQUFPSyxjQUFjM0MsVUFBVUMsS0FBS2tELFlBR3hDaEMsRUFBSTJCLG1CQUFtQixZQUFZakIsRUFDbkMsSUFBSXVCLEdBQWEsR0FBSXBELFdBQVVDLEtBQUtDLElBQUksWUFDeENrRCxHQUFVcEMsT0FDVmhCLFVBQVVDLEtBQUsrQyxPQUFPQyxHQUFHLFlBQWEsYUFBYyxTQUFTQyxHQUNyRGxELFVBQVVDLEtBQUtrRCxTQUFZYixPQUFPRSxZQUFZLFdBQzFDVCxHQUFPVixFQUFVMUIsVUFBVUosTUFDdkJ3QyxHQUFPUixJQUNQZSxPQUFPSyxjQUFjakIsR0FDckJLLEVBQU1SLEdBRVZKLEVBQUkwQixjQUNMLE1BRVg3QyxVQUFVQyxLQUFLK0MsT0FBT0MsR0FBRyxZQUFhLGFBQWMsU0FBU0MsR0FDekRaLE9BQU9LLGNBQWMzQyxVQUFVQyxLQUFLa0QsWUFFeEM5QyxJQUNBTCxVQUFVQyxLQUFLK0MsT0FBT0MsR0FBRyxPQUFRLFNBQVUsU0FBU0MsR0FDaEQ3QyxXQTVHbEJuQixJQStJTm1FLFFBQU9DLFFBQVVwRSIsImZpbGUiOiJ1aS9DYXJvdXNlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENhcm91c2Vse1xuXG4gICAgICAgLyoqXG4gICAgICAgKiBSZXByZXNlbnRzIENhdGFtYXJhbiBDb21wb25lbnQgdGhhdCBjcmVhdGVzIGEgc2ltcGxlIGNhcm9zZWwgd2luZG93LkNBVEFNQVJBTi51aS5jb21wb25lbnRzLkNhcm91c2VsICBcbiAgICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHRoZSBzZWxlY3RvciB1c2VzIHF1ZXJ5U2VsZWN0b3JBbGwgdHJ1bnMgdGhlIG9iamVjdCBpbnRvIGFuIGFycmF5IG9mIGVsZW1lbnRzIHRvIHVzZSB3aXRoIHdpbmRvdy5DQVRBTUFSQU4uRXh0ZW5kIG9iamVjdCBcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkZWZhdWx0IHNldHRpbmdzIGFyZSB7IHNwZWVkOiA0LGZhZGVJbjogdHJ1ZSwgZmFkZURlbGF5OiAyNTAgfS5cbiAgICAgICAqL1xuXG5cdFx0Y29uc3RydWN0b3Ioc2VsZWN0b3IsIHNldHRpbmdzID0geyBzcGVlZDogNCxmYWRlSW46IHRydWUsIGZhZGVEZWxheTogMjUwIH0pIHtcbiAgICAgICAgICAgIFx0dGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICAgICAgICAgIFx0dGhpcy5fc2VsZWN0b3JBcnIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIFx0dGhpcy5fZWxtQXJyID0gbmV3IENBVEFNQVJBTi5jb3JlLkRPTShzZWxlY3Rvcik7XG4gICAgICAgICAgICBcdHRoaXMuaW5pdCgpXG5cdFx0fVxuXG5cdFx0aW5pdCgpe1xuXHRcdFx0dmFyIF9jYXJvdXNlbCA9IHRoaXM7XG5cdFx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gX2Nhcm91c2VsLl9zZWxlY3RvckFyci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IG5ldyBDQVRBTUFSQU4uY29yZS5ET00oJy4nICsgX2Nhcm91c2VsLl9lbG1BcnJbaV0uY2xhc3NOYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgZWxtID0gIF9jYXJvdXNlbC5fc2VsZWN0b3JBcnJbaV0sXG4gICAgICAgICAgICAgICAgICAgIGZvcndhcmQgPSAnPHNwYW4gY2xhc3M9XCJmb3J3YXJkXCI+PC9zcGFuPicsXG4gICAgICAgICAgICAgICAgICAgIGJhY2t3YXJkID0gJzxzcGFuIGNsYXNzPVwiYmFja3dhcmRcIj48L3NwYW4+JyxcbiAgICAgICAgICAgICAgICAgICAgcmVlbCA9IGVsbS5xdWVyeVNlbGVjdG9yQWxsKCcucmVlbCcpLFxuICAgICAgICAgICAgICAgICAgICBpdGVtcyA9IGVsbS5xdWVyeVNlbGVjdG9yQWxsKCdhcnRpY2xlJyksXG4gICAgICAgICAgICAgICAgICAgIHBvcyA9IDAsXG4gICAgICAgICAgICAgICAgICAgIGxlZnRMaW1pdCxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRMaW1pdCxcbiAgICAgICAgICAgICAgICAgICAgaXRlbVdpZHRoLFxuICAgICAgICAgICAgICAgICAgICByZWVsV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVySWQ7XG5cbiAgICAgICAgICAgICAgICBpZiAoX2Nhcm91c2VsLl9zZXR0aW5ncy5mYWRlSW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDAsIGxlbiA9IGl0ZW1zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtc1tpXS5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYub25WaXNpYmxlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aW1lcklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW1pdCA9IGl0ZW1zLmxlbmd0aCAtIE1hdGguY2VpbCh3aW5kb3cuaW5uZXJXaWR0aCAvIGl0ZW1XaWR0aCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lcklkID0gd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IGVsbS5xdWVyeVNlbGVjdG9yQWxsKCcubG9hZGluZycpLCB4ZiA9IHhbMF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHgubGVuZ3RoIDw9IGxpbWl0KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRpbWVySWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAwLCBsZW4gPSBpdGVtcy5sZW5ndGg7IGkgPCBsZW47IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIHhmICE9ICd1bmRlZmluZWQnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhmLmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIF9jYXJvdXNlbC5fc2V0dGluZ3MuZmFkZURlbGF5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxtLl91cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcyA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodExpbWl0ID0gKC0xICogcmVlbFdpZHRoKSArIHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdExpbWl0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsbS5fdXBkYXRlUG9zKCk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGVsbS5fdXBkYXRlUG9zID0gZnVuY3Rpb24oKSB7IFxuICAgICAgICAgICAgICAgIFx0cmVlbFswXS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3RyYW5zZm9ybTp0cmFuc2xhdGUoJyArIHBvcyArICdweCwgMCknKX07XG4gICAgICAgICAgICAgICAgICAgIGVsbS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZUVuZCcsZm9yd2FyZCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfZm9yd2FyZCA9IG5ldyBDQVRBTUFSQU4uY29yZS5ET00oJy5mb3J3YXJkJyk7XG4gICAgICAgICAgICAgICAgICAgIF9mb3J3YXJkLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgQ0FUQU1BUkFOLmNvcmUuRXZlbnRzLm9uKCcuZm9yd2FyZCcsICdtb3VzZWVudGVyJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENBVEFNQVJBTi5jb3JlLmludGVydmFsICA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zIC09IF9jYXJvdXNlbC5fc2V0dGluZ3Muc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3MgPD0gcmlnaHRMaW1pdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoQ0FUQU1BUkFOLmNvcmUuaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zID0gcmlnaHRMaW1pdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbG0uX3VwZGF0ZVBvcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgQ0FUQU1BUkFOLmNvcmUuRXZlbnRzLm9uKCcuZm9yd2FyZCcsICdtb3VzZWxlYXZlJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoQ0FUQU1BUkFOLmNvcmUuaW50ZXJ2YWwpOyAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGVsbS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZUVuZCcsYmFja3dhcmQpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2JhY2t3YXJkID0gIG5ldyBDQVRBTUFSQU4uY29yZS5ET00oJy5iYWNrd2FyZCcpO1xuICAgICAgICAgICAgICAgICAgICBfYmFja3dhcmQuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICBDQVRBTUFSQU4uY29yZS5FdmVudHMub24oJy5iYWNrd2FyZCcsICdtb3VzZWVudGVyJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENBVEFNQVJBTi5jb3JlLmludGVydmFsICA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zICs9IF9jYXJvdXNlbC5fc2V0dGluZ3Muc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3MgPj0gbGVmdExpbWl0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aW1lcklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcyA9IGxlZnRMaW1pdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbG0uX3VwZGF0ZVBvcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIENBVEFNQVJBTi5jb3JlLkV2ZW50cy5vbignLmJhY2t3YXJkJywgJ21vdXNlbGVhdmUnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChDQVRBTUFSQU4uY29yZS5pbnRlcnZhbCk7ICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHNldHVwQ2Fyb3VzZWwoKTsgIFxuICAgICAgICAgICAgICAgICAgICBDQVRBTUFSQU4uY29yZS5FdmVudHMub24oJ2JvZHknLCAncmVzaXplJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dXBDYXJvdXNlbCgpOyAgIFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXR1cENhcm91c2VsKCl7XG4gICAgICAgICAgICAgICAgcmVlbFdpZHRoID0gcmVlbFswXS5zY3JvbGxXaWR0aDtcbiAgICAgICAgICAgICAgICB2YXIgZm9yd2FyZEMgPSAgbmV3IENBVEFNQVJBTi5jb3JlLkRPTSgnLmZvcndhcmQnKTtcbiAgICAgICAgICAgICAgICB2YXIgYmFja3dhcmRDID0gIG5ldyBDQVRBTUFSQU4uY29yZS5ET00oJy5iYWNrd2FyZCcpO1xuICAgICAgICAgICAgICAgIGlmIChDQVRBTUFSQU4uaXNNb2JpbGUoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZWVsWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgcmVlbFswXS5jbGFzc05hbWUgPSByZWVsWzBdLmNsYXNzTmFtZSAgKyAnIGNhcm9zZWxUb3VjaCc7XG4gICAgICAgICAgICAgICAgICAgIHJlZWxbMF0uc2Nyb2xsTGVmdCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvcndhcmRDLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYmFja3dhcmRDLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZWxbMF0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdvdmVyZmxvdzp2aXNpYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgIHJlZWxbMF0uc2Nyb2xsTGVmdCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBmb3J3YXJkQy5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIGJhY2t3YXJkQy5zaG93KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsbS5fdXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblx0XHRcbiAgICAgICAgICAgXG4gICAgICAgICAgICBcblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhcm91c2VsOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==