/*********************************/
/* BEGIN Pattern: accordion      */
/*********************************/

// Set aria controls for every accordion item
var accordion_increment = 0;

$('.accordion-item').each(function() {
    var $this = $(this);
    
    // create unique id
    var id = 'accordion-item-' + accordion_increment;
    //add WAI ARIA attributes to button
    $(this).find('.accordion-item__toggle-button').attr({'aria-expanded': 'false', 'aria-controls': id});
    //add WAI ARIA attributes to panel
    $('.accordion-item__content', this).attr({'id': id, 'aria-hidden': true});

    accordion_increment++;
});

// Set aria controls for every accordion group and toggle
var accordion_group_increment = 0;

$('.accordion-group').each(function() {    
    // create unique id
    var id = 'accordion-group-' + accordion_group_increment;
    //add WAI ARIA attributes to toggle button
    $(this).prev('.accordion-group__toggle').attr({'aria-expanded': 'false', 'aria-controls': id});
    //add WAI ARIA attributes to group
    $(this).attr({'id': id, 'aria-hidden': true});

    accordion_group_increment++;
});


// Toggle an accordion open or closed when toggle wrapper is clicked.
//$('.accordion-item__toggle').click(function() {
$(document).on('click', '.accordion-item__toggle', function(){
    // Toggle the accordion.
    $(this).next('.accordion-item__content').slideToggle(200, "linear");
    $(this).toggleClass( "open" ); // add class for styling.
    // Set the aria properties of the accordion button and panel.
    var state = $(this).find('.accordion-item__toggle-button').attr('aria-expanded') === 'false' ? true : false;
    $(this).find('.accordion-item__toggle-button').attr('aria-expanded', state);
    $(this).next('.accordion-item__content').attr('aria-hidden', !state);

    // Check to see if group toggle needs amended based on this item being toggled
    var accordion_size = $(this).closest('.accordion-group').children('.accordion-item').length;
    var items_open = 0;
    var items_closed = 0;
    // Loop through all items in this accordion totalling up states
    $(this).closest('.accordion-group').children('.accordion-item').each(function () {
        if($(this).find('.accordion-item__toggle-button').attr('aria-expanded') === 'false'){
            items_closed++; 
        } else {
            items_open++;
        }
    });


    // If either total matches accordion total then toggle the groups button state
    // If all open then change to close all
    var group_toggle_button = $(this).closest('.accordion-group').prev('.accordion-group__toggle');
    if(items_open == accordion_size){
        group_toggle_button.attr('aria-expanded', true);
        group_toggle_button.text('Close all');
        $(this).closest('.accordion-group').attr('aria-hidden', false);
    }
    // If all closed then change to open all
    if(items_closed == accordion_size){
        group_toggle_button.attr('aria-expanded', false);
        group_toggle_button.text('Open all');
        $(this).closest('.accordion-group').attr('aria-hidden', true);
    }

    return false; // disable default event.
});

// Toggle all accordions in a group when group toggle is clicked.
//$('.accordion-group__toggle').click(function() {
$(document).on('click', '.accordion-group__toggle', function(){

    // Swap the current state of the toggle button
    var state = $(this).attr('aria-expanded') === 'false' ? true : false;
    $(this).attr('aria-expanded', state);
    if(state) {
        // If open change text to 'close all'
        $(this).text('Close all');
        $(this).next('.accordion-group').attr('aria-hidden', !state);
    } else {
        // If closed change text to 'open all'
        $(this).text('Open all');
        $(this).next('.accordion-group').attr('aria-hidden', state);
    }

    // Find the next accordion group and loop through each item
    $(this).next('.accordion-group').children('.accordion-item').each(function () {
        // Check what the state is of the item and open or close if required - based on the state of the group toggle
        // Get item state and convert to boolean
        var state_item = $(this).find('.accordion-item__toggle-button').attr('aria-expanded') === 'false' ? false : true;

        if (state_item != state) {
            // Toggle accordion
            $(this).find('.accordion-item__content').slideToggle(200, "linear");
            $(this).find('.accordion-item__toggle').toggleClass( "open" ); // add class for styling.
            // Set the aria properties of the accordion button and panel.
            $(this).find('.accordion-item__toggle-button').attr('aria-expanded', !state_item);
            $(this).find('.accordion-item__content').attr('aria-hidden', state_item);
        }

    });
    return false; // disable default event.
});

/*********************************/
/* END Pattern: accordion        */
/*********************************/