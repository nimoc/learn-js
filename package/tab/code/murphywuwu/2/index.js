(function(){
	tab = function tab(obj) {
		//获取元素
		var tab = $(obj.element);
		var tab_num = $(obj.triggers)
		var tab_cont = $(obj.contents);

		//实现tab交互
		tab.on('click',obj.triggers,function(){
			var show_tab = $(this);
			show_tab.addClass('active').siblings().removeClass('active');

			var show_cont = tab_cont.eq(show_tab.index());
			tab_cont.removeClass('active');
			show_cont.addClass('active');
		})
	}
})();