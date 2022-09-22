import {combineReducers} from "redux";
import navbarSlice from "../slices/appState/navbarSlice";
import creatorSlice from "../slices/appState/creatorSlice";

const appStateStore = combineReducers({
    navbar: navbarSlice,
    creator: creatorSlice
})

export default appStateStore