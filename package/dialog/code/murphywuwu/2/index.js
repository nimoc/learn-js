/**
 * @file dialog-2 js file
 * @author murphywuwu
 */
!(function  (global) {
	/**
	 * title : string
	 * content: string
	 * trigger: string
	 */
	
	function Dialog (opts) {
		this.init(opts);
	}

	Dialog.prototype = {
		init: function (opts) {
			this._buildHtml(opts);
			this.bindEvent(opts);
		},
		_buildHtml: function (opts) {
		
			//  构造HTML结构
			var html = '<div class="dialog-container">'
			         + '<div class="dialog">'
			         + '<div class="title">' 
			         + opts.title 
			         + '</div>'
			         + '<div class="content">'
			         + opts.content 
			         + '</div>'
			         + '<div class="close">'
			         + 'X'
			         + '</div>'
			         + '</div></div>';

			// 将Dialog插入DOM中
			$('body').append(html);

			// 初始化Dialog
			this.dialog_container = $('.dialog-container');
			this.dialog_container.hide();
		},
		bindEvent: function (opts) {
			var that = this;
			// 获取元素
			var btn = $(opts.trigger);
			var close = $('.close');
			// 绑定点击事件
			 btn.click(function () {
			 	that.dialog_container.show();
			 })
			close.click(function () {
				that.dialog_container.hide();
			});
		}

	}

	global.Dialog = Dialog;

})(window);
 