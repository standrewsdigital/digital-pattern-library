
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


var spy = new Gumshoe('.sticky-nav__menu--link', {
    offset: 60
});




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








/*
$('body').scrollspy({ target: '#nav-top', offset: 50 });

    // Modified version of this smooth scrolling:
    // https://css-tricks.com/snippets/jquery/smooth-scrolling/

$('nav a[href*="#"]:not([href="#"])').click(function() {

    if ( location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'' ) || location.hostname == this.hostname ) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

        if ( target.length ) {
            $('html,body').animate({
                scrollTop: target.offset().top - 45
            }, 500);
        }
    }

});
/*********************************/
/* END Pattern: sticky-nav       */
/*********************************/
