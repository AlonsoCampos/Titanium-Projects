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
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.fgWin = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        tabBarHidden: true,
        layout: "vertical",
        exitOnClose: true,
        id: "fgWin"
    });
    $.__views.fgWin && $.addTopLevelView($.__views.fgWin);
    $.__views.fgHeader = Ti.UI.createView({
        backgroundColor: "#555",
        width: Ti.UI.FILL,
        height: 100,
        id: "fgHeader"
    });
    $.__views.fgWin.add($.__views.fgHeader);
    $.__views.fgHeaderTitle = Ti.UI.createLabel({
        text: "Septiembre",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#fff",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        id: "fgHeaderTitle"
    });
    $.__views.fgHeader.add($.__views.fgHeaderTitle);
    $.__views.izquierda = Ti.UI.createView({
        backgroundColor: "transparent",
        width: 20,
        height: 30,
        left: 10,
        id: "izquierda"
    });
    $.__views.fgHeader.add($.__views.izquierda);
    $.__views.imagenizquierda = Ti.UI.createImageView({
        id: "imagenizquierda",
        image: "img/izquierda.png"
    });
    $.__views.izquierda.add($.__views.imagenizquierda);
    $.__views.derecha = Ti.UI.createView({
        backgroundColor: "transparent",
        width: 20,
        height: 30,
        right: 10,
        id: "derecha"
    });
    $.__views.fgHeader.add($.__views.derecha);
    $.__views.imagenderecha = Ti.UI.createImageView({
        id: "imagenderecha",
        image: "img/derecha.png"
    });
    $.__views.derecha.add($.__views.imagenderecha);
    $.__views.days = Ti.UI.createView({
        text: "TiFlexiGrid",
        width: "100%",
        height: 30,
        backgroundColor: "#555",
        top: 70,
        id: "days"
    });
    $.__views.fgHeader.add($.__views.days);
    $.__views.lun = Ti.UI.createLabel({
        width: 55,
        height: 30,
        color: "#fff",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        layout: "horizontal",
        left: 35,
        text: "Lun",
        id: "lun"
    });
    $.__views.days.add($.__views.lun);
    $.__views.mar = Ti.UI.createLabel({
        width: 55,
        height: 30,
        color: "#fff",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        layout: "horizontal",
        left: 145,
        text: "Mar",
        id: "mar"
    });
    $.__views.days.add($.__views.mar);
    $.__views.mie = Ti.UI.createLabel({
        width: 55,
        height: 30,
        color: "#fff",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        layout: "horizontal",
        left: 255,
        text: "Mie",
        id: "mie"
    });
    $.__views.days.add($.__views.mie);
    $.__views.jue = Ti.UI.createLabel({
        width: 55,
        height: 30,
        color: "#fff",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        layout: "horizontal",
        left: 365,
        text: "Jue",
        id: "jue"
    });
    $.__views.days.add($.__views.jue);
    $.__views.vie = Ti.UI.createLabel({
        width: 55,
        height: 30,
        color: "#fff",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        layout: "horizontal",
        left: 475,
        text: "Vie",
        id: "vie"
    });
    $.__views.days.add($.__views.vie);
    $.__views.sab = Ti.UI.createLabel({
        width: 55,
        height: 30,
        color: "#fff",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        layout: "horizontal",
        left: 585,
        text: "Sab",
        id: "sab"
    });
    $.__views.days.add($.__views.sab);
    $.__views.dom = Ti.UI.createLabel({
        width: 55,
        height: 30,
        color: "#fff",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        layout: "horizontal",
        left: 695,
        text: "Dom",
        id: "dom"
    });
    $.__views.days.add($.__views.dom);
    $.__views.fgMain = Ti.UI.createView({
        backgroundColor: "#fff",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        id: "fgMain"
    });
    $.__views.fgWin.add($.__views.fgMain);
    $.__views.fgWrapper = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        backgroundColor: "transparent",
        id: "fgWrapper"
    });
    $.__views.fgMain.add($.__views.fgWrapper);
    $.__views.fgScrollView = Ti.UI.createScrollView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        contentHeight: Ti.UI.SIZE,
        contentWidth: Ti.UI.FILL,
        layout: "horizontal",
        backgroundColor: "transparent",
        scrollType: "vertical",
        id: "fgScrollView"
    });
    $.__views.fgWrapper.add($.__views.fgScrollView);
    $.__views.tableEventos = Ti.UI.createTableView({
        top: 547,
        id: "tableEventos",
        borderRadios: "10",
        width: "auto",
        height: "442"
    });
    $.__views.fgMain.add($.__views.tableEventos);
    exports.destroy = function() {};
    _.extend($, $.__views);
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
    $.fgWin.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;