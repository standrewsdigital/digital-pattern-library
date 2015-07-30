function htmlEncode(value){
//create a in-memory div, set it's inner text(which jQuery automatically encodes)
//then grab the encoded contents back out.  The div never exists on the page.
return $('<div/>').text(value).html();
}

function htmlDecode(value){
return $('<div/>').html(value).text();
}

(function($){

	$(".pattern-source").each(function(){
	  var t = $(this)
	  t.html(htmlEncode(t.html()));
	});

	$(".anchor-jump").change(function(){
	  var dest = $(this).val();
	  if (dest) {
	    window.location = "#"+dest;
	  }
	});



	$("a.example_toggle").click(function(){
		var t = $(this);
		var view = t.parent().parent().find('iframe')
		var code = t.parent().parent().find('.code')
		if (t.text() == 'View') {
			view.show();
			code.hide();
		}
		else if (t.text() == 'Code') {
			view.hide();
			code.show();
		}
		return false;

	});


	$('iframe').load(function () {
    $('iframe').height($('iframe').contents().height());
	});

	$(".example iframe").load(function(){
		var html = $(this).contents().find('body .example').first().html();
	  var encoded_html = htmlEncode(html);
	  console.log(encoded_html);
	  $(this).siblings('.code').html(encoded_html);

	});


	// Helper function for the swatch popovers.
	// Takes a string like "rgb(0, 23, 23)"; and return the corresponding hex code.
	function rgbToHex(rgbString) {
		var parts = rgbString.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/),
			counter;

		// Return if the string doesn't match (i.e. rgba() or invalid string)
		if (!parts) return "";

		parts.shift(); // Removes the entire matched string
		for(counter = 0; counter < parts.length; counter++)  {
			parts[counter] = parseInt(parts[counter]).toString(16);
			if (parts[counter].length == 1) {
				parts[counter] = '0' + parts[counter]; // pad if needed
			}
		}
		return '#' + parts.join('');
	}



	// Activate a popover on all the swatch elements.
	// Get the background color and determine the hex code (if not rgba).
    $('.swatch > *').popover({
		content: function(){
			var item = $(this),
				bgcolor = item.css('background-color'),
				hexcode = rgbToHex(bgcolor),
				content = "<strong>CSS code</strong><br>" +
						  "RGB: <code>" + bgcolor + "</code>";

			if (hexcode) {
				content += "<br>Hex: <code>" + hexcode + "</code>";
			}

			return content;
		},
		html: true,
		placement: 'bottom'
    });






})(jQuery);