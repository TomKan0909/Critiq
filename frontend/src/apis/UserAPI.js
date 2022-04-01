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

const getUserProfile = async () => {
    try {
        const res = await axios.get(`${API_HOST}/api/users`)
        const data = res.data
        const user = {
            name: data.name,
            job: data.occupation,
            images: data.images,
            prompts: data.prompts,
            tags: {
                age: data.age,
                gender: data.gender,
                height: data.height,
                location: data.location,
                ethnicity: data.ethnicity,
                alcohol: data.alcohol,
                occupation: data.occupation,
                school: data.school
            }}
        return user
        
    } catch (err) {
        console.log(err)
    }
}

const updateUserProfile = async (name, job, images, prompts, tags) => {
    
    try {
        const res = await axios.patch(`${API_HOST}/api/users`, 
            {
                name: name,
                occupation: job,
                age: tags.age,
                gender: tags.gender,
                height: tags.height,
                location: tags.location,
                ethnicity: tags.ethnicity,
                alcohol: tags.alcohol,
                images: images,
                prompts: prompts,
            });
    } catch (err) {
        console.log(err);
    }
}



export {login, logout, createAccount, getUserProfile, updateUserProfile}