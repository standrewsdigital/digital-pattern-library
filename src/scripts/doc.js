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
})(jQuery);