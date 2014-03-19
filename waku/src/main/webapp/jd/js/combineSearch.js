$( document ).ready(function() {
	$.ajax({type:"GET",url:"element/list.do",async:false,success:function(elements){
		var element = elements.jsonResult.data;
		console.log(element);
	}, error:function(){	
		alert('시스템이 바쁩니다.\n나중에 다시 시도해 주세요!!');  
	}
	});
});