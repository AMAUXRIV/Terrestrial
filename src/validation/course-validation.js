import Joi from "joi"



const createCourseValidation = Joi.object({
  courseName: Joi.string().max(100).required(),
  thumbnail: Joi.string().max(200).required(),
  courseType: Joi.string().valid('Frontend', 'Backend', 'Data').required(),
  describe: Joi.string().max(255).required(),
  learning: Joi.string().required()
});

const getCourseValidation = Joi.number().positive().required();

const updateCourseValidation = Joi.object({
  id: Joi.number().positive().required(),
  courseName: Joi.string().max(100).required(),
  thumbnail: Joi.string().max(200).required(),
  courseType: Joi.string().valid('Frontend', 'Backend', 'Data').required(),
  describe: Joi.string().max(255).required(),
  learning: Joi.string().required()
});

// const searchCourseValidation = Joi.object({
//     page: Joi.number().min(1).positive().default(1),
//     size: Joi.number().min(1).positive().max(100).default(10),
//     courseName: Joi.string().optional(),
//     courseType: Joi.string().valid('Frontend', 'Backend', 'Data').optional(),
    
// })

export {
    createCourseValidation,
    getCourseValidation,
    updateCourseValidation
}
