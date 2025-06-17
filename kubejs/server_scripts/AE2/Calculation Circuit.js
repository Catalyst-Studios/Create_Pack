
ServerEvents.recipes((Catalyst) => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(Catalyst);    
    
    
 
   Catalyst.recipes
        .createSequencedAssembly(
            [
                // start the recipe
                withChance("ae2:printed_calculation_processor", 32.0, 2), // have this item be an output with a certain chance, 

            ],
            "ae2:certus_quartz_crystal",
            [
                // 'create:brass_ingot' is the input.
                // the transitional item set by "transitionalItem('create:large_cogwheel')" is the item that will be used during the recipe as the item that the input is using to transition to the output.
                Catalyst.recipes
                    .createCutting("createappliedkinetics:incomplete_printed_engineering_circuit", "createappliedkinetics:incomplete_printed_engineering_circuit")
                    .processingTime(50), 

                Catalyst.recipes.createDeploying("createappliedkinetics:incomplete_printed_engineering_circuit", [
                    "createappliedkinetics:incomplete_printed_engineering_circuit",
                    "ae2:calculation_processor_press",
                ]), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item

            ]
        )
        .transitionalItem("createappliedkinetics:incomplete_printed_engineering_circuit")
        .loops(1); // set the transitional item and the loops (amount of repetitions)

    // THIS LINE IS ALSO IMPORTANT!
    // IT MUST BE THE LAST LINE IN THE EVENT HANDLER
    Catalyst.recipes.create.finalize();
    });




// test 

