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
    function checkemail(emailAddress) {
        var testresults;
        var str = emailAddress;
        var filter = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        testresults = filter.test(str) ? true : false;
        return testresults;
    }
    function RemoverElementos() {
        if ($.win4.children) while (0 != $.win4.children.length) {
            $.win4.children.length;
            $.win4.remove($.win4.children[0]);
        }
    }
    function getTodoList() {
        if ("" == correo.email) {
            var sendit = Ti.Network.createHTTPClient({
                onerror: function(e) {
                    Ti.API.debug(e.error);
                    alert("La conexion esta tardando demaciado intente acceder nuevamente");
                },
                timeout: 1e3
            });
            var preferencias = {
                email: args.email,
                cultural: args.cultural,
                ballet: args.ballet,
                teatro: args.teatro,
                comedia: args.comedia,
                drama: args.drama,
                infantilC: args.infantilC,
                musical: args.musical,
                otrosT: args.otrosT,
                circo: args.circo,
                exposicion: args.exposicion,
                fotografia: args.fotografia,
                escultura: args.escultura,
                pintura: args.pintura,
                libros: args.libros,
                otrosE: args.otrosE,
                cinearte: args.cinearte,
                musica: args.musica,
                clasica: args.clasica,
                instrumental: args.instrumental,
                folklorepopular: args.folklorepopular,
                turistico: args.turistico,
                ferias: args.ferias,
                carnavales: args.carnavales,
                peregrinaciones: args.peregrinaciones,
                fiestasReligiosasIndigenas: args.fiestasReligiosasIndigenas,
                otrosTuristica: args.otrosTuristica,
                entretenimiento: args.entretenimiento,
                conciertos: args.conciertos,
                electronica: args.electronica,
                jazzblues: args.jazzblues,
                trova: args.trova,
                rock: args.rock,
                alternativa: args.alternativa,
                gruperanortena: args.gruperanortena,
                infantilE: args.infantilE,
                hiphop: args.hiphop,
                rancheras: args.rancheras,
                pop: args.pop,
                metal: args.metal,
                reague: args.reague,
                reggeatton: args.reggeatton,
                baladasboleros: args.baladasboleros,
                salsacumbia: args.salsacumbia,
                cristiana: args.cristiana,
                deportes: args.deportes,
                futbol: args.futbol,
                basquetball: args.basquetball,
                tenis: args.tenis,
                beisball: args.beisball,
                volleyball: args.volleyball,
                torneos: args.torneos,
                maratones: args.maratones,
                futbolAmericano: args.futbolAmericano,
                artesMarciales: args.artesMarciales,
                box: args.box,
                luchaLibre: args.luchaLibre,
                atletismo: args.atletismo,
                toros: args.toros,
                autosmotos: args.autosmotos,
                baresantros: args.baresantros,
                inaguracion: args.inaguracion,
                promocion: args.promocion,
                show: args.show,
                fiestasTematicas: args.fiestasTematicas,
                bienvenida: args.bienvenida,
                academica: args.academica,
                areaestudio: args.areaestudio,
                congresos: args.congresos,
                convenciones: args.convenciones,
                seminarios: args.seminarios,
                talleres: args.talleres,
                diplomados: args.diplomados,
                cursos: args.cursos,
                conferencias: args.conferencias,
                expos: args.expos
            };
            sendit.open("GET", "http://localhost/wanagow/segundaversion/preferencias_.php");
            sendit.send(preferencias);
            sendit.onload = function() {
                var json = JSON.parse(this.responseText);
                var json = json.nombre;
                0 == json.length && ($.tableView.headerTitle = "No hay eventos disponibles");
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
                    row.idEvento = json[i].idEvento;
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
        } else {
            var sendit = Ti.Network.createHTTPClient({
                onerror: function(e) {
                    Ti.API.debug(e.error);
                    alert("La conexion esta tardando demaciado intente acceder nuevamente");
                },
                timeout: 1e3
            });
            var preferencias = {
                email: correo.email
            };
            sendit.open("POST", "http://localhost/wanagow/segundaversion/cargareventos.php");
            sendit.send(preferencias);
            sendit.onload = function() {
                var json = JSON.parse(this.responseText);
                var json = json.nombre;
                0 == json.length && ($.tableView.headerTitle = "No hay eventos disponibles");
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
                    row.idEvento = json[i].idEvento;
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
        }
    }
    function header() {
        var cabecera = Titanium.UI.createView({
            backgroundColor: "#F4CE00",
            height: 75,
            width: "100%",
            top: 0
        });
        var preferencia = Titanium.UI.createButton({
            width: 200,
            right: 250,
            left: 450,
            backgroundColor: "#DCBC0D",
            height: 50,
            top: 10,
            font: {
                fontFamily: "Helvetica Neue"
            },
            color: "white",
            borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
            borderColor: "black",
            title: "Preferencias"
        });
        var datosPersonales = Titanium.UI.createButton({
            width: 200,
            right: 250,
            left: 150,
            backgroundColor: "#DCBC0D",
            height: 50,
            top: 10,
            font: {
                fontFamily: "Helvetica Neue"
            },
            color: "white",
            borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
            borderColor: "black",
            title: "Datos Personales"
        });
        $.win4.add(cabecera);
        $.win4.add(datosPersonales);
        $.win4.add(preferencia);
        datosPersonales.addEventListener("click", DatosCuenta);
        preferencia.addEventListener("click", TablePreferencias);
    }
    function principal() {
        header();
        DatosCuenta();
    }
    function DatosCuenta() {
        RemoverElementos();
        header();
        var label1 = Ti.UI.createLabel({
            height: Ti.UI.SIZE,
            width: Ti.UI.SIZE,
            color: "black",
            layout: "center",
            text: "DATOS DE LA CUENTA",
            top: 190
        });
        $.win4.add(label1);
        var email = Ti.UI.createTextField({
            width: 300,
            right: 50,
            left: 250,
            height: 45,
            top: 250,
            hintText: "Email",
            borderColor: "#F4CE00",
            borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
            value: datos.email,
            color: "black",
            editable: false
        });
        $.win4.add(email);
        var password = Ti.UI.createTextField({
            width: 300,
            right: 50,
            left: 250,
            height: 45,
            top: 300,
            hintText: "Password",
            borderColor: "#F4CE00",
            borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
            color: "black",
            passwordMask: true,
            value: datos.passowrd
        });
        $.win4.add(password);
        var confirmacion = Ti.UI.createTextField({
            width: 300,
            right: 50,
            left: 250,
            height: 45,
            top: 350,
            hintText: "Confirme Password",
            borderColor: "#F4CE00",
            borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
            passwordMask: true,
            color: "black",
            value: datos.passowrd
        });
        $.win4.add(confirmacion);
        var label2 = Ti.UI.createLabel({
            height: Ti.UI.SIZE,
            width: Ti.UI.SIZE,
            top: 410,
            text: "DATOS DEL USUARIO"
        });
        $.win4.add(label2);
        var nombre = Ti.UI.createTextField({
            width: 300,
            right: 50,
            left: 250,
            height: 45,
            top: 450,
            hintText: "Nombre",
            borderColor: "#F4CE00",
            borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
            color: "black",
            value: datos.nombre
        });
        $.win4.add(nombre);
        var apellidos = Ti.UI.createTextField({
            width: 300,
            right: 50,
            left: 250,
            height: 45,
            top: 500,
            hintText: "Apellidos",
            borderColor: "#F4CE00",
            borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
            color: "black",
            value: datos.apellidos
        });
        $.win4.add(apellidos);
        var fecha = Titanium.UI.createButton({
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
            title: "Fecha de Nacimiento"
        });
        $.win4.add(fecha);
        var label3 = Ti.UI.createLabel({
            width: 100,
            right: 100,
            left: 260,
            height: 50,
            top: 650,
            text: "SEXO:"
        });
        $.win4.add(label3);
        var mujer = Titanium.UI.createButton({
            width: 100,
            right: 100,
            left: 340,
            backgroundColor: "#DCBC0D",
            height: 50,
            top: 650,
            font: {
                fontFamily: "Helvetica Neue"
            },
            color: "white",
            title: "Mujer"
        });
        $.win4.add(mujer);
        var hombre = Titanium.UI.createButton({
            width: 100,
            right: 100,
            left: 436,
            backgroundColor: "#C5B76A",
            height: 50,
            top: 650,
            font: {
                fontFamily: "Helvetica Neue"
            },
            color: "white",
            title: "Hombre"
        });
        $.win4.add(hombre);
        var guardar = Titanium.UI.createButton({
            width: 300,
            right: 300,
            left: 250,
            layout: "center",
            backgroundColor: "#515050",
            height: 50,
            top: 750,
            font: {
                fontFamily: "Helvetica Neue"
            },
            color: "white",
            borderStyle: "Ti.UI.INPUT_BORDERSTYLE_ROUNDED",
            title: "Guardar"
        });
        guardar.addEventListener("click", function() {
            var sendit = Ti.Network.createHTTPClient({
                onerror: function(e) {
                    Ti.API.debug(e.error);
                    alert("La conexion esta tardando demaciado intente acceder nuevamente");
                },
                timeout: 3e3
            });
            if ("" != email.value && "" != password.value && "" != confirmacion.value && "" != nombre.value && "" != apellidos.value) if (password.value != confirmacion.value) alert("Las contraseñas no coinciden"); else if (checkemail(email.value)) {
                sendit.open("POST", "http://localhost/wanagow/segundaversion/update_personal.php");
                var params = {
                    correo_actual: email.value,
                    password: password.value,
                    nombre: nombre.value,
                    apellidos: apellidos.value
                };
                sendit.send(params);
                alert("Informacion enviada");
            } else alert("Por favor ingresa un correo valido"); else alert("Complete la informacion necesaria");
            sendit.onload = function() {
                if ("A ocurrido un error intente mas tarde" == this.responseText || "El correo no existe" == this.responseText) alert(this.responseText); else {
                    var alertDialog = Titanium.UI.createAlertDialog({
                        title: "Alert",
                        message: this.responseText,
                        buttonNames: [ "OK" ]
                    });
                    alertDialog.show();
                    getTodoList();
                }
            };
        });
        $.win4.add(guardar);
    }
    function TablePreferencias() {
        RemoverElementos();
        header();
        var dataArray = [];
        var dataArray2 = [];
        var dataArray3 = [];
        var sendit = Ti.Network.createHTTPClient({
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert("La conexion esta tardando demaciado intente acceder nuevamente");
            },
            timeout: 3e3
        });
        sendit.open("POST", "http://localhost/wanagow/segundaversion/update_preferences.php");
        var params = {
            email: datos.email
        };
        sendit.send(params);
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
                top: 80,
                height: "90%",
                width: 600
            });
            var view = Ti.UI.createView({
                backgroundColor: "white",
                borderRadius: 10,
                top: 100,
                height: 3310,
                width: 500
            });
            var guardar = Ti.UI.createButton({
                title: "Guardar",
                width: "100%",
                backgroundColor: "#E3C109",
                height: 50,
                top: 3230,
                font: {
                    fontFamily: "Helvetica Neue"
                },
                color: "white",
                zIndex: 1
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
                enviar.open("POST", "http://localhost/wanagow/segundaversion/updatepreferencias.php");
                var params = {
                    email: datos.email,
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
                    bienvenida: $.tableViewEntretenimiento.data[0].rows[37].children[0].value
                };
                enviar.send(params);
                enviar.onload = function() {
                    if ("Insert failed" == this.responseText) alert(this.responseText); else {
                        var alertDialog = Titanium.UI.createAlertDialog({
                            title: "Alert",
                            message: "Actualizacion Terminado",
                            buttonNames: [ "OK" ]
                        });
                        alertDialog.show();
                        getTodoList();
                    }
                };
            });
            $.win4.add(scrollView);
            scrollView.add(view);
            view.add($.tableViewAcademica);
            view.add($.tableViewCultural);
            view.add($.tableViewEntretenimiento);
            for (var i = 0; json.length > i; i++) {
                var row = Ti.UI.createTableViewRow({
                    selectedBackgroundColor: "yellow",
                    height: 40
                });
                if ("Academico" == json[i].tipo && "" == json[i].detalles) {
                    var basicSwitch = Ti.UI.createSwitch({
                        value: json[i].activo,
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
                        value: json[i].activo,
                        top: 3,
                        width: 37,
                        height: 35,
                        right: 0
                    });
                    if (true == button.value) {
                        button.backgroundColor = "#159902";
                        button.value = true;
                        button.backgroundImage = "img/on.png";
                    } else {
                        button.backgroundColor = "#aaa";
                        button.value = false;
                        button.backgroundImage = "img/off.png";
                    }
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
                        value: json[i].activo,
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
                        value: json[i].activo,
                        top: 3,
                        width: 37,
                        height: 35,
                        right: 0
                    });
                    if (true == button.value) {
                        button.backgroundColor = "#159902";
                        button.value = true;
                        button.backgroundImage = "img/on.png";
                    } else {
                        button.backgroundColor = "#aaa";
                        button.value = false;
                        button.backgroundImage = "img/off.png";
                    }
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
                        value: json[i].activo,
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
                        value: json[i].activo,
                        top: 3,
                        width: 37,
                        height: 35,
                        right: 0
                    });
                    if (true == button.value) {
                        button.backgroundColor = "#159902";
                        button.value = true;
                        button.backgroundImage = "img/on.png";
                    } else {
                        button.backgroundColor = "#aaa";
                        button.value = false;
                        button.backgroundImage = "img/off.png";
                    }
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
                    if ("Electronica" == json[i].detalles || "Jazz | Blues" == json[i].detalles || "Trova" == json[i].detalles || "Rock" == json[i].detalles || "Rock" == json[i].detalles || "Alternativa" == json[i].detalles || "Grupera | Nortena" == json[i].detalles || "Infantil" == json[i].detalles || "Hip-Hop" == json[i].detalles || "Ranchera" == json[i].detalles || "Pop" == json[i].detalles || "Metal" == json[i].detalles || "Reague" == json[i].detalles || "Reggeatton" == json[i].detalles || "Baladas | Boleros" == json[i].detalles || "Salsa | Cumbia" == json[i].detalles || "Cristiana" == json[i].detalles || "Futbol" == json[i].detalles || "Basketball" == json[i].detalles || "Tenis" == json[i].detalles || "Beisball" == json[i].detalles || "Volleyball" == json[i].detalles || "Torneos" == json[i].detalles || "Maratones" == json[i].detalles || "Autos | Motos" == json[i].detalles || "Futbol Americano" == json[i].detalles || "Artes Marciales" == json[i].detalles || "Box" == json[i].detalles || "Lucha Libre" == json[i].detalles || "Atletismo" == json[i].detalles || "Toros" == json[i].detalles || "Inaguracion" == json[i].detalles || "Promocion" == json[i].detalles || "Show" == json[i].detalles || "Fiestas Tematicas" == json[i].detalles || "Bienvenida" == json[i].detalles) {
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
        };
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Evento";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    var __alloyId0 = [];
    $.__views.readWin = Ti.UI.createWindow({
        navBarHidden: true,
        id: "readWin"
    });
    getTodoList ? $.__views.readWin.addEventListener("open", getTodoList) : __defers["$.__views.readWin!open!getTodoList"] = true;
    $.__views.cabecera = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "black",
        height: 100,
        width: "100%",
        top: 0,
        id: "cabecera"
    });
    $.__views.readWin.add($.__views.cabecera);
    $.__views.buscar = Ti.UI.createSearchBar({
        width: 300,
        top: 20,
        layout: "Center",
        hintText: "Search",
        id: "buscar",
        barColor: "#000"
    });
    $.__views.readWin.add($.__views.buscar);
    $.__views.im1 = Ti.UI.createImageView({
        image: "imagen/ico.jpg",
        height: 40,
        width: 20,
        righ: 50,
        left: 50,
        top: 20,
        id: "im1"
    });
    $.__views.readWin.add($.__views.im1);
    $.__views.label = Ti.UI.createLabel({
        text: "I am a red window.",
        id: "label"
    });
    $.__views.readWin.add($.__views.label);
    $.__views.im2 = Ti.UI.createImageView({
        image: "imagen/icos.jpg",
        height: 40,
        width: 20,
        righ: 22,
        left: 700,
        top: 20,
        id: "im2"
    });
    $.__views.readWin.add($.__views.im2);
    $.__views.tableView = Ti.UI.createTableView({
        headerTitle: "",
        top: 90,
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
        title: "Eventos",
        icon: "KS_nav_views.png",
        window: $.__views.readWin,
        id: "tab1"
    });
    __alloyId0.push($.__views.tab1);
    $.__views.fgWin = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        layout: "vertical",
        exitOnClose: true,
        id: "fgWin"
    });
    $.__views.fgHeader = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "#555",
        width: Ti.UI.FILL,
        height: 100,
        id: "fgHeader"
    });
    $.__views.fgWin.add($.__views.fgHeader);
    $.__views.fgHeaderTitle = Ti.UI.createLabel({
        top: 30,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#fff",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        text: "Septiembre",
        id: "fgHeaderTitle"
    });
    $.__views.fgHeader.add($.__views.fgHeaderTitle);
    $.__views.izquierda = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "transparent",
        top: -20,
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
        layout: "vertical",
        backgroundColor: "transparent",
        top: -30,
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
        layout: "vertical",
        width: "100%",
        height: 30,
        backgroundColor: "#555",
        top: 70,
        zIndex: 1,
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
        layout: "vertical",
        backgroundColor: "#fff",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        id: "fgMain"
    });
    $.__views.fgWin.add($.__views.fgMain);
    $.__views.fgWrapper = Ti.UI.createView({
        layout: "vertical",
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
    $.__views.tab2 = Ti.UI.createTab({
        title: "Calendario",
        icon: "KS_nav_views.png",
        window: $.__views.fgWin,
        id: "tab2"
    });
    __alloyId0.push($.__views.tab2);
    $.__views.win3 = Ti.UI.createWindow({
        id: "win3",
        title: ""
    });
    $.__views.mapa = Ti.UI.createWebView({
        id: "mapa",
        url: "http://www.lenguajesdeprogramacion.esy.es/"
    });
    $.__views.win3.add($.__views.mapa);
    $.__views.tab3 = Ti.UI.createTab({
        window: $.__views.win3,
        id: "tab3",
        title: "Rutas",
        icon: "KS_nav_views.png"
    });
    __alloyId0.push($.__views.tab3);
    $.__views.win4 = Ti.UI.createWindow({
        navBarHidden: true,
        id: "win4",
        backgroundColor: "white"
    });
    principal ? $.__views.win4.addEventListener("open", principal) : __defers["$.__views.win4!open!principal"] = true;
    $.__views.tableViewAcademica = Ti.UI.createTableView({
        id: "tableViewAcademica",
        top: "0",
        borderRadios: "10",
        width: "auto",
        height: "442"
    });
    $.__views.win4.add($.__views.tableViewAcademica);
    $.__views.tableViewCultural = Ti.UI.createTableView({
        id: "tableViewCultural",
        top: "550",
        borderRadios: "10",
        width: "auto",
        height: "1041"
    });
    $.__views.win4.add($.__views.tableViewCultural);
    $.__views.tableViewEntretenimiento = Ti.UI.createTableView({
        id: "tableViewEntretenimiento",
        top: "1650",
        borderRadios: "10",
        width: "auto",
        height: "1601"
    });
    $.__views.win4.add($.__views.tableViewEntretenimiento);
    $.__views.tab4 = Ti.UI.createTab({
        window: $.__views.win4,
        id: "tab4",
        title: "Cuenta",
        icon: "KS_nav_views.png"
    });
    __alloyId0.push($.__views.tab4);
    $.__views.mainTabGroup = Ti.UI.createTabGroup({
        backgroundColor: "#696969",
        tabs: __alloyId0,
        id: "mainTabGroup"
    });
    $.__views.mainTabGroup && $.addTopLevelView($.__views.mainTabGroup);
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
    __defers["$.__views.readWin!open!getTodoList"] && $.__views.readWin.addEventListener("open", getTodoList);
    __defers["$.__views.__alloyId1!click!getTodoList"] && $.__views.__alloyId1.addEventListener("click", getTodoList);
    __defers["$.__views.win4!open!principal"] && $.__views.win4.addEventListener("open", principal);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;