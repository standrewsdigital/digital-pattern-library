
/******************************/
/* BEGIN Pattern: more-news  */
/*****************************/

// Use bigTarget to make entire section clickable.
$(".more-news__heading a").bigTarget({
    clickZone : 'div:eq(0)' // jQuery parent selector
});

// Disable hover effect on article link when sub link is the hover/focus
$(".more-news__sub-link").hover(function(){
    $(this).closest(".more-news__link").toggleClass('sub-link-active');
});

/****************************/
/* END Pattern: more-news   */
/****************************/