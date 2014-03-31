var walkCount = 0;
var SHAKE_THRESHOLD_MIN = 2;
var SHAKE_THRESHOLD_MAX = 12;
var x,y,z,stamp = 0;
var lastX,lastY,lastZ,lastStamp = 0;
var lastStepTime = new Date().getTime();
var speed = 0;
var time = 0;
var cal = 0;
var spentTime = 0;
var walkingFlag = false;
var stopWatchID = null;
//var updateInterval = 1000;

//window.plugins.toast.showShortTop("pace area");

document.addEventListener("deviceready", onDeviceReady, false);

//setInterval(function(){spentTime += updateInterval;},updateInterval);

var watchAccelerID = null;

function onDeviceReady() {
	//window.plugins.toast.showShortCenter("device ready");
	watchAccelerID = navigator.accelerometer.watchAcceleration(onAccelerSuccess, onError, { frequency: 200 });
	watchPositionID = navigator.geolocation.watchPosition(onPosSuccess, onError,{ maximumAge: 3000, timeout: 10000, enableHighAccuracy: true });
	//watchPositionID = navigator.geolocation.watchPosition(onSuccess2, onError,{ maximumAge: 3000, timeout: 10000, enableHighAccuracy: true });
}
function startWalking () {
	stopWatchID = setInterval (function() {spentTime += 200;},200);
}
function stopWalking () {
	window.clearInterval(stopWatchID);
}
function watchWalk (acceleration) {
	x = acceleration.x;
  y = acceleration.y;
  z = acceleration.z;
  stamp = acceleration.timestamp;
  speed = Math.abs(x + y + z - lastX - lastY - lastZ);
  if(speed > SHAKE_THRESHOLD_MIN && speed < SHAKE_THRESHOLD_MAX && stamp-lastStepTime > 400) {
  	walkCount += 1;
  	lastStepTime = stamp;
  	if(walkingFlag == false) {
  		walkingFlag = true;
  		startWalking();
  	}
  }
  if(stamp-lastStepTime > 1000) {
  	walkingFlag = false;
  	stopWalking();
  }
}
function onAccelerSuccess(acceleration) {
	watchWalk(acceleration);
  var accelerWalk = document.getElementById('accelerWalk');
  var accelerData = document.getElementById('accelerData');
  var html = '';
  html += "<td colspan='3'><h1>" + walkCount + "</h1></td>";
  accelerWalk.innerHTML = html;
  html = '';
  // 운동한 시간
  html += "<td><h1>" + (spentTime / 1000).toFixed(0) + "</h1></td>" +
  // 소모 칼로리 : 운동강도(METs) * 체중 * 시간 * 1.05
  "<td><h1>" + (4 * 70 * (spentTime/1000/60/60) * 1.05).toFixed(2) + "</h1></td>" +
  // 거리 : 보폭 * 걸음수
  "<td><h1>" + (70 * walkCount / 100).toFixed(0) + "</h1></td>";
  accelerData.innerHTML = html;
  lastX = acceleration.x;
  lastY = acceleration.y;
  lastZ = acceleration.z;
  lastStamp = acceleration.timestamp;
}

function onError(error) {
	alert('code: '    + error.code    + '\n' +
			'message: ' + error.message + '\n');
}
