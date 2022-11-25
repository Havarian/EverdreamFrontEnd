import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import bookService from "../../../services/content/BookService";


export const saveBook = createAsyncThunk("content/saveBook",
    async (args, {getState}) => {
            const state = getState()
            return await bookService.saveBook(state.content.inEdition.book)
                .then(res => {return res.data})
                .catch(reason => console.error(reason))
    })

export const addAuthor = createAsyncThunk("content/addAuthor",
    async ([bookId, authorId, type], {dispatch}) => {
            return await bookService.addAuthorToBook(bookId, authorId, type)
                .then(res => {dispatch(addAuthors(res.data))})
                .catch(reason => console.error(reason))
    })

export const removeAuthor = createAsyncThunk("content/removeAuthors",
    async ({bookId, authorId, type}, {dispatch}) => {
            return await bookService.removeAuthorFromBook(bookId, authorId, type)
                .then(() => {dispatch(removeAuthors({id: authorId, type: type}))})
                .catch(reason => console.error(reason))
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
        setBookInEditionInitialState: (state) => {
            return initialState
        },
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
            state.authors = state.authors.filter(author =>  (author.id !== action.payload.authorId) &&
                                                            (author.type !== action.payload.type))
        },
        setInCreation: (state, action) => {
            state.inCreation = action.payload
        }
    },

    extraReducers: {
        [saveBook.fulfilled]: (state, action) => {return action.payload},
        [saveBook.rejected]: state => {return initialState},

        [addAuthor.fulfilled]: (state, action) => {},
        [removeAuthor.fulfilled]: (state, action) => {}
    }
})



export const {addAuthors, removeAuthors, setCoverImageName, setDescription, addPage, setBookInEditionInitialState,
    setTitle, setBookInEdition, setInCreation} = BookEditionSlice.actions
export default BookEditionSlice.reducer