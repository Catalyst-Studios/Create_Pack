ServerEvents.recipes((catalyst) => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(catalyst);
    catalyst.recipes.createMechanicalCrafting(
        "immersive_aircraft:warship",
        ["  A  ", 
         " BGB ",
         "DDDDD", 
         "DDDDD",
         "BBCBB",
         "ECCCE",
        "  F  ",],
        {
            A: "minecraft:crossbow",
            B: "#create:casing",
            C: "immersive_aircraft:engine",
            E: "#c:chests/wooden",
            D: "immersive_aircraft:sail",
            F: "#minecraft:banners",
            G: "minecraft:glass"
        }
    ).id("warship");



















        catalyst.recipes.create.finalize();
});
