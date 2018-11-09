/*********************************/
/* BEGIN Pattern: accordion      */
/*********************************/

var accordion_increment = 0;

$('.accordion-item').each(function() {
    var $this = $(this);
    
    // create unique id
    var id = 'accordion-item-' + accordion_increment;
    //add WAI ARIA attributes to title
    $(this).attr({'aria-expanded': 'false', 'aria-controls': id});
    //add WAI ARIA attributes to panel
    $('.accordion-item__content', this).attr({'id': id, 'aria-hidden': true, 'role': 'tabpanel'});

    accordion_increment++;
});

// Toggle an accordion open or closed when toggle wrapper is clicked.
$('.accordion-item__toggle').click(function() {
    // Toggle the accordion.
    $(this).next('.accordion-item__content').slideToggle(200, "linear");
    $(this).toggleClass( "open" ); // add class for styling.
    // Set the aria properties of the accordion title and panel.
    var state = $(this).find('.accordion-item__toggle-button').attr('aria-expanded') === 'false' ? true : false;
    $(this).find('.accordion-item__toggle-button').attr('aria-expanded', state);
    $(this).next('.accordion-item__content').attr('aria-hidden', !state);
    return false; // disable default event.
});

/*********************************/
/* END Pattern: accordion        */
/*********************************/