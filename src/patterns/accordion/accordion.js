
/*********************************/
/* BEGIN Pattern: accordion      */
/*********************************/

$('body .accordion').each(function() {
    var $this = $(this);
    // create unique id
    var id = 'accordion-' + $this.index();
    //add WAI ARIA attributes to h3 and make it focusable
    $('h3:first', this).attr({'aria-expanded': 'false', 'aria-controls': id, 'role': 'tab', 'tabindex': 0});
    //add WAI ARIA attributes to panel
    $('div:first', this).attr({'id': id, 'aria-hidden': true, 'role': 'tabpanel'});

    // Call the accordion toogle if the 'enter' or 'space' key has been pressed while focused on accordion.
    $('h3:first', this).keypress(function(event) {
        // Check for enter (13) or space (32) keypress.
        if ( event.which == 13 || event.which == 32) {
            $(this).click();
        }
    });
});
// Hide the <div> element within all accordion classes.
$('.accordion > div').hide();

// Toggle an  accordion open or closed when <h3> clicked.
$('.accordion > h3').click(function() {
    // Toggle the accordion.
    $(this).next('div').slideToggle(200, "linear");
    $(this).toggleClass( "open" ); // add class for styling.
    // Set the aria properties of the accordion <h3> and <div>.
    var state = $(this).attr('aria-expanded') === 'false' ? true : false;
    $(this).attr('aria-expanded', state);
    $(this).next('div').attr('aria-hidden', !state);
    return false; // disable default event.
});

/*********************************/
/* END Pattern: accordion        */
/*********************************/