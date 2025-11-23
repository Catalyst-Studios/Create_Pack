
ServerEvents.recipes((catalyst) => {

    addCreateRecipeHandler(catalyst);

catalyst.recipes.createMechanicalCrafting(
        "easy_piglins:barterer",
        ["AAA", 
        "ABA", 
        "CDC"],
        {
            A: "#c:glass_panes/colorless",
            B: "minecraft:gold_block",
            C: "eternalores:plate_iron",
            D: "minecraft:nether_bricks"
        }
    ).id("barterer");
        catalyst.recipes.create.finalize();
});