
/*********************************/
/* BEGIN Pattern: google-maps    */
/*********************************/

function initialize() {

  // JSON data to be used for marker locations.
  var locations = [ 
     {
       "title": "Bute Medical Building",
       "lat": 56.337974,
       "lng": -2.793692,
       "description": "Bute Annexe, St Andrews, Fife, KY16 9TS"
     },
     {
       "title": "The Library",
       "lat": 56.341958,
       "lng": -2.795838,
       "description": "University of St Andrews, St Andrews, Fife, KY16 9TR"
     },
     {
       "title": "Sports Centre",
       "lat": 56.339211,
       "lng": -2.814914,
       "description": "St Leonard's Rd, St Andrews, Fife, KY16 9DY"
     }
  ];

  // Map view settings
  var mapProp = {
    center:new google.maps.LatLng(56.339775,-2.796721), // map starting position
    zoom:14, // default zoom level
    mapTypeId:google.maps.MapTypeId.ROADMAP, // enable road map
    minZoom: 7, // minimum zoom level
    rotateControl: false // disable rotate
  };

  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

  infoWindow = new google.maps.InfoWindow();

    // Read through txt file for marker data

    //  $.getJSON( "location-data.js" , function(locations) {     // FOR EXTERNAL FILE, UN-COMMENT LINE.
          $.each(locations, function(key, data) {               

              var latLng = new google.maps.LatLng(data.lat, data.lng); 

              var html = "<strong>"+ data.title +"</strong>" + "<p>"+ data.description +"</p>"+'<p><a class="directions-link" href="https://www.google.com/maps/dir/Current+Location/' + parseFloat(data.lat) + ' ,' +  parseFloat(data.lng) + '">Directions</a></p>';

              // Creating a marker and putting it on the map
              var marker = new google.maps.Marker({
                  position: latLng,
                  map: map,
                  title: data.title
              });

              // Create location markers
              google.maps.event.addListener(marker, 'click', function() {
              infoWindow.setContent(html);
              infoWindow.open(map, marker);

            });   
          }); 
      //  });       // FOR EXTERNAL FILE, UN-COMMENT LINE.

}
if ($('#googleMap').length) {
  google.maps.event.addDomListener(window, 'load', initialize);
}

/*********************************/
/* END Pattern: google-maps      */
/*********************************/