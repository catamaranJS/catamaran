"use strict";function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,n){for(var s=0;s<n.length;s++){var i=n[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,s,i){return s&&t(n.prototype,s),i&&t(n,i),n}}(),Nav=function(){function t(){var n=void 0===arguments[0]?{navButton:".navbar-toggle",navLinks:"#mainNav",maxHeight:"400px"}:arguments[0];_classCallCheck(this,t),this._settings=n,this._settings.navButton=new CATAMARAN.core.DOM(this._settings.navButton),this._settings.Li=new CATAMARAN.core.DOM(this._settings.navLinks+" li"),this._settings.navLinks=new CATAMARAN.core.DOM(this._settings.navLinks),this.init()}return _createClass(t,[{key:"init",value:function(){this._settings.navButton.on("click",function(t){this.triggerNav()}.bind(this))}},{key:"triggerNav",value:function(){-1==this._settings.navLinks[0].className.indexOf("open")&&(this._settings.navLinks[0].className=this._settings.navLinks[0].className+" open"),this._settings.navLinks[0].style.maxHeight=this._settings.navLinks[0].style.maxHeight!=this._settings.maxHeight?this._settings.maxHeight:"1px"}}]),t}();module.exports=Nav;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpL05hdi5qcyJdLCJuYW1lcyI6WyJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsIk5hdiIsImRlZmF1bHRzIiwidW5kZWZpbmVkIiwiYXJndW1lbnRzIiwibmF2QnV0dG9uIiwibmF2TGlua3MiLCJtYXhIZWlnaHQiLCJ0aGlzIiwiX3NldHRpbmdzIiwiQ0FUQU1BUkFOIiwiY29yZSIsIkRPTSIsIkxpIiwiaW5pdCIsInZhbHVlIiwib24iLCJlIiwidHJpZ2dlck5hdiIsImJpbmQiLCJjbGFzc05hbWUiLCJpbmRleE9mIiwic3R5bGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUlBLFNBQVNBLGlCQUFnQkMsRUFBVUMsR0FBZSxLQUFNRCxZQUFvQkMsSUFBZ0IsS0FBTSxJQUFJQyxXQUFVLHFDQUZoSCxHQUFJQyxjQUFlLFdBQWUsUUFBU0MsR0FBaUJDLEVBQVFDLEdBQVMsSUFBSyxHQUFJQyxHQUFJLEVBQUdBLEVBQUlELEVBQU1FLE9BQVFELElBQUssQ0FBRSxHQUFJRSxHQUFhSCxFQUFNQyxFQUFJRSxHQUFXQyxXQUFhRCxFQUFXQyxhQUFjLEVBQU9ELEVBQVdFLGNBQWUsRUFBVSxTQUFXRixLQUFZQSxFQUFXRyxVQUFXLEdBQU1DLE9BQU9DLGVBQWVULEVBQVFJLEVBQVdNLElBQUtOLElBQWlCLE1BQU8sVUFBVVIsRUFBYWUsRUFBWUMsR0FBaUosTUFBOUhELElBQVlaLEVBQWlCSCxFQUFZaUIsVUFBV0YsR0FBaUJDLEdBQWFiLEVBQWlCSCxFQUFhZ0IsR0FBcUJoQixNQUYzaEJrQixJQUFHLFdBU0ksUUFUUEEsS0FnQkUsR0FQTUMsR0FBUUMsU0FBQUMsVUFBQSxJQUFJQyxVQUFXLGlCQUFrQkMsU0FBVSxXQUFZQyxVQUFXLFNBQVFILFVBQUEsRUFTeEZ2QixpQkFBZ0IyQixLQWxCbEJQLEdBVU9PLEtBQUtDLFVBQVlQLEVBQ2RNLEtBQUtDLFVBQVVKLFVBQVksR0FBSUssV0FBVUMsS0FBS0MsSUFBSUosS0FBS0MsVUFBVUosV0FDakVHLEtBQUtDLFVBQVVJLEdBQUssR0FBSUgsV0FBVUMsS0FBS0MsSUFBSUosS0FBS0MsVUFBVUgsU0FBVyxPQUNyRUUsS0FBS0MsVUFBVUgsU0FBVyxHQUFJSSxXQUFVQyxLQUFLQyxJQUFJSixLQUFLQyxVQUFVSCxVQUNuRUUsS0FBS00sT0FtQ2QsTUF0QkE3QixjQTNCRWdCLElBNEJFSixJQUFLLE9BQ0xrQixNQVpGLFdBQ0ZQLEtBQUtDLFVBQVVKLFVBQVVXLEdBQUcsUUFBUyxTQUFTQyxHQUNsQ1QsS0FBS1UsY0FDUEMsS0FBS1gsVUFlWFgsSUFBSyxhQUNMa0IsTUFiVSxXQUNxRCxJQUF4RFAsS0FBS0MsVUFBVUgsU0FBUyxHQUFHYyxVQUFVQyxRQUFRLFVBQzVDYixLQUFLQyxVQUFVSCxTQUFTLEdBQUdjLFVBQVlaLEtBQUtDLFVBQVVILFNBQVMsR0FBR2MsVUFBYSxTQUkvRVosS0FBS0MsVUFBVUgsU0FBUyxHQUFHZ0IsTUFBTWYsVUFEbENDLEtBQUtDLFVBQVVILFNBQVMsR0FBR2dCLE1BQU1mLFdBQWFDLEtBQUtDLFVBQVVGLFVBQ2ZDLEtBQUtDLFVBQVVGLFVBRWYsVUEvQnZETixJQTJDTnNCLFFBQU9DLFFBQVV2QiIsImZpbGUiOiJ1aS9OYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBOYXZ7XG5cbiAgICAgICAvKipcbiAgICAgICAqIFJlcHJlc2VudHMgQ2F0YW1hcmFuIENvbXBvbmVudCB0aGF0IGNyZWF0ZXMgYSBzaW1wbGUgbmF2aWdhdGlvbiB2ZXJ5IHNpbWlsYXIgdG8gYm9vdHN0cmFwXG4gICAgICAgKiBAcGFyYW0ge29ian0gZGVmdWFsdCBjcmVhdGVzIG5hdkJ1dHRvbnMgaXMgdGhlIGJ1dHRvbiBleGFtcGxlICcubmF2YmFyLXRvZ2dsZScganVzdCBsaWtlIFxuICAgICAgICogYm9vdHN0cmFwIGZvciBtb2JpbGUgdG8gY2xpY2sgb24gYW5kIG5hdkxpbmtzIGV4YW1wbGUgJyNtYWluTmF2J30gaXMgdGhlIHVsIHRoYXQgY29udGFpbnMgdGhlIGxpbmtzIFxuICAgICAgICogbWF4SGVpZ2h0IGlzIHdoYXQgZ2V0cyBhbmltYXRlZCBzZXQgdGhlIGhlaWdodCB0byBiZSBsYXJnZXIgdGhhbiB5b3VyIGxpc3RcbiAgICAgICAqL1xuXG5cdFx0Y29uc3RydWN0b3IoZGVmYXVsdHMgPSB7bmF2QnV0dG9uOiAnLm5hdmJhci10b2dnbGUnLCBuYXZMaW5rczogJyNtYWluTmF2JywgbWF4SGVpZ2h0OiAnNDAwcHgnfSkge1xuICAgICAgICAgICAgXHR0aGlzLl9zZXR0aW5ncyA9IGRlZmF1bHRzO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NldHRpbmdzLm5hdkJ1dHRvbiA9IG5ldyBDQVRBTUFSQU4uY29yZS5ET00odGhpcy5fc2V0dGluZ3MubmF2QnV0dG9uKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXR0aW5ncy5MaSA9IG5ldyBDQVRBTUFSQU4uY29yZS5ET00odGhpcy5fc2V0dGluZ3MubmF2TGlua3MgKyAnIGxpJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0dGluZ3MubmF2TGlua3MgPSBuZXcgQ0FUQU1BUkFOLmNvcmUuRE9NKHRoaXMuX3NldHRpbmdzLm5hdkxpbmtzKTtcbiAgICAgICAgICAgIFx0dGhpcy5pbml0KClcblx0XHR9XG5cblx0XHRpbml0KCl7XG5cdFx0ICB0aGlzLl9zZXR0aW5ncy5uYXZCdXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlck5hdigpO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyaWdnZXJOYXYoKXtcbiAgICAgICAgICAgIGlmKHRoaXMuX3NldHRpbmdzLm5hdkxpbmtzWzBdLmNsYXNzTmFtZS5pbmRleE9mKCdvcGVuJykgPT0gLTEpe1xuICAgICAgICAgICAgICAgIHRoaXMuX3NldHRpbmdzLm5hdkxpbmtzWzBdLmNsYXNzTmFtZSA9IHRoaXMuX3NldHRpbmdzLm5hdkxpbmtzWzBdLmNsYXNzTmFtZSAgKyAnIG9wZW4nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0aGlzLl9zZXR0aW5ncy5uYXZMaW5rc1swXS5zdHlsZS5tYXhIZWlnaHQgIT0gdGhpcy5fc2V0dGluZ3MubWF4SGVpZ2h0KXtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXR0aW5ncy5uYXZMaW5rc1swXS5zdHlsZS5tYXhIZWlnaHQgPSB0aGlzLl9zZXR0aW5ncy5tYXhIZWlnaHQ7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXR0aW5ncy5uYXZMaW5rc1swXS5zdHlsZS5tYXhIZWlnaHQgPSAnMXB4JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG4gICAgICAgIH1cblx0XHRcbiAgICAgICBcbiAgICAgICAgICAgXG4gICAgICAgICAgICBcblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5hdjsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=