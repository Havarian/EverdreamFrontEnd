import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import authorService from "../../../services/content/AuthorService";

export const saveAuthor = createAsyncThunk("content/saveAuthor",
    async ({author}) => {
    try {
        const json = JSON.stringify(author)
        return await authorService.saveAuthor(json)
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
        SetCurrentAuthor: (state, action) => {
            state.currentAuthor = action.payload
        },
        SetName: (state, action) => {
            state.currentAuthor.name = action.payload
        },
        SetSurname: (state, action) => {
            state.currentAuthor.surname = action.payload
        },
        SetEmail: (state, action) => {
            state.currentAuthor.email = action.payload
        },
        SetDescription: (state, action) => {
            state.currentAuthor.description = action.payload
        },
        SetProfilePictureName: (state, action) => {
            state.currentAuthor.profilePictureName = action.payload
        },
        SetHomepageUrl: (state, action) => {
            state.currentAuthor.homePageUrl = action.payload
        },
        ResetCurrentAuthor: (state) => {
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

export const {SetCurrentAuthor, SetName, SetSurname, SetEmail, SetDescription, SetProfilePictureName,
    SetHomepageUrl, ResetCurrentAuthor} = AuthorSlice.actions
export default AuthorSlice.reducer