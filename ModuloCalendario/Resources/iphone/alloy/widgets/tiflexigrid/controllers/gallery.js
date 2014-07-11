function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "tiflexigrid/" + s : s.substring(0, index) + "/tiflexigrid/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("tiflexigrid");
    this.__widgetId = "tiflexigrid";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "gallery";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.fgMainView = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        layout: "vertical",
        backgroundColor: "transparent",
        zIndex: 0,
        id: "fgMainView"
    });
    $.__views.fgMainView && $.addTopLevelView($.__views.fgMainView);
    $.__views.fgThumb = Ti.UI.createView({
        id: "fgThumb"
    });
    $.__views.fgMainView.add($.__views.fgThumb);
    $.__views.fgImage = Ti.UI.createImageView({
        id: "fgImage"
    });
    $.__views.fgThumb.add($.__views.fgImage);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;