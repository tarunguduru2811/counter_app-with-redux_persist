import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice"
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";


const persistConfig = {
    key:"root",
    storage
}

const rootReducer = combineReducers({
    counter:counterReducer
})

const persistedReducer = persistReducer(persistConfig,rootReducer)

const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck:false,
        })
})

export const persistor = persistStore(store)
export default store;