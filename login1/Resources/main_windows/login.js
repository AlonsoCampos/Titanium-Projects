var win = Titanium.UI.currentWindow;

var email = Titanium.UI.createTextField({
	color:'#336699',
	top:10,
	left:10,
	width:300,
	height:40,
	hintText:'EMAIL',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
win.add(email);

var password = Titanium.UI.createTextField({
	color:'#336699',
	top:60,
	left:10,
	width:300,
	height:40,
	hintText:'Password',
	passwordMask:true,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
win.add(password);

var loginBtn = Titanium.UI.createButton({
	title:'Login',
	top:110,
	width:90,
	height:35,
	borderRadius:1,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});
win.add(loginBtn);

/*
* Login Event Handling
*/


var loginReq = Titanium.Network.createHTTPClient();
loginReq.onload = function()
{
	var json = this.responseText;
	var response = JSON.parse(json);
	if (response.logged == true)
	{
		alert("Welcome " + response.email + ". Your email is: " + response.password);
	}
	else
	{
		alert(response.message);
	}
};

loginReq.onerror = function()
{
	alert("Network error");
};

/*
* Login Button Click Event
*/

loginBtn.addEventListener('click',function(e)
{
	if (email.value != '' && password.value != '')
	{
		loginReq.open("POST","http://alonsocampos.net46.net/login.php");
		var params = {
			email: email.value,
			password: password.value
		};
		loginReq.send(params);
	}
	else
	{
		alert("Username/Password are required");
	}
});


