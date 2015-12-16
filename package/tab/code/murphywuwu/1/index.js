/**
 * @file tab2 js file
 * @author murphywuwu
 */

(function () {
	var tab = $('.tab');
	tab.on('click', '.nav-list li', function(){
		var tab_num = $(this);
		tab_num.addClass('active').siblings().removeClass('active');

		var item = $('.tab-content .item');
		item.removeClass('active').eq(tab_num.index()).addClass('active');
	})
})();