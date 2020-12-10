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

    // Clear button autocomplete that cleans up suggested results
    $(".clear-icon__autocomplete").click(function(){
        $(this.form).find(".form-control--autocomplete").typeahead('val', '');
    });

    // Hide clear button if input field is empty
    $(".search-box").keyup(function () {
	    if( $(this).val() ) {
	        $(this.form).find(".clear-icon").show();
	    } else {
	        $(this.form).find(".clear-icon").hide();
	    }
    });