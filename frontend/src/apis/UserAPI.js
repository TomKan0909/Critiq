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

const logout = async () => {
    try{
        const res = await axios.get(`${API_HOST}/api/users/logout`)
        sessionStorage.removeItem('user');
    } catch (err){ 
        console.log(err);
    }
}

const createAccount = async (username, password) => {
    try {
        const res = await axios.post(`${API_HOST}/api/users`, {username, password})
        return res
    } catch (err) {
        console.log(err)
    }
}

const getUserById = async (id) => {
    try {
        const res = await axios.get(`${API_HOST}/api/users/${id}`)
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

    // upload images
    try{
        const formData = new FormData();
        images.forEach((image, index) => {
            formData.append('images ' + index.toString() , image);
        });
        const headers = {
            "Content-Type": "multipart/form-data"
        }
        const res = await axios.patch(`${API_HOST}/api/users/images`, formData, {headers: headers})
        return res.headers
    } catch (err) {
        console.log(err);
    }

    // upload other data 
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



export {login, logout, createAccount, getUserById, getUserProfile, updateUserProfile}