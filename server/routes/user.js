const express = require('express')
const mongoose = require('mongoose')
const { Admin, Course } = require('../db/index')
const jwt = require('jsonwebtoken')
const authenticateJwt = require('../middleware/auth')
require('dotenv').config();