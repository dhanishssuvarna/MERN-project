const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send('Hello From The Server auth.js');
});

// Registration Router

//! Using Promises
/*
router.post('/register', (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;

    // While filling the form by the user, all the fields must be completely filled
    // Else through the Error
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: 'Pls fill the field' });
    }

    // To check Weather user email ID already Exists in DB or not
    // Because Registration is a new Process
    User.findOne({ email: email })
        .then((userExists) => {
            if (userExists) {
                return res
                    .status(422)
                    .json({ error: 'Email ID already Exists' });
            }
            const user = new User({
                name,
                email,
                phone,
                work,
                password,
                cpassword,
            });
            user.save()
                .then(() => {
                    res.status(201).json({
                        message: 'User registred Succesfully',
                    });
                })
                .catch((err) => {
                    res.status(500).json({ error: 'failed to register' });
                });
        })
        .catch((err) => {
            console.log(err);
        });

    // res.json({ message: req.body });
});
*/

//! Using async-await
router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;

    // While filling the form by the user, all the fields must be completely filled
    // Else through the Error
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: 'Pls fill the field' });
    }

    // To check Weather user email ID already Exists in DB or not
    // Because Registration is a new Process
    try {
        const userExists = await User.findOne({ email: email });
        if (userExists) {
            return res.status(422).json({ error: 'Email ID already Exists' });
        } else if (password != cpassword) {
            return res.status(422).json({ error: 'Password not Matching' });
        } else {
            const user = new User({
                name,
                email,
                phone,
                work,
                password,
                cpassword,
            });
            // Hashing of password occurs here, i.e pre of save
            await user.save();
            res.status(201).json({
                message: 'User registred Succesfully',
            });
        }
    } catch (err) {
        console.log(err);
    }
});

// Login Router
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    let token;
    try {
        if (!email || !password) {
            return res.status(400).json({ error: 'Pls Fill the Data' });
        }

        // Check Email
        const userLogin = await User.findOne({ email: email });
        if (!userLogin) {
            return res.status(400).json({ error: 'Invalid Credientials' });
        }
        // Check Password
        const isMatch = await bcrypt.compare(password, userLogin.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid Credientials' });
        }
        // Generate Token
        token = await userLogin.generateAuthToken();
        res.cookie('jwtoken', token, {
            expires: new Date(Date.now() + 2592000000), // 2592000000 --> 30days in miliSecconds
            httpOnly: true, //we are not using https in development
        });
        res.status(200).json({ message: 'User SignIn Succesfully' });
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
