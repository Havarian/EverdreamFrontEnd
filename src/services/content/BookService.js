import config from "../../ConfigData.json"
import axios from "axios";

const saveBook = async (book) => {
    return await axios.post(config.API_URL + "/api/content/book/saveBook", book, {})
        .then(res => {return res})
}

const deleteBook = async (bookId) => {
    return await axios.delete(config.API_URL + `/api/content/book/${bookId}`, {})
        .then(res => {return res})
}

const addAuthorToBook = async (bookId, authorId, type) => {
    console.log([bookId, authorId, type])
    let formData = new FormData()
    formData.append("bookId", bookId)
    formData.append("authorId", authorId)
    formData.append("type", type)

    return await axios.post(config.API_URL + "/api/content/book/addAuthor", formData, {}).then(res => {return res})
}

const removeAuthorFromBook = async (bookId, authorId, type) => {
    return await axios.delete(config.API_URL + `/api/content/book/${bookId}/${authorId}/${type}`,{})
        .then(res => {return res})
}



const BookService = {
    saveBook,
    deleteBook,
    addAuthorToBook,
    removeAuthorFromBook
}

export default BookService;