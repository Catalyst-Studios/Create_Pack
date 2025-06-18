
ServerEvents.recipes((event) => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(event);
    event.recipes.createMechanicalCrafting(
        "waystones:deepslate_waystone",
        [" AAA ", 
         "BBBBB",
         " CCC ",
         "  D  ",
         " CCC ",
         "EEEEE"],
        {
            A: "waystones:warp_dust",
            B: "minecraft:chiseled_deepslate",
            C: "create:andesite_alloy",
            D: "waystones:warp_stone",
            E: "minecraft:deepslate"
        }
    ).id("deepslate_waystone");
        event.recipes.create.finalize()
        });