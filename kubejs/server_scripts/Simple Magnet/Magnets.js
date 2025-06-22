ServerEvents.recipes(catalyst => {

    catalyst.shaped(Item.of('simplemagnets:basicmagnet'),
        [
            'AAB',
            'AD ',
            'AAF'
        ],
        {
            A: 'eternalores:steel_ingot',
            B: 'kubejs:lapis_ingot',
            D: 'eternalores:ender_dust',
            F: 'eternalores:redstone_ingot'
        }
    )
    catalyst.shaped(Item.of('simplemagnets:advancedmagnet'),
        [
            'AAB',
            'CDE',
            'AAF'
        ],
        {
            A: 'eternalores:electrum_ingot',
            B: 'kubejs:lapis_ingot',
            C: 'simplemagnets:basicmagnet',
            D: 'eternalores:ender_dust',
            E: 'eternalores:plate_diamond',
            F: 'eternalores:redstone_ingot'
        }
    )
    catalyst.shaped(Item.of('simplemagnets:basic_demagnetization_coil'),
        [
            ' A ',
            'CBC',
            'BBB'
        ],
        {
            A: 'eternalores:electrum_ingot',
            B: 'eternalores:steel_ingot',
            C: 'eternalores:redstone_ingot',
        }
    )
    catalyst.shaped(Item.of('simplemagnets:advanced_demagnetization_coil'),
        [
            ' A ',
            'CBC',
            'BDB'
        ],
        {
            A: 'eternalores:ender_dust',
            B: 'eternalores:electrum_ingot',
            C: 'eternalores:redstone_ingot',
            D: 'simplemagnets:basic_demagnetization_coil'
        }
    )
})


