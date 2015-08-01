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
        contents: ".contents"
    });
});

//封装为tab函数
var tab = function (options) {
    var element;
    var triggers;
    var contents;
    element = $(options.element);
    triggers = $(options.triggers);
    contents = $(options.contents);

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