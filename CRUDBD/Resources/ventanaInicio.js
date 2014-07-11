function ventanaInicio(bd){
	if(bd === undefined) var bd = Ti.Database.open('baseDeDatos');
		
	var ventanaAgregar = require('ventanaAgregar');
	var ventanaListar = require('ventanaListar');
	
	var self = Ti.UI.createWindow({backgroundColor:'white'});
	
	var botonCrear = Ti.UI.createButton({
		title:'Agregar registro',
		top: 75
	});
	var botonListar = Ti.UI.createButton({
		title:'Ver registros',
		top: 175
	});
	
	self.add(botonCrear);
	self.add(botonListar);
	
	botonListar.addEventListener('click',function(e){
		ventanaListar(bd).open();
	});
	
	botonCrear.addEventListener('click',function(e){
		ventanaAgregar(bd).open();
	});
 
	return self;
}
module.exports = ventanaInicio;