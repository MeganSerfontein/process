$(document).ready(function() {});

function initialize() {
    var myLatlng1 = new google.maps.LatLng(-15.7646484,29.2201737);
    var mapOptions = {
        zoom: 8,
        center: myLatlng1,
        scrollwheel: false
    };

    var map = new google.maps.Map(document.getElementById('map1'),
        mapOptions);

    var contentString1 = 'Mvuu Lodge'

    var infowindow = new google.maps.InfoWindow({});

    var marker1 = new google.maps.Marker({
        position: myLatlng1,
        map: map,
        title: 'Mvuu Lodge'
    });
    google.maps.event.addListener(marker1, 'click', function initialize() {
        infowindow.close(); //hide the infowindow
        infowindow.setContent(contentString1); //update the content for this marker
        infowindow.open(map, marker1);

    });

}