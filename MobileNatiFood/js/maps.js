var myCenter=new google.maps.LatLng(53.40562, -6.37883);
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function initialize(){

    //---Properties...
    directionsDisplay = new google.maps.DirectionsRenderer();
    var mapOptions = {
        zoom:10,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: myCenter
    }
    map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('direction_panel'));

    //--------Marker...

    var marker=new google.maps.Marker({
        position:myCenter
    });
    marker.setMap(map);

    //--------Marker Zoom on click...

    google.maps.event.addListener(marker,'click',function() {
        map.setZoom(15);
        map.setCenter(marker.getPosition());
    });
  
    //--------Info Window...

    var infowindow = new google.maps.InfoWindow({
        content:'<img style="float : left; width = 20px; " width="100px" src="images/logo.png" alt="NatiFood !"/><p>Natifood main office is gracefully hosted in the institute of technology of Blanchardstown !</p>'
    });
    infowindow.open(map,marker);
    
    $('#button_directions').hide();
}

//----- compute directions
function calcRoute() {

    var end = myCenter;
    var request = {
        origin:$('#input_directions').val(),
        destination:end,
        travelMode: google.maps.TravelMode.DRIVING
    };
  
    directionsService.route(request, function(result, status) {

        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(result);
            $('#direction_panel').hide();
            $('#link_direction_instruction').fadeIn();
            $('#button_directions').show();
        }
        else{
            alert("Address not found, please be precisier");
        }
    });
}



function showDirections(){
    if ($('#direction_panel').css("display") != "none"){
        $('#direction_panel').css("display","none");
        $('#button_directions p').text("Show directions");
    }
    else{
        $('#direction_panel').css("display","block"); 
        $('#button_directions p').text("Hide directions");
    }
}

google.maps.event.addDomListener(window, 'load', initialize);

