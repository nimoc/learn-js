
var dialog = function(json){
	//添加遮蔽罩
	var maskDiv = $("<div></div>");
	maskDiv.addClass('mask');
	$("p").after(maskDiv);
	//添加对话框
	var dialogDiv = $("<div></div>");
	dialogDiv.addClass("dialog");
	dialogDiv.html('<div class="title"><span>我真的是标题啊</span><span class="close">×</span></div><div class="content">'+json.content+'</div>');
	maskDiv.after(dialogDiv);

	$(json.trigger).click(function(){
		json.effectShow ? json.effectShow(maskDiv) : maskDiv.css("display","block");
		json.effectShow ? json.effectShow(dialogDiv) : dialogDiv.css("display","block");
	});

	$(".close").click(function(){
		if(json.onClose && json.onClose()){
			json.effectHide ? json.effectHide(maskDiv) : maskDiv.css("display","none");
			json.effectHide ? json.effectHide(dialogDiv) : dialogDiv.css("display","none");
		}		
	})

	//监听esc
    $(document).keydown(function (event) {
        if(event.keyCode === 27){
            json.effectHide ? json.effectHide(maskDiv) : maskDiv.css("display","none");
			json.effectHide ? json.effectHide(dialogDiv) : dialogDiv.css("display","none");
        }
    });
}

dialog({
    trigger: '#btn',
    content: '<strong>哈哈</strong>',
    effectShow: function ($element) {
        // 淡入显示
        $element.fadeIn(500)
    },
    effectHide: function ($element) {
        // 淡出显示
        $element.fadeOut(500)
    },
    onClose: function () {
        /*
        element 弹出层 DOM 元素
        */
       var b = confirm("你确定关闭对话框？")
       return b;
    }
})