
/*********************************/
/* BEGIN Pattern: kis-widget     */
/*********************************/

// Closes popover when click off of box.
if ($('.subject')[0]) {
    $('body').on('click', function (e) {
        $('[data-toggle="popover"]').each(function () {
            if (!$(this).is(e.target)) {
                $(this).popover('hide');
            }
        });
    });

    $('body').addClass('subject-popover');
}

/*********************************/
/* END Pattern: kis-widget       */
/*********************************/