ServerEvents.recipes((catalyst) => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(catalyst);
    catalyst.recipes.createMechanicalCrafting(
        "immersive_aircraft:engine",
        ["AAAAA",
         "ABCBA",
         "ABDBA",
         "AAAAA" 
        ],
        {
            A: "eternalores:plate_steel",
            B: "immersive_aircraft:sturdy_pipes",
            C: "ironfurnaces:iron_furnace",
            D: "oritech:still_oil_bucket"
        }
    ).id("engine");



















        catalyst.recipes.create.finalize();
});
