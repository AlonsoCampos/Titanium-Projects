function Controller() {
    function Calendario(correo, nombre, apellidos) {
        var idCliente = {
            email: correo,
            nombre: nombre,
            apellido: apellidos
        };
        var enviar = Ti.Network.createHTTPClient({
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert("La conexion esta tardando demaciado intente acceder nuevamente");
            },
            timeout: 3e3
        });
        enviar.open("POST", "http://localhost/wanagow/segundaversion/loginFacebook.php");
        enviar.send(idCliente);
        enviar.onload = function() {
            var json = JSON.parse(this.responseText);
            var json = json.nombre;
            alert("Ingresado");
        };
    }
    function doClick() {
        alert($.label.text);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Login con Facebook",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    doClick ? $.__views.label.addEventListener("click", doClick) : __defers["$.__views.label!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    Titanium.Facebook.appid = "1423658011243570";
    Titanium.Facebook.permissions = [ "publish_stream", "read_stream", "user_birthday", "email" ];
    $.label.addEventListener("click", function() {
        if (Titanium.Facebook.loggedIn) {
            var logOutWarning = Titanium.UI.createAlertDialog({
                title: "",
                message: "Are you sure want to Logout from Facebook",
                buttonNames: [ "Yes", "No" ],
                cancel: 1
            });
            logOutWarning.show();
            logOutWarning.addEventListener("click", function(e) {
                0 == e.index && Titanium.Facebook.logout();
            });
        } else Titanium.Facebook.authorize();
    });
    Titanium.Facebook.addEventListener("login", function(e) {
        if (e.success) {
            alert("Successfully loggedin");
            alert(e.data);
            alert(e.data.birthday);
            Ti.Facebook.getUid();
            var genero;
            genero = "male" === e.data.gender ? 1 : 0;
            var params = {
                email: e.data.email,
                nombre: e.data.first_name,
                apellido: e.data.last_name,
                genero: genero,
                activo: 1,
                fechaNacimiento: e.data.birthday
            };
            var enviar = Ti.Network.createHTTPClient({
                onerror: function(e) {
                    Ti.API.debug(e.error);
                    alert("There was an error during the connection");
                },
                timeout: 3e3
            });
            enviar.open("POST", "http://localhost/wanagow/segundaversion/loginFacebook.php");
            enviar.send(params);
            enviar.onload = function() {
                if ("Insert failed" == this.responseText || "That username or email already exists" == this.responseText) alert(this.responseText); else {
                    var alertDialog = Titanium.UI.createAlertDialog({
                        title: "Alert",
                        message: this.responseText,
                        buttonNames: [ "OK" ]
                    });
                    alertDialog.show();
                }
            };
            Alloy.createController("next").getView().open();
            Calendario(e.data.email, e.data.first_name, e.data.last_name);
        } else e.error ? alert("Error = " + e.error) : e.cancelled && alert("cancelled");
    });
    Titanium.Facebook.addEventListener("logout", function() {
        alert("Successfully logged out from Facebook");
        button.title = "Login with Facebook";
        formContainer.visible = false;
    });
    $.index.open();
    __defers["$.__views.label!click!doClick"] && $.__views.label.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;