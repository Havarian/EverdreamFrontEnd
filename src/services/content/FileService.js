import axios from "axios";
import Config from "../../ConfigData.json"
import AuthHeader from "../authentication/AuthHeader";

const fetchFile = async (fileName) => {
    return await axios.get(Config.API_URL + `/api/content/files/${fileName}`, {headers: AuthHeader(), responseType: 'blob'})
        .then(res => URL.createObjectURL(res.data))
}

const uploadFile = async (file) => {

    let formData = new FormData()
    formData.append("file", file)

    return await axios.post(Config.API_URL + "/api/content/files", formData, {headers: {"Content-Type": "multipart/form-data"}})
        .then(res => res.data)
}

const FileService = {
    fetchFile,
    uploadFile,
}

export default FileService