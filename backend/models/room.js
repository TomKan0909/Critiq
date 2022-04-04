/* Student mongoose model */
const mongoose = require('mongoose');
const { UserSchema } = require('./user');

const MessageSchema = new mongoose.Schema({
	sender: UserSchema,
	content: String
})

const RoomSchema = new mongoose.Schema({
	creator: UserSchema,
	messages: [MessageSchema],
	active: { type: Boolean, default: true }},
	{timestamps: true})

const Room = mongoose.model('Room', RoomSchema);

module.exports = { Room }
