$(document).ready(function () {
  tab({
    element: '.newtab',
    triggers: '.triggers',
    contents: '.contents'
  });
});

function tab(options) {
  var $element = $(options.element);
  var $triggers = $(options.triggers);
  var $contents = $(options.contents);
  
  $triggers.on('click', function() {
      $('.active').removeClass('active');
      $(this).addClass('active');
      $contents.eq($triggers.index(this)).addClass('active');
  });
}
