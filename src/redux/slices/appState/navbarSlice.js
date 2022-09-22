import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    showMainPage: false,
    showCreatorPanel: false,
    showAdminPanel: false,
    showSettings: false
}

const NavbarSlice = createSlice({
    name: "navbar",
    initialState: initialState,
    reducers: {
        setNavbar: (state, action) => {
            state.navbar = action.payload},
        ShowMainPage: (state, action) => {
            state.showMainPage = action.payload},
        ShowCreatorPanel: (state,action) => {
            state.showCreatorPanel = action.payload},
        ShowAdminPanel: (state, action) => {
            state.showAdminPanel = action.payload},
        ShowSettings: (state, action) => {
            state.showSettings = action.payload}
    }
})

export const { ShowAdminPanel, ShowCreatorPanel, ShowMainPage, ShowSettings} = NavbarSlice.actions
export default NavbarSlice.reducer