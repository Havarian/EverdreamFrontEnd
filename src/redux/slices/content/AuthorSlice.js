import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import authorService from "../../../services/content/AuthorService";

export const saveAuthor = createAsyncThunk("content/saveAuthor",
    async (args, {getState}) => {
    try {
        const state = getState()
        console.log(state.content.author.currentAuthor)
        return await authorService.saveAuthor(state.content.author.currentAuthor)
            .then(res => res.data)
    } catch (error) {
        console.log(error)
    }
    })

export const fetchAuthors = createAsyncThunk("content/fetchAuthors",
    async (args, ThunkApi) => {
    try {
        return await authorService.fetchAuthors()
            .then(res => {return res.data})
    } catch (error) {
        console.log(error)
    }
    })

const currentAuthorInitialState = {
    id: "",
    name: "",
    surname: "",
    email: "",
    description: "",
    profilePictureName: "",
    homePageUrl: "",
    creatorId: ""
}

const AuthorSlice = createSlice({
    name: "author",
    initialState: {
        authorsList: {list: [],
        status: null},
        currentAuthor: {
            id: "",
            name: "",
            surname: "",
            email: "",
            description: "",
            profilePictureName: "",
            homePageUrl: "",
            creatorId: ""}
    },
    reducers: {
        setCurrentAuthor: (state, action) => {
            state.currentAuthor = action.payload
        },
        setName: (state, action) => {
            state.currentAuthor.name = action.payload
        },
        setSurname: (state, action) => {
            state.currentAuthor.surname = action.payload
        },
        setEmail: (state, action) => {
            state.currentAuthor.email = action.payload
        },
        setDescription: (state, action) => {
            state.currentAuthor.description = action.payload
        },
        setProfilePictureName: (state, action) => {
            state.currentAuthor.profilePictureName = action.payload
        },
        setHomepageUrl: (state, action) => {
            state.currentAuthor.homePageUrl = action.payload
        },
        resetCurrentAuthor: (state) => {
            state.currentAuthor = currentAuthorInitialState
        }
    },
    extraReducers: {
        [saveAuthor.fulfilled]: (state, action) => {state.currentAuthor = action.payload},

        [fetchAuthors.pending]: (state) => {state.authorsList.status = "loading"},
        [fetchAuthors.fulfilled]: (state, action) => {state.authorsList.list = action.payload
                                                        state.authorsList.status = "fulfilled"},
        [fetchAuthors.rejected]: (state) => {state.authorsList.status = "failed"},
    }
})

export const {setCurrentAuthor, setName, setSurname, setEmail, setDescription, setProfilePictureName,
    setHomepageUrl, resetCurrentAuthor} = AuthorSlice.actions
export default AuthorSlice.reducer