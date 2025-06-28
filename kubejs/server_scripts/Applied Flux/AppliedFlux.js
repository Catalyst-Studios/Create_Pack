   
ServerEvents.recipes((catalyst) => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(catalyst);

   
   catalyst.recipes
        .createSequencedAssembly(
            [
                // start the recipe
                "appflux:fe_cell_housing", 
            ],
            "appflux:harden_insulating_resin",
            [
                catalyst.recipes.createDeploying("kubejs:blank_item_cell_housing", [
                    "kubejs:blank_item_cell_housing",
                    "ae2:quartz_glass",
                ]), 
                catalyst.recipes.createDeploying("kubejs:blank_item_cell_housing", [
                    "akubejs:blank_item_cell_housing",
                    "eternalores:redstone_ingot",
                ]), 
                catalyst.recipes.createDeploying("kubejs:blank_item_cell_housing", [
                    "kubejs:blank_item_cell_housing",
                    "eternalores:redstone_ingot",
                ]), 
                catalyst.recipes.createDeploying("kubejs:blank_item_cell_housing", [
                    "kubejs:blank_item_cell_housing",
                    "eternalores:redstone_ingot",
                ]), 
                catalyst.recipes.createDeploying("kubejs:blank_item_cell_housing", [
                    "kubejs:blank_item_cell_housing",
                    "appflux:harden_insulating_resin",
                ]),
                catalyst.recipes.createDeploying("kubejs:blank_item_cell_housing", [
                    "kubejs:blank_item_cell_housing",
                    "appflux:harden_insulating_resin",
                ]),  
            ]
        )
        .transitionalItem("kubejs:blank_item_cell_housing")
        .loops(1); 
    
catalyst.recipes
        .createSequencedAssembly(
            [
                // start the recipe
                "appflux:printed_energy_processor", 

            ],
            "appflux:charged_redstone",
            [
                catalyst.recipes
                    .createCutting("catalyst_create_core:inactive_printed_energy_processor", "catalyst_create_core:inactive_printed_energy_processor")
                    .processingTime(50), 

                catalyst.recipes.createDeploying("catalyst_create_core:inactive_printed_energy_processor", [
                    "catalyst_create_core:inactive_printed_energy_processor",
                    "appflux:energy_processor_press",
                ]).keepHeldItem() // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item

            ]
        )
        .transitionalItem("catalyst_create_core:inactive_printed_energy_processor")
        .loops(1); // set the transitional item and the loops (amount of repetitions)


    catalyst.recipes
        .createSequencedAssembly(
            [
                "appflux:energy_processor"
            ],
            "appflux:printed_energy_processor",
            [
                catalyst.recipes.createDeploying("catalyst_create_core:inactive_printed_energy_processor", [
                    "catalyst_create_core:inactive_printed_energy_processor",
                    "minecraft:redstone",
                ]),
                catalyst.recipes.createDeploying("catalyst_create_core:inactive_printed_energy_processor", [
                    "catalyst_create_core:inactive_printed_energy_processor",
                    "ae2:printed_silicon",
                ]), 
                catalyst.recipes.createPressing("catalyst_create_core:inactive_printed_energy_processor",
                                                "catalyst_create_core:inactive_printed_energy_processor")                  
            ]
        )
        .transitionalItem("catalyst_create_core:inactive_printed_energy_processor")
        .loops(1); 
    catalyst.recipes.create.finalize();
    });




// test 






