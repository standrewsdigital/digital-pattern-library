

$("div.image-container .image-text-box a").bigTarget({
    hoverClass: 'over', // CSS class applied to the click zone onHover
    clickZone : 'div:eq(1)' // jQuery parent selector
});


$('[data-toggle="popover"]').popover();
$('[data-toggle="tooltip"]').tooltip();



// Load media element if audio tags are found on the page.
// Note, to allow future devs to use the DPL and not use the 
// default audio player, they can add an 'exclude' class.
var audios = $('audio').not('audio.exclude');
if (audios.length) {

    // Get the MediaElement.js script from CDN
    $.getScript("http://www.st-andrews.ac.uk/~cdn/mediaelement/2.16.3/mediaelement-and-player.min.js", 

        // Activate all audios with media element.
        function(){
            audios.mediaelementplayer();
        }
    );

    // Get the MediaElement.js styles from CDN
    $('<link/>', {
       rel: 'stylesheet',
       type: 'text/css',
       href: 'http://www.st-andrews.ac.uk/~cdn/mediaelement/2.16.3/mediaelementplayer.css'
    }).appendTo('head');

}


