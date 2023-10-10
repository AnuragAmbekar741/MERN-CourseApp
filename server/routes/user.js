const express = require('express')
const { User, Course } = require('../db/index')
const jwt = require('jsonwebtoken')
const { authenticateJwt } = require('../middleware/auth')
require('dotenv').config();

const router = express.Router()

const SECRET_KEY = process.env.SECRET_KEY

router.post('/signup', async (req, res) => {
    const { username, password } = req.body
    const newUser = await User.findOne({ username, password })
    if (newUser) res.status(403).json({ message: 'User already exist' })
    else {
        const userObj = { username, password }
        const user = new User(userObj)
        user.save()
        const token = jwt.sign({ username, role: 'user' }, SECRET_KEY, { expiresIn: '1h' })
        res.json({ message: 'user created successfully', token })
    }
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body
    const user = await User.findOne({ username, password })
    if (user) {
        const token = jwt.sign({ username, role: 'user' }, SECRET_KEY, { expiresIn: '1h' })
        res.json({ message: 'Login successfull', token })
    }
    else res.status(403).json({ message: 'Invalid username or password' })
})

router.get('/courses', authenticateJwt, async (req, res) => {
    const courses = await Course.find({})
    res.json({ courses })
})

router.get('/courses/:courseId', authenticateJwt, async (req, res) => {
    const courseId = req.params.courseId
    const course = await Course.findById({ courseId })
    if (course) res.json({ course })
    else res.send(403).json({ message: 'Invalid course Id' })
})

router.post('/courses/:courseId', authenticateJwt, async (req, res) => {
    const courseId = req.params.courseId
    const course = await Course.findById({ courseId })
    if (course) {
        const user = await User.findOne({ username: req.user.username });
        if (user) {
            user.purchasedCourses.push(course)
            await user.save()
            res.json({ message: 'Course purchased sucessfully' })
        }
        else res.status(404).json({ message: 'User not found' });
    }
    else res.status(404).json({ message: 'Course not found' });
})

router.get('/purchasedCourses', authenticateJwt, async (req, res) => {
    const user = await User.findOne({ username: req.user.username }).populate('purchasedCourses');
    if (user) res.json({ purchasedCourses: user.purchasedCourses || [] })
    else res.status(403).json({ message: 'User not found' });
})

module.exports = router






