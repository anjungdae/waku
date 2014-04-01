//    *날짜 비교=> 쿠폰종료알림
				$.ajax({
					async: false,
                	url : "/waku/barcode/joinGoods.do?gNo="+coupon[i].barcode.gNo,
                	success : function(coupons) {
                		var barcode = coupons.jsonResult.data;
            		    var num=barcode[0].cNo;
            		    console.log("qjsgh"+barcode[0].cNo);
            

			    var now=new Date();
    		    console.log(now);
    		    
    		    var year = now.getFullYear();
    		    console.log(year);

    		    var month = now.getMonth() + 1      
    		    if((month+"").length < 2) { 
    		    month = "0" + month;
    		    }
    		    
    		    var date = now.getDate();           // 현재 날짜 가져오기
    		    
    		    if((date+"").length < 2) {       // 일이 한자리 수인 경우 앞에 0을 붙여주기 위해
    		    date = "0" + date;
    		    }
    		   
    		    var today = year +"" + month + "" + date; 
    		   console.log("오늘날짜"+today); 
    		    
    		   var InputEdata = barcode[0].gEdate;  
    		   
    		   var stringdate=InputEdata.toString()
    		   var Inputdata = stringdate.split("-");
    
    		   var y =Inputdata[0];
    		   var m =Inputdata[1];
    		   var d =Inputdata[2];
    		   
    		   var inputDate=y +""+ m +""+ d;
    		   console.log("종료일"+inputDate);
    		   
    		   if(parseInt(today) > parseInt(inputDate)){  // int 형으로 변환하여 비교한다.
    			   console.log("쿠폰종료되었습니다.");

    			   console.log("#use"+i);

    			   $("#container"+i).animate(opacity);
//    			   $("#container"+i).attr('style','background: rgba(0, 0, 0, 0.01);');
//    			   $("#gImage"+i).attr('style','opacity:0.5;');
//    			   $("#gTitle"+i).attr( 'style','opacity:0.5;');
//    			   $("#gEdate"+i).attr( 'style','opacity:0.5;');
//    			   
    			   console.log("oo"+"#container"+i);
    			   var temp2='';
    			   temp2 += "<div id='endData" + i + "' class='endData' >"+"쿠폰사용이 종료되었습니다."+'</div>';
    			   $(temp2).appendTo("#dataInfo" + i);  
    			   
    			   
    			   
    			   
    			   
    			   
    			   
    			   
    		
//    			   $("#use"+i).click(function() {
//    				   temp += "<div id = 'emptyuse'>" +"22사용하기"+ '</div>';
//    				   $("#use"+i).empty();
    				
//    			   $("#use"+i).click(function( event ) {
//    				   event.preventDefault();
//    				   event.isDefaultPrevented(); // true
//    				 });
//    			   
    			   
    			   }// if문 끝 

				
                	}
				});
