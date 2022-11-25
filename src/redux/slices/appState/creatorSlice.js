import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isCreatorOpen: false,
    isAuthorManagerOpen: false,
    isPageManagerOpen: false
}

const creatorSlice = createSlice({
    name: "creator",
    initialState: initialState,
    reducers: {
        SetIsCreatorOpen: (state, action) => {
            state.isCreatorOpen = action.payload
        },
        SetAuthorManagerOpen: (state, action) => {
            state.isAuthorManagerOpen = action.payload
        },
        SetPageManagerOpen: (state, action) => {
            state.isPageManagerOpen = action.payload
        }
    }
})

export const {SetIsCreatorOpen, SetAuthorManagerOpen, SetPageManagerOpen} = creatorSlice.actions
export default creatorSlice.reducer