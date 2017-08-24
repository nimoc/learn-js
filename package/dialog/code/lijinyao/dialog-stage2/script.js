/**
 * Created by Lijinyao on 2015/8/2.
 */
$(document).ready(function () {
    dialog({
        trigger: '.open-dialog',
        content: "哈哈哈"
    });
});

var dialog = function (options) {
    var trigger = $(options.trigger);
    var content = options.content || '';
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
        //show dialog
        dialog.css({display: 'block'});
        //add close event
        $('.dialog-close').click(function () {
            dialog.remove();
        });
    };
    trigger.click(addDialog);

};