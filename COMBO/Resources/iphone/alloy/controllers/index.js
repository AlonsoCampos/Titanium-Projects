function Controller() {
    function doClick() {
        alert($.label.text);
    }
    function labelClicked() {
        var picker = Titanium.UI.createPicker({
            top: 43,
            value: new Date(),
            type: Ti.UI.PICKER_TYPE_DATE,
            minDate: new Date(2e3, 11, 31),
            maxDate: new Date(2016, 11, 31),
            selectionIndicator: true
        });
        picker_view.add(toolbar);
        picker_view.add(picker);
        picker_view.animate(slide_in);
        picker.addEventListener("change", function(e) {
            var month = e.value.getMonth() + 1;
            var year = e.value.getFullYear();
            var day = e.value.getDate();
            month = month.toString();
            2 > month.length && (month = "0" + month);
            day = day.toString();
            2 > day.length && (day = "0" + day);
            dateLabel.text = month + "/" + day + "/" + year;
        });
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
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Hello, World",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    doClick ? $.__views.label.addEventListener("click", doClick) : __defers["$.__views.label!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var win = Ti.UI.createWindow({});
    var dateLabel = Ti.UI.createLabel({
        color: "#FF9000",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "Click  here for Date",
        textAlign: "center",
        font: {
            fontSize: 4 * Titanium.Platform.displayCaps.platformHeight / 100,
            fontWeight: "bold"
        }
    });
    win.add(dateLabel);
    labelClicked();
    dateLabel.addEventListener("click", function() {});
    var picker_view = Titanium.UI.createView({
        bottom: -251,
        height: 251,
        width: 320,
        zIndex: 9999,
        backgroundColor: "#0c7598"
    });
    win.add(picker_view);
    var cancel = Titanium.UI.createButton({
        title: "Close",
        style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    });
    var done = Titanium.UI.createButton({
        title: "Select",
        style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED
    });
    var spacer = Titanium.UI.createButton({
        systemButton: Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    var toolbar = Titanium.UI.createToolbar({
        top: 0,
        barColor: "#0c7598",
        items: [ cancel, spacer, spacer, spacer, spacer, done ]
    });
    var slide_in = Titanium.UI.createAnimation({
        bottom: 0
    });
    var slide_out = Titanium.UI.createAnimation({
        bottom: -251
    });
    cancel.addEventListener("click", function() {
        dateLabel.text = "";
        picker_view.animate(slide_out);
    });
    done.addEventListener("click", function() {
        picker_view.animate(slide_out);
    });
    win.open();
    __defers["$.__views.label!click!doClick"] && $.__views.label.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;