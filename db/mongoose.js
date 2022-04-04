/* This module will hold our connection to 
   our mongo server through the Mongoose API.
   We will access the connection in our express server. */
const mongoose = require('mongoose')

/* Connnect to our database */
// Get the URI of the local database, or the one specified on deployment.
// const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/StudentAPI'
const mongoURI = 'mongodb+srv://username:5ODC2TDNaairj1dN@cluster0.fmq4b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' || 'mongodb://localhost:27017/StudentAPI'

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

module.exports = { mongoose }  // Export the active connection.