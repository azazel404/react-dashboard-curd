const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const profileSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    address: {
        type: String,
        default: false
    },
    isGold: {
        type: Boolean,
        default: false
    },
    phone: {
        type: Number,
        required: true
    }
})

const profile = mongoose.model('profiles', profileSchema);
module.exports = profile;
exports.genreSchema = profileSchema;