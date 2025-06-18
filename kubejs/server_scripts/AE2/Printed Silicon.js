
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
                    .createCutting("createappliedkinetics:incomplete_silicon_print", "createappliedkinetics:incomplete_silicon_print")
                    .processingTime(50), 

                Catalyst.recipes.createDeploying("createappliedkinetics:incomplete_silicon_print", [
                    "createappliedkinetics:incomplete_silicon_print",
                    "ae2:silicon_press",
                ]).keepHeldItem() // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item

            ]
        )
        .transitionalItem("createappliedkinetics:incomplete_silicon_print")
        .loops(1); // set the transitional item and the loops (amount of repetitions)

    // THIS LINE IS ALSO IMPORTANT!
    // IT MUST BE THE LAST LINE IN THE EVENT HANDLER
    Catalyst.recipes.create.finalize();
    });




// test 

