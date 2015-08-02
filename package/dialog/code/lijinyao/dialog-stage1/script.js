/**
 * Created by Lijin on 2015/8/2.
 */
$(document).ready(function () {
    $('.open-dialog').click(function () {
        var dialogHtml = "<div class='dialog-container'>\
            <div class='dialog-header'>\
            <h3>I am title</h3>\
            <div class='dialog-close'></div>\
            </div>\
            <div class='dialog-body'>\
            <p>I am content</p>\
            </div>\
            </div>";
        var dialog = $(dialogHtml);
        $('body').append(dialog);
        //show dialog
        dialog.css({display: 'block'});
        $('.dialog-close').click(function () {
            dialog.remove();
        });
    });
});