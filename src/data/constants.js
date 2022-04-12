export const characterImagesUrl = `${process.env.PUBLIC_URL}/characters`;
export const weaponImagesUrl = `${process.env.PUBLIC_URL}/weapons`;
export const accessoryImagesUrl = `${process.env.PUBLIC_URL}/accessories`;
const defaultImageUrl = `${process.env.PUBLIC_URL}/Default.png`;

const accessoriesDictionary = {
    0: {
        'id': 0,
        'name': 'Default',
        'url': defaultImageUrl
    },
    1: {
        'id': 1,
        'name': 'Spinach',
        'url': `${accessoryImagesUrl}/Spinach.png`,
    },
    2: {
        'id': 2,
        'name': 'Armor',
        'url': `${accessoryImagesUrl}/Armor.png`,
    },
    3: {
        'id': 3,
        'name': 'Hollow Heart',
        'url': `${accessoryImagesUrl}/HollowHeart.png`,
    },
    4: {
        'id': 4,
        'name': 'Pummarola',
        'url': `${accessoryImagesUrl}/Pummarola.png`,
    },
    5: {
        'id': 5,
        'name': 'Empty Tome',
        'url': `${accessoryImagesUrl}/EmptyTome.png`,
    },
    6: {
        'id': 6,
        'name': 'Candelabrador',
        'url': `${accessoryImagesUrl}/Candelabrador.png`,
    },
    7: {
        'id': 7,
        'name': 'Bracer',
        'url': `${accessoryImagesUrl}/Bracer.png`,
    },
    8: {
        'id': 8,
        'name': 'Spellbinder',
        'url': `${accessoryImagesUrl}/Spellbinder.png`,
    },
    9: {
        'id': 9,
        'name': 'Duplicator',
        'url': `${accessoryImagesUrl}/Duplicator.png`,
    },
    10: {
        'id': 10,
        'name': 'Wings',
        'url': `${accessoryImagesUrl}/Wings.png`,
    },
    11: {
        'id': 11,
        'name': 'Attractorb',
        'url': `${accessoryImagesUrl}/Attractorb.png`,
    },
    12: {
        'id': 12,
        'name': 'Clover',
        'url': `${accessoryImagesUrl}/Clover.png`,
    },
    13: {
        'id': 13,
        'name': 'Crown',
        'url': `${accessoryImagesUrl}/Crown.png`,
    },
    14: {
        'id': 14,
        'name': 'Stone Mask',
        'url': `${accessoryImagesUrl}/StoneMask.png`,
    },
    15: {
        'id': 15,
        'name': 'Tiragisú',
        'url': `${accessoryImagesUrl}/Tiragisu.png`,
    },
    16: {
        'id': 16,
        'name': 'Skull O\'Maniac',
        'url': `${accessoryImagesUrl}/SkullOManiac.png`,
    },
};

export const accessories = Object.values(accessoriesDictionary);

