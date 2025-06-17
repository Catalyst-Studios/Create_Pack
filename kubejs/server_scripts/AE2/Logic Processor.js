
ServerEvents.recipes((Catalyst) => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(Catalyst);    
    
    
 
  Catalyst.recipes
        .createSequencedAssembly(
            [
                // start the recipe
                "ae2:logic_processor"
            ],
            "ae2:printed_logic_processor",
            [
                // 'create:brass_ingot' is the input.
                // the transitional item set by "transitionalItem('create:large_cogwheel')" is the item that will be used during the recipe as the item that the input is using to transition to the output.
                Catalyst.recipes.createDeploying("create:large_cogwheel", [
                    "create:large_cogwheel",
                    "ae2:printed_silicon",
                ]), // like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
                Catalyst.recipes.createDeploying("create:large_cogwheel", [
                    "create:large_cogwheel",
                    "minecraft:redstone",
                ]),  
            ]
        )
        .transitionalItem("create:large_cogwheel")
        .loops(1); // set the transitional item and the loops (amount of repetitions)
    // THIS LINE IS ALSO IMPORTANT!
    // IT MUST BE THE LAST LINE IN THE EVENT HANDLER
    Catalyst.recipes.create.finalize();
    });




// test 

