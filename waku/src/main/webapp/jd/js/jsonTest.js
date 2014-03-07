window.onload = function() {
	listMember();
};

function listMember() {
	$.ajax({type:"GET",url:"list.do",success:function(items){
		var item = items.jsonResult.data;
		console.log(item);
		var it = null;
		var tr = null;
		var html = null;
		var table = document.getElementById('listTable');
		for (var i = 0; i < item.length; i++) {
			it = item[i];
			console.log(it);
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
