
ServerEvents.recipes((event) => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(event);

    event.recipes.createMilling(
        [
           "kubejs:ground_amethyst_shards",
           withChance("minecraft:purple_dye", 0.2),
        ],
        "minecraft:amethyst_shard"
    ).id("inefficient_obsidian_dust_from_milling");

        event.recipes.create.finalize()
        });