/**
 * Created by Lijin on 2015/8/1.
 */
$(document).ready(function () {
    $(".tab-nav span").click(function () {
        var nav = $(this);
        //聚焦点击的span
        nav.addClass("active")
            .siblings()
            .removeClass("active");
//隐藏其他模块，显示对应模块
        $(".contents").children()
            .hide()
            .eq(nav.index())
            .show();
    });
});
