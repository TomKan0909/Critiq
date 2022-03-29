/* Student mongoose model */
const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
	user: String, // email
	msg: String,
	time: Date

})

const CritiqRoomSchema = new mongoose.Schema({
	user: String, // email
	created: Date,
	messages: [MessageSchema],
	open: Boolean
})

const CritiqRoom = mongoose.model('CritiqRoom', CritiqRoomSchema);

module.exports = { CritiqRoom }
