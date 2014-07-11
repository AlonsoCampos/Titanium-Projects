// 
//  index.js
//  cal
//  
//  Created by Alonso Campos on 2014-05-19.
//  Copyright 2014 Alonso Campos. All rights reserved.
// 

var dataArray =  [];
var IMG_BASE = 'http://localhost/wanagow/img/';
cambiarmes();

var d = new Date();
var strDate = d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate();
var fecha ={
  fecha:strDate,
  dia: d.getDate(),
  diasemananumero: d.getDay(),
  diasemana: diasemana(d.getDay()),
  mes: mesfecha(d.getMonth()),
  mesnumero: d.getMonth(),
  anio: d.getFullYear(),
  hora:d.getHours()+":"+d.getMinutes() 
};
$.fgHeaderTitle.text=fecha.mes;


function diasemana (dia) {
  var days;
  switch(dia){
    case 0:
      days ="Domingo";
    break;
    case 1:
      days ="Lunes";
    break;
    case 2:
      days ="Martes";
    break;
    case 3:
      days ="Miercoles";
    break;
    case 4:
      days ="Jueves";
    break;
    case 5:
      days ="Viernes";
    break;
    case 6:
      days ="Sabado";
    break;
  }
  return days;
}

function mesfecha (mes) {
  var meses;
  switch(mes){
    case 0:
      meses ="Enero";
    break;
    case 1:
      meses ="Febrero";
    break;
    case 2:
      meses="Marzo";
    break;
    case 3:
      meses ="Abril";
    break;
    case 4:
      meses="Mayo";
    break;
    case 5:
      meses ="Junio";
    break;
    case 6:
      meses="Julio";
    break;
    case 7:
      meses ="Agosto";
    break;
    case 8:
      meses="Septiembre";
    break;
    case 9:
      meses="Octubre";
    break;
    case 10:
      meses="Noviembre";
    break;
    case 11:
      meses="Diciembre";
    break;
    
    
  }
  return meses;
}

function mesnumero (mes) {
  switch(mes){
  case 'Enero':
      meses =0;
    break;
    case 'Febrero':
      meses=1;
    break;
    case 'Marzo':
      meses =2;
    break;
    case 'Abril':
      meses=3;
    break;
    case 'Mayo':
      meses =4;
    break;
    case 'Junio':
      meses=5;
    break;
    case 'Julio':
      meses =6;
    break;
    case 'Agosto':
      meses=7;
    break;
    case 'Septiembre':
      meses=8;
    break;
    case 'Octubre':
      meses=9;
    break;
    case 'Noviembre':
      meses=10;
    break;
    case 'Diciembre':
      meses=11;
    break;
  }
  return meses;
  
}

function cambiarmes () {
  
  $.izquierda.addEventListener('click',function(){    
    
    var actual = $.fgHeaderTitle.text;
    var mesactual = mesnumero(actual);
    var resta = mesactual-1;
    var mesanterior =mesfecha(resta);
    if (resta>-1) {
      $.fgHeaderTitle.text = mesanterior;
      clearGrid();
      createCal(mesnumero($.fgHeaderTitle.text));
      //alert(diasdelmes($.fgHeaderTitle.text,fecha.anio));
    };
    
    
  });
  $.derecha.addEventListener('click',function(){    
    
    var actual = $.fgHeaderTitle.text;
    var mesactual = mesnumero(actual);
    var suma = mesactual+1;
    var messiguiente =mesfecha(suma);
    if (suma<12) {
      $.fgHeaderTitle.text = messiguiente;
      //alert(diasdelmes($.fgHeaderTitle.text,fecha.anio));
      clearGrid();
      createCal(mesnumero($.fgHeaderTitle.text));
    };
    
  });
  
  
}

