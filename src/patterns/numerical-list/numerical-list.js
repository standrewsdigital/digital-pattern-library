/*********************************/
/* BEGIN Pattern: numerical list */
/*********************************/


// Set the number for each list item.
var count = 1;

$('.list-container li').each(function() {

    $('.list-container__number', this).text(count);
    count++;

});

/*********************************/
/* END Pattern: numerical list   */
/*********************************/