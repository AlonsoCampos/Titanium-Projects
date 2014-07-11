function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.socialWin = Ti.UI.createWindow({
        id: "socialWin"
    });
    $.__views.socialWin && $.addTopLevelView($.__views.socialWin);
    $.__views.__alloyId0 = Ti.Facebook.createLoginButton({
        ns: Ti.Facebook,
        id: "__alloyId0"
    });
    $.__views.socialWin.add($.__views.__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.Facebook.appid = 0x50ecf360ab432;
    Ti.Facebook.permissions = [ "email" ];
    $.socialWin.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;