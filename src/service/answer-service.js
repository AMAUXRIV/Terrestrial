import { validate } from '../validation/validation.js';
import { postAnswer } from '../validation/answer-validation.js';
import { prismaClient } from '../application/database.js';
import { ResponseError } from '../error/response-error.js';




const create = async (email, queId, answerText) => {
    return prismaClient.answer.create({
    data: {
      email,
      queId,
      answerText,
    },
    select: {
      id: true,
      answerText: true,
    },
  });
};
export default {
    create
}