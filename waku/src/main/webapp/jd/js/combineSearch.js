$(document).ready(function() {

	var uNo = 1;

	var element;
	var goods;

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

	var combineList = document.getElementById("combineList");

	for(var i = 0; i< myItem.length; i++){
		itemName = myItem[i].iImage.substring(0,myItem[i].iImage.length-4);
		itemNumber = myItem[i].iNo;
		nameGrant(itemName,itemNumber);
	}

	var elementArray;

	var iNo = [];
	
	
	function nameGrant(itemName,itemNumber){
		$("#" + itemName).bind("tap",function(){
			console.log(itemNumber);
		
			if(iNo.length<4){
			iNo.push(itemNumber);
			} else {
			iNo = [];
			iNo.push(itemNumber);
			}
			
			console.log(iNo);
			
			$.ajax({type:"GET",url:"goods/read.do",data:{
				iNo:iNo
			},async:false,success:function(goods){
				goods = goods.jsonResult.data;
				
				var table = null;
				
				for(var i = 0; i<goods.length;i++){
					table = document.createElement('table');
					
					var trtd = '';
					trtd += "<tr>";
					trtd += "<td>"+goods[i].gImage+"</td>";
					trtd += "<tr>";
					table.innerHTML += trtd;
					combineList.appendChild(table);
				}
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