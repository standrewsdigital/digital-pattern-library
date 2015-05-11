
/*********************************/
/* BEGIN Pattern: long-form      */
/*********************************/


// Add tweet and FB links on pull quotes
$(".long-form .pull-quote").each(function(){
    
    //console.log('pull quotes');

    var pullQuote = $(this);
    var quote_text = null;

    // if the data-quote attribute is set use that
    if (pullQuote.attr('data-quote')) {
        quote_text = pullQuote.attr('data-quote');
    }
    // otherwise, take up to the first 100 chars of the actual pull quote.
    else {
        if (pullQuote.text() > 100) {
            quote_text = pullQuote.text().substring(0,100) + '...';
        }
        else {
            quote_text = pullQuote.text();
        }
    }    

    var page_link = window.location.href.split('?')[0];
    console.log(page_link);
    //var page_link = "http://www.st-andrews.ac.uk/about/";

    var fb_url = 'https://www.facebook.com/uniofsta';
    var fb_link = "<a href='"+fb_url+"' target='_blank'><span class='genericon genericon-facebook'></span></a>";
    

    var tweet_url = 'https://twitter.com/intent/tweet?text=&quot;'+quote_text+'&quot;&amp;url='+page_link;
    var tweet_link = "<a href='"+tweet_url+"' target='_blank'><span class='genericon genericon-twitter'></span></a>";

    pullQuote.append("<div class='pull-quote-share'>"+tweet_link+fb_link+"</div>");
        
});

// Create the gallery viewer div (hidden at the bottom of the page)
var gallery_viewer = $("<div class='long-form-viewer'></div>").hide();
$('body').append(gallery_viewer); // add to the end of <body>

// Setup viewer for all images in the Thumbnail gallery
$(".long-form-thumbnail-gallery, .long-form-slider-gallery").each(function(){

    console.log('setup gallery');

    $(this).find('figure.image')
        .css('cursor','pointer')
        .click(function(){
            
            gallery_viewer.html("");
            var img = $(this).clone(); // 'this' is the current clicked element.
            gallery_viewer.click(function(){
                gallery_viewer.hide(); // click anywhere closes the viewer.
            });
            gallery_viewer.append(img);
            gallery_viewer.show();

        });

});


/*********************************/
/* END Pattern: long-form        */
/*********************************/