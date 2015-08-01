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
        activeIndex: 1,
        //添加触发类型
        triggerType: "click",
        onSwitch: function (index, count) {
            console.log('click: '+ (index+1) + ' total: '+count);
        }
    });
});

//封装为tab函数
var tab = function (options) {
    var element;
    var triggers;
    var contents;
    var activeIndex;
    var triggerType;
    var onSwitch;
    var count;
    element = $(options.element);
    triggers = $(options.triggers);
    contents = $(options.contents);
    activeIndex = options.activeIndex || 0;
    onSwitch = options.onSwitch || {};
    //确保安全
    if(options.triggerType === 'hover'){
        triggerType = 'hover';
    }else{
        triggerType = 'click';
    }
    count = triggers.length;
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
    triggers[triggerType](function () {
        var nav = $(this);
        //调用触发函数
        onSwitch(nav.index(), count);
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