$(document).ready(function () {
  dialog({
    trigger: '#btn',
    content: '<strong>哈哈</strong>'
  });

  function dialog(options) {
    $('.dialog-content').append(options.content);

    $(options.trigger).click(function () {
      $('.dialog').show();
      $('.dialog-header .delete-icon').click(function() {
        $('.dialog').hide();
      });
    });
  }
});
