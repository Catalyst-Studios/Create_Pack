 
ServerEvents.recipes((catalyst) => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE catalyst HANDLER
    addCreateRecipeHandler(catalyst);
 catalyst.recipes
        .createSequencedAssembly(
            [
                "enderstorage:ender_chest", 
            ],
            "minecraft:ender_chest",
            [
                catalyst.recipes.createDeploying("minecraft:ender_chest", [
                    "minecraft:ender_chest",
                    "eternalores:gem_obsidian_shard",
                ]), 
                catalyst.recipes.createDeploying("minecraft:ender_chest", [
                    "minecraft:ender_chest",
                    "eternalores:gem_obsidian_shard",
                ]), 
                catalyst.recipes.createDeploying("minecraft:ender_chest", [
                    "minecraft:ender_chest",
                    "eternalores:plate_gold",
                ]),
                catalyst.recipes.createDeploying("minecraft:ender_chest", [
                    "minecraft:ender_chest",
                    "eternalores:plate_gold",
                ]),
                catalyst.recipes.createDeploying("minecraft:ender_chest", [
                    "minecraft:ender_chest",
                    "eternalores:ender_dust",
                ]),
            ]
        )
        .transitionalItem("minecraft:ender_chest")
        .loops(1);
    catalyst.recipes.create.finalize();
    });

     
ServerEvents.recipes((catalyst) => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE catalyst HANDLER
    addCreateRecipeHandler(catalyst);
 catalyst.recipes
        .createSequencedAssembly(
            [
                "enderstorage:ender_tank", 
            ],
            "minecraft:cauldron",
            [
                catalyst.recipes.createDeploying("minecraft:cauldron", [
                    "minecraft:cauldron",
                    "eternalores:gem_obsidian_shard",
                ]), 
                catalyst.recipes.createDeploying("minecraft:cauldron", [
                    "minecraft:cauldron",
                    "eternalores:gem_obsidian_shard",
                ]), 
                catalyst.recipes.createDeploying("minecraft:cauldron", [
                    "minecraft:cauldron",
                    "eternalores:plate_gold",
                ]),
                catalyst.recipes.createDeploying("minecraft:cauldron", [
                    "minecraft:cauldron",
                    "eternalores:plate_gold",
                ]),
                catalyst.recipes.createDeploying("minecraft:cauldron", [
                    "minecraft:cauldron",
                    "eternalores:ender_dust",
                ]),
            ]
        )
        .transitionalItem("minecraft:cauldron")
        .loops(1);
    catalyst.recipes.create.finalize();
    });