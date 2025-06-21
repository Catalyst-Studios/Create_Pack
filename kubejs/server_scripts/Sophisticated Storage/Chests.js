ServerEvents.recipes(catalyst => {
    function copper(output, copperInput) {
        catalyst.shaped(output, [
            'AAA',
            'ABA',
            'AAA'
        ], {
            A: 'eternalores:plate_copper',
            B: copperInput
        })
    }
copper('sophisticatedstorage:copper_chest[sophisticatedstorage:wood_type="acacia"]', 'sophisticatedstorage:chest[sophisticatedstorage:wood_type="acacia"]')
copper('sophisticatedstorage:copper_chest[sophisticatedstorage:wood_type="birch"]', 'sophisticatedstorage:chest[sophisticatedstorage:wood_type="birch"]')
copper('sophisticatedstorage:copper_chest[sophisticatedstorage:wood_type="crimson"]', 'sophisticatedstorage:chest[sophisticatedstorage:wood_type="crimson"]')
copper('sophisticatedstorage:copper_chest[sophisticatedstorage:wood_type="dark_oak"]', 'sophisticatedstorage:chest[sophisticatedstorage:wood_type="dark_oak"]')
copper('sophisticatedstorage:copper_chest[sophisticatedstorage:wood_type="jungle"]', 'sophisticatedstorage:chest[sophisticatedstorage:wood_type="jungle"]')
copper('sophisticatedstorage:copper_chest[sophisticatedstorage:wood_type="oak"]', 'sophisticatedstorage:chest[sophisticatedstorage:wood_type="oak"]')
copper('sophisticatedstorage:copper_chest[sophisticatedstorage:wood_type="spruce"]', 'sophisticatedstorage:chest[sophisticatedstorage:wood_type="spruce"]')
copper('sophisticatedstorage:copper_chest[sophisticatedstorage:wood_type="warped"]', 'sophisticatedstorage:chest[sophisticatedstorage:wood_type="warped"]')
copper('sophisticatedstorage:copper_chest[sophisticatedstorage:wood_type="mangrove"]', 'sophisticatedstorage:chest[sophisticatedstorage:wood_type="mangrove"]')
copper('sophisticatedstorage:copper_chest[sophisticatedstorage:wood_type="cherry"]', 'sophisticatedstorage:chest[sophisticatedstorage:wood_type="cherry"]')
copper('sophisticatedstorage:copper_chest[sophisticatedstorage:wood_type="bamboo"]', 'sophisticatedstorage:chest[sophisticatedstorage:wood_type="bamboo"]')

})


ServerEvents.recipes(catalyst => {
    function iron(output, ironInput) {
        catalyst.shaped(output, [
            ' A ',
            'ABA',
            ' A '
        ], {
            A: 'eternalores:plate_iron',
            B: ironInput
        })
    }
iron('sophisticatedstorage:iron_chest[sophisticatedstorage:wood_type="acacia"]', 'sophisticatedstorage:copper_chest[sophisticatedstorage:wood_type="acacia"]')
iron('sophisticatedstorage:iron_chest[sophisticatedstorage:wood_type="birch"]', 'sophisticatedstorage:copper_chest[sophisticatedstorage:wood_type="birch"]')
iron('sophisticatedstorage:iron_chest[sophisticatedstorage:wood_type="crimson"]', 'sophisticatedstorage:copper_chest[sophisticatedstorage:wood_type="crimson"]')
iron('sophisticatedstorage:iron_chest[sophisticatedstorage:wood_type="dark_oak"]', 'sophisticatedstorage:copper_chest[sophisticatedstorage:wood_type="dark_oak"]')
iron('sophisticatedstorage:iron_chest[sophisticatedstorage:wood_type="jungle"]', 'sophisticatedstorage:copper_chest[sophisticatedstorage:wood_type="jungle"]')
iron('sophisticatedstorage:iron_chest[sophisticatedstorage:wood_type="oak"]', 'sophisticatedstorage:copper_chest[sophisticatedstorage:wood_type="oak"]')
iron('sophisticatedstorage:iron_chest[sophisticatedstorage:wood_type="spruce"]', 'sophisticatedstorage:copper_chest[sophisticatedstorage:wood_type="spruce"]')
iron('sophisticatedstorage:iron_chest[sophisticatedstorage:wood_type="warped"]', 'sophisticatedstorage:copper_chest[sophisticatedstorage:wood_type="warped"]')
iron('sophisticatedstorage:iron_chest[sophisticatedstorage:wood_type="mangrove"]', 'sophisticatedstorage:copper_chest[sophisticatedstorage:wood_type="mangrove"]')
iron('sophisticatedstorage:iron_chest[sophisticatedstorage:wood_type="cherry"]', 'sophisticatedstorage:copper_chest[sophisticatedstorage:wood_type="cherry"]')
iron('sophisticatedstorage:iron_chest[sophisticatedstorage:wood_type="bamboo"]', 'sophisticatedstorage:copper_chest[sophisticatedstorage:wood_type="bamboo"]')

})


