$(document).ready(function() {

	var uNo = 1;

	var element;

	$.ajax({type:"GET",url:"element/list.do",async:false,success:function(elements){
		element = elements.jsonResult.data;
		console.log(element);
	}, error:function(){	
		alert('시스템이 바쁩니다.\n나중에 다시 시도해 주세요!!');  
	}
	});

	var myItem;

	$.ajax({type:"GET",url:"myItem/keepRead.do?uNo="+uNo,async:false,success:function(myItems){
		myItem = myItems.jsonResult.data;
		console.log(myItem);
	}, error:function(){	
		alert('시스템이 바쁩니다.\n나중에 다시 시도해 주세요!!');  
	}
	});

	var itemNames = '';

	var combineList = document.getElementById("combineList");

	for(var i = 0; i< myItem.length; i++){
		itemName = myItem[i].iImage.substring(0,myItem[i].iImage.length-4);
		itemNumber = myItem[i].iNo;
		nameGrant(itemName,itemNumber);
	}

	var elementArray;

	function nameGrant(itemName,itemNumber){
		$("#" + itemName).bind("tap",function(){
						
			var iNo = [];
			
			iNo.push(1);
			iNo.push(3);
			iNo.push(5);
						
			$.ajax({type:"GET",url:"element/read.do",data:{
				iNo:iNo
			},async:false,success:function(elements){
				element = elements.jsonResult.data;
				console.log(element);
			}, error:function(){	
				alert('시스템이 바쁩니다.\n나중에 다시 시도해 주세요!!');  
			}
			});
		});
	}

//	$.ajax({type:"GET",url:"element/read.do",async:false,success:function(elements){
//	var element = elements.jsonResult.data;

//	}, error:function(){	
//	alert('시스템이 바쁩니다.\n나중에 다시 시도해 주세요!!');  
//	}
//	});
});