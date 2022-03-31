import axios from 'axios'
import ENV from '../config'
const API_HOST= ENV.api_host;
axios.defaults.withCredentials = true; // needed for CORS

const createRoom = async () => {
    try {
        const res = await axios.post(`${API_HOST}/api/rooms`, {})
        return res
    } catch (err) {
        console.log(err)
    }
}

export {createRoom}