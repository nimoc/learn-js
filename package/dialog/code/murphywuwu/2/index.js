/**
 * @file dialog2 js file
 * @author murphywuwu
 */
!(function  () {
	// 获取元素
	var button = $('.dialog-button');
	var dialog_container = $('.dialog-container');
	var close = $('.close');
	// 实现dialog弹出层
	button.click(function(){
		dialog_container.show();
	})
	close.click(function(){
		dialog_container.hide();
	})
})();