$(document).ready(function() {
	
	htmlform();
	
//	$('#inven').click(function(){
//		location.href='main.html';
//	});
//	
//	$('#colist').click(function(){
//		location.href='index.html';
//	});
	function htmlform() {
		var h1 = null;
		var html = null;
		var counter = $('#htmlform');
			h1 = document.createElement('h1');
			html = '';
			html += '2'; 
			h1.innerHTML = html;
			counter.append(h1);
	}
	
	$("#pcounter").mouseover(function(){
		$("#pcounter").css("backgroundColor","#BBB");
	}).mouseout(function(){
		$("#pcounter").css("backgroundColor","#DDD","background","rgba(255, 255, 255, .0)");
	});
	
	$("#inven").mouseover(function(){
		$("#inven").css("backgroundColor","#BBB");
	}).mouseout(function(){
		$("#inven").css("backgroundColor","#DDD","background","rgba(255, 255, 255, .0)");
	});

	$("#colist").mouseover(function(){
		$("#colist").css("backgroundColor","#BBB");
	}).mouseout(function(){
		$("#colist").css("backgroundColor","#DDD","background","rgba(255, 255, 255, .0)");
	});
	
});