/* Student mongoose model */
const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
	user: String, // email
	msg: String,
	time: Date

})

const CritiqRoomSchema = new mongoose.Schema({
	creator: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	},
	start: Date,
	messages: [MessageSchema],
})

const CritiqRoom = mongoose.model('CritiqRoom', CritiqRoomSchema);

module.exports = { CritiqRoom }
