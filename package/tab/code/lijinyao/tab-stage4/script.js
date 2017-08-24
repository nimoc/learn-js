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
        activeIndex: 1,
        //��Ӵ�������
        triggerType: "click",
        onSwitch: function (index, count) {
            console.log('click: '+ (index+1) + ' total: '+count);
        }
    });
});

//��װΪtab����
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
    //ȷ����ȫ
    if(options.triggerType === 'hover'){
        triggerType = 'hover';
    }else{
        triggerType = 'click';
    }
    count = triggers.length;
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
    triggers[triggerType](function () {
        var nav = $(this);
        //���ô�������
        onSwitch(nav.index(), count);
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