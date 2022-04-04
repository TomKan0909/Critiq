// User routes
const log = console.log

// express
const express = require('express');
const router = express.Router(); // Express Router

// import the user mongoose model
const { User } = require('../models/user')

// helpers/middlewares
const { mongoChecker, isMongoError } = require("./helpers/mongo_helpers");
const { authenticate } = require("./helpers/authentication");

// multipart middleware: allows you to access uploaded file from req.file
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();

// cloudinary: configure using credentials found on your Cloudinary Dashboard
// sign up for a free account here: https://cloudinary.com/users/register/free
const cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: 'dewbgfbqz',
    api_key: '755244959155132',
    api_secret: '_qWlNDTEJcTkGcrYHu25Odac0Vg'
});

/*** User API routes ****************/
// A route to login and create a session
router.post("/api/users/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    log(username, password);
    // Use the static method on the User model to find a user
    // by their email and password
    User.findByUsernamePassword(username, password)
        .then(user => {
            // Add the user's id to the session.
            // We can check later if this exists to ensure we are logged in.
            req.session.user = user._id;
            req.session.username = user.username; // we will later send the email to the browser when checking if someone is logged in through GET /check-session (we will display it on the frontend dashboard. You could however also just send a boolean flag).
            log(req.session)
            res.send({ currentUser: user.username });
        })
        .catch(error => {
            res.status(400).send()
        });
});

// A route to logout a user
router.get("/api/users/logout", (req, res) => {
    // Remove the session
    console.log(req.session);
    req.session.destroy(error => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.clearCookie('userID')
            res.send()
        }
    });
});

// A route to check if a user is logged in on the session
router.get("/api/users/check-session", (req, res) => {
    if (env !== 'production' && USE_TEST_USER) { // test user on development environment.
        req.session.user = TEST_USER_ID;
        req.session.email = TEST_USER_EMAIL;
        res.send({ currentUser: TEST_USER_EMAIL })
        return;
    }

    if (req.session.user) {
        res.send({ currentUser: req.session.email });
    } else {
        res.status(401).send();
    }
});

/*********************************************************/

/*** API Routes below ************************************/
//  Create a user 
router.post('/api/users', mongoChecker, async (req, res) => {
    log(req.body)

    // Create a new user
    const user = new User({
        username: req.body.username,
        password: req.body.password
    })

    try {
        // Save the user
        const newUser = await user.save()
        res.send(newUser)
    } catch (error) {
        if (isMongoError(error)) { // check for if mongo server suddenly disconnected before this request.
            res.status(500).send('Internal server error')
        } else {
            log(error)
            res.status(400).send('Bad Request') // bad request for changing the student.
        }
    }
})

// A route to get current user profile 
router.get('/api/users', mongoChecker, authenticate, async (req, res) => {
    try{
        const user = await User.findById(req.session.user);
        res.send(user);
    } catch (err) {
        if (isMongoError(err)) { // check for if mongo server suddenly disconnected before this request.
            res.status(500).send('Internal server error')
        } else {
            log(err)
            res.status(400).send('Bad Request') // bad request for changing the student.
        }
    }
})

router.get('/api/users/:id', mongoChecker, async (req, res) => {
    try {
        // Save the user
        const user = await User.findById(req.params.id)
        res.send(user)
    } catch (error) {
        if (isMongoError(error)) { // check for if mongo server suddenly disconnected before this request.
            res.status(500).send('Internal server error')
        } else {
            log(error)
            res.status(400).send('Bad Request') // bad request for changing the student.
        }
    }
})

router.delete('/api/users/:id', mongoChecker, authenticate, async(req, res) => {
    try{
        const admin = await User.findById(req.session.user);
        if (!admin.isAdmin){
            res.status(400).send('Bad Request')
        }
        const result = await User.findByIdAndDelete(req.params.id);
        res.send(result);
    } catch( err ){
        if (isMongoError(error)) { // check for if mongo server suddenly disconnected before this request.
            res.status(500).send('Internal server error')
        } else {
            log(error)
            res.status(400).send('Bad Request') // bad request for changing the student.
        }
    }
})

// A route to get all users
router.get('/api/usersAll', mongoChecker,async (req, res) => {
    try{
        const users = await User.find({isAdmin: false});
        let userMap = {};
        users.forEach(user => userMap[user._id] = user)
        res.send(userMap);
    } catch (err) {
        log(error)
        res.status(400).send('Bad Request');
    }
}) 


// A route to update user profile (no images)
router.patch('/api/users', mongoChecker,  authenticate, multipartMiddleware, async (req, res) => {
    try{
        const result = await User.findByIdAndUpdate(req.session.user, req.body);
        res.send(result)
    } catch (err) {
        if (isMongoError(err)) { // check for if mongo server suddenly disconnected before this request.
            res.status(500).send('Internal server error')
        } else {
            log(err)
            res.status(400).send('Bad Request') // bad request for changing the student.
        }
    }
})

// A route to let update users images
router.patch('/api/users/images', mongoChecker, authenticate, multipartMiddleware, async (req, res) => {
    try{
        const keys = ['images 0','images 1','images 2','images 3','images 4','images 5']
        keys.forEach(async (key, index) => {
            if (key in req.files){ // Save an image
                const path = req.files[key].path
                cloudinary.uploader.upload(path, async function(result){
                        const user = await User.findById(req.session.user).exec();
                        user.images.set(index, result.url)
                        user.save()

                })
            } else if (req.body[key] === ''){ // Delete an image
                const user = await User.findById(req.session.user).exec();
                user.images.set(index, '')
                user.save()
            }
        })

        res.send('Images uploaded')
    } catch (err) {
        if (isMongoError(err)) { // check for if mongo server suddenly disconnected before this request.
            res.status(500).send('Internal server error')
        } else {
            log(err)
            res.status(400).send('Bad Request') // bad request for changing the student.
        }
    }
})


// export the router
module.exports = router
