import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import BookService from "../../../services/content/BookService";

export const fetchPublishedBooks = createAsyncThunk("content/published",
    async (arg , ThunkApi) => {
        try {
            return await BookService.fetchPublishedBooks()
                .then(res => {return res})
        } catch (e) {
            console.log(e)
        }
    })

const initialState = {
    publishedDownloaded: false,
}

const BooksPublishedSlice = createSlice({
    name: "published",
    initialState: initialState,
    reducers: {
        setPublishedDownloaded: (state, action) => {
            state.publishedDownloaded = action.payload
        }
    },
    extraReducers: {
        [fetchPublishedBooks.fulfilled]: (state, action) => {state.published = action.payload},
        [fetchPublishedBooks.rejected]: state => {state.published = initialState}
    }
})
export const {setPublishedDownloaded} = BooksPublishedSlice.actions
export default BooksPublishedSlice.reducer;