// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');
 
 //FACEBOOK CREDENTIAL
Titanium.Facebook.appid = "1423658011243570";
Titanium.Facebook.permissions = ['publish_stream', 'read_stream','user_birthday','email'];
 
//
// create root window
//
var win1 = Titanium.UI.createWindow({
    title:'Create Album and Post Photos in Facebook Using Titanium',
    backgroundColor:'#fff',
    tabBarHidden:true,
    navBarHidden:true
});
 
 
var title = Ti.UI.createLabel({
    text:'Create Album and Post Photos in Facebook Using Titanium',
    width:320,
    top:0,
    left:0,
    height:40,
    color:'#fff',
    backgroundColor:'#000',
    textAlign:'center',
    font:{fontSize:14, fontWeight:'bold', fontFamily:'Helvetica Neue'},
});
win1.add(title);
 
var button = Titanium.UI.createButton({
    color:'blue',
    title:'Login with Facebook',
    font:{fontSize:14, fontWeight:'bold', fontFamily:'Helvetica Neue'},
    textAlign:'rigth',
    width:170,
    height:35,
    top:50,
    right:5
});
 
win1.add(button);
 
var formContainer = Ti.UI.createView({
    backgroundColor:'#ccc',
    height:170,
    top:110,
    left:20,
    width:280,
    borderRadius:7,
    borderColor:'#999',
    borderWidth:1,
    visible:Titanium.Facebook.loggedIn
});
win1.add(formContainer);
 
var titleInput = Ti.UI.createTextField({
    hintText:'Album Title',
    backgroundColor:'#fff',
    borderRadius:5,
    borderColor:'#000',
    borderWidth:1,
    left:10,
    top:20,
    height:30,
    width:180,
    font:{fontSize:14, fontWeight:'normal', fontFamily:'Helvetica Neue'},
});
formContainer.add(titleInput);
 
var descInput = Ti.UI.createLabel({
    hintText:'Album Description',
    backgroundColor:'#fff',
    borderRadius:5,
    borderColor:'#000',
    borderWidth:1,
    left:10,
    top:80,
    height:30,
    width:180,
    font:{fontSize:14, fontWeight:'normal', fontFamily:'Helvetica Neue'},
});
formContainer.add(descInput);
 
var submitButton = Titanium.UI.createButton({
    color:'blue',
    title:'Create Album',
    font:{fontSize:14, fontWeight:'bold', fontFamily:'Helvetica Neue'},
    textAlign:'left',
    left:10,
    top:130,
    height:30,
    width:110
});
formContainer.add(submitButton);
 
win1.open();
 
button.addEventListener('click',function(e) {
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
 
 
submitButton.addEventListener('click',function(e) {    
    var data = {
        link : "http://www.appcelerator.com",
        name : "Appcelerator Titanium Mobile",
        message : "Checkout this cool open source project for creating mobile apps",
        caption : "Appcelerator Titanium Mobile",
        picture : "http://developer.appcelerator.com/assets/img/DEV_titmobile_image.png",
        description : "You've got the ideas, now you've got the power. Titanium translates " +
                      "your hard won web skills into native applications..."
    };
Titanium.Facebook.dialog("feed", data, function(e) {
    if(e.success && e.result) {
        alert("Success! New Post ID: " + e.result);
    } else {
        if(e.error) {
            alert(e.error);
        } else {
            alert("User canceled dialog.");
        }
    }
});

    
    
    
    
});
 
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
      
}
 
 
 
Titanium.Facebook.addEventListener('login', function(e) {
if (e.success) {
    alert('Successfully loggedin');
    
    alert(e.data);
     alert(e.data.birthday);
    button.title = "Logout from Facebook";
    
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

  
    
    formContainer.visible = true;
 	//Calendario(e.data.email,e.data.first_name,e.data.last_name);   
    
    
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
 
 
