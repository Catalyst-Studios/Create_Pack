
ServerEvents.recipes((Catalyst) => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(Catalyst);    
    
    
 //ME Terminal
    Catalyst.recipes.createMechanicalCrafting(
        "ae2:terminal",
        ["ABA",
        "CDC",
        "FEF"],
        {
            A: "ae2:formation_core",
            B: "create:precision_mechanism",
            C: "ae2:annihilation_core",
            D: "#ae2:illuminated_panel",
            E: "ae2:logic_processor",
            F: "create:polished_rose_quartz"
        }
    ).id("ME_Terminal");


    //ME Crafting Terminal


    // THIS LINE IS ALSO IMPORTANT!
    // IT MUST BE THE LAST LINE IN THE EVENT HANDLER
    Catalyst.recipes.create.finalize();
})



ServerEvents.recipes((Catalyst) => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(Catalyst);    
    
    
 //ME Crafting Terminal
    Catalyst.recipes.createMechanicalCrafting(
        "ae2:crafting_terminal",
        [" A ",
        " B ",
        " C "],
        {
            A: "create_things_and_misc:vibration_mechanism",
            B: "ae2:terminal",
            C: "ae2:calculation_processor"
        }
    ).id("Crafting_Terminal");


    //ME Crafting Terminal


    // THIS LINE IS ALSO IMPORTANT!
    // IT MUST BE THE LAST LINE IN THE EVENT HANDLER
    Catalyst.recipes.create.finalize();
})






