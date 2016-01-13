$(function() {
    dialog({
        trigger: 'button',
        title: '我是一个弹出框',
        content: '我会在4秒后自己消失，不要想我',
        effectShow: function($element) {
            $element.fadeIn(500)
        },
        effectHide: function($element) {
            $element.fadeOut(500)
        },
        onClose: function() {
            console.log('已经关掉了哦~')
        },
        autoClose: 4000,
        showCover: false,
        quickClose: true
    });
});


/**
 * 第五阶段 对话框函数
 * @param options Object
 * option.trigger 触发对话框的DOM元素或者元素的选择器，触发方式为click
 * options.title 对话框的标题
 * options.content 对话框的内容
 * options.effectShow 对话框出现效果
 * options.effectHide 对话框消失效果
 * options.closeKey 指定按键对应的键码，按键按下时对话框消失，默认键码为27（Esc键）
 * options.autoClose 指定时间后自动关闭窗口
 * options.showCover 是否显示遮罩，默认为false
 */
function dialog(options) {
    // 缓存参数
    var $trigger = $(options.trigger),
        title = options.title ? options.title : '',
        content = options.content ? options.content : '',
        effectShow = options.effectShow,
        effectHide = options.effectHide,
        onClose = options.onClose,
        closeKey = options.closeKey ? options.closeKey : 27,
        autoClose = options.autoClose,
        showCover = options.showCover;

    // 对话框的主DOM元素
    var $dialogContainer = $('<section></section>').addClass('dialog-container');
    // 遮罩层的class名
    var dialogCoverClassName = showCover ? 'dialog-background' : '';
    // 遮罩层
    var $dialogCover = $('<div></div>').addClass(dialogCoverClassName);
    // 待插入的对话框DOM内容
    var dialogHTML =+'<section class="dialog">'
                    +'<div class="header">'
                    +'<span>' + title + '</span>'
                    +'<span class="close-icon">×</span>'
                    +'</div>' +
                    +'<div class="dialog-content">' + content + '</div>'
                    +'</section>';
        

    // 初始化，生成对话框的DOM，绑定事件，并隐藏对话框
    (function init() {
        $dialogContainer.html(dialogHTML);

        $('body').append($dialogContainer).append($dialogCover);

        $trigger.click(function() {

            dialogShow();

            $(document).keydown(function(event) {
                if (event.which === closeKey) dialogHide();
                $(document).off('keydown');
            });
        });

        $dialogContainer.find('.close-icon').click(function() {
            dialogHide();
        });

        $dialogContainer.hide();
        $dialogCover.hide();
    })();

    function dialogShow() {
        if (effectShow) {
            effectShow($dialogContainer);
            effectShow($dialogCover);
        } else {
            $dialogContainer.show();
            $dialogCover.show();
        }

        if (autoClose)
            setTimeout(dialogHide, autoClose);
    }

    function dialogHide() {
        if (effectHide) {
            effectHide($dialogContainer);
            effectHide($dialogCover);
        } else {
            $dialogContainer.hide();
            $dialogCover.hide();
        }


        if (onClose)
            onClose($dialogContainer);
    }
}
