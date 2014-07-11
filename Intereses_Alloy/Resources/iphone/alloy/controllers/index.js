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
    $.__views.selector = Ti.UI.createPicker({
        id: "selector",
        selectionIndicator: "true"
    });
    $.__views.index.add($.__views.selector);
    var __alloyId0 = [];
    $.__views.columna1 = Ti.UI.createPickerColumn({
        id: "columna1"
    });
    __alloyId0.push($.__views.columna1);
    $.__views.__alloyId1 = Ti.UI.createPickerRow({
        title: "Opción 1",
        id: "__alloyId1"
    });
    $.__views.columna1.addRow($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createPickerRow({
        title: "Opción 2",
        id: "__alloyId2"
    });
    $.__views.columna1.addRow($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createPickerRow({
        title: "Opción 3",
        id: "__alloyId3"
    });
    $.__views.columna1.addRow($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createPickerRow({
        title: "Opción 4",
        id: "__alloyId4"
    });
    $.__views.columna1.addRow($.__views.__alloyId4);
    $.__views.selector.add(__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;