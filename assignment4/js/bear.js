


/*this function calls the map from the Google API  */

function initMap() {
        var mapDiv = document.getElementById("map1");
        var map1 = new google.maps.Map(mapDiv, {
          center: {lat: 45.05, lng: -110.0958},
          zoom: 9
        });
      }
 



/* this JQuery attr tells the image to change the source */

$(document).ready(function(){
    $("button").click(function(){
        $("img").attr("src", "map1");
    });
});


