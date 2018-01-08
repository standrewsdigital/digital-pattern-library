function htmlEncode(value) {
    //create a in-memory div, set it's inner text(which jQuery automatically encodes)
    //then grab the encoded contents back out.  The div never exists on the page.
    return $('<div/>').text(value).html();
}

function htmlDecode(value) {
    return $('<div/>').html(value).text();
}

(function($) {

    $(".pattern-source").each(function() {
        var t = $(this)
        t.html(htmlEncode(t.html()));
    });

    $(".anchor-jump").change(function() {
        var dest = $(this).val();
        if (dest) {
            window.location = "#" + dest;
        }
    });


    $("a.example_toggle").click(function() {
        var t = $(this);
        var view = t.parent().parent().find('iframe')
        var code = t.parent().parent().find('.code')
        if (t.text() == 'View') {
            view.show();
            code.hide();
        } else if (t.text() == 'Code') {
            view.hide();
            code.show();
        }
        return false;

    });


    $('iframe').on("load" , (function() {
        $('iframe').height($('iframe').contents().height());
    }));

    $(".example iframe").on("load" , (function() {
        var html = $(this).contents().find('body .example').first().html();
        var encoded_html = htmlEncode(html);
        // console.log(encoded_html);
        $(this).siblings('.code').html(encoded_html);

    }));


    // Helper function for the swatch popovers.
    // Takes a string like "rgb(0, 23, 23)"; and return the corresponding hex code.
    function rgbToHex(rgbString) {
        var parts = rgbString.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/),
            counter;

        // Return if the string doesn't match (i.e. rgba() or invalid string)
        if (!parts) return "";

        parts.shift(); // Removes the entire matched string
        for (counter = 0; counter < parts.length; counter++) {
            parts[counter] = parseInt(parts[counter]).toString(16);
            if (parts[counter].length == 1) {
                parts[counter] = '0' + parts[counter]; // pad if needed
            }
        }
        return '#' + parts.join('');
    }

    // Activate a popover on all the swatch elements.
    // Get the background color and determine the hex code (if not rgba).
    // $('.swatch > *').popover({
    //     content: function() {
    //         var item = $(this),
    //             bgcolor = item.css('background-color'),
    //             hexcode = rgbToHex(bgcolor),
    //             content = "<strong>CSS code</strong><br>" +
    //             "RGB: <code>" + bgcolor + "</code>";

    //         if (hexcode) {
    //             content += "<br>Hex: <code>" + hexcode + "</code>";
    //         }

    //         return content;
    //     },
    //     html: true,
    //     placement: 'bottom'
    // });

    $('.swatch > *:not(.swatch__title, .clearfix)').append(function ( index ) {
        var item = $(this);
        bgcolor = item.css('background-color');
        hexcode = rgbToHex(bgcolor);
        bgcolor = bgcolor.replace("0.74902","0.75");
        content = "<br><p><strong>RGB:</strong> " + bgcolor ;
        if (hexcode) {
            content += "<br><strong>Hex:</strong> " + hexcode;
        }
        content += "</p>";

        return content;
    });

    /*********************************/
    /* BEGIN Pattern: form-banner    */
    /*********************************/

    var names = [
        {
            "name": "English MA (Hons)",
            "type": "ug",
            "link": "#"
        },
        {
            "name": "Mediaeval Studies MA (Hons)",
            "type": "ug",
            "link": "#"
        },
        {
            "name": "Biblical Studies MA (Hons)",
            "type": "ug",
            "link": "#"
        },
        {
            "name": "Comparative Literature MA (joint degree)",
            "type": "ug",
            "link": "#"
        },
        {
            "name": "Classical Studies MA (Hons)",
            "type": "ug",
            "link": "#"
        },
        {
            "name": "Computer Science Degree (with English Language) (MSc)",
            "type": "pg",
            "link": "#"
        },
        {
            "name": "English Language Teaching (MLitt)",
            "type": "pg",
            "link": "#"
        },
        {
            "name": "Medieval English (MLitt)",
            "type": "pg",
            "link": "#"
        },
        {
            "name": "Shakespeare and Renaissance Literary Culture (MLitt)",
            "type": "pg",
            "link": "#"
        },
        {
            "name": "Pre-Masters",
            "type": "pg",
            "link": "#"
        },
        {
            "name": "4-week Pre-sessional course",
            "type": "pg",
            "link": "#"
        }
    ];

    $("#form-banner-search, #form-banner-search-names").keyup(function() {

        if ( $(this).val().length > 2 ) {
            search_cards( $(this).val() );
            $(".results").slideDown('slow');
        } else {
            $(".results").slideUp('slow');
            $(".results .col-md-6.left-column",".results .col-md-6.right-column").text("");
        }

    });

    function search_cards( inputVal ) {

        var testVal = inputVal.toLowerCase();
        var leftResults = [];
        var rightResults = [];

        // Search for stuff
        for ( var i = 0; i < names.length; i++ ) {
            var link;

            if ( names[i].name.toLowerCase().indexOf(testVal) >= 0 ) {
                var url = names[i].link;
                link = "<a href='" + url + "'>" + names[i].name + "</a>";

                if ( names[i].type == 'ug' ) {
                    leftResults.unshift(link);
                } else {
                    rightResults.unshift(link);
                }
            }

        }

        leftResults = leftResults.join("");
        rightResults = rightResults.join("");

        $(".results .col-md-6.left-column").html("");
        $(".results .col-md-6.right-column").html("");

        if ( leftResults.length === 0 && rightResults.length === 0 ) {
            $(".results .col-md-6.left-column").html("No results found, please try again.");
        } else {
            if ( leftResults.length > 0 ) {
                add_leftResults_list( leftResults );
            }
            if ( rightResults.length > 0 ) {
                add_rightResults_list( rightResults );
            }
        }

    }

    function add_leftResults_list( list ) {
        list = "<h2>Undergraduate courses</h2>" + list;
        $(".results .col-md-6.left-column").html(list);
    }

    function add_rightResults_list( list ) {
        list = "<h2>Postgraduate courses</h2>" + list;
        $(".results .col-md-6.right-column").html(list);
    }

/*********************************/
/* END Pattern: form-banner      */
/*********************************/



/*********************************/
/* BEGIN Pattern: Photospheres   */
/*********************************/

window.addEventListener('load', onVrViewLoad)
function onVrViewLoad() {
  var vrView = new VRView.Player('#photosphere', {
  image: 'https://www.st-andrews.ac.uk/assets/university/test/ABH-Bedroom.jpg'
  });
}


/*********************************/
/* END Pattern: Photospheres     */
/*********************************/


})(jQuery);