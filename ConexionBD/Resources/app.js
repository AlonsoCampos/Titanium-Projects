var win = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'black',
    exitOnClose:true
});
var contenido = Titanium.UI.createView({
	height:"75%",
	widht:50,
	top: "10%"
});
//Creacion de Boton de Facebook
var facebokBoton = Titanium.UI.createButton({
	title: 'Login with Facebook',
    width: 250,
    height: 50,
    top:10
    
});

var db1 = Ti.Database.install('ui/wanago.db', 'wanago');
function addUsuario () {
  var addUser = Titanium.Database.open('wanago');
  //addUser.execute('INSERT INTO cliente VALUES ("'+nombre+'","'+apellido +'","'+fecha+'","'+genero+'","'+email+'","'+password+'")');
  addUser.execute("INSERT INTO Rutas VALUES (16,'Independencia',33)");
  addUser.close();
  alert('INGRESADO');
}
function delRuta () {
  var addUser = Titanium.Database.open('wanago');
  addUser.execute("DELETE FROM Rutas WHERE id_rutas='1'");
  addUser.close();
  alert('ELIMINADO');
}
facebokBoton.addEventListener('click',function(){
	//addUsuario('ejemplo@hotmail.com','123','Alonso','Campos','12/12/12',true);
	addUsuario();
	delRuta();
});

win.add(facebokBoton);
win.add(contenido);
win.open();
