"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),DOM=function(){function t(e){_classCallCheck(this,t);var n=document.querySelectorAll(e);this.length=n.length,this.children=[],navigator.userAgent.indexOf("Chrome")>-1?Object.assign(this,Array.prototype.slice.call(n)):Object.assign(this,n)}return _createClass(t,[{key:"each",value:function(t){var e=!0,n=!1,i=void 0;try{for(var s,r=Array.from(this)[Symbol.iterator]();!(e=(s=r.next()).done);e=!0){var a=s.value;t.call(a)}}catch(u){n=!0,i=u}finally{try{!e&&r["return"]&&r["return"]()}finally{if(n)throw i}}return this}},{key:"append",value:function(t){return this.each(function(){this.appendChild(t)})}},{key:"text",value:function(t){return this.each(function(){this.innerHTML=t})}},{key:"hide",value:function(){return this.each(function(){this.style.display="none"})}},{key:"show",value:function(){return this.each(function(){this.style.display="block"})}},{key:"onVisible",value:function(t){return this.each(function(){if(CATAMARAN.core.DOM.isVisible(this))t.call(this);else var e=setInterval(function(){CATAMARAN.core.DOM.isVisible(this)&&(t.call(this),clearInterval(e))},50)})}},{key:"addClass",value:function(t){return this.each(function(){this.classList.add(t)})}},{key:"removeClass",value:function(t){return this.each(function(){this.classList.remove(t)})}},{key:"hasClass",value:function(t){return this[0].classList.contains(t)}},{key:"toggle",value:function(t){var e=this;return this.each(function(){this.classList.contains(t)?e.removeClass(t):e.addClass(t)})}},{key:"on",value:function(t,e){return this.each(function(){this.addEventListener(t,e,!1)})}},{key:"off",value:function(t,e){return this.each(function(){this.removeEventListener(t,e,!1)})}},{key:"width",value:function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0],e=t;return null==e?this[0].offsetWidth:this.each(function(){this.style.width=e})}},{key:"height",value:function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0],e=t;return null==e?this[0].offsetHeight:this.each(function(){this.style.height=e})}},{key:"css",value:function(t){var e=t;return this.each(function(){for(var t in e)this.style[t]=e[t]})}}],[{key:"isVisible",value:function(t){return t.offsetWidth>0&&t.offsetHeight>0}}]),t}();module.exports=DOM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvZG9tL0RPTS5qcyJdLCJuYW1lcyI6WyJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsIkRPTSIsInNlbGVjdG9yIiwidGhpcyIsImVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2hpbGRyZW4iLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmRleE9mIiwiYXNzaWduIiwiQXJyYXkiLCJzbGljZSIsImNhbGwiLCJ2YWx1ZSIsImNhbGxiYWNrIiwiX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiIsIl9kaWRJdGVyYXRvckVycm9yIiwiX2l0ZXJhdG9yRXJyb3IiLCJ1bmRlZmluZWQiLCJfc3RlcCIsIl9pdGVyYXRvciIsImZyb20iLCJTeW1ib2wiLCJpdGVyYXRvciIsIm5leHQiLCJkb25lIiwiZWwiLCJlcnIiLCJhcHBlbmRFbGVtZW50cyIsImVhY2giLCJhcHBlbmRDaGlsZCIsIl90ZXh0IiwiaW5uZXJIVE1MIiwic3R5bGUiLCJkaXNwbGF5IiwiQ0FUQU1BUkFOIiwiY29yZSIsImlzVmlzaWJsZSIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiY29udGFpbnMiLCJzZWxmIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ3IiwiYXJndW1lbnRzIiwiX3ciLCJvZmZzZXRXaWR0aCIsIndpZHRoIiwiaCIsIl9oIiwib2Zmc2V0SGVpZ2h0IiwiaGVpZ2h0Iiwib2JqIiwiX29iaiIsIml0ZW0iLCJlbGVtZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFJQSxTQUFTQSxpQkFBZ0JDLEVBQVVDLEdBQWUsS0FBTUQsWUFBb0JDLElBQWdCLEtBQU0sSUFBSUMsV0FBVSxxQ0FGaEgsR0FBSUMsY0FBZSxXQUFlLFFBQVNDLEdBQWlCQyxFQUFRQyxHQUFTLElBQUssR0FBSUMsR0FBSSxFQUFHQSxFQUFJRCxFQUFNRSxPQUFRRCxJQUFLLENBQUUsR0FBSUUsR0FBYUgsRUFBTUMsRUFBSUUsR0FBV0MsV0FBYUQsRUFBV0MsYUFBYyxFQUFPRCxFQUFXRSxjQUFlLEVBQVUsU0FBV0YsS0FBWUEsRUFBV0csVUFBVyxHQUFNQyxPQUFPQyxlQUFlVCxFQUFRSSxFQUFXTSxJQUFLTixJQUFpQixNQUFPLFVBQVVSLEVBQWFlLEVBQVlDLEdBQWlKLE1BQTlIRCxJQUFZWixFQUFpQkgsRUFBWWlCLFVBQVdGLEdBQWlCQyxHQUFhYixFQUFpQkgsRUFBYWdCLEdBQXFCaEIsTUFGM2hCa0IsSUFBRyxXQU1NLFFBTlRBLEdBTVVDLEdBUVJyQixnQkFBZ0JzQixLQWRsQkYsRUFPRSxJQUFJRyxHQUFXQyxTQUFTQyxpQkFBaUJKLEVBQ3pDQyxNQUFLYixPQUFTYyxFQUFTZCxPQUN2QmEsS0FBS0ksWUFDRkMsVUFBVUMsVUFBVUMsUUFBUSxVQUFZLEdBQ3pDZixPQUFPZ0IsT0FBT1IsS0FBTVMsTUFBTVosVUFBVWEsTUFBTUMsS0FBS1YsSUFFL0NULE9BQU9nQixPQUFPUixLQUFNQyxHQStSMUIsTUE1UUFuQixjQWhDRWdCLElBaUNFSixJQUFLLE9BQ0xrQixNQVhBLFNBQUVDLEdBWUUsR0FBSUMsSUFBNEIsRUFDNUJDLEdBQW9CLEVBQ3BCQyxFQUFpQkMsTUFFckIsS0FmSixJQUFBLEdBQWdDQyxHQUFoQ0MsRUFBZ0JWLE1BQU1XLEtBQUtwQixNQUFLcUIsT0FBQUMsY0FBQVIsR0FBQUksRUFBQUMsRUFBQUksUUFBQUMsTUFBQVYsR0FBQSxFQUFHLENBaUJ2QixHQWpCRlcsR0FBRVAsRUFBQU4sS0FDUkMsR0FBU0YsS0FBTWMsSUFvQmIsTUFBT0MsR0FDTFgsR0FBb0IsRUFDcEJDLEVBQWlCVSxFQUNuQixRQUNFLEtBQ1NaLEdBQTZCSyxFQUFVLFdBQ3hDQSxFQUFVLFlBRWhCLFFBQ0UsR0FBSUosRUFDQSxLQUFNQyxJQTVCdEIsTUFBT2hCLFNBMENQTixJQUFLLFNBQ0xrQixNQW5DRSxTQUFDZSxHQUNMLE1BQU8zQixNQUFLNEIsS0FBSyxXQUNYNUIsS0FBSzZCLFlBQVlGLFFBNkNyQmpDLElBQUssT0FDTGtCLE1BckNBLFNBQUNrQixHQUNILE1BQU85QixNQUFLNEIsS0FBSyxXQUNYNUIsS0FBSytCLFVBQVlELE9BK0NyQnBDLElBQUssT0FDTGtCLE1BdkNBLFdBQ0EsTUFBT1osTUFBSzRCLEtBQUssV0FDYjVCLEtBQUtnQyxNQUFNQyxRQUFVLFlBaUR6QnZDLElBQUssT0FDTGtCLE1BeENBLFdBQ0EsTUFBT1osTUFBSzRCLEtBQUssV0FDYjVCLEtBQUtnQyxNQUFNQyxRQUFVLGFBa0R6QnZDLElBQUssWUFPTGtCLE1BckNLLFNBQUNDLEdBQ04sTUFBT2IsTUFBSzRCLEtBQUssV0FDYixHQUFJTSxVQUFVQyxLQUFLckMsSUFBSXNDLFVBQVVwQyxNQUM3QmEsRUFBU0YsS0FBS1gsVUFFZCxJQUFJcUMsR0FBUUMsWUFBWSxXQUNoQkosVUFBVUMsS0FBS3JDLElBQUlzQyxVQUFVcEMsUUFDN0JhLEVBQVNGLEtBQUtYLE1BQ2R1QyxjQUFjRixLQUVuQixTQWlEWDNDLElBQUssV0FDTGtCLE1BckNJLFNBQUU0QixHQUNOLE1BQU94QyxNQUFLNEIsS0FBSyxXQUNiNUIsS0FBS3lDLFVBQVVDLElBQUlGLFFBZ0R2QjlDLElBQUssY0FDTGtCLE1BdkNPLFNBQUU0QixHQUNULE1BQU94QyxNQUFLNEIsS0FBSyxXQUNiNUIsS0FBS3lDLFVBQVVFLE9BQU9ILFFBbUQxQjlDLElBQUssV0FDTGtCLE1BeENJLFNBQUU0QixHQUNOLE1BQU94QyxNQUFLLEdBQUd5QyxVQUFVRyxTQUFTSixNQW9EbEM5QyxJQUFLLFNBQ0xrQixNQXpDRSxTQUFDNEIsR0FDTCxHQUFJSyxHQUFPN0MsSUFDWCxPQUFPQSxNQUFLNEIsS0FBSyxXQUNSNUIsS0FBS3lDLFVBQVVHLFNBQVNKLEdBQ3pCSyxFQUFLQyxZQUFZTixHQUVqQkssRUFBS0UsU0FBU1AsUUFzRHBCOUMsSUFBSyxLQUNMa0IsTUEzQ0YsU0FBRW9DLEVBQU9uQyxHQUNQLE1BQU9iLE1BQUs0QixLQUFLLFdBQ2I1QixLQUFLaUQsaUJBQWlCRCxFQUFPbkMsR0FBVSxRQXVEM0NuQixJQUFLLE1BQ0xrQixNQTVDRCxTQUFFb0MsRUFBT25DLEdBQ1IsTUFBT2IsTUFBSzRCLEtBQUssV0FDYjVCLEtBQUtrRCxvQkFBb0JGLEVBQU9uQyxHQUFVLFFBd0Q5Q25CLElBQUssUUFDTGtCLE1BOUNDLFdBK0NHLEdBL0NGdUMsR0FBQ0MsVUFBQWpFLFFBQUEsR0FBQThCLFNBQUFtQyxVQUFBLEdBQUcsS0FBSUEsVUFBQSxHQUNSQyxFQUFLRixDQUNULE9BQVMsT0FBTkUsRUFDVXJELEtBQUssR0FBR3NELFlBRWR0RCxLQUFLNEIsS0FBSyxXQUNYNUIsS0FBS2dDLE1BQU11QixNQUFRRixPQTREdkIzRCxJQUFLLFNBQ0xrQixNQWxERSxXQW1ERSxHQW5ERDRDLEdBQUNKLFVBQUFqRSxRQUFBLEdBQUE4QixTQUFBbUMsVUFBQSxHQUFHLEtBQUlBLFVBQUEsR0FDVEssRUFBS0QsQ0FDVCxPQUFTLE9BQU5DLEVBQ1N6RCxLQUFLLEdBQUcwRCxhQUViMUQsS0FBSzRCLEtBQUssV0FDYjVCLEtBQUtnQyxNQUFNMkIsT0FBU0YsT0ErRHRCL0QsSUFBSyxNQUNMa0IsTUF0REQsU0FBRWdELEdBQ0QsR0FBSUMsR0FBT0QsQ0FDWCxPQUFPNUQsTUFBSzRCLEtBQUssV0FDZixJQUFJLEdBQUlrQyxLQUFRRCxHQUNkN0QsS0FBS2dDLE1BQU04QixHQUFRRCxFQUFLQyxVQTJENUJwRSxJQUFLLFlBQ0xrQixNQXROWSxTQUFDbUQsR0FDYixNQUFPQSxHQUFRVCxZQUFjLEdBQUtTLEVBQVFMLGFBQWUsTUFsRjNENUQsSUFtUE5rRSxRQUFPQyxRQUFVbkUiLCJmaWxlIjoiY29yZS9kb20vRE9NLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRE9NIHtcbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgRXh0ZW5kaW5nIGFuIGh0bWwgZWxlbWVudCBhY2NlcHRzIGFycmF5IG9mIGVsZW1lbnRzLlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHthcnJheX0gc2VsZWN0b3IgYWNjZXB0cyBqcXVlcnkgbGlrZSBzZWxlY3Rvci5cbiAgICovXG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gZWxlbWVudHMubGVuZ3RoO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgICAgIGlmKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lJykgPiAtMSl7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbGVtZW50cykpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGVsZW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgLyoqXG4gICAqIGxvb3BzIHRob3VnaCBldmVyeSBlbGVtZW50IGxpa2UganF1ZXJ5XG4gICAqIEBlYWNoXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259ICB0aGlzIGlzIHRoZSBjYWxsYmFja1xuICAgKi9cbiAgICBlYWNoKCBjYWxsYmFjayApIHtcbiAgICAgICAgZm9yICggbGV0IGVsIG9mIEFycmF5LmZyb20odGhpcykgKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKCBlbCApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGVuZHMgaXRlbXMgdG8gdGhlIERPTVxuICAgICAqIEBlYWNoXG4gICAgICogQHBhcmFtIHthcHBlbmRFbGVtZW50c30gdGhlIGVsbWVudHMgeW91IHdhbnQgdG8gYXBwZW5kXG4gICAgICovXG4gICAgYXBwZW5kKGFwcGVuZEVsZW1lbnRzKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChhcHBlbmRFbGVtZW50cyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICAvKipcbiAgICAgKiB0ZXh0IHJlcGxhY2VzIHRleHQgaW4gYSBzcGVjaWZpYyBkb20gZWxlbWVudFxuICAgICAqIEBlYWNoXG4gICAgICogQHBhcmFtIHt0ZXh0fSB0aGUgdGV4dCB5b3Ugd2FudCBpdCB0byBzaG93XG4gICAgICovXG4gICAgdGV4dCh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5pbm5lckhUTUwgPSB0ZXh0O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlcyBlbGVtZW50cyBpbiB0aGUgRE9NXG4gICAgICogQGVhY2hcbiAgICAgKi9cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3dzIGVsZW1lbnRzIGluIHRoZSBET01cbiAgICAgKiBAZWFjaFxuICAgICAqL1xuXG5cbiAgICBzaG93KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaXNWaXNpYmxlIGNoZWNrcyB0byBzZWUgaWYgZWxtZW50IGluIHRoZSBET00gaXMgdmlzaWJsZVxuICAgICAqIEBwYXJhbSB7ZWxlbWVudH0gIHRoZSBlbGVtZW50IGluIHBhcnRpY3VsYXIgeW91IGFyZSBjaGVja2luZ1xuICAgICAqL1xuXG5cbiAgICBzdGF0aWMgaXNWaXNpYmxlKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0V2lkdGggPiAwICYmIGVsZW1lbnQub2Zmc2V0SGVpZ2h0ID4gMDtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogb25WaXNpYmxlIHdoZW4gaXRlbSBiZWNhb21lcyB2aXNpYmxlIGxldHMgZG8gc29tZXRoaW5nIHRvIGl0XG4gICAgICogQHBhcmFtIHtjYWxsYmFja30gIGNhbGxiYWNrIGFjdGlvbiB0byBleGVjdXRlIHdoZW4gaXRlbSBiZWNvbWVzIHZpc2libGVcbiAgICAgKi9cblxuXG4gICAgb25WaXNpYmxlKGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoQ0FUQU1BUkFOLmNvcmUuRE9NLmlzVmlzaWJsZSh0aGlzKSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoQ0FUQU1BUkFOLmNvcmUuRE9NLmlzVmlzaWJsZSh0aGlzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogYWRkQ2xhc3MgYWRkcyBhIGNsYXNzIHRvIERPTSBlbGVtZW50c1xuICAgICAqIEBlYWNoXG4gICAgICogQHBhcmFtIHtjbGFzc05hbWV9IHRoZSBjbGFzcyB5b3Ugd2FudCB0byBhZGRcbiAgICAgKi9cblxuXG4gICAgYWRkQ2xhc3MoIGNsYXNzTmFtZSApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZW1vdmVDbGFzcyByZW1vdmVzIGEgY2xhc3MgdG8gRE9NIGVsZW1lbnRzXG4gICAgICogQGVhY2hcbiAgICAgKiBAcGFyYW0ge2NsYXNzTmFtZX0gdGhlIGNsYXNzIHlvdSB3YW50IHRvIHJlbW92ZVxuICAgICAqL1xuICAgIFxuICAgIHJlbW92ZUNsYXNzKCBjbGFzc05hbWUgKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAgLyoqXG4gICAgICogaGFzQ2xhc3MgY2hlY2tzIERPTSBlbGVtZW50cyB0byBzZWUgaWYgYSBjbGFzcyBpcyBwcmVzZW50IFxuICAgICAqIEBlYWNoXG4gICAgICogQHBhcmFtIHtjbGFzc05hbWV9IHRoZSBjbGFzcyB5b3Ugd2FudCB0byBsb29rIGZvclxuICAgICAqIEByZXR1cm4ge2Jvb2x9IHJldHVybnMgdHJ1ZSBvciBmYWxzZVxuICAgICAqL1xuXG4gICAgaGFzQ2xhc3MoIGNsYXNzTmFtZSApIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdG9nZ2xlIGNoZWNrcyBET00gZWxlbWVudHMgYWRkIGFkZHMgb3IgcmVtb3ZlcyBhIGNsYXNzXG4gICAgICogQGVhY2hcbiAgICAgKiBAcGFyYW0ge2NsYXNzTmFtZX0gdGhlIGNsYXNzIHlvdSB3YW50IHRvIHRvZ2dsZVxuICAgICAqIHRvZG8gcmVtb3ZlIHNlbGZcbiAgICAgKiBcbiAgICAgKi9cblxuXG4gICAgdG9nZ2xlKGNsYXNzTmFtZSl7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYodGhpcy5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSl7XG4gICAgICAgICAgICAgIHNlbGYucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICBzZWxmLmFkZENsYXNzKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICAgLyoqXG4gICAgICogb24gY2hlY2tzIERPTSBlbGVtZW50cyBhZGRzIGFuIGV2ZW50IHRvIGl0IHdpdGggYSBjYWxsYmFja1xuICAgICAqIEBlYWNoXG4gICAgICogQHBhcmFtIHtldmVudH0gdGhlIGV2ZW50IHR5cGUgeW91IHdhbnQgdG8gYXBwbHlcbiAgICAgKiBAcGFyYW0ge2NhbGxiYWNrfSB0aGUgY2FsbGJhY2sgeW91IHdhbnQgdG8gYXBwbHkgb24gdGhlIGdpdmVuIGV2ZW50XG4gICAgICovXG5cbiAgICBvbiggZXZlbnQsIGNhbGxiYWNrICkge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaywgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBvZmYgY2hlY2tzIERPTSBlbGVtZW50cyByZW1vdmVzIGFuIGV2ZW50IHRvIGl0IHdpdGggYSBjYWxsYmFja1xuICAgICAqIEBlYWNoXG4gICAgICogQHBhcmFtIHtldmVudH0gdGhlIGV2ZW50IHR5cGUgeW91IHdhbnQgdG8gcmVtb3Zlc1xuICAgICAqIEBwYXJhbSB7Y2FsbGJhY2t9IHRoZSBjYWxsYmFjayB5b3Ugd2FudCB0byByZW1vdmUgb24gdGhlIGdpdmVuIGV2ZW50XG4gICAgICovXG5cbiAgICBcbiAgICBvZmYoIGV2ZW50LCBjYWxsYmFjayApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogd2lkdGggc2V0cyB0aGUgd2lkdGggb2YgYSBkb20gZWxlbWVudCBpZiBubyB3aWR0aCBpcyBnaXZlbiBpdCByZXR1cm5zIHRoZSBpbnQgd2lkdGggb2YgdGhlIGl0ZW0gaW5zdGVhZCBvZiBzZXR0aW5nIGl0XG4gICAgICogQHBhcmFtIHt3aWR0aH0gdGhlIGFtb3VudCB5b3Ugd2FudCB0byBhcHBseVxuICAgICAqIEByZXR1cm4ge2ludH0gcmV0dXJucyB0aGUgd2lkdGggb2YgdGhlIGl0ZW1cbiAgICAgKiBAcmV0dXJuIHtlbG1lbnR9IGluIHRoZSBldmVudCB3aWR0aCBoYXMgYmVlbiBzZXQgaXQgd2lsbCByZXR1cm4gdGhlIGl0ZW0gYW5kIGFwcGx5IHRoZSB3aWR0aCBwcm92aWRlZFxuICAgICAqL1xuXG4gICAgd2lkdGgodyA9IG51bGwpe1xuICAgICAgdmFyIF93ID0gdztcbiAgICAgIGlmKF93ID09IG51bGwpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0V2lkdGg7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5zdHlsZS53aWR0aCA9IF93O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBoZWlnaHQgc2V0cyB0aGUgaGVpZ2h0IG9mIGEgZG9tIGVsZW1lbnQgaWYgbm8gaGVpZ2h0IGlzIGdpdmVuIGl0IHJldHVybnMgdGhlIGludCBoZWlnaHQgb2YgdGhlIGl0ZW0gaW5zdGVhZCBvZiBzZXR0aW5nIGl0XG4gICAgICogQHBhcmFtIHtoZWlnaHR9IHRoZSBhbW91bnQgeW91IHdhbnQgdG8gYXBwbHlcbiAgICAgKiBAcmV0dXJuIHtpbnR9IHJldHVybnMgdGhlIGhlaWdodCBvZiB0aGUgaXRlbVxuICAgICAqIEByZXR1cm4ge2VsbWVudH0gaW4gdGhlIGV2ZW50IGhlaWdodCBoYXMgYmVlbiBzZXQgaXQgd2lsbCByZXR1cm4gdGhlIGl0ZW0gYW5kIGFwcGx5IHRoZSBoZWlnaHQgcHJvdmlkZWRcbiAgICAgKi9cblxuICAgIGhlaWdodChoID0gbnVsbCl7XG4gICAgICB2YXIgX2ggPSBoO1xuICAgICAgaWYoX2ggPT0gbnVsbCl7XG4gICAgICAgICAgIHJldHVybiB0aGlzWzBdLm9mZnNldEhlaWdodDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBfaDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY3NzIHNldHMgYSBzZXJpZXMgb2YgY3NzIHN0eWxlcyBpbiBhIHNpbWlsYXIgbWFubmVyIHRvIGpRdWVyeVxuICAgICAqIEBlYWNoXG4gICAgICogQHBhcmFtIHtvYmp9IHRoZSBwcm9ycGVydGllcyBhbmQgcHJvcGVydHkgdmFsdWVzIHlvdSB3YW50IHRvIHNldCBleGFtcGxlOiB7aGVpZ2h0OjMwMHB4fSwge2hlaWdodDozMDBweCwgd2lkdGg6NDAwcHh9ICAgIFxuICAgICAqL1xuXG4gICAgY3NzKCBvYmogKSB7XG4gICAgICAgIHZhciBfb2JqID0gb2JqO1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGZvcih2YXIgaXRlbSBpbiBfb2JqKXtcbiAgICAgICAgICAgIHRoaXMuc3R5bGVbaXRlbV0gPSBfb2JqW2l0ZW1dO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxufVxubW9kdWxlLmV4cG9ydHMgPSBET007XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=