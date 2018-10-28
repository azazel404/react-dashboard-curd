const express = require('express');
const genre = require('../controller/genre');
const movie = require('../controller/movie');
const users = require('../controller/users');
const profile = require('../controller/profile');

module.exports = function (app) {
    app.use(express.json());
    app.use('/api/genres', genre);
    app.use('/api/movies', movie);
    app.use('/api/users', users);
    app.use('/api/profile', profile);
}