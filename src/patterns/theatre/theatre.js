(function ( $ ) {
 
    $.fn.theatre = function( options ) {

        // Set default options
        var settings = $.extend({
            // These are the defaults.
            color:              "#556b2f",
            backgroundColor:    "white",
            opacity:            1,
            title:              null,
            titleElement:       null,
            images:             null
        }, options );

        

        var init = function() {
            console.log("init");
            console.log(this);
            var theatreStage = $("<div id='theatre__stage'><div id='theatre__wrap'><div id='theatre__prev'><a href=''></a></div><figure id='theatre__figure'><img src='' alt=''><figcaption></figcaption></figure><div id='theatre__next'><a href=''></a></div></div><div id='theatre__close'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></div></div>");

            theatreStage.hide()
                        .appendTo('body');

            // Clicking any where closes the theatre.
            theatreStage.click(function(){
                theatreStage.hide();
                window.location.hash = '';
            });
            // but clicking on the figure does not.
            $('#theatre__figure').click(function(){
                return false;
            });

            // Setup click events for next/prev buttons
            $("#theatre__prev a, #theatre__next a").click(function(){
                console.log($(this).attr('href'));
                $($(this).attr('href')).click();
                return false;
            });

            // Handle key presses
            // ==================


            $("body").keyup(function(e){
                
                // ESC
                if(e.which == 27){
                    if (theatreStage.is(':visible')) {
                        theatreStage.hide();
                        window.location.hash = '';
                    }
                }

                // Right arrow (39)
                if(e.which == 39){
                    if (theatreStage.is(':visible')) {
                        $("#theatre__next a").click();
                    }
                }

                // Left arrow (37)
                if(e.which == 37){
                    if (theatreStage.is(':visible')) {
                        $("#theatre__prev a").click();
                    }
                }
            });


            // Handle swipes
            // ==================

            // Use Hammer.js to detect swipes and gestures.
            var hammer = new Hammer(theatreStage[0]);
            hammer.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

            // Swipe up - closes
            hammer.on('swipeup', function(ev) {
                if (theatreStage.is(':visible')) {
                    theatreStage.hide();
                    window.location.hash = '';
                }    
            });

            // Swipe right - previous
            hammer.on('swiperight', function(ev) {
                if (theatreStage.is(':visible')) {
                    $("#theatre__prev a").click();
                }
            });

            // Swipe left - next
            hammer.on('swipeleft', function(ev) {
                if (theatreStage.is(':visible')) {
                    $("#theatre__next a").click();
                }
            });

        };


        var play = function(el) {
            // this activates the theatre mode.
            // we attach this to clicks on images.
            console.log('activate theatre stage');
            var item = $(el);
            var stage = $("#theatre__stage");

            if (item.find('img').parent('a').length !== 0) {
                console.log(item.find('img').parent('a'));
                stage.find('img').attr('src',item.find('img').parent('a').attr('href'));            
            }
            else {
                console.log('no parent link');
                stage.find('img').attr('src',item.find('img').attr('src'));
            }
            
            stage.find('figcaption').text(item.find('figcaption').text());

            $('#theatre__prev a').hide();
            $('#theatre__next a').hide();
            if (item.attr('data-theatre-prev')) {
                $('#theatre__prev a').attr('href',"#"+item.attr('data-theatre-prev'))
                    .show();    
            }

            if (item.attr('data-theatre-next')) {
                $('#theatre__next a').attr('href','#'+item.attr('data-theatre-next'))
                    .show();
            }

            // update the location if current item has an ID.
            console.log(item);
            if(item.attr('id')) {
                window.location.hash = 'theatre---' + item.attr('id');
            }

            stage.show();
            return false;
        };


        if ( $('#theatre__stage').length === 0 ) {
            init();
            console.log(this);
        }


        var current = this;


        return current.each(function(i){
            var item = $(this);
            item.css('cursor','pointer');
            if (i > 0) {
                // console.log(i,'prev', i-1);
                // console.log(current[i-1]);
                item.attr('data-theatre-prev', current[i-1].id);
            }
            if (i < current.length - 1) {
                // console.log(i,'next',i+1);
                // console.log(current[i+1]);
                item.attr('data-theatre-next', current[i+1].id);
            }
            item.attr('data-theatre-title', settings.title);
            item.attr('data-theatre-desc', settings.desc);
            item.click(function(){
                return play(this);
            });

            console.log('init loading');
            console.log(window.location.hash);
            if ('#theatre---' + item.attr('id') === window.location.hash) {
                console.log(window.location.hash);
                play(this);
            }
            
        });
    };
 
}( jQuery ));



$("figure.theatre__image").theatre({title:"asdf"});



