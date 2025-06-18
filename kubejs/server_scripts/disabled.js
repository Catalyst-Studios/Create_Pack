/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
//Stuff removed from game
ServerEvents.recipes(catalyst => {
    catalyst.remove('ae2:network/blocks/spatial_anchor')
    catalyst.remove('reliquary:alkahestry_tome')
    catalyst.remove('mekanism:dimensional_stabilizer')
    catalyst.remove('mekanism:upgrade_anchor')
    catalyst.remove("sophisticatedbackpacks:stack_upgrade_omega_tier")
    catalyst.remove("sophisticatedbackpacks:inception_upgrade")
    catalyst.remove("sophisticatedstorage:stack_upgrade_omega_tier")
    catalyst.remove({output: "sophisticatedstorage:stack_upgrade_omega_tier"})
    catalyst.remove({output: "extendedae:circuit_cutter"})
})

//Stuff that has new recipies
ServerEvents.recipes(catalyst => {
    catalyst.remove({output: "sophisticatedbackpacks:iron_backpack"})
    catalyst.remove({output: "sophisticatedbackpacks:gold_backpack"})
    catalyst.remove({output: "sophisticatedbackpacks:diamond_backpack"})
    catalyst.remove({output: "sophisticatedbackpacks:netherite_backpack"})
    catalyst.remove({output: "ae2:printed_logic_processor"})
    catalyst.remove({output: "ae2:printed_calculation_processor"})
    catalyst.remove({output: "ae2:printed_engineering_processor"})
    catalyst.remove({output: "ae2:printed_silicon"})
    catalyst.remove({output: "ae2:engineering_processor"})
    catalyst.remove({output: "ae2:calculation_processor"})
    catalyst.remove({output: "ae2:logic_processor"})
    catalyst.remove({output: "ae2:terminal"})
    catalyst.remove({output: "ae2:crafting_terminal"})
    catalyst.remove({output: "waystones:warp_stone"})

})

/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
