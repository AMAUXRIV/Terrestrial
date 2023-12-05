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
userRouter.post('/api/contacts', courseController.create);
userRouter.get('/api/contacts/:contactId',courseController.get);



export {
    userRouter
}