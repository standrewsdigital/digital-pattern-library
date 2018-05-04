
/***********************************/
/* BEGIN Pattern: featured-people  */
/***********************************/

// ensure both image link and text link hover effects always show together
$(".featured-people__person a").hover(function(){
    $(this).closest(".featured-people__person").toggleClass('link-active');
});

/***********************************/
/* END Pattern: featured-people    */
/***********************************/