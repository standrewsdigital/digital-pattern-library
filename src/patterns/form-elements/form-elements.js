
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
            }
            else if(val !== "other") {
                $(".conditional-content").hide();
            }
        }   
    );  

});


/*********************************/
/* END Pattern: form-elements    */
/*********************************/