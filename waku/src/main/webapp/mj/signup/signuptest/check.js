$(function(){
	$.validator.addMethod("password",function(value,element){ 
		return this.optional(element) || /^(?=.*\d)(?=.*[a-z])/i.test(value); 
	},"알파벳과 숫자만 사용가능합니다."); 

	$.validator.addMethod('emailCheck', function(email) {
		$.ajax({
			url: '/user/chkByUser.do',
			type: 'post',
			data: {
				userID: $('#email').val()
			},
			cache:false,
			async:false,
			success: function(answer) {
				console.log(answer);
				result = answer.jsonResult.resultStatus == 0 ? false : true;
				console.log(result);
			}
		});
		console.log(result);
		return result;
	}, '');

	$('#valiex').validate({
		onkeyup: false,
		rules: {
			email: {
				required: true,
				email: true,
				emailCheck: true
			},
			password: {
				required: true,
				minlength: 8,
				maxlength: 16,
			},
			pwchk: {
				required: true,
				minlength: 8,
				maxlength: 16,
				equalTo: '#password'
			}
		},
		messages: {
			email: {
				required: '이메일을 입력하세요',
				email: '이메일을 바르게 입력하세요',
				emailCheck: '중복된 이메일입니다.'
			},
			password: {
				required: '비밀번호를 입력하세요',
				minlength: '8자 이상으로 입력하세요',
				maxlength: '16자 이하로 입력하세요',
			},
			pwchk: {
				required: '비밀번호를 입력하세요',
				minlength: '8자 이상으로 입력하세요',
				maxlength: '16자 이하로 입력하세요',
				equalTo: '비밀번호가 서로 일치하지 않습니다.'
			}
		},
		submitHandler: function(){
			$.ajax({
				url: '/user/signUp.do',
				type: 'post',
				data: {
					userID: $('#email').val(),
					password: $('#password').val()
				},
				success: function(){
					$.ajax({
						url: 'user/login.do?"uEmail"+"&uPassword"+='
								+$('#email').val()+'&password='+$('#password').val(),
						dataType : 'json',
						type: 'GET',
						success: function(data){
							if(data.jsonResult.resultStatus == 0){
								localStorage.setItem("uEmail",data.jsonResult.data.email);
								localStorage.setItem("uWtotal",data.jsonResult.data.user_photo);
//								$.mobile.changePage('startClimbing.html');
							}else{
								alert('로그인이 실패 하였습니다.(다시확인해주세요)');
							}
						}
					});

				}
//				error : function() {
//				alert('시스템이 바쁩니다.\n나중에 다시 시도해 주세요!');
//				}
			});
		},
		invalidHandler: function(){
			alert('모두 입력해주세요.');
		}
	});
});