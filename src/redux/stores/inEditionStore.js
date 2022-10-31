import {combineReducers} from "redux";
import BookEditionSlice from "../slices/content/BookEditionSlice";
import PageEditionSlice from "../slices/content/PageEditionSlice";

const InEditionStore = combineReducers({
    book: BookEditionSlice,
    page: PageEditionSlice
})

export default InEditionStore