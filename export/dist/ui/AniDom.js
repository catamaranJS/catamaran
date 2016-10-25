"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),_get=function(t,e,i){for(var r=!0;r;){var n=t,a=e,h=i;r=!1,null===n&&(n=Function.prototype);var s=Object.getOwnPropertyDescriptor(n,a);if(void 0!==s){if("value"in s)return s.value;var o=s.get;return void 0===o?void 0:o.call(h)}var c=Object.getPrototypeOf(n);if(null===c)return void 0;t=c,e=a,i=h,r=!0,s=c=void 0}},_AnimationJs=require("./Animation.js"),AniDom=function(t){function e(){_classCallCheck(this,e),_get(Object.getPrototypeOf(e.prototype),"constructor",this).call(this),this.frames=[],this.lastId=0,this.batch={hash:{},read:[],write:[],mode:null}}return _inherits(e,t),_createClass(e,[{key:"read",value:function(t,e){var i=this.add("read",t,e),r=i.id;this.batch.read.push(i.id);var n="reading"===this.batch.mode||this.batch.scheduled;return n?r:(this.scheduleBatch(),r)}},{key:"write",value:function(t,e){var i=this.add("write",t,e),r=this.batch.mode,n=i.id;this.batch.write.push(i.id);var a="writing"===r||"reading"===r||this.batch.scheduled;return a?n:(this.scheduleBatch(),n)}},{key:"defer",value:function(t,e,i){"function"==typeof t&&(i=e,e=t,t=1);var r=this,n=t-1;return this.schedule(n,function(){r.run({fn:e,ctx:i})})}},{key:"clear",value:function(t){if("function"==typeof t)return this.clearFrame(t);t=Number(t);var e=this.batch.hash[t];if(e){var i=this.batch[e.type],r=i.indexOf(t);delete this.batch.hash[t],~r&&i.splice(r,1)}}},{key:"clearFrame",value:function(t){var e=this.frames.indexOf(t);~e&&this.frames.splice(e,1)}},{key:"scheduleBatch",value:function(){var t=this;this.schedule(0,function(){t.batch.scheduled=!1,t.runBatch()}),this.batch.scheduled=!0}},{key:"uniqueId",value:function(){return++this.lastId}},{key:"flush",value:function(t){for(var e;e=t.shift();)this.run(this.batch.hash[e])}},{key:"runBatch",value:function(){try{this.batch.mode="reading",this.flush(this.batch.read),this.batch.mode="writing",this.flush(this.batch.write),this.batch.mode=null}catch(t){throw this.runBatch(),t}}},{key:"add",value:function(t,e,i){var r=this.uniqueId();return this.batch.hash[r]={id:r,fn:e,ctx:i,type:t}}},{key:"run",value:function(t){var e=t.ctx||this,i=t.fn;if(delete this.batch.hash[t.id],!this.onError)return i.call(e);try{i.call(e)}catch(r){this.onError(r)}}},{key:"loop",value:function(){var t=this,e=this.raf;this.looping||(e(function i(){var r=t.frames.shift();t.frames.length?e(i):t.looping=!1,r&&r()}),this.looping=!0)}},{key:"schedule",value:function(t,e){return this.frames[t]?this.schedule(t+1,e):(this.loop(),this.frames[t]=e)}}]),e}(_AnimationJs.Animation);exports.AniDom=AniDom;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL0FuaURvbS5qcyJdLCJuYW1lcyI6WyJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2luaGVyaXRzIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiY29uc3RydWN0b3IiLCJ2YWx1ZSIsImVudW1lcmFibGUiLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJrZXkiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfZ2V0IiwiX3giLCJfeDIiLCJfeDMiLCJfYWdhaW4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInJlY2VpdmVyIiwiRnVuY3Rpb24iLCJkZXNjIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidW5kZWZpbmVkIiwiZ2V0dGVyIiwiZ2V0IiwiY2FsbCIsInBhcmVudCIsImdldFByb3RvdHlwZU9mIiwiX0FuaW1hdGlvbkpzIiwicmVxdWlyZSIsIkFuaURvbSIsIl9BbmltYXRpb24iLCJ0aGlzIiwiZnJhbWVzIiwibGFzdElkIiwiYmF0Y2giLCJoYXNoIiwicmVhZCIsIndyaXRlIiwibW9kZSIsImZuIiwiY3R4Iiwiam9iIiwiYWRkIiwiaWQiLCJwdXNoIiwiZG9lc250TmVlZEZyYW1lIiwic2NoZWR1bGVkIiwic2NoZWR1bGVCYXRjaCIsImZyYW1lIiwic2VsZiIsImluZGV4Iiwic2NoZWR1bGUiLCJydW4iLCJjbGVhckZyYW1lIiwiTnVtYmVyIiwibGlzdCIsInR5cGUiLCJpbmRleE9mIiwic3BsaWNlIiwicnVuQmF0Y2giLCJzaGlmdCIsImZsdXNoIiwiZSIsInVuaXF1ZUlkIiwib25FcnJv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USxFQUFHWCxJQU1wQ1IsS0FBS29DLE9BSUVwQyxLQUFLQyxPQUFPa0IsR0FBU1gsT0EzV3ZCVixHQTJaVkYsYUFBYXlDLFVBRWhCckUsU0FBUThCLE9BQVNBIiwiZmlsZSI6InVpL0FuaURvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaHR0cHM6Ly9naXRodWIuY29tL3dpbHNvbnBhZ2UvZmFzdGRvbS9ibG9iL21hc3Rlci9pbmRleC5qcyBcbmltcG9ydCB7QW5pbWF0aW9ufSBmcm9tICcuL0FuaW1hdGlvbi5qcyc7XG5cbmV4cG9ydCBjbGFzcyBBbmlEb20gZXh0ZW5kcyBBbmltYXRpb24ge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5mcmFtZXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMubGFzdElkID0gMDtcbiAgICAgICAgICAgIHRoaXMuYmF0Y2ggPSB7XG4gICAgICAgICAgICAgICAgaGFzaDoge30sXG4gICAgICAgICAgICAgICAgcmVhZDogW10sXG4gICAgICAgICAgICAgICAgd3JpdGU6IFtdLFxuICAgICAgICAgICAgICAgIG1vZGU6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgam9iIHRvIHRoZVxuICAgICAqIHJlYWQgYmF0Y2ggYW5kIHNjaGVkdWxlc1xuICAgICAqIGEgbmV3IGZyYW1lIGlmIG5lZWQgYmUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm5cbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgcmVhZChmbiwgY3R4KSB7XG4gICAgICAgIHZhciBqb2IgPSB0aGlzLmFkZCgncmVhZCcsIGZuLCBjdHgpO1xuICAgICAgICB2YXIgaWQgPSBqb2IuaWQ7XG5cbiAgICAgICAgLy8gQWRkIHRoaXMgam9iIHRvIHRoZSByZWFkIHF1ZXVlXG4gICAgICAgIHRoaXMuYmF0Y2gucmVhZC5wdXNoKGpvYi5pZCk7XG5cbiAgICAgICAgLy8gV2Ugc2hvdWxkICpub3QqIHNjaGVkdWxlIGEgbmV3IGZyYW1lIGlmOlxuICAgICAgICAvLyAxLiBXZSdyZSAncmVhZGluZydcbiAgICAgICAgLy8gMi4gQSBmcmFtZSBpcyBhbHJlYWR5IHNjaGVkdWxlZFxuICAgICAgICB2YXIgZG9lc250TmVlZEZyYW1lID0gdGhpcy5iYXRjaC5tb2RlID09PSAncmVhZGluZycgfHwgdGhpcy5iYXRjaC5zY2hlZHVsZWQ7XG5cbiAgICAgICAgLy8gSWYgYSBmcmFtZSBpc24ndCBuZWVkZWQsIHJldHVyblxuICAgICAgICBpZiAoZG9lc250TmVlZEZyYW1lKSByZXR1cm4gaWQ7XG5cbiAgICAgICAgLy8gU2NoZWR1bGUgYSBuZXdcbiAgICAgICAgLy8gZnJhbWUsIHRoZW4gcmV0dXJuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVCYXRjaCgpO1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIGpvYiB0byB0aGVcbiAgICAgKiB3cml0ZSBiYXRjaCBhbmQgc2NoZWR1bGVzXG4gICAgICogYSBuZXcgZnJhbWUgaWYgbmVlZCBiZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmblxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICB3cml0ZShmbiwgY3R4KSB7XG4gICAgICAgIHZhciBqb2IgPSB0aGlzLmFkZCgnd3JpdGUnLCBmbiwgY3R4KTtcbiAgICAgICAgdmFyIG1vZGUgPSB0aGlzLmJhdGNoLm1vZGU7XG4gICAgICAgIHZhciBpZCA9IGpvYi5pZDtcblxuICAgICAgICAvLyBQdXNoIHRoZSBqb2IgaWQgaW50byB0aGUgcXVldWVcbiAgICAgICAgdGhpcy5iYXRjaC53cml0ZS5wdXNoKGpvYi5pZCk7XG5cbiAgICAgICAgLy8gV2Ugc2hvdWxkICpub3QqIHNjaGVkdWxlIGEgbmV3IGZyYW1lIGlmOlxuICAgICAgICAvLyAxLiBXZSBhcmUgJ3dyaXRpbmcnXG4gICAgICAgIC8vIDIuIFdlIGFyZSAncmVhZGluZydcbiAgICAgICAgLy8gMy4gQSBmcmFtZSBpcyBhbHJlYWR5IHNjaGVkdWxlZC5cbiAgICAgICAgdmFyIGRvZXNudE5lZWRGcmFtZSA9IG1vZGUgPT09ICd3cml0aW5nJyB8fCBtb2RlID09PSAncmVhZGluZycgfHwgdGhpcy5iYXRjaC5zY2hlZHVsZWQ7XG5cbiAgICAgICAgLy8gSWYgYSBmcmFtZSBpc24ndCBuZWVkZWQsIHJldHVyblxuICAgICAgICBpZiAoZG9lc250TmVlZEZyYW1lKSByZXR1cm4gaWQ7XG5cbiAgICAgICAgLy8gU2NoZWR1bGUgYSBuZXdcbiAgICAgICAgLy8gZnJhbWUsIHRoZW4gcmV0dXJuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVCYXRjaCgpO1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmZXJzIHRoZSBnaXZlbiBqb2JcbiAgICAgKiBieSB0aGUgbnVtYmVyIG9mIGZyYW1lc1xuICAgICAqIHNwZWNpZmllZC5cbiAgICAgKlxuICAgICAqIElmIG5vIGZyYW1lcyBhcmUgZ2l2ZW5cbiAgICAgKiB0aGVuIHRoZSBqb2IgaXMgcnVuIGluXG4gICAgICogdGhlIG5leHQgZnJlZSBmcmFtZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge051bWJlcn0gICBmcmFtZVxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmblxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBkZWZlcihmcmFtZSwgZm4sIGN0eCkge1xuXG4gICAgICAgIC8vIEFjY2VwdHMgdHdvIGFyZ3VtZW50c1xuICAgICAgICBpZiAodHlwZW9mIGZyYW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjdHggPSBmbjtcbiAgICAgICAgICAgIGZuID0gZnJhbWU7XG4gICAgICAgICAgICBmcmFtZSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBpbmRleCA9IGZyYW1lIC0gMTtcblxuICAgICAgICByZXR1cm4gdGhpcy5zY2hlZHVsZShpbmRleCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLnJ1bih7XG4gICAgICAgICAgICAgICAgZm46IGZuLFxuICAgICAgICAgICAgICAgIGN0eDogY3R4XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhIHNjaGVkdWxlZCAncmVhZCcsXG4gICAgICogJ3dyaXRlJyBvciAnZGVmZXInIGpvYi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge051bWJlcnxTdHJpbmd9IGlkXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGNsZWFyKGlkKSB7XG5cbiAgICAgICAgLy8gRGVmZXIgam9icyBhcmUgY2xlYXJlZCBkaWZmZXJlbnRseVxuICAgICAgICBpZiAodHlwZW9mIGlkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbGVhckZyYW1lKGlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFsbG93IGlkcyB0byBiZSBwYXNzZWQgYXMgc3RyaW5nc1xuICAgICAgICBpZCA9IE51bWJlcihpZCk7XG5cbiAgICAgICAgdmFyIGpvYiA9IHRoaXMuYmF0Y2guaGFzaFtpZF07XG4gICAgICAgIGlmICgham9iKSByZXR1cm47XG5cbiAgICAgICAgdmFyIGxpc3QgPSB0aGlzLmJhdGNoW2pvYi50eXBlXTtcbiAgICAgICAgdmFyIGluZGV4ID0gbGlzdC5pbmRleE9mKGlkKTtcblxuICAgICAgICAvLyBDbGVhciByZWZlcmVuY2VzXG4gICAgICAgIGRlbGV0ZSB0aGlzLmJhdGNoLmhhc2hbaWRdO1xuICAgICAgICBpZiAofmluZGV4KSBsaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhIHNjaGVkdWxlZCBmcmFtZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmcmFtZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgY2xlYXJGcmFtZShmcmFtZSkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmZyYW1lcy5pbmRleE9mKGZyYW1lKTtcbiAgICAgICAgaWYgKH5pbmRleCkgdGhpcy5mcmFtZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY2hlZHVsZXMgYSBuZXcgcmVhZC93cml0ZVxuICAgICAqIGJhdGNoIGlmIG9uZSBpc24ndCBwZW5kaW5nLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzY2hlZHVsZUJhdGNoKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgLy8gU2NoZWR1bGUgYmF0Y2ggZm9yIG5leHQgZnJhbWVcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYuYmF0Y2guc2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgICAgICBzZWxmLnJ1bkJhdGNoKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFNldCBmbGFnIHRvIGluZGljYXRlXG4gICAgICAgIC8vIGEgZnJhbWUgaGFzIGJlZW4gc2NoZWR1bGVkXG4gICAgICAgIHRoaXMuYmF0Y2guc2NoZWR1bGVkID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgdW5pcXVlXG4gICAgICogaWQgZm9yIGEgam9iLlxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdW5pcXVlSWQoKSB7XG4gICAgICAgIHJldHVybiArK3RoaXMubGFzdElkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxzIGVhY2ggam9iIGluXG4gICAgICogdGhlIGxpc3QgcGFzc2VkLlxuICAgICAqXG4gICAgICogSWYgYSBjb250ZXh0IGhhcyBiZWVuXG4gICAgICogc3RvcmVkIG9uIHRoZSBmdW5jdGlvblxuICAgICAqIHRoZW4gaXQgaXMgdXNlZCwgZWxzZSB0aGVcbiAgICAgKiBjdXJyZW50IGB0aGlzYCBpcyB1c2VkLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7QXJyYXl9IGxpc3RcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZsdXNoKGxpc3QpIHtcbiAgICAgICAgdmFyIGlkO1xuICAgICAgICB3aGlsZSAoaWQgPSBsaXN0LnNoaWZ0KCkpIHtcbiAgICAgICAgICAgIHRoaXMucnVuKHRoaXMuYmF0Y2guaGFzaFtpZF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUnVucyBhbnkgJ3JlYWQnIGpvYnMgZm9sbG93ZWRcbiAgICAgKiBieSBhbnkgJ3dyaXRlJyBqb2JzLlxuICAgICAqXG4gICAgICogV2UgcnVuIHRoaXMgaW5zaWRlIGEgdHJ5IGNhdGNoXG4gICAgICogc28gdGhhdCBpZiBhbnkgam9icyBlcnJvciwgd2VcbiAgICAgKiBhcmUgYWJsZSB0byByZWNvdmVyIGFuZCBjb250aW51ZVxuICAgICAqIHRvIGZsdXNoIHRoZSBiYXRjaCB1bnRpbCBpdCdzIGVtcHR5LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBydW5CYXRjaCgpIHtcbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgLy8gU2V0IHRoZSBtb2RlIHRvICdyZWFkaW5nJyxcbiAgICAgICAgICAgIC8vIHRoZW4gZW1wdHkgYWxsIHJlYWQgam9ic1xuICAgICAgICAgICAgdGhpcy5iYXRjaC5tb2RlID0gJ3JlYWRpbmcnO1xuICAgICAgICAgICAgdGhpcy5mbHVzaCh0aGlzLmJhdGNoLnJlYWQpO1xuXG4gICAgICAgICAgICAvLyBTZXQgdGhlIG1vZGUgdG8gJ3dyaXRpbmcnXG4gICAgICAgICAgICAvLyB0aGVuIGVtcHR5IGFsbCB3cml0ZSBqb2JzXG4gICAgICAgICAgICB0aGlzLmJhdGNoLm1vZGUgPSAnd3JpdGluZyc7XG4gICAgICAgICAgICB0aGlzLmZsdXNoKHRoaXMuYmF0Y2gud3JpdGUpO1xuXG4gICAgICAgICAgICB0aGlzLmJhdGNoLm1vZGUgPSBudWxsO1xuXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRoaXMucnVuQmF0Y2goKTtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgbmV3IGpvYiB0b1xuICAgICAqIHRoZSBnaXZlbiBiYXRjaC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9ICAgbGlzdFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gICAgICogQHBhcmFtIHtPYmplY3R9ICAgY3R4XG4gICAgICogQHJldHVybnMge051bWJlcn0gaWRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFkZCh0eXBlLCBmbiwgY3R4KSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXMudW5pcXVlSWQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmF0Y2guaGFzaFtpZF0gPSB7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICBmbjogZm4sXG4gICAgICAgICAgICBjdHg6IGN0eCxcbiAgICAgICAgICAgIHR5cGU6IHR5cGVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSdW5zIGEgZ2l2ZW4gam9iLlxuICAgICAqXG4gICAgICogQXBwbGljYXRpb25zIHVzaW5nIEZhc3REb21cbiAgICAgKiBoYXZlIHRoZSBvcHRpb25zIG9mIHNldHRpbmdcbiAgICAgKiBgZmFzdGRvbS5vbkVycm9yYC5cbiAgICAgKlxuICAgICAqIFRoaXMgd2lsbCBjYXRjaCBhbnlcbiAgICAgKiBlcnJvcnMgdGhhdCBtYXkgdGhyb3dcbiAgICAgKiBpbnNpZGUgY2FsbGJhY2tzLCB3aGljaFxuICAgICAqIGlzIHVzZWZ1bCBhcyBvZnRlbiBET01cbiAgICAgKiBub2RlcyBoYXZlIGJlZW4gcmVtb3ZlZFxuICAgICAqIHNpbmNlIGEgam9iIHdhcyBzY2hlZHVsZWQuXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOlxuICAgICAqXG4gICAgICogICBmYXN0ZG9tLm9uRXJyb3IgPSBmdW5jdGlvbihlKSB7XG4gICAgICogICAgIC8vIFJ1bnMgd2hlbiBqb2JzIGVycm9yXG4gICAgICogICB9O1xuICAgICAqXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBqb2JcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHJ1bihqb2IpIHtcbiAgICAgICAgdmFyIGN0eCA9IGpvYi5jdHggfHwgdGhpcztcbiAgICAgICAgdmFyIGZuID0gam9iLmZuO1xuXG4gICAgICAgIC8vIENsZWFyIHJlZmVyZW5jZSB0byB0aGUgam9iXG4gICAgICAgIGRlbGV0ZSB0aGlzLmJhdGNoLmhhc2hbam9iLmlkXTtcblxuICAgICAgICAvLyBJZiBubyBgb25FcnJvcmAgaGFuZGxlclxuICAgICAgICAvLyBoYXMgYmVlbiByZWdpc3RlcmVkLCBqdXN0XG4gICAgICAgIC8vIHJ1biB0aGUgam9iIG5vcm1hbGx5LlxuICAgICAgICBpZiAoIXRoaXMub25FcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGZuLmNhbGwoY3R4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGFuIGBvbkVycm9yYCBoYW5kbGVyXG4gICAgICAgIC8vIGhhcyBiZWVuIHJlZ2lzdGVyZWQsIGNhdGNoXG4gICAgICAgIC8vIGVycm9ycyB0aGF0IHRocm93IGluc2lkZVxuICAgICAgICAvLyBjYWxsYmFja3MsIGFuZCBydW4gdGhlXG4gICAgICAgIC8vIGhhbmRsZXIgaW5zdGVhZC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZuLmNhbGwoY3R4KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhpcy5vbkVycm9yKGUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyBhIHJBRiBsb29wXG4gICAgICogdG8gZW1wdHkgdGhlIGZyYW1lIHF1ZXVlLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBsb29wKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciByYWYgPSB0aGlzLnJhZjtcblxuICAgICAgICAvLyBEb24ndCBzdGFydCBtb3JlIHRoYW4gb25lIGxvb3BcbiAgICAgICAgaWYgKHRoaXMubG9vcGluZykgcmV0dXJuO1xuXG4gICAgICAgIHJhZihmdW5jdGlvbiBmcmFtZSgpIHtcbiAgICAgICAgICAgIHZhciBmbiA9IHNlbGYuZnJhbWVzLnNoaWZ0KCk7XG5cbiAgICAgICAgICAgIC8vIElmIG5vIG1vcmUgZnJhbWVzLFxuICAgICAgICAgICAgLy8gc3RvcCBsb29waW5nXG4gICAgICAgICAgICBpZiAoIXNlbGYuZnJhbWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNlbGYubG9vcGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBzY2hlZHVsZSB0aGVcbiAgICAgICAgICAgICAgICAvLyBuZXh0IGZyYW1lXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJhZihmcmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJ1biB0aGUgZnJhbWUuICBOb3RlIHRoYXRcbiAgICAgICAgICAgIC8vIHRoaXMgbWF5IHRocm93IGFuIGVycm9yXG4gICAgICAgICAgICAvLyBpbiB1c2VyIGNvZGUsIGJ1dCBhbGxcbiAgICAgICAgICAgIC8vIGZhc3Rkb20gdGFza3MgYXJlIGRlYWx0XG4gICAgICAgICAgICAvLyB3aXRoIGFscmVhZHkgc28gdGhlIGNvZGVcbiAgICAgICAgICAgIC8vIHdpbGwgY29udGludWUgdG8gaXRlcmF0ZVxuICAgICAgICAgICAgaWYgKGZuKSBmbigpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmxvb3BpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBmdW5jdGlvbiB0b1xuICAgICAqIGEgc3BlY2lmaWVkIGluZGV4XG4gICAgICogb2YgdGhlIGZyYW1lIHF1ZXVlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSAgIGluZGV4XG4gICAgICogQHBhcmFtICB7RnVuY3Rpb259IGZuXG4gICAgICogQHJldHVybiB7RnVuY3Rpb259XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzY2hlZHVsZShpbmRleCwgZm4pIHtcblxuICAgICAgICAvLyBNYWtlIHN1cmUgdGhpcyBzbG90XG4gICAgICAgIC8vIGhhc24ndCBhbHJlYWR5IGJlZW5cbiAgICAgICAgLy8gdGFrZW4uIElmIGl0IGhhcywgdHJ5XG4gICAgICAgIC8vIHJlLXNjaGVkdWxpbmcgZm9yIHRoZSBuZXh0IHNsb3RcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVzW2luZGV4XSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NoZWR1bGUoaW5kZXggKyAxLCBmbik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdGFydCB0aGUgckFGXG4gICAgICAgIC8vIGxvb3AgdG8gZW1wdHlcbiAgICAgICAgLy8gdGhlIGZyYW1lIHF1ZXVlXG4gICAgICAgIHRoaXMubG9vcCgpO1xuXG4gICAgICAgIC8vIEluc2VydCB0aGlzIGZ1bmN0aW9uIGludG9cbiAgICAgICAgLy8gdGhlIGZyYW1lcyBxdWV1ZSBhbmQgcmV0dXJuXG4gICAgICAgIHJldHVybiB0aGlzLmZyYW1lc1tpbmRleF0gPSBmbjtcbiAgICB9XG5cblxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==