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

const getRoomById = async (roomId) => {
    try {
        const res = await axios.get(`${API_HOST}/api/rooms/${roomId}`, {})
        return res
    } catch (err) {
        console.log(err)
    }
}


const getMessages = async (roomId) => {
    try {
        const res = await getRoomById(roomId)
        console.log(res)
        return res
    } catch (err) {
        console.log(err)
    }
}

const saveMessage = async (roomId, message) => {
    try {
        
        const res = await axios.post(`${API_HOST}/api/rooms/${roomId}/messages`, {roomId, message}) 
        console.log(res)
        return res
    } catch (err) {
        console.log(err)
    }
}




export { createRoom, getRoomById, saveMessage }