
ServerEvents.recipes((event) => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(event);
    event.recipes.createMechanicalCrafting(
        "waystones:sandy_waystone",
        [" AAA ", 
         "BBBBB",
         " CCC ",
         "  D  ",
         " CCC ",
         "EEEEE"],
        {
            A: "waystones:warp_dust",
            B: "minecraft:chiseled_sandstone",
            C: "create:andesite_alloy",
            D: "waystones:warp_stone",
            E: "minecraft:sand"
        }
    ).id("sandy_waystone");
        event.recipes.create.finalize()
        });