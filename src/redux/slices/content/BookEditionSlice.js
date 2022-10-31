import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import bookService from "../../../services/content/BookService";


export const saveBook = createAsyncThunk("content/saveBook",
    async (args, {dispatch, getState}) => {
        try {
            const state = getState()
            return await bookService.saveBook(state.content.inEdition.book)
                .then(res => {
                    dispatch(setBookInEdition(res.data))
                })
        } catch (error) {
            console.log(error)
        }
    })

const initialState = {
    id: "",
    title: "",
    description: "",
    coverImageName: null,
    inCreation: true,
    creatorId: null,
    authors: [],
    pages: []
}

const BookEditionSlice = createSlice({
    name: "book",
    initialState: initialState,
    reducers: {
        setBookInEdition: (state, action) => {
            return action.payload
        },
        setTitle: (state, action) => {
            state.title = action.payload
        },
        setDescription: (state, action) => {
            state.description = action.payload
        },
        setCoverImageName: (state, action) => {
            state.coverImageName = action.payload
        },
        addPage: (state, action) => {
            if (action.payload.id === null) {
                state.pages.push(action.payload)
            } else {
                return {
                    ...state,
                    pages: state.pages.map(page => page.id === action.payload.id ? action.payload : page)
                }
            }
        },
        addAuthors: (state, action) => {
            state.authors.push(action.payload)
        },
        removeAuthors: (state, action) => {
            state.authors = state.book.authors.filter(author => author.id !== action.payload)
        },
        setInCreation: (state, action) => {
            state.inCreation = action.payload
        }
    },

    extraReducers: {
        [saveBook.fulfilled]: (state, action) => state.book = action.payload,
        [saveBook.rejected]: state => state.book = initialState,
    }
})



export const {addAuthors, removeAuthors, setCoverImageName, setDescription, setNewBook, addPageToBook,
    setTitle, setBookInEdition, setInCreation, decrementPageNo, incrementPagesNo} = BookEditionSlice.actions
export default BookEditionSlice.reducer