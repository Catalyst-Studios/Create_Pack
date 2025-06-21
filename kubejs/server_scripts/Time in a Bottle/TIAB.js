ServerEvents.recipes((catalyst) => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(catalyst);   
 catalyst.recipes
        .createSequencedAssembly(
            [
                // start the recipe
                "tiab:time_in_a_bottle", 
            ],
            "minecraft:glass_bottle",
            [
                catalyst.recipes.createDeploying("minecraft:glass_bottle", [
                    "minecraft:glass_bottle",
                    "create:experience_nugget",
                ]),
                catalyst.recipes.createDeploying("minecraft:glass_bottle", [
                    "minecraft:glass_bottle",
                    "eternalores:plate_gold",
                ]), 
                catalyst.recipes.createDeploying("minecraft:glass_bottle", [
                    "minecraft:glass_bottle",
                    "eternalores:plate_gold",
                ]), 
                catalyst.recipes.createDeploying("minecraft:glass_bottle", [
                    "minecraft:glass_bottle",
                    "eternalores:shadowsteel_ingot",
                ]), 
                catalyst.recipes.createDeploying("minecraft:glass_bottle", [
                    "minecraft:glass_bottle",
                    "eternalores:gem_tachyarite",
                ]),  
            ]
        )
        .transitionalItem("minecraft:glass_bottle")
        .loops(1);

   catalyst.recipes.create.finalize();
});

