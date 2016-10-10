
/*********************************/
/* BEGIN Pattern: google-maps    */
/*********************************/

function initialize() {

    // Map view settings
    var mapProp = {
        center:new google.maps.LatLng(56.339775,-2.796721), // map starting position
        zoom:14, // default zoom level
        mapTypeId:google.maps.MapTypeId.ROADMAP, // enable road map
        minZoom: 7, // minimum zoom level
        rotateControl: false // disable rotate
    };

    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    infoWindow = new google.maps.InfoWindow();

    // Read through txt file for marker data
    $.getJSON( "location-data.js" , function( locations ) {

        $.each(locations, function( key, data ) {

            var latLng = new google.maps.LatLng(data.lat, data.lng);

            var html = '<strong>' + data.title + '</strong>' + '<p>' + data.description + '</p>' + '<p><a class="directions-link" href="https://www.google.com/maps/dir/Current+Location/' + parseFloat(data.lat) + ' ,' +  parseFloat(data.lng) + '">Directions</a></p>';

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

    });
}

if ( $('#googleMap').length ) {
    google.maps.event.addDomListener(window, 'load', initialize);
}

/*********************************/
/* END Pattern: google-maps      */
/*********************************/