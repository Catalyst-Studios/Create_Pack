
ServerEvents.recipes((catalyst) => {

    addCreateRecipeHandler(catalyst);

catalyst.recipes.createMechanicalCrafting(
        "easy_villagers:trader",
        ["AAA", 
        "ABA", 
        "CCC"],
        {
            A: "#c:glass_panes/colorless",
            B: "minecraft:redstone",
            C: "eternalores:plate_iron",
        }
    ).id("trader");



catalyst.recipes.createMechanicalCrafting(
        "easy_villagers:auto_trader",
        ["AAA", 
        "ABA", 
        "CDC"],
        {
            A: "#c:glass_panes/colorless",
            B: "minecraft:redstone",
            C: "eternalores:plate_iron",
            D: "eternalores:plate_netherite"
        }
    ).id("autotrader");




catalyst.recipes.createMechanicalCrafting(
        "easy_villagers:farmer",
        ["AAA", 
        "ABA", 
        "CDC"],
        {
            A: "#c:glass_panes/colorless",
            B: "minecraft:water_bucket",
            C: "eternalores:plate_iron",
            D: "minecraft:dirt"
        }
    ).id("farmer");




catalyst.recipes.createMechanicalCrafting(
        "easy_villagers:breeder",
        ["AAA", 
        "ABA", 
        "CDC"],
        {
            A: "#c:glass_panes/colorless",
            B: "#minecraft:beds",
            C: "eternalores:plate_iron",
            D: "#minecraft:planks"
        }
    ).id("breeder");



catalyst.recipes.createMechanicalCrafting(
        "easy_villagers:converter",
        ["AAA", 
        "ABA", 
        "CDC"],
        {
            A: "#c:glass_panes/colorless",
            B: "minecraft:rotten_flesh",
            C: "eternalores:plate_iron",
            D: "minecraft:mossy_cobblestone"
        }
    ).id("converter");



catalyst.recipes.createMechanicalCrafting(
        "easy_villagers:iron_farm",
        ["AAA", 
        "ABA", 
        "CDC"],
        {
            A: "#c:glass_panes/colorless",
            B: "minecraft:lava_bucket",
            C: "eternalores:plate_iron",
            D: "minecraft:cobblestone"
        }
    ).id("ironfarm");



catalyst.recipes.createMechanicalCrafting(
        "easy_villagers:incubator",
        ["AAA", 
        "A A", 
        "CDC"],
        {
            A: "#c:glass_panes/colorless",
            C: "eternalores:plate_iron",
            D: "minecraft:white_wool"
        }
    ).id("incubator");





        catalyst.recipes.create.finalize();
});