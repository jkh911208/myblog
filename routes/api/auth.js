const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require("../../models/User");
const { check, validationResult } = require("express-validator");
const config = require("config");
const jwt = require("jsonwebtoken");

// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch(err) {
        console.errir(err.message);
        res.status(500).send("server not valid");
    }
});

// @route   POST api/auth
// @desc    authenticate user & get token
// @access  Public
router.post('/', 
    [
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'password is required').exists()
    ],
    async (req, res) => {
        console.log(req.body);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const {email, password} = req.body;

        try {
            // See if user exists
            let user = await User.findOne({email})

            if(!user) {
                return res.status(400).json({errors: [{ msg: 'Invalid Credentials'}]})
            }
            
            // check if password is correct
            const isMatch = await bcrypt.compare(password, user.password)
            

            if(!isMatch) {
                return res.status(400).json({errors: [{ msg: 'Invalid Credentials'}]})
            }
            // return jsonwebtoken

            const payload = {
                user: {
                    id: user.id,
                    status: user.status
                }
            }

            jwt.sign(payload, config.get('jwtSecret'), {
                expiresIn: 360000
            }, (err, token) => {
                if(err) throw err;
                res.json({token});
            });
        } catch(err){
            console.error(err.message);
            return res.stauts(500).send('Server Error');
        }
    }
);

module.exports = router;