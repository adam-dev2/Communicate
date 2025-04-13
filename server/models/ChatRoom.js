const mongoose = require('mongoose');

const chatRoomSchema = new mongoose.Schema({
  isGroupChat: { type: Boolean, default: false },
  participants: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // reference to User model
  ],
  chatName: { type: String }, // optional, mainly for group chats
}, { timestamps: true });

module.exports = mongoose.model('ChatRoom', chatRoomSchema);
