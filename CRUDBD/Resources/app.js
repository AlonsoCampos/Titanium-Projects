	var bd = Ti.Database.open('baseDeDatosCompleta');
	bd.file.setRemoteBackup(false);
	
	bd.execute('CREATE TABLE IF NOT EXISTS entradas(id INTEGER PRIMARY KEY, nombre TEXT, apellido TEXT);');
	
	var ventanaInicio = require('ventanaInicio');
	
	ventanaInicio(bd).open();
