// Pattern Tile - big target
$(".tile h3 a").bigTarget({
hoverClass: 'over', // CSS class applied to the click zone onHover
clickZone : 'div:eq(0)' // jQuery parent selector
});

$("div.image-container .image-text-box a").bigTarget({
hoverClass: 'over', // CSS class applied to the click zone onHover
clickZone : 'div:eq(1)' // jQuery parent selector
});

$(document).ready(function(){
$(".secondary-call").fitVids();
});

$(".primary-toggle").click(function(){
	$(".navigation-bar .primary-nav").slideToggle();
});
