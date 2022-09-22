import axios from "axios";
import config from "../../ConfigData.json"

const saveAuthor = async (author) => {
    return await axios.post(config.API_URL_CONTENT_SAVE_AUTHOR, author, {headers: {"Content-Type": "application/json"}})
        .then(res => {return res})
}

const fetchAuthors = async () => {
    return await axios.get(config.API_URL_CONTENT_FETCH_AUTHORS, {})
        .then(res => {return res})
}

const AuthorService = {
    saveAuthor,
    fetchAuthors
}

export default AuthorService