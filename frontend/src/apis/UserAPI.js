import axios from 'axios'
import ENV from '../config'
const API_HOST= ENV.api_host;
axios.defaults.withCredentials = true; // needed for CORS

const login = async ({username, password}) => {
    try {
        const res = await axios.post(`${API_HOST}/api/users/login`, {
            username: username, password: password
        })
        return res
    } catch (err) {
        console.log(err)
    }
}

const logout = () => {
    return
}

const createAccount = async () => {
    return
}

const getUserById = async (id) => {
    try {
        const res = await axios.get(`${API_HOST}/api/users/${id}`)
        return res
    } catch (err) {
        console.log(err)
    }
}

export {login, logout, createAccount, getUserById}