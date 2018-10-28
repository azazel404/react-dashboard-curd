
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const genreSchema = ('./genres');

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 255
    },
    genre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'genres'
    },
    numberInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    dailyRentalRate: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    }
})

const movie = mongoose.model('movies', movieSchema);
module.exports = movie;
exports.movieSchema = movieSchema;