// priority: 1

ServerEvents.recipes((event) => {
    // THIS LINE IS IMPORTANT!
    // IT MUST BE THE FIRST LINE IN THE EVENT HANDLER
    addCreateRecipeHandler(event);



    event.recipes.createPressing(
        [
            "kubejs:diamond_sheet",,
        ],
        "diamond"
    )

    event.recipes.createPressing(
        [
            "kubejs:netherite_sheet",,
        ],
        "netherite_ingot"
    )

    // THIS LINE IS ALSO IMPORTANT!
    // IT MUST BE THE LAST LINE IN THE EVENT HANDLER
    event.recipes.create.finalize();
});