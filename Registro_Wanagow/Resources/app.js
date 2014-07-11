/*Recursos en Internet*/
/* http://bit.ly/SVTUG1212-code
 http://github.com/appcelerator/alloy
 http://www.slideshare.net/TonyLukasavage/alloy-codestrong-2012-15179451
 http://www.slideshare.net/ricardoalcocer/aprendiendo-appcelerator-alloy
 http://docs.appcelerator.com/titanium/latest/#!/guide/Alloy_XML_Markup
 https://github.com/appcelerator/Codestrong
 http://www.slideshare.net/appcelerator/xavier-lacot-abstracting-databases-access-in-titanium-mobile
*/


// Creacion de la ventana 
//
var win = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'black',
    exitOnClose:true
});
//Creacion de cabecera
var registroLabel = Titanium.UI.createLabel({
	text:"Registro"
});

var cabecera = Titanium.UI.createView({
	backgroundColor:"#F4CE00",
	height:"10%",
	widht:50,
	top:20
});

//Creacion de contenido
var contenido = Titanium.UI.createView({
	backgroundColor:"#F4CE00",
	height:"75%",
	widht:50,
	top: "10%"
});
//Creacion de Boton de Facebook
var facebokBoton = Titanium.UI.createButton({
	title: 'Login with Facebook',
	backgroundColor:"#507DA0",
    width: 250,
    height: 50,
    top:10
    
});


//Label de datos de cuenta
var datoscuentaLabel = Titanium.UI.createLabel({
	text:"Datos de cuenta",
	top:70
});
//Creacion de TextField Email
var emailInput = Titanium.UI.createTextField({
  	Color: 'white',
  	hintText : 'Email',
  	width: 300, height: 30,
  	borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    top:120
});

//Creacion de TextField Password
var passInput = Titanium.UI.createTextField({
  	Color: 'white',
  	hintText : 'Contraseña',
  	width: 300, height: 30,
  	borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    top:180
});
//Creacion de TextField Confirmar Password
var confirmpassInput = Titanium.UI.createTextField({
  	Color: 'white',
  	hintText : 'Confirmar Contraseña',
  	width: 300, height: 30,
  	borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    top:240
});

//Label de datos de usuario
var datosusuarioaLabel = Titanium.UI.createLabel({
	text:"Datos de usuario",
	top:300
});
//Creacion de TextField nombre
var nombreInput = Titanium.UI.createTextField({
  	Color: 'white',
  	hintText : 'Nombre',
  	width: 300, height: 30,
  	borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    top:340
});
//Creacion de TextFiel apellido
var apellidoInput = Titanium.UI.createTextField({
	Color:"white",
	hintText : 'Apellidos',
	width:300, height:30,
    borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	top:400
});
//Creacion de boton Fecha de Nacimiento
var fechaBoton = Titanium.UI.createButton({
	title: 'Fecha de Nacimiento',
	Color:"yellow",
    width: 250,
    height: 50,
    top:440
});
//Creacion de Boton de Eleccion 
var botonEleccion = Titanium.UI.createButtonBar({
    labels:['Mujer', 'Hombre'],
    backgroundColor:'#336699',
    top:50,
    style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
    height:25,
    width:200,
    value:true,
    top:500
});
//Creacion de Boton de Siguiente 
var botonSiguiente = Titanium.UI.createButton({
    title:"Siguiente",
    backgroundColor:'#336699',
    top:50,
    height:25,
    width:200,
    rigth:100,
    top:530
});


//Conexion a la base de datos
DataBase=require('/ui/DataBase');

botonSiguiente.addEventListener('click', function(e) {
  DataBase("create",null);
});




//Agregado de cabecera
cabecera.add(registroLabel);
//Agregado del contenido
contenido.add(facebokBoton);
contenido.add(datoscuentaLabel);
contenido.add(emailInput);
contenido.add(passInput);
contenido.add(confirmpassInput);
contenido.add(datosusuarioaLabel);
contenido.add(nombreInput);
contenido.add(apellidoInput);
contenido.add(fechaBoton);
contenido.add(botonEleccion);
contenido.add(botonSiguiente);
//Agregado de la ventana
win.add(cabecera);
win.add(contenido);
win.open();








