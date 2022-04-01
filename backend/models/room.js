/* Student mongoose model */
const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
	sender: mongoose.Schema.Types.ObjectId, // email
	content: String
	},
	{
		timestamps: true
	})

const RoomSchema = new mongoose.Schema({
	creator: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	},
	messages: [MessageSchema]
	},
	{
		timestamps: true
	})

const Room = mongoose.model('Room', RoomSchema);

module.exports = { Room }
