// UTILS
function htmlEncode(value) {
    //create a in-memory div, set it's inner text(which jQuery automatically encodes)
    //then grab the encoded contents back out.  The div never exists on the page.
    return $('<div/>').text(value).html();
}

function htmlDecode(value) {
    return $('<div/>').html(value).text();
}

// Encode HTML within a pattern-source class
$(".pattern-source").each(function() {
        var t = $(this);
        t.html(htmlEncode(t.html()));
    });

$("div.image-container .image-text-box a").bigTarget({
    hoverClass: 'over', // CSS class applied to the click zone onHover
    clickZone: 'div:eq(1)' // jQuery parent selector
});

$('[data-toggle="popover"]').popover();
$('[data-toggle="tooltip"]').tooltip();

// Load media element if audio tags are found on the page.
// Note, to allow future devs to use the DPL and not use the 
// default audio player, they can add an 'exclude' class.
var audios = $('audio').not('audio.exclude');
var audios_config = {
    audioWidth: 320 // Set the audio player width default to 320 so that it's more mobile friendly.
};
if (audios.length) {

    // Get the MediaElement.js script from CDN
    $.getScript("//www.st-andrews.ac.uk/~cdn/mediaelement/2.16.3/mediaelement-and-player.min.js",

        // Activate all audios with media element.
        function() {
            audios.mediaelementplayer(audios_config);
        }
    );

    // Get the MediaElement.js styles from CDN
    $('<link/>', {
        rel: 'stylesheet',
        type: 'text/css',
        href: '//www.st-andrews.ac.uk/~cdn/mediaelement/2.16.3/mediaelementplayer.css'
    }).appendTo('head');

}

// ROUGH DRAFT of HIDEAWAYS

$('.hideaway').hide();
$('.hideaway-reveal').css('white-space', 'nowrap');
$('.hideaway-reveal').click(function() {

    var siblings = $('.' + $(this).attr('data-target-siblings'));
    var target = $('#' + $(this).attr('data-target-id'));

    if (target.is(":hidden")) {
        siblings.hide();
        target.show();
    } else {
        target.hide();
    }

    return false;
});

// LOAD VIDEO ON CLICK
$('.load-video').click(function(){
    video = '<iframe src="'+ $(this).attr('data-video') +'" width="800" height="450" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
    $(this).replaceWith(video);
    $(".media-wrapper").fitVids();
});

