const mongoose = require('mongoose');

const chatRoomSchema = new mongoose.Schema({
  isGroupChat: { type: Boolean, default: false },
  participants: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  ],
  chatName: { type: String }, 
}, { timestamps: true });

module.exports = mongoose.model('ChatRoom', chatRoomSchema);
