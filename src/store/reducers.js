import {combineReducers, createSlice} from '@reduxjs/toolkit';

export const storeForSite = createSlice({
    name: 'game',
    initialState: {},
    reducers: {

    }
})

const rootReducers = combineReducers({
    toolkit: storeForSite.reducer
})

const GameStore = combineReducers({
    rootReducers
})

export default GameStore;