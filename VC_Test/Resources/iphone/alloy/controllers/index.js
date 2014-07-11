function Controller() {
    function getTodoList() {
        var sendit = Ti.Network.createHTTPClient({
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert("There was an error during the connection");
            },
            timeout: 1e3
        });
        sendit.open("GET", "http://alonsocampos.net46.net/read_2.php");
        sendit.send();
        sendit.onload = function() {
            var json = JSON.parse(this.responseText);
            var json = json.nombre;
            0 == json.length && ($.tableView.headerTitle = "The database row is empty");
            dataArray = [];
            for (var i = 0; json.length > i; i++) {
                var row = Ti.UI.createTableViewRow({
                    selectedBackgroundColor: "white",
                    id: json[i].idEvento,
                    height: 110
                });
                row.titulo = json[i].nombre;
                row.imagen = json[i].image;
                row.detalles = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam arcu quam, accumsan quis leo quis, euismod sodales velit. Suspendisse eget vestibulum nibh. Integer blandit cursus justo in lobortis. Fusce pharetra varius blandit. Maecenas vestibulum vulputate dolor, mattis adipiscing diam suscipit sit amet. Integer ullamcorper massa non tortor ultrices fermentum. Morbi dignissim sem tellus, vel adipiscing elit egestas vitae. Nulla posuere pellentesque volutpat. Mauris convallis in neque in vestibulum. Mauris pharetra metus massa. In id posuere quam. Praesent euismod laoreet arcu, nec imperdiet diam tempus id. Etiam at nunc ut tortor luctus consectetur a sed sem.";
                row.fecha = json[i].fecha;
                row.hora = "10:00 am";
                row.costo = json[i].costo;
                row.lugar = json[i].lugar;
                var imageAvatar = Ti.UI.createImageView({
                    image: IMG_BASE + json[i].image,
                    left: 20,
                    top: 2,
                    width: 190,
                    height: 90
                });
                row.add(imageAvatar);
                var labelUserName = Ti.UI.createLabel({
                    color: "black",
                    font: {
                        fontFamily: "Arial",
                        fontSize: 16,
                        fontWeight: "bold"
                    },
                    text: "" + json[i].nombre,
                    left: 240,
                    top: 6,
                    width: 360,
                    height: 30
                });
                row.add(labelUserName);
                if (0 != json[i].costo) {
                    var labelDetails = Ti.UI.createLabel({
                        color: "#222",
                        font: {
                            fontFamily: "Arial",
                            fontSize: 14,
                            fontWeight: "normal"
                        },
                        text: "" + json[i].fecha + "               " + json[i].costo,
                        left: 240,
                        top: 44,
                        width: "100%"
                    });
                    row.add(labelDetails);
                } else {
                    var labelDetails = Ti.UI.createLabel({
                        color: "#222",
                        font: {
                            fontFamily: "Arial",
                            fontSize: 14,
                            fontWeight: "normal"
                        },
                        text: "" + json[i].fecha + "               " + "Gratuito",
                        left: 240,
                        top: 44,
                        width: "100%"
                    });
                    row.add(labelDetails);
                }
                switch (json[i].interes) {
                  case "Academica":
                    var view = Titanium.UI.createView({
                        borderRadius: 10,
                        backgroundColor: "yellow",
                        width: 10,
                        height: 150,
                        right: 0
                    });
                    row.add(view);
                    break;

                  case "Cultural":
                    var view = Titanium.UI.createView({
                        borderRadius: 10,
                        backgroundColor: "green",
                        width: 10,
                        height: 150,
                        right: 0
                    });
                    row.add(view);
                    break;

                  case "Entretenimiento":
                    var view = Titanium.UI.createView({
                        borderRadius: 10,
                        backgroundColor: "orange",
                        width: 10,
                        height: 150,
                        right: 0
                    });
                    row.add(view);
                }
                var labelDate = Ti.UI.createLabel({
                    color: "#999",
                    font: {
                        fontFamily: "Arial",
                        fontSize: 12,
                        fontWeight: "normal"
                    },
                    text: "" + json[i].lugar,
                    left: 240,
                    bottom: 10,
                    width: "100%",
                    height: 20
                });
                row.add(labelDate);
                dataArray.push(row);
            }
            $.tableView.setData(dataArray);
        };
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    var __alloyId0 = [];
    $.__views.readWin = Ti.UI.createWindow({
        id: "readWin"
    });
    getTodoList ? $.__views.readWin.addEventListener("open", getTodoList) : __defers["$.__views.readWin!open!getTodoList"] = true;
    $.__views.tableView = Ti.UI.createTableView({
        headerTitle: "",
        top: 50,
        id: "tableView"
    });
    $.__views.readWin.add($.__views.tableView);
    $.__views.__alloyId1 = Ti.UI.createButton({
        title: "Refresh",
        id: "__alloyId1"
    });
    $.__views.readWin.add($.__views.__alloyId1);
    getTodoList ? $.__views.__alloyId1.addEventListener("click", getTodoList) : __defers["$.__views.__alloyId1!click!getTodoList"] = true;
    $.__views.tab1 = Ti.UI.createTab({
        title: "Remote Read",
        icon: "KS_nav_ui.png",
        window: $.__views.readWin,
        id: "tab1"
    });
    __alloyId0.push($.__views.tab1);
    $.__views.insertWin = Ti.UI.createWindow({
        id: "insertWin"
    });
    $.__views.mainView = Ti.UI.createView({
        layout: "vertical",
        id: "mainView"
    });
    $.__views.insertWin.add($.__views.mainView);
    $.__views.inserTxtF = Ti.UI.createTextField({
        color: "#336699",
        top: "10dp",
        left: "10dp",
        width: "290dp",
        height: "50dp",
        id: "inserTxtF"
    });
    $.__views.mainView.add($.__views.inserTxtF);
    $.__views.insertBtn = Ti.UI.createButton({
        title: "Insert",
        top: "10dp",
        left: "180dp",
        width: "124dp",
        height: "50dp",
        id: "insertBtn"
    });
    $.__views.mainView.add($.__views.insertBtn);
    $.__views.tab2 = Ti.UI.createTab({
        title: "Remote Insert",
        icon: "KS_nav_ui.png",
        window: $.__views.insertWin,
        id: "tab2"
    });
    __alloyId0.push($.__views.tab2);
    $.__views.mainTabGroup = Ti.UI.createTabGroup({
        backgroundColor: "black",
        tabs: __alloyId0,
        id: "mainTabGroup"
    });
    $.__views.mainTabGroup && $.addTopLevelView($.__views.mainTabGroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var IMG_BASE = "http://alonsocampos.net46.net/";
    var dataArray = [];
    $.tableView.addEventListener("click", function(e) {
        var win = Alloy.createController("remota").getView();
        win.id = e.rowData.id;
        win.title = e.row.titulo;
        win.backgroundColor = "white";
        var imageAvatar = Ti.UI.createImageView({
            image: "http://alonsocampos.net46.net/" + e.row.imagen,
            left: 35,
            top: 25,
            right: 35,
            width: 700,
            height: 250
        });
        var Titulo = Titanium.UI.createLabel({
            text: e.row.titulo,
            width: "auto",
            height: "auto",
            top: 280,
            textAlign: "center"
        });
        var Descripcion = Titanium.UI.createLabel({
            text: e.row.detalles,
            width: "auto",
            height: "auto",
            top: 310,
            textAlign: "center"
        });
        var Fecha = Titanium.UI.createLabel({
            text: "Fecha: " + e.row.fecha,
            width: "auto",
            height: "auto",
            top: 450,
            textAlign: "center"
        });
        var Hora = Titanium.UI.createLabel({
            text: "Hora: " + e.row.hora,
            width: "auto",
            height: "auto",
            top: 480,
            textAlign: "center"
        });
        if (0 == e.row.costo) var Costo = Titanium.UI.createLabel({
            text: "Costo: Gratuito",
            width: "auto",
            height: "auto",
            top: 510,
            textAlign: "center"
        }); else var Costo = Titanium.UI.createLabel({
            text: "Costo: $ " + e.row.costo,
            width: "auto",
            height: "auto",
            top: 510,
            textAlign: "center"
        });
        var Lugar = Titanium.UI.createLabel({
            text: "Lugar: " + e.row.lugar,
            width: "auto",
            height: "auto",
            top: 540,
            textAlign: "center"
        });
        var buttonRuta = Titanium.UI.createButton({
            title: "Ruta hasta aqui",
            top: 600,
            left: 130,
            width: 150,
            height: 50
        });
        var buttonOrganizador = Titanium.UI.createButton({
            title: "Organizador",
            top: 600,
            right: 130,
            width: 170,
            height: 50
        });
        var buttonAgregarEvento = Titanium.UI.createButton({
            title: "Agregar este evento a mi agenda",
            top: 640,
            width: 400,
            height: 50
        });
        win.add(imageAvatar);
        win.add(Titulo);
        win.add(Descripcion);
        win.add(Fecha);
        win.add(Hora);
        win.add(Costo);
        win.add(Lugar);
        win.add(buttonRuta);
        win.add(buttonOrganizador);
        win.add(buttonAgregarEvento);
        $.tab1.open(win, {
            animation: true
        });
    });
    $.mainTabGroup.open();
    __defers["$.__views.readWin!open!getTodoList"] && $.__views.readWin.addEventListener("open", getTodoList);
    __defers["$.__views.__alloyId1!click!getTodoList"] && $.__views.__alloyId1.addEventListener("click", getTodoList);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;