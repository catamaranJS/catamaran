"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),DOM=function(){function e(t){_classCallCheck(this,e);var n=document.querySelectorAll(t);this.length=n.length,this.children=[],navigator.userAgent.indexOf("Chrome")>-1?Object.assign(this,Array.prototype.slice.call(n)):Object.assign(this,n)}return _createClass(e,[{key:"each",value:function(e){var t=!0,n=!1,i=void 0;try{for(var s,r=Array.from(this)[Symbol.iterator]();!(t=(s=r.next()).done);t=!0){var a=s.value;e.call(a)}}catch(u){n=!0,i=u}finally{try{!t&&r["return"]&&r["return"]()}finally{if(n)throw i}}return this}},{key:"append",value:function(e){return this.each(function(){this.appendChild(e)})}},{key:"text",value:function(e){return this.each(function(){this.innerHTML=e})}},{key:"hide",value:function(){return this.each(function(){this.style.display="none"})}},{key:"show",value:function(){return this.each(function(){this.style.display="block"})}},{key:"onVisible",value:function(e){return this.each(function(){if(CATAMARAN.core.DOM.isVisible(this))e.call(this);else var t=setInterval(function(){CATAMARAN.core.DOM.isVisible(this)&&(e.call(this),clearInterval(t))},50)})}},{key:"addClass",value:function(e){return this.each(function(){this.classList.add(e)})}},{key:"removeClass",value:function(e){return this.each(function(){this.classList.remove(e)})}},{key:"hasClass",value:function(e){return this[0].classList.contains(e)}},{key:"toggle",value:function(e){var t=this;return this.each(function(){this.classList.contains(e)?t.removeClass(e):t.addClass(e)})}},{key:"on",value:function(e,t){return this.each(function(){this.addEventListener(e,t,!1)})}},{key:"off",value:function(e,t){return this.each(function(){this.removeEventListener(e,t,!1)})}},{key:"width",value:function(){var e=arguments.length<=0||void 0===arguments[0]?null:arguments[0],t=e;return null==t?this[0].offsetWidth:this.each(function(){this.style.width=t})}},{key:"height",value:function(){var e=arguments.length<=0||void 0===arguments[0]?null:arguments[0],t=e;return null==t?this[0].offsetHeight:this.each(function(){this.style.height=t})}},{key:"css",value:function(e){var t=e;return this.each(function(){for(var e in t)this.style[e]=t[e]})}}],[{key:"isVisible",value:function(e){return e.offsetWidth>0&&e.offsetHeight>0}}]),e}();exports.DOM=DOM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvZG9tL0RPTS5qcyJdLCJuYW1lcyI6WyJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImtleSIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsIkRPTSIsInNlbGVjdG9yIiwidGhpcyIsImVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2hpbGRyZW4iLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmRleE9mIiwiYXNzaWduIiwiQXJyYXkiLCJzbGljZSIsImNhbGwiLCJjYWxsYmFjayIsIl9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24iLCJfZGlkSXRlcmF0b3JFcnJvciIsIl9pdGVyYXRvckVycm9yIiwidW5kZWZpbmVkIiwiX3N0ZXAiLCJfaXRlcmF0b3IiLCJmcm9tIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJuZXh0IiwiZG9uZSIsImVsIiwiZXJyIiwiYXBwZW5kRWxlbWVudHMiLCJlYWNoIiwiYXBwZW5kQ2hpbGQiLCJfdGV4dCIsImlubmVySFRNTCIsInN0eWxlIiwiZGlzcGxheSIsIkNBVEFNQVJBTiIsImNvcmUiLCJpc1Zpc2libGUiLCJ0aW1lciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImNvbnRhaW5zIiwic2VsZiIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJldmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidyIsImFyZ3VtZW50cyIsIl93Iiwib2Zmc2V0V2lkdGgiLCJ3aWR0aCIsImgiLCJfaCIsIm9mZnNldEhlaWdodCIsImhlaWdodCIsIm9iaiIsIl9vYmoiLCJpdGVtIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFRQSxTQUFTQSxpQkFBZ0JDLEVBQVVDLEdBQWUsS0FBTUQsWUFBb0JDLElBQWdCLEtBQU0sSUFBSUMsV0FBVSxxQ0FOaEhDLE9BQU9DLGVBQWVDLFFBQVMsY0FDM0JDLE9BQU8sR0FHWCxJQUFJQyxjQUFlLFdBQWUsUUFBU0MsR0FBaUJDLEVBQVFDLEdBQVMsSUFBSyxHQUFJQyxHQUFJLEVBQUdBLEVBQUlELEVBQU1FLE9BQVFELElBQUssQ0FBRSxHQUFJRSxHQUFhSCxFQUFNQyxFQUFJRSxHQUFXQyxXQUFhRCxFQUFXQyxhQUFjLEVBQU9ELEVBQVdFLGNBQWUsRUFBVSxTQUFXRixLQUFZQSxFQUFXRyxVQUFXLEdBQU1iLE9BQU9DLGVBQWVLLEVBQVFJLEVBQVdJLElBQUtKLElBQWlCLE1BQU8sVUFBVVosRUFBYWlCLEVBQVlDLEdBQWlKLE1BQTlIRCxJQUFZVixFQUFpQlAsRUFBWW1CLFVBQVdGLEdBQWlCQyxHQUFhWCxFQUFpQlAsRUFBYWtCLEdBQXFCbEIsTUFOcGhCb0IsSUFBRyxXQU1ELFFBTkZBLEdBTUdDLEdBWVJ2QixnQkFBZ0J3QixLQWxCWEYsRUFPTCxJQUFJRyxHQUFXQyxTQUFTQyxpQkFBaUJKLEVBQ3pDQyxNQUFLWCxPQUFTWSxFQUFTWixPQUN2QlcsS0FBS0ksWUFDRkMsVUFBVUMsVUFBVUMsUUFBUSxVQUFZLEdBQ3pDM0IsT0FBTzRCLE9BQU9SLEtBQU1TLE1BQU1aLFVBQVVhLE1BQU1DLEtBQUtWLElBRS9DckIsT0FBTzRCLE9BQU9SLEtBQU1DLEdBbVMxQixNQTVRQWpCLGNBcENTYyxJQXFDTEosSUFBSyxPQUNMWCxNQWZBLFNBQUU2QixHQWdCRSxHQUFJQyxJQUE0QixFQUM1QkMsR0FBb0IsRUFDcEJDLEVBQWlCQyxNQUVyQixLQW5CSixJQUFBLEdBQWdDQyxHQUFoQ0Ms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SytCLE1BQU04QixHQUFRRCxFQUFLQyxVQStENUJuRSxJQUFLLFlBQ0xYLE1BMU5ZLFNBQUMrRSxHQUNiLE1BQU9BLEdBQVFULFlBQWMsR0FBS1MsRUFBUUwsYUFBZSxNQWxGcEQzRCxJQW1UYmhCLFNBQVFnQixJQUFNQSIsImZpbGUiOiJjb3JlL2RvbS9ET00uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRE9NIHtcbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgRXh0ZW5kaW5nIGFuIGh0bWwgZWxlbWVudCBhY2NlcHRzIGFycmF5IG9mIGVsZW1lbnRzLlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHthcnJheX0gc2VsZWN0b3IgYWNjZXB0cyBqcXVlcnkgbGlrZSBzZWxlY3Rvci5cbiAgICovXG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gZWxlbWVudHMubGVuZ3RoO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgICAgIGlmKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lJykgPiAtMSl7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbGVtZW50cykpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGVsZW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgLyoqXG4gICAqIGxvb3BzIHRob3VnaCBldmVyeSBlbGVtZW50IGxpa2UganF1ZXJ5XG4gICAqIEBlYWNoXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259ICB0aGlzIGlzIHRoZSBjYWxsYmFja1xuICAgKi9cbiAgICBlYWNoKCBjYWxsYmFjayApIHtcbiAgICAgICAgZm9yICggbGV0IGVsIG9mIEFycmF5LmZyb20odGhpcykgKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKCBlbCApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGVuZHMgaXRlbXMgdG8gdGhlIERPTVxuICAgICAqIEBlYWNoXG4gICAgICogQHBhcmFtIHthcHBlbmRFbGVtZW50c30gdGhlIGVsbWVudHMgeW91IHdhbnQgdG8gYXBwZW5kXG4gICAgICovXG4gICAgYXBwZW5kKGFwcGVuZEVsZW1lbnRzKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChhcHBlbmRFbGVtZW50cyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICAvKipcbiAgICAgKiB0ZXh0IHJlcGxhY2VzIHRleHQgaW4gYSBzcGVjaWZpYyBkb20gZWxlbWVudFxuICAgICAqIEBlYWNoXG4gICAgICogQHBhcmFtIHt0ZXh0fSB0aGUgdGV4dCB5b3Ugd2FudCBpdCB0byBzaG93XG4gICAgICovXG4gICAgdGV4dCh0ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5pbm5lckhUTUwgPSB0ZXh0O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlcyBlbGVtZW50cyBpbiB0aGUgRE9NXG4gICAgICogQGVhY2hcbiAgICAgKi9cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3dzIGVsZW1lbnRzIGluIHRoZSBET01cbiAgICAgKiBAZWFjaFxuICAgICAqL1xuXG5cbiAgICBzaG93KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaXNWaXNpYmxlIGNoZWNrcyB0byBzZWUgaWYgZWxtZW50IGluIHRoZSBET00gaXMgdmlzaWJsZVxuICAgICAqIEBwYXJhbSB7ZWxlbWVudH0gIHRoZSBlbGVtZW50IGluIHBhcnRpY3VsYXIgeW91IGFyZSBjaGVja2luZ1xuICAgICAqL1xuXG5cbiAgICBzdGF0aWMgaXNWaXNpYmxlKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0V2lkdGggPiAwICYmIGVsZW1lbnQub2Zmc2V0SGVpZ2h0ID4gMDtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogb25WaXNpYmxlIHdoZW4gaXRlbSBiZWNhb21lcyB2aXNpYmxlIGxldHMgZG8gc29tZXRoaW5nIHRvIGl0XG4gICAgICogQHBhcmFtIHtjYWxsYmFja30gIGNhbGxiYWNrIGFjdGlvbiB0byBleGVjdXRlIHdoZW4gaXRlbSBiZWNvbWVzIHZpc2libGVcbiAgICAgKi9cblxuXG4gICAgb25WaXNpYmxlKGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoQ0FUQU1BUkFOLmNvcmUuRE9NLmlzVmlzaWJsZSh0aGlzKSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoQ0FUQU1BUkFOLmNvcmUuRE9NLmlzVmlzaWJsZSh0aGlzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogYWRkQ2xhc3MgYWRkcyBhIGNsYXNzIHRvIERPTSBlbGVtZW50c1xuICAgICAqIEBlYWNoXG4gICAgICogQHBhcmFtIHtjbGFzc05hbWV9IHRoZSBjbGFzcyB5b3Ugd2FudCB0byBhZGRcbiAgICAgKi9cblxuXG4gICAgYWRkQ2xhc3MoIGNsYXNzTmFtZSApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZW1vdmVDbGFzcyByZW1vdmVzIGEgY2xhc3MgdG8gRE9NIGVsZW1lbnRzXG4gICAgICogQGVhY2hcbiAgICAgKiBAcGFyYW0ge2NsYXNzTmFtZX0gdGhlIGNsYXNzIHlvdSB3YW50IHRvIHJlbW92ZVxuICAgICAqL1xuICAgIFxuICAgIHJlbW92ZUNsYXNzKCBjbGFzc05hbWUgKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAgLyoqXG4gICAgICogaGFzQ2xhc3MgY2hlY2tzIERPTSBlbGVtZW50cyB0byBzZWUgaWYgYSBjbGFzcyBpcyBwcmVzZW50IFxuICAgICAqIEBlYWNoXG4gICAgICogQHBhcmFtIHtjbGFzc05hbWV9IHRoZSBjbGFzcyB5b3Ugd2FudCB0byBsb29rIGZvclxuICAgICAqIEByZXR1cm4ge2Jvb2x9IHJldHVybnMgdHJ1ZSBvciBmYWxzZVxuICAgICAqL1xuXG4gICAgaGFzQ2xhc3MoIGNsYXNzTmFtZSApIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdG9nZ2xlIGNoZWNrcyBET00gZWxlbWVudHMgYWRkIGFkZHMgb3IgcmVtb3ZlcyBhIGNsYXNzXG4gICAgICogQGVhY2hcbiAgICAgKiBAcGFyYW0ge2NsYXNzTmFtZX0gdGhlIGNsYXNzIHlvdSB3YW50IHRvIHRvZ2dsZVxuICAgICAqIHRvZG8gcmVtb3ZlIHNlbGZcbiAgICAgKiBcbiAgICAgKi9cblxuXG4gICAgdG9nZ2xlKGNsYXNzTmFtZSl7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYodGhpcy5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSl7XG4gICAgICAgICAgICAgIHNlbGYucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICBzZWxmLmFkZENsYXNzKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICAgLyoqXG4gICAgICogb24gY2hlY2tzIERPTSBlbGVtZW50cyBhZGRzIGFuIGV2ZW50IHRvIGl0IHdpdGggYSBjYWxsYmFja1xuICAgICAqIEBlYWNoXG4gICAgICogQHBhcmFtIHtldmVudH0gdGhlIGV2ZW50IHR5cGUgeW91IHdhbnQgdG8gYXBwbHlcbiAgICAgKiBAcGFyYW0ge2NhbGxiYWNrfSB0aGUgY2FsbGJhY2sgeW91IHdhbnQgdG8gYXBwbHkgb24gdGhlIGdpdmVuIGV2ZW50XG4gICAgICovXG5cbiAgICBvbiggZXZlbnQsIGNhbGxiYWNrICkge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaywgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBvZmYgY2hlY2tzIERPTSBlbGVtZW50cyByZW1vdmVzIGFuIGV2ZW50IHRvIGl0IHdpdGggYSBjYWxsYmFja1xuICAgICAqIEBlYWNoXG4gICAgICogQHBhcmFtIHtldmVudH0gdGhlIGV2ZW50IHR5cGUgeW91IHdhbnQgdG8gcmVtb3Zlc1xuICAgICAqIEBwYXJhbSB7Y2FsbGJhY2t9IHRoZSBjYWxsYmFjayB5b3Ugd2FudCB0byByZW1vdmUgb24gdGhlIGdpdmVuIGV2ZW50XG4gICAgICovXG5cbiAgICBcbiAgICBvZmYoIGV2ZW50LCBjYWxsYmFjayApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogd2lkdGggc2V0cyB0aGUgd2lkdGggb2YgYSBkb20gZWxlbWVudCBpZiBubyB3aWR0aCBpcyBnaXZlbiBpdCByZXR1cm5zIHRoZSBpbnQgd2lkdGggb2YgdGhlIGl0ZW0gaW5zdGVhZCBvZiBzZXR0aW5nIGl0XG4gICAgICogQHBhcmFtIHt3aWR0aH0gdGhlIGFtb3VudCB5b3Ugd2FudCB0byBhcHBseVxuICAgICAqIEByZXR1cm4ge2ludH0gcmV0dXJucyB0aGUgd2lkdGggb2YgdGhlIGl0ZW1cbiAgICAgKiBAcmV0dXJuIHtlbG1lbnR9IGluIHRoZSBldmVudCB3aWR0aCBoYXMgYmVlbiBzZXQgaXQgd2lsbCByZXR1cm4gdGhlIGl0ZW0gYW5kIGFwcGx5IHRoZSB3aWR0aCBwcm92aWRlZFxuICAgICAqL1xuXG4gICAgd2lkdGgodyA9IG51bGwpe1xuICAgICAgdmFyIF93ID0gdztcbiAgICAgIGlmKF93ID09IG51bGwpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0V2lkdGg7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5zdHlsZS53aWR0aCA9IF93O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBoZWlnaHQgc2V0cyB0aGUgaGVpZ2h0IG9mIGEgZG9tIGVsZW1lbnQgaWYgbm8gaGVpZ2h0IGlzIGdpdmVuIGl0IHJldHVybnMgdGhlIGludCBoZWlnaHQgb2YgdGhlIGl0ZW0gaW5zdGVhZCBvZiBzZXR0aW5nIGl0XG4gICAgICogQHBhcmFtIHtoZWlnaHR9IHRoZSBhbW91bnQgeW91IHdhbnQgdG8gYXBwbHlcbiAgICAgKiBAcmV0dXJuIHtpbnR9IHJldHVybnMgdGhlIGhlaWdodCBvZiB0aGUgaXRlbVxuICAgICAqIEByZXR1cm4ge2VsbWVudH0gaW4gdGhlIGV2ZW50IGhlaWdodCBoYXMgYmVlbiBzZXQgaXQgd2lsbCByZXR1cm4gdGhlIGl0ZW0gYW5kIGFwcGx5IHRoZSBoZWlnaHQgcHJvdmlkZWRcbiAgICAgKi9cblxuICAgIGhlaWdodChoID0gbnVsbCl7XG4gICAgICB2YXIgX2ggPSBoO1xuICAgICAgaWYoX2ggPT0gbnVsbCl7XG4gICAgICAgICAgIHJldHVybiB0aGlzWzBdLm9mZnNldEhlaWdodDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBfaDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY3NzIHNldHMgYSBzZXJpZXMgb2YgY3NzIHN0eWxlcyBpbiBhIHNpbWlsYXIgbWFubmVyIHRvIGpRdWVyeVxuICAgICAqIEBlYWNoXG4gICAgICogQHBhcmFtIHtvYmp9IHRoZSBwcm9ycGVydGllcyBhbmQgcHJvcGVydHkgdmFsdWVzIHlvdSB3YW50IHRvIHNldCBleGFtcGxlOiB7aGVpZ2h0OjMwMHB4fSwge2hlaWdodDozMDBweCwgd2lkdGg6NDAwcHh9ICAgIFxuICAgICAqL1xuXG4gICAgY3NzKCBvYmogKSB7XG4gICAgICAgIHZhciBfb2JqID0gb2JqO1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGZvcih2YXIgaXRlbSBpbiBfb2JqKXtcbiAgICAgICAgICAgIHRoaXMuc3R5bGVbaXRlbV0gPSBfb2JqW2l0ZW1dO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9