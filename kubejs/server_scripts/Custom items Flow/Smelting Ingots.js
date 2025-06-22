ServerEvents.recipes(catalyst => {
    catalyst.smelting('kubejs:lapis_ingot', 'minecraft:lapis_lazuli').xp(0.35)
    catalyst.blasting('kubejs:lapis_ingot', 'minecraft:lapis_lazuli').xp(0.35)
    catalyst.smelting('eternalores:redstone_ingot', 'minecraft:redstone').xp(0.35)
    catalyst.blasting('eternalores:redstone_ingot', 'minecraft:redstone').xp(0.35)
})