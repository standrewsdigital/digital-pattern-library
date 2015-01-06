
/*********************************/
/* BEGIN Pattern: header         */
/*********************************/


/* Functionality for toggling the header search panel. */
$(".panel-toggle").click(function(){
  var current = $(this);
  var target_selector = current.attr('data-target');
  var sibling_targets_selector = current.attr('data-siblings');

  $(target_selector).slideToggle(360).siblings(sibling_targets_selector).slideUp(360);

  if (!current.hasClass('panel-toggle-up')) {
    current.addClass('panel-toggle-up');
  }
  else {
    current.removeClass('panel-toggle-up');
  }
  current.siblings(".panel-toggle").removeClass('panel-toggle-up');

  return false;
});


enquire.register("screen and (max-width:767px)", {

    // Triggered when a media query matches.
    match : function() {
      var current = $("#header-logo img").attr('src');
      if (current) {
          var updated = current.replace(/logo-foundation/,'logo-standard');
          $("#header-logo img").attr('src',updated);
      }
    },


    // Triggered when the media query transitions
    // *from a matched state to an unmatched state*.
    unmatch : function() {
      var current = $("#header-logo img").attr('src');
      if (current) {
          var updated = current.replace(/logo-standard/,'logo-foundation');
          $("#header-logo img").attr('src',updated);
      }

    },


    // OPTIONAL, defaults to false
    // If set to true, defers execution of the setup function
    // until the first time the media query is matched
    deferSetup : false,

    // OPTIONAL
    // If supplied, triggered when handler is unregistered.
    // Place cleanup code here
    destroy : function() {}

});


/*********************************/
/* END Pattern: header           */
/*********************************/
