function ventanaAgregar(bd){
    if(bd === undefined) var bd = Ti.Database.open('baseDeDatos');
    
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
	
	self.add(botonCerrar);
	
	var entradaTexto = Ti.UI.createTextField({
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  top: 90, left: 35,
	  width: 250, height: 60
	});
 
	var entradaApellido = Ti.UI.createTextField({
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  top: 160, left: 35,
	  width: 250, height: 60
	});
	
	var enviarTexto = Ti.UI.createButton({
		title:'Agregar entrada',
		top:225
	});
	
	enviarTexto.addEventListener('click',function(){
		if(entradaTexto.value != '' && entradaApellido.value != ''){
			bd.execute('INSERT INTO entradas (nombre,apellido) VALUES (?,?)', entradaTexto.value,entradaApellido.value);
			alert('Dato agregado: "'+entradaTexto.value+' '+entradaApellido.value+'".');
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
module.exports = ventanaAgregar;