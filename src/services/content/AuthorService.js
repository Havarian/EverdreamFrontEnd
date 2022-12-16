import axios from "axios";
import config from "../../ConfigData.json"

const saveAuthor = async (author) => {
    console.log("service", author)
    return await axios.post(config.API_URL + "/api/content/author/saveAuthor", author)
        .then(res => {return res})
}

const deleteAuthor = async (authorId) => {
    return await axios.delete(config.API_URL + `/api/content/author/${authorId}`, {})
}

const fetchAuthors = async () => {
    return await axios.get(config.API_URL + "/api/content/author/fetchAll", {})
        .then(res => {return res})
}

const AuthorService = {
    saveAuthor,
    fetchAuthors,
    deleteAuthor
}

export default AuthorService