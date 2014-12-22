
/*********************************/
/* BEGIN Pattern: info-bite      */
/*********************************/


jQuery(document).ready(function(){


  $(".info-bite .bite-container a").bigTarget({
    clickZone : 'div:eq(1)', // jQuery parent selector
    clickZoneClass : '',
    clickZoneHoverClass: 'hover'
  });

  $(".info-bite .bite").fitText(0.8,{
      minFontSize: '28px',
      maxFontSize: '64px'
    }
  );

  enquire.register("screen and (min-width: 991px)", {
    unmatch : function() {
      $(".info-bite .bite, .info-bite.landscape .bite, .info-bite.portrait .bite")
        .fitText(0.85,{
            minFontSize: '28px',
            maxFontSize: '64px'
          });
    },
    match : function() {
      $(".info-bite.landscape .bite").fitText(1.2,{
          minFontSize: '28px',
          maxFontSize: '64px'
        });
      $(".info-bite.portrait .bite").fitText(0.6,{
          minFontSize: '28px',
          maxFontSize: '64px'
        });
    }
  });

});


/*********************************/
/* END Pattern: info-bite        */
/*********************************/
