/**
 * Created by Lijin on 2015/8/1.
 */
$(document).ready(function () {
    $(".tab-nav span").click(function () {
        var nav = $(this);
        //�۽������span
        nav.addClass("active")
            .siblings()
            .removeClass("active");
//��������ģ�飬��ʾ��Ӧģ��
        $(".contents").children()
            .hide()
            .eq(nav.index())
            .show();
    });
});
