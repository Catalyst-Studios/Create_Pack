ServerEvents.recipes(catalyst => {
    catalyst.shaped(
        Item.of('jamd:portal_block'),
        [
            ' A ',
            'BCD',
            ' E '
        ],
        {
            A:'eternalores:gem_sapphire',
            B: 'eternalores:gem_peridot',
            C: 'eternalores:plate_tachyarite',
            D: 'eternalores:gem_ruby',
            E: 'eternalores:gem_onyx'
        }
    )
})