const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const adminRouter = require('./routes/admin')
const userRouter = require('./routes/user')
const path = require('path')

require('dotenv').config();

const app = express()

app.use(cors())
app.use(express.json())

app.use("/admin", adminRouter)
app.use("/user", userRouter)

mongoose.connect(process.env.MONGOOSE_URL, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });

app.listen(3011, () => console.log("server running on port 3000"))