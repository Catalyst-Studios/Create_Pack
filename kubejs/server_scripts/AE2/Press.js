   
ServerEvents.recipes((catalyst) => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(catalyst);
catalyst.recipes
        .createSequencedAssembly(
            [
                // start the recipe
                "2x ae2:calculation_processor_press", 

            ],
            "eternalores:plate_iron",
            [
                catalyst.recipes
                    .createCutting("eternalores:plate_iron", "eternalores:plate_iron")
                    .processingTime(50), 

                catalyst.recipes.createPressing("eternalores:plate_iron", [
                    "eternalores:plate_iron",
                ])

            ]
        )
        .transitionalItem("eternalores:plate_iron")
        .loops(1); // set the transitional item and the loops (amount of repetitions)
catalyst.recipes.create.finalize();

catalyst.recipes
        .createSequencedAssembly(
            [
                // start the recipe
                "2x ae2:engineering_processor_press", 

            ],
            "eternalores:plate_iron",
            [
                catalyst.recipes
                    .createCutting("eternalores:plate_iron", "eternalores:plate_iron")
                    .processingTime(50), 

                catalyst.recipes.createPressing("eternalores:plate_iron", [
                    "eternalores:plate_iron",
                ])

            ]
        )
        .transitionalItem("eternalores:plate_iron")
        .loops(1);
        catalyst.recipes
        .createSequencedAssembly(
            [
                // start the recipe
                "2x ae2:logic_processor_press", 

            ],
            "eternalores:plate_iron",
            [
                catalyst.recipes
                    .createCutting("eternalores:plate_iron", "eternalores:plate_iron")
                    .processingTime(50), 

                catalyst.recipes.createPressing("eternalores:plate_iron", [
                    "eternalores:plate_iron",
                ])

            ]
        )
        .transitionalItem("eternalores:plate_iron")
        .loops(1);
        catalyst.recipes
        .createSequencedAssembly(
            [
                // start the recipe
                "2x ae2:silicon_press", 

            ],
            "eternalores:plate_iron",
            [
                catalyst.recipes
                    .createCutting("eternalores:plate_iron", "eternalores:plate_iron")
                    .processingTime(50), 

                catalyst.recipes.createPressing("eternalores:plate_iron", [
                    "eternalores:plate_iron",
                ])

            ]
        )
        .transitionalItem("eternalores:plate_iron")
        .loops(1); // set the transitional item and the loops (amount of repetitions)
catalyst.recipes.create.finalize();
    });