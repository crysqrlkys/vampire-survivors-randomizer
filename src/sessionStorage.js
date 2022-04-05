export const loadState = () => {
    try {
        const serializedState = sessionStorage.getItem('appState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err){
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        sessionStorage.setItem('appState', serializedState);
    } catch (err) {
        console.log('error while saving state');
    }
}