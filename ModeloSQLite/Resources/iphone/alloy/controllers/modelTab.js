function Controller() {
    function create() {
        app.save(app.defaults);
    }
    function destroy() {
        app.destroy();
    }
    function increment() {
        app.set({
            count: app.get("count") + 1,
            id: ID
        });
        app.save();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "modelTab";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId5 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        title: "Single Model",
        layout: "vertical",
        id: "__alloyId5"
    });
    $.__views.__alloyId6 = Ti.UI.createView({
        top: 0,
        height: "50dp",
        width: Ti.UI.FILL,
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            colors: [ {
                color: "#a00",
                offset: 0
            }, {
                color: "#800",
                offset: 1
            } ]
        },
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        color: "#fff",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "Single Model",
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.create = Ti.UI.createButton({
        width: "50%",
        top: 80,
        title: "create",
        id: "create"
    });
    $.__views.__alloyId5.add($.__views.create);
    create ? $.__views.create.addEventListener("click", create) : __defers["$.__views.create!click!create"] = true;
    $.__views.destroy = Ti.UI.createButton({
        width: "50%",
        top: 20,
        title: "destroy",
        id: "destroy"
    });
    $.__views.__alloyId5.add($.__views.destroy);
    destroy ? $.__views.destroy.addEventListener("click", destroy) : __defers["$.__views.destroy!click!destroy"] = true;
    $.__views.increment = Ti.UI.createButton({
        width: "50%",
        top: 20,
        title: "Increment",
        id: "increment"
    });
    $.__views.__alloyId5.add($.__views.increment);
    increment ? $.__views.increment.addEventListener("click", increment) : __defers["$.__views.increment!click!increment"] = true;
    $.__views.label = Ti.UI.createLabel({
        left: 20,
        right: 20,
        top: 20,
        textAlign: "center",
        text: "model: {}",
        id: "label"
    });
    $.__views.__alloyId5.add($.__views.label);
    $.__views.modelTab = Ti.UI.createTab({
        window: $.__views.__alloyId5,
        title: "Single Model",
        icon: "KS_nav_ui.png",
        id: "modelTab"
    });
    $.__views.modelTab && $.addTopLevelView($.__views.modelTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var ID = "instance";
    var app = Alloy.createModel("modelTab");
    app.on("fetch change:count", function() {
        $.label.text = "model: " + JSON.stringify(app.attributes);
    });
    app.set("id", ID);
    app.fetch();
    __defers["$.__views.create!click!create"] && $.__views.create.addEventListener("click", create);
    __defers["$.__views.destroy!click!destroy"] && $.__views.destroy.addEventListener("click", destroy);
    __defers["$.__views.increment!click!increment"] && $.__views.increment.addEventListener("click", increment);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;