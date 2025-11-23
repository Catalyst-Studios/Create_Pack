
ServerEvents.recipes((catalyst) => {

    addCreateRecipeHandler(catalyst);

catalyst.recipes.createMechanicalCrafting(
        "cookingforblockheads:sink",
        ["AAA", 
        "BCB", 
        "BBB"],
        {
            A: "eternalores:plate_iron",
            B: "minecraft:terracotta",
            C: "minecraft:water_bucket",
        }
    ).id("sink");
        catalyst.recipes.create.finalize();
});