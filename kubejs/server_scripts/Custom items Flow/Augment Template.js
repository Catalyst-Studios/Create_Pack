ServerEvents.recipes((catalyst) => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(catalyst);

    catalyst.recipes.createItemApplication(
        "kubejs:augment_template",
        [
            "minecraft:stone_slab",
            "kubejs:plate_wood",
        ],
    );





        catalyst.recipes.create.finalize();
        });