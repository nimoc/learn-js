/**
 * @file dialog-4 js file
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
			// 获取元素
			var btn = $(opts.trigger);
			var close = $('.close');
			var dialog_container = this.dialog_container;
			// 绑定事件
			btn.click(function () {
			 	opts.effectShow(dialog_container);
			 })
			close.click(function () {
				opts.onClose(dialog_container);
			});
			$(document).keydown(function(e){
				if(e.keyCode === 27) {
					opts.onClose(dialog_container);
				}
			})
		}

	}

	global.Dialog = Dialog;

})(window);
