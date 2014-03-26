
'use strict';(function(d){function h(a,b,e){var c="rgb"+(d.support.rgba?"a":"")+"("+parseInt(a[0]+e*(b[0]-a[0]),10)+","+parseInt(a[1]+e*(b[1]-a[1]),10)+","+parseInt(a[2]+e*(b[2]-a[2]),10);d.support.rgba&&(c+=","+(a&&b?parseFloat(a[3]+e*(b[3]-a[3])):1));return c+")"}function f(a){var b;return(b=/#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(a))?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16),1]:(b=/#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(a))?[17*parseInt(b[1],16),17*parseInt(b[2],
16),17*parseInt(b[3],16),1]:(b=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(a))?[parseInt(b[1]),parseInt(b[2]),parseInt(b[3]),1]:(b=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9\.]*)\s*\)/.exec(a))?[parseInt(b[1],10),parseInt(b[2],10),parseInt(b[3],10),parseFloat(b[4])]:l[a]}d.extend(!0,d,{support:{rgba:function(){var a=d("script:first"),b=a.css("color"),e=!1;if(/^rgba/.test(b))e=!0;else try{e=b!=a.css("color","rgba(0, 0, 0, 0.5)").css("color"),
a.css("color",b)}catch(c){}return e}()}});var k="color backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor outlineColor".split(" ");d.each(k,function(a,b){d.Tween.propHooks[b]={get:function(a){return d(a.elem).css(b)},set:function(a){var c=a.elem.style,g=f(d(a.elem).css(b)),m=f(a.end);a.run=function(a){c[b]=h(g,m,a)}}}});d.Tween.propHooks.borderColor={set:function(a){var b=a.elem.style,e=[],c=k.slice(2,6);d.each(c,function(b,c){e[c]=f(d(a.elem).css(c))});var g=f(a.end);
a.run=function(a){d.each(c,function(d,c){b[c]=h(e[c],g,a)})}}};var l={aqua:[0,255,255,1],azure:[240,255,255,1],beige:[245,245,220,1],black:[0,0,0,1],blue:[0,0,255,1],brown:[165,42,42,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgrey:[169,169,169,1],darkgreen:[0,100,0,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkviolet:[148,0,211,1],fuchsia:[255,
0,255,1],gold:[255,215,0,1],green:[0,128,0,1],indigo:[75,0,130,1],khaki:[240,230,140,1],lightblue:[173,216,230,1],lightcyan:[224,255,255,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],magenta:[255,0,255,1],maroon:[128,0,0,1],navy:[0,0,128,1],olive:[128,128,0,1],orange:[255,165,0,1],pink:[255,192,203,1],purple:[128,0,128,1],violet:[128,0,128,1],red:[255,0,0,1],silver:[192,192,192,1],white:[255,255,255,1],yellow:[255,255,
0,1],transparent:[255,255,255,0]}})(jQuery);

var uNo=2;
var temp = '';
//var serial=[];
//var gno;


