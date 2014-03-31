$(document).ready(function() {
	
	MyItemCheck();
	
	function MyItemCheck(){
		
		var uNo = 1;
		
	var pickUpList = document.getElementById("pickUpList");
	
	$.ajax({type:"GET",url:"myItem/keepRead.do?uNo="+uNo,async:false,success:function(myItems){
		var myItem = myItems.jsonResult.data;
	    console.log(myItem);
	},error:function(){	
		alert('데이터 처리중입니다. 잠시 뒤 다시 시도해주세요.');  
	  }
	});
	};
});