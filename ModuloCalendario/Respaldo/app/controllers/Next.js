
// 
//  Next.js
//  WanagoSistema
//  
//  Created by Alonso Campos on 2014-05-19.
//  Copyright 2014 Alonso Campos. All rights reserved.
// 

var params = arguments[0] || {};


var sendit = Ti.Network.createHTTPClient({ 
    onerror: function(e){ 
    Ti.API.debug(e.error); 
           alert('La conexion esta tardando demaciado intente acceder nuevamente'); 
    }, 
    timeout:3000, 
});       
      /*
           * Se utiliza el archivo php para obtener todos los registros del 
           * archivo php
           * Debido a que no se van a enviar nada de informacion sino solo
           * recibir informacion entonces dejamos sendit.send() de esta manera
           */               
          sendit.open('GET', 'http://localhost/wanagow/preferencia.php'); 
          sendit.send();
          /*
           * Depues de que se ha cargado la informacion se declaran 3 arrays vacios
           * para que capturen la siguiente informacion en cada TABLA
           * Tabla Academica       dataArray
           * Tabla Cultural        dataArray2
           * Tabla Entretenimiento dataArray3
           */ 
          sendit.onload = function(){ 
                 var json = JSON.parse(this.responseText); 
                 var json = json.nombre; 
                 if(json.length == 0){ 
                        tableView.headerTitle = "No hay informacion disponible"; 
                 }                      
                 //Emptying the data to refresh the view 
                 dataArray =  [];
                 dataArray2 = [];
                 dataArray3 = [];
                 //Se utiliza un scroll para poder visualizar el contenido de las 3 tablas
                 var scrollView = Ti.UI.createScrollView({
            //contentWidth: 'auto',
            contentHeight: 'auto',
            showVerticalScrollIndicator: true,
            //showHorizontalScrollIndicator: true,
            top:280,
            height:'95%',
            width: 600
          });
        //Se utilica una vista para el fondo de las tablas  
                 var view = Ti.UI.createView({
            backgroundColor:'c5ccd4',
            borderRadius: 10,
            top:0,
            height:3600,
            width: 500
        });
        //Se agrega la view a el scroll
        scrollView.add(view);
          
                     //Utilizando el objeto JSON se recorre cada elemento
                     for( var i=0; i<json.length; i++){ 
                      
                      var row = Ti.UI.createTableViewRow({              
                selectedBackgroundColor:'yellow',
                height:40
              });
            /*
             * Debido a que el primer elemento de la fila es un radiobutton 
             * se crea una condicion para poder agregarlo si se cumple agregara el radio
             * en caso contrario agregara el texto y un boton
             */
                if(json[i].tipo=="Academico" && json[i].detalles==""){
                  var basicSwitch = Ti.UI.createSwitch({
                  value:true,
                  right:0
                });
                row.add(basicSwitch);
                var labelUserName = Ti.UI.createLabel({
                  color:'black',
                  font:{fontFamily:'Arial', fontSize:16, fontWeight:'bold'},
                  text:'  ' + json[i].tipo,
                  objName: 'nombre',
                  left:0, top: 6,
                  width:360, height: 30
                  });
                  row.add(labelUserName);
                }else{
                  /*
                   * Cuando no se cumble la condicion se crea un boton con 2 condicios
                   * cuando esta on() o esta en off() estas permiten capturar la preferencia del usuario
                   */
                  var labelUserName = Ti.UI.createLabel({
                  color:'black',
                  font:{fontFamily:'Arial', fontSize:16, fontWeight:'bold'},
                  text:'*' + json[i].detalles,
                  objName: 'nombre',
                  left:0, top: 6,
                  width:360, height: 30
                  });
                  row.add(labelUserName);
                  
                  var button = Ti.UI.createButton({
                    backgroundImage: 'img/off.png',
                    //backgroundSelectedImage:'img/on.png',
                    value:false,
                    top: 3,
                    width: 37,
                    height: 35,
                    right:0
                });
                  button.on = function() {
                    this.backgroundColor = '#159902';
                    this.value = true;
                    this.backgroundImage ="img/on.png";
                   
                };
               
                button.off = function() {
                    this.backgroundColor = '#aaa';
                    this.value = false;
                    this.backgroundImage ="img/off.png";
                    
                };
               
                button.addEventListener('click', function(e) {
                    if(false == e.source.value) {
                        e.source.on();
                        
                    } else {
                        e.source.off();
                         
                    }
                });
                  row.add(button);
                }
                
                  //Por ultimo solo se agregara al arreglo si cumple la condicion y los demas seran desechados
                if (json[i].tipo=="Academica" || json[i].tipo=="Academico" || json[i].tipo =="Area de Estudio") {
                            dataArray.push(row);      
                          };
                      
                      
                    
                     };
                     /*Despues todo lo contenido de dataArray es asignado a la tabla
                      * y mostrado en la view de la misma forma trabajan los 2 siguientes 
                      * buncles for
                     */
                     $.tableViewAcademica.setData(dataArray);
                     view.add($.tableViewAcademica);
                   
                     for( var i=0; i<json.length; i++){ 
                      

                      var row = Ti.UI.createTableViewRow({              
                selectedBackgroundColor:'yellow',
                height:40
              });
              
              
                
                
              
                
                
                if(json[i].tipo=="Cultural | Turistica" && json[i].detalles==""){
                  var basicSwitch = Ti.UI.createSwitch({
                  value:true,
                  right:0
                });
                row.add(basicSwitch);
                var labelUserName = Ti.UI.createLabel({
                  color:'black',
                  font:{fontFamily:'Arial', fontSize:16, fontWeight:'bold'},
                  text:'  ' + json[i].tipo,
                  objName: 'nombre',
                  left:0, top: 6,
                  width:360, height: 30
                  });
                  row.add(labelUserName);
                }else{
                  var button = Ti.UI.createButton({
                  backgroundImage: 'img/off.png',
                  backgroundSelectedImage:'img/on.png',
                  value:false,
                  top: 3,
                  width: 37,
                  height: 35,
                  right:0
              });
                button.on = function() {
                  this.backgroundColor = '#159902';
                  this.value = true;
                  this.backgroundImage ="img/on.png";
                  
              };
             
              button.off = function() {
                  this.backgroundColor = '#aaa';
                  this.value = false;
                  this.backgroundImage ="img/off.png";
                  
              };
             
              button.addEventListener('click', function(e) {
                  if(false == e.source.value) {
                      e.source.on();
                  } else {
                      e.source.off();
                  }
              });
                  row.add(button);
                  if (json[i].detalles=="Comedia" || json[i].detalles=="Drama" || json[i].detalles=="Infantil"
                  || json[i].detalles=="Musical" || json[i].detalles=="Fotografia" || json[i].detalles=="Escultura"
                  || json[i].detalles=="Pintura" || json[i].detalles=="Libros" || json[i].detalles=="Clasica"
                  || json[i].detalles=="Instrumental" || json[i].detalles=="Folklore | Popular" 
                  || json[i].detalles=="Ferias" || json[i].detalles=="Carnavales" || json[i].detalles=="Peregrinaciones"
                  || json[i].detalles=="Fiestas Religiosas | Indigenas" || json[i].detalles=="Otros"
                  || json[i].detalles=="Otras") {
                    var labelUserName = Ti.UI.createLabel({
                    color:'black',
                    font:{fontFamily:'Arial', fontSize:16, fontWeight:'bold'},
                    text:"   - "+json[i].detalles,
                    objName: 'nombre',
                    left:0, top: 6,
                    width:360, height: 30
                    });
                    row.add(labelUserName);
                  }else{
                    var labelUserName = Ti.UI.createLabel({
                    color:'black',
                    font:{fontFamily:'Arial', fontSize:16, fontWeight:'bold'},
                    text:json[i].detalles,
                    objName: 'nombre',
                    left:0, top: 6,
                    width:360, height: 30
                    });
                    row.add(labelUserName);
                  }
                }
                
                if (json[i].tipo=="Cultural" || json[i].tipo=="Cultural | Turistica" || json[i].tipo =="Teatro" || json[i].tipo =="Exposicion"
                || json[i].tipo =="Musica" || json[i].tipo =="Turistico") {
                            dataArray2.push(row);       
                          };
                    
                     };
                     $.tableViewCultural.setData(dataArray2);
                     view.add($.tableViewCultural);
                     
                     for( var i=0; i<json.length; i++){ 
                      
                      
                      
                      var row = Ti.UI.createTableViewRow({              
                selectedBackgroundColor:'yellow',
                height:40
              });
              
                
              
                
                
                if(json[i].tipo=="Entretenimiento" && json[i].detalles==""){
                  var basicSwitch = Ti.UI.createSwitch({
                  value:true,
                  right:0
                });
                row.add(basicSwitch);
                
                var labelUserName = Ti.UI.createLabel({
                  color:'black',
                  font:{fontFamily:'Arial', fontSize:16, fontWeight:'bold'},
                  text:'' + json[i].tipo,
                  objName: 'nombre',
                  left:0, top: 6,
                  width:360, height: 30
                  });
                  row.add(labelUserName);
                }else{
                  var button = Ti.UI.createButton({
                  backgroundImage: 'img/off.png',
                  value:false,
                  top: 3,
                  width: 37,
                  height: 35,
                  right:0
              });
                button.on = function() {
                  this.backgroundColor = '#159902';
                  this.value = true;
                  this.backgroundImage ="img/on.png";
                  
              };
             
              button.off = function() {
                  this.backgroundColor = '#aaa';
                  this.value = false;
                  this.backgroundImage ="img/off.png";
              };
             
              button.addEventListener('click', function(e) {
                  if(false == e.source.value) {
                      e.source.on();
                  } else {
                      e.source.off();
                  }
              });
                  row.add(button);
                  if(json[i].detalles=="Electronica" || json[i].detalles=="Jazz | Blues" 
                  || json[i].detalles=="Trova" || json[i].detalles=="Rock" || json[i].detalles=="Rock"
                  || json[i].detalles=="Alternativa" || json[i].detalles=="Grupera | Norteña"
                  || json[i].detalles=="Infantil" || json[i].detalles=="Hip-Hop" || json[i].detalles=="Ranchera"
                  || json[i].detalles=="Pop" || json[i].detalles=="Metal" || json[i].detalles=="Reague"
                  || json[i].detalles=="Reggeatton" || json[i].detalles=="Baladas | Boleros" 
                  || json[i].detalles=="Salsa | Cumbia" || json[i].detalles=="Cristiana"
                  || json[i].detalles=="Futbol" || json[i].detalles=="Basketball"|| json[i].detalles=="Tenis"
                  || json[i].detalles=="Beisball" || json[i].detalles=="Volleyball" || json[i].detalles=="Torneos"
                  || json[i].detalles=="Maratones" || json[i].detalles=="Autos | Motos" 
                  || json[i].detalles=="Futbol Americano" || json[i].detalles=="Artes Marciales"
                  || json[i].detalles=="Box" || json[i].detalles=="Lucha Libre" || json[i].detalles=="Atletismo"
                  || json[i].detalles=="Toros" || json[i].detalles=="Inaguracion" || json[i].detalles=="Promocion"
                  || json[i].detalles=="Show" || json[i].detalles=="Fiestas Tematicas" || json[i].detalles=="Bienvenida"
                  ){
                    var labelUserName = Ti.UI.createLabel({
                    color:'black',
                    font:{fontFamily:'Arial', fontSize:16, fontWeight:'bold'},
                    text:'  - ' + json[i].detalles,
                    objName: 'nombre',
                    left:5, top: 6,
                    width:360, height: 30
                    });
                    row.add(labelUserName);
                    
                  }else{
                    var labelUserName = Ti.UI.createLabel({
                    color:'black',
                    font:{fontFamily:'Arial', fontSize:16, fontWeight:'bold'},
                    text:'' + json[i].detalles,
                    objName: 'nombre',
                    left:0, top: 6,
                    width:360, height: 30
                    });
                    row.add(labelUserName);
                  
                  }
                  
                }
                if (json[i].tipo=="Entretenimiento" || json[i].tipo =="Conciertos" 
                || json[i].tipo =="Deportes" || json[i].tipo =="Bares Antros") {
                            dataArray3.push(row);       
                          };
                    
                     };
                     $.tableViewEntretenimiento.setData(dataArray3);
                     view.add($.tableViewEntretenimiento);
                     /*
                      * Al finalizar las 3 tablas se genera un boton de guardar en la parte 
                      * final el cual es agregado a la view
                      */
                     var guardar = Ti.UI.createButton({
            title:"Guardar",
            width:"100%",
            backgroundColor:"#E3C109",
            height:50,
            top:3300,
            font: {fontFamily: 'Helvetica Neue'},
            color:"white"
          });
          view.add(guardar);
          
          /*
           * Al presionar el boton de guardar se crea una vez mas 
           * una peticion de tipo HTTPCLient el cual enviara al servidor
           * la informacion necesaria para agregar los registros
           */
          guardar.addEventListener('click', function(e)
                 {
                  var enviar = Ti.Network.createHTTPClient({ 
                          onerror: function(e){ 
                                 Ti.API.debug(e.error); 
                                 alert('There was an error during the connection'); 
                           }, 
                        timeout:3000, 
                    });                      
                    
                    enviar.open('POST', 'http://localhost/wanagow/segundaversion/gurdarintereses.php');
                    /*
                     * Debido a que la tabla tiene informacion dentro se puede acceder a su informacion
                     * data[0] se usa cuando no hay un 
                     * rows[0] se usa cuando hay una fila 0 
                     * children[0] se usa cuando hay un objeto dentro de la fila
                     * despues de children sigue la propiedad por ejemplo value
                     * 
                     * El valor de .children[0] radica en la posicion en la que se encuentra 
                     * el elemento si es el primer elemento es 0 si es el segundo es 1
                     * depende del orden de declaracion y creacion 
                     */ 
                    
                    var params = 
                {
                  academica: $.tableViewAcademica.data[0].rows[0].children[0].value,
                                    area:$.tableViewAcademica.data[0].rows[1].children[1].value,
                                    congreso:$.tableViewAcademica.data[0].rows[2].children[1].value,
                                    curso:$.tableViewAcademica.data[0].rows[3].children[1].value, 
                                    convencion:$.tableViewAcademica.data[0].rows[4].children[1].value,
                                    seminario:$.tableViewAcademica.data[0].rows[5].children[1].value,
                                    taller:$.tableViewAcademica.data[0].rows[6].children[1].value,
                                    diplomado:$.tableViewAcademica.data[0].rows[7].children[1].value,     
                                    conferencia:$.tableViewAcademica.data[0].rows[8].children[1].value,
                                    expo:$.tableViewAcademica.data[0].rows[9].children[1].value,
                              
                              cultural: $.tableViewCultural.data[0].rows[0].children[0].value,
                  ballet:$.tableViewCultural.data[0].rows[1].children[0].value,
                  teatro:$.tableViewCultural.data[0].rows[2].children[0].value, 
                            comedia:$.tableViewCultural.data[0].rows[3].children[0].value,
                  drama:$.tableViewCultural.data[0].rows[4].children[0].value,
                  infantilC:$.tableViewCultural.data[0].rows[5].children[0].value,
                  musical:$.tableViewCultural.data[0].rows[6].children[0].value,
                  otrosT:$.tableViewCultural.data[0].rows[7].children[0].value,
                  circos:$.tableViewCultural.data[0].rows[8].children[0].value,
                  exposiciones:$.tableViewCultural.data[0].rows[9].children[0].value,
                  fotografia:$.tableViewCultural.data[0].rows[10].children[0].value,
                  escultura:$.tableViewCultural.data[0].rows[11].children[0].value,
                  pintura:$.tableViewCultural.data[0].rows[12].children[0].value,
                  libros:$.tableViewCultural.data[0].rows[13].children[0].value,
                  otrosE:$.tableViewCultural.data[0].rows[14].children[0].value,
                  cineArte:$.tableViewCultural.data[0].rows[15].children[0].value,
                  musica:$.tableViewCultural.data[0].rows[16].children[0].value,
                  clasica:$.tableViewCultural.data[0].rows[17].children[0].value,
                  instrumental:$.tableViewCultural.data[0].rows[18].children[0].value,
                  folklorepopular:$.tableViewCultural.data[0].rows[19].children[0].value,
                  turistico:$.tableViewCultural.data[0].rows[20].children[0].value,
                  ferias:$.tableViewCultural.data[0].rows[21].children[0].value,
                  carnavales:$.tableViewCultural.data[0].rows[22].children[0].value,
                  peregrinacion:$.tableViewCultural.data[0].rows[23].children[0].value,
                  fiestasReligiosasIndigenas:$.tableViewCultural.data[0].rows[24].children[0].value,
                  otrosTuristica:$.tableViewCultural.data[0].rows[25].children[0].value,
                  
                  entretenimiento:$.tableViewEntretenimiento.data[0].rows[0].children[0].value,
                  conciertos:$.tableViewEntretenimiento.data[0].rows[1].children[0].value,
                  electronica:$.tableViewEntretenimiento.data[0].rows[2].children[0].value,
                  jazzblues:$.tableViewEntretenimiento.data[0].rows[3].children[0].value,
                  trova:$.tableViewEntretenimiento.data[0].rows[4].children[0].value,
                  rock:$.tableViewEntretenimiento.data[0].rows[5].children[0].value,
                  alternativa:$.tableViewEntretenimiento.data[0].rows[6].children[0].value,
                  gruperanortena:$.tableViewEntretenimiento.data[0].rows[7].children[0].value,
                  infantilE:$.tableViewEntretenimiento.data[0].rows[8].children[0].value,
                  hiphop:$.tableViewEntretenimiento.data[0].rows[9].children[0].value,
                  ranchera:$.tableViewEntretenimiento.data[0].rows[10].children[0].value,
                  pop:$.tableViewEntretenimiento.data[0].rows[11].children[0].value,
                  metal:$.tableViewEntretenimiento.data[0].rows[12].children[0].value,
                  reague:$.tableViewEntretenimiento.data[0].rows[13].children[0].value,
                  reggeatton:$.tableViewEntretenimiento.data[0].rows[14].children[0].value,
                  baladasboleros:$.tableViewEntretenimiento.data[0].rows[15].children[0].value,
                  salsacumbia:$.tableViewEntretenimiento.data[0].rows[16].children[0].value,
                  cristiana:$.tableViewEntretenimiento.data[0].rows[17].children[0].value,
                  deportes:$.tableViewEntretenimiento.data[0].rows[18].children[0].value,
                  futbol:$.tableViewEntretenimiento.data[0].rows[19].children[0].value,
                  basquetball:$.tableViewEntretenimiento.data[0].rows[20].children[0].value,
                  tenis:$.tableViewEntretenimiento.data[0].rows[21].children[0].value,
                  beisball:$.tableViewEntretenimiento.data[0].rows[22].children[0].value,
                  volleyball:$.tableViewEntretenimiento.data[0].rows[23].children[0].value,
                  torneos:$.tableViewEntretenimiento.data[0].rows[24].children[0].value,
                  maratones:$.tableViewEntretenimiento.data[0].rows[25].children[0].value,
                  autosmotos:$.tableViewEntretenimiento.data[0].rows[26].children[0].value,
                  futbolAmericano:$.tableViewEntretenimiento.data[0].rows[27].children[0].value,
                  artesMarciales:$.tableViewEntretenimiento.data[0].rows[28].children[0].value,
                  boxE:$.tableViewEntretenimiento.data[0].rows[29].children[0].value,
                  luchaLibre:$.tableViewEntretenimiento.data[0].rows[30].children[0].value,
                  atletismo:$.tableViewEntretenimiento.data[0].rows[31].children[0].value,
                  toros:$.tableViewEntretenimiento.data[0].rows[32].children[0].value,
                  baresantros:$.tableViewEntretenimiento.data[0].rows[33].children[0].value,
                  inaguracion:$.tableViewEntretenimiento.data[0].rows[34].children[0].value,
                  promocion:$.tableViewEntretenimiento.data[0].rows[35].children[0].value,
                  showE:$.tableViewEntretenimiento.data[0].rows[36].children[0].value,
                  fiestasTematicas:$.tableViewEntretenimiento.data[0].rows[37].children[0].value,
                            bienvenida:$.tableViewEntretenimiento.data[0].rows[37].children[0].value,
                            email: params.email,
                            
                }; 
                //alert(params);
            /*
             * Se envia un objeto json para el servidor php despues
             * se evalua la respuesta del servidor si es igual a Insert failed se 
             * cancela en caos contrario mostrara un mensaje de bienvenida
             */   
                    enviar.send(params);
              enviar.onload = function()
              {
                if (this.responseText == "Insert failed")
                 {
                     alert(this.responseText);
                 } 
              else
                 {
                    var alertDialog = Titanium.UI.createAlertDialog({
                        title: 'Alert',
                        message: "Registro Terminado",
                        buttonNames: ['OK']
                     });
                     alertDialog.show();
                     var correo = {
                       email: params.email,
                       password: params.password,
                               nombre: params.nombre,
                               apellidos: params.apellido,
                               academica: $.tableViewAcademica.data[0].rows[0].children[0].value,
                               cultural: $.tableViewCultural.data[0].rows[0].children[0].value,
                               entretenimiento:$.tableViewEntretenimiento.data[0].rows[0].children[0].value,
                   };
                  //alert(correo);
                     Alloy.createController('Evento',correo).getView().open();  
                  }
              }; 
                
                
                 });
                     
                     $.container1.add(scrollView);                            
               }; 
 
