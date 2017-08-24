(function ($, window) {

	var _option = {
		parentElem: 'body',
		trigger: '.dialog-btn',
		title: '我真的是标题',
		content: '我来自默认的dialog组件',
		// effectShow: function () {}
		// effectHide: function () {}
		onclose: function () {}
	};
	var o = null;

	var createMask = (function () {
		var mask;
		return function () {
			return mask || (mask = $(o.parentElem).append('<div class="dialog-container"><div class="dialog-header"><div class="header-title"></div><div class="header-close"></div></div><div class="dialog-content"></div></div>'))
		}
	})();
	var update = function () {
		$('.header-title').html(o.title);
		$('.dialog-content').html(o.content);
	}


	var initEvent = function () {
		$(o.trigger).on('click', function (ev) {
			createMask();
			update();
			if (o.effectShow) {
				o.effectShow($('.dialog-container'));
				return;
			}
			$('.dialog-container').show();

		})
		$(o.parentElem).on('click', 'div', function (ev) {
			if ($(this).hasClass('header-close')) {
				o.onclose($('.dialog-container'));
				if (o.effectHide) {
					o.effectHide($('.dialog-container'));
					return;
				}
				$('.dialog-container').hide();
			}
		})
	}
	
	var dialog = function (option) {
		o = $.extend(true, {}, _option, option);
		initEvent();

	}



	window.dialog = dialog;
})(jQuery, window);