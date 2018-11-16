/*********************************/
/* BEGIN Pattern: navigation bar */
/*********************************/

$('.toggle-navigation').click( function() {
    var i = $(this).find('i.chevron');

    if ( i.hasClass('down') ) {
        $(this).find('i.chevron').addClass('up');
        $(this).find('i.chevron').removeClass('down');
    }
    else {
        $(this).find('i.chevron').addClass('down');
        $(this).find('i.chevron').removeClass('up');
    }

    $(this).siblings('.navigation-bar-nav').slideToggle( function(){
        $(this).css("display", "");
        $(this).toggleClass('show-navigation');
    });
});

/*********************************/
/* END Pattern: navigation bar   */
/*********************************/