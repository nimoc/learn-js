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
  var activeTriggerClass = options.activeTriggerClass || 'ui-tab-active';

  $contents.eq(activeIndex).addClass('active');
  $triggers.eq(activeIndex).addClass('active ' + activeTriggerClass);

  $triggers.on('click', function() {
      $('.active').removeClass('active').removeClass(activeTriggerClass);
      $(this).addClass('active ' + activeTriggerClass);
      $contents.eq($triggers.index(this)).addClass('active');
  });
}
