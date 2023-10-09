const express = require('express')
const mongoose = require('mongoose')
const { Admin, Course } = require('../db/index')
const jwt = require('jsonwebtoken')
const authenticateJwt = require('../middleware/auth')
require('dotenv').config();


const router = express.Router()


router.post('/signup', async (req, res) => {
    const { username, password } = req.body
    const admin = await Admin.findOne({ username, password })
    if (admin) {
        res.status(403).json({ message: 'Admin already exists' })
    }
    else {
        const newAdminObj = { username: username, password: password }
        const newAdmin = new Admin(newAdminObj)
        newAdmin.save()
        const token = jwt.sign({ username, role: 'admin' }, process.env.SECRET_KEY, { expiresIn: '1h' })
        res.json({ message: 'Admin created successfully', token })
    }
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body
    const admin = await Admin.findOne({ username, password })
    if (admin) {
        const token = jwt.sign({ username, role: 'admin' }, process.env.SECRET_KEY, { expiresIn: '1h' })
        res.json({ message: 'Admin created successfully', token })
    }
    else {
        res.status(403).json({ message: 'Invalid username or password' })
    }
})

router.get('/courses', async (req, res) => {
})


module.exports = router
