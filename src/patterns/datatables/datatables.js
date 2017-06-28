/*********************************/
/* BEGIN Pattern: datatables     */
/*********************************/

/*
This is required to fix a responsiveness and width issue when using a DataTable within an accordion.
*/
$('.accordion > h3').click(function() {
    $('.accordion table.dataTable').DataTable().columns.adjust().responsive.recalc();
    $('.accordion table.dataTable').css('width', '100%');
 });

/*********************************/
/* END Pattern: datatables       */
/*********************************/
