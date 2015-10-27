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
  var activeIndex = options.activeIndex || 0;
  $contents.eq(activeIndex).addClass('active');
  $triggers.eq(activeIndex).addClass('active');

  $triggers.on('click', function() {
      $('.active').removeClass('active');
      $(this).addClass('active');
      $contents.eq($triggers.index(this)).addClass('active');
  });
}
