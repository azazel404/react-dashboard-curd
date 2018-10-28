const express = require('express');
const router = express.Router();
const Profile = require('../model/profiles');
const User = require('../model/users');
const passport = require('passport');


router.get('/',passport.authenticate('jwt', { session: false }),(req, res) => {
        const errors = {};
       
        Profile.findOne({user: req.user.id})
            .then(profile => {
                console.log(profile);
                if (!profile) {
                    errors.noprofile = 'There is no profile for this usea r';
                    return res.status(404).json(errors);
                }
                res.json(profile);
            })
            .catch(err => res.status(404).json(err));
    }
);

router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {

        // Get fields
       const getProfile = {
            name: req.body.name,
            user: req.user.id,
            address: req.body.address,
            isGold: req.body.isGold,
            phone: req.body.phone

       }

        Profile.findOne({ user: req.user.id }).then(profile => {
            if (profile) {
                // Update
                Profile.findOneAndUpdate(
                    { user: req.user.id },
                    { $set: getProfile },
                    { new: true }
                ).then(profile => res.json(profile));
            } else {
                // Create

                // Check if handle exists
                Profile.findOne({ user: req.user.id }).then(profile => {
                    if (profile) {
                        errors.handle = 'That user already exists';
                        res.status(400).json(errors);
                    }

                    // Save Profile
                    new Profile(getProfile).save().then(profile => res.json(profile));
                });
            }
        });
    }
);
// router.post('/', passport.authenticate('jwt', { session: false }),  (req, res) => {
//     console.log(req.user._id);
//     Profile.findOne({user : req.user._id})
//                           .then(profile => {
//                             const newProfile  = {
//                                  name: req.body.name,
//                                  address: req.body.address,
//                                  isGold: req.body.isGold,
//                                  phone: req.body.phone

//                              }
//                              new Profile(newProfile).save()
//                                             .then(result => console.log(result));
//                           })
//     });



router.put('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
    Profile.findOne({ user: req.user._id }).then(profile => {
        if (!profile) {
            return res.status(400).json({ message: 'profile not found guys' })
        } else {
            //update
            const newProfile = {
                name: req.body.name,
                address: req.body.address,
                isGold: req.body.isGold,
                phone: req.body.phone
            }
            Profile.update(
                { user: req.user._id },
                { $set: newProfile },
                { new: false }
            ).then(profile => res.json(profile));
        }
    });
})




// router.put('/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {

//     const customer = await Users.findByIdAndUpdate(req.params.id,
//         {
//             name: req.body.name,
//             isGold: req.body.isGold,
//             phone: req.body.phone
//         }, { new: true });

//     if (!customer) return res.status(404).send('The customer with the given ID was not found.');

//     res.send(customer);
// });

// router.delete(
//     '/',
//     passport.authenticate('jwt', { session: false }),
//     (req, res) => {
//         Profile.findOneAndRemove({ user: req.user.id }).then(() => {
//             User.findOneAndRemove({ _id: req.user.id }).then(() =>
//                 res.json({ success: true })
//             );
//         });
//     }
// );

module.exports = router;