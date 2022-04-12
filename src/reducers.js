import { createSlice } from '@reduxjs/toolkit'
import { accessories, characters, secretCharacters, evolutions, unions, weapons } from './data/constants'
import { createEmptyIdDictionary } from './utils/utils';

export const appSlice = createSlice({
  name: 'App',
  initialState: {
    currentCharacter: characters['c-0'],
    currentWeapons: createEmptyIdDictionary(weapons[0], 6, 'w'),
    currentAccessories: createEmptyIdDictionary(accessories[0], 6, 'a'),
    characterPool: characters,
    weaponPool: [...weapons, ...evolutions, ...unions],
    accessoryPool: accessories,
    settings: { 
      'secrets': false,
      'combinationsOnly': false,
    },
  },
  reducers: {
    setCharacter: (state, action) => {
      state.currentCharacter = action.payload;
      state.currentCharacter.weapon.forEach((el, index) => {
        state.currentWeapons[`w-${index}`] = el;
      })
    },
    setCurrentWeapons: (state, action) => {
      const newWeapons = action.payload;
      state.currentWeapons = {
          ...state.currentWeapons,
          ...newWeapons
      }
    },
    setCurrentAccessories: (state, action) => {
      const newAccessories = action.payload;
      state.currentAccessories = {
          ...state.currentAccessories,
          ...newAccessories
      }
    },
    setWeapon: (state, action) => {
      const {id, value} = action.payload;
      state.currentWeapons = {
          ...state.currentWeapons,
          [id]: value
      }
    },
    setAccessory: (state, action) => {
      const {id, value} = action.payload;
      state.currentAccessories = {
          ...state.currentAccessories,
          [id]: value
      }
    },
    clearBuildCard: (state) => {
      state.currentCharacter = characters['c-0'];
      state.currentWeapons = createEmptyIdDictionary(weapons[0], 6, 'w');
      state.currentAccessories = createEmptyIdDictionary(accessories[0], 6, 'a');
    },
    setCombinationsOnly: (state) => {
      state.settings.combinationsOnly = true;
      state.weaponPool = [...evolutions, ...unions];
    },
    setAllWeapons: (state) => {
      state.settings.combinationsOnly = false;
      state.weaponPool = [...weapons, ...evolutions, ...unions];
    },
    setHideSecrets: (state) => {
      state.settings.secrets = false;
      state.characterPool = characters;
    },
    setAllowSecrets: (state) => {
      state.settings.secrets = true;
      state.characterPool = {...characters, ...secretCharacters};
    },
  }
})

export const { 
  setCharacter,
  setCurrentWeapons,
  setCurrentAccessories,
  setWeapon,
  setAccessory,
  clearBuildCard,
  setCombinationsOnly,
  setAllWeapons,
  setHideSecrets,
  setAllowSecrets
 } = appSlice.actions

export default appSlice.reducer