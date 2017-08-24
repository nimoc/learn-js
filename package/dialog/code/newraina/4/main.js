$(function () {
    dialog({
        trigger   : 'button',
        title     : '您的浏览器即将爆炸',
        content   : '非常遗憾地通知您，因为某些不能明说的原因，我们即将引爆您的浏览器，5秒倒计时会在红圈开始后出现。',
        effectShow: function ($element) {
            $element.fadeIn(500)
        },
        effectHide: function ($element) {
            $element.fadeOut(500)
        },
        onClose   : function () {
            console.log('已经关掉了哦~')
        }
    });
});


/**
 * 第三阶段 对话框函数
 * @param options Object
 * option.trigger 触发对话框的DOM元素或者元素的选择器，触发方式为click
 * options.title 对话框的标题
 * options.content 对话框的内容
 * options.effectShow 对话框出现效果
 * options.effectHide 对话框消失效果
 */
function dialog(options) {
    // 缓存参数
    var $trigger   = $(options.trigger);
    var title      = options.title;
    var content    = options.content;
    var effectShow = options.effectShow;
    var effectHide = options.effectHide;
    var onClose    = options.onClose;

    // 对话框的主DOM元素
    var $dialogContainer = $('<section></section>').addClass('dialog-container');
    // 待插入的对话框DOM内容
    var dialogHTML = '<div class="dialog-background">' +
        '<section class="dialog">' +
        '<div class="header">' +
        title +
        '<span class="close-icon"></span>' +
        '</div>' +
        '<div class="dialog-content">' + content + '</div>' +
        '</section>' +
        '</div>';

    (function init() {
        $dialogContainer.html(dialogHTML);

        $('body').append($dialogContainer);

        $trigger.click(function () {

            dialogShow();

            $(document).keydown(function (event) {
                if (event.which === 27) dialogHide();
                $(document).off('keydown');
            });
        });

        $dialogContainer.find('.close-icon').click(function () {
            dialogHide();
        });

        $dialogContainer.hide();
    })();

    function dialogShow() {
        if (effectShow)
            effectShow($dialogContainer);
        else
            $dialogContainer.show();
    }

    function dialogHide() {
        if (effectHide)
            effectHide($dialogContainer);
        else
            $dialogContainer.hide();

        if (onClose)
            onClose($dialogContainer);
    }
}
