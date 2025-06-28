
ServerEvents.recipes((Catalyst) => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(Catalyst);    
    
    
 
   Catalyst.recipes
        .createSequencedAssembly(
            [
                // start the recipe
                withChance("ae2:printed_silicon", 32.0, 2), // have this item be an output with a certain chance, 

            ],
            "#c:silicon",
            [
                // 'create:brass_ingot' is the input.
                // the transitional item set by "transitionalItem('create:large_cogwheel')" is the item that will be used during the recipe as the item that the input is using to transition to the output.
                Catalyst.recipes
                    .createCutting("catalyst_create_core:inactive_printed_silicon_circuit", "catalyst_create_core:inactive_printed_silicon_circuit")
                    .processingTime(50), 

                Catalyst.recipes.createDeploying("catalyst_create_core:inactive_printed_silicon_circuit", [
                    "catalyst_create_core:inactive_printed_silicon_circuit",
                    "ae2:silicon_press",
                ]).keepHeldItem() // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item

            ]
        )
        .transitionalItem("catalyst_create_core:inactive_printed_silicon_circuit")
        .loops(1); // set the transitional item and the loops (amount of repetitions)

    // THIS LINE IS ALSO IMPORTANT!
    // IT MUST BE THE LAST LINE IN THE EVENT HANDLER
    Catalyst.recipes.create.finalize();
    });




// test 

