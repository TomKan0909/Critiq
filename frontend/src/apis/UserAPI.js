import axios from 'axios'

const login = async ({username, password}) => {
    try {
        const body = {username, password}
        const res = await axios.post(`http://localhost:5000/users/login`, body)
        return res.data
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

export {login, logout, createAccount}