var dataArray = [];
var dataArray2 = [];
var dataArray3 =[];    

/*
 * Cuando se coloca omitirPreferencias se colocan todos los valores en 0
 * por tal motivo se llama a otra direccion, se guarda y da acceso
 * a la siguiente ventana
 */

function OmitirPreferencias() {
  var idCliente = {
       email: params.email,
       //password: $.txtPasswordw.value,
  }; 
var enviar = Ti.Network.createHTTPClient({ 
        onerror: function(e){ 
               Ti.API.debug(e.error); 
               alert('La conexion esta tardando demaciado intente acceder nuevamente'); 
         }, 
      timeout:3000, 
  });                      
  enviar.open('POST', 'http://localhost/wanagow/segundaversion/cliente.php'); 
  enviar.send(idCliente);
  enviar.onload = function(){
    
    var alertDialog = Titanium.UI.createAlertDialog({
        title: 'Alert',
        message: "Registro Terminado",
        buttonNames: ['OK']
    });
    alertDialog.show();
    var correo = {
       email: params.email,
       password: params.password,
       nombre: params.nombre,
       apellidos: params.apellido,
       academica: $.tableViewAcademica.data[0].rows[0].children[0].value,
       cultural: $.tableViewCultural.data[0].rows[0].children[0].value,
       entretenimiento:$.tableViewEntretenimiento.data[0].rows[0].children[0].value,
       
  };
  //alert(correo);
  Alloy.createController('Evento',correo).getView().open(); 
  }; 
}





