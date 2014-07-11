function Controller() {
    function checkemail(emailAddress) {
        var testresults;
        var str = emailAddress;
        var filter = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        testresults = filter.test(str) ? true : false;
        return testresults;
    }
    function login() {
        var loginReq = Titanium.Network.createHTTPClient({
            onload: function() {
                var json = this.responseText;
                var response = JSON.parse(json);
                var json = json.nombre;
                if (true == response.logged) {
                    var alertDialog = Ti.UI.createAlertDialog({
                        title: "Acceso Concedido",
                        message: 'Bienvenido "' + $.email.value + '"',
                        buttonNames: [ "OK" ]
                    });
                    alertDialog.show();
                    $.email.blur();
                    $.password.blur();
                    var args = {
                        email: response.email,
                        password: response.password,
                        nombre: response.nombre,
                        apellidos: response.apellidos,
                        cultural: response.cultural,
                        ballet: response.ballet,
                        teatro: response.teatro,
                        comedia: response.comedia,
                        drama: response.drama,
                        infantilC: response.infantilC,
                        musical: response.musical,
                        otrosT: response.otrosT,
                        circo: response.circo,
                        exposicion: response.exposicion,
                        fotografia: response.fotografia,
                        escultura: response.escultura,
                        pintura: response.pintura,
                        libros: response.libros,
                        otrosE: response.otrosE,
                        cinearte: response.cinearte,
                        musica: response.musica,
                        clasica: response.clasica,
                        instrumental: response.instrumental,
                        folklorepopular: response.folklorepopular,
                        turistico: response.turistico,
                        ferias: response.ferias,
                        carnavales: response.carnavales,
                        peregrinaciones: response.peregrinaciones,
                        fiestasReligiosasIndigenas: response.fiestasReligiosasIndigenas,
                        otrosTuristica: response.otrosTuristica,
                        entretenimiento: response.entretenimiento,
                        conciertos: response.conciertos,
                        electronica: response.electronica,
                        jazzblues: response.jazzblues,
                        trova: response.trova,
                        rock: response.rock,
                        alternativa: response.alternativa,
                        gruperanortena: response.gruperanortena,
                        infantilE: response.infantilE,
                        hiphop: response.hiphop,
                        rancheras: response.rancheras,
                        pop: response.pop,
                        metal: response.metal,
                        reague: response.reague,
                        reggeatton: response.reggeatton,
                        baladasboleros: response.baladasboleros,
                        salsacumbia: response.salsacumbia,
                        cristiana: response.cristiana,
                        deportes: response.deportes,
                        futbol: response.futbol,
                        basquetball: response.basquetball,
                        tenis: response.tenis,
                        beisball: response.beisball,
                        volleyball: response.volleyball,
                        torneos: response.torneos,
                        maratones: response.maratones,
                        futbolAmericano: response.futbolAmericano,
                        artesMarciales: response.artesMarciales,
                        box: response.box,
                        luchaLibre: response.luchaLibre,
                        atletismo: response.atletismo,
                        toros: response.toros,
                        autosmotos: response.autosmotos,
                        baresantros: response.baresantros,
                        inaguracion: response.inaguracion,
                        promocion: response.promocion,
                        show: response.show,
                        fiestasTematicas: response.fiestasTematicas,
                        bienvenida: response.bienvenida,
                        academica: response.academica,
                        areaestudio: response.areaestudio,
                        congresos: response.congresos,
                        convenciones: response.convenciones,
                        seminarios: response.seminarios,
                        talleres: response.talleres,
                        diplomados: response.diplomados,
                        cursos: response.cursos,
                        conferencias: response.conferencias,
                        expos: response.expos
                    };
                    Alloy.createController("Evento", args).getView().open();
                } else alert("Datos Invalidos");
            },
            onerror: function() {
                alert("Error de Conexion");
            }
        });
        if ("" != $.email.value && "" != $.password.value) if (checkemail($.email.value)) {
            loginReq.open("POST", "http://localhost/wanagow/segundaversion/login.php");
            var params = {
                email: $.email.value,
                password: $.password.value
            };
            loginReq.send(params);
        } else alert("Por favor introdusca un correo electronico valido"); else alert("Ingresa un contraseña y/o usuario valido");
    }
    function btn_2() {
        var w = Alloy.createController("Registro").getView();
        w.open();
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
        backgroundColor: "#f4ce00",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Bienvenido",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    $.__views.label1 = Ti.UI.createLabel({
        width: 400,
        height: 45,
        color: "#000",
        layout: "center",
        Color: "black",
        top: 550,
        left: "38%",
        text: "Desliza para aprender mas.",
        id: "label1"
    });
    $.__views.index.add($.__views.label1);
    $.__views.email = Ti.UI.createTextField({
        width: 300,
        right: 50,
        left: 250,
        height: 45,
        top: 600,
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 2,
        hintText: "Email",
        id: "email",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "black"
    });
    $.__views.index.add($.__views.email);
    $.__views.password = Ti.UI.createTextField({
        width: 300,
        right: 50,
        left: 250,
        height: 45,
        top: 650,
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 2,
        hintText: "Password",
        id: "password",
        passwordMask: "true",
        focusable: "place",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "black"
    });
    $.__views.index.add($.__views.password);
    $.__views.btn1 = Ti.UI.createButton({
        width: 200,
        right: 100,
        left: 300,
        borderRadius: 15,
        backgroundColor: "#515050",
        height: 50,
        top: 700,
        font: {
            fontFamily: "Helvetica Neue"
        },
        color: "white",
        title: "Entrar",
        id: "btn1"
    });
    $.__views.index.add($.__views.btn1);
    login ? $.__views.btn1.addEventListener("click", login) : __defers["$.__views.btn1!click!login"] = true;
    $.__views.btn2 = Ti.UI.createButton({
        width: 200,
        right: 100,
        left: 300,
        borderRadius: 10,
        backgroundColor: "#515050",
        height: 50,
        top: 800,
        font: {
            fontFamily: "Helvetica Neue"
        },
        color: "white",
        title: "Registrarse",
        id: "btn2"
    });
    $.__views.index.add($.__views.btn2);
    btn_2 ? $.__views.btn2.addEventListener("click", btn_2) : __defers["$.__views.btn2!click!btn_2"] = true;
    $.__views.label2 = Ti.UI.createLabel({
        width: 400,
        height: 45,
        color: "#000",
        layout: "center",
        Color: "black",
        top: 750,
        left: "38%",
        text: "Si todavia no tienes una cuenta",
        id: "label2"
    });
    $.__views.index.add($.__views.label2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.btn1!click!login"] && $.__views.btn1.addEventListener("click", login);
    __defers["$.__views.btn2!click!btn_2"] && $.__views.btn2.addEventListener("click", btn_2);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;