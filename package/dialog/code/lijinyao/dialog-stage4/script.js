/**
 * Created by Lijinyao on 2015/8/2.
 */
$(document).ready(function () {
    dialog({
        trigger: '.open-dialog',
        content: "I am content",
        effectShow: function (element) {
            element.fadeIn();
        },
        effectHide: function (element) {
            element.fadeOut();
        },
        onClose: function (element) {
            alert('d')
        }

    });
});
/**
 *
 * @param {string}          options.trigger     the selector of the trigger.
 * @param {string||jQuery}  options.content     content of dialog.
 * @param {function}        options.effectShow  animate to show dialog.
 * @param {function}        options.effectHide  animate to hide dialog.
 * @param {function}        options.onClose     execute before dialog closed.
 */
var dialog = function (options) {
    var trigger     = $(options.trigger);
    var content     = options.content    || '';
    var effectShow  = options.effectShow || function (element) {element.show()};
    var effectHide  = options.effectHide || function (element) {element.hide()};
    var onClose     = options.onClose    || function (element) {};
    var addDialog   = function () {
        //init dialog body
        var dialogHtml = "<div class='dialog dialog-container'>\
            <div class='dialog-header'>\
            <h3>I am title</h3>\
            <div class='dialog-close'></div>\
            </div>\
            <div class='dialog-body'>\
            </div>\
            </div>";

        //转为jquery对象
        var dialog = $(dialogHtml);

        //insert dialog
        $('body').append(dialog);

        //insert content
        dialog.children('.dialog-body').append(content);

        //effectShow
        effectShow(dialog);

        //add close event
        $('.dialog-close').click(function () {
            removeDialog(dialog);
        });
    };

    /*
     *remove dialog
     */
    var removeDialog = function (dialog) {
        //on hide
        onClose(dialog);
        effectHide(dialog);
        //为了让动画播放完，延时3秒后删除元素
        setTimeout(function () {dialog.remove();},3000);
    };
    //监听esc
    $(document).keydown("keydown", function (event) {
        if(event.keyCode === 27){
            removeDialog($('.dialog').last().removeClass('dialog'));
            console.log("key fired");
        }
    });

    //添加dialog
    trigger.click(addDialog);

};