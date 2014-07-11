function Controller() {
    function resetTableData() {
        rowControllers = [];
        _.each(items.toJSON(), function(i) {
            rowControllers.push(Alloy.createController("collection/row", {
                id: i.id,
                name: i.name,
                score: i.score
            }));
        });
        var theArray = _.sortBy(rowControllers, function(r) {
            return r.getView("name").text;
        });
        $.table.setData(_.map(theArray, function(r) {
            return r.getView();
        }));
    }
    function deleteItem(e) {
        var model = items.get(e.row.id);
        model && model.destroy();
        items.fetch();
    }
    function incrementScore(e) {
        var model = items.get(e.row.id);
        model && model.set("score", model.get("score") + 1);
    }
    function addItem() {
        var model = items.create({
            name: $.text.value || "<no name>",
            score: 0
        });
        items.add(model);
        items.fetch();
        $.text.value = "";
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "collection/collectionTab";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId8 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        title: "Collection",
        id: "__alloyId8"
    });
    $.__views.table = Ti.UI.createTableView({
        top: "50p",
        id: "table"
    });
    $.__views.__alloyId8.add($.__views.table);
    incrementScore ? $.__views.table.addEventListener("click", incrementScore) : __defers["$.__views.table!click!incrementScore"] = true;
    deleteItem ? $.__views.table.addEventListener("longpress", deleteItem) : __defers["$.__views.table!longpress!deleteItem"] = true;
    $.__views.bar = Ti.UI.createView({
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
        id: "bar"
    });
    $.__views.__alloyId8.add($.__views.bar);
    $.__views.text = Ti.UI.createTextField({
        top: "6dp",
        bottom: "6dp",
        left: "7dp",
        right: "60dp",
        color: "#111",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "add an item",
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
        id: "text"
    });
    $.__views.bar.add($.__views.text);
    addItem ? $.__views.text.addEventListener("return", addItem) : __defers["$.__views.text!return!addItem"] = true;
    $.__views.__alloyId9 = Ti.UI.createView({
        height: "48dp",
        width: "3dp",
        top: "1dp",
        right: "50dp",
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "100%",
                y: "0%"
            },
            colors: [ {
                color: "#666",
                offset: 0
            }, {
                color: "#ccc",
                offset: .5
            }, {
                color: "#666",
                offset: 1
            } ]
        },
        id: "__alloyId9"
    });
    $.__views.bar.add($.__views.__alloyId9);
    $.__views.addView = Ti.UI.createView({
        top: 0,
        bottom: 0,
        right: 0,
        width: "50dp",
        id: "addView"
    });
    $.__views.bar.add($.__views.addView);
    addItem ? $.__views.addView.addEventListener("click", addItem) : __defers["$.__views.addView!click!addItem"] = true;
    $.__views.addImage = Ti.UI.createImageView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        color: "#fff",
        backgroundColor: "transparent",
        image: "/ic_menu_add.png",
        touchEnabled: false,
        id: "addImage"
    });
    $.__views.addView.add($.__views.addImage);
    $.__views.collectionTab = Ti.UI.createTab({
        window: $.__views.__alloyId8,
        title: "Collection",
        icon: "KS_nav_views.png",
        id: "collectionTab"
    });
    $.__views.collectionTab && $.addTopLevelView($.__views.collectionTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var items = Alloy.createCollection("collectionTab"), rowControllers = [];
    items.on("change:score", function(model) {
        if (model) {
            var row = _.find(rowControllers, function(r) {
                return r.id === model.id;
            });
            if (row) {
                row.score.text = model.get("score");
                model.save();
            }
        }
    });
    items.on("fetch", function() {
        resetTableData();
    });
    items.fetch();
    __defers["$.__views.table!click!incrementScore"] && $.__views.table.addEventListener("click", incrementScore);
    __defers["$.__views.table!longpress!deleteItem"] && $.__views.table.addEventListener("longpress", deleteItem);
    __defers["$.__views.text!return!addItem"] && $.__views.text.addEventListener("return", addItem);
    __defers["$.__views.addView!click!addItem"] && $.__views.addView.addEventListener("click", addItem);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;