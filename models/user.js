/* User model */
"use strict";

const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const PromptSchema = new mongoose.Schema({
  title: { type: String, default: "A life goal of mine" },
  content: { type: String, default: "Loren ipsum" },
});

// Making a Mongoose model a little differently: a Mongoose Schema
// Allows us to add additional functionality.
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 1,
  },
  isAdmin: { type: Boolean, default: false },
  name: { type: String, default: "Name" },
  images: { type: Array, default: ["", "", "", "", "", ""] },
  prompts: {
    type: [PromptSchema],
    default: [
      { title: "A life goal of mine", content: "Loren ipsum" },
      { title: "I take pride in", content: "Loren ipsum" },
      { title: "Best travel story", content: "Loren ipsum" },
    ],
  },
  age: { type: Number, default: 999 },
  gender: { type: String, default: "Other" },
  height: { type: String, default: "999cm" },
  location: { type: String, default: "Location" },
  ethnicity: { type: String, default: "Ethnicity" },
  alcohol: { type: String, default: "Yes" },
  occupation: { type: String, default: "Occupation" },
  school: { type: String, default: "School" },
});

// An example of Mongoose middleware.
// This function will run immediately prior to saving the document
// in the database.
UserSchema.pre("save", function (next) {
  const user = this; // binds this to User document instance

  // checks to ensure we don't hash password more than once
  if (user.isModified("password")) {
    // generate salt and hash the password
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

// A static method on the document model.
// Allows us to find a User document by comparing the hashed password
//  to a given one, for example when logging in.
UserSchema.statics.findByUsernamePassword = function (username, password) {
  const User = this; // binds this to the User model

  // First find the user by their email
  return User.findOne({ username: username }).then((user) => {
    if (!user) {
      return Promise.reject(); // a rejected promise
    }
    // if the user exists, make sure their password is correct
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          resolve(user);
        } else {
          reject();
        }
      });
    });
  });
};

// make a model using the User schema
const User = mongoose.model("User", UserSchema);
module.exports = { User, UserSchema };
