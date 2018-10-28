const express = require('express');
const router = express.Router();
const Users = require('../model/users');
const bcrypt = require('bcrypt');
const keys = require('../config/keys');
const jwt = require('jsonwebtoken');

router.post('/register',async (req,res) => {
   let user = await Users.findOne({email : req.body.email});
   if(user) return res.status(400).send('user already registered');
   const salt = await bcrypt.genSalt(10);
   user = new Users({
       username : req.body.username,
       email : req.body.email,
       password : req.body.password
   })
   user.password = await bcrypt.hash(user.password,salt);
   await user.save();
   res.json({message: "sukses"})
})

router.post('/login', async (req,res) => {
    let user = await Users.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('user already notfound'); 
    const validPassword = await bcrypt.compare(req.body.password,user.password);
    if(!validPassword){
        res.status(400).send('failed login'); 
    }
   const token = jwt.sign({id : user.id},keys.secretOrKey,{expiresIn: 3600});
    res.status(200).json({ token: 'bearer ' + token});
})





module.exports = router;