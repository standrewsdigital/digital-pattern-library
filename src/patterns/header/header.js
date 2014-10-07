

$(".panel-toggle").click(function(){
  var current = $(this);
  var target_selector = current.attr('data-target');
  var sibling_targets_selector = current.attr('data-siblings');

  $(target_selector).slideToggle().siblings(sibling_targets_selector).slideUp();

  if (!current.hasClass('panel-toggle-up')) {
    current.addClass('panel-toggle-up');
  }
  else {
    current.removeClass('panel-toggle-up');
  }
  current.siblings(".panel-toggle").removeClass('panel-toggle-up');

  return false;
});