/*
 * This script adds non-breaking spaces between the words
 * defined in the `unbreakables` array.
 * 
 * Depends on the [jQuery replacetext plugin](http://www.benalman.com/projects/jquery-replacetext-plugin/) by Ben Alman. Source code
 * is available on [Github](https://github.com/cowboy/jquery-replacetext).
 *
 * We use the plugin rather than just searching and replacing text in the
 * body innerHTML (with jQuery's .html() ) because using the vanilla JS/jQuery
 * method would possibly remove event listeners and cause the browser to 
 * re-render the page needlessly.
 */


(function($){

    // We take time recordings to measure time stamps for how
    // long the finding and replacing takes.
    var start = new Date().getTime();

    // All strings listed here will be searched for. It would only
    // make sense to search for strings that included spaces.
    var unbreakables = [ 'St Andrews' ];

    // A callback function used to do the actual replacement.
    function unbreakableSpaces(str) {
        return str.replace(/ /g,'&nbsp;');
    }

    // Loop through the unbreakables and use the jQuery replacetext
    // plugin to repl
    for( var j in unbreakables) {
        var regex = new RegExp(unbreakables[j], 'gi');
        // Search for the jth element of unbreakables in child elements
        // of <body>; replace using the unbreakableSpaces() callback.
        $("body *").replaceText( regex, unbreakableSpaces );    
    }

    // Finish up and store a message about the time it took for 
    // reference by devs.
    var end = new Date().getTime();
    var time = end - start;
    var msg = 'Added non-breaking spaces. (' + time + 'ms)';
    document.unbreakableSpacesMessage = msg;

})(jQuery);