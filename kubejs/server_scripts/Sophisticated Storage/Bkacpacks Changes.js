/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/

//Iron Backpack
ServerEvents.recipes(catalyst => {
catalyst.shaped(

    Item.of('sophisticatedbackpacks:iron_backpack', 1),
    [
        'ABA',
        'ACA',
        'AAA'
    ],
    {
        A: 'create:iron_sheet',
        B: 'create:precision_mechanism',
        C: 'sophisticatedbackpacks:backpack'
    }
)


//Gold backpacks
catalyst.shaped(

    Item.of('sophisticatedbackpacks:gold_backpack', 1),
    [
        'ABA',
        'ACA',
        'AAA'
    ],
    {
        A: 'create:golden_sheet',
        B: 'create:precision_mechanism',
        C: 'sophisticatedbackpacks:iron_backpack'
    }
)


//Diamond Backpack
catalyst.shaped(

    Item.of('sophisticatedbackpacks:diamond_backpack', 1),
    [
        'ABA',
        'ACA',
        'AAA'
    ],
    {
        A: 'kubejs:diamond_sheet',
        B: 'create:precision_mechanism',
        C: 'sophisticatedbackpacks:gold_backpack'
    }
)


//Netherite Backpack
catalyst.smithing(
    'sophisticatedbackpacks:netherite_backpack',
    'minecraft:netherite_upgrade_smithing_template',
    'sophisticatedbackpacks:diamond_backpack',
    'kubejs:netherite_sheet'
    
)
})
/* 
This script is property of Catalyst Studios for use in the modpack Little Bit Large. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
