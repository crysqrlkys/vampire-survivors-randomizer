export const characterImagesUrl = `${process.env.PUBLIC_URL}/characters`;
export const weaponImagesUrl = `${process.env.PUBLIC_URL}/weapons`;
export const accessoryImagesUrl = `${process.env.PUBLIC_URL}/accessories`;

//create default as the first one
//fill prepopulated items mark them as default
export const characters = [
    {
        'name': 'Antonio',
        'url': `${characterImagesUrl}/Antonio.png`
    }, 
    {
        'name': 'Imelda',
        'url': `${characterImagesUrl}/Imelda.png`
    },
    {
        'name': 'Pasqualina',
        'url': `${characterImagesUrl}/Pasqualina.png`
    },
    {
        'name': 'Gennaro',
        'url': `${characterImagesUrl}/Gennaro.png`
    },
    {
        'name': 'Arca',
        'url': `${characterImagesUrl}/Arca.png`
    },
    {
        'name': 'Porta',
        'url': `${characterImagesUrl}/Porta.png`
    },
    {
        'name': 'Lama',
        'url': `${characterImagesUrl}/Lama.png`
    },
    {
        'name': 'Poe',
        'url': `${characterImagesUrl}/Poe.png`
    },
    {
        'name': 'Clerici',
        'url': `${characterImagesUrl}/Clerici.png`
    },
    {
        'name': 'Dommario',
        'url': `${characterImagesUrl}/Dommario.png`
    },
    {
        'name': 'Krochi',
        'url': `${characterImagesUrl}/Krochi.png`
    },
    {
        'name': 'Christine',
        'url': `${characterImagesUrl}/Christine.png`
    },
    {
        'name': 'Pugnala',
        'url': `${characterImagesUrl}/Pugnala.png`
    },
    {
        'name': 'Poppea',
        'url': `${characterImagesUrl}/Poppea.png`
    },
    {
        'name': 'Mortaccio',
        'url': `${characterImagesUrl}/Mortaccio.png`
    },
    {
        'name': 'Cavallo',
        'url': `${characterImagesUrl}/Cavallo.png`
    },
    {
        'name': 'Exdash',
        'url': `${characterImagesUrl}/Exdash.png`
    },
    {
        'name': 'Red Death',
        'url': `${characterImagesUrl}/RedDeath.png`
    },
    {
        'name': 'missingN',
        'url': `${characterImagesUrl}/missingN.png`
    },
];

const weaponsDictionary = {
    0: {
        'name': 'Random',
        'url': `${weaponImagesUrl}/Whip.png`,
        'combinationItem': {},
    },
    1: {
        'name': 'Whip',
        'url': `${weaponImagesUrl}/Whip.png`,
        'combinationItem': {},
    },
    2: {
        'name': 'Magic Wand',
        'url': `${weaponImagesUrl}/MagicWand.png`,
        'combinationItem': {},
    },
    3: {
        'name': 'Knife',
        'url': `${weaponImagesUrl}/Knife.png`,
        'combinationItem': {},
    },
    4: {
        'name': 'Axe',
        'url': `${weaponImagesUrl}/Axe.png`,
        'combinationItem': {},
    },
    5: {
        'name': 'Cross',
        'url': `${weaponImagesUrl}/Cross.png`,
        'combinationItem': {},
    },
    6: {
        'name': 'King Bible',
        'url': `${weaponImagesUrl}/KingBible.png`,
        'combinationItem': {},
    },
    7: {
        'name': 'Fire Wand',
        'url': `${weaponImagesUrl}/FireWand.png`,
        'combinationItem': {},
    },
    8: {
        'name': 'Garlic',
        'url': `${weaponImagesUrl}/Garlic.png`,
        'combinationItem': {},
    },
    9: {
        'name': 'Santa Water',
        'url': `${weaponImagesUrl}/SantaWater.png`,
        'combinationItem': {},
    },
    10: {
        'name': 'Lightning Ring',
        'url': `${weaponImagesUrl}/LightningRing.png`,
        'combinationItem': {},
    },
    11: {
        'name': 'Pentagram',
        'url': `${weaponImagesUrl}/Pentagram.png`,
        'combinationItem': {},
    },
    12: {
        'name': 'Song Of Mana',
        'url': `${weaponImagesUrl}/SongOfMana.png`,
        'combinationItem': {},
    },
    13: {
        'name': 'Phiera Der Tuphello',
        'url': `${weaponImagesUrl}/PhieraDerTuphello.png`,
        'combinationItem': {},
    },
    14: {
        'name': 'EightTheSparrow',
        'url': `${weaponImagesUrl}/EightTheSparrow.png`,
        'combinationItem': {},
    },
    15: {
        'name': 'Peachone',
        'url': `${weaponImagesUrl}/Peachone.png`,
        'combinationItem': {},
    },
    16: {
        'name': 'EbonyWings',
        'url': `${weaponImagesUrl}/EbonyWings.png`,
        'combinationItem': {},
    },
    17: {
        'name': 'Runetracer',
        'url': `${weaponImagesUrl}/Runetracer.png`,
        'combinationItem': {},
    },
    18: {
        'name': 'Clock Lancet',
        'url': `${weaponImagesUrl}/ClockLancet.png`,
        'combinationItem': {},
    },
    19: {
        'name': 'Laurel',
        'url': `${weaponImagesUrl}/Laurel.png`,
        'combinationItem': {},
    },
    20: {
        'name': 'Bone',
        'url': `${weaponImagesUrl}/Bone.png`,
        'combinationItem': {},
    },
    21: {
        'name': 'Cherry Bomb',
        'url': `${weaponImagesUrl}/CherryBomb.png`,
        'combinationItem': {},
    },
};

