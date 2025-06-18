
ServerEvents.recipes((event) => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(event);
   event.recipes.createMixing(
        "2x waystones:warp_dust",
        [
            "eternalores:ender_dust",
            "kubejs:ground_amethyst_shards",
        ])
        event.recipes.create.finalize()
        });