function diasdelmes (mes, anio) {
  switch(mes){
    case 'Enero':  // 0 
    case 'Marzo':  // 2
    case 'Mayo':  // 4
    case 'Julio':  // 6 
    case 'Agosto':  // 7
    case 'Octubre':  //9 
    case 'Diciembre': //11 
    
      return 31;
    case 'Abril':  // 3
    case 'Junio':  // 5
    case 'Septiembre':  // 8
    case 'Noviembre': // 10
         return 30;
         
    case 'Febrero':  // 1
         if ( ((anio%100 == 0) && (anio%400 == 0)) ||
               ((anio%100 != 0) && (anio%  4 == 0))   )
              return 29;  // Año Bisiesto
         else
              return 28;     
  }
}

function clearGrid(){
  $.fgScrollView.removeAllChildren();
};


function Calendar (diasMes,dia1,dia2,dia3,dia4,dia5,dia6,dia7,dia8,dia9,dia10,dia11,dia12,dia13,dia14,dia15,dia16,
  dia17,dia18,dia19,dia20,dia21,dia22,dia23,dia24,dia25,dia26,dia27,dia28,dia29,dia30,dia31) 
{
  
  var columns = 7;
  var space =  2;
  //var data = items;
  var options =  
  {
    padding:1,        //GALLERY ONLY
    showTitle:false,    //GALLERY ONLY
    backgroundColor: '#eee',
    gridColor: 'White'
  };
  var layout = 'gallery';
  var screenWidth = Ti.Platform.displayCaps.getPlatformWidth();
    
  var newWidth = screenWidth - space;
  var columnWidth = (newWidth / columns) - space;
  var frameBGcolor = options.backgroundColor || '#fff';
  //ADJUST THE SCROLLVIEW
  $.fgScrollView.left = space;
  $.fgScrollView.top = space;
  $.fgScrollView.right = -1;
  
  $.fgMain.backgroundColor = frameBGcolor;
      
        for (var i=0; i < diasMes; i++) {

          var frame = Ti.UI.createView({
              id: i+1,
              width:columnWidth,
              height:columnWidth,
              backgroundColor:options.gridColor || '#eee',
              top:0,
              left:0,
              right:space,
              bottom:space
          });

          var label = Ti.UI.createLabel({
            text:i+1,
            width:Ti.UI.SIZE,
            height:Ti.UI.SIZE,
            color:'black',
            zIndex:3,
          });
          frame.add(label);

          var eventoFondo = Ti.UI.createView({
            width:"100%",
            height:"100%",
            index: i+1,
            backgroundColor:'transparent',
            borderRadius: 10,
            zIndex:6
          });
        
          
      if(  label.text==dia1  || label.text==dia2  || label.text==dia3  || label.text==dia4  || label.text==dia5
        || label.text==dia6  || label.text==dia7  || label.text==dia8  || label.text==dia9  || label.text==dia10
        || label.text==dia11 || label.text==dia12 || label.text==dia13 || label.text==dia14 || label.text==dia15
        || label.text==dia16 || label.text==dia17 || label.text==dia18 || label.text==dia19 || label.text==dia20
        || label.text==dia21 || label.text==dia22 || label.text==dia23 || label.text==dia24 || label.text==dia25
        || label.text==dia26 || label.text==dia27 || label.text==dia28 || label.text==dia29 || label.text==dia30
        || label.text==dia31)
      {        
          eventoFondo.addEventListener('click',function(e){
              
              var idCliente = 
              {
                    dia    :e.source.index,
                    cliente:1
              };
     
              var enviar = Ti.Network.createHTTPClient({ 
                     onerror: function(e){ 
                            Ti.API.debug(e.error); 
                            alert('La conexion esta tardando demaciado intente acceder nuevamente'); 
                      }, 
                   timeout:3000, 
              });

              enviar.open('POST', 'http://localhost/wanagow/segundaversion/detallesEventoCalendario.php'); 
              enviar.send(idCliente);
              enviar.onload = function()
              {
                  dataArray =  [];
                  var json = JSON.parse(this.responseText); 
                  var json = json.nombre; 
                  /*
                  if(json.length == 0)
                  { 
                      $.tableEventos.headerTitle = "No hay informacion disponible"; 
                  } */
          
                  for (var i = 0; i < json.length; i++) 
                  {
                        var row = Ti.UI.createTableViewRow({              
                            selectedBackgroundColor:'white',
                            id:json[i].idEvento,
                            //rowIndex:i, //se refiere al indice de la fila
                          height:110
                        });
                        
                        var imageAvatar = Ti.UI.createImageView({
                            image:IMG_BASE + json[i].imagen,
                            left:20, top:2,
                            width:190, height:90
                        });
                        row.add(imageAvatar);
                
                        var labelUserName = Ti.UI.createLabel({
                            color:'black',
                            font:{fontFamily:'Arial', fontSize:16, fontWeight:'bold'},
                            text:'' + json[i].titulo,
                            left:240, top: 6,
                            width:360, height: 30
                        });
                        row.add(labelUserName);
                      
                        if(json[i].costo!=0)
                        {
                            var labelDetails = Ti.UI.createLabel({
                                color:'#222',
                                font:{fontFamily:'Arial', fontSize:14, fontWeight:'normal'},
                                text:'' + json[i].fecha+'               '+json[i].costo,
                                left:240, top:44,
                                width:"100%"
                            });
                            row.add(labelDetails);
                        }else{
                            var labelDetails = Ti.UI.createLabel({
                              color:'#222',
                              font:{fontFamily:'Arial', fontSize:14, fontWeight:'normal'},
                              text:'' + json[i].fecha+'               '+'Gratuito',
                              left:240, top:44,
                              width:"100%"
                            });
                            row.add(labelDetails);
                        }
                
                        if (json[i].tipo=="Academica" || json[i].tipo =="Area de Estudio") {
                            var view = Titanium.UI.createView({
                                   borderRadius:10,
                                   backgroundColor:'yellow',
                                   width:10,
                                   height:150,
                                   right:0
                            });
                            row.add(view);
                        };
      
                        if (json[i].tipo=="Cultural" || json[i].tipo =="Teatro" || json[i].tipo =="Exposicion"
                          || json[i].tipo =="Musica" || json[i].tipo =="Turistico") {
                          var view = Titanium.UI.createView({
                                 borderRadius:10,
                                 backgroundColor:'green',
                                 width:10,
                                 height:150,
                                 right:0
                          });
                          row.add(view);
                        };
                
                        if (json[i].tipo=="Entretenimiento" || json[i].tipo =="Conciertos" 
                          || json[i].tipo =="Deportes" || json[i].tipo =="Bares Antros") {
                          var view = Titanium.UI.createView({
                                 borderRadius:10,
                                 backgroundColor:'orange',
                                 width:10,
                                 height:150,
                                 right:0
                          });
                          row.add(view);
                        };
                
                        var labelDate = Ti.UI.createLabel({
                            color:'#999',
                            font:{fontFamily:'Arial', fontSize:12, fontWeight:'normal'},
                            text:''+json[i].lugar ,
                            left:240, bottom:10,
                            width:"100%", height:20
                        });
                        row.add(labelDate);
           
                        dataArray.push(row);
                  };

                  $.tableEventos.setData(dataArray);
                 
              };
              
          });
          
          frame.add(eventoFondo);

          var evento = Ti.UI.createView({
            width:15,
            height:15,
            top: "70%",
            backgroundColor:'green',
            borderRadius: 10,
            index: i+1,
          });
          eventoFondo.add(evento);
          
        }
      
      
        $.fgScrollView.add(frame);
      };
   
};


