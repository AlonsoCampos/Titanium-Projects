function Controller() {
    function __alloyId6(e) {
        if (e && e.fromAdapter) return;
        __alloyId6.opts || {};
        var models = __alloyId5.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId2 = models[i];
            __alloyId2.__transform = {};
            var __alloyId4 = Alloy.createController("row", {
                $model: __alloyId2
            });
            rows.push(__alloyId4.getViewEx({
                recurse: true
            }));
        }
        $.__views.table.setData(rows);
    }
    function showId(e) {
        e.row.model && alert(e.row.model);
    }
    function addTestFighter() {
        var model = Alloy.createModel("fighters", {
            name: "Name " + counter,
            nickname: "Nickname " + counter
        });
        counter++;
        fighters.add(model);
        model.save();
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
        backgroundColor: "#fff",
        navBarHidden: true,
        exitOnClose: true,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.title = Ti.UI.createLabel({
        top: 0,
        height: "50dp",
        width: Ti.UI.FILL,
        color: "#fff",
        backgroundColor: "#a00",
        font: {
            fontSize: "36dp",
            fontWeight: "bold"
        },
        textAlign: "center",
        text: "Fighters",
        id: "title"
    });
    $.__views.index.add($.__views.title);
    addTestFighter ? $.__views.title.addEventListener("click", addTestFighter) : __defers["$.__views.title!click!addTestFighter"] = true;
    $.__views.table = Ti.UI.createTableView({
        top: "50dp",
        bottom: 0,
        id: "table"
    });
    $.__views.index.add($.__views.table);
    var __alloyId5 = Alloy.Collections["fighters"] || fighters;
    __alloyId5.on("fetch destroy change add remove reset", __alloyId6);
    showId ? $.__views.table.addEventListener("click", showId) : __defers["$.__views.table!click!showId"] = true;
    exports.destroy = function() {
        __alloyId5.off("fetch destroy change add remove reset", __alloyId6);
    };
    _.extend($, $.__views);
    var fighters = Alloy.Collections.fighters;
    var counter = 1;
    fighters.fetch();
    $.index.open();
    __defers["$.__views.title!click!addTestFighter"] && $.__views.title.addEventListener("click", addTestFighter);
    __defers["$.__views.table!click!showId"] && $.__views.table.addEventListener("click", showId);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;