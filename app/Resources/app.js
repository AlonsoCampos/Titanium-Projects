var ventana = Titanium.UI.createWindow({
    title:'Un Saludo',
    backgroundColor:'#fff'
});
var boton = Titanium.UI.createButton({
    title: 'Hola :)',
    top:10,
    left: 10,
    width: 200,
    height: 100
});
 
ventana.add(boton);
ventana.open();