function Controller() {
    function __alloyId14(e) {
        if (e && e.fromAdapter) return;
        __alloyId14.opts || {};
        var models = __alloyId13.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId10 = models[i];
            __alloyId10.__transform = {};
            var __alloyId12 = Alloy.createController("row", {
                $model: __alloyId10,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId12.getViewEx({
                recurse: true
            }));
        }
        $.__views.table.setData(rows);
    }
    function showColorInfo(e) {
        var color = e.row.model.color;
        var collection = Alloy.createCollection("color");
        collection.fetch({
            query: {
                statement: "SELECT * FROM colors WHERE color = ?",
                params: [ color ]
            }
        });
        var colorModel = collection.at(0);
        if (colorModel) {
            var win = Alloy.createController("color", colorModel).getView();
            Alloy.Globals.navgroup.openWindow(win);
        } else alert("No color info found!");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "main";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.table = Ti.UI.createTableView({
        id: "table"
    });
    var __alloyId13 = Alloy.Collections["user"] || user;
    __alloyId13.on("fetch destroy change add remove reset", __alloyId14);
    $.__views.table && $.addTopLevelView($.__views.table);
    showColorInfo ? $.__views.table.addEventListener("click", showColorInfo) : __defers["$.__views.table!click!showColorInfo"] = true;
    exports.destroy = function() {
        __alloyId13.off("fetch destroy change add remove reset", __alloyId14);
    };
    _.extend($, $.__views);
    Alloy.Collections.user.fetch();
    __defers["$.__views.table!click!showColorInfo"] && $.__views.table.addEventListener("click", showColorInfo);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;