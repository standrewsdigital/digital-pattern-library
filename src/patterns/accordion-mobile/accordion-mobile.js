/*********************************/
/* BEGIN Pattern: accordion-mobile      */
/*********************************/

// Assign ARIA roles for every accordion item
var accordion_mobile_increment = 0;

$('.accordion-mobile-item').each(function() {
    var $this = $(this);
    var id = 'accordion-mobile-item-' + accordion_mobile_increment;
    var manualaria = $this.find('.accordion-mobile-item__toggle-button').get(0).hasAttribute('aria-expanded');
    if (!manualaria) {
        $this.find('.accordion-mobile-item__toggle-button').attr({
            'aria-expanded': 'false',
            'aria-controls': id
        });
        $this.find('.accordion-mobile-item__content').attr({
            'id': id,
            'aria-hidden': 'true'
        });
    }
    accordion_mobile_increment++;
});

// Individual accordion item toggle
$(document).on('click', '.accordion-mobile-item__toggle', function() {
    var $this = $(this);
    var $content = $this.next('.accordion-mobile-item__content');
    var state = $this.find('.accordion-mobile-item__toggle-button').attr('aria-expanded') === 'false' ? true : false;

    // Close other accordions
    $('.accordion-mobile-item__content').not($content).slideUp(200, "linear");
    $('.accordion-mobile-item__content').not($content).prev().find('.accordion-mobile-item__toggle-button').attr('aria-expanded', 'false');

    // Toggle visibility of other accordion item toggles
    if (state) {
        $('.accordion-mobile-item__toggle').not($this).hide();
    } else {
        $('.accordion-mobile-item__toggle').show();
    }

    // Toggle current accordion
    $content.slideToggle(200, "linear");
    $this.find('.accordion-mobile-item__toggle-button').attr('aria-expanded', state.toString());
    $content.attr('aria-hidden', (!state).toString());
    return false;
});

/*********************************/
/* END Pattern: accordion-mobile        */
/*********************************/
