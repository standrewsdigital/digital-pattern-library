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


})(jQuery);