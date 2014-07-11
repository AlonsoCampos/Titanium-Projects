function Controller() {
    function checkemail(emailAddress) {
        var testresults;
        var str = emailAddress;
        var filter = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        testresults = filter.test(str) ? true : false;
        return testresults;
    }
    function NuevaCuenta() {
        if ("" != $.txtEmailw.value && "" != $.txtPasswordw.value && "" != $.txtconfirmew.value && "" != $.txtnombrew.value && "" != $.txtapellidow.value) if ($.txtPasswordw.value != $.txtconfirmew.value) alert("Las contraseñas no coinciden"); else if (checkemail($.txtEmailw.value)) {
            createReq.open("POST", "http://localhost/wanagow/new.php");
            var params = {
                nombre: $.txtnombrew.value,
                apellido: $.txtapellidow.value,
                email: $.txtEmailw.value,
                password: $.txtPasswordw.value
            };
            createReq.send(params);
            alert("Informacion enviada");
        } else alert("Por favor ingresa un correo valido"); else alert("Complete la informacion necesaria");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Registro";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.container = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.imagenw = Ti.UI.createImageView({
        image: "imagen/reeee.jpg",
        height: 100,
        width: 800,
        righ: 900,
        top: 20,
        id: "imagenw"
    });
    $.__views.container.add($.__views.imagenw);
    $.__views.imagew = Ti.UI.createImageView({
        image: "imagen/face.jpg",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        top: 130,
        id: "imagew"
    });
    $.__views.container.add($.__views.imagew);
    $.__views.imagew = Ti.UI.createImageView({
        image: "imagen/face.jpg",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        top: 130,
        id: "imagew"
    });
    $.__views.container.add($.__views.imagew);
    $.__views.label1w = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        color: "black",
        layout: "center",
        top: 190,
        text: "DATOS DE LA CUENTA",
        id: "label1w"
    });
    $.__views.container.add($.__views.label1w);
    $.__views.txtEmailw = Ti.UI.createTextField({
        width: 300,
        right: 50,
        left: 250,
        height: 45,
        top: 250,
        hintText: "Email",
        borderColor: "#F4CE00",
        borderWidth: 1.2,
        borderRadius: 10,
        borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
        color: "black",
        id: "txtEmailw"
    });
    $.__views.container.add($.__views.txtEmailw);
    $.__views.txtPasswordw = Ti.UI.createTextField({
        width: 300,
        right: 50,
        left: 250,
        height: 45,
        top: 300,
        borderWidth: 1.2,
        borderRadius: 10,
        hintText: "Password",
        borderColor: "#F4CE00",
        borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
        color: "black",
        id: "txtPasswordw",
        passwordMask: "true"
    });
    $.__views.container.add($.__views.txtPasswordw);
    $.__views.txtconfirmew = Ti.UI.createTextField({
        width: 300,
        right: 50,
        left: 250,
        height: 45,
        top: 350,
        hintText: "Confirme Password",
        borderColor: "#F4CE00",
        borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
        color: "black",
        id: "txtconfirmew",
        passwordMask: "true"
    });
    $.__views.container.add($.__views.txtconfirmew);
    $.__views.label2w = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        top: 410,
        text: "DATOS DEL USUARIO",
        id: "label2w"
    });
    $.__views.container.add($.__views.label2w);
    $.__views.txtnombrew = Ti.UI.createTextField({
        width: 300,
        right: 50,
        left: 250,
        height: 45,
        top: 450,
        hintText: "Nombre",
        borderColor: "#F4CE00",
        borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
        color: "black",
        id: "txtnombrew"
    });
    $.__views.container.add($.__views.txtnombrew);
    $.__views.txtapellidow = Ti.UI.createTextField({
        width: 300,
        right: 50,
        left: 250,
        height: 45,
        top: 500,
        hintText: "Apellido",
        borderColor: "#F4CE00",
        borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
        color: "black",
        id: "txtapellidow"
    });
    $.__views.container.add($.__views.txtapellidow);
    $.__views.btn1w = Ti.UI.createButton({
        width: 300,
        right: 300,
        left: 250,
        backgroundColor: "#E3C109",
        height: 50,
        top: 570,
        font: {
            fontFamily: "Helvetica Neue"
        },
        color: "white",
        title: "Fecha de Nacimiento",
        id: "btn1w"
    });
    $.__views.container.add($.__views.btn1w);
    $.__views.label3w = Ti.UI.createLabel({
        width: 100,
        right: 100,
        left: 260,
        height: 50,
        top: 650,
        text: "Sexo:",
        id: "label3w"
    });
    $.__views.container.add($.__views.label3w);
    var __alloyId3 = [];
    var __alloyId6 = {
        title: "Mujer",
        ns: "Alloy.Abstract"
    };
    __alloyId3.push(__alloyId6);
    var __alloyId7 = {
        title: "Hombre",
        ns: "Alloy.Abstract"
    };
    __alloyId3.push(__alloyId7);
    $.__views.genero = Ti.UI.createButtonBar({
        backgroundColor: "#336699",
        top: 650,
        style: Titanium.UI.iPhone.SystemButtonStyle.BAR,
        height: 40,
        width: 250,
        left: 320,
        value: true,
        labels: __alloyId3,
        id: "genero"
    });
    $.__views.container.add($.__views.genero);
    $.__views.btn4w = Ti.UI.createButton({
        width: 100,
        right: 500,
        left: 600,
        backgroundColor: "#515050",
        height: 50,
        top: 750,
        font: {
            fontFamily: "Helvetica Neue"
        },
        color: "white",
        title: "Siguiente",
        id: "btn4w"
    });
    $.__views.container.add($.__views.btn4w);
    NuevaCuenta ? $.__views.btn4w.addEventListener("click", NuevaCuenta) : __defers["$.__views.btn4w!click!NuevaCuenta"] = true;
    $.__views.imagew = Ti.UI.createImageView({
        image: "imagen/face.jpg",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        top: 130,
        id: "imagew"
    });
    $.__views.container.add($.__views.imagew);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var createReq = Titanium.Network.createHTTPClient({
        onload: function() {
            if ("Insert failed" == this.responseText || "That username or email already exists" == this.responseText) alert(this.responseText); else {
                var params = {
                    email: $.txtEmailw.value,
                    password: $.txtPasswordw.value,
                    nombre: $.txtnombrew.value,
                    apellido: $.txtapellidow.value
                };
                Alloy.createController("Next", params).getView().open();
            }
        }
    });
    __defers["$.__views.btn4w!click!NuevaCuenta"] && $.__views.btn4w.addEventListener("click", NuevaCuenta);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;