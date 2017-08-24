$(document).ready(function() {
  tab({
    element: '.newtab',
    triggerType: 'hover',
    triggers: '.triggers',
    contents: '.contents'
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
  var triggerType = options.triggerType === 'hover' ? 'mouseover' : 'click';

  $triggers.on(triggerType, function() {
    $('.active').removeClass('active').removeClass(activeTriggerClass);
    $(this).addClass('active ' + activeTriggerClass);
    $contents.eq($triggers.index(this)).addClass('active');
  });

}
