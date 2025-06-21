
ServerEvents.recipes((catalyst) => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(catalyst);   
    catalyst.recipes.createMixing(
        "eternalores:shadowsteel_dust", 
        [
            Fluid.of('minecraft:lava', 1000),
            "eternalores:steel_dust",
            "eternalores:steel_dust",
            "eternalores:obsidian_dust",
            "eternalores:obsidian_dust",
            "eternalores:necroticarite_dust",
            "eternalores:necroticarite_dust",
,
        ]
    ).heated();
   catalyst.recipes.create.finalize();
});