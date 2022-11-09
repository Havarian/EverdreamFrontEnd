import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import ContentService from "../../../services/content/ContentService";

export const fetchBooksInCreation = createAsyncThunk("content/booksInCreation",
    async () => {
        try {
            return await ContentService.fetchBooksInCreation()
                .then (res => res.data)
        } catch (error) {
            console.log(error)
        }
    })

const initialState = []

const BooksInCreationSlice = createSlice({
    name: "inCreation",
    initialState: initialState,
    extraReducers: {
        [fetchBooksInCreation.fulfilled]: (state, action) => {return action.payload},
        [fetchBooksInCreation.rejected]: state => {return initialState}
    }
})

export default BooksInCreationSlice.reducer