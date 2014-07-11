function Controller() {
    function diasemana(dia) {
        var days;
        switch (dia) {
          case 0:
            days = "Domingo";
            break;

          case 1:
            days = "Lunes";
            break;

          case 2:
            days = "Martes";
            break;

          case 3:
            days = "Miercoles";
            break;

          case 4:
            days = "Jueves";
            break;

          case 5:
            days = "Viernes";
            break;

          case 6:
            days = "Sabado";
        }
        return days;
    }
    function mesfecha(mes) {
        var meses;
        switch (mes) {
          case 0:
            meses = "Enero";
            break;

          case 1:
            meses = "Febrero";
            break;

          case 2:
            meses = "Marzo";
            break;

          case 3:
            meses = "Abril";
            break;

          case 4:
            meses = "Mayo";
            break;

          case 5:
            meses = "Junio";
            break;

          case 6:
            meses = "Julio";
            break;

          case 7:
            meses = "Agosto";
            break;

          case 8:
            meses = "Septiembre";
            break;

          case 9:
            meses = "Octubre";
            break;

          case 10:
            meses = "Noviembre";
            break;

          case 11:
            meses = "Diciembre";
        }
        return meses;
    }
    function mesnumero(mes) {
        switch (mes) {
          case "Enero":
            meses = 0;
            break;

          case "Febrero":
            meses = 1;
            break;

          case "Marzo":
            meses = 2;
            break;

          case "Abril":
            meses = 3;
            break;

          case "Mayo":
            meses = 4;
            break;

          case "Junio":
            meses = 5;
            break;

          case "Julio":
            meses = 6;
            break;

          case "Agosto":
            meses = 7;
            break;

          case "Septiembre":
            meses = 8;
            break;

          case "Octubre":
            meses = 9;
            break;

          case "Noviembre":
            meses = 10;
            break;

          case "Diciembre":
            meses = 11;
        }
        return meses;
    }
    function cambiarmes() {
        $.izquierda.addEventListener("click", function() {
            var actual = $.fgHeaderTitle.text;
            var mesactual = mesnumero(actual);
            var resta = mesactual - 1;
            var mesanterior = mesfecha(resta);
            if (resta > -1) {
                $.fgHeaderTitle.text = mesanterior;
                clearGrid();
                createCal(mesnumero($.fgHeaderTitle.text));
            }
        });
        $.derecha.addEventListener("click", function() {
            var actual = $.fgHeaderTitle.text;
            var mesactual = mesnumero(actual);
            var suma = mesactual + 1;
            var messiguiente = mesfecha(suma);
            if (12 > suma) {
                $.fgHeaderTitle.text = messiguiente;
                clearGrid();
                createCal(mesnumero($.fgHeaderTitle.text));
            }
        });
    }
    function clearGrid() {
        $.fgScrollView.removeAllChildren();
    }
    function Calendar(diasMes, dia1, dia2, dia3, dia4, dia5, dia6, dia7, dia8, dia9, dia10, dia11, dia12, dia13, dia14, dia15, dia16, dia17, dia18, dia19, dia20, dia21, dia22, dia23, dia24, dia25, dia26, dia27, dia28, dia29, dia30, dia31) {
        var columns = 7;
        var space = 2;
        var options = {
            padding: 1,
            showTitle: false,
            backgroundColor: "#eee",
            gridColor: "White"
        };
        var screenWidth = Ti.Platform.displayCaps.getPlatformWidth();
        var newWidth = screenWidth - space;
        var columnWidth = newWidth / columns - space;
        var frameBGcolor = options.backgroundColor || "#fff";
        $.fgScrollView.left = space;
        $.fgScrollView.top = space;
        $.fgScrollView.right = -1;
        $.fgMain.backgroundColor = frameBGcolor;
        for (var i = 0; diasMes > i; i++) {
            var frame = Ti.UI.createView({
                id: i + 1,
                width: columnWidth,
                height: columnWidth,
                backgroundColor: options.gridColor || "#eee",
                top: 0,
                left: 0,
                right: space,
                bottom: space
            });
            var label = Ti.UI.createLabel({
                text: i + 1,
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "black",
                zIndex: 3
            });
            frame.add(label);
            var eventoFondo = Ti.UI.createView({
                width: "100%",
                height: "100%",
                index: i + 1,
                backgroundColor: "transparent",
                borderRadius: 10,
                zIndex: 6
            });
            if (label.text == dia1 || label.text == dia2 || label.text == dia3 || label.text == dia4 || label.text == dia5 || label.text == dia6 || label.text == dia7 || label.text == dia8 || label.text == dia9 || label.text == dia10 || label.text == dia11 || label.text == dia12 || label.text == dia13 || label.text == dia14 || label.text == dia15 || label.text == dia16 || label.text == dia17 || label.text == dia18 || label.text == dia19 || label.text == dia20 || label.text == dia21 || label.text == dia22 || label.text == dia23 || label.text == dia24 || label.text == dia25 || label.text == dia26 || label.text == dia27 || label.text == dia28 || label.text == dia29 || label.text == dia30 || label.text == dia31) {
                eventoFondo.addEventListener("click", function(e) {
                    var idCliente = {
                        dia: e.source.index,
                        cliente: 1
                    };
                    var enviar = Ti.Network.createHTTPClient({
                        onerror: function(e) {
                            Ti.API.debug(e.error);
                            alert("La conexion esta tardando demaciado intente acceder nuevamente");
                        },
                        timeout: 3e3
                    });
                    enviar.open("POST", "http://localhost/wanagow/segundaversion/detallesEventoCalendario.php");
                    enviar.send(idCliente);
                    enviar.onload = function() {
                        dataArray = [];
                        var json = JSON.parse(this.responseText);
                        var json = json.nombre;
                        for (var i = 0; json.length > i; i++) {
                            var row = Ti.UI.createTableViewRow({
                                selectedBackgroundColor: "white",
                                id: json[i].idEvento,
                                height: 110
                            });
                            var imageAvatar = Ti.UI.createImageView({
                                image: IMG_BASE + json[i].imagen,
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
                                text: "" + json[i].titulo,
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
                            if ("Academica" == json[i].tipo || "Area de Estudio" == json[i].tipo) {
                                var view = Titanium.UI.createView({
                                    borderRadius: 10,
                                    backgroundColor: "yellow",
                                    width: 10,
                                    height: 150,
                                    right: 0
                                });
                                row.add(view);
                            }
                            if ("Cultural" == json[i].tipo || "Teatro" == json[i].tipo || "Exposicion" == json[i].tipo || "Musica" == json[i].tipo || "Turistico" == json[i].tipo) {
                                var view = Titanium.UI.createView({
                                    borderRadius: 10,
                                    backgroundColor: "green",
                                    width: 10,
                                    height: 150,
                                    right: 0
                                });
                                row.add(view);
                            }
                            if ("Entretenimiento" == json[i].tipo || "Conciertos" == json[i].tipo || "Deportes" == json[i].tipo || "Bares Antros" == json[i].tipo) {
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
                        $.tableEventos.setData(dataArray);
                    };
                });
                frame.add(eventoFondo);
                var evento = Ti.UI.createView({
                    width: 15,
                    height: 15,
                    top: "70%",
                    backgroundColor: "green",
                    borderRadius: 10,
                    index: i + 1
                });
                eventoFondo.add(evento);
            }
            $.fgScrollView.add(frame);
        }
    }
    function createCal(mes) {
        var space = 2;
        var options = {
            padding: 1,
            showTitle: false,
            backgroundColor: "#eee",
            gridColor: "White"
        };
        Ti.Platform.displayCaps.getPlatformWidth();
        var frameBGcolor = options.backgroundColor || "#fff";
        $.fgScrollView.left = space;
        $.fgScrollView.top = space;
        $.fgScrollView.right = -1;
        $.fgMain.backgroundColor = frameBGcolor;
        var idCliente = {
            email: 1,
            mes: mes
        };
        var enviar = Ti.Network.createHTTPClient({
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert("La conexion esta tardando demaciado intente acceder nuevamente");
            },
            timeout: 3e3
        });
        enviar.open("POST", "http://localhost/wanagow/segundaversion/eventosguardados.php");
        enviar.send(idCliente);
        enviar.onload = function() {
            var json = JSON.parse(this.responseText);
            var json = json.nombre;
            try {
                switch (json.length) {
                  case 0:
                    Calendar(31);
                    break;

                  case 1:
                    Calendar(31, json[0].dia);
                    break;

                  case 2:
                    Calendar(31, json[0].dia, json[1].dia);
                    break;

                  case 3:
                    Calendar(31, json[0].dia, json[1].dia, json[2].dia);
                    break;

                  case 4:
                    Calendar(31, json[0].dia, json[1].dia, json[2].dia, json[3].dia);
                    break;

                  case 5:
                    Calendar(31, json[0].dia, json[1].dia, json[2].dia, json[3].dia, json[4].dia);
                    break;

                  case 6:
                    Calendar(31, json[0].dia, json[1].dia, json[2].dia, json[3].dia, json[4].dia, json[5].dia);
                    break;

                  case 7:
                    Calendar(31, json[0].dia, json[1].dia, json[2].dia, json[3].dia, json[4].dia, json[5].dia, json[6].dia);
                    break;

                  case 8:
                    Calendar(31, json[0].dia, json[1].dia, json[2].dia, json[3].dia, json[4].dia, json[5].dia, json[6].dia, json[7].dia);
                    break;

                  case 9:
                    Calendar(31, json[0].dia, json[1].dia, json[2].dia, json[3].dia, json[4].dia, json[5].dia, json[6].dia, json[7].dia, json[8].dia);
                    break;

                  case 10:
                    Calendar(31, json[0].dia, json[1].dia, json[2].dia, json[3].dia, json[4].dia, json[5].dia, json[6].dia, json[7].dia, json[8].dia, json[9].dia);
                    break;

                  case 11:
                    Calendar(31, json[0].dia, json[1].dia, json[2].dia, json[3].dia, json[4].dia, json[5].dia, json[6].dia, json[7].dia, json[8].dia, json[9].dia, json[10].dia);
                    break;

                  case 12:
                    Calendar(31, json[0].dia, json[1].dia, json[2].dia, json[3].dia, json[4].dia, json[5].dia, json[6].dia, json[7].dia, json[8].dia, json[9].dia, json[10].dia, json[11].dia);
                    break;

                  case 13:
                    Calendar(31, json[0].dia, json[1].dia, json[2].dia, json[3].dia, json[4].dia, json[5].dia, json[6].dia, json[7].dia, json[8].dia, json[9].dia, json[10].dia, json[11].dia, json[12].dia);
                    break;

                  case 14:
                    Calendar(31, json[0].dia, json[1].dia, json[2].dia, json[3].dia, json[4].dia, json[5].dia, json[6].dia, json[7].dia, json[8].dia, json[9].dia, json[10].dia, json[11].dia, json[12].dia, json[13].dia);
                    break;

                  case 15:
                    Calendar(31, json[0].dia, json[1].dia, json[2].dia, json[3].dia, json[4].dia, json[5].dia, json[6].dia, json[7].dia, json[8].dia, json[9].dia, json[10].dia, json[11].dia, json[12].dia, json[13].dia, json[14].dia);
                    break;

                  case 16:
                    Calendar(31, json[0].dia, json[1].dia, json[2].dia, json[3].dia, json[4].dia, json[5].dia, json[6].dia, json[7].dia, json[8].dia, json[9].dia, json[10].dia, json[11].dia, json[12].dia, json[13].dia, json[14].dia, json[15].dia);
                    break;

                  case 17:
                    Calendar(31, json[0].dia, json[1].dia, json[2].dia, json[3].dia, json[4].dia, json[5].dia, json[6].dia, json[7].dia, json[8].dia, json[9].dia, json[10].dia, json[11].dia, json[12].dia, json[13].dia, json[14].dia, json[15].dia, json[16].dia);
                    break;

                  case 18:
                    Calendar(31, json[0].dia, json[1].dia, json[2].dia, json[3].dia, json[4].dia, json[5].dia, json[6].dia, json[7].dia, json[8].dia, json[9].dia, json[10].dia, json[11].dia, json[12].dia, json[13].dia, json[14].dia, json[15].dia, json[16].dia, json[17].dia);
                    break;

                  case 19:
                    Calendar(31, json[0].dia, json[1].dia, json[2].dia, json[3].dia, json[4].dia, json[5].dia, json[6].dia, json[7].dia, json[8].dia, json[9].dia, json[10].dia, json[11].dia, json[12].dia, json[13].dia, json[14].dia, json[15].dia, json[16].dia, json[17].dia, json[18].dia);
                    break;

                  case 20:
                    Calendar(31, json[0].dia, json[1].dia, json[2].dia, json[3].dia, json[4].dia, json[5].dia, json[6].dia, json[7].dia, json[8].dia, json[9].dia, json[10].dia, json[11].dia, json[12].dia, json[13].dia, json[14].dia, json[15].dia, json[16].dia, json[17].dia, json[18].dia, json[19].dia);
                    break;

                  case 21:
                    Calendar(31, json[0].dia, json[1].dia, json[2].dia, json[3].dia, json[4].dia, json[5].dia, json[6].dia, json[7].dia, json[8].dia, json[9].dia, json[10].dia, json[11].dia, json[12].dia, json[13].dia, json[14].dia, json[15].dia, json[16].dia, json[17].dia, json[18].dia, json[19].dia, json[20].dia);
                    break;

                  case 22:
                    Calendar(31, json[0].dia, json[1].dia, json[2].dia, json[3].dia, json[4].dia, json[5].dia, json[6].dia, json[7].dia, json[8].dia, json[9].dia, json[10].dia, json[11].dia, json[12].dia, json[13].dia, json[14].dia, json[15].dia, json[16].dia, json[17].dia, json[18].dia, json[19].dia, json[20].dia, json[21].dia);
                    break;

                  case 23:
                    Calendar(31, json[0].dia, json[1].dia, json[2].dia, json[3].dia, json[4].dia, json[5].dia, json[6].dia, json[7].dia, json[8].dia, json[9].dia, json[10].dia, json[11].dia, json[12].dia, json[13].dia, json[14].dia, json[15].dia, json[16].dia, json[17].dia, json[18].dia, json[19].dia, json[20].dia, json[21].dia, json[22].dia);
                    break;

                  case 24:
                    Calendar(31, json[0].dia, json[1].dia, json[2].dia, json[3].dia, json[4].dia, json[5].dia, json[6].dia, json[7].dia, json[8].dia, json[9].dia, json[10].dia, json[11].dia, json[12].dia, json[13].dia, json[14].dia, json[15].dia, json[16].dia, json[17].dia, json[18].dia, json[19].dia, json[20].dia, json[21].dia, json[22].dia, json[23].dia);
                    break;

                  case 25:
                    Calendar(31, json[0].dia, json[1].dia, json[2].dia, json[3].dia, json[4].dia, json[5].dia, json[6].dia, json[7].dia, json[8].dia, json[9].dia, json[10].dia, json[11].dia, json[12].dia, json[13].dia, json[14].dia, json[15].dia, json[16].dia, json[17].dia, json[18].dia, json[19].dia, json[20].dia, json[21].dia, json[22].dia, json[23].dia, json[24].dia);
                    break;

                  case 26:
                    Calendar(31, json[0].dia, json[1].dia, json[2].dia, json[3].dia, json[4].dia, json[5].dia, json[6].dia, json[7].dia, json[8].dia, json[9].dia, json[10].dia, json[11].dia, json[12].dia, json[13].dia, json[14].dia, json[15].dia, json[16].dia, json[17].dia, json[18].dia, json[19].dia, json[20].dia, json[21].dia, json[22].dia, json[23].dia, json[24].dia, json[25].dia);
                    break;

                  case 27:
                    Calendar(31, json[0].dia, json[1].dia, json[2].dia, json[3].dia, json[4].dia, json[5].dia, json[6].dia, json[7].dia, json[8].dia, json[9].dia, json[10].dia, json[11].dia, json[12].dia, json[13].dia, json[14].dia, json[15].dia, json[16].dia, json[17].dia, json[18].dia, json[19].dia, json[20].dia, json[21].dia, json[22].dia, json[23].dia, json[24].dia, json[25].dia, json[26].dia);
                    break;

                  case 28:
                    Calendar(31, json[0].dia, json[1].dia, json[2].dia, json[3].dia, json[4].dia, json[5].dia, json[6].dia, json[7].dia, json[8].dia, json[9].dia, json[10].dia, json[11].dia, json[12].dia, json[13].dia, json[14].dia, json[15].dia, json[16].dia, json[17].dia, json[18].dia, json[19].dia, json[20].dia, json[21].dia, json[22].dia, json[23].dia, json[24].dia, json[25].dia, json[26].dia, json[27].dia);
                    break;

                  case 29:
                    Calendar(31, json[0].dia, json[1].dia, json[2].dia, json[3].dia, json[4].dia, json[5].dia, json[6].dia, json[7].dia, json[8].dia, json[9].dia, json[10].dia, json[11].dia, json[12].dia, json[13].dia, json[14].dia, json[15].dia, json[16].dia, json[17].dia, json[18].dia, json[19].dia, json[20].dia, json[21].dia, json[22].dia, json[23].dia, json[24].dia, json[25].dia, json[26].dia, json[27].dia, json[28].dia);
                    break;

                  case 30:
                    Calendar(31, json[0].dia, json[1].dia, json[2].dia, json[3].dia, json[4].dia, json[5].dia, json[6].dia, json[7].dia, json[8].dia, json[9].dia, json[10].dia, json[11].dia, json[12].dia, json[13].dia, json[14].dia, json[15].dia, json[16].dia, json[17].dia, json[18].dia, json[19].dia, json[20].dia, json[21].dia, json[22].dia, json[23].dia, json[24].dia, json[25].dia, json[26].dia, json[27].dia, json[28].dia, json[29].dia);
                    break;

                  case 31:
                    Calendar(31, json[0].dia, json[1].dia, json[2].dia, json[3].dia, json[4].dia, json[5].dia, json[6].dia, json[7].dia, json[8].dia, json[9].dia, json[10].dia, json[11].dia, json[12].dia, json[13].dia, json[14].dia, json[15].dia, json[16].dia, json[17].dia, json[18].dia, json[19].dia, json[20].dia, json[21].dia, json[22].dia, json[23].dia, json[24].dia, json[25].dia, json[26].dia, json[27].dia, json[28].dia, json[29].dia, json[30].dia);
                }
            } catch (e) {}
        };
    }
    function ValidarMensajeTwitter(titulo, lugar, fecha, hora) {
        var mensajeByTwitter = "Hay un evento de " + titulo + " en " + lugar + " el dia " + fecha + " a las " + hora;
        mensajeByTwitter = mensajeByTwitter.length >= 150 ? "Hay un evento de " + titulo + " en " + lugar : "Hay un evento de " + titulo + " en " + lugar + " el dia " + fecha + " a las " + hora;
        return mensajeByTwitter;
    }
    function clearGrid() {
        $.fgScrollView.removeAllChildren();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "a/a";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.izquierda.addEventListener("click", function() {
        var actual = $.fgHeaderTitle.text;
        var mesactual = mesnumero(actual);
        var resta = mesactual - 1;
        var mesanterior = mesfecha(resta);
        if (resta > -1) {
            $.fgHeaderTitle.text = mesanterior;
            clearGrid();
            createCal(mesnumero($.fgHeaderTitle.text));
        }
    });
    $.derecha.addEventListener("click", function() {
        var actual = $.fgHeaderTitle.text;
        var mesactual = mesnumero(actual);
        var suma = mesactual + 1;
        var messiguiente = mesfecha(suma);
        if (12 > suma) {
            $.fgHeaderTitle.text = messiguiente;
            clearGrid();
            createCal(mesnumero($.fgHeaderTitle.text));
        }
    });
    var dataArray = [];
    var IMG_BASE = "http://localhost/wanagow/img/";
    cambiarmes();
    var d = new Date();
    var strDate = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
    var fecha = {
        fecha: strDate,
        dia: d.getDate(),
        diasemananumero: d.getDay(),
        diasemana: diasemana(d.getDay()),
        mes: mesfecha(d.getMonth()),
        mesnumero: d.getMonth(),
        anio: d.getFullYear(),
        hora: d.getHours() + ":" + d.getMinutes()
    };
    $.fgHeaderTitle.text = fecha.mes;
    createCal(mesnumero($.fgHeaderTitle.text));
    var args = arguments[0] || {};
    var correo = arguments[0] || {};
    var correoElectronico = "";
    var filtroAcademica;
    var filtroCultural;
    var filtroEntretenimiento;
    var datos = {
        nombre: "",
        apellidos: "",
        passowrd: "",
        email: ""
    };
    if ("" == correo) {
        correoElectronico = args.email;
        filtroAcademica = args.academica;
        filtroCultural = args.cultural;
        filtroEntretenimiento = args.entretenimiento;
        datos.nombre = args.nombre;
        datos.apellidos = args.apellidos;
        datos.passowrd = args.password;
        datos.email = args.email;
    } else {
        filtroAcademica = correo.academica;
        filtroCultural = correo.cultural;
        filtroEntretenimiento = correo.entretenimiento;
        correoElectronico = correo.email;
        datos.nombre = correo.nombre;
        datos.apellidos = correo.apellidos;
        datos.passowrd = correo.password;
        datos.email = correo.email;
    }
    var IMG_BASE = "http://localhost/wanagow/img/";
    var dataArray = [];
    $.tableView.addEventListener("click", function(e) {
        var win = Alloy.createController("singleEvento").getView();
        win.id = e.rowData.id;
        win.title = e.row.titulo;
        win.idEvento = e.row.idEvento;
        win.fecha = e.row.fecha;
        var tituloFacebook = e.rowData.titulo;
        var descripcionFacebook = e.rowData.detalles;
        var lugarFacebook = e.rowData.lugar;
        var msmTwiter = {
            titulo: e.rowData.titulo,
            lugar: e.rowData.lugar,
            fecha: e.rowData.fecha,
            hora: e.rowData.hora
        };
        win.backgroundColor = "white";
        var imageAvatar = Ti.UI.createImageView({
            image: IMG_BASE + e.row.imagen,
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
        buttonAgregarEvento.addEventListener("click", function() {
            alert(win.idEvento + "-" + win.fecha + "-" + datos.email);
            var Datos = {
                email: datos.email,
                idEvento: win.idEvento,
                fecha: win.fecha
            };
            var enviar = Ti.Network.createHTTPClient({
                onerror: function(e) {
                    Ti.API.debug(e.error);
                    alert("La conexion esta tardando demaciado intente acceder nuevamente");
                },
                timeout: 3e3
            });
            enviar.open("POST", "http://localhost/wanagow/segundaversion/agregareventos.php");
            enviar.send(Datos);
            enviar.onload = function() {
                var json = this.responseText;
                var alertDialog = Titanium.UI.createAlertDialog({
                    title: "Alert",
                    message: json,
                    buttonNames: [ "OK" ]
                });
                alertDialog.show();
            };
        });
        buttonOrganizador.addEventListener("click", function() {
            var botonCancelar = Ti.UI.createButton({
                backgroundColor: "#FFCC00",
                borderRadius: 10,
                left: 70,
                top: 180,
                width: 120,
                height: 25,
                title: "Cancelar"
            });
            botonCancelar.addEventListener("click", function() {
                ventanaTransparente.close();
            });
            var facebookLabel = Ti.UI.createLabel({
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
            });
            var correoLabel = Ti.UI.createLabel({
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
            });
            var smsLabel = Ti.UI.createLabel({
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
            });
            var twitterLabel = Ti.UI.createLabel({
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
            });
            var FacebookShare = Ti.UI.createImageView({
                opacity: 4.5,
                width: "60px",
                height: "60px",
                image: "img/face.png",
                top: 10,
                left: 25,
                borderRadius: 10
            });
            FacebookShare.addEventListener("click", function(datos) {
                Titanium.Facebook.appid = "1423658011243570";
                Titanium.Facebook.permissions = [ "publish_stream", "read_stream", "user_birthday" ];
                var data = {
                    link: "http://www.wanagow.com",
                    name: tituloFacebook,
                    message: "Checkout this cool open source project for creating mobile apps",
                    caption: "Lugar del evento: " + lugarFacebook,
                    picture: "http://www.smartthinking.com.mx/imgs/apps/wanagow.png",
                    description: descripcionFacebook
                };
                alert(datos);
                Titanium.Facebook.dialog("feed", data, function(e) {
                    e.success && e.result ? alert("Mensaje Publicado") : e.error ? alert(e.error) : alert("Mensaje Cancelado.");
                });
            });
            var TwitterShare = Ti.UI.createImageView({
                width: "60px",
                height: "60px",
                image: "img/twitter.png",
                top: 100,
                left: 20,
                borderRadius: 10
            });
            var social = require("alloy/social");
            var twitter = social.create({
                consumerSecret: "lX06QtzF6PomEv4aAeJO7ZuqmulWU4kD392BJK6oUBymg80ksY",
                consumerKey: "9v54NMGBXJoYMSs6Mf62Mhb3g"
            });
            TwitterShare.addEventListener("click", function() {
                twitter.isAuthorized();
                twitter.share({
                    message: ValidarMensajeTwitter(msmTwiter.titulo, msmTwiter.lugar, msmTwiter.fecha, msmTwiter.hora),
                    image: Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "img/twitter.png").read(),
                    success: function() {
                        alert("Mensaje Publicado Exitosamente!");
                    },
                    error: function() {
                        alert("A ocurrido un error al publicar");
                    }
                });
                twitter.deauthorize();
            });
            var CorreoShare = Ti.UI.createImageView({
                width: "60px",
                height: "60px",
                image: "img/mail.png",
                top: 10,
                left: 100,
                borderRadius: 10
            });
            var SmsShare = Ti.UI.createImageView({
                width: "60px",
                height: "60px",
                image: "img/message.png",
                top: 10,
                left: 170,
                borderRadius: 10
            });
            var ventanaTransparente = Ti.UI.createWindow({
                opacity: .8,
                backgroundColor: "black",
                borderColor: "black",
                left: 30,
                top: 400,
                width: 700,
                height: 250,
                borderRadius: 8
            });
            ventanaTransparente.add(facebookLabel);
            ventanaTransparente.add(correoLabel);
            ventanaTransparente.add(smsLabel);
            ventanaTransparente.add(twitterLabel);
            ventanaTransparente.add(FacebookShare);
            ventanaTransparente.add(CorreoShare);
            ventanaTransparente.add(SmsShare);
            ventanaTransparente.add(TwitterShare);
            ventanaTransparente.add(botonCancelar);
            ventanaTransparente.open();
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
    $.im2.addEventListener("click", function() {
        var botonFiltrar = Ti.UI.createButton({
            backgroundColor: "#FFCC00",
            borderRadius: 10,
            left: 70,
            top: 180,
            width: 120,
            height: 25,
            title: "Filtrar"
        });
        botonFiltrar.addEventListener("click", function() {
            var conexion = Ti.Network.createHTTPClient({
                onerror: function(e) {
                    Ti.API.debug(e.error);
                    alert("La conexion esta tardando demaciado intente acceder nuevamente");
                },
                timeout: 2e3
            });
            var filtroEventos = {
                academica: switchAcademica.value,
                cultural: switchCultural.value,
                entretenimiento: switchEntretenimiento.value,
                email: correoElectronico
            };
            conexion.open("POST", "http://localhost/wanagow/segundaversion/filtros_eventos.php");
            conexion.send(filtroEventos);
            conexion.onload = function() {
                var json = JSON.parse(this.responseText);
                var json = json.nombre;
                dataArray = [];
                for (var i = 0; json.length > i; i++) {
                    var row = Ti.UI.createTableViewRow({
                        selectedBackgroundColor: "white",
                        id: json[i].idEvento,
                        height: 110
                    });
                    row.titulo = json[i].titulo;
                    row.imagen = json[i].imagen;
                    row.detalles = json[i].descripcion;
                    row.fecha = json[i].fecha;
                    row.hora = json[i].hora;
                    row.costo = json[i].costo;
                    row.lugar = json[i].lugar;
                    var imageAvatar = Ti.UI.createImageView({
                        image: IMG_BASE + json[i].imagen,
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
                        text: "" + json[i].titulo,
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
                    if ("Academica" == json[i].tipo || "Area de Estudio" == json[i].tipo) {
                        var view = Titanium.UI.createView({
                            borderRadius: 10,
                            backgroundColor: "yellow",
                            width: 10,
                            height: 150,
                            right: 0
                        });
                        row.add(view);
                    }
                    if ("Cultural" == json[i].tipo || "Teatro" == json[i].tipo || "Exposicion" == json[i].tipo || "Musica" == json[i].tipo || "Turistico" == json[i].tipo) {
                        var view = Titanium.UI.createView({
                            borderRadius: 10,
                            backgroundColor: "green",
                            width: 10,
                            height: 150,
                            right: 0
                        });
                        row.add(view);
                    }
                    if ("Entretenimiento" == json[i].tipo || "Conciertos" == json[i].tipo || "Deportes" == json[i].tipo || "Bares Antros" == json[i].tipo) {
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
        });
        var ventanaTransparente = Ti.UI.createWindow({
            opacity: .8,
            backgroundColor: "black",
            borderColor: "black",
            right: 10,
            top: 80,
            width: 250,
            height: 250,
            borderRadius: 8
        });
        var switchAcademica = Ti.UI.createSwitch({
            value: filtroAcademica,
            left: 180,
            top: 30,
            width: 20,
            height: 50
        });
        ventanaTransparente.add(switchAcademica);
        switchAcademica.addEventListener("change", function() {});
        var switchCultural = Ti.UI.createSwitch({
            value: filtroCultural,
            left: 180,
            top: 70,
            width: 20,
            height: 50
        });
        ventanaTransparente.add(switchCultural);
        switchCultural.addEventListener("change", function() {});
        var switchEntretenimiento = Ti.UI.createSwitch({
            value: filtroEntretenimiento,
            left: 180,
            top: 110,
            width: "auto",
            height: "auto"
        });
        ventanaTransparente.add(switchEntretenimiento);
        switchEntretenimiento.addEventListener("change", function() {});
        botonFiltrar.addEventListener("click", function() {
            ventanaTransparente.close();
        });
        ventanaTransparente.add(Ti.UI.createLabel({
            left: 15,
            top: 30,
            width: "auto",
            height: "auto",
            zIndex: "5",
            text: "Académica",
            color: "white"
        }));
        ventanaTransparente.add(Ti.UI.createLabel({
            left: 15,
            top: 70,
            width: "auto",
            height: "auto",
            zIndex: "6",
            text: "Cultural | Turística",
            color: "white"
        }));
        ventanaTransparente.add(Ti.UI.createLabel({
            left: 15,
            top: 110,
            width: "auto",
            height: "auto",
            zIndex: "7",
            text: "Entretenimiento",
            color: "white"
        }));
        ventanaTransparente.add(botonFiltrar);
        ventanaTransparente.open();
    });
    $.fgWin.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;