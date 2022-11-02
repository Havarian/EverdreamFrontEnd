import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import bookService from "../../../services/content/BookService";

export const fetchBooksInCreation = createAsyncThunk("content/booksInCreation",
    async () => {
        try {
            return await bookService.fetchBooksInCreation()
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