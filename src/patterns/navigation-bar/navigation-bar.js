/*********************************/
/* BEGIN Pattern: navigation bar */
/*********************************/

$('.toggle-navigation').click( function() {
    var i = $(this).find('i.chevron');

    if ( i.hasClass('left') ) {
        $(this).find('i.chevron').addClass('down');
        $(this).find('i.chevron').removeClass('left');
    }
    else {
        $(this).find('i.chevron').addClass('left');
        $(this).find('i.chevron').removeClass('down');
    }

    $(this).siblings('.navigation-bar-nav').slideToggle( function(){
        $(this).css("display", "");
        $(this).toggleClass('show-navigation');
    });
});

/*********************************/
/* END Pattern: navigation bar   */
/*********************************/