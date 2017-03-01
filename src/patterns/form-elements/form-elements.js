
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





/*********************************/
/* END Pattern: form-elements    */
/*********************************/