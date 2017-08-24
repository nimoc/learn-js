$(document).ready(function () {
  dialog({
    trigger: '#btn',
    content: '<strong>哈哈</strong>',
    effectShow: function ($element) {
      // 淡入显示
      $element.fadeIn(500)
    },
    onClose: function ($element) {
      $element.fadeOut(500);
    }
  });

  function dialog(options) {
    $('.dialog-content').append(options.content);

    $(options.trigger).click(function () {
      options.effectShow($('.dialog'));
      $('.dialog-header .delete-icon').click(function() {
        options.onClose($('.dialog'));
      });
    });
    
    $(document).keydown(function (event) {
      if(event.keyCode === 27) {
        options.onClose($('.dialog'));
      }
    });
  }
});
