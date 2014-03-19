$( document ).ready(function() {
	$.ajax({type:"GET",url:"element/list.do",async:false,success:function(elements){
		var element = elements.jsonResult.data;		
	}, error:function(){	
		alert('시스템이 바쁩니다.\n나중에 다시 시도해 주세요!!');  
	}
	});
	
	$.ajax({type:"GET",url:"element/read.do?",async:false,success:function(elements){
		var element = elements.jsonResult.data;		
	}, error:function(){	
		alert('시스템이 바쁩니다.\n나중에 다시 시도해 주세요!!');  
	}
	});
});