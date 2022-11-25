import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isCreatorOpen: false,
    isAuthorManagerOpen: false,
    authorCard: {isOpen: false},
    newAuthorCard: {isOpen: false},
    coverEditor: {isOpen: true},
    pageEditor: {isOpen: false}
}

const creatorSlice = createSlice({
    name: "creator",
    initialState: initialState,
    reducers: {
        setIsCreatorOpen: (state, action) => {
            state.isCreatorOpen = action.payload
        },
        setAuthorManagerOpen: (state, action) => {
            state.isAuthorManagerOpen = action.payload
        },
        setAuthorCardOpen: (state, action) => {
          state.authorCard.isOpen = action.payload
        },
        setNewAuthorCardOpen: (state, action) => {
            state.newAuthorCard.isOpen = action.payload
        },
        setCoverEditorOpen: (state, action) => {
            state.coverEditor.isOpen = action.payload
        },
        setPageEditorOpen: (state, action) => {
            state.pageEditor.isOpen = action.payload
        }
    }
})

export const {setIsCreatorOpen, setAuthorManagerOpen, setCoverEditorOpen, setPageEditorOpen,
    setAuthorCardOpen, setNewAuthorCardOpen} = creatorSlice.actions
export default creatorSlice.reducer