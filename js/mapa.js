var map, infoWindow;

// Initialize and add the map
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 17
    });


    //Carregar un marker icon simple al mapa
    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    var beachMarker = new google.maps.Marker({
        position: { lat: 39.601107, lng: 2.689460 },
        map: map,
        icon: image
    });


    //variable per un infowindow
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };


            //Configuracio mapa
            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
        

            //Ruta amb polyline
            var flightPlanCoordinates = [
                { lat: 39.601107, lng: 2.689460 },
                { lat: 39.601867, lng: 2.688859 },
                { lat: 39.602140, lng: 2.689529 },
                { lat: 39.603475, lng: 2.688296 },
                { lat: 39.604339, lng: 2.689857 },
                { lat: 39.603657, lng: 2.690409 },
                { lat: 39.602558, lng: 2.690436 },
                { lat: 39.601839, lng: 2.688891 }
            ];

            var flightPath = new google.maps.Polyline({
                path: flightPlanCoordinates,
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            flightPath.setMap(map);


        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}