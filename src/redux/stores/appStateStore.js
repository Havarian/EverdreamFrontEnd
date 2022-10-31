import {combineReducers} from "redux";
import navbarSlice from "../slices/appState/navbarSlice";
import creatorSlice from "../slices/appState/creatorSlice";
import playerSlice from "../slices/appState/playerSlice";
import CommonSlice from "../slices/appState/commonSlice";

const appStateStore = combineReducers({
    navbar: navbarSlice,
    creator: creatorSlice,
    player: playerSlice,
    commons: CommonSlice
})

export default appStateStore