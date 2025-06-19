ServerEvents.recipes((catalyst) => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(catalyst);
    catalyst.recipes.createMechanicalCrafting(
        "immersive_aircraft:biplane",
        ["  A  ", 
         "BDDDB",
         "EECEE", 
         "BDDDB",
         "  B  ",
         " BDB "],
        {
            A: "immersive_aircraft:propeller",
            B: "#create:casing",
            C: "immersive_aircraft:engine",
            E: "#c:ingots/iron",
            D: "immersive_aircraft:sail"
        }
    ).id("biplane");



















        catalyst.recipes.create.finalize();
});
