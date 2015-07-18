"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(void 0===e||null===e)throw new TypeError("Cannot convert first argument to object");for(var t=Object(e),n=1;n<arguments.length;n++){var r=arguments[n];if(void 0!==r&&null!==r){r=Object(r);for(var i=Object.keys(Object(r)),a=0,s=i.length;s>a;a++){var o=i[a],u=Object.getOwnPropertyDescriptor(r,o);void 0!==u&&u.enumerable&&(t[o]=r[o])}}}return t}}),Array.from||(Array.from=function(){var e=Object.prototype.toString,t=function(t){return"function"==typeof t||"[object Function]"===e.call(t)},n=function(e){var t=Number(e);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t},r=Math.pow(2,53)-1,i=function(e){var t=n(e);return Math.min(Math.max(t,0),r)};return function(e){var n=this,r=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var a,s=arguments.length>1?arguments[1]:void 0;if("undefined"!=typeof s){if(!t(s))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(a=arguments[2])}for(var o,u=i(r.length),l=t(n)?Object(new n(u)):new Array(u),c=0;u>c;)o=r[c],l[c]=s?"undefined"==typeof a?s(o,c):s.call(a,o,c):o,c+=1;return l.length=u,l}}());var DOM=function(){function e(t){_classCallCheck(this,e);var n=document.querySelectorAll(t);this.length=n.length,this.children=[],Object.assign(this,n)}return _createClass(e,[{key:"each",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=Array.from(this)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var s=i.value;e.call(s)}}catch(o){n=!0,r=o}finally{try{!t&&a["return"]&&a["return"]()}finally{if(n)throw r}}return this}},{key:"hide",value:function(){return this.each(function(){this.style.display="none"})}},{key:"show",value:function(){return this.each(function(){this.style.display="block"})}},{key:"onVisible",value:function(e){return this.each(function(){if(CATAMARAN.core.DOM.isVisible(this))e.call(this);else var t=setInterval(function(){CATAMARAN.core.DOM.isVisible(this)&&(e.call(this),clearInterval(t))},50)})}},{key:"addClass",value:function(e){return this.each(function(){this.classList.add(e)})}},{key:"removeClass",value:function(e){return this.each(function(){this.classList.remove(e)})}},{key:"hasClass",value:function(e){return this[0].classList.contains(e)}},{key:"toggle",value:function(e){var t=this;return this.each(function(){this.classList.contains(e)?t.removeClass(e):t.addClass(e)})}},{key:"on",value:function(e,t){return this.each(function(){this.addEventListener(e,t,!1)})}},{key:"off",value:function(e,t){return this.each(function(){this.removeEventListener(e,t,!1)})}},{key:"width",value:function(){var e=void 0===arguments[0]?null:arguments[0],t=e;return null==t?this[0].offsetWidth:this.each(function(){this.style.width=t})}},{key:"height",value:function(){var e=void 0===arguments[0]?null:arguments[0],t=e;return null==t?this[0].offsetHeight:this.each(function(){this.style.height=t})}},{key:"css",value:function(e){var t=e;return this.each(function(){for(var e in t)this.style[e]=t[e]})}}],[{key:"isVisible",value:function(e){return e.offsetWidth>0&&e.offsetHeight>0}}]),e}();module.exports=DOM;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvZXh0ZW5kL0RPTS5qcyJdLCJuYW1lcyI6WyJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsImFzc2lnbiIsInZhbHVlIiwidW5kZWZpbmVkIiwidG8iLCJhcmd1bWVudHMiLCJuZXh0U291cmNlIiwia2V5c0FycmF5Iiwia2V5cyIsIm5leHRJbmRleCIsImxlbiIsIm5leHRLZXkiLCJkZXNjIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiQXJyYXkiLCJmcm9tIiwidG9TdHIiLCJ0b1N0cmluZyIsImlzQ2FsbGFibGUiLCJmbiIsImNhbGwiLCJ0b0ludGVnZXIiLCJudW1iZXIiLCJOdW1iZXIiLCJpc05hTiIsImlzRmluaXRlIiwiTWF0aCIsImZsb29yIiwiYWJzIiwibWF4U2FmZUludGVnZXIiLCJwb3ciLCJ0b0xlbmd0aCIsIm1pbiIsIm1heCIsImFycmF5TGlrZSIsIkMiLCJ0aGlzIiwiaXRlbXMiLCJUIiwibWFwRm4iLCJrVmFsdWUiLCJBIiwiayIsIkRPTSIsInNlbGVjdG9yIiwiZWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjaGlsZHJlbiIsImNhbGxiYWNrIiwiX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiIsIl9kaWRJdGVyYXRvckVycm9yIiwiX2l0ZXJhdG9yRXJyb3IiLCJfc3RlcCIsIl9pdGVyYXRvciIsIlN5bWJvbCIsIml0ZXJhdG9yIiwibmV4dCIsImRvbmUiLCJlbCIsImVyciIsImVhY2giLCJzdHlsZSIsImRpc3BsYXkiLCJDQVRBTUFSQU4iLCJjb3JlIiwiaXNWaXNpYmxlIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJjb250YWlucyIsInNlbGYiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInciLCJfdyIsIm9mZnNldFdpZHRoIiwid2lkdGgiLCJoIiwiX2giLCJvZmZzZXRIZWlnaHQiLCJoZWlnaHQiLCJvYmoiLCJfb2JqIiwiaXRlbSIsImVsZW1lbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFDQSxZQUlBLFNBQVNBLGlCQUFnQkMsRUFBVUMsR0FBZSxLQUFNRCxZQUFvQkMsSUFBZ0IsS0FBTSxJQUFJQyxXQUFVLHFDQUZoSCxHQUFJQyxjQUFlLFdBQWUsUUFBU0MsR0FBaUJDLEVBQVFDLEdBQVMsSUFBSyxHQUFJQyxHQUFJLEVBQUdBLEVBQUlELEVBQU1FLE9BQVFELElBQUssQ0FBRSxHQUFJRSxHQUFhSCxFQUFNQyxFQUFJRSxHQUFXQyxXQUFhRCxFQUFXQyxhQUFjLEVBQU9ELEVBQVdFLGNBQWUsRUFBVSxTQUFXRixLQUFZQSxFQUFXRyxVQUFXLEdBQU1DLE9BQU9DLGVBQWVULEVBQVFJLEVBQVdNLElBQUtOLElBQWlCLE1BQU8sVUFBVVIsRUFBYWUsRUFBWUMsR0FBaUosTUFBOUhELElBQVlaLEVBQWlCSCxFQUFZaUIsVUFBV0YsR0FBaUJDLEdBQWFiLEVBQWlCSCxFQUFhZ0IsR0FBcUJoQixLQUY1aEJZLFFBQU9NLFFBQ1ZOLE9BQU9DLGVBQWVELE9BQVEsVUFDNUJILFlBQVksRUFDWkMsY0FBYyxFQUNkQyxVQUFVLEVBQ1ZRLE1BQU8sU0FBU2YsR0FFZCxHQUFlZ0IsU0FBWGhCLEdBQW1DLE9BQVhBLEVBQzFCLEtBQU0sSUFBSUgsV0FBVSwwQ0FJdEIsS0FBSyxHQUREb0IsR0FBS1QsT0FB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R0FDUixNQUFPYixNQUFLeUIsS0FBSyxXQUNiekIsS0FBSzRDLG9CQUFvQkYsRUFBTzdCLEdBQVUsUUE0Q2xEcEQsSUFBSyxRQUNMSyxNQXpDSyxXQTBDSCxHQTFDSStFLEdBQUM5RSxTQUFBRSxVQUFBLEdBQUcsS0FBSUEsVUFBQSxHQUNSNkUsRUFBS0QsQ0FDVCxPQUFTLE9BQU5DLEVBQ1U5QyxLQUFLLEdBQUcrQyxZQUVkL0MsS0FBS3lCLEtBQUssV0FDWHpCLEtBQUswQixNQUFNc0IsTUFBUUYsT0ErQzNCckYsSUFBSyxTQUNMSyxNQTVDTSxXQTZDSixHQTdDS21GLEdBQUNsRixTQUFBRSxVQUFBLEdBQUcsS0FBSUEsVUFBQSxHQUNUaUYsRUFBS0QsQ0FDVCxPQUFTLE9BQU5DLEVBQ1NsRCxLQUFLLEdBQUdtRCxhQUVibkQsS0FBS3lCLEtBQUssV0FDYnpCLEtBQUswQixNQUFNMEIsT0FBU0YsT0FrRDFCekYsSUFBSyxNQUNMSyxNQS9DRyxTQUFFdUYsR0FDRCxHQUFJQyxHQUFPRCxDQUNYLE9BQU9yRCxNQUFLeUIsS0FBSyxXQUNmLElBQUksR0FBSThCLEtBQVFELEdBQ2R0RCxLQUFLMEIsTUFBTTZCLEdBQVFELEVBQUtDLFVBb0RoQzlGLElBQUssWUFDTEssTUF4SWdCLFNBQUMwRixHQUNiLE1BQU9BLEdBQVFULFlBQWMsR0FBS1MsRUFBUUwsYUFBZSxNQXZDM0Q1QyxJQWtJTmtELFFBQU9DLFFBQVVuRCIsImZpbGUiOiJjb3JlL2V4dGVuZC9ET00uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL3BvbHlmaWxsIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9hc3NpZ25cbmlmICghT2JqZWN0LmFzc2lnbikge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LCAnYXNzaWduJywge1xuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAndXNlIHN0cmljdCc7XG4gICAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQgfHwgdGFyZ2V0ID09PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IGZpcnN0IGFyZ3VtZW50IHRvIG9iamVjdCcpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdG8gPSBPYmplY3QodGFyZ2V0KTtcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBuZXh0U291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgICBpZiAobmV4dFNvdXJjZSA9PT0gdW5kZWZpbmVkIHx8IG5leHRTb3VyY2UgPT09IG51bGwpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBuZXh0U291cmNlID0gT2JqZWN0KG5leHRTb3VyY2UpO1xuXG4gICAgICAgIHZhciBrZXlzQXJyYXkgPSBPYmplY3Qua2V5cyhPYmplY3QobmV4dFNvdXJjZSkpO1xuICAgICAgICBmb3IgKHZhciBuZXh0SW5kZXggPSAwLCBsZW4gPSBrZXlzQXJyYXkubGVuZ3RoOyBuZXh0SW5kZXggPCBsZW47IG5leHRJbmRleCsrKSB7XG4gICAgICAgICAgdmFyIG5leHRLZXkgPSBrZXlzQXJyYXlbbmV4dEluZGV4XTtcbiAgICAgICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobmV4dFNvdXJjZSwgbmV4dEtleSk7XG4gICAgICAgICAgaWYgKGRlc2MgIT09IHVuZGVmaW5lZCAmJiBkZXNjLmVudW1lcmFibGUpIHtcbiAgICAgICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0bztcbiAgICB9XG4gIH0pO1xufVxuLy8gcG9seWZpbGwgIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2Zyb21cbi8vIFByb2R1Y3Rpb24gc3RlcHMgb2YgRUNNQS0yNjIsIEVkaXRpb24gNiwgMjIuMS4yLjFcbi8vIFJlZmVyZW5jZTogaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWFycmF5LmZyb21cbmlmICghQXJyYXkuZnJvbSkge1xuICBBcnJheS5mcm9tID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuICAgIHZhciBpc0NhbGxhYmxlID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nIHx8IHRvU3RyLmNhbGwoZm4pID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuICAgIH07XG4gICAgdmFyIHRvSW50ZWdlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdmFyIG51bWJlciA9IE51bWJlcih2YWx1ZSk7XG4gICAgICBpZiAoaXNOYU4obnVtYmVyKSkgeyByZXR1cm4gMDsgfVxuICAgICAgaWYgKG51bWJlciA9PT0gMCB8fCAhaXNGaW5pdGUobnVtYmVyKSkgeyByZXR1cm4gbnVtYmVyOyB9XG4gICAgICByZXR1cm4gKG51bWJlciA+IDAgPyAxIDogLTEpICogTWF0aC5mbG9vcihNYXRoLmFicyhudW1iZXIpKTtcbiAgICB9O1xuICAgIHZhciBtYXhTYWZlSW50ZWdlciA9IE1hdGgucG93KDIsIDUzKSAtIDE7XG4gICAgdmFyIHRvTGVuZ3RoID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICB2YXIgbGVuID0gdG9JbnRlZ2VyKHZhbHVlKTtcbiAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChsZW4sIDApLCBtYXhTYWZlSW50ZWdlcik7XG4gICAgfTtcblxuICAgIC8vIFRoZSBsZW5ndGggcHJvcGVydHkgb2YgdGhlIGZyb20gbWV0aG9kIGlzIDEuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlLyosIG1hcEZuLCB0aGlzQXJnICovKSB7XG4gICAgICAvLyAxLiBMZXQgQyBiZSB0aGUgdGhpcyB2YWx1ZS5cbiAgICAgIHZhciBDID0gdGhpcztcblxuICAgICAgLy8gMi4gTGV0IGl0ZW1zIGJlIFRvT2JqZWN0KGFycmF5TGlrZSkuXG4gICAgICB2YXIgaXRlbXMgPSBPYmplY3QoYXJyYXlMaWtlKTtcblxuICAgICAgLy8gMy4gUmV0dXJuSWZBYnJ1cHQoaXRlbXMpLlxuICAgICAgaWYgKGFycmF5TGlrZSA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJBcnJheS5mcm9tIHJlcXVpcmVzIGFuIGFycmF5LWxpa2Ugb2JqZWN0IC0gbm90IG51bGwgb3IgdW5kZWZpbmVkXCIpO1xuICAgICAgfVxuXG4gICAgICAvLyA0LiBJZiBtYXBmbiBpcyB1bmRlZmluZWQsIHRoZW4gbGV0IG1hcHBpbmcgYmUgZmFsc2UuXG4gICAgICB2YXIgbWFwRm4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHZvaWQgdW5kZWZpbmVkO1xuICAgICAgdmFyIFQ7XG4gICAgICBpZiAodHlwZW9mIG1hcEZuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyA1LiBlbHNlICAgICAgXG4gICAgICAgIC8vIDUuIGEgSWYgSXNDYWxsYWJsZShtYXBmbikgaXMgZmFsc2UsIHRocm93IGEgVHlwZUVycm9yIGV4Y2VwdGlvbi5cbiAgICAgICAgaWYgKCFpc0NhbGxhYmxlKG1hcEZuKSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FycmF5LmZyb206IHdoZW4gcHJvdmlkZWQsIHRoZSBzZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyA1LiBiLiBJZiB0aGlzQXJnIHdhcyBzdXBwbGllZCwgbGV0IFQgYmUgdGhpc0FyZzsgZWxzZSBsZXQgVCBiZSB1bmRlZmluZWQuXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xuICAgICAgICAgIFQgPSBhcmd1bWVudHNbMl07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gMTAuIExldCBsZW5WYWx1ZSBiZSBHZXQoaXRlbXMsIFwibGVuZ3RoXCIpLlxuICAgICAgLy8gMTEuIExldCBsZW4gYmUgVG9MZW5ndGgobGVuVmFsdWUpLlxuICAgICAgdmFyIGxlbiA9IHRvTGVuZ3RoKGl0ZW1zLmxlbmd0aCk7XG5cbiAgICAgIC8vIDEzLiBJZiBJc0NvbnN0cnVjdG9yKEMpIGlzIHRydWUsIHRoZW5cbiAgICAgIC8vIDEzLiBhLiBMZXQgQSBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbQ29uc3RydWN0XV0gaW50ZXJuYWwgbWV0aG9kIG9mIEMgd2l0aCBhbiBhcmd1bWVudCBsaXN0IGNvbnRhaW5pbmcgdGhlIHNpbmdsZSBpdGVtIGxlbi5cbiAgICAgIC8vIDE0LiBhLiBFbHNlLCBMZXQgQSBiZSBBcnJheUNyZWF0ZShsZW4pLlxuICAgICAgdmFyIEEgPSBpc0NhbGxhYmxlKEMpID8gT2JqZWN0KG5ldyBDKGxlbikpIDogbmV3IEFycmF5KGxlbik7XG5cbiAgICAgIC8vIDE2LiBMZXQgayBiZSAwLlxuICAgICAgdmFyIGsgPSAwO1xuICAgICAgLy8gMTcuIFJlcGVhdCwgd2hpbGUgayA8IGxlbuKApiAoYWxzbyBzdGVwcyBhIC0gaClcbiAgICAgIHZhciBrVmFsdWU7XG4gICAgICB3aGlsZSAoayA8IGxlbikge1xuICAgICAgICBrVmFsdWUgPSBpdGVtc1trXTtcbiAgICAgICAgaWYgKG1hcEZuKSB7XG4gICAgICAgICAgQVtrXSA9IHR5cGVvZiBUID09PSAndW5kZWZpbmVkJyA/IG1hcEZuKGtWYWx1ZSwgaykgOiBtYXBGbi5jYWxsKFQsIGtWYWx1ZSwgayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgQVtrXSA9IGtWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBrICs9IDE7XG4gICAgICB9XG4gICAgICAvLyAxOC4gTGV0IHB1dFN0YXR1cyBiZSBQdXQoQSwgXCJsZW5ndGhcIiwgbGVuLCB0cnVlKS5cbiAgICAgIEEubGVuZ3RoID0gbGVuO1xuICAgICAgLy8gMjAuIFJldHVybiBBLlxuICAgICAgcmV0dXJuIEE7XG4gICAgfTtcbiAgfSgpKTtcbn1cblxuXG5jbGFzcyBET00ge1xuICAvKipcbiAgICogUmVwcmVzZW50cyBFeHRlbmRpbmcgYW4gaHRtbCBlbGVtZW50IGFjY2VwdHMgYXJyYXkgb2YgZWxlbWVudHMuXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge2FycmF5fSBzZWxlY3RvciBhY2NlcHRzIGpxdWVyeSBsaWtlIHNlbGVjdG9yLlxuICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgICAgICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBlbGVtZW50cy5sZW5ndGg7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBlbGVtZW50cyk7XG4gICAgfVxuXG4gIC8qKlxuICAgKiBsb29wcyB0aG91Z2ggZXZlcnkgZWxlbWVudCBsaWtlIGpxdWVyeVxuICAgKiBAZWFjaFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSAgdGhpcyBpcyB0aGUgY2FsbGJhY2tcbiAgICovXG4gICAgZWFjaCggY2FsbGJhY2sgKSB7XG4gICAgICAgIGZvciAoIGxldCBlbCBvZiBBcnJheS5mcm9tKHRoaXMpICkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCggZWwgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNWaXNpYmxlKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0V2lkdGggPiAwICYmIGVsZW1lbnQub2Zmc2V0SGVpZ2h0ID4gMDtcbiAgICB9XG4gICAgXG4gICAgb25WaXNpYmxlKGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoQ0FUQU1BUkFOLmNvcmUuRE9NLmlzVmlzaWJsZSh0aGlzKSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoQ0FUQU1BUkFOLmNvcmUuRE9NLmlzVmlzaWJsZSh0aGlzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgYWRkQ2xhc3MoIGNsYXNzTmFtZSApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlQ2xhc3MoIGNsYXNzTmFtZSApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYXNDbGFzcyggY2xhc3NOYW1lICkge1xuICAgICAgICByZXR1cm4gdGhpc1swXS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICB0b2dnbGUoY2xhc3NOYW1lKXtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZih0aGlzLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKXtcbiAgICAgICAgICAgICAgc2VsZi5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIHNlbGYuYWRkQ2xhc3MoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIG9uKCBldmVudCwgY2FsbGJhY2sgKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBvZmYoIGV2ZW50LCBjYWxsYmFjayApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgd2lkdGgodyA9IG51bGwpe1xuICAgICAgdmFyIF93ID0gdztcbiAgICAgIGlmKF93ID09IG51bGwpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0V2lkdGg7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5zdHlsZS53aWR0aCA9IF93O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoZWlnaHQoaCA9IG51bGwpe1xuICAgICAgdmFyIF9oID0gaDtcbiAgICAgIGlmKF9oID09IG51bGwpe1xuICAgICAgICAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRIZWlnaHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gX2g7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNzcyggb2JqICkge1xuICAgICAgICB2YXIgX29iaiA9IG9iajtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICBmb3IodmFyIGl0ZW0gaW4gX29iail7XG4gICAgICAgICAgICB0aGlzLnN0eWxlW2l0ZW1dID0gX29ialtpdGVtXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBET007Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9