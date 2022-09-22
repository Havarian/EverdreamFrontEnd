import axios from "axios";

const API_URL = "http://localhost:8080/api/security/";

const login = (email, password) => {
    return axios.post(API_URL + "login", {
        email,
        password
    }, {headers: {
            'Access-Control-Allow-Headers': 'content-type',
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'application/json'
        }}).then((response) => {
        if(response.data.token)
            localStorage.setItem("user", JSON.stringify(response.data));
        return response.data;
    });
}
const logout = () => {
    localStorage.removeItem("user");
}

const register = (username, email, password) => {
    return axios.post(API_URL + "register", {
        username,
        email,
        password
    });
}

const getCurrentUser = () =>{
    return JSON.parse(localStorage.getItem("user"))
}

const authService = {
    register,
    login,
    logout,
    getCurrentUser
}

export default authService;