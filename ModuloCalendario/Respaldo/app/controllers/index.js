// 
//  index.js
//  WanagoSistema
//  
//  Created by Alonso Campos on 2014-05-19.
//  Copyright 2014 Alonso Campos. All rights reserved.
// 

/*
 * Esta funcion valida si es valido el 
 * correo electronico                                                                 
 */
function checkemail(emailAddress)
{
	var testresults;
    var str = emailAddress;
    var filter = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (filter.test(str))
    {
        testresults = true;
    }
    else
    {
        testresults = false;
    }
    return (testresults);
};

/* Este metodo esta conectado con un archivo de PHP 
* Se crea una peticion HTTPClient y se utilizan los metodos
* onload y onerror
* Onload se encarga escuchar el mensaje enviado por el archivo de PHP
* Si este mensaje envia un true entonces procedera a enviar una alerta 
* de bienvenida y permitira el acceso a la siguiente pantalla
* En caso contrario enviara un mensae de error
* Onerror enviara un mensaje de error de conexion a internet
* 
* Despues se evalua si los campos solicitados estan llenos
* se envia al servidor por medio de POST los valores introducidos 
* mediante un array  y se envian
* En caso contrario se manda una alerta de error
*/
function login () {
	var loginReq = Titanium.Network.createHTTPClient({
		onload : function()
		{
			var json = this.responseText;
			var response = JSON.parse(json);
			var json = json.nombre;
			if (response.logged == true)
			{
				var alertDialog = Ti.UI.createAlertDialog({
			        title: 'Acceso Concedido',
			        message: 'Bienvenido "'+$.email.value+'"',
			        buttonNames: ['OK']
			    });
    			alertDialog.show();
    
				$.email.blur();
    			$.password.blur();
    			//Aqui se crea un array para enviar la informacion a la
    			//siguiente vista para esto deve de existir la misma variable
    			//en la ventana que se va a utilizar
    			var args = 
    			{
    				email: response.email, //response viene de la respuesta del servidor
    				password:response.password,
    				nombre:response.nombre,
    				apellidos:response.apellidos,
    				
    				cultural:response.cultural,//remoto en el archivo de php
    				ballet:response.ballet,
    				
    				teatro:response.teatro,
    				comedia:response.comedia,
    				drama:response.drama,
    				infantilC:response.infantilC,
    				musical:response.musical,
    				otrosT:response.otrosT,
    				
    				circo:response.circo,
    				
    				exposicion:response.exposicion,
    				fotografia:response.fotografia,
    				escultura:response.escultura,
    				pintura:response.pintura,
    				libros:response.libros,
    				otrosE:response.otrosE,
    				
    				cinearte:response.cinearte,
    				
    				musica:response.musica,
    				clasica:response.clasica,
    				instrumental:response.instrumental,
    				folklorepopular:response.folklorepopular,
    				
    				turistico:response.turistico,
    				ferias:response.ferias,
    				carnavales:response.carnavales,
    				peregrinaciones:response.peregrinaciones,
    				fiestasReligiosasIndigenas:response.fiestasReligiosasIndigenas,
    				otrosTuristica:response.otrosTuristica,
    				
    				entretenimiento:response.entretenimiento,
    				conciertos:response.conciertos,
    				electronica:response.electronica,
    				jazzblues:response.jazzblues,
    				trova:response.trova,
    				rock:response.rock,
    				alternativa:response.alternativa,
    				gruperanortena:response.gruperanortena,
    				infantilE:response.infantilE,
    				hiphop:response.hiphop,
    				rancheras:response.rancheras,
    				pop:response.pop,
    				metal:response.metal,
    				reague:response.reague,
    				reggeatton:response.reggeatton,
    				baladasboleros:response.baladasboleros,
    				salsacumbia:response.salsacumbia,
    				cristiana:response.cristiana,
    				
    				deportes:response.deportes,
    				futbol:response.futbol,
    				basquetball:response.basquetball,
    				tenis:response.tenis,
    				beisball:response.beisball,
    				volleyball:response.volleyball,
    				torneos:response.torneos,
    				maratones:response.maratones,
    				futbolAmericano:response.futbolAmericano,
    				artesMarciales:response.artesMarciales,
    				box:response.box,
    				luchaLibre:response.luchaLibre,
    				atletismo:response.atletismo,
    				toros:response.toros,
    				autosmotos:response.autosmotos,
    				
    				baresantros:response.baresantros,
    				inaguracion:response.inaguracion,
    				promocion:response.promocion,
    				show:response.show,
    				fiestasTematicas:response.fiestasTematicas,
    				bienvenida:response.bienvenida,
    				
    				academica:response.academica,
    				areaestudio:response.areaestudio,
    				congresos:response.congresos,
    				convenciones:response.convenciones,
    				seminarios:response.seminarios,
    				talleres:response.talleres,
    				diplomados:response.diplomados,
    				cursos:response.cursos,
    				conferencias:response.conferencias,
    				expos:response.expos
    				
    			};
    			/*
    			 * args se pasa por parametros a la siguiente
    			 * vista para su uso
    			 */
				Alloy.createController('Evento',args).getView().open();
				
			}else{
				alert("Datos Invalidos");
			}
		},
			onerror : function()
		{
			alert("Error de Conexion");
		},
		//timeout:6000
	});
  /*
   * Se valida si los valores de email y passowrd no estan vacios
   * entonces despues se valida si el correo electronico que esta 
   * es valido si es correcto se envia los parametros a el servidor
   * para que vea si ya esta registrado o no
   * y permita el acceso al usuario
   */	
  if ($.email.value != '' && $.password.value != '')
	{
		if (!checkemail($.email.value))
            {
                alert("Por favor introdusca un correo electronico valido");
            }
            else
            {
				loginReq.open("POST","http://localhost/wanagow/segundaversion/login.php");
				var params = {
					email: $.email.value,
					password: $.password.value
				};
				loginReq.send(params);
			}
	}
	else
	{
		alert("Ingresa un contraseña y/o usuario valido");
	}
}




		
function btn_2(e){
	var w= Alloy.createController('Registro').getView();
	w.open();
	
}
function btn_1(){
var W= Alloy.createController('Evento').getView();
W.open();

	
	
}
$.index.open();
