
/*********************************/
/* BEGIN Pattern: sticky-nav         */
/*********************************/


// Code for affixing the internal nav to the top
    var normal_top = $('#nav-top').offset().top
    $('#nav-top').affix({
      offset: {
        top: function () {
          return normal_top;
        },
        bottom: 0
      }
    });


    // Modified version of this smooth scrolling: 
    // https://css-tricks.com/snippets/jquery/smooth-scrolling/

    $('a[href*=#]:not([href=#])').click(function() {

        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

            if (target.length) {
                $('html,body').animate({
                     scrollTop: target.offset().top
                }, 500);
                var a = $(this);
                a.parent().siblings().removeClass('current-menu-item');
                a.parent().addClass('current-menu-item');
                //return false;
            }
        }

    });



/*********************************/
/* END Pattern: sticky-nav           */
/*********************************/
