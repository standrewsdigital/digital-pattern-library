// Add expand code block button
function addExpandButtons() {
    Array.prototype.slice.call(document.querySelectorAll('pre > code')).forEach(function (codeBlock) {
        var button = document.createElement('button');
        var pre = codeBlock.parentNode;
        button.className = 'btn btn-xsmall-tag btn-icon__expand';
        button.type = 'button';
        button.innerText = 'Expand code';
        button.setAttribute("aria-expanded", "false");

        button.addEventListener('click', function () {
            var state =  button.getAttribute("aria-expanded");
            if(state == "true"){
            button.innerText = 'Expand code';
            button.setAttribute("aria-expanded", "false");
            pre.classList.remove("pre-expanded");
            } else {
            button.innerText = 'Collapse code';
            button.setAttribute("aria-expanded", "true");
            pre.classList.add("pre-expanded");
            }
        });

        pre.parentNode.insertBefore(button, pre.nextSibling);

    });
}
addExpandButtons();

// Copy button for code blocks
function addCopyButtons(clipboard) {
    Array.prototype.slice.call(document.querySelectorAll('pre > code')).forEach(function (codeBlock) {
        var button = document.createElement('button');
        button.className = 'btn btn-xsmall-tag btn-icon__copy';
        button.type = 'button';
        button.innerText = 'Copy code';

        button.addEventListener('click', function () {
            clipboard.writeText(codeBlock.innerText).then(function () {
                /* Chrome doesn't seem to blur automatically,
                   leaving the button in a focused state. */
                button.blur();

                button.innerText = 'Copied';

                setTimeout(function () {
                    button.innerText = 'Copy code';
                }, 2000);
            }, function (error) {
                button.innerText = 'Error';
            });
        });

        var pre = codeBlock.parentNode;
        pre.parentNode.insertBefore(button, pre.nextSibling);

    });
}
if (navigator && navigator.clipboard) {
    addCopyButtons(navigator.clipboard);
} else {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/2.7.0/clipboard-polyfill.promise.js';
    script.integrity = 'sha256-waClS2re9NUbXRsryKoof+F9qc1gjjIhc2eT7ZbIv94=';
    script.crossOrigin = 'anonymous';
    script.onload = function() {
        addCopyButtons(clipboard);
    };

    document.body.appendChild(script);
}

