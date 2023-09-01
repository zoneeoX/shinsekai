import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'



export const getRandom = createAsyncThunk(
    "random/getRandom",
        async () => {
            return await axios.get("https://api.jikan.moe/v4/random/anime").then((res) => {
            return res.data.data
        })
    }
)

const initialState = {
    name: 'random',
    isLoading: false,
    isError: false,
    itemList: [{
        title: "",
        images: { jpg: { image_url: "" } },
        genres: "",
        score: "",
        
      
    }]
}
const randomSlice = createSlice({
    name: "random",
    initialState,
    extraReducers: {
        [getRandom.pending]: (state, action) => {
            state.isLoading = true
            state.isError = false
        },
        [getRandom.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isError = false
            state.itemList.push(action.payload)
        },
        [getRandom.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = true
        }
    }

})

export default randomSlice.reducer;