ServerEvents.recipes(catalyst => {
    function gold(output, goldInput) {
        catalyst.shaped(output, [
            'AAA',
            'ABA',
            'AAA'
        ], {
            A: 'eternalores:plate_gold',
            B: goldInput
        })
    }
gold('sophisticatedstorage:gold_chest[sophisticatedstorage:wood_type="acacia"]', 'sophisticatedstorage:iron_chest[sophisticatedstorage:wood_type="acacia"]')
gold('sophisticatedstorage:gold_chest[sophisticatedstorage:wood_type="birch"]', 'sophisticatedstorage:iron_chest[sophisticatedstorage:wood_type="birch"]')
gold('sophisticatedstorage:gold_chest[sophisticatedstorage:wood_type="crimson"]', 'sophisticatedstorage:iron_chest[sophisticatedstorage:wood_type="crimson"]')
gold('sophisticatedstorage:gold_chest[sophisticatedstorage:wood_type="dark_oak"]', 'sophisticatedstorage:iron_chest[sophisticatedstorage:wood_type="dark_oak"]')
gold('sophisticatedstorage:gold_chest[sophisticatedstorage:wood_type="jungle"]', 'sophisticatedstorage:iron_chest[sophisticatedstorage:wood_type="jungle"]')
gold('sophisticatedstorage:gold_chest[sophisticatedstorage:wood_type="oak"]', 'sophisticatedstorage:iron_chest[sophisticatedstorage:wood_type="oak"]')
gold('sophisticatedstorage:gold_chest[sophisticatedstorage:wood_type="spruce"]', 'sophisticatedstorage:iron_chest[sophisticatedstorage:wood_type="spruce"]')
gold('sophisticatedstorage:gold_chest[sophisticatedstorage:wood_type="warped"]', 'sophisticatedstorage:iron_chest[sophisticatedstorage:wood_type="warped"]')
gold('sophisticatedstorage:gold_chest[sophisticatedstorage:wood_type="mangrove"]', 'sophisticatedstorage:iron_chest[sophisticatedstorage:wood_type="mangrove"]')
gold('sophisticatedstorage:gold_chest[sophisticatedstorage:wood_type="cherry"]', 'sophisticatedstorage:iron_chest[sophisticatedstorage:wood_type="cherry"]')
gold('sophisticatedstorage:gold_chest[sophisticatedstorage:wood_type="bamboo"]', 'sophisticatedstorage:iron_chest[sophisticatedstorage:wood_type="bamboo"]')

})

