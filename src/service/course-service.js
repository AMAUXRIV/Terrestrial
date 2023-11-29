import {validate} from "../validation/validation.js";
import {
    createCourseValidation,
    getCourseValidation,
    updateCourseValidation
} from "../validation/course-validation.js";
import {prismaClient} from "../application/database.js";
import {ResponseError} from "../error/response-error.js";

const create = async (user, request) => {
    const course = validate(createCourseValidation, request);
    course.username = user.username;

    return prismaClient.course.create({
        data: course,
        select: {
            id : true,
            courseName : true,
            thumbnail :true,
            courseType:true,
            describe:true,
            learning : true
        }
    });
}

const get = async (user, courseId) => {
    courseId = validate(getCourseValidation, courseId);

    const course = await prismaClient.course.findFirst({
        where: {
            username: user.username,
            id: courseId
        },
        select: {
            id : true,
            courseName : true,
            thumbnail :true,
            courseType:true,
            describe:true,
            learning : true
        }
    });

    if (!course) {
        throw new ResponseError(404, "course is not found");
    }

    return course;
}



const update = async (user, request) => {
    const course = validate(updateCourseValidation, request);

    const totalcourseInDatabase = await prismaClient.course.count({
        where: {
            username: user.username,
            id: course.id
        }
    });

    if (totalcourseInDatabase !== 1) {
        throw new ResponseError(404, "course is not found");
    }

    return prismaClient.course.update({
        where: {
            id: course.id
        },
        data: {
            
            courseName : true,
            thumbnail :true,
            courseType:true,
            describe:true,
            learning : true
        },
        select: {
            id : true,
            courseName : true,
            thumbnail :true,
            courseType:true,
            describe:true,
            learning : true
        }
    })
}

const remove = async (user, courseId) => {
    courseId = validate(getCourseValidation, courseId);

    const totalInDatabase = await prismaClient.course.count({
        where: {
            username: user.username,
            id: courseId
        }
    });

    if (totalInDatabase !== 1) {
        throw new ResponseError(404, "course is not found");
    }

    return prismaClient.course.delete({
        where: {
            id: courseId
        }
    });
}

// const search = async (user, request) => {
//     request = validate(searchCourseValidation, request);

//     // 1 ((page - 1) * size) = 0
//     // 2 ((page - 1) * size) = 10
//     const skip = (request.page - 1) * request.size;

//     const filters = [];

//     filters.push({
//         username: user.username
//     })

   
//     if (request.courseName) {
//         filters.push({
//             courseName: {
//                 contains: request.courseName
//             }
//         });
//     }
    
//     if (request.courseType) {
//         filters.push({
//             courseType: {
//                 contains: request.courseType
//             }
//         });
//     }
    

//     const courses = await prismaClient.course.findMany({
//         where: {
//             AND: filters
//         },
//         take: request.size,
//         skip: skip
//     });

//     const totalItems = await prismaClient.course.count({
//         where: {
//             AND: filters
//         }
//     });

//     return {
//         data: courses,
//         paging: {
//             page: request.page,
//             total_item: totalItems,
//             total_page: Math.ceil(totalItems / request.size)
//         }
//     }
// }

export default {
    create,
    get,
    update,
    remove
}

