ServerEvents.recipes((catalyst) => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(catalyst);
    catalyst.recipes.createMechanicalCrafting(
        "immersive_aircraft:gyrodyne",
        [" A ",
         "B B",
         "CDC",
         "BEB"


        ],
        {
            A: "minecraft:grindstone",
            B: "#c:rods",
            C: "immersive_aircraft:sail",
            D: "#create:casing",
            E: "immersive_aircraft:enhanced_propeller",
        }
    ).id("gyrodyne");



















        catalyst.recipes.create.finalize();
});
