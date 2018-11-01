$('.horizontal-list__toggle').click(function() {
	$(this).next('ul').slideToggle(200, "linear");
    $(this).toggleClass( "open" ); // add class for styling.
    // Set the aria properties.
    var state = $(this).attr('aria-expanded') === 'false' ? true : false;
   	$(this).attr('aria-expanded', state);
    $(this).next('ul').attr('aria-hidden', !state);
    return false; // disable default event.
});