$(document).ready(function () {
  $('.tab-nav li').on('click', function() {
    $('.active').removeClass('active');
    $(this).addClass('active');
    var targetId = $(this).attr('for');
    $('#' + targetId).addClass('active');
  });
});
