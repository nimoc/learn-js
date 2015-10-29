$(document).ready(function () {
  $('button').on('click', function() {
    $('.dialog').show();
  });

  $('.dialog-header .delete-icon').click(function() {
    $('.dialog').hide();
  });
});
