import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    displayNavbar: true,
    showMainPage: false,
    showCreatorPanel: false,
    showAdminPanel: false,
    showSettings: false
}

const NavbarSlice = createSlice({
    name: "navbar",
    initialState: initialState,
    reducers: {
        DisplayNavbar: (state,action) => {
          state.displayNavbar = action.payload},
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

export const { DisplayNavbar, ShowAdminPanel, ShowCreatorPanel, ShowMainPage, ShowSettings} = NavbarSlice.actions
export default NavbarSlice.reducer