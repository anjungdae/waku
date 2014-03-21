window.onload = function () {
	var latitude = null;
	var longitude = null;
	var heading = null;
	
	weather(latitude,longitude);
	
	if ("geolocation" in navigator) {
		
		var options = {
				  enableHighAccuracy: true,
				  timeout: 5000,
				  maximumAge: 0
				};

		function success(pos) {
				  var crd = pos.coords;
				  
				  
				  latitude = crd.latitude;//위도(남,북)
				  longitude = crd.longitude;//경도(동,서)
				  heading = crd.heading;//방향
				  
				  console.log('Latitude : ' + latitude);
				  console.log('Longitude: ' + longitude);
				  console.log('heading: ' + heading);
				  console.log('More or less ' + crd.accuracy + ' meters.');
				  
				  userMaker(latitude,longitude,heading);
				};

		function error(err) {
				  console.warn('ERROR(' + err.code + '): ' + err.message);
				};

			navigator.geolocation.watchPosition(success, error, options);
			
		} else {
			function geo_error() {
			    alert("위치 정보를 사용할 수 없습니다.");
			};
		};
};

function userMaker(latitude,longitude,heading){
		
	  console.log('Latitude : ' + latitude);//위도(남,북)
      console.log('Longitude: ' + longitude);//경도(동,서)
	  console.log('heading: ' + heading);//방향
	
	  var map;
      var infoWindow; // infoWindow Object를 담을 변수
      var marker; // Marker Object를 담을 변수
      var itemMaker;
      
      var ns = latitude;//위도(남,북)
      var ew = longitude;//경도(동,서)
      
//      var rad = Math.toRadian(30);
//      console.log(rad);
//      var tangen = Math.tan(rad);
      
      var hrotation = 90;
      
      var radian = 30 * Math.PI/180;
      console.log(radian);
      
      var x = Math.random();//0.2
      var y = Math.random();//0.2

      itemX = Math.cos(radian)*(ew+ew)-Math.sin(radian)*(ns+0.0005+ns)+ew;
      itemY = Math.sin(radian)*(ew+ew)+Math.cos(radian)*(ns+0.0005+ns)+ns;
      
      console.log(itemX);
      console.log(itemY);
      
//      itemY = ns + ((x*Math.cos(radian)-y*Math.sin(radian))*0.0001);
//      itemX = ew + ((x*Math.sin(radian)+y*Math.cos(radian))*0.0001);
      
	  var latlng = null;
	  var latlng2 = null;
	  	  
      function initialize_Marker(){
    	  latlng = new google.maps.LatLng(ns,ew);
    	  latlng2 = new google.maps.LatLng(itemY,itemX);
    	      	      
    	  var service = new google.maps.DistanceMatrixService();
    	  service.getDistanceMatrix(
    	    {
    	      origins: [latlng2],
    	      destinations: [latlng2],
    	      travelMode: google.maps.TravelMode.WALKING,
    	      avoidHighways: false,
    	      avoidTolls: false
    	    }, callback);

    	  function callback(response, status) {
    	    // See Parsing the Results for
    	    // the basics of a callback function.
    	  }
    	  
    	  var mapOptions = {
    	          center: latlng,
    	          zoom: 17,
    	          draggable:false,
    	          maxZoom:17,
    	          minZoom:17,
    	          panControl: false,
    	          zoomControl: false,
    	          scaleControl: false,
    	          streetViewControl:false,
    	          mapTypeId: google.maps.MapTypeId.ROADMAP,
    	   };
    	  
    	  map = new google.maps.Map(document.getElementById("map-canvas"),
    	        mapOptions);
      
      var bucha = {
              path:"M-3.8,1 A3.8,1 0 0,1 3.8,1 L0,15 L-3.8,1 Z, M2,15 A2,2 0 1,1 -2,15 A2,2 0 0,1 2,15 Z",
              anchor:new google.maps.Point(0,15),
              scale: 5,
              rotation: hrotation,
              fillColor:"32f1ff",
              fillOpacity:0.2,
              strokeColor: "#32f1ff",
              strokeWeight:1
      };
      //"M0,0 A9.8,1.2 0 1,0 L0,15 L-9.8,1.2 A0,0 0 0,0 Z"
      
      var itemImage = "newglasscup.png";
      
      var item = {
              path:"M0,8 L2,6 L4,6 L4,0 L-4,0 L-4,6 L-2,6 Z",
              anchor:new google.maps.Point(0,8),
              scale: 5,
              rotation: radian,
              fillColor:"ffffcc",
              fillOpacity:0.9,
              strokeColor: "#ffff99",
              strokeWeight:2
      };
    
	  marker = new google.maps.Marker({
	      map:map,
	      position:latlng,
	      icon:bucha
	      });
	  
      itemMaker = new google.maps.Marker({
          map:map,
          position: latlng2,
          title:"컵",
          icon:itemImage,
          animation: google.maps.Animation.DROP
      });
      
      marker.setZIndex(-100);
      
      google.maps.event.addListener(itemMaker, 'click',ShowInfoWindow);
      infoWindow = new google.maps.InfoWindow(); //infoWindow 변수를 InfoWindow class 형식으로 할당 
      }
      initialize_Marker();
      
      var populationOptions = {
    	      strokeColor: "#0000ff",
    	      strokeOpacity: 0.5,
    	      strokeWeight: 2,
    	      fillColor: "#0000ff",
    	      fillOpacity: 0.15,
    	      map: map,
    	      center: latlng,
    	      radius: 71
      };
    	    
      var cityCircle = new google.maps.Circle(populationOptions);

      function ShowInfoWindow(event) {

      infoWindow.setContent("사과과과<br>");
      // setContent에 들어갈 HTML 코드는 줄바꾸기(enter)하지 말고 한 줄로 이어서 써야함

      infoWindow.setPosition (event.latLng);

      infoWindow.open (map);
      };
      
};