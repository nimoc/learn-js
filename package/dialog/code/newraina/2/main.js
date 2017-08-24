dialog({
    trigger: 'button',
    title  : '您的浏览器即将爆炸',
    content: '非常遗憾地通知您，因为某些不能明说的原因，我们即将引爆您的浏览器，5秒倒计时会在红圈开始后出现。'
});


/**
 * 第二阶段 对话框函数
 * @param options Object
 * option.trigger 触发对话框的DOM元素或者元素的选择器，触发方式为click
 * options.title 对话框的标题
 * options.content 对话框的内容
 */
function dialog(options) {
    // 缓存参数
    var trigger = typeof options.trigger === 'string' ? document.querySelector(options.trigger) : options.trigger;
    var title   = options.title;
    var content = options.content;

    var dialogContainer = document.createElement('section');

    dialogContainer.className = 'dialog-container';

    (function init() {

        dialogContainer.innerHTML = '<div class="dialog-background">' +
            '<section class="dialog">' +
            '<div class="header">' +
            title +
            '<span class="close-icon"></span>' +
            '</div>' +
            '<div class="dialog-content">' +
            content +
            '</div>' +
            '</section>' +
            '</div>';

        document.body.appendChild(dialogContainer);

        // 绑定事件
        trigger.addEventListener('click', show);
        dialogContainer.querySelector('.close-icon').addEventListener('click', hide);

        hide();
    })();

    function show() {
        removeClass(dialogContainer, 'dialog-hide');
    }

    function hide() {
        addClass(dialogContainer, 'dialog-hide');
    }
}

// 辅助函数
function addClass(element, value) {
    if (!element.className) {
        element.className = value;
    } else {
        var newClassName  = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}

function removeClass(element, className) {
    if (element.className && element.className.indexOf(className) >= 0) {
        var oldClass      = ' ' + element.className + ' ';
        var newClass      = oldClass.replace(' ' + className + ' ', ' ');
        newClass          = newClass.replace(/(^\s+)|(\s+$)/g, '');
        element.className = newClass;
    }
}
