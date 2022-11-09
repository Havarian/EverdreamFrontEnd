import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import ContentService from "../../../services/content/ContentService";

export const fetchPublishedBooks = createAsyncThunk("content/published",
    async (arg , ThunkApi) => {
        try {
            return await ContentService.fetchPublishedBooks()
                .then(res => {return res.data})
        } catch (e) {
            console.log(e)
        }
    })

const initialState = {
    bookList: [],
    status: "",
}

const BooksPublishedSlice = createSlice({
    name: "published",
    initialState: initialState,
    extraReducers: {
        [fetchPublishedBooks.fulfilled]: (state, action) => {
            state.status = "fulfilled"
            state.bookList = action.payload},
        [fetchPublishedBooks.pending]: (state) => {
            state.status = "loading"
        },
        [fetchPublishedBooks.rejected]: state => {
            state.status = "failed"
        }
    }
})

export default BooksPublishedSlice.reducer;