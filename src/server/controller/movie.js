const express = require('express');
const router = express.Router();
const Genre = require('../model/genres');
const Movie = require('../model/movies')
const passport = require('passport');

router.get('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
  var pageNo = parseInt(req.query.pageNo)
  var size = parseInt(req.query.size)
    const movies = await Movie.find()
          .skip((pageNo - 1) * size)
          .limit(size)
    res.send(movies);
});

router.post('/', passport.authenticate('jwt', { session: false }), async (req,res) => {
  const genre = await Genre.findById(req.body.genreId)
  if(!genre){
      return res.status(400).json({message: 'not found'})
  }
    let movie = new Movie({
        title: req.body.title,
        genre: req.body.genreId,
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate
    });
    await movie.save()
    return res.status(200).json(movie);
})

router.put('/:id', passport.authenticate('jwt', { session: false }),async (req, res) => {
    const genre = await Genre.findById(req.body.genreId);
    if (!genre) return res.status(400).send('Invalid genre.');
    const movie = await Movie.findByIdAndUpdate(req.params.id,
        {
            title: req.body.title,
            genre: req.body.genreId,
            numberInStock: req.body.numberInStock,
            dailyRentalRate: req.body.dailyRentalRate
        }, { new: true });

    if (!movie) return res.status(404).send('The movie with the given ID was not found.');

    res.send(movie);
});
router.delete('/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const movie = await Movie.findByIdAndRemove(req.params.id);

    if (!movie) return res.status(404).send('The movie with the given ID was not found.');

    res.json({message: "sukses delete"});
});

router.get('/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const movie = await Movie.findById(req.params.id);

    if (!movie) return res.status(404).send('The movie with the given ID was not found.');

    res.send(movie);
});


module.exports = router;