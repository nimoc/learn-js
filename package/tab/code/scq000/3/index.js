$(document).ready(function () {
  tab({
    element: '.newtab',
    triggers: '.triggers',
    contents: '.contents',
    // 显示第二个 content
    activeIndex: 1
  });
});

function tab(options) {
  var $element = $(options.element);
  var $triggers = $(options.triggers);
  var $contents = $(options.contents);
  $contents.eq(options.activeIndex).addClass('active');
  $triggers.eq(options.activeIndex).addClass('active');

  $triggers.on('click', function() {
      $('.active').removeClass('active');
      $(this).addClass('active');
      $contents.eq($triggers.index(this)).addClass('active');
  });
}
