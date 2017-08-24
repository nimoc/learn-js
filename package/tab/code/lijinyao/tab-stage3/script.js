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
        contents: ".contents",
        //��ʾ�ڶ���content
        activeIndex: 1
    });
});

//��װΪtab����
var tab = function (options) {
    var element;
    var triggers;
    var contents;
    var activeIndex;
    element = $(options.element);
    triggers = $(options.triggers);
    contents = $(options.contents);
    activeIndex = options.activeIndex;
    //����Ĭ�ϳ�ʼ���
    if(!activeIndex){
        //��û�����õ�ʱ���л�����һ�����
        triggers.eq(0).addClass("active");
        contents.children().eq(0).addClass("active");
    }else{
        triggers.eq(activeIndex).addClass("active");
        contents.children().eq(activeIndex).addClass("active");

    }
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