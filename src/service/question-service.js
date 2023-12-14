import { validate } from '../validation/validation.js';
import { createQuestionValidation } from '../validation/question-validation.js';
import { prismaClient } from '../application/database.js';
import { ResponseError } from '../error/response-error.js';


const createQuestion = async (request) => {
    const question = validate(createQuestionValidation,request);
    
    return prismaClient.question.create({
        data: question,
        select:{
            id:true,
            queText:true,
        },
    });
};

const getQuestion = async() => {
    try {
        const question = await prismaClient.question.findMany({
            select:{
                id:true,
                queText:true
            },
        });

        if(!question || question.length === 0){
            throw new ResponseError(404,"no question found");
        }

        return question;

    }catch(error){
        throw new ResponseError (500,"Internal Server Error");
    }

};

export default {
    createQuestion,
    getQuestion
}