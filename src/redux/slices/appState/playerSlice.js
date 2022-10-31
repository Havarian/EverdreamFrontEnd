import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initalState = {
    isVisible: false,
    currentPage: {},
    nextPage: {}
}

const playerSlice = createSlice({
    name: "playerSlice",
    initialState: initalState,
    reducers: {
        setIsVisible: (state, action) => {
            state.isVisible = action.payload
        }
    }
})

export const {setIsVisible} = playerSlice.actions
export default playerSlice.reducer