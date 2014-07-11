var win = Ti.UI.createWindow({backgroundColor: 'white'});

var fb = require('facebook');
fb.appid = "1423658011243570";
fb.permissions =  ['publish_stream', 'read_stream','user_birthday','email'];

fb.addEventListener('login', function(e) {
    if (e.success) {
        alert('Logged in');
        var fbuid = Ti.Facebook.getUid();
    }
});
fb.addEventListener('logout', function(e) {
    alert('Logged out');
});
win.add(fb.createLoginButton({
    top : 50,
    style : fb.BUTTON_STYLE_WIDE
}));
win.open();