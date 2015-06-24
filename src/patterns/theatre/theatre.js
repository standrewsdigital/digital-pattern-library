(function ( $ ) {
 
    $.fn.theatre = function( options ) {

        // Set default options
        var settings = $.extend({
            // ...
        }, options );

        var init = function() {
            // Create the theatre stage
            // And hook up the event listeners.
            var stage = $("<div id='theatre__stage'><div id='theatre__wrap'><div id='theatre__prev'><a href=''></a></div><figure id='theatre__figure'><img src='' alt=''><figcaption></figcaption></figure><div id='theatre__next'><a href=''></a></div></div><div id='theatre__close'><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></div><div id='theatre__counter'></div></div>");

            // Add new stage to the end of <body>
            stage.hide().appendTo('body');

            // Set up click events for next/prev buttons
            $("#theatre__prev a, #theatre__next a").click(function(){
                $($(this).attr('href')).click();
                return false;
            });

            // Set up click events for close button
            $("#theatre__close").click(function(){
                stage.hide();
                window.location.hash = '';
            });


            // Handle keyboard shortcuts
            // =========================

            $("body").keyup(function(e){
                
                // ESC
                if(e.which == 27){
                    if (stage.is(':visible')) {
                        stage.hide();
                        window.location.hash = '';
                    }
                }

                // Right arrow (39)
                if(e.which == 39){
                    if (stage.is(':visible')) {
                        $("#theatre__next a").click();
                    }
                }

                // Left arrow (37)
                if(e.which == 37){
                    if (stage.is(':visible')) {
                        $("#theatre__prev a").click();
                    }
                }
            });


            // Handle swipes
            // ==================

            // Use Hammer.js to detect swipes and gestures.
            var hammer = new Hammer(stage[0]);
            hammer.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

            // Swipe up - closes
            hammer.on('swipeup', function(ev) {
                if (stage.is(':visible')) {
                    stage.hide();
                    window.location.hash = '';
                }    
            });

            // Swipe right - previous
            hammer.on('swiperight', function(ev) {
                if (stage.is(':visible')) {
                    $("#theatre__prev a").click();
                }
            });

            // Swipe left - next
            hammer.on('swipeleft', function(ev) {
                if (stage.is(':visible')) {
                    $("#theatre__next a").click();
                }
            });

        };


        var play = function(el) {
            // Activate theatre mode.
            var item = $(el);
            var stage = $("#theatre__stage");
            var nextId = item.attr('data-theatre-next');
            var prevId = item.attr('data-theatre-prev');
            var counterText = item.attr('data-theatre-counter');
            var caption = item.find('figcaption').text();
            var imgSrc; // Need to conditionally find this.

            // Determine whether image shown should be the 
            // previewed thumbnail or a larger one linked to.
            if (item.find('img').parent('a').length !== 0) {
                imgSrc = item.find('img').parent('a').attr('href');
            }
            else {
                imgSrc = item.find('img').attr('src');
            }

            // In the theatre stage, ipdate image, caption,
            // prev / next links and counter text.
            stage.find('img').attr('src',imgSrc); 
            stage.find('figcaption').text(caption);
            $('#theatre__prev a').attr('href',"#"+prevId);
            $('#theatre__next a').attr('href','#'+nextId);
            $('#theatre__counter').text(counterText);
            
            // if current item has an ID 
            // then update the address bar
            if(item.attr('id')) {
                window.location.hash = 'theatre---' + item.attr('id');
            }

            stage.show();
            return false;
        };

        // Initialize the stage if not done before.
        if ( $('#theatre__stage').length === 0 ) {
            init();
        }

        var images = this;

        // Loop through each of the selected elements
        return images.each(function(i){
            var prev = i === 0 ? images.length-1 : i-1;
            var next = (i+1) % images.length;
            var counter = (i+1) + " / " + images.length;
            var item = $(this);

            item.attr('data-theatre-prev', images[prev].id);
            item.attr('data-theatre-next', images[next].id);
            item.attr('data-theatre-counter', counter);
            item.css('cursor','pointer');

            item.click(function(){
                return play(this);
            });

            // If the linked to this image in the theatre, 
            // then load up 'play' this image.
            if ('#theatre---' + item.attr('id') === window.location.hash) {
                play(this);
            }
            
        });
    };
 
}( jQuery ));


// By default, run theatre() on 
// <figure> els with class 'theatre__image' 
$("figure.theatre__image").theatre();



