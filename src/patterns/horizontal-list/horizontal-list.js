
$(document).on('click', '.horizontal-list__toggle', function(){
	$(this).next('ul').slideToggle(200, "linear");
    $(this).toggleClass( "open" ); // add class for styling.
    // Set the aria properties.
    var state = $(this).find('.horizontal-list__toggle-button').attr('aria-expanded') === 'false' ? true : false;
   	$(this).find('.horizontal-list__toggle-button').attr('aria-expanded', state);
    $(this).next('ul').attr('aria-hidden', !state);
    return false; // disable default event.
});