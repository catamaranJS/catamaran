"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Symbol=require("../src/node_modules/es6-symbol/implement.js");Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(void 0===e||null===e)throw new TypeError("Cannot convert first argument to object");for(var t=Object(e),n=1;n<arguments.length;n++){var r=arguments[n];if(void 0!==r&&null!==r){r=Object(r);for(var i=Object.keys(Object(r)),a=0,s=i.length;s>a;a++){var o=i[a],u=Object.getOwnPropertyDescriptor(r,o);void 0!==u&&u.enumerable&&(t[o]=r[o])}}}return t}}),Array.from||(Array.from=function(){var e=Object.prototype.toString,t=function(t){return"function"==typeof t||"[object Function]"===e.call(t)},n=function(e){var t=Number(e);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t},r=Math.pow(2,53)-1,i=function(e){var t=n(e);return Math.min(Math.max(t,0),r)};return function(e){var n=this,r=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var a,s=arguments.length>1?arguments[1]:void 0;if("undefined"!=typeof s){if(!t(s))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(a=arguments[2])}for(var o,u=i(r.length),l=t(n)?Object(new n(u)):new Array(u),c=0;u>c;)o=r[c],l[c]=s?"undefined"==typeof a?s(o,c):s.call(a,o,c):o,c+=1;return l.length=u,l}}());var DOM=function(){function e(t){_classCallCheck(this,e);var n=document.querySelectorAll(t);this.length=n.length,this.children=[],Object.assign(this,n)}return _createClass(e,[{key:"each",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=Array.from(this)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var s=i.value;e.call(s)}}catch(o){n=!0,r=o}finally{try{!t&&a["return"]&&a["return"]()}finally{if(n)throw r}}return this}},{key:"hide",value:function(){return this.each(function(){this.style.display="none"})}},{key:"show",value:function(){return this.each(function(){this.style.display="block"})}},{key:"onVisible",value:function(e){return this.each(function(){if(CATAMARAN.core.DOM.isVisible(this))e.call(this);else var t=setInterval(function(){CATAMARAN.core.DOM.isVisible(this)&&(e.call(this),clearInterval(t))},50)})}},{key:"addClass",value:function(e){return this.each(function(){this.classList.add(e)})}},{key:"removeClass",value:function(e){return this.each(function(){this.classList.remove(e)})}},{key:"hasClass",value:function(e){return this[0].classList.contains(e)}},{key:"toggle",value:function(e){var t=void 0===arguments[1]?null:arguments[1],n=this;return this.each(function(){this.classList.contains(e)?n.removeClass(e):n.addClass(e),null!=t&&t()})}},{key:"on",value:function(e,t){return this.each(function(){this.addEventListener(e,t,!1)})}},{key:"off",value:function(e,t){return this.each(function(){this.removeEventListener(e,t,!1)})}},{key:"width",value:function(){var e=void 0===arguments[0]?null:arguments[0],t=e;return null==t?this[0].offsetWidth:this.each(function(){this.style.width=t})}},{key:"height",value:function(){var e=void 0===arguments[0]?null:arguments[0],t=e;return null==t?this[0].offsetHeight:this.each(function(){this.style.height=t})}},{key:"css",value:function(e){var t=e;return this.each(function(){for(var e in t)this.style[e]=t[e]})}}],[{key:"isVisible",value:function(e){return e.offsetWidth>0&&e.offsetHeight>0}}]),e}();module.exports=DOM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvZXh0ZW5kL0RPTS5qcyJdLCJuYW1lcyI6WyJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsIlN5bWJvbCIsInJlcXVpcmUiLCJhc3NpZ24iLCJ2YWx1ZSIsInVuZGVmaW5lZCIsInRvIiwiYXJndW1lbnRzIiwibmV4dFNvdXJjZSIsImtleXNBcnJheSIsImtleXMiLCJuZXh0SW5kZXgiLCJsZW4iLCJuZXh0S2V5IiwiZGVzYyIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIkFycmF5IiwiZnJvbSIsInRvU3RyIiwidG9TdHJpbmciLCJpc0NhbGxhYmxlIiwiZm4iLCJjYWxsIiwidG9JbnRlZ2VyIiwibnVtYmVyIiwiTnVtYmVyIiwiaXNOYU4iLCJpc0Zpbml0ZSIsIk1hdGgiLCJmbG9vciIsImFicyIsIm1heFNhZmVJbnRlZ2VyIiwicG93IiwidG9MZW5ndGgiLCJtaW4iLCJtYXgiLCJhcnJheUxpa2UiLCJDIiwidGhpcyIsIml0ZW1zIiwiVCIsIm1hcEZuIiwia1ZhbHVlIiwiQSIsImsiLCJET00iLCJzZWxlY3RvciIsImVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2hpbGRyZW4iLCJjYWxsYmFjayIsIl9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24iLCJfZGlkSXRlcmF0b3JFcnJvciIsIl9pdGVyYXRvckVycm9yIiwiX3N0ZXAiLCJfaXRlcmF0b3IiLCJpdGVyYXRvciIsIm5leHQiLCJkb25lIiwiZWwiLCJlcnIiLCJlYWNoIiwic3R5bGUiLCJkaXNwbGF5IiwiQ0FUQU1BUkFOIiwiY29yZSIsImlzVmlzaWJsZSIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiY29udGFpbnMiLCJzZWxmIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ3IiwiX3ciLCJvZmZzZXRXaWR0aCIsIndpZHRoIiwiaCIsIl9oIiwib2Zmc2V0SGVpZ2h0IiwiaGVpZ2h0Iiwib2JqIiwiX29iaiIsIml0ZW0iLCJlbGVtZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBRUEsWUFJQSxTQUFTQSxpQkFBZ0JDLEVBQVVDLEdBQWUsS0FBTUQsWUFBb0JDLElBQWdCLEtBQU0sSUFBSUMsV0FBVSxxQ0FGaEgsR0FBSUMsY0FBZSxXQUFlLFFBQVNDLEdBQWlCQyxFQUFRQyxHQUFTLElBQUssR0FBSUMsR0FBSSxFQUFHQSxFQUFJRCxFQUFNRSxPQUFRRCxJQUFLLENBQUUsR0FBSUUsR0FBYUgsRUFBTUMsRUFBSUUsR0FBV0MsV0FBYUQsRUFBV0MsYUFBYyxFQUFPRCxFQUFXRSxjQUFlLEVBQVUsU0FBV0YsS0FBWUEsRUFBV0csVUFBVyxHQUFNQyxPQUFPQyxlQUFlVCxFQUFRSSxFQUFXTSxJQUFLTixJQUFpQixNQUFPLFVBQVVSLEVBQWFlLEVBQVlDLEdBQWlKLE1BQTlIRCxJQUFZWixFQUFpQkgsRUFBWWlCLFVBQVdGLEdBQWlCQyxHQUFhYixFQUFpQkgsRUFBYWdCLEdBQXFCaEIsTUFGN2hCa0IsT0FBU0MsUUFBUSw4Q0FDaEJQLFFBQU9RLFFBQ1ZSLE9BQU9DLGVBQWVELE9BQVEsVUFDNUJILFlBQVksRUFDWkMsY0FBYyxFQUNkQyxVQUFVLEVBQ1ZVLE1BQU8sU0FBU2pCLEdBRWQsR0FBZWtCLFNBQVhsQixHQUFtQyxPQUFYQSxFQUMxQixLQUFNLElBQUlILFdB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QixHQUNQLE1BQU9iLE1BQUt3QixLQUFLLFdBQ2J4QixLQUFLMEMsaUJBQWlCRCxFQUFPNUIsR0FBVSxRQTBDL0N0RCxJQUFLLE1BQ0xPLE1BdkNHLFNBQUUyRSxFQUFPNUIsR0FDUixNQUFPYixNQUFLd0IsS0FBSyxXQUNieEIsS0FBSzJDLG9CQUFvQkYsRUFBTzVCLEdBQVUsUUEyQ2xEdEQsSUFBSyxRQUNMTyxNQXhDSyxXQXlDSCxHQXpDSThFLEdBQUM3RSxTQUFBRSxVQUFBLEdBQUcsS0FBSUEsVUFBQSxHQUNSNEUsRUFBS0QsQ0FDVCxPQUFTLE9BQU5DLEVBQ1U3QyxLQUFLLEdBQUc4QyxZQUVkOUMsS0FBS3dCLEtBQUssV0FDWHhCLEtBQUt5QixNQUFNc0IsTUFBUUYsT0E4QzNCdEYsSUFBSyxTQUNMTyxNQTNDTSxXQTRDSixHQTVDS2tGLEdBQUNqRixTQUFBRSxVQUFBLEdBQUcsS0FBSUEsVUFBQSxHQUNUZ0YsRUFBS0QsQ0FDVCxPQUFTLE9BQU5DLEVBQ1NqRCxLQUFLLEdBQUdrRCxhQUVibEQsS0FBS3dCLEtBQUssV0FDYnhCLEtBQUt5QixNQUFNMEIsT0FBU0YsT0FpRDFCMUYsSUFBSyxNQUNMTyxNQTlDRyxTQUFFc0YsR0FDRCxHQUFJQyxHQUFPRCxDQUNYLE9BQU9wRCxNQUFLd0IsS0FBSyxXQUNmLElBQUksR0FBSThCLEtBQVFELEdBQ2RyRCxLQUFLeUIsTUFBTTZCLEdBQVFELEVBQUtDLFVBbURoQy9GLElBQUssWUFDTE8sTUEzSWdCLFNBQUN5RixHQUNiLE1BQU9BLEdBQVFULFlBQWMsR0FBS1MsRUFBUUwsYUFBZSxNQXpDM0QzQyxJQXdJTmlELFFBQU9DLFFBQVVsRCIsImZpbGUiOiJjb3JlL2V4dGVuZC9ET00uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vcG9seWZpbGwgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2Fzc2lnblxudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4uL3NyYy9ub2RlX21vZHVsZXMvZXM2LXN5bWJvbC9pbXBsZW1lbnQuanMnKTtcbmlmICghT2JqZWN0LmFzc2lnbikge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LCAnYXNzaWduJywge1xuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAndXNlIHN0cmljdCc7XG4gICAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQgfHwgdGFyZ2V0ID09PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IGZpcnN0IGFyZ3VtZW50IHRvIG9iamVjdCcpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdG8gPSBPYmplY3QodGFyZ2V0KTtcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBuZXh0U291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgICBpZiAobmV4dFNvdXJjZSA9PT0gdW5kZWZpbmVkIHx8IG5leHRTb3VyY2UgPT09IG51bGwpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBuZXh0U291cmNlID0gT2JqZWN0KG5leHRTb3VyY2UpO1xuXG4gICAgICAgIHZhciBrZXlzQXJyYXkgPSBPYmplY3Qua2V5cyhPYmplY3QobmV4dFNvdXJjZSkpO1xuICAgICAgICBmb3IgKHZhciBuZXh0SW5kZXggPSAwLCBsZW4gPSBrZXlzQXJyYXkubGVuZ3RoOyBuZXh0SW5kZXggPCBsZW47IG5leHRJbmRleCsrKSB7XG4gICAgICAgICAgdmFyIG5leHRLZXkgPSBrZXlzQXJyYXlbbmV4dEluZGV4XTtcbiAgICAgICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobmV4dFNvdXJjZSwgbmV4dEtleSk7XG4gICAgICAgICAgaWYgKGRlc2MgIT09IHVuZGVmaW5lZCAmJiBkZXNjLmVudW1lcmFibGUpIHtcbiAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0bztcbiAgICB9XG4gIH0pO1xufVxuLy8gcG9seWZpbGwgIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2Zyb21cbi8vIFByb2R1Y3Rpb24gc3RlcHMgb2YgRUNNQS0yNjIsIEVkaXRpb24gNiwgMjIuMS4yLjFcbi8vIFJlZmVyZW5jZTogaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWFycmF5LmZyb21cbmlmICghQXJyYXkuZnJvbSkge1xuICBBcnJheS5mcm9tID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuICAgIHZhciBpc0NhbGxhYmxlID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nIHx8IHRvU3RyLmNhbGwoZm4pID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuICAgIH07XG4gICAgdmFyIHRvSW50ZWdlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdmFyIG51bWJlciA9IE51bWJlcih2YWx1ZSk7XG4gICAgICBpZiAoaXNOYU4obnVtYmVyKSkgeyByZXR1cm4gMDsgfVxuICAgICAgaWYgKG51bWJlciA9PT0gMCB8fCAhaXNGaW5pdGUobnVtYmVyKSkgeyByZXR1cm4gbnVtYmVyOyB9XG4gICAgICByZXR1cm4gKG51bWJlciA+IDAgPyAxIDogLTEpICogTWF0aC5mbG9vcihNYXRoLmFicyhudW1iZXIpKTtcbiAgICB9O1xuICAgIHZhciBtYXhTYWZlSW50ZWdlciA9IE1hdGgucG93KDIsIDUzKSAtIDE7XG4gICAgdmFyIHRvTGVuZ3RoID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICB2YXIgbGVuID0gdG9JbnRlZ2VyKHZhbHVlKTtcbiAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChsZW4sIDApLCBtYXhTYWZlSW50ZWdlcik7XG4gICAgfTtcblxuICAgIC8vIFRoZSBsZW5ndGggcHJvcGVydHkgb2YgdGhlIGZyb20gbWV0aG9kIGlzIDEuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlLyosIG1hcEZuLCB0aGlzQXJnICovKSB7XG4gICAgICAvLyAxLiBMZXQgQyBiZSB0aGUgdGhpcyB2YWx1ZS5cbiAgICAgIHZhciBDID0gdGhpcztcblxuICAgICAgLy8gMi4gTGV0IGl0ZW1zIGJlIFRvT2JqZWN0KGFycmF5TGlrZSkuXG4gICAgICB2YXIgaXRlbXMgPSBPYmplY3QoYXJyYXlMaWtlKTtcblxuICAgICAgLy8gMy4gUmV0dXJuSWZBYnJ1cHQoaXRlbXMpLlxuICAgICAgaWYgKGFycmF5TGlrZSA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJBcnJheS5mcm9tIHJlcXVpcmVzIGFuIGFycmF5LWxpa2Ugb2JqZWN0IC0gbm90IG51bGwgb3IgdW5kZWZpbmVkXCIpO1xuICAgICAgfVxuXG4gICAgICAvLyA0LiBJZiBtYXBmbiBpcyB1bmRlZmluZWQsIHRoZW4gbGV0IG1hcHBpbmcgYmUgZmFsc2UuXG4gICAgICB2YXIgbWFwRm4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHZvaWQgdW5kZWZpbmVkO1xuICAgICAgdmFyIFQ7XG4gICAgICBpZiAodHlwZW9mIG1hcEZuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyA1LiBlbHNlICAgICAgXG4gICAgICAgIC8vIDUuIGEgSWYgSXNDYWxsYWJsZShtYXBmbikgaXMgZmFsc2UsIHRocm93IGEgVHlwZUVycm9yIGV4Y2VwdGlvbi5cbiAgICAgICAgaWYgKCFpc0NhbGxhYmxlKG1hcEZuKSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FycmF5LmZyb206IHdoZW4gcHJvdmlkZWQsIHRoZSBzZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyA1LiBiLiBJZiB0aGlzQXJnIHdhcyBzdXBwbGllZCwgbGV0IFQgYmUgdGhpc0FyZzsgZWxzZSBsZXQgVCBiZSB1bmRlZmluZWQuXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xuICAgICAgICAgIFQgPSBhcmd1bWVudHNbMl07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gMTAuIExldCBsZW5WYWx1ZSBiZSBHZXQoaXRlbXMsIFwibGVuZ3RoXCIpLlxuICAgICAgLy8gMTEuIExldCBsZW4gYmUgVG9MZW5ndGgobGVuVmFsdWUpLlxuICAgICAgdmFyIGxlbiA9IHRvTGVuZ3RoKGl0ZW1zLmxlbmd0aCk7XG5cbiAgICAgIC8vIDEzLiBJZiBJc0NvbnN0cnVjdG9yKEMpIGlzIHRydWUsIHRoZW5cbiAgICAgIC8vIDEzLiBhLiBMZXQgQSBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbQ29uc3RydWN0XV0gaW50ZXJuYWwgbWV0aG9kIG9mIEMgd2l0aCBhbiBhcmd1bWVudCBsaXN0IGNvbnRhaW5pbmcgdGhlIHNpbmdsZSBpdGVtIGxlbi5cbiAgICAgIC8vIDE0LiBhLiBFbHNlLCBMZXQgQSBiZSBBcnJheUNyZWF0ZShsZW4pLlxuICAgICAgdmFyIEEgPSBpc0NhbGxhYmxlKEMpID8gT2JqZWN0KG5ldyBDKGxlbikpIDogbmV3IEFycmF5KGxlbik7XG5cbiAgICAgIC8vIDE2LiBMZXQgayBiZSAwLlxuICAgICAgdmFyIGsgPSAwO1xuICAgICAgLy8gMTcuIFJlcGVhdCwgd2hpbGUgayA8IGxlbuKApiAoYWxzbyBzdGVwcyBhIC0gaClcbiAgICAgIHZhciBrVmFsdWU7XG4gICAgICB3aGlsZSAoayA8IGxlbikge1xuICAgICAgICBrVmFsdWUgPSBpdGVtc1trXTtcbiAgICAgICAgaWYgKG1hcEZuKSB7XG4gICAgICAgICAgQVtrXSA9IHR5cGVvZiBUID09PSAndW5kZWZpbmVkJyA/IG1hcEZuKGtWYWx1ZSwgaykgOiBtYXBGbi5jYWxsKFQsIGtWYWx1ZSwgayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgQVtrXSA9IGtWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBrICs9IDE7XG4gICAgICB9XG4gICAgICAvLyAxOC4gTGV0IHB1dFN0YXR1cyBiZSBQdXQoQSwgXCJsZW5ndGhcIiwgbGVuLCB0cnVlKS5cbiAgICAgIEEubGVuZ3RoID0gbGVuO1xuICAgICAgLy8gMjAuIFJldHVybiBBLlxuICAgICAgcmV0dXJuIEE7XG4gICAgfTtcbiAgfSgpKTtcbn1cblxuXG5cbmNsYXNzIERPTSB7XG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIEV4dGVuZGluZyBhbiBodG1sIGVsZW1lbnQgYWNjZXB0cyBhcnJheSBvZiBlbGVtZW50cy5cbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7YXJyYXl9IHNlbGVjdG9yIGFjY2VwdHMganF1ZXJ5IGxpa2Ugc2VsZWN0b3IuXG4gICAqL1xuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgICAgIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGVsZW1lbnRzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGVsZW1lbnRzKTtcblxuICAgICAgICBcbiAgICB9XG5cbiAgLyoqXG4gICAqIGxvb3BzIHRob3VnaCBldmVyeSBlbGVtZW50IGxpa2UganF1ZXJ5XG4gICAqIEBlYWNoXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259ICB0aGlzIGlzIHRoZSBjYWxsYmFja1xuICAgKi9cbiAgICBlYWNoKCBjYWxsYmFjayApIHtcbiAgICAgICAgZm9yICggbGV0IGVsIG9mIEFycmF5LmZyb20odGhpcykgKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKCBlbCApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc1Zpc2libGUoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5vZmZzZXRXaWR0aCA+IDAgJiYgZWxlbWVudC5vZmZzZXRIZWlnaHQgPiAwO1xuICAgIH1cbiAgICBcbiAgICBvblZpc2libGUoY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChDQVRBTUFSQU4uY29yZS5ET00uaXNWaXNpYmxlKHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChDQVRBTUFSQU4uY29yZS5ET00uaXNWaXNpYmxlKHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBhZGRDbGFzcyggY2xhc3NOYW1lICkge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICByZW1vdmVDbGFzcyggY2xhc3NOYW1lICkge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhc0NsYXNzKCBjbGFzc05hbWUgKSB7XG4gICAgICAgIHJldHVybiB0aGlzWzBdLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICAgIH1cblxuICAgIHRvZ2dsZShjbGFzc05hbWUsIGNhbGxiYWNrID0gbnVsbCl7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYodGhpcy5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSl7XG4gICAgICAgICAgICAgIHNlbGYucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICBzZWxmLmFkZENsYXNzKGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGNhbGxiYWNrICE9IG51bGwpe1xuICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgb24oIGV2ZW50LCBjYWxsYmFjayApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIG9mZiggZXZlbnQsIGNhbGxiYWNrICkge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaywgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB3aWR0aCh3ID0gbnVsbCl7XG4gICAgICB2YXIgX3cgPSB3O1xuICAgICAgaWYoX3cgPT0gbnVsbCl7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRXaWR0aDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLndpZHRoID0gX3c7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhlaWdodChoID0gbnVsbCl7XG4gICAgICB2YXIgX2ggPSBoO1xuICAgICAgaWYoX2ggPT0gbnVsbCl7XG4gICAgICAgICAgIHJldHVybiB0aGlzWzBdLm9mZnNldEhlaWdodDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBfaDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY3NzKCBvYmogKSB7XG4gICAgICAgIHZhciBfb2JqID0gb2JqO1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGZvcih2YXIgaXRlbSBpbiBfb2JqKXtcbiAgICAgICAgICAgIHRoaXMuc3R5bGVbaXRlbV0gPSBfb2JqW2l0ZW1dO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERPTTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=