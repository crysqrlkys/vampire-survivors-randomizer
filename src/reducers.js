import { createSlice } from '@reduxjs/toolkit'
import { accessories, characters, defaultItem, evolutions, unions, weapons } from './data/constants'

export const appSlice = createSlice({
  name: 'App',
  initialState: {
    currentCharacter: defaultItem,
    currentWeapons: Object.fromEntries([...Array(6)].map((_, i) => [`w-${i}`, defaultItem])),
    currentAccessories: Object.fromEntries([...Array(6)].map((_, i) => [`a-${i}`, defaultItem])),
    characterPool: characters,
    weaponPool: [...weapons, ...evolutions, ...unions],
    accessoryPool: accessories,
    //might be unneccessary
    settings: { 
      'hideSecrets': true,
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
      //
    },
    setCombinationsOnly: (state) => {

    },
    setAllWeapons: (state) => {

    },
    setHideSecrets: (state) => {
      //
    },
    setAllowSecrets: (state) => {
      //
    },
  }
})

export const { setCharacter, setCurrentWeapons, setCurrentAccessories } = appSlice.actions

export default appSlice.reducer