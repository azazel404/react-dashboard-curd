const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const genreSchema = new Schema({
    name: {
        type: String,
        required : true,
        minlength : 5,
        maxlength : 50
    }
})

const genre = mongoose.model('genres', genreSchema);
module.exports = genre;
exports.genreSchema = genreSchema;