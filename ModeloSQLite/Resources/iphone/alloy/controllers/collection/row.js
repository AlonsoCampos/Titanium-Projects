function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "collection/row";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        height: "50dp",
        className: "itemrow",
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.name = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        right: "70dp",
        left: "10dp",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        id: "name"
    });
    $.__views.row.add($.__views.name);
    $.__views.score = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        right: "10dp",
        width: "50dp",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        textAlign: "right",
        id: "score"
    });
    $.__views.row.add($.__views.score);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.id = $.row.id = args.id;
    $.name.text = args.name || "<no name>";
    $.score.text = args.score || 0;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;