import courseService from "../service/course-service.js";


const create = async (req, res, next) => {
    try {
        const user = req.user;
        const request = req.body;
        const result = await courseService.create(user, request);
        res.status(200).json({
            data: result
        })
    } catch (e) {
        next(e);
    }
}

const get = async (req, res, next) => {
    try {
        const user = req.user;
        const courseId = req.params.courseId;
        const result = await courseService.get(user, courseId);
        res.status(200).json({
            data: result
        })
    } catch (e) {
        next(e);
    }
}

const update = async (req, res, next) => {
    try {
        const user = req.user;
        const courseId = req.params.courseId;
        const request = req.body;
        request.id = courseId;

        const result = await courseService.update(user, request);
        res.status(200).json({
            data: result
        })
    } catch (e) {
        next(e);
    }
}

const remove = async (req, res, next) => {
    try {
        const user = req.user;
        const courseId = req.params.courseId;

        await courseService.remove(user, courseId);
        res.status(200).json({
            data: "OK"
        })
    } catch (e) {
        next(e);
    }
}

// const search = async (req, res, next) => {
//     try {
//         const user = req.user;
//         const request = {
//             name: req.query.name,
//             email: req.query.email,
//             phone: req.query.phone,
//             page: req.query.page,
//             size: req.query.size
//         };

//         const result = await courseService.search(user, request);
//         res.status(200).json({
//             data: result.data,
//             paging: result.paging
//         });
//     } catch (e) {
//         next(e);
//     }
// }

export default {
    create,
    get,
    update,
    remove
}