function loadCoupon() {
	var result = new Array();
	$.ajax({
		async: false,
		url : "/waku/mycoupon/ByBarcode.do?uNo="+uNo,
		success : function(coupons) {
			var coupon = coupons.jsonResult.data;
			
			console.log(coupon);
			
			$.each(coupon, function(i, item){
				console.log(item);
				
			//for (var i = 0; i < coupon.length; i++){
				var temp = '';
				//console.log(i);
				//delete에서 쓸 전역변수들.
				
//				 var serial= coupon[i].barCode.cSerial;
//				 console.log("s"+serial);
//				 gno=coupon[i].barCode.gNo;
//				 console.log("g"+serial);
//				 
				temp += "<div id='container" + i + "' class = 'container'>";
				temp += "<div id='bottom" + i + "' class = 'bottom'>";
				temp += "<div id='use" + i + "' class='use' >"+"사용하기"+'</div>';
				temp += "<div id='delete" + i + "' class = 'delete'>"+"삭제하기"+'</div>';	
				temp +=	'</div>';
				
				temp += "<div id='slider-container" + i + "' class='slider-container'>";
				temp += "<div id='slider-turn" + i + "' class = 'slider-turn'>";
				//var s=$(".slider-turn" ).css( "margin-left", "0" );
				
				temp += '<nav>';

	                	$.ajax({
						async: false,
	                	url : "/waku/barcode/joinGoods.do?gNo="+coupon[i].barCode.gNo,
	                	success : function(coupons) {
	                		var coupon = coupons.jsonResult.data;
	                		console.log(coupon[0]);
	            			for (var j = 0; j < coupon.length; j++){
	            		    temp += "<div id ='gImage'>" +  coupon[j].goods.gImage + '</div>';
	            		    temp += "<div id ='gTitle'>" +  coupon[j].goods.gTitle + '</div>';
	            		    temp += "<div id ='gEdate'>"+"사용종료 일" +  coupon[j].goods.gEdate + '</div>';
	            		    
	            			};
	                	}
	                });
               
				temp += "<div id = 'uPay'>" +"지불걸음 수"+  coupon[i].uPay + '</div>';
				temp += "<div id = 'cGdate'>" +"취득일"+  coupon[i].cGdate + '</div>';
				temp += "<div id = 'cSrial'>" +"시리얼넘버"+  coupon[i].cSerial + '</div>';
				
				//temp += "<div id = 'cState'>" +  coupon[i].cState + '</div>';
				temp += '</nav>';
			
				temp += '<nav>';
				temp += "<div id = 'cCode'>" +  coupon[i].barCode.cCode + '</div>';
				
				$.ajax({
					async: false,
                	url : "/waku/barcode/joinGoods.do?gNo="+coupon[i].barCode.gNo,
                	success : function(coupons) {
                		var coupon = coupons.jsonResult.data;
                		console.log(coupon[0]);
            			for (var j = 0; j < coupon.length; j++){
            		    temp += "<div id ='gDesc'>" +  coupon[j].goods.gDesc + '</div>';
            			};
                	}
                });
				temp+="<a href='index.html'data-role='button' data-icon='delete' data-iconpos='notext' data-theme='b' data-inline='true' id='cancel"+i+"' class='ui-link ui-btn ui-btn-b ui-icon-delete ui-btn-icon-notext ui-btn-inline ui-shadow ui-corner-all'  role='button' style='opacity: 1;'>";
				temp+='</a>';  
				temp += '</nav>';
				temp += '</div>';
				temp += '</div>';
				temp += '</div>';
				$(temp).appendTo('#coList');  

				var margL = parseInt($(".slider-turn").css("margin-left"));

				//사용하기 이벤트 <page turn> 
				$("#use"+i).click(function(){
					console.log(this);
					var w = parseInt($(".slider-turn nav").css("width"));
					console.log(w);
					var margL = parseInt($("#slider-turn"+this.id.replace("use","")).css("margin-left"));
					console.log(margL);
					margL -= w;
					console.log(margL);
					$("#slider-turn"+this.id.replace("use","")).animate({'margin-left':margL},390);
					$("#container"+this.id.replace("use","")).animate({backgroundColor:'#5E5E5E'},200);

					
					 $("#cancel"+this.id.replace("use","")).click(function(){ 
						  margL += w;
						  console.log(margL);
				       $("#slider-turn"+this.id.replace("cancel","")).animate({'margin-left':margL},390);  	  
				       $('.container').animate({backgroundColor:'#FFF'},900); 
				       $("#container"+this.id.replace("use","")).animate({opacity:0.0},200);
				       });
				
				});   
						
				
				//삭제버튼.
				$("#delete"+i).click(function(){
					 console.log(this);
					    $("#container"+this.id.replace("delete","")).animate({'opacity':0},600);
					    $("#container"+this.id.replace("delete","")).animate({'top':-1200}, {duration: 600,queue: false});
						console.log("이건 몇번째언어일까"+i);
			//삭제버튼-데이터 삭제 
					    //console.log("전역"+data); data전역 변수로 serial번호 받아오기. (var를 안써주면 전역으로 선언가능.)
						
						     $.ajax({
									async: false,
									url : "/waku/mycoupon/mycouponDelete.do?cSerial="+coupon[i].cSerial,
									success : function(deletemycoupon) {
									console.log("마이쿠폰테이블삭제");
									}
									});
							 $.ajax({
									async: false,
				                	url : "/waku/barcode/barcodeDelete.do?cSerial="+coupon[i].barCode.cSerial,
				                	success : function(deletebarcode) {
				            		console.log("바코드테이블삭제");	
				                	}
				                	});

						     $.ajax({
										async: false,
					                	url : "/waku/goods/goodsDelete.do?gNo="+coupon[i].barCode.gNo,
					                	success : function(deletegoods) {
						            		console.log("물품테이블 삭제완료!");	
     					               }
					                });	
									
					                
			                       
									
									
									$.ajax({
										async: false,
					                	url : "/waku/barcode/joinGoods.do?gNo="+coupon[i].barCode.gNo,
					                	success : function(goods) {
                                        console.log(goods);
                                        var goodsData=goods.jsonResult.data;
                                        console.log(goodsData);
					                		$.ajax({
											async: false,
						                	url : "/waku/company/companyDelete.do?cNo="+goodsData[0].goods.cNo,
						                	success : function(coupons) {
						            		console.log("회사테이블삭제")	
						                	}
						                	});
					                	
					                	
					                	
					                	}
									});
					                	
					            
				});	
									
									
					
						
							
									
				
			     
				
				
			
			
			});//ajax파싱 for문 끝!!
			
			
		}
	});
 
};



$(document).ready(function() {
	loadCoupon();
});

