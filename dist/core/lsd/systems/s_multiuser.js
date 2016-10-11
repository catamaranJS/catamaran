"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),_get=function(t,e,i){for(var r=!0;r;){var s=t,n=e,o=i;r=!1,null===s&&(s=Function.prototype);var a=Object.getOwnPropertyDescriptor(s,n);if(void 0!==a){if("value"in a)return a.value;var u=a.get;return void 0===u?void 0:u.call(o)}var l=Object.getPrototypeOf(s);if(null===l)return void 0;t=l,e=n,i=o,r=!0,a=l=void 0}},CES=require("CES"),BABYLON=require("../lib/babylon"),s_multiuser=function(t){function e(t){_classCallCheck(this,e),_get(Object.getPrototypeOf(e.prototype),"constructor",this).call(this),this._opts=t,this._entity=null,this._zombieModeEnabled=!1}return _inherits(e,t),_createClass(e,[{key:"update",value:function(t){var e=this.world.getEntities("multiuser");e.forEach(function(t){if(this._entity=t._components.$multiuser,this.world._multiuserInit=this._entity.sysInit,this.world._currentScene.activeCamera&&this._entity.sysInit&&this._entity.userInit){this._entity.updateUser(this.world._currentScene.activeCameras[0].position,this.world._currentScene.activeCameras[0].rotation);for(var e=0;e<this._entity.currentUsers.length;e++)this._entity.currentUsers[e].key!=this._entity.currentUserKey&&(this.spriteDoesNotExist(this._entity.currentUsers[e].key,this._entity.sprites)?(this._zombieModeEnabled=this._entity.zombieMode?!0:!1,this.updateUserSprites(this._entity.currentUsers[e])):this._entity.generateUserSprites(this._entity.currentUsers[e],e))}}.bind(this))}},{key:"spriteDoesNotExist",value:function(t,e){for(var i=!1,r=0;r<e.length;r++)if(e[r].key==t)return i=!0;return i}},{key:"updateUserSprites",value:function(t){for(var e=0;e<this._entity.sprites.length;e++)if(void 0!=this._entity.sprites[e].key&&t.key==this._entity.sprites[e].key){this._entity.zombieMode?this._entity.sprites[e].sprite.playAnimation(80,100,!0,100):this._zombieModeEnabled&&this._entity.sprites[e].sprite.playAnimation(Math.abs(20-parseInt(t.data.spriteID)),parseInt(t.data.spriteID),!0,100),this._entity.sprites[e].sprite.position=t.data.position;break}}}]),e}(CES.System);module.exports=s_multiuser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvbHNkL3N5c3RlbXMvc19tdWx0aXVzZXIuanMiXSwibmFtZXMiOlsiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9pbmhlcml0cyIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsInByb3RvdHlwZSIsIk9iamVjdCIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwidmFsdWUiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJjb25maWd1cmFibGUiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIl9jcmVhdGVDbGFzcyIsImRlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdG9yIiwiZGVmaW5lUHJvcGVydHkiLCJrZXkiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfZ2V0IiwiX3giLCJfeDIiLCJfeDMiLCJfYWdhaW4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInJlY2VpdmVyIiwiRnVuY3Rpb24iLCJkZXNjIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwidW5kZWZpbmVkIiwiZ2V0dGVyIiwiZ2V0IiwiY2FsbCIsInBhcmVudCIsImdldFByb3RvdHlwZU9mIiwiQ0VTIiwicmVxdWlyZSIsIkJBQllMT04iLCJzX211bHRpdXNlciIsIl9DRVMkU3lzdGVtIiwiX29wdHMiLCJ0aGlzIiwiX2VudGl0eSIsIl96b21iaWVNb2RlRW5hYmxlZCIsImR0IiwiZW50aXRpZXMiLCJ3b3JsZCIsImdldEVudGl0aWVzIiwiZm9yRWFjaCIsImVudGl0eSIsIl9jb21wb25lbnRzIiwiJG11bHRpdXNlciIsIl9tdWx0aXVzZXJJbml0Iiwic3lzSW5pdCIsIl9jdXJyZW50U2NlbmUiLCJhY3RpdmVDYW1lcmEiLCJ1c2VySW5pdCIsInVwZGF0ZVVzZXIiLCJhY3RpdmVDYW1lcmFzIiwicG9zaXRpb24iLCJyb3RhdGlvbiIsImN1cnJlbnRVc2VycyIsImN1cnJlbnRVc2VyS2V5Iiwic3ByaXRlRG9lc05vdEV4aXN0Iiwic3ByaXRlcyIsInpvbWJpZU1vZGUiLCJ1cGRhdGVVc2VyU3ByaXRlcyIsImdlbmVyYXRlVXNlclNwcml0ZXMiLCJiaW5kIiwiYXJyYXkiLCJmb3VuZCIsIl9kYXRhIiwic3ByaXRlIiwicGxheUFuaW1hdGlvbiIsIk1hdGgiLCJhYnMiLCJwYXJzZUludCIsImRhdGEiLCJzcHJpdGVJRCIsIlN5c3RlbSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLFlBTUEsU0FBU0EsaUJBQWdCQyxFQUFVQyxHQUFlLEtBQU1ELFlBQW9CQyxJQUFnQixLQUFNLElBQUlDLFdBQVUscUNBRWhILFFBQVNDLFdBQVVDLEVBQVVDLEdBQWMsR0FBMEIsa0JBQWZBLElBQTRDLE9BQWZBLEVBQXVCLEtBQU0sSUFBSUgsV0FBVSxpRUFBb0VHLEdBQWVELEdBQVNFLFVBQVlDLE9BQU9DLE9BQU9ILEdBQWNBLEVBQVdDLFdBQWFHLGFBQWVDLE1BQU9OLEVBQVVPLFlBQVksRUFBT0MsVUFBVSxFQUFNQyxjQUFjLEtBQWVSLElBQVlFLE9BQU9PLGVBQWlCUCxPQUFPTyxlQUFlVixFQUFVQyxHQUFjRCxFQUFTVyxVQUFZVixHQU5qZSxHQUFJVyxjQUFlLFdBQWUsUUFBU0MsR0FBaUJDLEVBQVFDLEdBQVMsSUFBSyxHQUFJQyxHQUFJLEVBQUdBLEVBQUlELEVBQU1FLE9BQVFELElBQUssQ0FBRSxHQUFJRSxHQUFhSCxFQUFNQyxFQUFJRSxHQUFXWCxXQUFhVyxFQUFXWCxhQUFjLEVBQU9XLEVBQVdULGNBQWUsRUFBVSxTQUFXUyxLQUFZQSxFQUFXVixVQUFXLEdBQU1MLE9BQU9nQixlQUFlTCxFQUFRSSxFQUFXRSxJQUFLRixJQUFpQixNQUFPLFVBQVVyQixFQUFhd0IsRUFBWUMsR0FBaUosTUFBOUhELElBQVlSLEVBQWlCaEIsRUFBWUssVUFBV21CLEdBQWlCQyxHQUFhVCxFQUFpQmhCLEVBQWF5QixHQUFxQnpCLE1BRTdoQjBCLEtBQU8sU0FBYUMsRUFB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QUFRc0IsUUFBUXJELEdBQUc2RCxPQUFPQyxjQUFjQyxLQUFLQyxJQUFLLEdBQUtDLFNBQVNMLEVBQU1NLEtBQUtDLFdBQWFGLFNBQVNMLEVBQU1NLEtBQUtDLFdBQVcsRUFBTSxLQUcxSXJDLEtBQUtDLFFBQVFzQixRQUFRckQsR0FBRzZELE9BQU9iLFNBQVlZLEVBQU1NLEtBQUtsQixRQUN0RCxZQXpEVHJCLEdBQW9CSCxJQUFJNEMsT0ErRC9CQyxRQUFPQyxRQUFVM0MiLCJmaWxlIjoiY29yZS9sc2Qvc3lzdGVtcy9zX211bHRpdXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxudmFyIENFUyA9IHJlcXVpcmUoJ0NFUycpO1xudmFyIEJBQllMT04gPSByZXF1aXJlKCcuLi9saWIvYmFieWxvbicpO1xuXG4vKipcbiAqIC4uLlxuICogQGF1dGhvciBCcmVuZG9uIFNtaXRoXG4gKiBodHRwOi8vc2VhY2xvdWQ5Lm9yZ1xuICogTGlnaHRXZWlnaHQgM0QgU3lzdGVtIERlc2lnbiBlbmdpbmVcbiAqL1xuIGNsYXNzIHNfbXVsdGl1c2VyIGV4dGVuZHMgQ0VTLlN5c3RlbXtcbiAgICBjb25zdHJ1Y3Rvcihfb3B0cyl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX29wdHMgPSBfb3B0cztcbiAgICAgICAgdGhpcy5fZW50aXR5ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fem9tYmllTW9kZUVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpe1xuICAgICAgdmFyIGVudGl0aWVzID0gdGhpcy53b3JsZC5nZXRFbnRpdGllcygnbXVsdGl1c2VyJyk7XG4gICAgICBlbnRpdGllcy5mb3JFYWNoKGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgICAgICAgdGhpcy5fZW50aXR5ICA9IGVudGl0eS5fY29tcG9uZW50cy4kbXVsdGl1c2VyO1xuICAgICAgICB0aGlzLndvcmxkLl9tdWx0aXVzZXJJbml0ID0gdGhpcy5fZW50aXR5LnN5c0luaXQ7XG4gICAgICAgIGlmKHRoaXMud29ybGQuX2N1cnJlbnRTY2VuZS5hY3RpdmVDYW1lcmEgJiYgdGhpcy5fZW50aXR5LnN5c0luaXQgJiYgdGhpcy5fZW50aXR5LnVzZXJJbml0KXtcbiAgICAgICAgICAgIHRoaXMuX2VudGl0eS51cGRhdGVVc2VyKHRoaXMud29ybGQuX2N1cnJlbnRTY2VuZS5hY3RpdmVDYW1lcmFzWzBdLnBvc2l0aW9uLCB0aGlzLndvcmxkLl9jdXJyZW50U2NlbmUuYWN0aXZlQ2FtZXJhc1swXS5yb3RhdGlvbik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLl9lbnRpdHkuY3VycmVudFVzZXJzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9lbnRpdHkuY3VycmVudFVzZXJzW2ldLmtleSAhPSB0aGlzLl9lbnRpdHkuY3VycmVudFVzZXJLZXkpe1xuICAgICAgICAgICAgICAgICAgICBpZighIHRoaXMuc3ByaXRlRG9lc05vdEV4aXN0KHRoaXMuX2VudGl0eS5jdXJyZW50VXNlcnNbaV0ua2V5LCB0aGlzLl9lbnRpdHkuc3ByaXRlcykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZW50aXR5LmdlbmVyYXRlVXNlclNwcml0ZXModGhpcy5fZW50aXR5LmN1cnJlbnRVc2Vyc1tpXSwgaSk7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5fZW50aXR5LnpvbWJpZU1vZGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3pvbWJpZU1vZGVFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3pvbWJpZU1vZGVFbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVzZXJTcHJpdGVzKHRoaXMuX2VudGl0eS5jdXJyZW50VXNlcnNbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gICAgc3ByaXRlRG9lc05vdEV4aXN0KHZhbHVlLCBhcnJheSkge1xuICAgICAgICB2YXIgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYXJyYXlbaV0ua2V5ID09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgfVxuXG5cbiAgICB1cGRhdGVVc2VyU3ByaXRlcyhfZGF0YSl7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLl9lbnRpdHkuc3ByaXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2VudGl0eS5zcHJpdGVzW2ldLmtleSAhPSB1bmRlZmluZWQgJiYgX2RhdGEua2V5ID09IHRoaXMuX2VudGl0eS5zcHJpdGVzW2ldLmtleSkge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2VudGl0eS56b21iaWVNb2RlKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZW50aXR5LnNwcml0ZXNbaV0uc3ByaXRlLnBsYXlBbmltYXRpb24oIDgwLCAgMTAwLCB0cnVlLCAxMDApO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLl96b21iaWVNb2RlRW5hYmxlZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbnRpdHkuc3ByaXRlc1tpXS5zcHJpdGUucGxheUFuaW1hdGlvbihNYXRoLmFicyggMjAgLSBwYXJzZUludChfZGF0YS5kYXRhLnNwcml0ZUlEKSksICBwYXJzZUludChfZGF0YS5kYXRhLnNwcml0ZUlEKSwgdHJ1ZSwgMTAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9lbnRpdHkuc3ByaXRlc1tpXS5zcHJpdGUucG9zaXRpb24gPSAgX2RhdGEuZGF0YS5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxubW9kdWxlLmV4cG9ydHMgPSBzX211bHRpdXNlcjsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=