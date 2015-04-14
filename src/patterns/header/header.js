
/*********************************/
/* BEGIN Pattern: header         */
/*********************************/


// Setup the interactivity for the search trigger on mobile views
// which displays the search form on top of the logo.
$("#header-search-trigger").click(function(){
    var search = $("#header-search");
    var form = $("#header-search form");
    var input = $("#header-search form input[type=text]");
    var trigger = $("#header-search-trigger");
    var logo = $("#header-logo");

    form.show();
    input.focus();

    search.css({
      "position": "absolute",
      "width": "100%"
    });

    trigger.hide();
    
    logo.css({
      "opacity" : 0.1
    });
    return false;
});

// Setup the interactivity for the search close button which 
// hides the search form and display the logo – reversing the
// effects of the search trigger.
$("#header-search-close").click(function(){
    var search = $("#header-search");
    var form = $("#header-search form");
    var trigger = $("#header-search-trigger");
    var logo = $("#header-logo");

    form.hide();
    
    search.css({
      "position": "relative",
      "width": "" // Note by setting this to "", we remove the CSS property
                  // which turns out is crucial.
    });

    trigger.show();
    
    logo.css({
      "opacity" : 1
    });

    return false;
});


// This code switches the logo on desktop devices from a plain ('standard')
// logo to one showing the founding year ('foundation').
enquire.register("screen and (min-width:768px)", {

    // Triggered when a media query matches.
    match : function() {
      var current = $("#header-logo img").attr('src');
      if (current) {
          var updated = current.replace(/logo-standard/,'logo-foundation');
          $("#header-logo img").attr('src',updated);
      }
    },

    // Triggered when the media query transitions
    // from a matched state to an unmatched state
    unmatch : function() {
      var current = $("#header-logo img").attr('src');
      if (current) {
          var updated = current.replace(/logo-foundation/,'logo-standard');
          $("#header-logo img").attr('src',updated);
      }
    }

});


/*********************************/
/* END Pattern: header           */
/*********************************/