function createCal (mes) 
{
  
  var columns = 7;
  var space =  2;
  //var data = items;
  var options =  
  {
    padding:1,        //GALLERY ONLY
    showTitle:false,    //GALLERY ONLY
    backgroundColor: '#eee',
    gridColor: 'White'
  };
  var layout = 'gallery';
  var screenWidth = Ti.Platform.displayCaps.getPlatformWidth();
    
  var newWidth = screenWidth - space;
  var columnWidth = (newWidth / columns) - space;
  var frameBGcolor = options.backgroundColor || '#fff';
  
  //ADJUST THE SCROLLVIEW
  $.fgScrollView.left = space;
  $.fgScrollView.top = space;
  $.fgScrollView.right = -1;
  
  $.fgMain.backgroundColor = frameBGcolor;
  
    var idCliente = 
    {
          email: 1,
          mes: mes
    };
     
    var enviar = Ti.Network.createHTTPClient({ 
           onerror: function(e){ 
                  Ti.API.debug(e.error); 
                  alert('La conexion esta tardando demaciado intente acceder nuevamente'); 
            }, 
         timeout:3000, 
    });

    enviar.open('POST', 'http://localhost/wanagow/segundaversion/eventosguardados.php'); 
    enviar.send(idCliente);
    enviar.onload = function()
    {
        var json = JSON.parse(this.responseText); 
        var json = json.nombre; 
         /*
        if(json.length == 0)
        { 
             $.tableEventos.headerTitle = "No hay informacion disponible"; 
        } */ 
        //alert(json.length);                   
        try{
          
            switch(json.length)
            {
              case 0:
                  Calendar(31);
                break;
              case 1:
                Calendar(31,json[0].dia);
              break;
              case 2:
                Calendar(31,json[0].dia,json[1].dia);
              break;
              case 3:
                Calendar(31,json[0].dia,json[1].dia,json[2].dia);
              break;
              case 4:
                Calendar(31,json[0].dia,json[1].dia,json[2].dia,json[3].dia);
              break;
              case 5:
                Calendar(31,json[0].dia,json[1].dia,json[2].dia,json[3].dia,json[4].dia);
              break;
              case 6:
                Calendar(31,json[0].dia,json[1].dia,json[2].dia,json[3].dia,json[4].dia,json[5].dia);
              break;
              case 7:
                Calendar(31,json[0].dia,json[1].dia,json[2].dia,json[3].dia,json[4].dia,json[5].dia,
                json[6].dia);
              break;
              case 8:
                Calendar(31,json[0].dia,json[1].dia,json[2].dia,json[3].dia,json[4].dia,json[5].dia,
                json[6].dia,json[7].dia);
              break;
              case 9:
                Calendar(31,json[0].dia,json[1].dia,json[2].dia,json[3].dia,json[4].dia,json[5].dia,
                json[6].dia,json[7].dia,json[8].dia);
              break;
              case 10:
                Calendar(31,json[0].dia,json[1].dia,json[2].dia,json[3].dia,json[4].dia,json[5].dia,
                json[6].dia,json[7].dia,json[8].dia,json[9].dia);
              break;
              case 11:
                Calendar(31,json[0].dia,json[1].dia,json[2].dia,json[3].dia,json[4].dia,json[5].dia,
                json[6].dia,json[7].dia,json[8].dia,json[9].dia,json[10].dia);
              break;
              case 12:
                Calendar(31,json[0].dia,json[1].dia,json[2].dia,json[3].dia,json[4].dia,json[5].dia,
                json[6].dia,json[7].dia,json[8].dia,json[9].dia,json[10].dia,json[11].dia);
              break;
              case 13:
                Calendar(31,json[0].dia,json[1].dia,json[2].dia,json[3].dia,json[4].dia,json[5].dia,
                json[6].dia,json[7].dia,json[8].dia,json[9].dia,json[10].dia,json[11].dia,json[12].dia);
              break;
              case 14:
                Calendar(31,json[0].dia,json[1].dia,json[2].dia,json[3].dia,json[4].dia,json[5].dia,
                json[6].dia,json[7].dia,json[8].dia,json[9].dia,json[10].dia,json[11].dia,json[12].dia
                ,json[13].dia);
              break;
              case 15:
                Calendar(31,json[0].dia,json[1].dia,json[2].dia,json[3].dia,json[4].dia,json[5].dia,
                json[6].dia,json[7].dia,json[8].dia,json[9].dia,json[10].dia,json[11].dia,json[12].dia
                ,json[13].dia,json[14].dia);
              break;
              
              case 16:
                Calendar(31,json[0].dia,json[1].dia,json[2].dia,json[3].dia,json[4].dia,json[5].dia,
                json[6].dia,json[7].dia,json[8].dia,json[9].dia,json[10].dia,json[11].dia,json[12].dia
                ,json[13].dia,json[14].dia,json[15].dia);
              break;
              
              case 17:
                Calendar(31,json[0].dia,json[1].dia,json[2].dia,json[3].dia,json[4].dia,json[5].dia,
                json[6].dia,json[7].dia,json[8].dia,json[9].dia,json[10].dia,json[11].dia,json[12].dia
                ,json[13].dia,json[14].dia,json[15].dia,json[16].dia);
              break;
              case 18:
                Calendar(31,json[0].dia,json[1].dia,json[2].dia,json[3].dia,json[4].dia,json[5].dia,
                json[6].dia,json[7].dia,json[8].dia,json[9].dia,json[10].dia,json[11].dia,json[12].dia
                ,json[13].dia,json[14].dia,json[15].dia,json[16].dia,json[17].dia);
              break;
              case 19:
                Calendar(31,json[0].dia,json[1].dia,json[2].dia,json[3].dia,json[4].dia,json[5].dia,
                json[6].dia,json[7].dia,json[8].dia,json[9].dia,json[10].dia,json[11].dia,json[12].dia
                ,json[13].dia,json[14].dia,json[15].dia,json[16].dia,json[17].dia,json[18].dia);
              break;
              case 20:
                Calendar(31,json[0].dia,json[1].dia,json[2].dia,json[3].dia,json[4].dia,json[5].dia,
                json[6].dia,json[7].dia,json[8].dia,json[9].dia,json[10].dia,json[11].dia,json[12].dia
                ,json[13].dia,json[14].dia,json[15].dia,json[16].dia,json[17].dia,json[18].dia,json[19].dia
                );
              break;
              case 21:
                Calendar(31,json[0].dia,json[1].dia,json[2].dia,json[3].dia,json[4].dia,json[5].dia,
                json[6].dia,json[7].dia,json[8].dia,json[9].dia,json[10].dia,json[11].dia,json[12].dia
                ,json[13].dia,json[14].dia,json[15].dia,json[16].dia,json[17].dia,json[18].dia,json[19].dia
                ,json[20].dia);
              break;
              case 22:
                Calendar(31,json[0].dia,json[1].dia,json[2].dia,json[3].dia,json[4].dia,json[5].dia,
                json[6].dia,json[7].dia,json[8].dia,json[9].dia,json[10].dia,json[11].dia,json[12].dia
                ,json[13].dia,json[14].dia,json[15].dia,json[16].dia,json[17].dia,json[18].dia,json[19].dia
                ,json[20].dia,json[21].dia);
              break;
              case 23:
                Calendar(31,json[0].dia,json[1].dia,json[2].dia,json[3].dia,json[4].dia,json[5].dia,
                json[6].dia,json[7].dia,json[8].dia,json[9].dia,json[10].dia,json[11].dia,json[12].dia
                ,json[13].dia,json[14].dia,json[15].dia,json[16].dia,json[17].dia,json[18].dia,json[19].dia
                ,json[20].dia,json[21].dia,json[22].dia);
              break;
              case 24:
                Calendar(31,json[0].dia,json[1].dia,json[2].dia,json[3].dia,json[4].dia,json[5].dia,
                json[6].dia,json[7].dia,json[8].dia,json[9].dia,json[10].dia,json[11].dia,json[12].dia
                ,json[13].dia,json[14].dia,json[15].dia,json[16].dia,json[17].dia,json[18].dia,json[19].dia
                ,json[20].dia,json[21].dia,json[22].dia,json[23].dia);
              break;
              case 25:
                Calendar(31,json[0].dia,json[1].dia,json[2].dia,json[3].dia,json[4].dia,json[5].dia,
                json[6].dia,json[7].dia,json[8].dia,json[9].dia,json[10].dia,json[11].dia,json[12].dia
                ,json[13].dia,json[14].dia,json[15].dia,json[16].dia,json[17].dia,json[18].dia,json[19].dia
                ,json[20].dia,json[21].dia,json[22].dia,json[23].dia,json[24].dia);
              break;
              case 26:
                Calendar(31,json[0].dia,json[1].dia,json[2].dia,json[3].dia,json[4].dia,json[5].dia,
                json[6].dia,json[7].dia,json[8].dia,json[9].dia,json[10].dia,json[11].dia,json[12].dia
                ,json[13].dia,json[14].dia,json[15].dia,json[16].dia,json[17].dia,json[18].dia,json[19].dia
                ,json[20].dia,json[21].dia,json[22].dia,json[23].dia,json[24].dia,json[25].dia);
              break;
              case 27:
                Calendar(31,json[0].dia,json[1].dia,json[2].dia,json[3].dia,json[4].dia,json[5].dia,
                json[6].dia,json[7].dia,json[8].dia,json[9].dia,json[10].dia,json[11].dia,json[12].dia
                ,json[13].dia,json[14].dia,json[15].dia,json[16].dia,json[17].dia,json[18].dia,json[19].dia
                ,json[20].dia,json[21].dia,json[22].dia,json[23].dia,json[24].dia,json[25].dia,json[26].dia);
              break;
              case 28:
                Calendar(31,json[0].dia,json[1].dia,json[2].dia,json[3].dia,json[4].dia,json[5].dia,
                json[6].dia,json[7].dia,json[8].dia,json[9].dia,json[10].dia,json[11].dia,json[12].dia
                ,json[13].dia,json[14].dia,json[15].dia,json[16].dia,json[17].dia,json[18].dia,json[19].dia
                ,json[20].dia,json[21].dia,json[22].dia,json[23].dia,json[24].dia,json[25].dia,json[26].dia
                ,json[27].dia);
              break;
              case 29:
                Calendar(31,json[0].dia,json[1].dia,json[2].dia,json[3].dia,json[4].dia,json[5].dia,
                json[6].dia,json[7].dia,json[8].dia,json[9].dia,json[10].dia,json[11].dia,json[12].dia
                ,json[13].dia,json[14].dia,json[15].dia,json[16].dia,json[17].dia,json[18].dia,json[19].dia
                ,json[20].dia,json[21].dia,json[22].dia,json[23].dia,json[24].dia,json[25].dia,json[26].dia
                ,json[27].dia,json[28].dia);
              break;
              case 30:
                Calendar(31,json[0].dia,json[1].dia,json[2].dia,json[3].dia,json[4].dia,json[5].dia,
                json[6].dia,json[7].dia,json[8].dia,json[9].dia,json[10].dia,json[11].dia,json[12].dia
                ,json[13].dia,json[14].dia,json[15].dia,json[16].dia,json[17].dia,json[18].dia,json[19].dia
                ,json[20].dia,json[21].dia,json[22].dia,json[23].dia,json[24].dia,json[25].dia,json[26].dia
                ,json[27].dia,json[28].dia,json[29].dia);
              break;
              case 31:
                Calendar(31,json[0].dia,json[1].dia,json[2].dia,json[3].dia,json[4].dia,json[5].dia,
                json[6].dia,json[7].dia,json[8].dia,json[9].dia,json[10].dia,json[11].dia,json[12].dia
                ,json[13].dia,json[14].dia,json[15].dia,json[16].dia,json[17].dia,json[18].dia,json[19].dia
                ,json[20].dia,json[21].dia,json[22].dia,json[23].dia,json[24].dia,json[25].dia,json[26].dia
                ,json[27].dia,json[28].dia,json[29].dia,json[30].dia);
              break;
              
            }
          
          
        }catch(e){
          
        }  
    };
  
  
  
  
};
createCal(mesnumero($.fgHeaderTitle.text));




$.fgWin.open();