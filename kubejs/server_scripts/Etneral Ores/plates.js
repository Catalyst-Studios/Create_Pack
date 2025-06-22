
ServerEvents.recipes(event => {

  function removePlateRecipe(material) {
    event.remove({ id: `eternalores:plates/${material}_plate` });
  }

  removePlateRecipe('aluminum');
  removePlateRecipe('blue_steel');
  removePlateRecipe('brass');
  removePlateRecipe('bronze');
  removePlateRecipe('cast_iron');
  removePlateRecipe('cast_steel');
  removePlateRecipe('cobalt');
  removePlateRecipe('constantan');
  removePlateRecipe('copper');
  removePlateRecipe('electrum');
  removePlateRecipe('enderium');
  removePlateRecipe('gallium');
  removePlateRecipe('gold');
  removePlateRecipe('graphite');
  removePlateRecipe('invar');
  removePlateRecipe('iridium');
  removePlateRecipe('iron');
  removePlateRecipe('lead');
  removePlateRecipe('lumium');
  removePlateRecipe('netherite');
  removePlateRecipe('nethersteel');
  removePlateRecipe('nickel');
  removePlateRecipe('osmium');
  removePlateRecipe('pig_iron');
  removePlateRecipe('platinum');
  removePlateRecipe('plutonium');
  removePlateRecipe('rose_gold');
  removePlateRecipe('shadowsteel');
  removePlateRecipe('signalum');
  removePlateRecipe('silver');
  removePlateRecipe('steel');
  removePlateRecipe('tin');
  removePlateRecipe('titanium');
  removePlateRecipe('ultimatitanium');
  removePlateRecipe('uranium');
  removePlateRecipe('wrought_iron');
  removePlateRecipe('zinc');
  removePlateRecipe('diamond')
    


})

ServerEvents.recipes((catalyst) => {
addCreateRecipeHandler(catalyst);
function pressing (output, input){
    catalyst.recipes.createPressing(
        [
                output,
                ],
                input
)
        catalyst.recipes.create.finalize();}

pressing ("eternalores:plate_aluminum", "eternalores:aluminum_ingot");
pressing ("eternalores:plate_blue_steel","eternalores:blue_steel_ingot");
pressing ("eternalores:plate_bronze","eternalores:bronze_ingot");
pressing ("eternalores:plate_cast_iron","eternalores:cast_iron_ingot");
pressing ("eternalores:plate_cast_steel","eternalores:cast_steel_ingot");
pressing ("eternalores:plate_cobalt","eternalores:cobalt_ingot");
pressing ("eternalores:plate_constantan","eternalores:constantan_ingot");
pressing ("eternalores:plate_enderium","eternalores:enderium_ingot");
pressing ("eternalores:plate_gallium","eternalores:gallium_ingot");
pressing ("eternalores:plate_graphite","eternalores:graphite_ingot");
pressing ("eternalores:plate_invar","eternalores:invar_ingot");
pressing ("eternalores:plate_iridium","eternalores:iridium_ingot");
pressing ("eternalores:plate_lead","eternalores:lead_ingot");
pressing ("eternalores:plate_lumium","eternalores:lumium_ingot");
pressing ("eternalores:plate_netherite","minecraft:netherite_ingot");
pressing ("eternalores:plate_nethersteel","eternalores:nethersteel_ingot");
pressing ("eternalores:plate_nickel","eternalores:nickel_ingot");
pressing ("eternalores:plate_osmium","eternalores:osmium_ingot");
pressing ("eternalores:plate_pig_iron","eternalores:pig_iron_ingot");
pressing ("eternalores:plate_platinum","eternalores:platinum_ingot");
pressing ("eternalores:plate_plutonium","eternalores:plutonium_ingot");
pressing ("eternalores:plate_rose_gold","eternalores:rose_gold_ingot");
pressing ("eternalores:plate_shadowsteel","eternalores:shadowsteel_ingot");
pressing ("eternalores:plate_signalum","eternalores:signalum_ingot");
pressing ("eternalores:plate_silver","eternalores:silver_ingot");
pressing ("eternalores:plate_steel","eternalores:steel_ingot");
pressing ("eternalores:plate_tin","eternalores:tin_ingot");
pressing ("eternalores:plate_titanium","eternalores:titanium_ingot");
pressing ("eternalores:plate_ultimatitanium","eternalores:ultimatitanium_ingot");
pressing ("eternalores:plate_uranium","eternalores:uranium_ingot");
pressing ("eternalores:plate_wrought_iron","eternalores:wrought_iron_ingot");
pressing ("eternalores:plate_diamond", "minecraft:diamond")
pressing ("kubejs:plate_wood", "minecraft:oak_planks")

}); 


