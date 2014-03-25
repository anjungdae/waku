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

	var iNo = [];
	
	var myItemNo =[];
	var myItemStock =[];
	
	function nameGrant(itemName,itemNumber){
		$("#" + itemName).bind("tap",function(){
			
			if(iNo.length<4){
				iNo.push(itemNumber);
			} else {
				iNo = [];
				iNo.push(itemNumber);
			}
			console.log(myItemNoAgain);
			console.log(itemName);
			
			for(var l = 0; l<myItemNoAgain.length; l++){
				if(myItemNoAgain[l]==itemNumber){
					myItemNo.push(myItemNoAgain[l]);
					
				}
			}
			
			console.log(myItemNo);
			console.log(myItemStock);
			
			$.ajax({type:"GET",url:"goods/read.do",data:{
				iNo:iNo
			},async:false,success:function(goods){
				
				$(".basicTable").remove();
				
				goods = goods.jsonResult.data;
				var table = null;

				console.log(goods);

				//G_IMAGE, T3.G_TITLE, T3.G_DESC, T3.G_EDATE, T3.G_VALID

				goodsImageBe = [];
				goodsImageAf = [];

				goodsTitleBe = [];
				goodsTitleAf = [];

				goodsDescBe = [];
				goodsDescAf = [];

				goodsEdateAf = [];

				var i = 0;
				
				var goodsItemNo =[];
				var goodsItemReq = [];
				
					for(i=0;i<goods.length;i++){
						goodsImageBe.push(goods[i].gImage);
						goodsTitleBe.push(goods[i].gTitle);
						goodsDescBe.push(goods[i].gDesc);
					};
					
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
//					var j = i+1;
//					if(j<goods.length){
//						if(goods[i].gImage == goods[j].gImage){
//							
//						}else{
//							goodsEdateAf.push(goodsEdateBe);
//						}
//					}else{
//						goodsEdateAf.push(goodsEdateBe);
//					}
					goodsEdateAf = [];
					
					for(i=0;i<goodsImageAf.length;i++){
						table = document.createElement('table');
						table.setAttribute("class","basicTable");
						var trtd = '';
						
						goodsItemImage =[];
						goodsItemReq = [];
						for (var j = 0; j < goods.length; j++) {
							if(goods[j].gImage == goodsImageAf[i]){
								goodsEdateAf = goods[i].gEdate;
								if(goods[j].iClass =="엠블럼"){
									goodsItemImage.push(goods[j].iImage);
									goodsItemReq.push(goods[j].iReq);
									}
							}
						}
						
						for (var j = 0; j < goods.length; j++) {
							if(goods[j].gImage == goodsImageAf[i]){
								goodsEdateAf = goods[i].gEdate;
								if(goods[j].iClass !="엠블럼"){
									goodsItemImage.push(goods[j].iImage);
									goodsItemReq.push(goods[j].iReq);
									}
							}
						}
						
						trtd += "<tr>";
						trtd += "<td class='basicTd'>"+goodsImageAf[i]+"</td>";
						trtd += "<td class='basicTd'>"+goodsTitleAf[i]+"</td>";
						trtd += "<td class='basicTd'>"+goodsDescAf[i]+"</td>";
						trtd += "<td class='basicTd'>"+goodsEdateAf+"</td>";
						trtd += "</tr>";
						trtd += "<tr>";
						for(var k = 0; k<goodsItemImage.length;k++){
							trtd += "<td class='basicTd'><img src = 'sideicon/"+goodsItemImage[k]+"'></td>";
						}
						trtd += "</tr>";
						
						trtd += "<tr style='position:absolute;'>";
						for(var k = 0; k<goodsItemImage.length;k++){
							trtd += "<td id='itemReq' class='basicTd'>"+goodsItemReq[k]+"</td>";
						}
						trtd += "</tr>";
						
						table.innerHTML += trtd;
						combineList.appendChild(table);
					};
					
					//
					
			},error:function(){	
				alert('시스템이 바쁩니다.\n나중에 다시 시도해 주세요!!');  
			}
			});
			//
		});
	}

//	$.ajax({type:"GET",url:"element/read.do",async:false,success:function(elements){
//	var element = elements.jsonResult.data;

//	}, error:function(){	
//	alert('시스템이 바쁩니다.\n나중에 다시 시도해 주세요!!');  
//	}
//	});
});