ServerEvents.recipes(catalyst => {
    function diamond(output, diamondInput) {
        catalyst.shaped(output, [
            'AAA',
            'ABA',
            'AAA'
        ], {
            A: 'eternalores:plate_diamond',
            B: diamondInput
        })
    }
diamond('sophisticatedstorage:diamond_chest[sophisticatedstorage:wood_type="acacia"]', 'sophisticatedstorage:gold_chest[sophisticatedstorage:wood_type="acacia"]')
diamond('sophisticatedstorage:diamond_chest[sophisticatedstorage:wood_type="birch"]', 'sophisticatedstorage:gold_chest[sophisticatedstorage:wood_type="birch"]')
diamond('sophisticatedstorage:diamond_chest[sophisticatedstorage:wood_type="crimson"]', 'sophisticatedstorage:gold_chest[sophisticatedstorage:wood_type="crimson"]')
diamond('sophisticatedstorage:diamond_chest[sophisticatedstorage:wood_type="dark_oak"]', 'sophisticatedstorage:gold_chest[sophisticatedstorage:wood_type="dark_oak"]')
diamond('sophisticatedstorage:diamond_chest[sophisticatedstorage:wood_type="jungle"]', 'sophisticatedstorage:gold_chest[sophisticatedstorage:wood_type="jungle"]')
diamond('sophisticatedstorage:diamond_chest[sophisticatedstorage:wood_type="oak"]', 'sophisticatedstorage:gold_chest[sophisticatedstorage:wood_type="oak"]')
diamond('sophisticatedstorage:diamond_chest[sophisticatedstorage:wood_type="spruce"]', 'sophisticatedstorage:gold_chest[sophisticatedstorage:wood_type="spruce"]')
diamond('sophisticatedstorage:diamond_chest[sophisticatedstorage:wood_type="warped"]', 'sophisticatedstorage:gold_chest[sophisticatedstorage:wood_type="warped"]')
diamond('sophisticatedstorage:diamond_chest[sophisticatedstorage:wood_type="mangrove"]', 'sophisticatedstorage:gold_chest[sophisticatedstorage:wood_type="mangrove"]')
diamond('sophisticatedstorage:diamond_chest[sophisticatedstorage:wood_type="cherry"]', 'sophisticatedstorage:gold_chest[sophisticatedstorage:wood_type="cherry"]')
diamond('sophisticatedstorage:diamond_chest[sophisticatedstorage:wood_type="bamboo"]', 'sophisticatedstorage:gold_chest[sophisticatedstorage:wood_type="bamboo"]')

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
netherite('sophisticatedstorage:netherite_chest[sophisticatedstorage:wood_type="acacia"]', 'sophisticatedstorage:diamond_chest[sophisticatedstorage:wood_type="acacia"]')
netherite('sophisticatedstorage:netherite_chest[sophisticatedstorage:wood_type="birch"]', 'sophisticatedstorage:diamond_chest[sophisticatedstorage:wood_type="birch"]')
netherite('sophisticatedstorage:netherite_chest[sophisticatedstorage:wood_type="crimson"]', 'sophisticatedstorage:diamond_chest[sophisticatedstorage:wood_type="crimson"]')
netherite('sophisticatedstorage:netherite_chest[sophisticatedstorage:wood_type="dark_oak"]', 'sophisticatedstorage:diamond_chest[sophisticatedstorage:wood_type="dark_oak"]')
netherite('sophisticatedstorage:netherite_chest[sophisticatedstorage:wood_type="jungle"]', 'sophisticatedstorage:diamond_chest[sophisticatedstorage:wood_type="jungle"]')
netherite('sophisticatedstorage:netherite_chest[sophisticatedstorage:wood_type="oak"]', 'sophisticatedstorage:diamond_chest[sophisticatedstorage:wood_type="oak"]')
netherite('sophisticatedstorage:netherite_chest[sophisticatedstorage:wood_type="spruce"]', 'sophisticatedstorage:diamond_chest[sophisticatedstorage:wood_type="spruce"]')
netherite('sophisticatedstorage:netherite_chest[sophisticatedstorage:wood_type="warped"]', 'sophisticatedstorage:diamond_chest[sophisticatedstorage:wood_type="warped"]')
netherite('sophisticatedstorage:netherite_chest[sophisticatedstorage:wood_type="mangrove"]', 'sophisticatedstorage:diamond_chest[sophisticatedstorage:wood_type="mangrove"]')
netherite('sophisticatedstorage:netherite_chest[sophisticatedstorage:wood_type="cherry"]', 'sophisticatedstorage:diamond_chest[sophisticatedstorage:wood_type="cherry"]')
netherite('sophisticatedstorage:netherite_chest[sophisticatedstorage:wood_type="bamboo"]', 'sophisticatedstorage:diamond_chest[sophisticatedstorage:wood_type="bamboo"]')

})