var win1 = Titanium.UI.createWindow({  
    title:'Evento',
    backgroundColor:'#c5ccd4'
});
/*Este metodo permite obtener las propiedades de un objeto deseado
 * e se refire a el objeto y sus propiedades externas ubicacion y tipo de objeto
 * .source se refiere al objeto completo
 * .title es una propiedad a la que se accede debido a que source ya tiene acceso 
 * a las propiedades de todo el objeto por ejemplo el color de fondo seria
 * e.source.backgroundColor
 */
function Obtener(e) {
  alert(e.source.title);
   alert(e.source.backgroundColor);
}
/*
 * De igual forma que el metodo de obtener se e permite obtener el objeto deseado
 * depues e.source.title obtienen el contenido actual pero si se asigna otro valor 
 * este es modificado por uno nuevo
 */
function Fijar(e) {
  e.source.title ="OK";
  alert(e.source.title);
}
/*
 * La funcion Boton contiene primero la creacion del boton con los atributos predefinidos
 * Despues la funcion getTitulo dentro del boton se utiliza para obtener la informacion del titulo
 * En caso contrario setTitulo se utiliza para fijar un valor determinado
 */
function Boton () {
	var boton = Ti.UI.createButton({
		backgroundColor:"yellow",
	  //backgroundImage: 'off.png',
	    title:"off",
	    top: 3,
	    width: 37,
	    height: 35,
	    right:400,
	    value:false
	});
	
	boton.getTitulo = function () {
	  return this.title;
	};
	
	boton.setTitulo = function (titulo){
		this.title = titulo;
	};
	boton.on = function() {
	    this.backgroundColor = '#159902';
	    this.value = true;
	  //this.backgroundImage ="on.png";
	    this.title ="on";
	};
							 
	boton.off = function() {
	   this.backgroundColor = '#aaa';
	   this.value = false;
	 //this.backgroundImage ="off.png";
	   this.title ="off";
	 };
	return boton;
	
}
/*
 * obj se utiliza para crear un nuevo objeto a partir de la funcion Boton
 * obj.setTitulo llama a la funcion de fijar un nuevo valor
 * obj.addEventListener lo que permite es capturar un evento que al cliquear el botonb
 * se mande una alerta que muestre el titulo del boton
 */
var obj = new Boton();
obj.setTitulo("ok");
obj.addEventListener('click', function(e) {
    if(false == e.source.value) {
        e.source.on();
        label.setTitulo(obj.getTitulo());
    } else {
        e.source.off();
        label.setTitulo(obj.getTitulo());								       							        
    }
});


//Por ultimo se puede acceder al titulo mediante el obj.getTitulo

function LABEL () {
	var labelUserName = Ti.UI.createLabel({
	color:'black',
	font:{fontFamily:'Arial', fontSize:16, fontWeight:'bold'},
	text:'*' + obj.getTitulo(),
	left:50, top: 6,
	width:360, height: 30
	});
	
	labelUserName.getTitulo = function () {
	  return this.text;
	};
	
	labelUserName.setTitulo = function (text){
		this.text = text;
	};
	
	return labelUserName;
	
}

var dataArray =[];
var tableViewAcademica = Titanium.UI.createTableView({
         borderRadios:10,
         backgroundColor:'white',
         top:2,
         width:"auto", height:442
     });

for( var i=0; i<5; i++){ 
	var label = new LABEL();
    var row = Ti.UI.createTableViewRow({    					
	    selectedBackgroundColor:'yellow',
	    height:40,
		title:"s"+i
		});
	dataArray.push(row);
	row.add(label);
}
tableViewAcademica.setData(dataArray);

tableViewAcademica.addEventListener('click', function(e) {
    var clickedRowData = e.rowData;
     var clickedRow = e.row;
     var controlArray = clickedRowData.getChildren();
     var currentSwitch = controlArray[1];
     alert(currentSwitch); // -- Get switch state.
     alert(clickedRowData.fn); // --Get field name.
    alert(e);
    alert(e.source.toString().indexOf("label")); 
    alert(e.source.selectedBackgroundColor); 
});

win1.add(obj);
win1.add(tableViewAcademica);
win1.open();