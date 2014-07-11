function ventanaListar(bd){
    if(bd === undefined) var bd = Ti.Database.open('baseDeDatos');
    
    var ventanaEditar = require('ventanaEditar');
    
	var self = Ti.UI.createWindow({
		backgroundColor:'white'
	});
		
	var botonCerrar = Ti.UI.createButton({
		title: 'Cerrar',
		top: 25,
		right: 15
	});
	
	botonCerrar.addEventListener('click',function(){
		self.close();
	});
		
	var tabla = Ti.UI.createTableView({
		editable:true
	});
	
	tabla.addEventListener('delete',function(e){
		bd.execute('DELETE FROM entradas WHERE id='+e.source.id+';');
		alert("Entrada id: "+e.source.id+" borrada.");
	});
	
	tabla.addEventListener('click',function(e){
		ventanaEditar(e.source.id,bd).open();
		self.close();
	});
	
	var entradas = bd.execute('SELECT id,nombre,apellido FROM entradas;');
	while (entradas.isValidRow())
	{
	  tabla.appendRow(Ti.UI.createTableViewRow({
	  	title: entradas.fieldByName('nombre')+" "+entradas.fieldByName('apellido'),
	  	id: entradas.fieldByName('id')
	  }));
	  entradas.next();
	}
	entradas.close();
	
	self.add(tabla);
	self.add(botonCerrar);
	
	return self;
}
module.exports = ventanaListar;