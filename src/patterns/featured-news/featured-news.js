
/*********************************/
/* BEGIN Pattern: news-updates   */
/*********************************/

// Use bigTarget to make tile image clickable.
$(".featured-news h3 a").bigTarget({
    clickZone : 'div:eq(0)' // jQuery parent selector
});

// Disable hover effect on article link when sub link is the hover/focus
$(".featured-news__category").hover(function(){
    $(this).closest(".featured-news__article-link").toggleClass('sub-link-active');
    console.log("hovered");
});

/*********************************/
/* END Pattern: news-updates     */
/*********************************/