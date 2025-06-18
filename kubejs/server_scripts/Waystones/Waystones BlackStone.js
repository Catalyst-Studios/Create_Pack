
ServerEvents.recipes((event) => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(event);
    event.recipes.createMechanicalCrafting(
        "waystones:blackstone_waystone",
        [" AAA ", 
         "BBBBB",
         " CCC ",
         "  D  ",
         " CCC ",
         "EEEEE"],
        {
            A: "waystones:warp_dust",
            B: "minecraft:polished_blackstone_bricks",
            C: "create:andesite_alloy",
            D: "waystones:warp_stone",
            E: "minecraft:blackstone"
        }
    ).id("blackstone_waystone");
        event.recipes.create.finalize()
        });