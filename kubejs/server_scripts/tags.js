/* 
This script is property of Catalyst Studios for use in the Catalyst: Create. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
//Stuff removed from game
ServerEvents.tags('block', catalyst => {
    catalyst.remove('minecraft:mineable/pickaxe', 'waystones:waystone' )
})











ServerEvents.tags('item', catalyst => {
   catalyst.remove('minecraft:enchantable/durability', 'waystones:warp_stone')
   catalyst.add('c:ingots', 'kubejs:lapis_ingot')
   catalyst.add('c:ingots/lapis', 'kubejs:lapis_ingot')
})
/* 
This script is property of Catalyst Studios for use in the Catalyst: Create. It is under the All Rights Reserved license.
It cannot be used or modified outside of Catalyst Studios without explicit permission from Catalyst Studios.
*/
