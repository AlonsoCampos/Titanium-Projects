Titanium.UI.setBackgroundColor('yellow');
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
var button = Titanium.UI.createButton({
   title: 'Hello',
   top: 10,
   width: 100,
   height: 50
});

button.addEventListener('click',function(e)
{
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
                            table.headerTitle = "The database row is empty"; 
                     }                      
                     //Emptying the data to refresh the view 
                     dataArray = []; 
                                  
                     //Insert the JSON data to the table view 
                     for( var i=0; i<json.length; i++){ 
                     	
	                     	var row = Ti.UI.createTableViewRow({    					
	    					selectedBackgroundColor:'white',
	    					objName: 'row',
	    					id:json[i].idEvento, // custom property, useful for determining the row during events
							height:110
							});
							row.desc = "Este es el id "+json[i].idEvento;
							row.info =json[i].nombre;
							row.desc = "No hay descripcion aun";
							
							//row.titulo = json[i].nombre;
							row.fecha = json[i].fecha;
							if(json[i].costo==0){
								row.costo = "Gratuito";
							}
							row.costo = json[i].costo;
							row.lugar = json[i].lugar;
							//row.desc ="DESCIPCION";
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
						    objName: 'nombre',
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
                        dataArray.push(row);                 
                     };                      
                     table.setData(dataArray);                            
               }; 
var table = Titanium.UI.createTableView({
	
});
table.addEventListener('click', function(e) {
	  var win = Titanium.UI.createWindow({
    				id:e.rowData.id,
					title: e.rowData.info,
					backgroundColor:"white",
					url:"external.js"
					});
		win.desc = e.row.desc;
		win.info = e.row.info;
		win.titulo = e.row.titulo;
		win.fecha = e.row.fecha;
		win.costo = e.row.costo;
		win.lugar = e.row.lugar;
		

		tab1.open(win,{animation:true});
});
win1.add(table);
});



 var IMG_BASE = 'http://alonsocampos.net46.net/';
 //Array to store the data from the todo list 
var dataArray = []; 

win1.add(button);
tabGroup.addTab(tab1);  
tabGroup.open();
