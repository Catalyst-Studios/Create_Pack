ServerEvents.recipes(catalyst => {
catalyst.shaped(

    Item.of('ironfurnaces:copper_furnace', 1),
    [
        'AAA',
        'ABA',
        'AAA'
    ],
    {
        A: 'eternalores:plate_copper',
        B: 'minecraft:furnace',
    }
)
catalyst.shaped(

    Item.of('ironfurnaces:silver_furnace', 1),
    [
        'AAA',
        'ABA',
        'AAA'
    ],
    {
        A: 'eternalores:plate_silver',
        B: 'ironfurnaces:copper_furnace',
    }
)
catalyst.shaped(

    Item.of('ironfurnaces:iron_furnace', 1),
    [
        'AAA',
        'ABA',
        'AAA'
    ],
    {
        A: 'eternalores:plate_iron',
        B: 'ironfurnaces:copper_furnace',
    }
)
catalyst.shaped(

    Item.of('ironfurnaces:gold_furnace', 1),
    [
        'AAA',
        'ABA',
        'AAA'
    ],
    {
        A: 'eternalores:plate_gold',
        B: 'ironfurnaces:iron_furnace',
    }
)
catalyst.shaped(

    Item.of('ironfurnaces:diamond_furnace', 1),
    [
        'AAA',
        'ABA',
        'AAA'
    ],
    {
        A: 'kubejs:diamond_sheet',
        B: 'ironfurnaces:gold_furnace',
    }
)
catalyst.shaped(

    Item.of('ironfurnaces:emerald_furnace', 1),
    [
        'AAA',
        'ABA',
        'AAA'
    ],
    {
        A: 'minecraft:emerald',
        B: 'ironfurnaces:diamond_furnace',
    }
)
catalyst.shaped(

    Item.of('ironfurnaces:obsidian_furnace', 1),
    [
        'AAA',
        'ABA',
        'AAA'
    ],
    {
        A: 'eternalores:gem_obsidian_shard',
        B: 'ironfurnaces:crystal_furnace',
    }
)
catalyst.shaped(

    Item.of('ironfurnaces:netherite_furnace', 1),
    [
        ' A ',
        'ABA',
        ' A '
    ],
    {
        A: 'eternalores:plate_netherite',
        B: 'ironfurnaces:obsidian_furnace',
    }
)
})