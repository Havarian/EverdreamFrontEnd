import config from "../../ConfigData.json"
import axios from "axios";

const saveBook = async (book) => {
    return await axios.post(config.API_URL_CONTENT_SAVE_BOOK, book, {})
        .then(res => {return res})
}

const fetchBooksInCreation = async () => {
    return await axios.get(config.API_URL_CONTENT_BOOKS_IN_CREATION, {})
        .then(res => {return res})
}

const fetchPublishedBooks = async () => {
    return await axios.get(config.API_URL_CONTENT_PUBLISHED_BOOKS, {})
        .then(res => {return res})
}

const BookService = {
    saveBook,
    fetchBooksInCreation,
    fetchPublishedBooks
}

export default BookService;