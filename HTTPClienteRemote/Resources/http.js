////////////    http.js     ////////////////// 

var win = Ti.UI.currentWindow;
var description = win.desc;
var name = Ti.UI.createTextField({
	color:"#cccc",
	backgoundColor:"black",
	height:35,
	top:10,
	left:"auto",
	width:300
});

var button = Ti.UI.createButton({
	value:"Submit",
	height:"20",
	botton:"10",
	top:"30",
	width:"150",
	backgoundColor:"white"
});

win.add(name);
win.add(button);

button.addEventListener('click', function(e){

	var xhr = Ti.Network.createHTTPClient();
	var url = "http://alonsocampos.net46.net/table.php";
	xhr.open("GET",url);

	xhr.onload = function(){
		TI.API.info("Success"+this.status);

	};
xhr.send();
alert("Your name has been submited");
name.value ="";
});
