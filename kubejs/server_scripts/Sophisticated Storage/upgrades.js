ServerEvents.recipes(catalyst => {
    catalyst.shaped(
        Item.of('sophisticatedstorage:basic_tier_upgrade', 1),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'kubejs:plate_wood',
            B:'minecraft:redstone_torch'
        }
    )
})
ServerEvents.recipes(catalyst => {
    catalyst.shaped(
        Item.of('sophisticatedstorage:basic_to_copper_tier_upgrade', 1),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'eternalores:plate_copper',
            B:'minecraft:redstone_torch'
        }
    )
})
ServerEvents.recipes(catalyst => {
    catalyst.shaped(
        Item.of('sophisticatedstorage:basic_to_iron_tier_upgrade'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'eternalores:plate_iron',
            B:'minecraft:redstone_torch'
        }
    )
})
ServerEvents.recipes(catalyst => {
    catalyst.shaped(Item.of('sophisticatedstorage:basic_to_gold_tier_upgrade'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'eternalores:plate_gold',
            B:'sophisticatedstorage:basic_to_iron_tier_upgrade'
        }
    )
})
ServerEvents.recipes(catalyst => {
    catalyst.shaped(Item.of('sophisticatedstorage:basic_to_diamond_tier_upgrade'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'eternalores:plate_diamond',
            B: 'sophisticatedstorage:basic_to_gold_tier_upgrade'
        }
    )
})
ServerEvents.recipes(catalyst => {
    catalyst.shaped(Item.of('sophisticatedstorage:basic_to_netherite_tier_upgrade'),
        [
            'AB'
        ],
        {
            A: 'eternalores:plate_netherite',
            B:'sophisticatedstorage:basic_to_diamond_tier_upgrade'
        }
    )
})
ServerEvents.recipes(catalyst => {
    catalyst.shaped(Item.of('sophisticatedstorage:copper_to_iron_tier_upgrade'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'eternalores:plate_iron',
            B:'minecraft:redstone_torch'
        }
    )
})
ServerEvents.recipes(catalyst => {
    catalyst.shaped(Item.of('sophisticatedstorage:copper_to_gold_tier_upgrade'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'eternalores:plate_gold',
            B:'sophisticatedstorage:copper_to_iron_tier_upgrade'
        }
    )
})
ServerEvents.recipes(catalyst => {
    catalyst.shaped(Item.of('sophisticatedstorage:copper_to_diamond_tier_upgrade'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'eternalores:plate_diamond',
            B:'sophisticatedstorage:copper_to_gold_tier_upgrade'
        }
    )
})
ServerEvents.recipes(catalyst => {
    catalyst.shaped(Item.of('sophisticatedstorage:copper_to_netherite_tier_upgrade'),
        [
            'AB'
        ],
        {
            A: 'eternalores:plate_netherite',
            B:'sophisticatedstorage:copper_to_diamond_tier_upgrade'
        }
    )
})
ServerEvents.recipes(catalyst => {
    catalyst.shaped(Item.of('sophisticatedstorage:iron_to_gold_tier_upgrade'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'eternalores:plate_gold',
            B:'minecraft:redstone_torch'
        }
    )
})
ServerEvents.recipes(catalyst => {
    catalyst.shaped(Item.of('sophisticatedstorage:iron_to_diamond_tier_upgrade'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'eternalores:plate_diamond',
            B: 'sophisticatedstorage:iron_to_gold_tier_upgrade'
        }
    )
})
ServerEvents.recipes(catalyst => {
    catalyst.shaped(Item.of('sophisticatedstorage:iron_to_netherite_tier_upgrade'),
        [
            'AB'
        ],
        {
            A: 'eternalores:plate_netherite',
            B: 'sophisticatedstorage:iron_to_diamond_tier_upgrade'
        }
    )
})
ServerEvents.recipes(catalyst => {
    catalyst.shaped(Item.of('sophisticatedstorage:gold_to_diamond_tier_upgrade'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'eternalores:plate_diamond',
            B: 'minecraft:redstone_torch'
        }
    )
})
ServerEvents.recipes(catalyst => {
    catalyst.shaped(Item.of('sophisticatedstorage:gold_to_netherite_tier_upgrade'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'eternalores:plate_diamond',
            B: 'sophisticatedstorage:gold_to_diamond_tier_upgrade'
        }
    )
})
ServerEvents.recipes(catalyst => {
    catalyst.shaped(Item.of('sophisticatedstorage:diamond_to_netherite_tier_upgrade'),
        [
            'AB'
        ],
        {
            A: 'eternalores:plate_netherite',
            B: 'minecraft:redstone_torch'
        }
    )
})