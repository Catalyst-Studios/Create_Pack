ServerEvents.recipes(catalyst => {
    catalyst.shaped(
        Item.of('ironfurnaces:augment_blasting'),
        [
            'CAC',
            'ABA',
            'CAC'
        ],
        {
            A: 'eternalores:redstone_ingot',
            B: 'kubejs:augment_template',
            C: 'minecraft:blast_furnace'
        }
    )
        catalyst.shaped(
        Item.of('ironfurnaces:augment_smoking'),
        [
            'CAC',
            'ABA',
            'CAC'
        ],
        {
            A: 'eternalores:redstone_ingot',
            B: 'kubejs:augment_template',
            C: 'minecraft:smoker'
        }
    )
        catalyst.shaped(
        Item.of('ironfurnaces:augment_factory'),
        [
            'CAC',
            'ABA',
            'CAC'
        ],
        {
            A: 'eternalores:redstone_ingot',
            B: 'kubejs:augment_template',
            C: 'eternalores:gear_iron'
        }
    )
        catalyst.shaped(
        Item.of('ironfurnaces:augment_generator'),
        [
            'CAC',
            'ABA',
            'CAC'
        ],
        {
            A: 'eternalores:redstone_ingot',
            B: 'kubejs:augment_template',
            C: 'eternalores:uranium_ingot'
        }
    )
        catalyst.shaped(
        Item.of('ironfurnaces:augment_speed'),
        [
            'CAC',
            'ABA',
            'CAC'
        ],
        {
            A: 'eternalores:redstone_ingot',
            B: 'kubejs:augment_template',
            C: 'eternalores:electrum_ingot'
        }
    )
        catalyst.shaped(
        Item.of('ironfurnaces:augment_fuel'),
        [
            'CAC',
            'ABA',
            'CAC'
        ],
        {
            A: 'eternalores:redstone_ingot',
            B: 'kubejs:augment_template',
            C: 'eternalores:silicon'
        }
    )
})