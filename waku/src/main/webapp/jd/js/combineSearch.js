$(window).load(function() {

	var uNo = 1;

	var myItem;

	$.ajax({type:"GET",url:"myItem/keepRead.do?uNo="+uNo,async:false,success:function(myItems){
		myItem = myItems.jsonResult.data;
	}, error:function(){	
		alert('데이터 처리중입니다. 잠시 뒤 다시 시도해주세요.');  
	}
	});

	var combineList = document.getElementById("combineList");

	for(var i = 0; i< myItem.length; i++){
		itemName = myItem[i].iImage.substring(0,myItem[i].iImage.length-4);
		itemNumber = myItem[i].iNo;
		nameGrant(itemName,itemNumber);
	}

	var iNo = [];
	
	var myItemImage =[];
	var myItemStock =[];
	
	function nameGrant(itemName,itemNumber){
		$("#" + itemName).bind("tap",function(){
			
			if(iNo.length<4){
				iNo.push(itemNumber);
			} else {
				iNo = [];
				iNo.push(itemNumber);
			}
			
			var orderFlag =[];
			
			$.ajax({type:"GET",url:"goods/read.do",data:{
				iNo:iNo
			},async:false,success:function(goods){
				
				$(".basicTable").remove();
					
				goods = goods.jsonResult.data;
			
				var table = null;
				
				goodsImageBe = [];
				goodsImageAf = [];

				goodsTitleBe = [];
				goodsTitleAf = [];

				goodsDescBe = [];
				goodsDescAf = [];

				goodsEdateAf = [];
				goodsNoAf = [];

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
					goodsNoAf = [];
					
					var p = 0;
					
					for(i=0;i<goodsImageAf.length;i++){
						table = document.createElement('table');
						table.setAttribute("id","basicTable"+[i]);
						table.setAttribute("class","basicTable");
						table.setAttribute("cellspacing","0");
						table.setAttribute("cellpadding","0");
						var trtd = '';
						
						goodsItemImage =[];
						goodsItemReq = [];

						for (var j = 0; j < goods.length; j++) {
							if(goods[j].gImage == goodsImageAf[i]){
								goodsEdateAf = goods[j].gEdate;
								goodsNoAf = goods[j].gNo;
								if(goods[j].iClass =="엠블럼"){
									for(var l = 0; l<myItemImageAgain.length; l++){
										if(myItemImageAgain[l]==goods[j].iImage){
											myItemImage.push(myItemImageAgain[l]);
											myItemStock.push(myItemStockAgain[l]);
										}
									}
									goodsItemImage.push(goods[j].iImage);
									goodsItemReq.push(goods[j].iReq);
									}
							}
						}
						
						for (var j = 0; j < goods.length; j++) {
							if(goods[j].gImage == goodsImageAf[i]){
								goodsEdateAf = goods[j].gEdate;
								goodsNoAf = goods[j].gNo;
								if(goods[j].iClass !="엠블럼"){
									for(var l = 0; l<myItemImageAgain.length; l++){
										if(myItemImageAgain[l]==goods[j].iImage){
											myItemImage.push(myItemImageAgain[l]);
											myItemStock.push(myItemStockAgain[l]);
										}
									}
									goodsItemImage.push(goods[j].iImage);
									goodsItemReq.push(goods[j].iReq);
									}
							}
						}
						
						var flag =[];
						
						trtd += "<tr>";
						trtd += "<td class='basicTdImage' rowspan='5'><img src = 'goods/"+goodsImageAf[i]+"' class='goodImage'></td>";
						trtd += "</tr>";
						
						trtd += "<tr>";
						trtd += "<td class='basicTd' colspan='2'>"+goodsTitleAf[i]+"</td>";
						trtd += "<td class='basicTd' colspan='2' style='text-align:right;'>"+goodsEdateAf+"</td>";
						trtd += "</tr>";
						
						trtd += "<tr>";
						trtd += "<td class='basicTd' colspan='4'>"+goodsDescAf[i]+"</td>";
						trtd += "</tr>";

						trtd += "<tr>";
						
						for(var k = 0; k<goodsItemImage.length;k++){
							if(goodsItemReq[k]>myItemStock[p]){
								trtd += "<td id='itemImageLose' class='basicTd'><img src = 'sideicon/"+goodsItemImage[k]+"' id='indexIcon' style='opacity: 0.2;'>" +
										"<br><span id='itemReqLose' class='basicTd'>"+goodsItemReq[k]+"</span></td>";
								flag.push(false);
							} else if(goodsItemReq[k]<=myItemStock[p]){
								trtd += "<td class='basicTd'><img src = 'sideicon/"+goodsItemImage[k]+"' id='indexIcon'>" +
										"<br><span id='itemReq' class='basicTd'>"+goodsItemReq[k]+"</span></td>";
								flag.push(true);
							};
							
							p = p + 1;
						};
						
						orderFlag.push(flag);
						
						if(goodsItemImage.length<4){
							trtd += "<td class='basicTd'></td>";
						}
						trtd += "</tr>";
						
						trtd += "<tr>";
						trtd += "<td id='combineButton"+ i +"' class='combineButton' data-no='" + goodsNoAf + "'colspan='4'>조합</td>";
						trtd += "</tr>";
						
						table.innerHTML += trtd;
						combineList.appendChild(table);
					};
					
					//
					var timelag = 0;
					for(var m = 0; m<goodsImageAf.length;m++){
						$("#basicTable"+ m).animate({ "top": "0px" }, timelag +=200 );
					};
					
					for(var m = 0; m<goodsImageAf.length;m++){
						combineButtonInject(m);
					};
					
					function combineButtonInject(m){
						$("#combineButton"+m).click(function() {
							
							var another;
							
							for(var oF in orderFlag[m]){
								if(orderFlag[m][oF] == true){
									another = true;
								} else if(orderFlag[m][oF] == false){
									another = false;
									continue;
								}
							}
							
							if(another == true){
								var gNo = document.getElementById("combineButton"+m).getAttribute("data-no");
								//개수 줄어들기 적용하기
								$.ajax({type:"GET",url:"barCode/read.do?gNo="+gNo,async:false,success:function(barCodes){
									var barCode = barCodes.jsonResult.data;								
									if(barCode != null){
										alert(barCode.cCode);
									} else if(barCode == null){
										alert("바코드가 모두 소진 되었습니다");
									}
								}, error:function(){	
									alert('데이터 처리중입니다. 잠시 뒤 다시 시도해주세요.');  
								}
								});
							} else {
								alert('내 아이템 수량을 확인해 주세요!');
							}
						});
					};
			},error:function(){	
				alert('데이터 처리중입니다. 잠시 뒤 다시 시도해주세요.');  
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