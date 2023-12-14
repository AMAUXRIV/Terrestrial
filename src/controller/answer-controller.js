import answerService from "../service/answer-service.js";

const create = async (req, res, next) => {
  try {
    const user = req.user;
    const questionId = req.body.questionId; // Sesuaikan dengan cara Anda mengirimkan questionId dari frontend
    const answerText = req.body.answerText;

    const result = await answerService.create(user.email, questionId, answerText);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

export default {
    create
}