const weaponsDictionary = {
    0: {
        'id': 0,
        'name': 'Default',
        'url': defaultImageUrl,
        'accessory': accessoriesDictionary[0]
    },
    1: {
        'id': 1,
        'name': 'Whip',
        'url': `${weaponImagesUrl}/Whip.png`,
        'accessory': accessoriesDictionary[3],
        'combinationItem': {},
    },
    2: {
        'id': 2,
        'name': 'Magic Wand',
        'url': `${weaponImagesUrl}/MagicWand.png`,
        'accessory': accessoriesDictionary[5],
        'combinationItem': {},
    },
    3: {
        'id': 3,
        'name': 'Knife',
        'url': `${weaponImagesUrl}/Knife.png`,
        'accessory': accessoriesDictionary[7],
        'combinationItem': {},
    },
    4: {
        'id': 4,
        'name': 'Axe',
        'url': `${weaponImagesUrl}/Axe.png`,
        'accessory': accessoriesDictionary[6],
        'combinationItem': {},
    },
    5: {
        'id': 5,
        'name': 'Cross',
        'url': `${weaponImagesUrl}/Cross.png`,
        'accessory': accessoriesDictionary[12],
        'combinationItem': {},
    },
    6: {
        'id': 6,
        'name': 'King Bible',
        'url': `${weaponImagesUrl}/KingBible.png`,
        'accessory': accessoriesDictionary[8],
        'combinationItem': {},
    },
    7: {
        'id': 7,
        'name': 'Fire Wand',
        'url': `${weaponImagesUrl}/FireWand.png`,
        'accessory': accessoriesDictionary[1],
        'combinationItem': {},
    },
    8: {
        'id': 8,
        'name': 'Garlic',
        'url': `${weaponImagesUrl}/Garlic.png`,
        'combinationItem': {},
    },
    9: {
        'id': 9,
        'name': 'Santa Water',
        'url': `${weaponImagesUrl}/SantaWater.png`,
        'combinationItem': {},
    },
    10: {
        'id': 10,
        'name': 'Lightning Ring',
        'url': `${weaponImagesUrl}/LightningRing.png`,
        'combinationItem': {},
    },
    11: {
        'id': 11,
        'name': 'Pentagram',
        'url': `${weaponImagesUrl}/Pentagram.png`,
        'combinationItem': {},
    },
    12: {
        'id': 12,
        'name': 'Song Of Mana',
        'url': `${weaponImagesUrl}/SongOfMana.png`,
        'combinationItem': {},
    },
    13: {
        'id': 13,
        'name': 'Phiera Der Tuphello',
        'url': `${weaponImagesUrl}/PhieraDerTuphello.png`,
        'combinationItem': {},
    },
    14: {
        'id': 14,
        'name': 'EightTheSparrow',
        'url': `${weaponImagesUrl}/EightTheSparrow.png`,
        'combinationItem': {},
    },
    15: {
        'id': 15,
        'name': 'Peachone',
        'url': `${weaponImagesUrl}/Peachone.png`,
        'combinationItem': {},
    },
    16: {
        'id': 16,
        'name': 'EbonyWings',
        'url': `${weaponImagesUrl}/EbonyWings.png`,
        'combinationItem': {},
    },
    17: {
        'id': 17,
        'name': 'Runetracer',
        'url': `${weaponImagesUrl}/Runetracer.png`,
        'combinationItem': {},
    },
    18: {
        'id': 18,
        'name': 'Clock Lancet',
        'url': `${weaponImagesUrl}/ClockLancet.png`,
        'combinationItem': {},
    },
    19: {
        'id': 19,
        'name': 'Laurel',
        'url': `${weaponImagesUrl}/Laurel.png`,
        'combinationItem': {},
    },
    20: {
        'id': 20,
        'name': 'Bone',
        'url': `${weaponImagesUrl}/Bone.png`,
        'combinationItem': {},
    },
    21: {
        'id': 21,
        'name': 'Cherry Bomb',
        'url': `${weaponImagesUrl}/CherryBomb.png`,
        'combinationItem': {},
    },
};

export const weapons = Object.values(weaponsDictionary);

const evolutionsDictionary = {
    22: {
        'id': 0,
        'name': 'Bloody Tear',
        'url': `${weaponImagesUrl}/BloodyTear.png`,
        'weapon': 1,
        'accessory': accessoriesDictionary[3]
    },
    23: {
        'id': 1,
        'name': 'Holy Wand',
        'url': `${weaponImagesUrl}/HolyWand.png`,
        'weapon': 2,
        'accessory': accessoriesDictionary[5]
    },
    24: {
        'id': 2,
        'name': 'Thousand Edge',
        'url': `${weaponImagesUrl}/ThousandEdge.png`,
        'weapon': 3,
        'accessory': accessoriesDictionary[7]
    },
    25: {
        'id': 3,
        'name': 'Death Spiral',
        'url': `${weaponImagesUrl}/DeathSpiral.png`,
        'weapon': 4,
        'accessory': accessoriesDictionary[6]
    },
    26: {
        'id': 4,
        'name': 'Heaven Sword',
        'url': `${weaponImagesUrl}/HeavenSword.png`,
        'weapon': 5,
        'accessory': accessoriesDictionary[12]
    },
    27: {
        'id': 5,
        'name': 'Unholy Vespers',
        'url': `${weaponImagesUrl}/UnholyVespers.png`,
        'weapon': 6,
        'accessory': accessoriesDictionary[8]
    },
    28: {
        'id': 6,
        'name': 'Hellfire',
        'url': `${weaponImagesUrl}/Hellfire.png`,
        'weapon': 7,
        'accessory': accessoriesDictionary[1]
    },
    29: {
        'id': 7,
        'name': 'Soul Eater',
        'url': `${weaponImagesUrl}/SoulEater.png`,
        'weapon': 8,
        'accessory': accessoriesDictionary[4]
    },
    30: {
        'id': 8,
        'name': 'La Borra',
        'url': `${weaponImagesUrl}/LaBorra.png`,
        'weapon': 9,
        'accessory': accessoriesDictionary[11]
    },
    31: {
        'id': 9,
        'name': 'Thunder Loop',
        'url': `${weaponImagesUrl}/ThunderLoop.png`,
        'weapon': 10,
        'accessory': accessoriesDictionary[9]
    },
    32: {
        'id': 10,
        'name': 'Gorgeous Moon',
        'url': `${weaponImagesUrl}/GorgeousMoon.png`,
        'weapon': 11,
        'accessory': accessoriesDictionary[13]
    },
    33: {
        'id': 11,
        'name': 'Mannajja',
        'url': `${weaponImagesUrl}/Mannajja.png`,
        'weapon': 12,
        'accessory': accessoriesDictionary[16]
    },
};

