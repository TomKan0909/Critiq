import users from "./users";
import axios from 'axios'

const API_HOST = 'http://localhost:5000'

const createAccount = async (username, password) => {
    try {
        console.log(username, password)
        const res = await axios.post(`${API_HOST}/api/users`, {username, password})
        return res
    } catch (err) {
        console.log(err)
    }
}


const updateUserProfile = async (id, name, job, images, prompts, tags) => {

    // upload images
    // try{
    //     const formData = new FormData();
    //     images.forEach((image, index) => {
    //         formData.append('images ' + index.toString() , image);
    //     });
    //     const headers = {
    //         "Content-Type": "multipart/form-data"
    //     }
    //     const res = await axios.patch(`${API_HOST}/api/users/images/${id}`, formData, {headers: headers})
    //     return res.headers
    // } catch (err) {
    //     console.log(err);
    // }

    // upload other data 
    try {
        const res = await axios.patch(`${API_HOST}/api/users/${id}`, 
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


async function addUsers() {
    for (const name in users) {
        try {
            const user = users[name]
            const acc = await createAccount(user.name, user.name)    
            await updateUserProfile(acc.data._id, user.name, user.job, user.images, user.prompts, user.tags)
        } catch (error) {
            console.log(error)
        }
    }
}
addUsers()

