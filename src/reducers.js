import { createSlice } from '@reduxjs/toolkit'
import { accessories, characters, secretCharacters, defaultItem, evolutions, unions, weapons } from './data/constants'

const createIdDictionary = (prefix, size) => {
  return Object.fromEntries([...Array(size)].map((_, i) => [`${prefix}-${i}`, defaultItem]));
};

export const appSlice = createSlice({
  name: 'App',
  initialState: {
    currentCharacter: defaultItem,
    currentWeapons: createIdDictionary('w', 6),
    currentAccessories: createIdDictionary('a', 6),
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
    },
    setCurrentWeapons: (state, action) => {
      const {id, value} = action.payload;
      console.log(action);
      state.currentWeapons = {
          ...state.currentWeapons,
          [id]: value
      }
    },
    setCurrentAccessories: (state, action) => {
      const {id, value} = action.payload;
      state.currentAccessories = {
          ...state.currentAccessories,
          [id]: value
      }
    },
    clearBuildCard: (state) => {
      state.currentCharacter = defaultItem;
      state.currentWeapons = createIdDictionary('w', 6);
      state.currentAccessories = createIdDictionary('a', 6);
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
      state.characterPool = [...characters];
    },
    setAllowSecrets: (state) => {
      state.settings.secrets = true;
      state.characterPool = [...characters, ...secretCharacters];
    },
  }
})

export const { 
  setCharacter,
  setCurrentWeapons,
  setCurrentAccessories,
  clearBuildCard,
  setCombinationsOnly,
  setAllWeapons,
  setHideSecrets,
  setAllowSecrets
 } = appSlice.actions

export default appSlice.reducer