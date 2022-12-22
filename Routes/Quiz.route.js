const { Router } = require('express')
const getQn = require('../Controller/Quiz.controller')
const quizRoute = Router()



quizRoute.get("/", getQn)


module.exports = quizRoute