// Pattern Tile - big target
$(".tile h3 a").bigTarget({
hoverClass: 'over', // CSS class applied to the click zone onHover
clickZone : 'div:eq(0)' // jQuery parent selector
});

$("div.image-container .image-text-box a").bigTarget({
hoverClass: 'over', // CSS class applied to the click zone onHover
clickZone : 'div:eq(1)' // jQuery parent selector
});

// $(document).ready(function(){
// $(".secondary-call").fitVids();
// });

$(".primary-toggle").click(function(){
	$(".navigation-bar .primary-nav").slideToggle();
});


/* pattern:button-toggle-ver */


$(".button-toggle-vert").click(function(){
	var current = $(this);
	var target_selector = current.attr('data-target');
	var sibling_targets_selector = current.attr('data-siblings');

	$(target_selector).slideToggle().siblings(sibling_targets_selector).slideUp();

	if (!current.hasClass('button-toggle-vert-up')) {
		current.addClass('button-toggle-vert-up');
	}
	else {
		current.removeClass('button-toggle-vert-up');
	}
	current.siblings(".button-toggle-vert").removeClass('button-toggle-vert-up');

	return false;
});


