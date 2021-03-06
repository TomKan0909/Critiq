// User routes
const log = console.log;

// express
const express = require("express");
const router = express.Router(); // Express Router

// import the user mongoose model
const mongoose = require("mongoose");
const { Room } = require("../models/room");
const { User } = require("../models/user");

// helpers/middlewares
const { mongoChecker, isMongoError } = require("./helpers/mongo_helpers");

/** CritiqRoom resource routes **/
// a POST route to *create* a critiqRoom
router.post("/api/rooms", mongoChecker, async (req, res) => {
  // Save room to the database
  try {
    const room = new Room({
      creator: req.body,
    });
    const result = await room.save();
    res.send(result);
  } catch (error) {
    log(error); // log server error to the console, not to the client.
    if (isMongoError(error)) {
      // check for if mongo server suddenly dissconnected before this request.
      res.status(500).send("Internal server error");
    } else {
      res.status(400).send("Bad Request"); // 400 for bad request gets sent to client.
    }
  }
});

// a GET route to get all active rooms
router.get("/api/rooms", mongoChecker, async (req, res) => {
  try {
    const rooms = await Room.find({ active: true });
    res.send({ rooms });
  } catch (error) {
    log(error);
    res.status(500).send("Internal Server Error");
  }
});

// a GET route to get critiqRoom history
router.get("/api/rooms/:userid/history", mongoChecker, async (req, res) => {
  try {
    console.log(req.params.userid);
    const rooms = await Room.find({
      "creator._id": req.params.userid,
      active: false,
    });
    console.log(rooms);
    res.send({ rooms });
  } catch (error) {
    log(error);
    res.status(500).send("Internal Server Error");
  }
});

// a GET route to get the latest critiqRoom
router.get("/api/rooms/latest", mongoChecker, async (req, res) => {
  try {
    const rooms = await Room.find({ "creator._id": req.session.user });
    res.send({ room: rooms[rooms.length - 1] });
  } catch (error) {
    log(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/api/rooms/latest/:userid", mongoChecker, async (req, res) => {
  try {
    const rooms = await Room.find({ "creator._id": req.params.userid });
    res.send({ room: rooms[rooms.length - 1] });
  } catch (error) {
    log(error);
    res.status(500).send("Internal Server Error");
  }
});

// a GET route to get critiqRoom by id
router.get("/api/rooms/:id", mongoChecker, async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    res.send({ room });
  } catch (error) {
    log(error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/api/rooms/:id/messages", mongoChecker, async (req, res) => {
  try {
    const message = req.body.message;
    await Room.findOneAndUpdate(
      { _id: req.body.roomId },
      { $push: { messages: message } },
      { new: true, useFindAndModify: false }
    );
    res.status(200).send("Message Sent");
  } catch (error) {
    log(error);
    res.status(500).send("Internal Server Error");
  }
});

router.patch("/api/rooms/:id/stop", mongoChecker, async (req, res) => {
  try {
    console.log(req.params.id);
    const room = await Room.findOneAndUpdate(
      { _id: req.params.id, active: true },
      { $set: { active: false } },
      { new: true, useFindAndModify: false }
    );
    console.log(room);
    res.status(200).send("Stopped Room");
  } catch (error) {
    log(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
