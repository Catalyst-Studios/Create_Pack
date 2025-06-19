ServerEvents.recipes((catalyst) => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(catalyst);
    catalyst.recipes.createMechanicalCrafting(
        "immersive_aircraft:engine",
        ["AAAAA",
         "ABCBA",
         "ABCBA",
         "AAAAA" 
        ],
        {
            A: "#c:ingots/steel",
            B: "immersive_aircraft:sturdy_pipes",
            C: "ironfurnaces:iron_furnace",
        }
    ).id("engine");



















        catalyst.recipes.create.finalize();
});
