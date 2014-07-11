function Controller() {
    function __alloyId15(e) {
        if (e && e.fromAdapter) return;
        __alloyId15.opts || {};
        var models = __alloyId14.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId11 = models[i];
            __alloyId11.__transform = {};
            var __alloyId13 = Alloy.createController("row", {
                $model: __alloyId11,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId13.getViewEx({
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
            win.open();
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
    $.__views.main = Ti.UI.createLabel({
        color: "#fff0",
        height: "50dp",
        width: Ti.UI.FILL,
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: 0,
                y: "0%"
            },
            endPoint: {
                x: 0,
                y: "100%"
            },
            colors: [ {
                color: "#000",
                offset: 0
            }, {
                color: "#000",
                offset: .02
            }, {
                color: "#333",
                offset: .5
            }, {
                color: "#000",
                offset: .98
            }, {
                color: "#000",
                offset: 1
            } ]
        },
        top: 0,
        left: 0,
        textAlign: "center",
        font: {
            fontSize: "32dp",
            fontWeight: "bold"
        },
        text: "Users",
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    $.__views.table = Ti.UI.createTableView({
        top: "50dp",
        id: "table"
    });
    var __alloyId14 = Alloy.Collections["user"] || user;
    __alloyId14.on("fetch destroy change add remove reset", __alloyId15);
    $.__views.table && $.addTopLevelView($.__views.table);
    showColorInfo ? $.__views.table.addEventListener("click", showColorInfo) : __defers["$.__views.table!click!showColorInfo"] = true;
    exports.destroy = function() {
        __alloyId14.off("fetch destroy change add remove reset", __alloyId15);
    };
    _.extend($, $.__views);
    Alloy.Collections.user.fetch();
    __defers["$.__views.table!click!showColorInfo"] && $.__views.table.addEventListener("click", showColorInfo);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;