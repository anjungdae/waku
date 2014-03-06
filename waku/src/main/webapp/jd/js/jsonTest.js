window.onload = function() {
	listMember();
};

function listMember() {
	$.ajax({type:"GET",url:"list.do",success:function(items){
		console.log(items);
		var items;
		var it = null;
		var tr = null;
		var html = null;
		var table = $('listTable');
		for (var i = 0; i < items.length; i++) {
			it = items[i];
			tr = document.createElement('tr');
			html = '';
			html += '<td>' + it.iNo + '</td>'; 
			html += '<td>' + it.iName + '</td>';	
			html += '<td>' + it.iImage + '</td>';	
			html += '<td>' + it.iClass + '</td>';
			html += '<td>' + it.iPrice + '</td>';
			html += '<td>' + it.iSdate + '</td>';	
			tr.innerHTML = html;
			table.appendChild(tr);
		}
	}, error:function(){
		alert('시스템이 바쁩니다.\n나중에 다시 시도해 주세요!!');
	}
  });
}
