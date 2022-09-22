import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import bookService from "../../../services/content/BookService";

export const saveBook = createAsyncThunk("content/saveBook",
    async ({book}) => {

        try {
            return await bookService.saveBook(book)
                .then(res => res.data)
        } catch (error) {
            console.log(error)
        }
    })

const initialState = {
    id: "",
    title: "",
    description: "",
    coverImageName: "",
    inCreation: true,
    creatorId: null,
    authors: [],
    pages: [],
    pageTree: []
}

const BookEditionSlice = createSlice({
    name: "inEdition",
    initialState: initialState,
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload
        },
        setDescription: (state, action) => {
            state.description = action.payload
        },
        setCoverImageName: (state, action) => {
            state.coverImageName = action.payload
        },
        addAuthors: (state, action) => {
            state.authors.push(action.payload)
        },
        removeAuthors: (state, action) => {
            state.authors = state.authors.filter(author => author.id !== action.payload)
        },
        setPages: (state, action) => {
            state.pages = action.payload
        },
        setPageTree: (state, action) => {
            state.pageTree = action.payload
        },
        setInCreation: (state, action) => {
            state.inEdition.inCreation = action.payload
        },
    },

    extraReducers: {
        [saveBook.fulfilled]: (state, action) => state.inEdition = action.payload,
        [saveBook.rejected]: state => state.inEdition = initialState,
    }
})



export const {addAuthors, removeAuthors, setCoverImageName, setDescription, setInCreation, setPages, setPageTree, setTitle} = BookEditionSlice.actions
export default BookEditionSlice.reducer