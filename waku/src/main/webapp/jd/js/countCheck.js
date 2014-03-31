$(document).ready(function() {
	
	countCheck();
	
	function countCheck(){
		
		var uNo = 1;
		
	var accumulateWork = document.getElementById("accumulateWork");
	
	$.ajax({type:"GET",url:"pace/userwork.do?uNo="+uNo,async:false,success:function(counts){
		var count = counts.jsonResult.data;
	    console.log(count);

	    var stepCount = count[0].wCount;
	    
	    var stepView = '';
	    
	    stepView += "<div>";
	    stepView += "<div>내 아이템 함</div>";
	    stepView += "<div>전날까지 취득한 걸음 수</div>";
	    stepView += "<div>"+stepCount+"</div>";
	    stepView += "</div>";
	    
	    accumulateWork.innerHTML = stepView;
	    
	    
	},error:function(){	
		alert('데이터 처리중입니다. 잠시 뒤 다시 시도해주세요.');  
	  }
	});
	};
});