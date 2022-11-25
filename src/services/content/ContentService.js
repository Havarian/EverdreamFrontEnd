import axios from "axios";
import config from "../../ConfigData.json";

const fetchBooksInCreation = async () => {
    return await axios.get(config.API_URL + "/api/content/inCreation", {})
        .then(res => {return res})
}

const fetchPublishedBooks = async () => {
    return await axios.get(config.API_URL + "/api/content/published", {})
        .then(res => {return res})
}

const fetchPendingBooks = async () => {
    return await axios.get(config.API_URL + "/api/content/pending", {})
        .then(res => {return res})
}

const ContentService = {
    fetchPublishedBooks,
    fetchBooksInCreation,
    fetchPendingBooks
}

export default ContentService