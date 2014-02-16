$(document).ready(function() {
	
	htmlform();
	
//	$('#inven').click(function(){
//		location.href='main.html';
//	});
//	
//	$('#colist').click(function(){
//		location.href='index.html';
//	});
	
	
	$("#pcounter").mouseover(function(){
		$("#pcounter").css("backgroundColor","#EEE").css("border-bottom","blue 4px solid");
	}).mouseout(function(){
		$("#pcounter").css("background","rgba(255, 255, 255, .0)").css("border-bottom","rgba(255, 255, 255, .0)");
	});
	
	$("#inven").mouseover(function(){
		$("#inven").css("backgroundColor","#EEE");
	}).mouseout(function(){
		$("#inven").css("background","rgba(255, 255, 255, .0)");
	});

	$("#colist").mouseover(function(){
		$("#colist").css("backgroundColor","#EEE");
	}).mouseout(function(){
		$("#colist").css("background","rgba(255, 255, 255, .0)");
	});
	
});

function htmlform() {
//	$('').html;
	var div = null;
	var html = null;
	var counter = $('#htmlform');
		div = document.createElement('div');
		html = '';
		html += '<br>2<br>';
		div.innerHTML = html;
		counter.append(div);
}