(function($) {

    // Toggle button for Colour Contrast table
    $("#toggle-colours-button").click(function() {
        // Check button state
        var state = $(this).attr('aria-pressed') === 'false' ? true : false;
        // If true then change state and remove colours
        if(!state){
            $(this).attr('aria-pressed', state);
            $('.table-contrast').toggleClass("table-contrast--hide-colours");
        } else {
            $(this).attr('aria-pressed', state);
            $('.table-contrast').toggleClass("table-contrast--hide-colours");
        }
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

    $('.swatch > .swatch__details').prepend(function ( index ) {
        var item = $(this).parent();
        bgcolor = item.find('.swatch__colour').css('background-color');
        console.log('color '+bgcolor);
        hexcode = rgbToHex(bgcolor);
        bgcolor = bgcolor.replace("0.74902","0.75");
        content = "<p><strong>RGB:</strong> " + bgcolor ;
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




 // Placeholder tags used for the news search pattern.
    var news_tags = [
        {
            "name": "Arts",
            "link": "#"
        },
        {
            "name": "Business",
            "link": "#"
        },
        {
            "name": "Children",
            "link": "#"
        },
        {
            "name": "Community",
            "link": "#"
        },
        {
            "name": "Crime",
            "link": "#"
        },
        {
            "name": "Culture",
            "link": "#"
        },
        {
            "name": "Defence",
            "link": "#"
        },
        {
            "name": "Economy",
            "link": "#"
        },
        {
            "name": "Education at St Andrews",
            "link": "#"
        },
        {
            "name": "Energy",
            "link": "#"
        },
        {
            "name": "Engineering",
            "link": "#"
        },
        {
            "name": "Enterprise",
            "link": "#"
        },
        {
            "name": "Environment",
            "link": "#"
        },
        {
            "name": "Health and medicine",
            "link": "#"
        },
        {
            "name": "History of St Andrews",
            "link": "#"
        },
        {
            "name": "Law",
            "link": "#"
        },
        {
            "name": "Lifestyle at St Andrews",
            "link": "#"
        },
        {
            "name": "Politics",
            "link": "#"
        },
        {
            "name": "Research at St Andrews",
            "link": "#"
        },
        {
            "name": "Science",
            "link": "#"
        },
        {
            "name": "Security",
            "link": "#"
        },
        {
            "name": "Society",
            "link": "#"
        },
        {
            "name": "St Andrews",
            "link": "#"
        },
        {
            "name": "St Andrews in the news",
            "link": "#"
        },
        {
            "name": "St Andrews alumni",
            "link": "#"
        },
        {
            "name": "Technology",
            "link": "#"
        },
        {
            "name": "Travel",
            "link": "#"
        },
        {
            "name": "University",
            "link": "#"
        },
        {
            "name": "World",
            "link": "#"
        }
    ];




    // Data for the patterns page search - get patterns data from the live patterns page (couldn't work out an easier way to do this).
    var patterns = [];

    $('.navbox').each(function() {

        navbox = $(this);

        // Get the navbox title and link.
        var title = navbox.find('.navbox__title').text();
        var link = navbox.find('.navbox__title a').attr('href');
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
    $("#form-banner-search-blue, #form-banner-search-grey, #form-banner-search-names, #form-banner-pattern-search, #news-search, .search-box").val('');


    // Search the data using the user text input.
    $("#form-banner-search-blue, #form-banner-search-grey, #form-banner-search-names, #form-banner-pattern-search, #news-search, .search-box").keyup(function() {

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

            var results = search_data( form_id, search_term, search_list );

            if (form_id === 'news-search') {
                if (results != "") {
                    $(this).parent('.input-group').next('.results').fadeIn('slow');
                }
            }
            else {
                $(this).parent('.input-group').next('.results').slideDown('slow');
            }

        } else {

            
            if (form_id === "news-search") {
                $(this).parent('.input-group').next('.results').fadeOut('slow');
            } else {
                $(this).parent('.input-group').next('.results').slideUp('slow');
                $(this).parent('.input-group').next('.results').children('.row').children('.col-md-6.left-column, .col-md-6.right-column').html('');
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
                    link = "<a type='button' class='btn btn-tag' href='" + link_url + "'>" + link_text + "</a>";
                } else {
                  link = "<li class=\"search-result\"><a href='" + link_url + "'>" + link_text + "</a></li>";
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
        $('#' + form_id).parent('.input-group').next('.results').children('.row').children('.col-md-6.left-column, .col-md-6.right-column').html('');

        // Show error message if no results have been found.
        if ( left_results.length === 0 && right_results.length === 0 ) {
            $('#' + form_id).parent('.input-group').next('.results').children('.row').children('.col-md-6.left-column').html('No results found, please try again.');
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

        return left_results;

    }


    function add_left_results_list( form_id, list ) {

        // Set the column heading based on the form id.
        if ( form_id === 'form-banner-pattern-search' ) {
            list = "<h3>Patterns</h3><ul class=\"search-results no-margin-bottom\">" + list + "</ul>";
        } else if ( form_id === 'news-search' ) {
            list;
        } else {
            list = "<h3>Undergraduate courses</h3><ul class=\"search-results no-margin-bottom\">" + list + "</ul>";
        }

        if ( form_id === 'news-search' ) {
            $('input#' + form_id).parent('.input-group').next('.results').children('.row').children('.col-md-12').html(list);
        } else {
            $('#' + form_id).parent('.input-group').next('.results').children('.row').children('.col-md-6.left-column').html(list);
        }

    }

    function add_right_results_list( form_id, list ) {

        list = "<h3>Postgraduate courses</h3><ul class=\"search-results no-margin-bottom\">" + list + "</ul>";
        $('#' + form_id).parent('.input-group').next('.results').children('.row').children('.col-md-6.right-column').html(list);

    }

    /*********************************/
    /* END Pattern: form-banner      */
    /*********************************/



})(jQuery);

// Autocomplete code for Funnelback
  jQuery(document).ready(function() {
    jQuery('.form-control--autocomplete').autocompletion({
      datasets: {
        organic: {
          collection: 'Uosa-meta-global',
          profile : '_default',
          program: 'https://www.st-andrews.ac.uk/s/suggest.json',
          format: 'extended',
          alpha: '0.5',
          show: '8',
          sort: '0',
          group: true,
          template: {
            suggestion: function(context) {
                var pos = context.label.toLowerCase().indexOf(context.query.toLowerCase());
                var pos2 = pos+context.query.length;
                console.log(pos + ' ' + pos2);
                return '<div class="tt-suggestion tt-selectable"><span class="tt-highlight">'+context.label.slice(0, pos) + "</span>" + context.label.slice(pos,pos2)+'<span class="tt-highlight">'+context.label.slice(pos2)+'</span></div>';
                }
            }
        },
      },
      typeahead: {
        hint: true,
        highlight: false
        },
      length: 3
    });
  });