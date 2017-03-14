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
        var text_max = $(this).attr('data-length');
        $(this).next(".textarea_feedback").html(text_max + ' characters remaining');
        $(this).keyup(function() {
            var text_length = $(this).val().length;
            var text_remaining = text_max - text_length;
            $(this).next(".textarea_feedback").removeClass('text-danger');
            $(this).next(".textarea_feedback").attr("aria-live", "off");
            if (text_remaining < 6) {
                $(this).next(".textarea_feedback").addClass('text-danger');
                $(this).next(".textarea_feedback").attr("aria-live", "assertive");
            }
            $(this).next(".textarea_feedback").html(text_remaining + ' characters remaining');
        });
    });
}

/*********************************/
/* END Pattern: form-elements    */
/*********************************/