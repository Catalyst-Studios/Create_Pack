   /* 
This script is property of Catalyst Studios for use in the Catalyst: Create. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
   ServerEvents.recipes((catalyst) => {
    addCreateRecipeHandler(catalyst);
   
       catalyst.recipes
        .createSequencedAssembly(
            [
                "structurecompass:structure_compass", 
            ],
            "minecraft:compass",
            [
                catalyst.recipes.createDeploying("minecraft:compass", [
                    "minecraft:compass",
                    "eternalores:gem_onyx",
                ]), 
                catalyst.recipes.createDeploying("minecraft:compass", [
                    "minecraft:compass",
                    "eternalores:gem_peridot",
                ]), 
                catalyst.recipes.createDeploying("minecraft:compass", [
                    "minecraft:compass",
                    "eternalores:gem_ruby",
                ]), 
                catalyst.recipes.createDeploying("minecraft:compass", [
                    "minecraft:compass",
                    "eternalores:gem_sapphire",
                ]), 
            ]
        )
        .transitionalItem("minecraft:compass")
        .loops(1);
   
   
   
   
   
   
   
   
   
   
   
   
   
   catalyst.recipes.create.finalize();
});
/* 
This script is property of Catalyst Studios for use in the Catalyst: Create. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/