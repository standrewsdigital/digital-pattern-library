
/*********************************/
/* BEGIN Pattern: sticky-nav     */
/*********************************/






// Code for affixing the internal nav to the top
if ( $('#nav-top').length ) {
    var normal_top = $('#nav-top').offset().top;
}

$('#nav-top').affix({
    offset: {
        top: function () {
            return normal_top;
        },
        bottom: 0
    }
});

var header = document.querySelector('#nav-top');
var currentSection = document.querySelector('#sticky-nav__active-section');
var root = document.documentElement;

// Check if sticky nav is being used on the page before loading it
if(document.body.contains(document.getElementById('nav-top'))){
    var spy = new Gumshoe('.sticky-nav__menu--link', {
        reflow: true
    });

    // Listen for activate events
    document.addEventListener('gumshoeActivate', function (event) {
        var link = event.detail.link.innerHTML;
        currentSection.innerHTML = link;

    }, false);
    // Listen for deactivate events
    document.addEventListener('gumshoeDeactivate', function (event) {

        var link = event.detail.link.innerHTML;
        currentSection.innerHTML = "";

    }, false);
}

// Toggle contents list
$(document).on('click', '.sticky-nav__toggle', function(){
    $(this).next('ul').slideToggle(200, "linear");
    $(this).toggleClass( "open" ); // add class for styling.
    // Set the aria properties.
    var state = $(this).find('.sticky-nav__toggle-button').attr('aria-expanded') === 'false' ? true : false;
    $(this).find('.sticky-nav__toggle-button').attr('aria-expanded', state);
    $(this).next('ul').attr('aria-hidden', !state);
    return false; // disable default event.
});

// Hide memu if clicked on list view
$(document).on('click', '.sticky-nav__menu--link', function(){
    if (matchMedia('only screen and (max-width: 1170px)').matches) {
        $(this).closest('.sticky-nav').find('.sticky-nav__toggle').toggleClass( "open" );
        $(this).closest('ul').hide();
        $(this).closest('ul').attr('aria-hidden', true);
        $(this).closest('.sticky-nav').find('.sticky-nav__toggle-button').attr('aria-expanded', false);
    }
});

/*********************************/
/* END Pattern: sticky-nav       */
/*********************************/
