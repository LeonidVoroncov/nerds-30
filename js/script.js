var map;

function initMap() { 
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 59.938814, lng: 30.321049},      
        zoom: 17        
    });
    var marker = new google.maps.Marker({

        position: {lat: 59.938709, lng: 30.323712},
        map: map,
        title: 'Наш маркер: Большой театр',
        icon: 'img/map-marker.png'
    });
}

const buttonOpen = document.querySelector(".location-but");
const buttonClosed = document.querySelector(".write-us-colose");
const forma = document.querySelector(".pop-up-write-us")

buttonOpen.onclick = function() {
    forma.classList.toggle("pop-up-write-us-active")
    forma.classList.toggle("pop-up-write-us-noactive")
}

buttonClosed.onclick = function() {
    forma.classList.toggle("pop-up-write-us-active")
    forma.classList.toggle("pop-up-write-us-noactive")
}