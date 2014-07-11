function ventanaEditar(id,bd){
    if(bd === undefined) var bd = Ti.Database.open('baseDeDatos');
    	var entrada = bd.execute('SELECT id,nombre,apellido FROM entradas WHERE id='+id+';');
 
    var ventanaListar = require('ventanaListar');
    
	var self = Ti.UI.createWindow({
		backgroundColor:'white'
	});
		
	var botonCerrar = Ti.UI.createButton({
		title: 'Cerrar',
		top: 25,
		right: 15
	});
	
	botonCerrar.addEventListener('click',function(){
		ventanaListar(bd).open();
		self.close();
	});
	
	self.add(botonCerrar);
	
	var entradaTexto = Ti.UI.createTextField({
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  top: 90, left: 35,
	  width: 250, height: 60,
	  value:entrada.fieldByName('nombre')
	});
 
	var entradaApellido = Ti.UI.createTextField({
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  top: 160, left: 35,
	  width: 250, height: 60,
	  value:entrada.fieldByName('apellido')
	});
	
	var enviarTexto = Ti.UI.createButton({
		title:'Actualizar entrada',
		top:225
	});
	
	enviarTexto.addEventListener('click',function(){
		if(entradaTexto.value != '' && entradaApellido.value != ''){
			bd.execute('UPDATE entradas SET nombre=?, apellido=? WHERE id=?;',entradaTexto.value,entradaApellido.value,id);
			alert('Dato actualizado: "'+entradaTexto.value+' '+entradaApellido.value+'".');
			ventanaListar(bd).open();
			self.close();
		}else{
			alert('Debes llenar al menos un campo.');
		}
	});
 
	self.add(entradaTexto);
	self.add(entradaApellido);
	self.add(enviarTexto);
	return self;
}
module.exports = ventanaEditar;