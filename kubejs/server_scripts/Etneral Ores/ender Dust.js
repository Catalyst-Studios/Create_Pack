
ServerEvents.recipes((event) => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(event);
    event.recipes.createSandpaperPolishing(
        [
            "eternalores:ender_dust",
        ],
        "minecraft:ender_pearl"
    ).id("ender_dust");
        event.recipes.create.finalize()
        });