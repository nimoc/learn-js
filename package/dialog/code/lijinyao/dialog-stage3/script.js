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
        }
    });
});

var dialog = function (options) {
    var trigger = $(options.trigger);
    var content = options.content || '';
    var effectShow = options.effectShow || function (element) {element.show()};
    var effectHide = options.effectHide || function (element) {element.hide()};
    var addDialog = function () {
        //init dialog body
        var dialogHtml = "<div class='dialog-container'>\
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
            effectHide(dialog);
        });
    };
    trigger.click(addDialog);

};