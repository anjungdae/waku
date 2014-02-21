      var map;
      var infoWindow; // infoWindow Object를 담을 변수
      var marker; // Marker Object를 담을 변수

      var ns = 37.478034;
      var ew = 127.184032;
      
//      var rad = Math.toRadian(30);
//      console.log(rad);
//      var tangen = Math.tan(rad);
      
      var radian = -30;
      
      var x = Math.random();//0.2
      var y = Math.random();//0.2
      
      ew = ew + ((x*Math.cos(radian)-y*Math.sin(radian))*0.0001);
      ns = ns + ((x*Math.sin(radian)+y*Math.cos(radian))*0.0001);
      
      
      function initialize_Marker(){
    	  var latlng = new google.maps.LatLng(ns,ew);
    	  var mapOptions = {
    	          center: latlng,
    	          zoom: 20,
    	          panControl: false,
    	          zoomControl: false,
    	          scaleControl: false,
    	          streetViewControl:false,
    	          mapTypeId: google.maps.MapTypeId.ROADMAP
    	        };
    	        map = new google.maps.Map(document.getElementById("map-canvas"),
    	            mapOptions);
    	        
      marker = new google.maps.Marker({
      map:map,
      position: latlng
      });

      google.maps.event.addListener(marker, 'click', ShowInfoWindow);
      infoWindow = new google.maps.InfoWindow(); //infoWindow 변수를 InfoWindow class 형식으로 할당 
      }


      function ShowInfoWindow(event) {

      infoWindow.setContent("<strong>남한산성 로터리</strong><br>" +
      		"<a href='http://www.ggnhss.or.kr' target='_blank'>www.ggnhss.or.kr</a>" +
      		"<br>사업단 소개, 남한산성 역사, 문화유산탐방, 체험캠프, 등산코스 등 제공");
      // setContent에 들어갈 HTML 코드는 줄바꾸기(enter)하지 말고 한 줄로 이어서 써야함

      infoWindow.setPosition (event.latLng);

      infoWindow.open (map);
      };
      
      