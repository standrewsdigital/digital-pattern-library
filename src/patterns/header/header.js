
/*********************************/
/* BEGIN Pattern: header         */
/*********************************/


// Setup the interactivity for the search trigger on mobile views
// which displays the search form on top of the logo.
$( '#header-search-trigger' ).click( function() {
    var search = $( '#header-search' );
    var form = $( '#header-search form' );
    var input = $( '#header-search form input[type=text]' );
    var trigger = $( '#header-search-trigger' );
    var logo = $( '#header-logo' );

    console.log("CLicked button to open");

    trigger.hide();

    logo.css({
        "opacity" : 0.1
    });

    search.css({
        "position": "absolute",
        "width": "100%"
    });

    form.show();
    input.focus();

    return false;
});

// Setup the interactivity for the search close button which
// hides the search form and display the logo – reversing the
// effects of the search trigger.
$( '#header-search-close' ).click( function() {
    var search = $( '#header-search' );
    var form = $( '#header-search form' );
    var trigger = $( '#header-search-trigger' );
    var logo = $( '#header-logo' );

    form.css("display","");

    console.log("CLicked button to close");

    search.css({
        "position": "",
        "width": "" // Note by setting these to "", we remove the CSS property
                  // which turns out is crucial.
    });

    trigger.show();

    logo.css({
        "opacity" : 1
    });

    return false;
});

// Close the search bar if the screen width is increased above 467px while the
// search bar is open. If this is not done the search box will remain open and
// cannot be closed since the 'X' disappears.
$(window).resize(function() {
    if ( $(window).width() > 467 ) {
        $( '#header-search-close' ).click();
        // Hide the small screen search icon otherwise it will appear above
        // the search box.
        $( '#header-search-trigger' ).css("display", "");
    }
});




/*********************************/
/* END Pattern: header           */
/*********************************/
