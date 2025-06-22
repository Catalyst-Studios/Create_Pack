ServerEvents.recipes(catalyst => {
    catalyst.shaped(Item.of('toolbelt:belt'),
        [
            'ABA',
            'B B',
            'BCB'
        ],
        {
            A: 'minecraft:string',
            B: 'minecraft:leather',
            C: 'eternalores:plate_iron'
        }
    )
        catalyst.shaped(Item.of('toolbelt:pouch'),
        [
            'ACA',
            'B B',
            'ABA'
        ],
        {
            A: 'minecraft:string',
            B: 'minecraft:leather',
            C: 'eternalores:plate_gold'
        }
    )
})