export const weapons = Object.values(weaponsDictionary);

const evolutionsDictionary = {
    1: {
        'name': 'Bloody Tear',
        'url': `${weaponImagesUrl}/BloodyTear.png`,
        'weapon': 1,
        'accessory': 0,
    },
    2: {
        'name': 'Holy Wand',
        'url': `${weaponImagesUrl}/HolyWand.png`,
        'weapon': 2,
        'accessory': 0,
    },
    3: {
        'name': 'Thousand Edge',
        'url': `${weaponImagesUrl}/ThousandEdge.png`,
        'weapon': 3,
        'accessory': 0,
    },
    4: {
        'name': 'Death Spiral',
        'url': `${weaponImagesUrl}/DeathSpiral.png`,
        'weapon': 4,
        'accessory': 0,
    },
    5: {
        'name': 'Heaven Sword',
        'url': `${weaponImagesUrl}/HeavenSword.png`,
        'weapon': 5,
        'accessory': 0,
    },
    6: {
        'name': 'Unholy Vespers',
        'url': `${weaponImagesUrl}/UnholyVespers.png`,
        'weapon': 6,
        'accessory': 0,
    },
    7: {
        'name': 'Hellfire',
        'url': `${weaponImagesUrl}/Hellfire.png`,
        'weapon': 7,
        'accessory': 0,
    },
    8: {
        'name': 'Soul Eater',
        'url': `${weaponImagesUrl}/SoulEater.png`,
        'weapon': 8,
        'accessory': 0,
    },
    9: {
        'name': 'La Borra',
        'url': `${weaponImagesUrl}/LaBorra.png`,
        'weapon': 9,
        'accessory': 0,
    },
    10: {
        'name': 'ThunderLoop',
        'url': `${weaponImagesUrl}/ThunderLoop.png`,
        'weapon': 10,
        'accessory': 0,
    },
    11: {
        'name': 'Gorgeous Moon',
        'url': `${weaponImagesUrl}/GorgeousMoon.png`,
        'weapon': 11,
        'accessory': 0,
    },
    12: {
        'name': 'Mannajja',
        'url': `${weaponImagesUrl}/Mannajja.png`,
        'weapon': 12,
        'accessory': 0,
    },
};

export const evolutions = Object.values(evolutionsDictionary);

const unionsDictionary = {
    1: {
        'name': 'Phieraggi',
        'url': `${weaponImagesUrl}/Phieraggi.png`,
        'weapons': [13, 14],
        'accessory': 0,
    },
    2: {
        'name': 'Vandalier',
        'url': `${weaponImagesUrl}/Vandalier.png`,
        'weapons': [15, 16],
        'accessory': 0,
    },
};

export const unions = Object.values(unionsDictionary);

const accessoriesDictionary = {
    0: {
        'name': 'Random',
        'url': `${accessoryImagesUrl}/Spinach.png`,
    },
    1: {
        'name': 'Spinach',
        'url': `${accessoryImagesUrl}/Spinach.png`,
    },
    2: {
        'name': 'Armor',
        'url': `${accessoryImagesUrl}/Armor.png`,
    },
    3: {
        'name': 'Hollow Heart',
        'url': `${accessoryImagesUrl}/HollowHeart.png`,
    },
    4: {
        'name': 'Pummarola',
        'url': `${accessoryImagesUrl}/Pummarola.png`,
    },
    5: {
        'name': 'Empty Tome',
        'url': `${accessoryImagesUrl}/EmptyTome.png`,
    },
    6: {
        'name': 'Candelabrador',
        'url': `${accessoryImagesUrl}/Candelabrador.png`,
    },
    7: {
        'name': 'Bracer',
        'url': `${accessoryImagesUrl}/Bracer.png`,
    },
    8: {
        'name': 'Spellbinder',
        'url': `${accessoryImagesUrl}/Spellbinder.png`,
    },
    9: {
        'name': 'Duplicator',
        'url': `${accessoryImagesUrl}/Duplicator.png`,
    },
    10: {
        'name': 'Wings',
        'url': `${accessoryImagesUrl}/Wings.png`,
    },
    11: {
        'name': 'Attractorb',
        'url': `${accessoryImagesUrl}/Attractorb.png`,
    },
    12: {
        'name': 'Clover',
        'url': `${accessoryImagesUrl}/Clover.png`,
    },
    13: {
        'name': 'Crown',
        'url': `${accessoryImagesUrl}/Crown.png`,
    },
    14: {
        'name': 'Stone Mask',
        'url': `${accessoryImagesUrl}/StoneMask.png`,
    },
    15: {
        'name': 'Tiragisú',
        'url': `${accessoryImagesUrl}/Tiragisu.png`,
    },
    16: {
        'name': 'Skull O\'Maniac',
        'url': `${accessoryImagesUrl}/SkullOManiac.png`,
    },
};

export const accessories = Object.values(accessoriesDictionary);