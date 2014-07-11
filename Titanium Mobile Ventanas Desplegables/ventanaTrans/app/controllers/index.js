//Ventana principal de la aplicación
var ventanaPrincipal = Ti.UI.createWindow({
    backgroundColor:"blue",
    title:'Ventana Principal'
});

//Creación del boton
var boton = Ti.UI.createButton({
    title : 'Abrir Ventana 2',
    top : '10dp',
    left : '60dp',
    height : '40dp',
    width : '200dp',
    backgroundColor:"#FFCC00",
    borderRadius:10
});
var botonCancelar = Ti.UI.createButton({
         backgroundColor:"#FFCC00",
        borderRadius:10,
        left:70,
        top:180,
        width: 120,
        height: 25,
        title: "Cancelar",
   
        
});

botonCancelar.addEventListener('click', function(e) {
    ventanaTransparente.close();
});
//La magia la hace la propiedad opacidad que va de 0 a 1
var ventanaTransparente = Ti.UI.createWindow({
    opacity : 0.8,
    backgroundColor : "black",
    borderColor:"black",
    left:90,
    top:80,
    width:250,
    height:250,
    borderRadius:8,
  
});
ventanaTransparente.add(
    Ti.UI.createLabel({
        opacity : 3.5,
        left:15,
        top: 70,
        width:  'auto',
        height:  'auto',        
        text : 'Facebook',
        font : {
            fontSize : '12dp',
            fontWeight : 'bold'
        },
        textAlign:'center',
        color:'green'
}));

ventanaTransparente.add(
    Ti.UI.createLabel({
        left:115,
        top: 70,
        width:  "auto",
        height:  "auto",
        text : 'Mail',           
        font : {
            fontSize : '12dp',
            fontWeight : 'bold'
        },
        textAlign:'center',
        color:'green'
}));

ventanaTransparente.add(
    Ti.UI.createLabel({
        left:165,
        top: 70,
        width:  "auto",
        height:  "auto",
        text: "Message" ,          
        font : {
            fontSize : '12dp',
            fontWeight : 'bold'
        },
        textAlign:'center',
        color:'green'
}));

ventanaTransparente.add(
    Ti.UI.createLabel({
        left:25,
        top: 160,
        width:  "auto",
        height:  "auto",
        text: "Twitter" ,          
        font : {
            fontSize : '12dp',
            fontWeight : 'bold'
        },
        textAlign:'center',
        color:'green'
}));

ventanaTransparente.add(
    Ti.UI.createImageView({
        opacity : 4.5,
    width:"60px",
    height:"60px",
    image:"img/face.png",
    top:10,
    left:25,
    borderRadius:10
   }));
ventanaTransparente.add(
    Ti.UI.createImageView({
    width:"60px",
    height:"60px",
    image:"img/mail.png",
    top:10,
    left:100,
    borderRadius:10          
        
}));
ventanaTransparente.add(
    Ti.UI.createImageView({
    width:"60px",
    height:"60px",
    image:"img/message.png",
    top:10,
    left:170,
    borderRadius:10
}));

ventanaTransparente.add(
    Ti.UI.createImageView({
    width:"60px",
    height:"60px",
    image:"img/twitter.png",
    top:100,
    left:20,
    borderRadius:10
}));

ventanaTransparente.add(botonCancelar);
boton.addEventListener('click', function(e) {
    ventanaTransparente.open();
});

ventanaPrincipal.add(boton);
ventanaPrincipal.open();