export const evolutions = Object.values(evolutionsDictionary);

const unionsDictionary = {
    34: {
        'id': 12,
        'name': 'Phieraggi',
        'url': `${weaponImagesUrl}/Phieraggi.png`,
        'weapons': [13, 14],
        'accessory': accessoriesDictionary[15]
    },
    35: {
        'id': 13,
        'name': 'Vandalier',
        'url': `${weaponImagesUrl}/Vandalier.png`,
        'weapons': [15, 16],
        'accessory': ''
    },
};

export const unions = Object.values(unionsDictionary);

export const characters = {
    'c-0': {
        'id': 0,
        'name': 'Default',
        'url': defaultImageUrl,
        'weapon': [weaponsDictionary[0]]
    },
    'c-1': {
        'id': 1,
        'name': 'Antonio',
        'url': `${characterImagesUrl}/Antonio.png`,
        'weapon': [weaponsDictionary[1]]
    }, 
    'c-2': {
        'id': 2,
        'name': 'Imelda',
        'url': `${characterImagesUrl}/Imelda.png`,
        'weapon': [weaponsDictionary[2]]
    },
    'c-3': {
        'id': 3,
        'name': 'Pasqualina',
        'url': `${characterImagesUrl}/Pasqualina.png`,
        'weapon': [weaponsDictionary[17]]
    },
    'c-4': {
        'id': 4,
        'name': 'Gennaro',
        'url': `${characterImagesUrl}/Gennaro.png`,
        'weapon': [weaponsDictionary[3]]
    },
    'c-5': {
        'id': 5,
        'name': 'Arca',
        'url': `${characterImagesUrl}/Arca.png`,
        'weapon': [weaponsDictionary[7]]
    },
    'c-6': {
        'id': 6,
        'name': 'Porta',
        'url': `${characterImagesUrl}/Porta.png`,
        'weapon': [weaponsDictionary[10]]
    },
    'c-7': {
        'id': 7,
        'name': 'Lama',
        'url': `${characterImagesUrl}/Lama.png`,
        'weapon': [weaponsDictionary[4]]
    },
    'c-8': {
        'id': 8,
        'name': 'Poe',
        'url': `${characterImagesUrl}/Poe.png`,
        'weapon': [weaponsDictionary[8]]
    },
    'c-9': {
        'id': 9,
        'name': 'Clerici',
        'url': `${characterImagesUrl}/Clerici.png`,
        'weapon': [weaponsDictionary[9]]
    },
    'c-10': {
        'id': 10,
        'name': 'Dommario',
        'url': `${characterImagesUrl}/Dommario.png`,
        'weapon': [weaponsDictionary[6]]
    },
    'c-11': {
        'id': 11,
        'name': 'Krochi',
        'url': `${characterImagesUrl}/Krochi.png`,
        'weapon': [weaponsDictionary[5]]
    },
    'c-12': {
        'id': 12,
        'name': 'Christine',
        'url': `${characterImagesUrl}/Christine.png`,
        'weapon': [weaponsDictionary[11]]
    },
    'c-13': {
        'id': 13,
        'name': 'Pugnala',
        'url': `${characterImagesUrl}/Pugnala.png`,
        'weapon': [weaponsDictionary[13], weaponsDictionary[14]]
    },
    'c-14': {
        'id': 14,
        'name': 'Poppea',
        'url': `${characterImagesUrl}/Poppea.png`,
        'weapon': [weaponsDictionary[12]]
    },
    'c-15': {
        'id': 15,
        'name': 'Mortaccio',
        'url': `${characterImagesUrl}/Mortaccio.png`,
        'weapon': [weaponsDictionary[20]]
    },
    'c-16': {
        'id': 16,
        'name': 'Cavallo',
        'url': `${characterImagesUrl}/Cavallo.png`,
        'weapon': [weaponsDictionary[21]]
    },
};

export const secretCharacters = {
    'c-17': {
        'id': 17,
        'name': 'Exdash',
        'url': `${characterImagesUrl}/Exdash.png`,
        'weapon': [weaponsDictionary[16]]
    },
    'c-18': {
        'id': 18,
        'name': 'Red Death',
        'url': `${characterImagesUrl}/RedDeath.png`,
        'weapon': [evolutionsDictionary[4]]
    },
    'c-19': {
        'id': 19,
        'name': 'missingN',
        'url': `${characterImagesUrl}/missingN.png`,
        'weapon': [evolutionsDictionary[4]]
    },
};
