const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: { type: String },
    password: { type: String },
    purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
})

const adminSchema = new mongoose.Schema({
    username: { type: String },
    password: { type: String }
})

const courseSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    price: { type: Number },
    imageLink: { type: String },
    published: { type: Boolean },
    reviews: [
        {
            text: { type: String },
            rating: { type: Number },
            date: { type: Date },
            username: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
        }
    ]
});


const User = mongoose.model('User', userSchema);
const Admin = mongoose.model('Admin', adminSchema);
const Course = mongoose.model('Course', courseSchema);

module.exports = {
    User, Admin, Course
}
