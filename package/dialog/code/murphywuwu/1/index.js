/**
 * @file dialog-1 js file
 * @author murphywuwu
 */
!(function  (global) {
	/**
	 * title : string
	 * content: string
	 */

	function Dialog (opts) {
		this.init(opts);
	}

	Dialog.prototype = {
		init: function (opts) {
			this.opts =  opts;
			this._buildHtml(opts);
			this.bindEvent();
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

			this.dialog_container = $('.dialog-container')
		},
		bindEvent: function () {
			this.dialog_container = $('.dialog-container');
			var that = this;
			var close = $('.close');
			close.click(function () {
				that.dialog_container.hide();
			})
		}

	}

	global.Dialog = Dialog;

})(window);
 