$(document).ready(function () {
  dialog({
    trigger: '#btn',
    content: '<strong>哈哈</strong>',
    effectShow: function ($element) {
      // 淡入显示
      $element.fadeIn(500)
    },
    effectHide: function ($element) {
      // 淡出显示
      $element.fadeOut(500)
    }
  });

  function dialog(options) {
    $('.dialog-content').append(options.content);

    $(options.trigger).click(function () {
      options.effectShow($('.dialog'));
      $('.dialog-header .delete-icon').click(function() {
        options.effectHide($('.dialog'));
      });
    });
  }
});
