 
       function insertData(){ 
              //if there is something in the textbox 
              if($.inserTxtF.value != "" && $.inserTxtF	.value != null){ 
                     var request = Ti.Network.createHTTPClient({ 
                  onload:alert("Your chore has been submitted"), 
                  onerror: function(e){ 
                      Ti.API.debug(e.error); 
                      alert('There was an error during the conexion'); 
                  }, 
                  timeout:1000, 
                     });    
//Request the data from the web service, Here you have to change it for your local ip 
                     request.open("POST","http://alonsocampos.net46.net/insert.php"); 
                     var params = ({"nombre": $.inserTxtF.value,});  
                  request.send(params); 
              } 
              else{ 
                     alert("Please write something in the textbox"); 
                     
              }               
              $.inserTxtF.value = "";        
       };   
       
       
/*Esta funcion permite crear la tabla de agregado
 La primera linea permite abrir la base de datos
 La segunda linea permite crear la tabla nombre si no existe en la base de datos
 La tercera linea permite agregar un registro a la base de datos
 mediante una sentencia SQL $.id.value significa que toma el valor del id asignado
 La Cuarta linea muestra una alerta de inserccion correcta */
function insertRow(dbData) {
	var bd = Ti.Database.open('base');
	bd.file.setRemoteBackup(false);
	bd.execute('CREATE TABLE IF NOT EXISTS nombre (id INTEGER PRIMARY KEY, nombre TEXT);');
	bd.execute('INSERT INTO nombre (id,nombre) VALUES (?,?)',$.id.value,$.nombre.value);	
	alert("Agregado");
	
}
/*Esta funcion permite evaluar si los campos no estan vacios y despues ejecuta la funcion insertRow
 * en caso de que no manda una alerta
 */
function add () {
  if ($.id.value != '' && $.nombre.value) {
		var dbData = {
			id: $.id.value,
			nombre: $.nombre.value
		};
		insertRow(dbData);
	} else {
		alert("LLene los campos faltantes");
	}
}
/*Esta funcion permite hacer la eliminacion mediante una sentencia SQL y 
 envia un mensaje de alerta cuando se ha eliminado*/
function deleteRow (id) {
	var bd = Ti.Database.open("base");
	bd.execute("Delete from nombre where id=?",$.id.value);
	alert("Eliminado");
}
/*Esta funcion permite hacer una validacion previa antes de poder eliminar*/
function del () {
	if($.id.value!=''){
		var dbData = {
			id: $.id.value
		};
		deleteRow(dbData);
	}else {
		alert("LLene los campos faltantes");
	}
}

/*Esta funcion permite hacer la modificacion mediante una sentencia SQL y 
 envia un mensaje de alerta cuando se ha modificado*/
function updateRow (data) {
	var bd = Ti.Database.open("base");				
	bd.execute("UPDATE nombre SET nombre = ? WHERE id=?",$.nombre.value,$.id.value);
	alert("Actualizado");
}
/*Esta funcion permite hacer una validacion previa antes de poder modificar*/
function up () {
	if($.id.value!='' && $.nombre.value!=''){
		var dbData = {
			nombre: $.nombre.value,
			id: $.id.value
		};
		updateRow(dbData);
	}else {
		alert("LLene los campos faltantes");
	}
}

function win() {
    var window2 = Alloy.createController('remota').getView();
    window2.open();
}
//$.index.open();