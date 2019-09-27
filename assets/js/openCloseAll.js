// Ein- und Ausblenden aller FK-Programme. Gleichzeitig wird immer nur ein Button angezeigt.

$('.closeall').click(function() {
  $('.card-collapse').collapse('hide');
  $('.closeall').hide();
  $('.openall').show();
});
$('.openall').click(function() {
  $('.card-collapse').collapse('show');
  $('.closeall').show();
  $('.openall').hide();
});

$(function() {
  $('.closeall').hide();
});
