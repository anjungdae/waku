var myItemImageAgain=[];
var myItemStockAgain=[];

$(document).ready(function() {
	
	to();

	function to(){
		var uNo = 1;

		iNo=1;

		var baseUrl = "http://121.138.120.81:9800/waku/jd/pacecounter/";

		$.ajax({type:"GET",url:baseUrl+"myItem/keepRead.do?uNo="+uNo,async:false,success:function(myItems){
			var myItem = myItems.jsonResult.data;
			
			console.log(myItem.length);
			
			for (i = 0; i < myItem.length; i++) {
				myItemImageAgain.push(myItem[i].iImage);
				myItemStockAgain.push(myItem[i].iStock);
			};
			
			var tList = document.getElementById("touchList");

			var tTemp = '';
			var myItemClass = '';
			var myItemName = [];
			var myItemImage =[];
			var myItemStock =[];
			
			var i = '';
			
			for (i = 0; i < myItem.length; i++) {
				if(myItem[i].iClass == "엠블럼"){
					myItemClass = myItem[i].iClass;
					myItemName.push(myItem[i].iName);
					myItemImage.push(myItem[i].iImage);
					myItemStock.push(myItem[i].iStock);
				};
			};
			//
			
			tTemp += "<div data-role='collapsible'>";
			tTemp += "<h6><span id = 'itemClass' class='sortName'>"+ myItemClass + "</span></h6>";
			tTemp += "<ul id = 'itemName'>";
					for(var j = 0; j < myItemName.length; j++){
						tTemp += "<li id='" + myItemImage[j].substring(0,myItemImage[j].length-4) + "' class='itemNameLi'><img src='img/sideicon/"
						+ myItemImage[j] + "' id='indexIcon'><br>" + myItemName[j] + "</li>";
					};
			tTemp += "</ul>"
			tTemp += "</div>"
				
			myItemClass = '';
			i = '';
			
			myItemClassNoEmBe =[];//엠블럼이 아닌거에 대해 이전 배열
			myItemClassNoEmAf =[];//엠블럼이 아닌거에 대해 이후 배열
			
			//중복제거
			for(i=0;i<myItem.length;i++){
				myItemClassNoEmBe.push(myItem[i].iClass);
				$.each(myItemClassNoEmBe, function(i, el){
					if($.inArray(el, myItemClassNoEmAf) === -1){
						if(el != "엠블럼"){
						myItemClassNoEmAf.push(el);
						};
					}});
			};
			
			//
			for(var i = 0; i < myItemClassNoEmAf.length; i++){
				myItemName = [];
				myItemImage = [];
				myItemStock = [];
				for (var j = 0; j < myItem.length; j++) {
					if(myItem[j].iClass == myItemClassNoEmAf[i]){
						myItemClass = myItem[j].iClass;
						myItemName.push(myItem[j].iName);
						myItemImage.push(myItem[j].iImage);
						myItemStock.push(myItem[j].iStock);
					};
				};
			
				tTemp += "<div data-role='collapsible'>";
				tTemp += "<h6><span id = 'itemClass' class='sortName'>"+ myItemClass + "</span></h6>";
				tTemp += "<ul id = 'itemName'>";
						for(var k = 0; k < myItemName.length; k++){
							tTemp += "<li id='" + myItemImage[k].substring(0,myItemImage[k].length-4) + "' class='itemNameLi'><img src='img/sideicon/" + myItemImage[k] + "' id='indexIcon'><br>" + myItemName[k] + "</li>";
						};
				tTemp += "</ul>";
				tTemp += "</div>";
			};
			
			tList.innerHTML = tTemp;
		}, error:function(){	
			alert('데이터 처리중입니다. 잠시 뒤 다시 시도해주세요!');  
		}
		});
	};
});