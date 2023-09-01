import { configureStore } from "@reduxjs/toolkit"
import Favorites from "./features/Favorites"
import indexReducer from "./features/indexSlice"
import randomReducer from "./features/randomSlice"

export const store = configureStore({
    reducer: {
        random: randomReducer,
        numbers: indexReducer,
        favorite: Favorites,
    }
})