import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    favoriteItem: localStorage.getItem('favoriteItem') ? JSON.parse(localStorage.getItem('favoriteItem')) : [{
        title: "",
        images: { jpg: { image_url: "" } },
        genres: "",
        score: "",
    }]
}





export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addToFavorites: (state, action) => {
            state.favoriteItem.push(action.payload)
            localStorage.setItem("favorit   eItem", JSON.stringify(state.favoriteItem))
        }
    }
})




export const { addToFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;