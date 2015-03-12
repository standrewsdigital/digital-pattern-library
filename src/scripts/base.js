

$("div.image-container .image-text-box a").bigTarget({
    hoverClass: 'over', // CSS class applied to the click zone onHover
    clickZone : 'div:eq(1)' // jQuery parent selector
});


$('[data-toggle="popover"]').popover();
$('[data-toggle="tooltip"]').tooltip();

// $(document).ready(function(){
// $(".secondary-call").fitVids();
// });

