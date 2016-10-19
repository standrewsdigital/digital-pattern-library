
/*********************************/
/* BEGIN Pattern: header         */
/*********************************/

// hide all of the elements with a class of 'toggle'
$('.accordion > div').hide();

// Open the <div> following an h3 a when clicked.
$('.accordion > h3').click(function() {
	$(this).next('div').slideToggle(200, "linear");
	$(this).toggleClass( "open" ); // add class for styling.
	return false; // disable default event.
});
