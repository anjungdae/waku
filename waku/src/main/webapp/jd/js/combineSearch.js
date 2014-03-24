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
			if(iNo.length<4){
			iNo.push(itemNumber);
			} else {0
			iNo = [];
			iNo.push(itemNumber);
			}
			
			$.ajax({type:"GET",url:"goods/read.do",data:{
				iNo:iNo
			},async:false,success:function(goods){
				goods = goods.jsonResult.data;
				var table = null;
				
				//G_IMAGE, T3.G_TITLE, T3.G_DESC, T3.G_EDATE, T3.G_VALID
				
				goodsImageBe = [];
				goodsImageAf = [];
				
				goodsTitleBe = [];
				goodsTitleAf = [];
				
				goodsDescBe = [];
				goodsDescAf = [];
				
				goodsEdateBe = [];
				goodsEdateAf = [];
				
				var i = 0;
				
				for(i=0;i<goods.length;i++){
					goodsImageBe.push(goods[i].gImage);
					goodsTitleBe.push(goods[i].gTitle);
					goodsDescBe.push(goods[i].gDesc);
					//이미지
					$.each(goodsImageBe, function(i, el){
						if($.inArray(el, goodsImageAf) === -1){
							goodsImageAf.push(el);
						}
					});
					//제목
					$.each(goodsTitleBe, function(i, el){
						if($.inArray(el, goodsTitleAf) === -1){
							goodsTitleAf.push(el);
						}
					});
					//내용
					$.each(goodsDescBe, function(i, el){
						if($.inArray(el, goodsDescAf) === -1){
							goodsDescAf.push(el);
						}
					});
					
					//종료일
					var j = i+1;
					if(j<goods.length){
						if(goods[i].gImage == goods[j].gImage){
							goodsEdateBe = goods[i].gEdate;
						}else{
							goodsEdateAf.push(goodsEdateBe);
						}
					}else{
						goodsEdateAf.push(goodsEdateBe);
					}
				};
				
				
				for(i = 0;i<goodsImageAf.length;i++){
					console.log(goodsImageAf[i]);
					console.log(goodsTitleAf[i]);
					console.log(goodsDescAf[i]);
					console.log(goodsEdateAf[i]);
				}
				
				for(i = 0; i<goodsImageAf.length;i++){
					table = document.createElement('table');
					var trtd = '';
					trtd += "<tr>";
					trtd += "<td>"+goodsImageAf[i]+"</td>";
					trtd += "<td>"+goodsTitleAf[i]+"</td>";
					trtd += "<td>"+goodsDescAf[i]+"</td>";
					trtd += "<td>"+goodsEdateAf[i]+"</td>";
					trtd += "<tr>";
					table.innerHTML += trtd;
					if(table!=null){
					combineList.appendChild(table);
					}
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