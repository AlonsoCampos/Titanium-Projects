var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Collections.fighters = Alloy.createCollection("fighters");

var fighters = [ {
    name: "Wanderlei Silva",
    nickname: "The Axe Murderer",
    fighterId: "wandy"
}, {
    name: "Manny Pacquiao",
    nickname: "Pac-Man",
    fighterId: "manny"
}, {
    name: "Muhammad Ali",
    nickname: "The Greatest",
    fighterId: "ali"
} ];

_.each(fighters, function(fighter) {
    var model = Alloy.createModel("fighters", fighter);
    model.save();
});

Alloy.createController("index");