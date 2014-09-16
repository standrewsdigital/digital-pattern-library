

// Pattern Tile

// $(".tile h1 a").bigTarget({
// 	hoverClass: 'over', // CSS class applied to the click zone onHover
// 	clickZone : 'article:eq(1)' // jQuery parent selector
// });

$('.tile').each(function(){
	// var link = $(this).find('a').attr('href');
	var tile = $(this);
	var a = $(this).find('a').click();
	tile.click(function(e){
		e.stopPropagation();
		a.click();
		//$(this).find('a').click();
	});
});