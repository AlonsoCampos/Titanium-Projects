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
                if (0 != json[i].costo) {
                    var row = Ti.UI.createTableViewRow({
                        selectedBackgroundColor: "white",
                        rowIndex: i,
                        height: 110
                    });
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
                        width: 300,
                        height: 30
                    });
                    row.add(labelUserName);
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
                        width: 360
                    });
                    row.add(labelDetails);
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
                        width: 350,
                        height: 20
                    });
                    row.add(labelDate);
                } else {
                    var row = Ti.UI.createTableViewRow({
                        selectedBackgroundColor: "white",
                        rowIndex: i,
                        height: 110
                    });
                    var imageAvatar = Ti.UI.createImageView({
                        image: IMG_BASE + json[i].image,
                        left: 20,
                        top: 6,
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
                        width: 300,
                        height: 30
                    });
                    row.add(labelUserName);
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
                        width: 360
                    });
                    row.add(labelDetails);
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
                        width: 350,
                        height: 20
                    });
                    row.add(labelDate);
                }
                dataArray.push(row);
            }
            $.tableView.setData(dataArray);
        };
    }
    function insertData() {
        if ("" != $.inserTxtF.value && null != $.inserTxtF.value) {
            var request = Ti.Network.createHTTPClient({
                onload: alert("Your chore has been submitted"),
                onerror: function(e) {
                    Ti.API.debug(e.error);
                    alert("There was an error during the conexion");
                },
                timeout: 1e3
            });
            request.open("POST", "http://alonsocampos.net46.net/insert.php");
            var params = {
                nombre: $.inserTxtF.value
            };
            request.send(params);
        } else alert("Please write something in the textbox");
        $.inserTxtF.value = "";
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
        headerTitle: "To do list",
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
    insertData ? $.__views.insertBtn.addEventListener("click", insertData) : __defers["$.__views.insertBtn!click!insertData"] = true;
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
    $.mainTabGroup.open();
    __defers["$.__views.readWin!open!getTodoList"] && $.__views.readWin.addEventListener("open", getTodoList);
    __defers["$.__views.__alloyId1!click!getTodoList"] && $.__views.__alloyId1.addEventListener("click", getTodoList);
    __defers["$.__views.insertBtn!click!insertData"] && $.__views.insertBtn.addEventListener("click", insertData);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;