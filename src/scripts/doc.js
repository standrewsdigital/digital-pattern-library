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

    /********************************************************************/
    /* BEGIN Pattern: form-banner                                       */
    /* This code is also used for the form-banner on the patterns page. */
    /********************************************************************/

    // Line below adds auto-focus cursor to the form banner on the main patterns page.
    $('#form-banner-pattern-search').focus();

    // Dummy course data used for the form-banner pattern page.
    var courses = [
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




 // Dummy tags used for the news search pattern.
    var news_tags = [
        {
            "name": "Brexit",
            "link": "#"
        },
        {
            "name": "International pizza",
            "link": "#"
        },
        {
            "name": "International fondue",
            "link": "#"
        },
        {
            "name": "International problems",
            "link": "#"
        },
        {
            "name": "International Steve's",
            "link": "#"
        },
        {
            "name": "International news",
            "link": "#"
        },
        {
            "name": "International pizza",
            "link": "#"
        },
        {
            "name": "International fondue",
            "link": "#"
        },
        {
            "name": "International problems",
            "link": "#"
        },
        {
            "name": "International 2734949",
            "link": "#"
        },
        {
            "name": "International fddfdfeeeer",
            "link": "#"
        },
        {
            "name": "International sss",
            "link": "#"
        },
        {
            "name": "International 2323",
            "link": "#"
        },
        {
            "name": "International csdsdddsdfsdfsdfsd",
            "link": "#"
        },
        {
            "name": "International sdsdsd",
            "link": "#"
        },
        {
            "name": "International 1",
            "link": "#"
        },
        {
            "name": "Swiss army knife",
            "link": "#"
        },
        {
            "name": "Swiss cheese",
            "link": "#"
        },
        {
            "name": "Swiss chocolate",
            "link": "#"
        },
        {
            "name": "Swiss roll",
            "link": "#"
        }
    ];




    // Data for the patterns page search - get patterns data from the live patterns page (couldn't work out an easier way to do this).
    var patterns = [];

    $('.navbox').each(function() {

        navbox = $('.navbox-title a', this);

        // Get the navbox title and link.
        var title = navbox.text();
        var link = navbox.attr('href');
        title = title.replace(/-/g, ' ');

        // Create an object for the title and link then add it to the patterns array.
        patterns.push({
            "name": title,
            "link": link
        });

    });

    // Sort the patterns alphabetically by the pattern name, using the compare function below.
    patterns = patterns.sort(compare);

    function compare(a, b) {
        if ( a.name > b.name ) {
            return -1;
        }
        return 1;
    }

    // Clear the search form(s) when the page is loaded.
    $("#form-banner-search-blue, #form-banner-search-grey, #form-banner-search-names, #form-banner-pattern-search, #news-search").val('');

    // Search the data using the user text input.
    $("#form-banner-search-blue, #form-banner-search-grey, #form-banner-search-names, #form-banner-pattern-search, #news-search").keyup(function() {

        // Set the form id and search term (user input).
        var form_id = this.id;
        var search_term = $(this).val().toLowerCase();

        // Set the search data (either patterns or courses) depending on the form id.
        if ( form_id === 'form-banner-pattern-search' ) {
            var search_list = patterns;
        } else if ( form_id === 'news-search' ) {
            var search_list = news_tags;
        } else {
            var search_list = courses;
        }

        // Wait until the search term length is greater than two characters before starting the search.
        if ( search_term.length > 2 ) {

            search_data( form_id, search_term, search_list );
            $(this).parent('.form-group').next('.results').slideDown('slow');

        } else {

            $(this).parent('.form-group').next('.results').slideUp('slow');
            if (form_id === "news-search") {
                $(this).parent('.form-group').next('.results').children('.row').children('.col-md-12').html('');
            } else {
                $(this).parent('.form-group').next('.results').children('.row').children('.col-md-6.left-column, .col-md-6.right-column').html('');
            }
        }

    });

    function search_data( form_id, search_term, search_list ) {

        // Set empty arrays for the left and right results columns.
        var left_results = [];
        var right_results = []; 

        // Search for stuff
        for ( var i = 0; i < search_list.length; i++ ) {

            var link, link_url, link_text;

            if ( search_list[i].name.toLowerCase().indexOf(search_term) >= 0 ) {

                // Build the link
                link_url = search_list[i].link;
                link_text = search_list[i].name;

                if ( form_id === "news-search" ) {
                    link = "<a type='button' class='btn btn-lg btn-secondary' href='" + link_url + "'>" + link_text + "</a>";
                } else {
                  link = "<a href='" + link_url + "'>" + link_text + "</a>";
                }


                // Sort the results in to columns based on course type (UG or PG). If searching on the patterns page then always place the results into the left column.
                if ( search_list[i].type === 'ug' || form_id === 'form-banner-pattern-search' || form_id === 'news-search') {
                    left_results.unshift(link);
                } else {
                    right_results.unshift(link);
                }
            }

        }

        left_results = left_results.join("");
        right_results = right_results.join("");

        // Make sure the results div is empty before adding new results.
        $('#' + form_id).parent('.form-group').next('.results').children('.row').children('.col-md-6.left-column, .col-md-6.right-column').html('');

        // Show error message if no results have been found.
        if ( left_results.length === 0 && right_results.length === 0 ) {
            $('#' + form_id).parent('.form-group').next('.results').children('.row').children('.col-md-6.left-column').html('No results found, please try again.');
        } else {
            // Add the results to the left column of the results div.
            if ( left_results.length > 0 ) {
                add_left_results_list( form_id, left_results );
            }
            // Add results to the right column of the results div.
            if ( right_results.length > 0 ) {
                add_right_results_list( form_id, right_results );
            }
        }

    }

    function add_left_results_list( form_id, list ) {

        // Set the column heading based on the form id.
        if ( form_id === 'form-banner-pattern-search' ) {
            list = "<h2>Patterns</h2>" + list;
        } else if ( form_id === 'news-search') {
            list;
        } else {
            list = "<h2>Undergraduate courses</h2>" + list;
        }

        if ( form_id === 'news-search' ) {
            $('input#' + form_id).parent('.input-group').next('.results').children('.row').children('.col-md-12').html(list).fadeIn('slow');
        } else {
            $('#' + form_id).parent('.form-group').next('.results').children('.row').children('.col-md-6.left-column').html(list);
        }

    }

    function add_right_results_list( form_id, list ) {

        list = "<h2>Postgraduate courses</h2>" + list;
        $('#' + form_id).parent('.form-group').next('.results').children('.row').children('.col-md-6.right-column').html(list);

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
      image: 'https://www.st-andrews.ac.uk/assets/university/study-at-st-andrews/images/accommodation/accommodation-photospheres/DRAFP-Pond.jpg'
      });
    }


    /*********************************/
    /* END Pattern: Photospheres     */
    /*********************************/


})(jQuery);