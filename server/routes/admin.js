const express = require('express')
const mongoose = require('mongoose')
const { Admin, Course } = require('../db/index')
const jwt = require('jsonwebtoken')
const authenticateJwt = require('../middleware/auth')
const { AuthStatus } = require('@clerk/nextjs/dist/types/server')
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

router.post('/courses', authenticateJwt, async (req, res) => {
    const newCourse = new Course(req.body)
    await Course.save()
    res.json({ message: 'Course sucessfully created', courseId: newCourse.id })
})

router.put('/course/:courseId', authenticateJwt, async (req, res) => {
    const courseToUpdate = await Course.findByIdAndUpdate(req.params.courseId, req.body, { new: true })
    if (courseToUpdate) res.json({ message: 'Course sucessfully updated' })
    else res.status(403).json({ message: 'Invalid course Id' })
})

router.get('/courses', authenticateJwt, async (req, res) => {
    const courses = await Course.find({})
    res.json({ courses })
})

router.get('/courses/:courseId', authenticateJwt, async (req, res) => {
    const courseId = req.params.courseId
    const course = await Course.findById({ courseId })
    if (course) res.json({ course })
    else res.status(403).json({ message: 'Invalid course Id' })
})


module.exports = router
