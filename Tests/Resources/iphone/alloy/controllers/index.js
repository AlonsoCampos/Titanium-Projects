function Controller() {
    function openAddUser() {
        Alloy.createController("add").getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId4 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: false,
        title: "Users",
        id: "__alloyId4"
    });
    $.__views.__alloyId6 = Ti.UI.createButton({
        title: "add user",
        id: "__alloyId6"
    });
    openAddUser ? $.__views.__alloyId6.addEventListener("click", openAddUser) : __defers["$.__views.__alloyId6!click!openAddUser"] = true;
    $.__views.__alloyId4.rightNavButton = $.__views.__alloyId6;
    $.__views.__alloyId7 = Alloy.createController("main", {
        id: "__alloyId7",
        __parentSymbol: $.__views.__alloyId4
    });
    $.__views.__alloyId7.setParent($.__views.__alloyId4);
    $.__views.index = Ti.UI.iOS.createNavigationWindow({
        backgroundColor: "#fff",
        navBarHidden: false,
        exitOnClose: true,
        window: $.__views.__alloyId4,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.navgroup = $.index;
    $.index.open();
    __defers["$.__views.__alloyId6!click!openAddUser"] && $.__views.__alloyId6.addEventListener("click", openAddUser);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;