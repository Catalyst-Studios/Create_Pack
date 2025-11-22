
ServerEvents.recipes((catalyst) => {

    addCreateRecipeHandler(catalyst);

catalyst.recipes.createMechanicalCrafting(
        "cookingforblockheads:sink",
        ["AAA", 
        "BCB", 
        "BBB"],
        {
            a: "#c:ingots/iron",
            P: "#minecraft:terracotta",
            R: "minecraft:water_bucket",
        }
    ).id("sink");
        catalyst.recipes.create.finalize();
});