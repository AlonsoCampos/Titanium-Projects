function Controller() {
    function OmitirPreferencias() {
        var idCliente = {
            email: params.email
        };
        var enviar = Ti.Network.createHTTPClient({
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert("La conexion esta tardando demaciado intente acceder nuevamente");
            },
            timeout: 3e3
        });
        enviar.open("POST", "http://localhost/wanagow/segundaversion/cliente.php");
        enviar.send(idCliente);
        enviar.onload = function() {
            var alertDialog = Titanium.UI.createAlertDialog({
                title: "Alert",
                message: "Registro Terminado",
                buttonNames: [ "OK" ]
            });
            alertDialog.show();
            var correo = {
                email: params.email,
                password: params.password,
                nombre: params.nombre,
                apellidos: params.apellido,
                academica: $.tableViewAcademica.data[0].rows[0].children[0].value,
                cultural: $.tableViewCultural.data[0].rows[0].children[0].value,
                entretenimiento: $.tableViewEntretenimiento.data[0].rows[0].children[0].value
            };
            Alloy.createController("Evento", correo).getView().open();
        };
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Next";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.container1 = Ti.UI.createWindow({
        backgroundColor: "c5ccd4",
        id: "container1"
    });
    $.__views.container1 && $.addTopLevelView($.__views.container1);
    $.__views.imagenW = Ti.UI.createImageView({
        image: "imagen/regis.jpg",
        height: 100,
        width: 800,
        righ: 900,
        top: 20,
        id: "imagenW"
    });
    $.__views.container1.add($.__views.imagenW);
    $.__views.label2W = Ti.UI.createLabel({
        height: 100,
        width: 800,
        righ: 900,
        top: 120,
        backgroundColor: "#313335",
        layout: "center",
        color: "#FCFFFF",
        text: "YA CASI TERMINAS\n	    Ayudanos a llevarte solo a los eventos que te interesan llenando esta lista.Puedes hacerlo despues desde la configuracion de tu cuenta",
        id: "label2W",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    });
    $.__views.container1.add($.__views.label2W);
    $.__views.omitir = Ti.UI.createButton({
        width: 100,
        right: 60,
        backgroundColor: "#EBC805",
        height: 50,
        top: 50,
        font: {
            fontFamily: "Helvetica Neue"
        },
        color: "white",
        title: "Omitir",
        id: "omitir"
    });
    $.__views.container1.add($.__views.omitir);
    OmitirPreferencias ? $.__views.omitir.addEventListener("click", OmitirPreferencias) : __defers["$.__views.omitir!click!OmitirPreferencias"] = true;
    $.__views.tableViewAcademica = Ti.UI.createTableView({
        id: "tableViewAcademica",
        top: "2",
        borderRadios: "10",
        width: "auto",
        height: "442"
    });
    $.__views.container1.add($.__views.tableViewAcademica);
    $.__views.tableViewCultural = Ti.UI.createTableView({
        id: "tableViewCultural",
        top: "500",
        borderRadios: "10",
        width: "auto",
        height: "1041"
    });
    $.__views.container1.add($.__views.tableViewCultural);
    $.__views.tableViewEntretenimiento = Ti.UI.createTableView({
        id: "tableViewEntretenimiento",
        top: "1650",
        borderRadios: "10",
        width: "auto",
        height: "1601"
    });
    $.__views.container1.add($.__views.tableViewEntretenimiento);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var params = arguments[0] || {};
    var sendit = Ti.Network.createHTTPClient({
        onerror: function(e) {
            Ti.API.debug(e.error);
            alert("La conexion esta tardando demaciado intente acceder nuevamente");
        },
        timeout: 3e3
    });
    sendit.open("GET", "http://localhost/wanagow/preferencia.php");
    sendit.send();
    sendit.onload = function() {
        var json = JSON.parse(this.responseText);
        var json = json.nombre;
        0 == json.length && (tableView.headerTitle = "No hay informacion disponible");
        dataArray = [];
        dataArray2 = [];
        dataArray3 = [];
        var scrollView = Ti.UI.createScrollView({
            contentHeight: "auto",
            showVerticalScrollIndicator: true,
            top: 280,
            height: "95%",
            width: 600
        });
        var view = Ti.UI.createView({
            backgroundColor: "c5ccd4",
            borderRadius: 10,
            top: 0,
            height: 3600,
            width: 500
        });
        scrollView.add(view);
        for (var i = 0; json.length > i; i++) {
            var row = Ti.UI.createTableViewRow({
                selectedBackgroundColor: "yellow",
                height: 40
            });
            if ("Academico" == json[i].tipo && "" == json[i].detalles) {
                var basicSwitch = Ti.UI.createSwitch({
                    value: true,
                    right: 0
                });
                row.add(basicSwitch);
                var labelUserName = Ti.UI.createLabel({
                    color: "black",
                    font: {
                        fontFamily: "Arial",
                        fontSize: 16,
                        fontWeight: "bold"
                    },
                    text: "  " + json[i].tipo,
                    objName: "nombre",
                    left: 0,
                    top: 6,
                    width: 360,
                    height: 30
                });
                row.add(labelUserName);
            } else {
                var labelUserName = Ti.UI.createLabel({
                    color: "black",
                    font: {
                        fontFamily: "Arial",
                        fontSize: 16,
                        fontWeight: "bold"
                    },
                    text: "*" + json[i].detalles,
                    objName: "nombre",
                    left: 0,
                    top: 6,
                    width: 360,
                    height: 30
                });
                row.add(labelUserName);
                var button = Ti.UI.createButton({
                    backgroundImage: "img/off.png",
                    value: false,
                    top: 3,
                    width: 37,
                    height: 35,
                    right: 0
                });
                button.on = function() {
                    this.backgroundColor = "#159902";
                    this.value = true;
                    this.backgroundImage = "img/on.png";
                };
                button.off = function() {
                    this.backgroundColor = "#aaa";
                    this.value = false;
                    this.backgroundImage = "img/off.png";
                };
                button.addEventListener("click", function(e) {
                    false == e.source.value ? e.source.on() : e.source.off();
                });
                row.add(button);
            }
            ("Academica" == json[i].tipo || "Academico" == json[i].tipo || "Area de Estudio" == json[i].tipo) && dataArray.push(row);
        }
        $.tableViewAcademica.setData(dataArray);
        view.add($.tableViewAcademica);
        for (var i = 0; json.length > i; i++) {
            var row = Ti.UI.createTableViewRow({
                selectedBackgroundColor: "yellow",
                height: 40
            });
            if ("Cultural | Turistica" == json[i].tipo && "" == json[i].detalles) {
                var basicSwitch = Ti.UI.createSwitch({
                    value: true,
                    right: 0
                });
                row.add(basicSwitch);
                var labelUserName = Ti.UI.createLabel({
                    color: "black",
                    font: {
                        fontFamily: "Arial",
                        fontSize: 16,
                        fontWeight: "bold"
                    },
                    text: "  " + json[i].tipo,
                    objName: "nombre",
                    left: 0,
                    top: 6,
                    width: 360,
                    height: 30
                });
                row.add(labelUserName);
            } else {
                var button = Ti.UI.createButton({
                    backgroundImage: "img/off.png",
                    backgroundSelectedImage: "img/on.png",
                    value: false,
                    top: 3,
                    width: 37,
                    height: 35,
                    right: 0
                });
                button.on = function() {
                    this.backgroundColor = "#159902";
                    this.value = true;
                    this.backgroundImage = "img/on.png";
                };
                button.off = function() {
                    this.backgroundColor = "#aaa";
                    this.value = false;
                    this.backgroundImage = "img/off.png";
                };
                button.addEventListener("click", function(e) {
                    false == e.source.value ? e.source.on() : e.source.off();
                });
                row.add(button);
                if ("Comedia" == json[i].detalles || "Drama" == json[i].detalles || "Infantil" == json[i].detalles || "Musical" == json[i].detalles || "Fotografia" == json[i].detalles || "Escultura" == json[i].detalles || "Pintura" == json[i].detalles || "Libros" == json[i].detalles || "Clasica" == json[i].detalles || "Instrumental" == json[i].detalles || "Folklore | Popular" == json[i].detalles || "Ferias" == json[i].detalles || "Carnavales" == json[i].detalles || "Peregrinaciones" == json[i].detalles || "Fiestas Religiosas | Indigenas" == json[i].detalles || "Otros" == json[i].detalles || "Otras" == json[i].detalles) {
                    var labelUserName = Ti.UI.createLabel({
                        color: "black",
                        font: {
                            fontFamily: "Arial",
                            fontSize: 16,
                            fontWeight: "bold"
                        },
                        text: "   - " + json[i].detalles,
                        objName: "nombre",
                        left: 0,
                        top: 6,
                        width: 360,
                        height: 30
                    });
                    row.add(labelUserName);
                } else {
                    var labelUserName = Ti.UI.createLabel({
                        color: "black",
                        font: {
                            fontFamily: "Arial",
                            fontSize: 16,
                            fontWeight: "bold"
                        },
                        text: json[i].detalles,
                        objName: "nombre",
                        left: 0,
                        top: 6,
                        width: 360,
                        height: 30
                    });
                    row.add(labelUserName);
                }
            }
            ("Cultural" == json[i].tipo || "Cultural | Turistica" == json[i].tipo || "Teatro" == json[i].tipo || "Exposicion" == json[i].tipo || "Musica" == json[i].tipo || "Turistico" == json[i].tipo) && dataArray2.push(row);
        }
        $.tableViewCultural.setData(dataArray2);
        view.add($.tableViewCultural);
        for (var i = 0; json.length > i; i++) {
            var row = Ti.UI.createTableViewRow({
                selectedBackgroundColor: "yellow",
                height: 40
            });
            if ("Entretenimiento" == json[i].tipo && "" == json[i].detalles) {
                var basicSwitch = Ti.UI.createSwitch({
                    value: true,
                    right: 0
                });
                row.add(basicSwitch);
                var labelUserName = Ti.UI.createLabel({
                    color: "black",
                    font: {
                        fontFamily: "Arial",
                        fontSize: 16,
                        fontWeight: "bold"
                    },
                    text: "" + json[i].tipo,
                    objName: "nombre",
                    left: 0,
                    top: 6,
                    width: 360,
                    height: 30
                });
                row.add(labelUserName);
            } else {
                var button = Ti.UI.createButton({
                    backgroundImage: "img/off.png",
                    value: false,
                    top: 3,
                    width: 37,
                    height: 35,
                    right: 0
                });
                button.on = function() {
                    this.backgroundColor = "#159902";
                    this.value = true;
                    this.backgroundImage = "img/on.png";
                };
                button.off = function() {
                    this.backgroundColor = "#aaa";
                    this.value = false;
                    this.backgroundImage = "img/off.png";
                };
                button.addEventListener("click", function(e) {
                    false == e.source.value ? e.source.on() : e.source.off();
                });
                row.add(button);
                if ("Electronica" == json[i].detalles || "Jazz | Blues" == json[i].detalles || "Trova" == json[i].detalles || "Rock" == json[i].detalles || "Rock" == json[i].detalles || "Alternativa" == json[i].detalles || "Grupera | Norteña" == json[i].detalles || "Infantil" == json[i].detalles || "Hip-Hop" == json[i].detalles || "Ranchera" == json[i].detalles || "Pop" == json[i].detalles || "Metal" == json[i].detalles || "Reague" == json[i].detalles || "Reggeatton" == json[i].detalles || "Baladas | Boleros" == json[i].detalles || "Salsa | Cumbia" == json[i].detalles || "Cristiana" == json[i].detalles || "Futbol" == json[i].detalles || "Basketball" == json[i].detalles || "Tenis" == json[i].detalles || "Beisball" == json[i].detalles || "Volleyball" == json[i].detalles || "Torneos" == json[i].detalles || "Maratones" == json[i].detalles || "Autos | Motos" == json[i].detalles || "Futbol Americano" == json[i].detalles || "Artes Marciales" == json[i].detalles || "Box" == json[i].detalles || "Lucha Libre" == json[i].detalles || "Atletismo" == json[i].detalles || "Toros" == json[i].detalles || "Inaguracion" == json[i].detalles || "Promocion" == json[i].detalles || "Show" == json[i].detalles || "Fiestas Tematicas" == json[i].detalles || "Bienvenida" == json[i].detalles) {
                    var labelUserName = Ti.UI.createLabel({
                        color: "black",
                        font: {
                            fontFamily: "Arial",
                            fontSize: 16,
                            fontWeight: "bold"
                        },
                        text: "  - " + json[i].detalles,
                        objName: "nombre",
                        left: 5,
                        top: 6,
                        width: 360,
                        height: 30
                    });
                    row.add(labelUserName);
                } else {
                    var labelUserName = Ti.UI.createLabel({
                        color: "black",
                        font: {
                            fontFamily: "Arial",
                            fontSize: 16,
                            fontWeight: "bold"
                        },
                        text: "" + json[i].detalles,
                        objName: "nombre",
                        left: 0,
                        top: 6,
                        width: 360,
                        height: 30
                    });
                    row.add(labelUserName);
                }
            }
            ("Entretenimiento" == json[i].tipo || "Conciertos" == json[i].tipo || "Deportes" == json[i].tipo || "Bares Antros" == json[i].tipo) && dataArray3.push(row);
        }
        $.tableViewEntretenimiento.setData(dataArray3);
        view.add($.tableViewEntretenimiento);
        var guardar = Ti.UI.createButton({
            title: "Guardar",
            width: "100%",
            backgroundColor: "#E3C109",
            height: 50,
            top: 3300,
            font: {
                fontFamily: "Helvetica Neue"
            },
            color: "white"
        });
        view.add(guardar);
        guardar.addEventListener("click", function() {
            var enviar = Ti.Network.createHTTPClient({
                onerror: function(e) {
                    Ti.API.debug(e.error);
                    alert("There was an error during the connection");
                },
                timeout: 3e3
            });
            enviar.open("POST", "http://localhost/wanagow/segundaversion/gurdarintereses.php");
            var params = {
                academica: $.tableViewAcademica.data[0].rows[0].children[0].value,
                area: $.tableViewAcademica.data[0].rows[1].children[1].value,
                congreso: $.tableViewAcademica.data[0].rows[2].children[1].value,
                curso: $.tableViewAcademica.data[0].rows[3].children[1].value,
                convencion: $.tableViewAcademica.data[0].rows[4].children[1].value,
                seminario: $.tableViewAcademica.data[0].rows[5].children[1].value,
                taller: $.tableViewAcademica.data[0].rows[6].children[1].value,
                diplomado: $.tableViewAcademica.data[0].rows[7].children[1].value,
                conferencia: $.tableViewAcademica.data[0].rows[8].children[1].value,
                expo: $.tableViewAcademica.data[0].rows[9].children[1].value,
                cultural: $.tableViewCultural.data[0].rows[0].children[0].value,
                ballet: $.tableViewCultural.data[0].rows[1].children[0].value,
                teatro: $.tableViewCultural.data[0].rows[2].children[0].value,
                comedia: $.tableViewCultural.data[0].rows[3].children[0].value,
                drama: $.tableViewCultural.data[0].rows[4].children[0].value,
                infantilC: $.tableViewCultural.data[0].rows[5].children[0].value,
                musical: $.tableViewCultural.data[0].rows[6].children[0].value,
                otrosT: $.tableViewCultural.data[0].rows[7].children[0].value,
                circos: $.tableViewCultural.data[0].rows[8].children[0].value,
                exposiciones: $.tableViewCultural.data[0].rows[9].children[0].value,
                fotografia: $.tableViewCultural.data[0].rows[10].children[0].value,
                escultura: $.tableViewCultural.data[0].rows[11].children[0].value,
                pintura: $.tableViewCultural.data[0].rows[12].children[0].value,
                libros: $.tableViewCultural.data[0].rows[13].children[0].value,
                otrosE: $.tableViewCultural.data[0].rows[14].children[0].value,
                cineArte: $.tableViewCultural.data[0].rows[15].children[0].value,
                musica: $.tableViewCultural.data[0].rows[16].children[0].value,
                clasica: $.tableViewCultural.data[0].rows[17].children[0].value,
                instrumental: $.tableViewCultural.data[0].rows[18].children[0].value,
                folklorepopular: $.tableViewCultural.data[0].rows[19].children[0].value,
                turistico: $.tableViewCultural.data[0].rows[20].children[0].value,
                ferias: $.tableViewCultural.data[0].rows[21].children[0].value,
                carnavales: $.tableViewCultural.data[0].rows[22].children[0].value,
                peregrinacion: $.tableViewCultural.data[0].rows[23].children[0].value,
                fiestasReligiosasIndigenas: $.tableViewCultural.data[0].rows[24].children[0].value,
                otrosTuristica: $.tableViewCultural.data[0].rows[25].children[0].value,
                entretenimiento: $.tableViewEntretenimiento.data[0].rows[0].children[0].value,
                conciertos: $.tableViewEntretenimiento.data[0].rows[1].children[0].value,
                electronica: $.tableViewEntretenimiento.data[0].rows[2].children[0].value,
                jazzblues: $.tableViewEntretenimiento.data[0].rows[3].children[0].value,
                trova: $.tableViewEntretenimiento.data[0].rows[4].children[0].value,
                rock: $.tableViewEntretenimiento.data[0].rows[5].children[0].value,
                alternativa: $.tableViewEntretenimiento.data[0].rows[6].children[0].value,
                gruperanortena: $.tableViewEntretenimiento.data[0].rows[7].children[0].value,
                infantilE: $.tableViewEntretenimiento.data[0].rows[8].children[0].value,
                hiphop: $.tableViewEntretenimiento.data[0].rows[9].children[0].value,
                ranchera: $.tableViewEntretenimiento.data[0].rows[10].children[0].value,
                pop: $.tableViewEntretenimiento.data[0].rows[11].children[0].value,
                metal: $.tableViewEntretenimiento.data[0].rows[12].children[0].value,
                reague: $.tableViewEntretenimiento.data[0].rows[13].children[0].value,
                reggeatton: $.tableViewEntretenimiento.data[0].rows[14].children[0].value,
                baladasboleros: $.tableViewEntretenimiento.data[0].rows[15].children[0].value,
                salsacumbia: $.tableViewEntretenimiento.data[0].rows[16].children[0].value,
                cristiana: $.tableViewEntretenimiento.data[0].rows[17].children[0].value,
                deportes: $.tableViewEntretenimiento.data[0].rows[18].children[0].value,
                futbol: $.tableViewEntretenimiento.data[0].rows[19].children[0].value,
                basquetball: $.tableViewEntretenimiento.data[0].rows[20].children[0].value,
                tenis: $.tableViewEntretenimiento.data[0].rows[21].children[0].value,
                beisball: $.tableViewEntretenimiento.data[0].rows[22].children[0].value,
                volleyball: $.tableViewEntretenimiento.data[0].rows[23].children[0].value,
                torneos: $.tableViewEntretenimiento.data[0].rows[24].children[0].value,
                maratones: $.tableViewEntretenimiento.data[0].rows[25].children[0].value,
                autosmotos: $.tableViewEntretenimiento.data[0].rows[26].children[0].value,
                futbolAmericano: $.tableViewEntretenimiento.data[0].rows[27].children[0].value,
                artesMarciales: $.tableViewEntretenimiento.data[0].rows[28].children[0].value,
                boxE: $.tableViewEntretenimiento.data[0].rows[29].children[0].value,
                luchaLibre: $.tableViewEntretenimiento.data[0].rows[30].children[0].value,
                atletismo: $.tableViewEntretenimiento.data[0].rows[31].children[0].value,
                toros: $.tableViewEntretenimiento.data[0].rows[32].children[0].value,
                baresantros: $.tableViewEntretenimiento.data[0].rows[33].children[0].value,
                inaguracion: $.tableViewEntretenimiento.data[0].rows[34].children[0].value,
                promocion: $.tableViewEntretenimiento.data[0].rows[35].children[0].value,
                showE: $.tableViewEntretenimiento.data[0].rows[36].children[0].value,
                fiestasTematicas: $.tableViewEntretenimiento.data[0].rows[37].children[0].value,
                bienvenida: $.tableViewEntretenimiento.data[0].rows[37].children[0].value,
                email: params.email
            };
            enviar.send(params);
            enviar.onload = function() {
                if ("Insert failed" == this.responseText) alert(this.responseText); else {
                    var alertDialog = Titanium.UI.createAlertDialog({
                        title: "Alert",
                        message: "Registro Terminado",
                        buttonNames: [ "OK" ]
                    });
                    alertDialog.show();
                    var correo = {
                        email: params.email,
                        password: params.password,
                        nombre: params.nombre,
                        apellidos: params.apellido,
                        academica: $.tableViewAcademica.data[0].rows[0].children[0].value,
                        cultural: $.tableViewCultural.data[0].rows[0].children[0].value,
                        entretenimiento: $.tableViewEntretenimiento.data[0].rows[0].children[0].value
                    };
                    Alloy.createController("Evento", correo).getView().open();
                }
            };
        });
        $.container1.add(scrollView);
    };
    var dataArray = [];
    var dataArray2 = [];
    var dataArray3 = [];
    __defers["$.__views.omitir!click!OmitirPreferencias"] && $.__views.omitir.addEventListener("click", OmitirPreferencias);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;