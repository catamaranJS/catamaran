"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),Animation=function(){function e(){_classCallCheck(this,e),this.raf=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)},this.animating=!0,this.interval=1,this.timers=[]}return _createClass(e,[{key:"stop",value:function(){this.animating=!1}},{key:"handleAnimation",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){animating&&(this.raf(handleAnimation),this.tick())})},{key:"tick",value:function(){this.interval+=1}},{key:"timer",value:function(e){e()&&this.timers.push(e)&&!this.animating&&(this.animating=!0,handleAnimation())}},{key:"linearEase",value:function(e,t,n,a){return n*e/a+t}},{key:"easeInQuad",value:function(e,t,n,a){return n*(e/=a)*e+t}},{key:"easeOutQuad",value:function(e,t,n,a){return-n*(e/=a)*(e-2)+t}},{key:"easeInOutQuad",value:function(e,t,n,a){return(e/=a/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}},{key:"easeInCubic",value:function(e,t,n,a){return n*Math.pow(e/a,3)+t}},{key:"easeOutCubic",value:function(e,t,n,a){return n*(Math.pow(e/a-1,3)+1)+t}},{key:"easeInOutCubic",value:function(e,t,n,a){return(e/=a/2)<1?n/2*Math.pow(e,3)+t:n/2*(Math.pow(e-2,3)+2)+t}},{key:"easeInQuart",value:function(e,t,n,a){return n*Math.pow(e/a,4)+t}},{key:"easeOutQuart",value:function(e,t,n,a){return-n*(Math.pow(e/a-1,4)-1)+t}},{key:"easeInOutQuart",value:function(e,t,n,a){return(e/=a/2)<1?n/2*Math.pow(e,4)+t:-n/2*(Math.pow(e-2,4)-2)+t}},{key:"easeInQuint",value:function(e,t,n,a){return n*Math.pow(e/a,5)+t}},{key:"easeOutQuint",value:function(e,t,n,a){return n*(Math.pow(e/a-1,5)+1)+t}},{key:"easeInOutQuint",value:function(e,t,n,a){return(e/=a/2)<1?n/2*Math.pow(e,5)+t:n/2*(Math.pow(e-2,5)+2)+t}},{key:"easeInSine",value:function(e,t,n,a){return n*(1-Math.cos(e/a*(Math.PI/2)))+t}},{key:"easeOutSine",value:function(e,t,n,a){return n*Math.sin(e/a*(Math.PI/2))+t}},{key:"easeInOutSine",value:function(e,t,n,a){return n/2*(1-Math.cos(Math.PI*e/a))+t}},{key:"easeInExpo",value:function(e,t,n,a){return n*Math.pow(2,10*(e/a-1))+t}},{key:"easeOutExpo",value:function(e,t,n,a){return n*(-Math.pow(2,-10*e/a)+1)+t}},{key:"easeInOutExpo",value:function(e,t,n,a){return(e/=a/2)<1?n/2*Math.pow(2,10*(e-1))+t:n/2*(-Math.pow(2,-10*--e)+2)+t}},{key:"easeInCirc",value:function(e,t,n,a){return n*(1-Math.sqrt(1-(e/=a)*e))+t}},{key:"easeOutCirc",value:function(e,t,n,a){return n*Math.sqrt(1-(e=e/a-1)*e)+t}},{key:"easeInOutCirc",value:function(e,t,n,a){return(e/=a/2)<1?n/2*(1-Math.sqrt(1-e*e))+t:n/2*(Math.sqrt(1-(e-=2)*e)+1)+t}}]),e}();exports.Animation=Animation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL0FuaW1hdGlvbi5qcyJdLCJuYW1lcyI6WyJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJfY3JlYXRlQ2xhc3MiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImtleSIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsIkFuaW1hdGlvbiIsInRoaXMiLCJyYWYiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc1JlcXVlc3RBbmltYXRpb25GcmFtZSIsImNiIiwic2V0VGltZW91dCIsImFuaW1hdGluZyIsImludGVydmFsIiwidGltZXJzIiwiX2hhbmRsZUFuaW1hdGlvbiIsImhhbmRsZUFuaW1hdGlvbiIsImFwcGx5IiwiYXJndW1lbnRzIiwidG9TdHJpbmciLCJ0aWNrIiwiX3RpbWVyIiwicHVzaCIsImN1cnJlbnRJdGVyYXRpb24iLCJzdGFydFZhbHVlIiwiY2hhbmdlSW5WYWx1ZSIsInRvdGFsSXRlcmF0aW9ucyIsIk1hdGgiLCJwb3ciLCJjb3MiLCJQSSIsInNpbiIsInNxcnQiXSwibWFwcGluZ3MiOiJBQWlDQSxZQVFBLFNBQVNBLGlCQUFnQkMsRUFBVUMsR0FBZSxLQUFNRCxZQUFvQkMsSUFBZ0IsS0FBTSxJQUFJQyxXQUFVLHFDQU5oSEMsT0FBT0MsZUFBZUMsUUFBUyxjQUMzQkMsT0FBTyxHQUdYLElBQUlDLGNBQWUsV0FBZSxRQUFTQyxHQUFpQkMsRUFBUUMsR0FBUyxJQUFLLEdBQUlDLEdBQUksRUFBR0EsRUFBSUQsRUFBTUUsT0FB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QUssR0FBS1QsR0FBb0IsR0FBS0EsR0FBb0IsR0FBS0MsTUE5SXhGdEIsSUFrTWJoQixTQUFRZ0IsVUFBWUEiLCJmaWxlIjoidWkvQW5pbWF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqXG4gKiBURVJNUyBPRiBVU0UgLSBFQVNJTkcgRVFVQVRJT05TXG4gKiBcbiAqIE9wZW4gc291cmNlIHVuZGVyIHRoZSBCU0QgTGljZW5zZS4gXG4gKiBcbiAqIENvcHlyaWdodCDDgsKpIDIwMDEgUm9iZXJ0IFBlbm5lclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbiwgXG4gKiBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKiBcbiAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIFxuICogY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3QgXG4gKiBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBcbiAqIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqIFxuICogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgYXV0aG9yIG5vciB0aGUgbmFtZXMgb2YgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2UgXG4gKiBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuICogXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBBTkQgQU5ZIFxuICogRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GXG4gKiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIENPUFlSSUdIVCBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCxcbiAqIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURVxuICogR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIFxuICogQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkdcbiAqIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIFxuICogT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLiBcbiAqXG4gKi9cblxuXG5cbmV4cG9ydCBjbGFzcyBBbmltYXRpb24ge1xuICAgLyoqXG4gICAqIFJlcHJlc2VudHMgQW5pbWF0aW9uIGJ1aWxkcyBBbmltYXRpb24gbGlicmFyeSBmb3IgdXNlIGV4cG9ydHMgYXMgd2luZG93LkNBVEFNQVJBTi51aS5BbmltYXRpb24gZm9yIHVzZS5cbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy5yYWYgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IFxuICAgICAgICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBcbiAgICAgICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgXG4gICAgICAgICAgICB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGNiKSB7IHJldHVybiB3aW5kb3cuc2V0VGltZW91dChjYiwgMTAwMCAvIDYwKTsgfTtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJ2YWwgPSAxO1xuICAgICAgICAgICAgdGhpcy50aW1lcnMgPSBbXTtcbiAgICB9XG5cbiAgICBzdG9wKCl7XG4gICAgICAgIHRoaXMuYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaGFuZGxlQW5pbWF0aW9uKCkge1xuICAgICAgICBpZiAoIGFuaW1hdGluZyApIHtcbiAgICAgICAgICAgIHRoaXMucmFmKCBoYW5kbGVBbmltYXRpb24gKTtcbiAgICAgICAgICAgIHRoaXMudGljaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGljaygpe1xuICAgICAgICB0aGlzLmludGVydmFsICs9IDE7XG4gICAgfVxuXG4gICAgdGltZXIoIHRpbWVyICkge1xuICAgICAgICBpZiAoIHRpbWVyKCkgJiYgdGhpcy50aW1lcnMucHVzaCggdGltZXIgKSAmJiAhdGhpcy5hbmltYXRpbmcgKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGluZyA9IHRydWU7XG4gICAgICAgICAgICBoYW5kbGVBbmltYXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgbGluZWFyRWFzZShjdXJyZW50SXRlcmF0aW9uLCBzdGFydFZhbHVlLCBjaGFuZ2VJblZhbHVlLCB0b3RhbEl0ZXJhdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGNoYW5nZUluVmFsdWUgKiBjdXJyZW50SXRlcmF0aW9uIC8gdG90YWxJdGVyYXRpb25zICsgc3RhcnRWYWx1ZTtcbiAgICB9XG5cbiAgICBlYXNlSW5RdWFkKGN1cnJlbnRJdGVyYXRpb24sIHN0YXJ0VmFsdWUsIGNoYW5nZUluVmFsdWUsIHRvdGFsSXRlcmF0aW9ucykge1xuICAgICAgICByZXR1cm4gY2hhbmdlSW5WYWx1ZSAqIChjdXJyZW50SXRlcmF0aW9uIC89IHRvdGFsSXRlcmF0aW9ucykgKiBjdXJyZW50SXRlcmF0aW9uICsgc3RhcnRWYWx1ZTtcbiAgICB9XG5cbiAgICBlYXNlT3V0UXVhZChjdXJyZW50SXRlcmF0aW9uLCBzdGFydFZhbHVlLCBjaGFuZ2VJblZhbHVlLCB0b3RhbEl0ZXJhdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIC1jaGFuZ2VJblZhbHVlICogKGN1cnJlbnRJdGVyYXRpb24gLz0gdG90YWxJdGVyYXRpb25zKSAqIChjdXJyZW50SXRlcmF0aW9uIC0gMikgKyBzdGFydFZhbHVlO1xuICAgIH1cblxuICAgIGVhc2VJbk91dFF1YWQoY3VycmVudEl0ZXJhdGlvbiwgc3RhcnRWYWx1ZSwgY2hhbmdlSW5WYWx1ZSwgdG90YWxJdGVyYXRpb25zKSB7XG4gICAgICAgIGlmICgoY3VycmVudEl0ZXJhdGlvbiAvPSB0b3RhbEl0ZXJhdGlvbnMgLyAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGFuZ2VJblZhbHVlIC8gMiAqIGN1cnJlbnRJdGVyYXRpb24gKiBjdXJyZW50SXRlcmF0aW9uICsgc3RhcnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLWNoYW5nZUluVmFsdWUgLyAyICogKCgtLWN1cnJlbnRJdGVyYXRpb24pICogKGN1cnJlbnRJdGVyYXRpb24gLSAyKSAtIDEpICsgc3RhcnRWYWx1ZTtcbiAgICB9XG5cbiAgICBlYXNlSW5DdWJpYyhjdXJyZW50SXRlcmF0aW9uLCBzdGFydFZhbHVlLCBjaGFuZ2VJblZhbHVlLCB0b3RhbEl0ZXJhdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGNoYW5nZUluVmFsdWUgKiBNYXRoLnBvdyhjdXJyZW50SXRlcmF0aW9uIC8gdG90YWxJdGVyYXRpb25zLCAzKSArIHN0YXJ0VmFsdWU7XG4gICAgfVxuXG4gICAgZWFzZU91dEN1YmljKGN1cnJlbnRJdGVyYXRpb24sIHN0YXJ0VmFsdWUsIGNoYW5nZUluVmFsdWUsIHRvdGFsSXRlcmF0aW9ucykge1xuICAgICAgICByZXR1cm4gY2hhbmdlSW5WYWx1ZSAqIChNYXRoLnBvdyhjdXJyZW50SXRlcmF0aW9uIC8gdG90YWxJdGVyYXRpb25zIC0gMSwgMykgKyAxKSArIHN0YXJ0VmFsdWU7XG4gICAgfVxuXG4gICAgZWFzZUluT3V0Q3ViaWMoY3VycmVudEl0ZXJhdGlvbiwgc3RhcnRWYWx1ZSwgY2hhbmdlSW5WYWx1ZSwgdG90YWxJdGVyYXRpb25zKSB7XG4gICAgICAgIGlmICgoY3VycmVudEl0ZXJhdGlvbiAvPSB0b3RhbEl0ZXJhdGlvbnMgLyAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGFuZ2VJblZhbHVlIC8gMiAqIE1hdGgucG93KGN1cnJlbnRJdGVyYXRpb24sIDMpICsgc3RhcnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hhbmdlSW5WYWx1ZSAvIDIgKiAoTWF0aC5wb3coY3VycmVudEl0ZXJhdGlvbiAtIDIsIDMpICsgMikgKyBzdGFydFZhbHVlO1xuICAgIH1cblxuICAgIGVhc2VJblF1YXJ0KGN1cnJlbnRJdGVyYXRpb24sIHN0YXJ0VmFsdWUsIGNoYW5nZUluVmFsdWUsIHRvdGFsSXRlcmF0aW9ucykge1xuICAgICAgICByZXR1cm4gY2hhbmdlSW5WYWx1ZSAqIE1hdGgucG93KGN1cnJlbnRJdGVyYXRpb24gLyB0b3RhbEl0ZXJhdGlvbnMsIDQpICsgc3RhcnRWYWx1ZTtcbiAgICB9XG5cbiAgICBlYXNlT3V0UXVhcnQoY3VycmVudEl0ZXJhdGlvbiwgc3RhcnRWYWx1ZSwgY2hhbmdlSW5WYWx1ZSwgdG90YWxJdGVyYXRpb25zKSB7XG4gICAgICAgIHJldHVybiAtY2hhbmdlSW5WYWx1ZSAqIChNYXRoLnBvdyhjdXJyZW50SXRlcmF0aW9uIC8gdG90YWxJdGVyYXRpb25zIC0gMSwgNCkgLSAxKSArIHN0YXJ0VmFsdWU7XG4gICAgfVxuXG4gICAgZWFzZUluT3V0UXVhcnQoY3VycmVudEl0ZXJhdGlvbiwgc3RhcnRWYWx1ZSwgY2hhbmdlSW5WYWx1ZSwgdG90YWxJdGVyYXRpb25zKSB7XG4gICAgICAgIGlmICgoY3VycmVudEl0ZXJhdGlvbiAvPSB0b3RhbEl0ZXJhdGlvbnMgLyAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGFuZ2VJblZhbHVlIC8gMiAqIE1hdGgucG93KGN1cnJlbnRJdGVyYXRpb24sIDQpICsgc3RhcnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLWNoYW5nZUluVmFsdWUgLyAyICogKE1hdGgucG93KGN1cnJlbnRJdGVyYXRpb24gLSAyLCA0KSAtIDIpICsgc3RhcnRWYWx1ZTtcbiAgICB9XG5cbiAgICBlYXNlSW5RdWludChjdXJyZW50SXRlcmF0aW9uLCBzdGFydFZhbHVlLCBjaGFuZ2VJblZhbHVlLCB0b3RhbEl0ZXJhdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGNoYW5nZUluVmFsdWUgKiBNYXRoLnBvdyhjdXJyZW50SXRlcmF0aW9uIC8gdG90YWxJdGVyYXRpb25zLCA1KSArIHN0YXJ0VmFsdWU7XG4gICAgfVxuXG4gICAgZWFzZU91dFF1aW50KGN1cnJlbnRJdGVyYXRpb24sIHN0YXJ0VmFsdWUsIGNoYW5nZUluVmFsdWUsIHRvdGFsSXRlcmF0aW9ucykge1xuICAgICAgICByZXR1cm4gY2hhbmdlSW5WYWx1ZSAqIChNYXRoLnBvdyhjdXJyZW50SXRlcmF0aW9uIC8gdG90YWxJdGVyYXRpb25zIC0gMSwgNSkgKyAxKSArIHN0YXJ0VmFsdWU7XG4gICAgfVxuXG4gICAgZWFzZUluT3V0UXVpbnQoY3VycmVudEl0ZXJhdGlvbiwgc3RhcnRWYWx1ZSwgY2hhbmdlSW5WYWx1ZSwgdG90YWxJdGVyYXRpb25zKSB7XG4gICAgICAgIGlmICgoY3VycmVudEl0ZXJhdGlvbiAvPSB0b3RhbEl0ZXJhdGlvbnMgLyAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGFuZ2VJblZhbHVlIC8gMiAqIE1hdGgucG93KGN1cnJlbnRJdGVyYXRpb24sIDUpICsgc3RhcnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hhbmdlSW5WYWx1ZSAvIDIgKiAoTWF0aC5wb3coY3VycmVudEl0ZXJhdGlvbiAtIDIsIDUpICsgMikgKyBzdGFydFZhbHVlO1xuICAgIH1cblxuICAgIGVhc2VJblNpbmUoY3VycmVudEl0ZXJhdGlvbiwgc3RhcnRWYWx1ZSwgY2hhbmdlSW5WYWx1ZSwgdG90YWxJdGVyYXRpb25zKSB7XG4gICAgICAgIHJldHVybiBjaGFuZ2VJblZhbHVlICogKDEgLSBNYXRoLmNvcyhjdXJyZW50SXRlcmF0aW9uIC8gdG90YWxJdGVyYXRpb25zICogKE1hdGguUEkgLyAyKSkpICsgc3RhcnRWYWx1ZTtcbiAgICB9XG5cbiAgICBlYXNlT3V0U2luZShjdXJyZW50SXRlcmF0aW9uLCBzdGFydFZhbHVlLCBjaGFuZ2VJblZhbHVlLCB0b3RhbEl0ZXJhdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGNoYW5nZUluVmFsdWUgKiBNYXRoLnNpbihjdXJyZW50SXRlcmF0aW9uIC8gdG90YWxJdGVyYXRpb25zICogKE1hdGguUEkgLyAyKSkgKyBzdGFydFZhbHVlO1xuICAgIH1cblxuICAgIGVhc2VJbk91dFNpbmUoY3VycmVudEl0ZXJhdGlvbiwgc3RhcnRWYWx1ZSwgY2hhbmdlSW5WYWx1ZSwgdG90YWxJdGVyYXRpb25zKSB7XG4gICAgICAgIHJldHVybiBjaGFuZ2VJblZhbHVlIC8gMiAqICgxIC0gTWF0aC5jb3MoTWF0aC5QSSAqIGN1cnJlbnRJdGVyYXRpb24gLyB0b3RhbEl0ZXJhdGlvbnMpKSArIHN0YXJ0VmFsdWU7XG4gICAgfVxuXG4gICAgZWFzZUluRXhwbyhjdXJyZW50SXRlcmF0aW9uLCBzdGFydFZhbHVlLCBjaGFuZ2VJblZhbHVlLCB0b3RhbEl0ZXJhdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGNoYW5nZUluVmFsdWUgKiBNYXRoLnBvdygyLCAxMCAqIChjdXJyZW50SXRlcmF0aW9uIC8gdG90YWxJdGVyYXRpb25zIC0gMSkpICsgc3RhcnRWYWx1ZTtcbiAgICB9XG5cbiAgICBlYXNlT3V0RXhwbyhjdXJyZW50SXRlcmF0aW9uLCBzdGFydFZhbHVlLCBjaGFuZ2VJblZhbHVlLCB0b3RhbEl0ZXJhdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGNoYW5nZUluVmFsdWUgKiAoLU1hdGgucG93KDIsIC0xMCAqIGN1cnJlbnRJdGVyYXRpb24gLyB0b3RhbEl0ZXJhdGlvbnMpICsgMSkgKyBzdGFydFZhbHVlO1xuICAgIH1cblxuICAgIGVhc2VJbk91dEV4cG8oY3VycmVudEl0ZXJhdGlvbiwgc3RhcnRWYWx1ZSwgY2hhbmdlSW5WYWx1ZSwgdG90YWxJdGVyYXRpb25zKSB7XG4gICAgICAgIGlmICgoY3VycmVudEl0ZXJhdGlvbiAvPSB0b3RhbEl0ZXJhdGlvbnMgLyAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGFuZ2VJblZhbHVlIC8gMiAqIE1hdGgucG93KDIsIDEwICogKGN1cnJlbnRJdGVyYXRpb24gLSAxKSkgKyBzdGFydFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGFuZ2VJblZhbHVlIC8gMiAqICgtTWF0aC5wb3coMiwgLTEwICogLS1jdXJyZW50SXRlcmF0aW9uKSArIDIpICsgc3RhcnRWYWx1ZTtcbiAgICB9XG5cbiAgICBlYXNlSW5DaXJjKGN1cnJlbnRJdGVyYXRpb24sIHN0YXJ0VmFsdWUsIGNoYW5nZUluVmFsdWUsIHRvdGFsSXRlcmF0aW9ucykge1xuICAgICAgICByZXR1cm4gY2hhbmdlSW5WYWx1ZSAqICgxIC0gTWF0aC5zcXJ0KDEgLSAoY3VycmVudEl0ZXJhdGlvbiAvPSB0b3RhbEl0ZXJhdGlvbnMpICogY3VycmVudEl0ZXJhdGlvbikpICsgc3RhcnRWYWx1ZTtcbiAgICB9XG5cbiAgICBlYXNlT3V0Q2lyYyhjdXJyZW50SXRlcmF0aW9uLCBzdGFydFZhbHVlLCBjaGFuZ2VJblZhbHVlLCB0b3RhbEl0ZXJhdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGNoYW5nZUluVmFsdWUgKiBNYXRoLnNxcnQoMSAtIChjdXJyZW50SXRlcmF0aW9uID0gY3VycmVudEl0ZXJhdGlvbiAvIHRvdGFsSXRlcmF0aW9ucyAtIDEpICogY3VycmVudEl0ZXJhdGlvbikgKyBzdGFydFZhbHVlO1xuICAgIH1cblxuICAgIGVhc2VJbk91dENpcmMoY3VycmVudEl0ZXJhdGlvbiwgc3RhcnRWYWx1ZSwgY2hhbmdlSW5WYWx1ZSwgdG90YWxJdGVyYXRpb25zKSB7XG4gICAgICAgIGlmICgoY3VycmVudEl0ZXJhdGlvbiAvPSB0b3RhbEl0ZXJhdGlvbnMgLyAyKSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGFuZ2VJblZhbHVlIC8gMiAqICgxIC0gTWF0aC5zcXJ0KDEgLSBjdXJyZW50SXRlcmF0aW9uICogY3VycmVudEl0ZXJhdGlvbikpICsgc3RhcnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hhbmdlSW5WYWx1ZSAvIDIgKiAoTWF0aC5zcXJ0KDEgLSAoY3VycmVudEl0ZXJhdGlvbiAtPSAyKSAqIGN1cnJlbnRJdGVyYXRpb24pICsgMSkgKyBzdGFydFZhbHVlO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==