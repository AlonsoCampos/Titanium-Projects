// 
//  Registro.js
//  WanagoSistema
//  
//  Created by Alonso Campos on 2014-05-19.
//  Copyright 2014 Alonso Campos. All rights reserved.
// 

function checkemail(emailAddress)
{
	var testresults;
    var str = emailAddress;
    var filter = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (filter.test(str))
    {
        testresults = true;
    }
    else
    {
        testresults = false;
    }
    return (testresults);
};
var createReq = Titanium.Network.createHTTPClient({
        onload:function()
        {
            if (this.responseText == "Insert failed" || this.responseText == "That username or email already exists")
            {
                alert(this.responseText);
            } 
            else
            {
                /*
                var alertDialog = Titanium.UI.createAlertDialog({
                    title: 'Alert',
                    message: this.responseText,
                    buttonNames: ['OK']
                });
                alertDialog.show();
                */
                var params = {
                    email: $.txtEmailw.value,
                    password: $.txtPasswordw.value,
                   	nombre: $.txtnombrew.value,
                    apellido: $.txtapellidow.value
                };
                
               Alloy.createController('Next',params).getView().open();
            }
        }
    });


function NuevaCuenta () {
	if ($.txtEmailw.value != '' && $.txtPasswordw.value != '' && $.txtconfirmew.value != '' && $.txtnombrew.value != '' && $.txtapellidow.value != '')
    {
        if ($.txtPasswordw.value != $.txtconfirmew.value)
        {
            alert("Las contraseñas no coinciden");
        }
        else
        {
            if (!checkemail($.txtEmailw.value))
            {
                alert("Por favor ingresa un correo valido");
            }
            else
            {
            	createReq.open("POST","http://localhost/wanagow/new.php");
                var params = {
                	nombre: $.txtnombrew.value,
                    apellido: $.txtapellidow.value,
                    email: $.txtEmailw.value,
                    password: $.txtPasswordw.value,
                    //password: Ti.Utils.md5HexDigest(password1.value),
                    
                };
                createReq.send(params);
                alert("Informacion enviada");
            }
        }
    }
    else
    {
        alert("Complete la informacion necesaria");
    }
    
	
}

function siguiente () {
	Alloy.createController('Next').getView().open();
}