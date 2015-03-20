

$("div.image-container .image-text-box a").bigTarget({
    hoverClass: 'over', // CSS class applied to the click zone onHover
    clickZone : 'div:eq(1)' // jQuery parent selector
});


$('[data-toggle="popover"]').popover();
$('[data-toggle="tooltip"]').tooltip();



function addNonBreakingSpaces() {
    var start = new Date().getTime();

    var page = document.documentElement.innerHTML;
    document.documentElement.innerHTML = page.replace(/St Andrews/g,'St&nbsp;Andrews');

    var end = new Date().getTime();
    var time = end - start;
    console.log('Added non-breaking spaces. (' + time + 'ms)');
}

(function(){
    addNonBreakingSpaces();    
})(jQuery);



// $(document).ready(function(){
// $(".secondary-call").fitVids();
// });

