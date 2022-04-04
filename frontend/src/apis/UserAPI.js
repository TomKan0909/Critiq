import axios, { Axios } from 'axios'
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
        sessionStorage.clear();
    } catch (err){ 
        console.log(err);
    }
}

const createAccount = async () => {
    return
}

const getCurrentUser = async() => {
    try{
        const res = await axios.get(`${API_HOST}/api/users`)
        return res
    } catch (err){ 
        console.log(err);
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

const getAllUsers = async () => {
    try{
        const res = await axios.get(`${API_HOST}/api/usersAll`);
        const data = res.data;
        const userMap = {}
        for (const [userId, user] of Object.entries(data)){
            const userFormatted = {
                name: user.name,
                job: user.occupation,
                images: user.images,
                prompts: user.prompts,
                tags: {
                    age: user.age,
                    gender: user.gender,
                    height: user.height,
                    location: user.location,
                    ethnicity: user.ethnicity,
                    alcohol: user.alcohol,
                    occupation: user.occupation,
                    school: user.school
                }}
            userMap[userId] = userFormatted
        }
        console.log(userMap);
        return userMap
    } catch (err) {
        console.log(err);
    }
}

const getAllUsersStats = async () => { // For now gets age distribution and ethnicity distribution
    try {
        const userMap = await getAllUsers();
        let labels = {ageDistribution: [0, 0, 0, 0, 0], ethnicity:{}}
        // iterate through usermap and add age and ethnicity
        for (const user of Object.values(userMap)){
            const age = parseInt(user.tags.age);
            console.log('age: ', age);
            const ethnicity = user.tags.ethnicity;
            if (18 <= age && age <= 23){
                labels['ageDistribution'][0] += 1
            } else if (23 < age && age <= 28) {
                labels['ageDistribution'][1] += 1
            } else if (28 < age && age <= 33) {
                labels['ageDistribution'][2] += 1
            } else if (33 < age && age <= 43) {
                labels['ageDistribution'][3] += 1
            } else{
                labels['ageDistribution'][4] += 1
            }
            
            if (!(ethnicity in labels['ethnicity'])){
                labels['ethnicity'][ethnicity] = 1
            } else{
                labels['ethnicity'][ethnicity] += 1
            }
        }
        return labels

    } catch (err) {
        console.log(err);
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

const deleteUserByID = async (id) => {
    try{
        const res = await axios.delete(`${API_HOST}/api/users/${id}`)
        console.log(res);
        return res
    } catch (err) {
        console.log(err);
    }
}



export {login, logout, createAccount, getCurrentUser, getUserById, getUserProfile, getAllUsers, getAllUsersStats, updateUserProfile, deleteUserByID}