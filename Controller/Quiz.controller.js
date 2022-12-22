const QuizModel = require('../Models/Quiz.model');


const getQn = async (req, res) => {
    // console.log(req.query);
    const { category, limit, difficulty } = req.query;

    const quiz = await QuizModel.find({ $and: [{ category }, { difficulty }] }).limit(+limit)

    res.send(quiz)
}


module.exports = getQn