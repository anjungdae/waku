
function load(){


if (localStorage.getItem('uNo') == null) {
		$('#userLogin').click(function(){
			$.ajax({
				url: "http://localhost:9999/waku/user/login.do",
				type:"POST",
				data : {
					email:$('#loginEmail').val(),
					password:$('#loginPassword').val()

				},
				success: function(uNo){
					console.log(uNo);
					if (uNo.jsonResult.data.length == 0) {
						alert('로그인 정보가 일치하지 않습니다.'); 
						return false; 
					} else {
						localStorage.setItem('uEmail', $('#loginEmail').val());
						localStorage.setItem('uPassword', $('#loginPassword').val());
						localStorage.setItem('uNo', parseInt(no.jsonResult.data[0].uNo));

						var userNo = parseInt(localStorage.getItem('uNo'));
						viewItemList(userNo);
						$.mobile.changePage("www.naver.com");
					}
				}
			});
		});
	} else {

		$('#loginEmail').val(localStorage.getItem('uEmail'));
		$('#loginPassword').val(localStorage.getItem('uPassword'));

		$('#userLogin').click(function(){
			$.ajax({
				url: "http://localhost:9999/waku/user/login.do",
				type:"POST",
				data : {
					uEmail:$('#loginEmail').val(),
					uPassword:$('#loginPassword').val()

				},
				success: function(uNo){
					var userNo = parseInt(localStorage.getItem('uNo'));
//					viewItemList(userNo);
					alert("Hello! !!");
//					$.mobile.changePage('#list-items');
				}
			});
		});
	}

};



$(document).ready(function() {
	load();
});
