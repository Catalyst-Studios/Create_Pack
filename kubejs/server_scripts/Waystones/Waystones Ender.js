
ServerEvents.recipes((event) => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(event);
    event.recipes.createMechanicalCrafting(
        "waystones:end_stone_waystone",
        [" AAA ", 
         "BBBBB",
         " CCC ",
         "  D  ",
         " CCC ",
         "EEEEE"],
        {
            A: "waystones:warp_dust",
            B: "minecraft:end_stone_bricks",
            C: "create:andesite_alloy",
            D: "waystones:warp_stone",
            E: "minecraft:end_stone"
        }
    ).id("end_stone_waystone");
        event.recipes.create.finalize()
        });