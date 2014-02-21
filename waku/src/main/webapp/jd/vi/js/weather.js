window.onload = function () {
	
	var latitude = null;
	var longitude = null;
	
	if ("geolocation" in navigator) {
		
		var options = {
				  enableHighAccuracy: true,
				  timeout: 10000,
				  maximumAge: 0
				};

		function success(pos) {
				  var crd = pos.coords;
				  
				  latitude = crd.latitude;
				  longitude = crd.longitude;
				  
				  console.log('Latitude : ' + crd.latitude);
				  console.log('Longitude: ' + crd.longitude);
				  console.log('More or less ' + crd.accuracy + ' meters.');
				  
				  weather(latitude,longitude);
				};

		function error(err) {
				  console.warn('ERROR(' + err.code + '): ' + err.message);
				};

			navigator.geolocation.getCurrentPosition(success, error, options);
		} else {
			function geo_error() {
			    alert("위치 정보를 사용할 수 없습니다.");
			};
		};
};

function weather(latitude,longitude) {
	/*latitude = 37.4946019;
    longitude = 127.0280055; */
    
    var weatherApi = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude;
    
    //
    
    var weatherData = $.getJSON(weatherApi).done(function(data){
    	  var weatherIcon = data.weather[0].icon;
        var weatherMain = data.weather[0].main;
        var weatherMainKR = null;
        
        console.log(weatherMain);
        
        switch(weatherMain){
        
        /* 진짜 필요한 목록 */
	        case "Clouds":weatherMainKR="흐림";break;
	        case "Drizzle":weatherMainKR="이슬비";break;
	        case "Mist":weatherMainKR="안개";break;
	        case "Rain":weatherMainKR="비";break;
	        case "Snow":weatherMainKR="눈";break;
        
	      /* 예비 목록 */
          case "sky is clear":weatherMainKR="맑음";break;
          case "few clouds":weatherMainKR="약간 흐림";break;
          case "scattered clouds":weatherMainKR="흐림";break;
          case "broken clouds":weatherMainKR="흐린 뒤 맑음";break;
          case "overcast clouds":weatherMainKR="매우 흐림";break;
          
          //
          case "smoke":weatherMainKR="안개";break;
          case "haze":weatherMainKR="실안개";break;
          case "Sand/Dust Whirls":weatherMainKR="모래바람";break;
          case "Fog":weatherMainKR="안개";break;
          //
          case "light snow":weatherMainKR="적은 눈";break;
          
          case "heavy snow":weatherMainKR="많은 눈";break;
          case "sleet":weatherMainKR="진눈깨비";break;
          case "shower snow":weatherMainKR="싸락 눈";break;
          //
          case "light rain":weatherMainKR="적은 비 ";break;
          
          case "heavy intensity rain":weatherMainKR="강한 비";break;
          case "very heavy rain":weatherMainKR="많은 비";break;
          case "extreme rain":weatherMainKR="폭우";break;
          case "freezing rain":weatherMainKR="어는 비";break;
          case "light intensity shower rain":weatherMainKR="약한 소나기";break;
          case "shower rain":weatherMainKR="소나기";break;
          case "heavy intensity shower rain":weatherMainKR="강한 소나기";break;
          
          case "light intensity drizzle":weatherMainKR="약한 이슬비";break;
          //
          case "heavy intensity drizzle":weatherMainKR="강한 이슬비";break;
          case "light intensity drizzle rain":weatherMainKR="약한 이슬비";break;
          case "drizzle rain":weatherMainKR="이슬비";break;
          case "heavy intensity drizzle rain":weatherMainKR="강한 이슬비";break;
          case "shower drizzle":weatherMainKR="소나기";break;
          
          case "thunderstorm with light rain":weatherMainKR="번개 및 약한 비";break;
          case "thunderstorm with rain":weatherMainKR="번개 및 비";break;
          case "thunderstorm with heavy rain":weatherMainKR="번개 및 강한 비";break;
          case "light thunderstorm":weatherMainKR="약한 번개";break;
          case "thunderstorm":weatherMainKR="번개";break;
          case "heavy thunderstorm":weatherMainKR="강한 번개";break;
          case "ragged thunderstorm":weatherMainKR="간간히 번개";break;
          case "thunderstorm with light drizzle":weatherMainKR="번개 및 약한 이슬비";break;
          case "thunderstorm with drizzle":weatherMainKR="번개 및 이슬비";break;
          case "thunderstorm with heavy drizzle":weatherMainKR="번개 및 강한 이슬비";break;
          
          case "tornado":weatherMainKR="토네이도";break;
          case "tropical storm":weatherMainKR="태풍";break;
          case "hurricane":weatherMainKR="허리케인";break;
          case "cold":weatherMainKR="한파";break;
          case "hot":weatherMainKR="폭염";break;
          case "windy":weatherMainKR="바람";break;
          case "hail":weatherMainKR="우박";break;

          default:weatherMainKR="unknown";
        };
        
        
        var weatherTemp = Math.round((data.main.temp-273)*10)/10.0;
        
        console.log(weatherData);
        
        $("img").attr("src","http://api.openweathermap.org/img/w/" + weatherIcon + ".png").appendTo( "#weatherIcon" );
        $("<a>"+ weatherMainKR + "&nbsp;" + weatherTemp + "&deg;</p>").appendTo("#weahterNotice");
    });
};