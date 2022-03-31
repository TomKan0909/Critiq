// User routes
const log = console.log

// express
const express = require('express');
const router = express.Router(); // Express Router

// import the user mongoose model
const { Room } = require('../models/room')

// helpers/middlewares
const { mongoChecker, isMongoError } = require("./helpers/mongo_helpers");

/** CritiqRoom resource routes **/
// a POST route to *create* a critiqRoom
router.post('/api/rooms', mongoChecker, async (req, res) => {
    // Create a new critiqRoom using the critiqRoom mongoose model
    log(req.session)
    log(req.session.user)
    const room = new Room({
        creator: req.session.user, // creator id from the authenticate middleware
    })

    // Save room to the database
    try {
        const result = await room.save() 
        res.send(result)
    } catch(error) {
        log(error) // log server error to the console, not to the client.
        if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
            res.status(500).send('Internal server error')
        } else {
            res.status(400).send('Bad Request') // 400 for bad request gets sent to client.
        }
    }
})

// a GET route to get critiqRoom history
router.get('/api/rooms', mongoChecker, async (req, res) => {
    // Get the students
    try {
        const rooms = await Room.find({creator: req.session.user})
        // res.send(students) // just the array
        res.send({ rooms }) // can wrap students in object if want to add more properties
    } catch(error) {
        log(error)
        res.status(500).send("Internal Server Error")
    }
})


module.exports = router
