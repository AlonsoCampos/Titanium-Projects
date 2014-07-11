// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var label1 = Ti.UI.createImageView({
	color:'#999',
	backgroundColor:"#AAA",
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	image:'img/face.png',
	width:'auto'
});

win1.add(label1);

function DialogoCompartirFacebook(butoon,link,tituloPrincipal,tituloSecundario,descripcion,imagen){
 /*Facebook CONFIG*/
            
      Titanium.Facebook.appid = "1423658011243570";
      Titanium.Facebook.permissions = ['publish_stream', 'read_stream','user_birthday'];

      butoon.addEventListener('click',function(e) {    
          var data = {
              link : link,//"http://www.appcelerator.com",
              name : tituloPrincipal,//"Appcelerator Titanium Mobile",
              message : "Checkout this cool open source project for creating mobile apps",
              caption : tituloSecundario,//"Appcelerator Titanium Mobile",
              picture : imagen,//"http://developer.appcelerator.com/assets/img/DEV_titmobile_image.png",
              description :descripcion //"You've got the ideas, now you've got the power. Titanium translates " +
                            //"your hard won web skills into native applications..."
          };
          alert(data);
          
          Titanium.Facebook.dialog("feed", data, function(e) {
            if(e.success && e.result) {
            	alert(e.source);
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
              
/*FIN FACEBOOK*/
};
DialogoCompartirFacebook(label1,'http://mejorando.la','Cursos Profesionales','Django,Node JS',
'Los mejores cursos de desarrollo web profesional','http://www.smartthinking.com.mx/imgs/apps/wanagow.png');

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
