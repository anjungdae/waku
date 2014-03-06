function bit(id){
	var element =  document.getElementById(id);
	element.click = function(listener){
		this.onclick = listener;
	};
	
	return element;
}

bit.ajax = function(url, settings){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				var jsonResult = JSON.parse(xhr.responseText).jsonResult;
				if (jsonResult.resultStatus == 1) {
					if(settings.error){
						console.log(jsonResult.error);
					}
				} else {
					settings.success(jsonResult.data);
				}
			} else {
				if(settings.error){
					settings.error("요청 실패");
					console.log(error);
				}
			}
		}
	};
		
	xhr.open(settings.method,url,true);
	
	if(settings.method == 'POST'){
		var params = '';
		for(var prop in settings.data){
			if(params.length > 0){
				params += '&';
			}
			params += prop + "=" + settings.data[prop];
		}
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.send(encodeURI(params));//영어 이외의 문자는 영어화 시켜라(네트워크 장비중에 7비트를 넘어서 8비트를 인식 못할수 있어서)
	} else {
	xhr.send();
	}
};


var $ = bit;
