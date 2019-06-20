/*********************************/
/* BEGIN Pattern: navigation grid */
/*********************************/

$('.navigation-grid__items--vertical').each(function( index ) {
  var items = $(this).children('.navigation-grid-item').length;
  var rows3 =  Math.ceil(items / 3);
  var rows2 =  Math.ceil(items / 2);
  $(this).get(0).style.setProperty("--rows3", rows3);
  $(this).get(0).style.setProperty("--rows2", rows2);
});

/*********************************/
/* END Pattern: navigation grid   */
/*********************************/