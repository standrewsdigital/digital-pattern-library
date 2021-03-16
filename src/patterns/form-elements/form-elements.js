/*********************************/
/* BEGIN Pattern: form-elements  */
/*********************************/

// Conditionally revealing content //
// If 'Other' is selected in a select box,
// display hidden field. If not, then hide it

$('.conditional-radio').change(
    function() {
        var val = $(this).val();

        if(val === "other") {
            $(".conditional-content-radio").show();
            $(".conditional-content-radio").attr("aria-hidden", "false");
        }
        else if(val !== "other") {
            $(".conditional-content-radio").hide();
            $(".conditional-content-radio").attr("aria-hidden", "true");
        }
    }
);

$('.conditional-select').change(
    function() {
        var val = $(this).val();

        if(val === "other") {
            $(".conditional-content-select").show();
            $(".conditional-content-select").attr("aria-hidden", "false");
        }
        else if(val !== "other") {
            $(".conditional-content-select").hide();
            $(".conditional-content-select").attr("aria-hidden", "true");
        }
    }
);

if ( $(".limit-counter").length ) {
    var areas = $(".limit-counter");
    $.each(areas, function(){
        var text_max = $(this).attr('maxlength');
        var text_warn = Math.floor(text_max*0.1);
        $(this).next(".textarea_feedback").html(text_max + ' characters remaining');
        $(this).keyup(function() {
            var text_length = $(this).val().length;
            var text_remaining = text_max - text_length;
            $(this).next(".textarea_feedback").removeClass('text-danger');
            $(this).next(".textarea_feedback").attr("aria-live", "polite");
            if (text_remaining < text_warn) {
                $(this).next(".textarea_feedback").addClass('text-danger');
                $(this).next(".textarea_feedback").attr("aria-live", "polite");
            }
            $(this).next(".textarea_feedback").html(text_remaining + ' characters remaining');
        });
    });
}

// Set aria controls for every checkbox collapse list and their toggle buttons
$('.checkbox-box__expand').each(function() {    
    $(this).attr('aria-expanded', 'false');
    $(this).parent().next('.checkbox-box__collapsed').attr('aria-expanded', 'false');
});

// Expand / collapse a long list of checkboxes
$(document).on('click', '.checkbox-box__expand', function(){

    // Swap the current state of the toggle button
    var state = $(this).attr('aria-expanded') === 'false' ? true : false;
    $(this).attr('aria-expanded', state);
    if(state) {
        // If open change text to 'Collapse list'
        $(this).text('Collapse list');
        // Find the next checkbox list and toggle state
        $(this).parent().next('.checkbox-box__collapsed').attr('aria-expanded', state);
    } else {
        // If closed change text to 'Expand list'
        $(this).text('Expand list');
        // Find the next checkbox list and toggle state
        $(this).parent().next('.checkbox-box__collapsed').attr('aria-expanded', state);
    }
    return false; // disable default event.
});

/* Deprecated method targeting id, this should be removed in a future release */
if ( $(window).width() > 450 ) {
    $('#datepicker').attr("type","text");
    $('#datepicker').datepicker({
        dateFormat: "DD, dd MM yy",
        changeMonth: true,
        changeYear: true
    });    
}
/* End of deprecated method */

if ( $(window).width() > 450 ) {
    $('.datepicker').attr("type","text");
    $('.datepicker').datepicker({
        dateFormat: "DD, dd MM yy",
        changeMonth: true,
        changeYear: true
    });    
}
/*********************************/
/* END Pattern: form-elements    */
/*********************************/