function load(){
	$.validator.addMethod("password",function(value,element){ 
		return this.optional(element) || /^(?=.*\d)(?=.*[a-z])/i.test(value); 
	},"알파벳과 숫자만 사용가능합니다."); 

	$.validator.addMethod('emailCheck', function(email) {
		$.ajax({
			url: 'http://localhost:9992/waku/user/chkByUser.do',
//			url: baseUrl +'user/chkByUser.do',
//			type: 'post',
			data: {
				U_EMAIL: $('#email').val()
			},
			cache:false,
			async:false,
			success: function(answer) {
				console.log(answer);
				var result = answer.jsonResult.resultStatus == 0 ? true : false;
				console.log(result);
			}
		});
		console.log(result);
		return result;
	}, '');

	$('#valiex').validate({s
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
			cpassword: {
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
			cpassword: {
				required: '비밀번호를 입력하세요',
				minlength: '8자 이상으로 입력하세요',
				maxlength: '16자 이하로 입력하세요',
				equalTo: '비밀번호가 서로 일치하지 않습니다.'
			}
		},
		
		// 실행완료!
		submitHandler:function(){
			$.ajax({
				url:'http://localhost:9992/waku/user/signUp.do',
				type: 'post',
				data: {
					uEmail: $('#email').val(),
					uPassword: $('#password').val()
				},
				success: function(){
					$.ajax({
						url: 'http://localhost:9992/waku/user/selectuNo.do',
						type: 'post',
						data: {
							uEmail: $('#email').val()
						},
						success: function(uNo){
							localStorage.setItem('uEmail', $('#email').val());
							localStorage.setItem('uPassword', $('#password').val());
							localStorage.setItem('uNo', parseInt(uNo.jsonResult.data));
							location.href='#list-items';
							//실행완료!
							}
							
						
					});

				}
//				error : function() {
//				alert('시스템이 바쁩니다.\n나중에 다시 시도해 주세요!');
//				}
			});
		},
		invalidHandler:function(){
			alert('모두 입력해주세요.');
		}
	});
};


$(document).ready(function() {
	load();
});