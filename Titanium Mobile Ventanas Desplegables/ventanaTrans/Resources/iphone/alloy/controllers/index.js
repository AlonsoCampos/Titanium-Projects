function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var ventanaPrincipal = Ti.UI.createWindow({
        backgroundColor: "blue",
        title: "Ventana Principal"
    });
    var boton = Ti.UI.createButton({
        title: "Abrir Ventana 2",
        top: "10dp",
        left: "60dp",
        height: "40dp",
        width: "200dp",
        backgroundColor: "#FFCC00",
        borderRadius: 10
    });
    var botonCancelar = Ti.UI.createButton({
        backgroundColor: "#FFCC00",
        borderRadius: 10,
        left: 70,
        top: 180,
        width: 120,
        height: 25,
        title: "Cancelar"
    });
    ventanaPrincipal.add(boton);
    botonCancelar.addEventListener("click", function() {
        ventanaTransparente.close();
    });
    var ventanaTransparente = Ti.UI.createWindow({
        opacity: .8,
        backgroundColor: "black",
        borderColor: "black",
        left: 90,
        top: 80,
        width: 250,
        height: 250,
        borderRadius: 8
    });
    ventanaTransparente.add(Ti.UI.createLabel({
        opacity: 3.5,
        left: 15,
        top: 70,
        width: "auto",
        height: "auto",
        text: "Facebook",
        font: {
            fontSize: "12dp",
            fontWeight: "bold"
        },
        textAlign: "center",
        color: "green"
    }));
    ventanaTransparente.add(Ti.UI.createLabel({
        left: 115,
        top: 70,
        width: "auto",
        height: "auto",
        text: "Mail",
        font: {
            fontSize: "12dp",
            fontWeight: "bold"
        },
        textAlign: "center",
        color: "green"
    }));
    ventanaTransparente.add(Ti.UI.createLabel({
        left: 165,
        top: 70,
        width: "auto",
        height: "auto",
        text: "Message",
        font: {
            fontSize: "12dp",
            fontWeight: "bold"
        },
        textAlign: "center",
        color: "green"
    }));
    ventanaTransparente.add(Ti.UI.createLabel({
        left: 25,
        top: 160,
        width: "auto",
        height: "auto",
        text: "Twitter",
        font: {
            fontSize: "12dp",
            fontWeight: "bold"
        },
        textAlign: "center",
        color: "green"
    }));
    ventanaTransparente.add(Ti.UI.createImageView({
        opacity: 4.5,
        width: "60px",
        height: "60px",
        image: "img/face.png",
        top: 10,
        left: 25,
        borderRadius: 10
    }));
    ventanaTransparente.add(Ti.UI.createImageView({
        width: "60px",
        height: "60px",
        image: "img/mail.png",
        top: 10,
        left: 100,
        borderRadius: 10
    }));
    ventanaTransparente.add(Ti.UI.createImageView({
        width: "60px",
        height: "60px",
        image: "img/message.png",
        top: 10,
        left: 170,
        borderRadius: 10
    }));
    ventanaTransparente.add(Ti.UI.createImageView({
        width: "60px",
        height: "60px",
        image: "img/twitter.png",
        top: 100,
        left: 20,
        borderRadius: 10
    }));
    ventanaTransparente.add(botonCancelar);
    boton.addEventListener("click", function() {
        ventanaTransparente.open();
    });
    ventanaPrincipal.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;