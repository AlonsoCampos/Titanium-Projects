function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "ventana";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.ventana = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "ventana"
    });
    $.__views.ventana && $.addTopLevelView($.__views.ventana);
    $.__views.label = Ti.UI.createLabel({
        text: "Soy una nueva ventana",
        id: "label"
    });
    $.__views.ventana.add($.__views.label);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;