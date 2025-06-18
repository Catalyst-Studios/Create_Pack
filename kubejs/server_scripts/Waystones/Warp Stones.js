
ServerEvents.recipes((event) => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(event);
    event.recipes.createMechanicalCrafting(
        "waystones:warp_stone",
        ["ABA", 
         "BCB",
         "ABA"],
        {
            A: "kubejs:ground_amethyst_shards",
            B: "waystones:warp_dust",
            C: "eternalores:gem_necroticarite",
        }
    ).id("warp_stone");
        event.recipes.create.finalize()
        });