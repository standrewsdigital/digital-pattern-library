
/*********************************/
/* BEGIN Pattern: form-elements  */
/*********************************/

// If 'Other' is selected in a select box, 
// display hidden field. If not, then hide it
$(document).ready(function() {

    $('input.conditional-radio').change(
        function() {
            var val = $(this).val();


            if(val === "other") {
            	console.log("show");
                $("#other").show();
            }
            else if(val !== "other") {
            	console.log("hide");
                $("#other").hide();
            }
        }   
    );  

});


/*********************************/
/* END Pattern: form-elements    */
/*********************************/