 var IMG_BASE = 'http://alonsocampos.net46.net/';

 //Array to store the data from the todo list 
       var dataArray = [];        
       //We execute the function to show the data for the first view         
       function getTodoList () { 
       //function to use HTTP to connect to a web server and transfer the data. 
              var sendit = Ti.Network.createHTTPClient({ 
                     onerror: function(e){ 
                           Ti.API.debug(e.error); 
                           alert('There was an error during the connection'); 
                     }, 
                  timeout:1000, 
              });                      
              //Here you have to change it for your local ip 
              sendit.open('GET', 'http://alonsocampos.net46.net/read_2.php');  
              sendit.send(); 
              //Function to be called upon a successful response 
              sendit.onload = function(){ 
                     var json = JSON.parse(this.responseText); 
                     //json.nombre viene de un array de php en el servidor
                     var json = json.nombre; 
                     //if the database is empty show an alert 
                     if(json.length == 0){ 
                            $.tableView.headerTitle = "The database row is empty"; 
                     }                      
                     //Emptying the data to refresh the view 
                     dataArray = [];                      
                     //Insert the JSON data to the table view 
                     for( var i=0; i<json.length; i++){ 
                     		//alert(json[i].idEvento);
	                     	var row = Ti.UI.createTableViewRow({    					
	    					selectedBackgroundColor:'white',
	    					id:json[i].idEvento,
	    					//rowIndex:i, // custom property, useful for determining the row during events
							height:110
							});
							
							row.titulo = json[i].nombre;
							row.imagen = json[i].image;
							row.detalles = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam arcu quam, accumsan quis leo quis, euismod sodales velit. Suspendisse eget vestibulum nibh. Integer blandit cursus justo in lobortis. Fusce pharetra varius blandit. Maecenas vestibulum vulputate dolor, mattis adipiscing diam suscipit sit amet. Integer ullamcorper massa non tortor ultrices fermentum. Morbi dignissim sem tellus, vel adipiscing elit egestas vitae. Nulla posuere pellentesque volutpat. Mauris convallis in neque in vestibulum. Mauris pharetra metus massa. In id posuere quam. Praesent euismod laoreet arcu, nec imperdiet diam tempus id. Etiam at nunc ut tortor luctus consectetur a sed sem.";
							row.fecha =json[i].fecha;
							row.hora = "10:00 am";
							row.costo = json[i].costo;
							row.lugar = json[i].lugar;
							
					  		var imageAvatar = Ti.UI.createImageView({
					    	image:IMG_BASE + json[i].image,
					    	left:20, top:2,
					    	width:190, height:90
							});
							row.add(imageAvatar);
							
							var labelUserName = Ti.UI.createLabel({
						    color:'black',
						    font:{fontFamily:'Arial', fontSize:16, fontWeight:'bold'},
						    text:'' + json[i].nombre,
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
	  						
	  						switch(json[i].interes){
	  							case "Academica":
			  							var view = Titanium.UI.createView({
										   borderRadius:10,
										   backgroundColor:'yellow',
										   width:10,
										   height:150,
										   right:0
										});
										row.add(view);
	  							break;
	  							case "Cultural":
	  									var view = Titanium.UI.createView({
										   borderRadius:10,
										   backgroundColor:'green',
										   width:10,
										   height:150,
										   right:0
										});
										row.add(view);
	  							break; 
	  							case "Entretenimiento":
	  									var view = Titanium.UI.createView({
										   borderRadius:10,
										   backgroundColor:'orange',
										   width:10,
										   height:150,
										   right:0
										});
										row.add(view);
	  							break;
	  						}
						  	
	  						
						  	var labelDate = Ti.UI.createLabel({
						    color:'#999',
						    font:{fontFamily:'Arial', fontSize:12, fontWeight:'normal'},
						    text:''+json[i].lugar ,
						    left:240, bottom:10,
						    width:"100%", height:20
						  	});
						  	row.add(labelDate);
						
                     	//Aqui es donde se agrega todo a la tabla   
                        dataArray.push(row);
                                      
                     };
                                           
                     $.tableView.setData(dataArray);                            
               };       
    };
       $.tableView.addEventListener('click', function(e)
       {
       						
						
					var win = Alloy.createController("remota").getView();
					win.id =e.rowData.id;
					win.title = e.row.titulo;
					win.backgroundColor="white";
					
					var imageAvatar = Ti.UI.createImageView({
					    	image:"http://alonsocampos.net46.net/"+e.row.imagen,
					    	left:35, top:25, right:35,
					    	width:700, height:250
					});

					var Titulo = Titanium.UI.createLabel({
						text:e.row.titulo,
						width:"auto",
						height:"auto",
						top:280,
						textAlign:"center"
					});
					
					var Descripcion = Titanium.UI.createLabel({
						text:e.row.detalles,
						width:"auto",
						height:"auto",
						top:310,
						textAlign:"center"
					});
					
					var Fecha = Titanium.UI.createLabel({
						text:"Fecha: "+e.row.fecha,
						width:"auto",
						height:"auto",
						top:450,
						textAlign:"center"
					});
					
					var Hora = Titanium.UI.createLabel({
						text:"Hora: "+e.row.hora,
						width:"auto",
						height:"auto",
						top:480,
						textAlign:"center"
					});
					if(e.row.costo==0){
						var Costo = Titanium.UI.createLabel({
							text:"Costo: "+"Gratuito",
							width:"auto",
							height:"auto",
							top:510,
							textAlign:"center"
						});
					}else{
						var Costo = Titanium.UI.createLabel({
							text:"Costo: "+"$ "+e.row.costo,
							width:"auto",
							height:"auto",
							top:510,
							textAlign:"center"
						});
					}
					
					
					var Lugar = Titanium.UI.createLabel({
						text:"Lugar: "+e.row.lugar,
						width:"auto",
						height:"auto",
						top:540,
						textAlign:"center"
					});
					
					var buttonRuta = Titanium.UI.createButton({
					    title: 'Ruta hasta aqui',
					    top: 600,
					    left:130,
					    width: 150,
					    height: 50
					});
					
					var buttonOrganizador = Titanium.UI.createButton({
					    title: 'Organizador',
					    top: 600,
					    right:130,
					    width: 170,
					    height: 50
					});
					
					var buttonAgregarEvento = Titanium.UI.createButton({
					    title: 'Agregar este evento a mi agenda',
					    top: 640,
					    width: 400,
					    height: 50
					});
					
					win.add(imageAvatar);
					win.add(Titulo);
					win.add(Descripcion);
					win.add(Fecha);
					win.add(Hora);
					win.add(Costo);
					win.add(Lugar);
					win.add(buttonRuta);
					win.add(buttonOrganizador);
					win.add(buttonAgregarEvento);
		$.tab1.open(win,{animation:true});			
      }); 
      
$.mainTabGroup.open();