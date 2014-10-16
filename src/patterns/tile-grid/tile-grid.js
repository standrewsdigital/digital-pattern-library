enquire.register("screen and (max-width:767px)", {

    // Triggered when a media query matches.
    match : function() {
      
      $(".tile-grid .read-more").appendTo($('.tile-grid .read-more-container-alt'));
    },      
                                
    // Triggered when the media query transitions 
    // *from a matched state to an unmatched state*.
    unmatch : function() {
      $(".tile-grid .read-more").appendTo($('.tile-grid .read-more-container'));
    },    
    // Defers execution of the setup function 
    // until the first time the media query is matched
    deferSetup : true      
});