$(document).ready(function() {
	
	countCheck();
	
	function countCheck(){
		
		var uNo = 1;
		
	var accumulateWork = document.getElementById("accumulateWork");
	
	$.ajax({type:"GET",url:"pace/userwork.do?uNo="+uNo,async:false,success:function(counts){
		var count = counts.jsonResult.data;
	    console.log(count);
	},error:function(){	
		alert('데이터 처리중입니다. 잠시 뒤 다시 시도해주세요.');  
	  }
	});
	};
});