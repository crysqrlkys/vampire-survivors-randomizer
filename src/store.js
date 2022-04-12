import { configureStore } from '@reduxjs/toolkit'
import app from './reducers';
import { loadState, saveState } from './utils/sessionStorage';

const preloadedState = loadState();

const store = configureStore({
    reducer: {
        app
    },
    preloadedState,
});

store.subscribe(()=>{
    saveState(store.getState());
})

console.log(store.getState());

export default store;