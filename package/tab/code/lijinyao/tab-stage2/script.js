/**
 * Created by Lijin on 2015/8/1.
 *
 * jquery�е�eq������ʹ�ã�
 * eq() ѡ����ѡȡ����ָ�� index ֵ��Ԫ�ء�
 */
$(document).ready(function () {
    tab({
        element: ".tab",
        triggers: ".tab-nav span",
        contents: ".contents"
    });
});

//��װΪtab����
var tab = function (options) {
    var element;
    var triggers;
    var contents;
    element = $(options.element);
    triggers = $(options.triggers);
    contents = $(options.contents);

    //�󶨼����¼�
    triggers.click(function () {
        var nav = $(this);
        //�۽������span
        nav.addClass("active")
            .siblings()
            .removeClass("active");
//��������ģ�飬��ʾ��Ӧģ��
        contents.children()
            .hide()
            .eq(nav.index())
            .show();
    });
};