import {createSlice} from "@reduxjs/toolkit";

const CommonSlice = createSlice({
    name: "commons",
    initialState: {
        isExpandedCardVisible: false
    },
    reducers: {
        setIsExpandedCardVisible: (state, action) => {
            state.isExpandedCardVisible = action.payload
        }
    }
})

export const {setIsExpandedCardVisible} = CommonSlice.actions
export default CommonSlice.reducer