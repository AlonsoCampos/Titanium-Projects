function Controller() {
    function __alloyId8() {
        $.__views.index.removeEventListener("open", __alloyId8);
        if ($.__views.index.activity) $.__views.index.activity.onCreateOptionsMenu = function(e) {
            var __alloyId7 = {
                title: "add user",
                icon: "ic_menu_add.png",
                id: "__alloyId6"
            };
            $.__views.__alloyId6 = e.menu.add(_.pick(__alloyId7, Alloy.Android.menuItemCreateArgs));
            $.__views.__alloyId6.applyProperties(_.omit(__alloyId7, Alloy.Android.menuItemCreateArgs));
            openAddUser ? $.__views.__alloyId6.addEventListener("click", openAddUser) : __defers["$.__views.__alloyId6!click!openAddUser"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
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
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        exitOnClose: true,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId4 = Alloy.createController("main", {
        id: "__alloyId4",
        __parentSymbol: $.__views.index
    });
    $.__views.__alloyId4.setParent($.__views.index);
    $.__views.index.addEventListener("open", __alloyId8);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.__alloyId6!click!openAddUser"] && $.__views.__alloyId6.addEventListener("click", openAddUser);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;