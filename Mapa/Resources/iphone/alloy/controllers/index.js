function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId0 = [];
    $.__views.win1 = Ti.UI.createWindow({
        id: "win1",
        title: "Rutas",
        backgroundColor: "White"
    });
    $.__views.cabecera = Ti.UI.createView({
        backgroundColor: "gray",
        width: "100%",
        height: "75",
        top: 0,
        id: "cabecera"
    });
    $.__views.win1.add($.__views.cabecera);
    $.__views.mapa = Ti.UI.createWebView({
        width: "100%",
        height: "100%",
        top: 75,
        id: "mapa",
        url: "https://maps.google.com.mx/"
    });
    $.__views.win1.add($.__views.mapa);
    $.__views.tab1 = Ti.UI.createTab({
        window: $.__views.win1,
        id: "tab1",
        title: "Rutas",
        icon: "/icono.png"
    });
    __alloyId0.push($.__views.tab1);
    $.__views.win2 = Ti.UI.createWindow({
        backgroundColor: "#FF000000",
        navBarHidden: true,
        id: "win2",
        title: "Calendario"
    });
    var __alloyId1 = [];
    $.__views.sectionFruit = Ti.UI.createTableViewSection({
        id: "sectionFruit",
        headerTitle: "Fruit"
    });
    __alloyId1.push($.__views.sectionFruit);
    $.__views.__alloyId2 = Ti.UI.createTableViewRow({
        title: "Apple",
        id: "__alloyId2"
    });
    $.__views.sectionFruit.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createTableViewRow({
        title: "Bananas",
        id: "__alloyId3"
    });
    $.__views.sectionFruit.add($.__views.__alloyId3);
    $.__views.sectionVeg = Ti.UI.createTableViewSection({
        id: "sectionVeg",
        headerTitle: "Vegetables"
    });
    __alloyId1.push($.__views.sectionVeg);
    $.__views.__alloyId4 = Ti.UI.createTableViewRow({
        title: "Carrots",
        id: "__alloyId4"
    });
    $.__views.sectionVeg.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createTableViewRow({
        title: "Potatoes",
        id: "__alloyId5"
    });
    $.__views.sectionVeg.add($.__views.__alloyId5);
    $.__views.sectionFish = Ti.UI.createTableViewSection({
        id: "sectionFish",
        headerTitle: "Fish"
    });
    __alloyId1.push($.__views.sectionFish);
    $.__views.__alloyId6 = Ti.UI.createTableViewRow({
        title: "Cod",
        id: "__alloyId6"
    });
    $.__views.sectionFish.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createTableViewRow({
        title: "Haddock",
        id: "__alloyId7"
    });
    $.__views.sectionFish.add($.__views.__alloyId7);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId1,
        id: "table"
    });
    $.__views.win2.add($.__views.table);
    $.__views.tab2 = Ti.UI.createTab({
        window: $.__views.win2,
        id: "tab2",
        title: "Calendario",
        icon: "/icono.png"
    });
    __alloyId0.push($.__views.tab2);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId0,
        backgroundColor: "Gray",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;