class Request {
	constructor(url = null, typeR = "GET"){
		this._type = typeR;
		this._url = url;
		this._request = new XMLHttpRequest();
		this._request.open(this._type, this._url , true);
		this._request.onload = function(){
		if (this._request.status >= 200 && this._request.status < 400) {
		    return data = JSON.parse(this._request.responseText);
		  } else {
		  	console.log(this._request.status);
		 }
		this._request.onerror = function(e) {
			 console.log('request failed');
		 };
		}
		this._request.send();
	}
}
module.exports = Request;