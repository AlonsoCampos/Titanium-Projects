var win = Ti.UI.currentWindow;
var desc = win.desc;
var titulo = win.info;
var descripcion = win.desc;
var fecha = win.fecha;
var hora ="10:00 am";
var costo = win.costo;
var lugar = win.lugar;

var Titulo = Titanium.UI.createLabel({
	text:titulo,
	width:"auto",
	height:"auto",
	top:240,
	textAlign:"center"
});

var Descripcion = Titanium.UI.createLabel({
	text:descripcion,
	width:"auto",
	height:"auto",
	top:270,
});


var Fecha = Titanium.UI.createLabel({
	text:fecha,
	width:"auto",
	height:"auto",
	top:300,
	textAlign:"center"
});
var Hora = Titanium.UI.createLabel({
	text:hora,
	width:"auto",
	height:"auto",
	top:340,
	textAlign:"center"
});
var Costo = Titanium.UI.createLabel({
	text:costo,
	width:"auto",
	height:"auto",
	top:360,
	textAlign:"center"
});

var Lugar = Titanium.UI.createLabel({
	text:lugar,
	width:"auto",
	height:"auto",
	top:380,
	textAlign:"center"
});





win.add(Titulo);
win.add(Descripcion);
win.add(Fecha);
win.add(Hora);
win.add(Costo);
win.add(Lugar);
