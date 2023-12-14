import Joi from "joi";

const createQuestionValidation = Joi.object({
    queText: Joi.string().max(255).required()
})

const getQuestionValidation = Joi.number().positive().required();


export {
    createQuestionValidation,
    getQuestionValidation
}