ServerEvents.recipes((catalyst) => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(catalyst);
    catalyst.recipes.createMechanicalCrafting(
        "immersive_aircraft:airship",
        [" F ", 
         "BBB",
         "DDD",
         "BCB" 
        ],
        {
            B: "#create:casing",
            C: "immersive_aircraft:engine",
            D: "immersive_aircraft:sail",
            F: "#minecraft:banners",
        }
    ).id("airship");



















        catalyst.recipes.create.finalize();
});
