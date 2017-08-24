
var dialog = function(json){
	var btn = document.querySelectorAll(json.trigger)[0];

	//添加遮蔽罩
	var maskDiv = document.createElement("div");
	maskDiv.className = "mask";
	document.body.appendChild(maskDiv);

	//添加对话框
	var dialogDiv = document.createElement("div");
	dialogDiv.className = "dialog";
	dialogDiv.innerHTML = '<div class="title"><span>我真的是标题啊</span><span class="close">×</span></div><div class="content">'+json.content+'</div>'
	document.body.appendChild(dialogDiv);

	btn.onclick = function(){
		maskDiv.style.display = "block";
		dialogDiv.style.display = "block";
	}

	var close = document.querySelectorAll(".close")[0];
	close.onclick = function(){
		maskDiv.style.display = "none";
		dialogDiv.style.display = "none";
	}

}

dialog({
    trigger: '#btn',
    content: '<strong>哈哈</strong>'
})