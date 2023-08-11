/*********************************/
/* BEGIN Pattern: accordion      */
/*********************************/


// Assign ARIA roles for every accordion item
// Assign ARIA roles for every accordion item
var accordion_increment = 0;


$('.accordion-item').each(function() {
    var $this = $(this);
    var id = 'accordion-item-' + accordion_increment;
    var manualaria = $this.find('.accordion-item__toggle-button').get(0).hasAttribute('aria-expanded');
    if (!manualaria) {
        $this.find('.accordion-item__toggle-button').attr({
            'aria-expanded': 'false',
            'aria-controls': id
        });
        $this.find('.accordion-item__content').attr({
            'id': id,
            'aria-hidden': 'true'
        });
    }
    accordion_increment++;
});


// Individual accordion item toggle
$(document).on('click', '.accordion-item__toggle', function() {
    var $this = $(this);
    var $content = $this.next('.accordion-item__content');
    var state = $this.find('.accordion-item__toggle-button').attr('aria-expanded') === 'false' ? true : false;


    // Close other accordions
    $('.accordion-item__content').not($content).slideUp(200, "linear");
    $('.accordion-item__content').not($content).prev().find('.accordion-item__toggle-button').attr('aria-expanded', 'false');


    // Toggle visibility of other accordion item toggles
    if (state) {
        $('.accordion-item__toggle').not($this).hide();
    } else {
        $('.accordion-item__toggle').show();
    }


    // Toggle current accordion
    $content.slideToggle(200, "linear");
    $this.find('.accordion-item__toggle-button').attr('aria-expanded', state.toString());
    $content.attr('aria-hidden', (!state).toString());
    return false;
});




/*********************************/
/* END Pattern: accordion        */
/*********************************/


