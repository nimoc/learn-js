/**
 * @file tab3 js file
 * @author murphywuwu
 */
;(function () {
	tab = function (obj) {
		// 获取元素
		var tabNum = $(obj.triggers);
		var tabCont = $(obj.contents);
		// 初始化页面
		var activeClass = obj.activeTriggerClass || 'ui-tab-active';
		var activeIndex = obj.activeIndex || 0;
		var triggerType = obj.triggerType || 'click';
		tabNum.eq(activeIndex).addClass(activeClass);
		tabCont.eq(activeIndex).addClass(activeClass);
		// 实现tab交互
		tabNum[triggerType](function () {
			var showTab = $(this);
			showTab.addClass(activeClass).siblings().removeClass(activeClass);
			var showCont = tabCont.eq(showTab.index());
			showCont.addClass(activeClass);
		});
	}
})();