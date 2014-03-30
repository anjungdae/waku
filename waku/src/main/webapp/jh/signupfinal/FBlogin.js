document.addEventListener('deviceready', function() {
  FB.init({
    appId: '547517602021906', // App-Id
    status: true, // 로그인 상태를 확인
    cookie: true, // 쿠키허용
    nativeInterface: CDV.FB,
    useCachedDialogs: false,
    xfbml: true // parse XFBML
  });
  //window.plugins.toast.showShortBottom("initialized");
  FB.getLoginStatus(handleStatusChange);
  FB.Event.subscribe('auth.login', function(response) {
    //window.plugins.toast.showShortBottom("login");
    //document.location.reload();
  });
  FB.Event.subscribe('auth.logout', function(response) {
    //window.plugins.toast.showShortBottom("logout");
    document.location.reload();
  });
  FB.Event.subscribe('auth.statusChange', handleStatusChange);
});
// function logout() {
//   FB.logout(function(response) {
//     window.location.reload();
//   });
// }
function promptLogin() {
    FB.login(null, {scope: 'email'});
  };
function handleStatusChange(response) {
  //window.plugins.toast.showShortTop(response.status);
  if (response.status === 'connected') {
    //window.plugins.toast.showShortCenter('connected');
    FB.api('/me', function(user) {
      if (user) {
        var image = document.getElementById('image');
        image.src = 'http://graph.facebook.com/' + user.id + '/picture';
        var name = document.getElementById('name');
        name.innerHTML = user.name
        var id = document.getElementById('id');
        id.innerHTML = user.id;
      }
    });
  } else if (response.status === 'not_authorized') {
    //window.plugins.toast.showShortCenter("not authorized");
  } else {
    //window.plugins.toast.showShortCenter("unknown");
  }
};