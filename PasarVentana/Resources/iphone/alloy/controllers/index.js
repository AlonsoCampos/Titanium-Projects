function Controller() {
    function animateOpen() {
        var window2 = Alloy.createController("win2").getView();
        window2.open();
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
        backgroundColor: "blue",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "I am a blue window!",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    $.__views.__alloyId0 = Ti.UI.createButton({
        title: "Nueva Ventana",
        id: "__alloyId0"
    });
    $.__views.index.add($.__views.__alloyId0);
    animateOpen ? $.__views.__alloyId0.addEventListener("click", animateOpen) : __defers["$.__views.__alloyId0!click!animateOpen"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.__alloyId0!click!animateOpen"] && $.__views.__alloyId0.addEventListener("click", animateOpen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;