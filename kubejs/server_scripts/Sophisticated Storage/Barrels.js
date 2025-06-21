ServerEvents.recipes(catalyst => {
    
    function barrel(wood, prevTier, nextTier) {
        
        catalyst.shaped(`sophisticatedstorage:${nextTier}_barrel[sophisticatedstorage:wood_type="${wood}"]`, 
            [
                'AAA', 
                'ABA', 
                'AAA'
            ], {
                A: `#c:plates/${nextTier}`, 
                B: `sophisticatedstorage:${prevTier}_barrel[sophisticatedstorage:wood_type="${wood}"]`
        })
    }

    [
        'acacia',
        'birch',
        'crimson',
        'dark_oak',
        'jungle',
        'oak',
        'spruce',
        'warped',
        'mangrove',
        'cherry',
        'bamboo'
    ].forEach(wood => {
        barrel(wood, 'copper', 'iron')
        barrel(wood, 'iron', 'gold')
        barrel(wood, 'gold', 'diamond')
    })

})


ServerEvents.recipes(catalyst => {
    function netherite(output, netheriteInput) {
        catalyst.shaped(output, [
            'AB',
        ], {
            A: 'eternalores:plate_netherite',
            B: netheriteInput
        })
    }
netherite('sophisticatedstorage:netherite_barrel[sophisticatedstorage:wood_type="acacia"]', 'sophisticatedstorage:diamond_barrel[sophisticatedstorage:wood_type="acacia"]')
netherite('sophisticatedstorage:netherite_barrel[sophisticatedstorage:wood_type="birch"]', 'sophisticatedstorage:diamond_barrel[sophisticatedstorage:wood_type="birch"]')
netherite('sophisticatedstorage:netherite_barrel[sophisticatedstorage:wood_type="crimson"]', 'sophisticatedstorage:diamond_barrel[sophisticatedstorage:wood_type="crimson"]')
netherite('sophisticatedstorage:netherite_barrel[sophisticatedstorage:wood_type="dark_oak"]', 'sophisticatedstorage:diamond_barrel[sophisticatedstorage:wood_type="dark_oak"]')
netherite('sophisticatedstorage:netherite_barrel[sophisticatedstorage:wood_type="jungle"]', 'sophisticatedstorage:diamond_barrel[sophisticatedstorage:wood_type="jungle"]')
netherite('sophisticatedstorage:netherite_barrel[sophisticatedstorage:wood_type="oak"]', 'sophisticatedstorage:diamond_barrel[sophisticatedstorage:wood_type="oak"]')
netherite('sophisticatedstorage:netherite_barrel[sophisticatedstorage:wood_type="spruce"]', 'sophisticatedstorage:diamond_barrel[sophisticatedstorage:wood_type="spruce"]')
netherite('sophisticatedstorage:netherite_barrel[sophisticatedstorage:wood_type="warped"]', 'sophisticatedstorage:diamond_barrel[sophisticatedstorage:wood_type="warped"]')
netherite('sophisticatedstorage:netherite_barrel[sophisticatedstorage:wood_type="mangrove"]', 'sophisticatedstorage:diamond_barrel[sophisticatedstorage:wood_type="mangrove"]')
netherite('sophisticatedstorage:netherite_barrel[sophisticatedstorage:wood_type="cherry"]', 'sophisticatedstorage:diamond_barrel[sophisticatedstorage:wood_type="cherry"]')
netherite('sophisticatedstorage:netherite_barrel[sophisticatedstorage:wood_type="bamboo"]', 'sophisticatedstorage:diamond_barrel[sophisticatedstorage:wood_type="bamboo"]')

})