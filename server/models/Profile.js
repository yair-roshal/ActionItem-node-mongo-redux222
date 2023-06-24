const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  picture: {
    large: {
      type: String,
      required: true,
    },
  },
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
