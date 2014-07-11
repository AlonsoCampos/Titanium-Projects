
var tabGroup = Titanium.UI.createTabGroup();
var win1 = Titanium.UI.createWindow({  
    title:'Evento',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Eventos',
    window:win1
});

              var sendit = Ti.Network.createHTTPClient({ 
                     onerror: function(e){ 
                           Ti.API.debug(e.error); 
                           alert('There was an error during the connection'); 
                     }, 
                  timeout:3000, 
              });                      
              //Here you have to change it for your local ip 
              sendit.open('GET', 'http://alonsocampos.net46.net/segundaversion/intereses.php');  
              sendit.send(); 
              //Function to be called upon a successful response 
              sendit.onload = function(){ 
                     var json = JSON.parse(this.responseText); 
                     //json.nombre viene de un array de php en el servidor
                     var json = json.nombre; 
                     //if the database is empty show an alert 
                     if(json.length == 0){ 
                            tableView.headerTitle = "The database row is empty"; 
                     }                      
                     //Emptying the data to refresh the view 
                     dataArray = [];
                                      
                     //Insert the JSON data to the table view 
                     for( var i=0; i<json.length; i++){ 
                     	
                     	var row = Ti.UI.createTableViewRow({    					
	    					selectedBackgroundColor:'blue',
	    					height:40
							});
							
							var labelUserName = Ti.UI.createLabel({
						    color:'black',
						    font:{fontFamily:'Arial', fontSize:16, fontWeight:'bold'},
						    text:'' + json[i].tipo,
						    objName: 'nombre',
						    left:240, top: 6,
						    width:360, height: 30
						  	});
						  	row.add(labelUserName);
						  	
						  	var detalle = Ti.UI.createLabel({
						    color:'black',
						    font:{fontFamily:'Arial', fontSize:16, fontWeight:'bold'},
						    text:'' + json[i].detalles,
						    objName: 'nombre',
						    left:0,
						    width:360, height: 30
						  	});
						  	row.add(detalle);
						  	
								if (json[i].tipo=="Academica" || json[i].tipo =="Area de Estudio") {
                     				dataArray.push(row);     	
                     			};
						        
                     };
                     for( var i=0; i<json.length; i++){ 
                     	
                     	var row = Ti.UI.createTableViewRow({    					
	    					selectedBackgroundColor:'blue',
	    					height:40
							});
							
							var labelUserName = Ti.UI.createLabel({
						    color:'black',
						    font:{fontFamily:'Arial', fontSize:16, fontWeight:'bold'},
						    text:'' + json[i].tipo,
						    objName: 'nombre',
						    left:240, top: 6,
						    width:360, height: 30
						  	});
						  	row.add(labelUserName);
						  	
						  	var detalle = Ti.UI.createLabel({
						    color:'black',
						    font:{fontFamily:'Arial', fontSize:16, fontWeight:'bold'},
						    text:'' + json[i].detalles,
						    objName: 'nombre',
						    left:0,
						    width:360, height: 30
						  	});
						  	row.add(detalle);
						  	
								if (json[i].tipo=="Cultural" || json[i].tipo =="Teatro" || json[i].tipo =="Exposicion"
								|| json[i].tipo =="Musica" || json[i].tipo =="Turistico") {
                     				dataArray.push(row);     	
                     			};
                     };
                     for( var i=0; i<json.length; i++){ 
                     	
                     	var row = Ti.UI.createTableViewRow({    					
	    					selectedBackgroundColor:'blue',
	    					height:40
							});
							
							var labelUserName = Ti.UI.createLabel({
						    color:'black',
						    font:{fontFamily:'Arial', fontSize:16, fontWeight:'bold'},
						    text:'' + json[i].tipo,
						    objName: 'nombre',
						    left:240, top: 6,
						    width:360, height: 30
						  	});
						  	row.add(labelUserName);
						  	
						  	var detalle = Ti.UI.createLabel({
						    color:'black',
						    font:{fontFamily:'Arial', fontSize:16, fontWeight:'bold'},
						    text:'' + json[i].detalles,
						    objName: 'nombre',
						    left:0,
						    width:360, height: 30
						  	});
						  	row.add(detalle);
						  	
						  	
								if (json[i].tipo=="Entretenimiento" || json[i].tipo =="Conciertos" 
								|| json[i].tipo =="Deportes" || json[i].tipo =="Bares Antros") {
                     				dataArray.push(row);     	
                     			};
						        
                     };                      
                     
                     tableView.setData(dataArray);                            
               }; 
 var IMG_BASE = 'http://alonsocampos.net46.net/';
 //Array to store the data from the todo list 
var dataArray = [];
    
var tableView = Titanium.UI.createTableView({ objName: 'table' });


win1.add(tableView);
tabGroup.addTab(tab1);  
tabGroup.open();

