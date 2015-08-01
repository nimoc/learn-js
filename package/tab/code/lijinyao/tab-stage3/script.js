/**
 * Created by Lijin on 2015/8/1.
 *
 * jquery中的eq函数的使用：
 * eq() 选择器选取带有指定 index 值的元素。
 */
$(document).ready(function () {
    tab({
        element: ".tab",
        triggers: ".tab-nav span",
        contents: ".contents",
        //显示第二个content
        activeIndex: 1
    });
});

//封装为tab函数
var tab = function (options) {
    var element;
    var triggers;
    var contents;
    var activeIndex;
    element = $(options.element);
    triggers = $(options.triggers);
    contents = $(options.contents);
    activeIndex = options.activeIndex;
    //设置默认初始面板
    if(!activeIndex){
        //当没有设置的时候切换到第一个面板
        triggers.eq(0).addClass("active");
        contents.children().eq(0).addClass("active");
    }else{
        triggers.eq(activeIndex).addClass("active");
        contents.children().eq(activeIndex).addClass("active");

    }
    //绑定监听事件
    triggers.click(function () {
        var nav = $(this);
        //聚焦点击的span
        nav.addClass("active")
            .siblings()
            .removeClass("active");
//隐藏其他模块，显示对应模块
        contents.children()
            .hide()
            .eq(nav.index())
            .show();
    });
};