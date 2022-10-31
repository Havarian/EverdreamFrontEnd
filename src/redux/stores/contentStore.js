import {combineReducers} from "redux";
import BooksInCreationSlice from "../slices/content/BooksInCreationSlice";
import BooksPublishedSlice from "../slices/content/BooksPublishedSlice";
import AuthorSlice from "../slices/content/AuthorSlice";
import InEditionStore from "./inEditionStore";

const contentStore = combineReducers({
    inEdition: InEditionStore,
    inCreation: BooksInCreationSlice,
    published: BooksPublishedSlice,
    author: AuthorSlice
})

export default contentStore;