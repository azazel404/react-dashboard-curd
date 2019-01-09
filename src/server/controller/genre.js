const express = require('express');
const router = express.Router();
const Genre = require('../model/genres');
const passport = require('passport');


router.get('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
  var pageNo = parseInt(req.query.pageNo)
  var size = parseInt(5)
  const genre = await Genre.find()
                          .skip((pageNo - 1) * size)
                          .limit(size)
                      .then(result => {
                        res.status(200).json(result);
                      })
  return genre;

});

router.get('/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
  const genre = await Genre.findById(req.params.id)
    .then(result => {
      res.status(200).json(result);
    })
  return genre;
});

router.post('/', passport.authenticate('jwt', { session: false }), (req,res,next) => {
  async function AddGenre(){
    try{
      const genre = await new Genre({
                    name : req.body.name
                    })
                    genre.save().then(result => res.json(result))
      return { genre }
    }
    catch(err){
      throw err;
    }
  }
  AddGenre();
})

router.put('/:id', passport.authenticate('jwt', { session: false }), async (req,res) => {
  const genre = await Genre.findByIdAndUpdate(req.params.id,{ name : req.body.name},{new: true})
                    .then(result => {
                      if(!result){
                        return res.status(404).send('the genre with the given ID')
                      }
                      return res.status(200).json(result);
                    })
  return genre
})

router.delete("/:id", passport.authenticate('jwt', { session: false }), async (req,res) => {
  const genre = await Genre.findByIdAndRemove(req.params.id)
                      .then(result => {
                        if(!result){
                          res.json({mesage: "data not found"})
                        }
                        res.status(200).json({message : 'sukses'});
                      })
    return genre
})




module.exports = router;