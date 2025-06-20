ServerEvents.recipes((catalyst) => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(catalyst);
    catalyst.recipes.createMechanicalCrafting(
        "immersive_aircraft:cargo_airship",
        ["  F  ", 
         "EBBBE",
         "EDDDE",
         " BCB " 
        ],
        {
            B: "#create:casing",
            C: "immersive_aircraft:engine",
            D: "immersive_aircraft:sail",
            E: "minecraft:chest",
            F: "#minecraft:banners",
        }
    ).id("cargo_airship");



















        catalyst.recipes.create.finalize();
});
