
/*********************************/
/* BEGIN Pattern: form-elements  */
/*********************************/

// Conditionally revealing content //
// If 'Other' is selected in a select box, 
// display hidden field. If not, then hide it
$(document).ready(function() {
    $('input.conditional-radio').change(
        function() {
            var val = $(this).val();

            if(val === "other") {
                $(".conditional-content").show();
                $(".conditional-content").attr("aria-hidden", "false");
            }
            else if(val !== "other") {
                $(".conditional-content").hide();
                $(".conditional-content").attr("aria-hidden", "true");
            }
        }   
    );  

});


/*********************************/
/* END Pattern: form-elements    */
/*********************************/