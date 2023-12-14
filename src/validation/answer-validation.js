import Joi from "joi";

const postAnswer = Joi.object({
  answerText: Joi.string().max(255).required()
});

export {
    postAnswer
}