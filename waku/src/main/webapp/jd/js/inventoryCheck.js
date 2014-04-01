$(document).ready(function() {
	
	$('#bgImage').fadeOut("slow");
	
	MyItemCheck();
	
	function MyItemCheck(){
		
		var uNo = 1;
		
	var pickUpList = document.getElementById("pickUpList");
	
	$.ajax({type:"GET",url:"myItem/keepRead.do?uNo="+uNo,async:false,success:function(myItems){
		var myItem = myItems.jsonResult.data;
	    console.log(myItem);
	    
	    var table = null;
	    
	    for(var i = 0; i<myItem.length; i++){

	   	table = document.createElement('table');
	   	table.setAttribute("id","myItemTable"+[i]);
		table.setAttribute("class","myItemTable");
		table.setAttribute("cellspacing","0");
		table.setAttribute("cellpadding","0");
	    	
	    var itemView = '';
	    
	    itemView += "<tr>"
	    itemView += "<td rowspan= '3'><img class='myItemViewImgae'src='sideicon/"+myItem[i].iImage+"'></td>";
	    itemView += "<td>"+myItem[i].iClass+"</td>";
	    itemView += "</tr>"
	    
	    itemView += "<tr>"
	    itemView += "<td>"+myItem[i].iName+"</td>";
	    itemView += "</tr>"
	    
	    itemView += "<tr>"
	    itemView += "<td>"+myItem[i].iStock+"</td>";
	    itemView += "</tr>"
	    
	    itemView += "<tr>"
	    itemView += "<td>확인</td>";
	    itemView += "<td>구입하기</td>";
	    itemView += "</tr>"
	    	    
	    table.innerHTML += itemView;
	    
	    pickUpList.appendChild(table);
	    
	    }
	    
	  var timelag = 0;
	  
	  for(var i = 0; i<myItem.length; i++){
		  timelag;
		  
		  console.log(i);
		  console.log(timelag);
		  
		  visibleMyItem(i,timelag);
		  		  
		  timelag += 400;
	  };  
	  
	  function visibleMyItem(i,timelag){
		  console.log("i"+i);
		  console.log("t"+timelag);
		  $('#myItemTable'+i).fadeIn(timelag);
	  }
	  
	},error:function(){	
		alert('데이터 처리중입니다. 잠시 뒤 다시 시도해주세요.');  
	  }
	});
	};
});