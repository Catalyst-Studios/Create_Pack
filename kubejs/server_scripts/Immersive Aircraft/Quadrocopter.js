ServerEvents.recipes((catalyst) => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(catalyst);
    catalyst.recipes.createMechanicalCrafting(
        "immersive_aircraft:quadrocopter",
        ["ABBA",
         "CCCC",
         "ABBA"
        ],
        {
            A: "immersive_aircraft:enhanced_propeller",
            B: "minecraft:bamboo",
            C: "#create:casing",
        }
    ).id("quadrocopter");



















        catalyst.recipes.create.finalize();
});
