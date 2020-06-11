
var map;

function initMap() {
    //var uluru = {lat: -25.363, lng: 131.044};
    var uluru = {lat: 1.350367, lng: 103.873607};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    
    var marker = new google.maps.Marker({
        position: {
            lat: uluru.lat, lng: uluru.lng
        },
        map: map
    });
    
}