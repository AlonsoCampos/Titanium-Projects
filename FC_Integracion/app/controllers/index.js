Titanium.Facebook.appid = "1423658011243570";
Titanium.Facebook.permissions = ['publish_stream', 'read_stream','user_birthday','email'];

function Calendario (correo,nombre,apellidos) 
{
 var idCliente = {
          email: correo,
          nombre:nombre,
          apellido:apellidos
    };
     
    var enviar = Ti.Network.createHTTPClient({ 
           onerror: function(e){ 
                  Ti.API.debug(e.error); 
                  alert('La conexion esta tardando demaciado intente acceder nuevamente'); 
            }, 
         timeout:3000, 
    });
    
    enviar.open('POST', 'http://localhost/wanagow/segundaversion/loginFacebook.php'); 
    enviar.send(idCliente);
    enviar.onload = function()
    {
        var json = JSON.parse(this.responseText); 
        var json = json.nombre; 
        alert("Ingresado");
    };
      
};


function doClick(e) {
    alert($.label.text);
}
$.label.addEventListener('click',function(e) {
    if(Titanium.Facebook.loggedIn){
        var logOutWarning = Titanium.UI.createAlertDialog({
            title: "",
            message: 'Are you sure want to Logout from Facebook',
            buttonNames: ['Yes', 'No'],
            cancel: 1
        });
        logOutWarning.show();
        
        logOutWarning.addEventListener('click', function(e) {
            if(e.index == 0){
              Titanium.Facebook.logout();
            }
        });
    }else{
        Titanium.Facebook.authorize();
    }
});


Titanium.Facebook.addEventListener('login', function(e) {
if (e.success) {
    alert('Successfully loggedin');
    
    alert(e.data);
     alert(e.data.birthday);
    //button.title = "Logout from Facebook";
    var fbuid = Ti.Facebook.getUid();
    var genero;
    if(e.data.gender==="male")
    {
    	genero =1;	
    }else{
    	genero=0;
    }
 
 var params = 
 	{
          email: e.data.email,
          nombre:e.data.first_name,
          apellido:e.data.last_name,
          genero:genero,
          activo:1,
          fechaNacimiento:e.data.birthday
    };
    
    var enviar = Ti.Network.createHTTPClient({ 
        onerror: function(e){ 
            Ti.API.debug(e.error); 
              alert('There was an error during the connection'); 
        }, 
            timeout:3000, 
    });

    enviar.open('POST', 'http://localhost/wanagow/segundaversion/loginFacebook.php'); 
    enviar.send(params);
    enviar.onload = function(){
          if (this.responseText == "Insert failed" || this.responseText == "That username or email already exists")
          {
              alert(this.responseText);
          } 
          else
          {
              var alertDialog = Titanium.UI.createAlertDialog({
                  title: 'Alert',
                  message: this.responseText,
                  buttonNames: ['OK']
              });
              alertDialog.show();
                           
          }
    }; 

  	  var m= Alloy.createController('next').getView().open();
    
    Calendario(e.data.email,e.data.first_name,e.data.last_name);   
    
    
}else if (e.error) {	
    alert("Error = "+e.error);
} else if (e.cancelled) {
    alert('cancelled');
}
     
});
 
 
Titanium.Facebook.addEventListener('logout', function(e) {
    alert('Successfully logged out from Facebook');
    button.title = "Login with Facebook";
    formContainer.visible = false;
});






$.index.open();
