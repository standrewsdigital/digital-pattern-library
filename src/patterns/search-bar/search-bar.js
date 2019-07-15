$('.horizontal-list__toggle').click(function() {
	$(this).next('ul').slideToggle(200, "linear");
    $(this).toggleClass( "open" ); // add class for styling.
    // Set the aria properties.
    var state = $(this).attr('aria-expanded') === 'false' ? true : false;
   	$(this).attr('aria-expanded', state);
    $(this).next('ul').attr('aria-hidden', !state);
    return false; // disable default event.
});

    // Avoid submitting search that only produces on page results using entered keywords
    $(".form-nosubmit").submit(function(e) {
        e.preventDefault();
    });

    // Move clear button further left if appearing alongside a search button
    $(".clear-icon").each(function() {
        if($(this).next().hasClass('input-group-btn')) { 
            $(this).addClass('clear-icon--indent'); 
        }
    });

    // Hide clear button if clicked
    $(".clear-icon").click(function(){
        $(this).hide();
    });

    // Clear button not only resets form but resubmits it. Useful if you want to wipe any shown results.
    $(".clear-icon__resubmit").click(function(){
        $(this.form).next(".search-box").val('');
        $(this.form).submit();
    });

    // Clear button that cleans up suggested results
    $(".clear-icon__results").click(function(){
        $(this).parent('.input-group').next('.results').fadeOut('fast');
    });

    // Hide clear button if input field is empty
    $(".search-box").keyup(function () {
	    if( $(this).val() ) {
	        $(this.form).find(".clear-icon").show();
	    } else {
	        $(this.form).find(".clear-icon").hide();
	    }
    });