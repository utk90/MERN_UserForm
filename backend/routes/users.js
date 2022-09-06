const express = require('express');
const User = require('../models/user');
const ErrorHandler = require('../utils/ErrorHandler');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users)
    } catch (error) {
        return next(new ErrorHandler("Data not found", 404));
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user)
    } catch (error) {
        res.send('Error ' + error);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        user.name = req.body.name ? req.body.name : user.name;
        user.age = req.body.age ? req.body.age : user.age;
        user.password = req.body.password ? req.body.password : user.password;
        user.contactNo = req.body.contactNo ? req.body.contactNo : user.contactNo;
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (error) {
        res.send('Error ' + error);
    }
});

router.post('/', async (req, res) => {
    const newUser = new User({
        name: req.body.name,
        age: req.body.age,
        password: req.body.password,
        contactNo: req.body.contactNo,
    })

    try {
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (error) {
        res.send('Error ' + error);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const remUser = await user.remove();
        res.json(remUser);
    } catch (error) {
        res.send('Error ' + error);
    }
})

module.exports = router;