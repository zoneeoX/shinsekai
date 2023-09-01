import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    name: 'indexs',
    number: 0
}

export const indexSlice = createSlice({
    name: 'indexs',
    initialState,
    reducers: {
        renderIndex: (state, action) => {
            state.number = action.payload
        }

    }

})

export const { renderIndex } = indexSlice.actions;
export default indexSlice.reducer;