const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firebaseUID: { type: String, required: true, unique: true }, // uniquely identifies user from Firebase
  name: { type: String },
  email: { type: String },
  profilePic: { type: String }, // Optional profile picture URL
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
