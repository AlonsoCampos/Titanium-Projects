var currentWin = Ti.UI.currentWindow;

var nombre = Ti.UI.createTextField({
	color:'#336699',
	top:70,
	left:10,
	width:300,
	height:40,
	hintText:'Color',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

currentWin.add(nombre);

var btn = Ti.UI.createButton({
	title:'Insert Record',
	top:130,
	width:130,
	height:35,
	borderRadius:1,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});
currentWin.add(btn);


var request = Ti.Network.createHTTPClient();
request.onload = function()
{
	if (this.responseText == "Insert failed")
	{
		btn.enabled = true;
		btn.opacity = 1;
		alert(this.responseText);
	}
	else
	{
		var alertDialog = Ti.UI.createAlertDialog({
		    title: 'Alert',
		    message: this.responseText,
		    buttonNames: ['OK']
		});
		alertDialog.show();
		alertDialog.addEventListener('click',function(e)
		{
			currentWin.tabGroup.setActiveTab(2);
		});
	}
};

btn.addEventListener('click',function(e)
{
	if (nombre.value != ''){

		request.open("POST","http://alonsocampos.net46.net/insert.php");
			var params = {
				nombre: nombre.value
			};
			request.send(params);
	} else {
			alert("Please enter a color.");
	};
});