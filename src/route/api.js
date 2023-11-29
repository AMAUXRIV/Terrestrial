import express from "express";
import userController from "../controller/user-controller.js";
import courseController from "../controller/course-controller.js";
import {authMiddleware} from "../middleware/auth-middleware.js";

const userRouter = new express.Router();
userRouter.use(authMiddleware);

// User API
userRouter.get('/api/users/current', userController.get);
userRouter.patch('/api/users/current', userController.update);
userRouter.delete('/api/users/logout', userController.logout);

// Course API
userRouter.post('/api/courses', courseController.create);
userRouter.get('/api/courses/:coursesId', courseController.get);
userRouter.put('/api/courses/:coursesId', courseController.update);
userRouter.delete('/api/courses/:coursesId', courseController.remove);
// userRouter.get('/api/courses', courseController.search);



export {
    userRouter
}