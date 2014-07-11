function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.fgWin = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        tabBarHidden: true,
        layout: "vertical",
        exitOnClose: true,
        id: "fgWin"
    });
    $.__views.fgWin && $.addTopLevelView($.__views.fgWin);
    $.__views.fgHeader = Ti.UI.createView({
        backgroundColor: "#555",
        width: Ti.UI.FILL,
        height: 100,
        id: "fgHeader"
    });
    $.__views.fgWin.add($.__views.fgHeader);
    $.__views.fgHeaderTitle = Ti.UI.createLabel({
        text: "TiFlexiGrid",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#fff",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        id: "fgHeaderTitle"
    });
    $.__views.fgHeader.add($.__views.fgHeaderTitle);
    $.__views.fg = Alloy.createWidget("tiflexigrid", "widget", {
        id: "fg",
        __parentSymbol: $.__views.fgWin
    });
    $.__views.fg.setParent($.__views.fgWin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var items = [ {
        title: "sample 1",
        image: "http://dummyimage.com/400x300/000000/fff.jpg"
    }, {
        title: "sample 2",
        image: "http://dummyimage.com/400x300/000000/fff.jpg"
    }, {
        title: "sample 3",
        image: "http://dummyimage.com/400x300/000000/fff.jpg"
    }, {
        title: "sample 4",
        image: "http://dummyimage.com/400x300/000000/fff.jpg"
    }, {
        title: "sample 5",
        image: "http://dummyimage.com/400x300/000000/fff.jpg"
    }, {
        title: "sample 6",
        image: "http://dummyimage.com/400x300/000000/fff.jpg"
    }, {
        title: "sample 7",
        image: "http://dummyimage.com/400x300/000000/fff.jpg"
    }, {
        title: "sample 8",
        image: "http://dummyimage.com/400x300/000000/fff.jpg"
    }, {
        title: "sample 9",
        image: "http://dummyimage.com/400x300/000000/fff.jpg"
    }, {
        title: "sample 10",
        image: "http://dummyimage.com/400x300/000000/fff.jpg"
    } ];
    $.fgWin.addEventListener("open", function() {
        setTimeout(function() {
            $.fg.createGrid({
                columns: 3,
                space: 10,
                data: items,
                layout: "gallery",
                params: {
                    padding: 10,
                    showTitle: false,
                    backgroundColor: "#eee",
                    gridColor: "#ccc"
                },
                width: $.fgWin.size.width
            });
        }, 800);
    });
    Ti.Gesture.addEventListener("orientationchange", function(e) {
        var orientation = e.orientation;
        if (1 > orientation || orientation > 4) return;
        if (1 == orientation) {
            $.fg.clearGrid();
            var params = {
                columns: 3,
                space: 10,
                data: items,
                layout: "gallery",
                params: {
                    padding: 10,
                    showTitle: false,
                    backgroundColor: "#eee",
                    gridColor: "#ccc"
                },
                width: $.fgWin.size.width
            };
            $.fg.createGrid(params);
        } else if (2 == orientation) {
            $.fg.clearGrid();
            var params = {
                columns: 4,
                space: 10,
                data: items,
                layout: "gallery",
                params: {
                    padding: 10,
                    showTitle: false,
                    backgroundColor: "#eee",
                    gridColor: "#ccc"
                },
                width: $.fgWin.size.width
            };
            $.fg.createGrid(params);
        }
    });
    $.fgWin.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;