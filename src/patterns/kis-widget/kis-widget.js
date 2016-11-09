
/*********************************/
/* BEGIN Pattern: kis-widget     */
/*********************************/

// Closes popover when click off of box. This was expected behaviour that wasn't avaiable for a button.
if ($('.subject')[0]) {
    $('body').on('click', function (e) {
        $('[data-toggle="popover"]').each(function () {
            if (!$(this).is(e.target)) {
                $(this).popover('hide');
            }
        });
    });

    // Allows us to adjust size of popover for just this use.
    $('body').addClass('subject-popover');
}

/*********************************/
/* END Pattern: kis-widget       */
/*********************************/