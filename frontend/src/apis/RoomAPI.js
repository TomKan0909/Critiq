import axios from 'axios'
import ENV from '../config'
const API_HOST = ENV.api_host;
axios.defaults.withCredentials = true; // needed for CORS

const getLatestRoom = async () => {
    try {
        const res = await axios.get(`${API_HOST}/api/rooms/latest`, {})
        return res
    } catch (err) {
        console.log(err)
    } 
}

const getLatestRoomByUserId = async (userId) => {
    try {
        const res = await axios.get(`${API_HOST}/api/rooms/latest/${userId}`, {})
        return res
    } catch (err) {
        console.log(err)
    } 
}

const createRoom = async (user) => {
    try {
        const res = await axios.post(`${API_HOST}/api/rooms`, user)
        return res
    } catch (err) {
        console.log(err)
    }
}

const getAllRooms = async () => {
    try {
        const rooms = (await axios.get(`${API_HOST}/api/rooms`)).data.rooms
        return rooms
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

const fetchMessages = async (roomId) => {
    try {
        const res = await getRoomById(roomId)
        return res.data.room.messages
    } catch (err) {
        console.log(err)
    }
}

const saveMessage = async (roomId, message) => {
    try {
        const res = await axios.post(`${API_HOST}/api/rooms/${roomId}/messages`, { roomId, message })
        return res
    } catch (err) {
        console.log(err)
    }
}

const stopRoom = async(roomId) => {
    try {
        console.log(roomId)
        const res = await axios.patch(`${API_HOST}/api/rooms/${roomId}/stop`, {})
        return res
    } catch (err) {
        console.log(err)
    }
}

export { getLatestRoom, getLatestRoomByUserId, createRoom, getAllRooms, getRoomById, saveMessage, fetchMessages, stopRoom }