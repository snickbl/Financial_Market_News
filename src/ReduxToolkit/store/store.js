import { combineReducers, configureStore } from "@reduxjs/toolkit";
import InfoSlice from '../reducers/InfoSlice'

const rootReducer = combineReducers({
    InfoSlice
})

export const setupStore = () => {
    return configureStore({
            reducer: rootReducer
    })
}