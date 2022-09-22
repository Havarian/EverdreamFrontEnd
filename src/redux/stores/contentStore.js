import {combineReducers} from "redux";
import BookEditionSlice from "../slices/content/BookEditionSlice";
import BooksInCreationSlice from "../slices/content/BooksInCreationSlice";
import BooksPublishedSlice from "../slices/content/BooksPublishedSlice";
import AuthorSlice from "../slices/content/AuthorSlice";

const contentStore = combineReducers({
    inEdition: BookEditionSlice,
    inCreation: BooksInCreationSlice,
    published: BooksPublishedSlice,
    author: AuthorSlice
})

export default contentStore;