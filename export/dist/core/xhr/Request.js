"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,s,n){return s&&e(t.prototype,s),n&&e(t,n),t}}(),Request=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0],s=arguments.length<=1||void 0===arguments[1]?null:arguments[1],n=arguments.length<=2||void 0===arguments[2]?"GET":arguments[2];_classCallCheck(this,e),this._type=n,this._url=t,this.callback=s,this._request=new XMLHttpRequest,this._request.open(this._type,this._url,!0),this._request.onload=this.onload.bind(this),this._request.onerror=function(e){console.log("request failed")},this._request.send()}return _createClass(e,[{key:"onload",value:function(){if(this._request.status>=200&&this._request.status<400){if(this.data=JSON.parse(this._request.responseText),null==this.callback)return this.data;this.callback()}else console.log(this._request.status)}}]),e}();exports.Request=Request;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUveGhyL1JlcXVlc3QuanMiXSwibmFtZXMiOlsiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJrZXkiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJSZXF1ZXN0IiwidXJsIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiX2NhbGxiYWNrIiwidHlwZVIiLCJ0aGlzIiwiX3R5cGUiLCJfdXJsIiwiY2FsbGJhY2siLCJfcmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm9ubG9hZCIsImJpbmQiLCJvbmVycm9yIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJzZW5kIiwic3RhdHVzIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFRQSxTQUFTQSxpQkFBZ0JDLEVBQVVDLEdBQWUsS0FBTUQsWUFBb0JDLElBQWdCLEtBQU0sSUFBSUMsV0FBVSxxQ0FOaEhDLE9BQU9DLGVBQWVDLFFBQVMsY0FDOUJDLE9BQU8sR0FHUixJQUFJQyxjQUFlLFdBQWUsUUFBU0MsR0FBaUJDLEVBQVFDLEdBQVMsSUFBSyxHQUFJQyxHQUFJLEVBQUdBLEVBQUlELEVBQU1FLE9BQVFELElBQUssQ0FBRSxHQUFJRSxHQUFhSCxFQUFNQyxFQUFJRSxHQUFXQyxXQUFhRCxFQUFXQyxhQUFjLEVBQU9ELEVBQVdFLGNBQWUsRUFBVSxTQUFXRixLQUFZQSxFQUFXRyxVQUFXLEdBQU1iLE9BQU9DLGVBQWVLLEVBQVFJLEVBQVdJLElBQUtKLElBQWlCLE1BQU8sVUFBVVosRUFBYWlCLEVBQVlDLEdBQWlKLE1BQTlIRCxJQUFZVixFQUFpQlAsRUFBWW1CLFVBQVdGLEdBQWlCQyxHQUFhWCxFQUFpQlAsRUFBYWtCLEdBQXFCbEIsTUFOcGhCb0IsUUFBTyxXQUNSLFFBRENBLEtBWVgsR0FYV0MsR0FBR0MsVUFBQVgsUUFBQSxHQUFBWSxTQUFBRCxVQUFBLEdBQUcsS0FBSUEsVUFBQSxHQUFFRSxFQUFTRixVQUFBWCxRQUFBLEdBQUFZLFNBQUFELFVBQUEsR0FBRyxLQUFJQSxVQUFBLEdBQUVHLEVBQUtILFVBQUFYLFFBQUEsR0FBQVksU0FBQUQsVUFBQSxHQUFHLE1BQUtBLFVBQUEsRUFpQnREeEIsaUJBQWdCNEIsS0FsQkxOLEdBRVhNLEtBQUtDLE1BQVFGLEVBQ2JDLEtBQUtFLEtBQU9QLEVBQ1pLLEtBQUtHLFNBQVdMLEVBQ2hCRSxLQUFLSSxTQUFXLEdBQUlDLGdCQUNwQkwsS0FBS0ksU0FBU0UsS0FBS04sS0FBS0MsTUFBT0QsS0FBS0UsTUFBTyxHQUMzQ0YsS0FBS0ksU0FBU0csT0FBU1AsS0FBS08sT0FBT0MsS0FBS1IsTUFDeENBLEtBQUtJLFNBQVNLLFFBQVUsU0FBU0MsR0FDL0JDLFFBQVFDLElBQUksbUJBRWRaLEtBQUtJLFNBQVNTLE9BcUNmLE1BaEJBakMsY0FoQ1ljLElBaUNYSixJQUFLLFNBQ0xYLE1BcEJLLFdBQ0wsR0FBSXFCLEtBQUtJLFNBQVNVLFFBQVUsS0FBT2QsS0FBS0ksU0FBU1UsT0FBUyxJQUFLLENBRTlELEdBREFkLEtBQUtlLEtBQU9DLEtBQUtDLE1BQU1qQixLQUFLSSxTQUFTYyxjQUNqQixNQUFqQmxCLEtBQUtHLFNBR1AsTUFBT0gsTUFBS2UsSUFGWmYsTUFBS0csZUFLSlEsU0FBUUMsSUFBSVosS0FBS0ksU0FBU1UsWUF2QmxCcEIsSUFtRGJoQixTQUFRZ0IsUUFBVUEiLCJmaWxlIjoiY29yZS94aHIvUmVxdWVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBSZXF1ZXN0IHtcblx0Y29uc3RydWN0b3IodXJsID0gbnVsbCwgX2NhbGxiYWNrID0gbnVsbCwgdHlwZVIgPSBcIkdFVFwiKXtcblx0XHR0aGlzLl90eXBlID0gdHlwZVI7XG5cdFx0dGhpcy5fdXJsID0gdXJsO1xuXHRcdHRoaXMuY2FsbGJhY2sgPSBfY2FsbGJhY2s7XG5cdFx0dGhpcy5fcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHRcdHRoaXMuX3JlcXVlc3Qub3Blbih0aGlzLl90eXBlLCB0aGlzLl91cmwgLCB0cnVlKTtcblx0XHR0aGlzLl9yZXF1ZXN0Lm9ubG9hZCA9IHRoaXMub25sb2FkLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5fcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24oZSkge1xuXHRcdFx0IGNvbnNvbGUubG9nKCdyZXF1ZXN0IGZhaWxlZCcpO1xuXHRcdCB9O1xuXHRcdHRoaXMuX3JlcXVlc3Quc2VuZCgpO1xuXHR9XG5cblx0b25sb2FkKCl7XG5cdFx0aWYgKHRoaXMuX3JlcXVlc3Quc3RhdHVzID49IDIwMCAmJiB0aGlzLl9yZXF1ZXN0LnN0YXR1cyA8IDQwMCkge1xuXHRcdFx0dGhpcy5kYXRhID0gSlNPTi5wYXJzZSh0aGlzLl9yZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG5cdFx0XHRpZih0aGlzLmNhbGxiYWNrICE9IG51bGwpe1xuXHRcdFx0XHR0aGlzLmNhbGxiYWNrKCk7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZGF0YTtcblx0XHRcdH1cblx0XHQgIH0gZWxzZSB7XG5cdFx0ICBcdGNvbnNvbGUubG9nKHRoaXMuX3JlcXVlc3Quc3RhdHVzKTtcblx0XHQgfVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=