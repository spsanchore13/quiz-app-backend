const express = require('express');
const connection = require('./Config/db')
const app = express();
const PORT = process.env.PORT || 8080
const quizRoute = require('./Routes/Quiz.route')
const cors = require('cors')
app.use(express.json());
app.use(cors())


app.get("/", (req, res) => {
    res.send({ message: "Hello Welcome to home" })
})


app.use("/quiz", quizRoute)


app.listen(PORT, async (req, res) => {
    try {
        await connection;
        console.log("Connected to db successfully")
    }
    catch (err) {
        console.log(err)
    }
    console.log(`listening on port ${PORT}`)
})