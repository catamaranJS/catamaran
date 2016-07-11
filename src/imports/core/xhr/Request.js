class Request {
	constructor(url = null, _callback = null, typeR = "GET"){
		this._type = typeR;
		this._url = url;
		this.callback = _callback;
		this._request = new XMLHttpRequest();
		this._request.open(this._type, this._url , true);
		this._request.onload = this.onload.bind(this);
		this._request.onerror = function(e) {
			 console.log('request failed');
		 };
		this._request.send();
	}

	onload(){
		if (this._request.status >= 200 && this._request.status < 400) {
			this.data = JSON.parse(this._request.responseText);
			if(this.callback != null){
				this.callback();
			}else{
				return this.data;
			}
		  } else {
		  	console.log(this._request.status);
		 }
	}
}
module.exports = Request;