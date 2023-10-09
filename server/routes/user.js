const express = require('express')
const mongoose = require('mongoose')
const { User, Course } = require('../db/index')
const jwt = require('jsonwebtoken')
const authenticateJwt = require('../middleware/auth')
require('dotenv').config();

const router = express.Router()

const SECRET_KEY = process.env.SECRET_KEY

router.post('/signup', async (req, res) => {
    const { username, password } = req.body
    const newUser = User.findOne({ username, password })
    if (newUser) res.status(403).json({ message: 'User already exist' })
    else {
        const userObj = { username, password }
        const user = new User(userObj)
        user.save()
        const token = jwt.sign()
    }
})


