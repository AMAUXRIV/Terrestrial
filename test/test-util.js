import {prismaClient} from "../src/application/database.js";
import bcrypt from "bcrypt";

export const removeTestUser = async () => {
    await prismaClient.user.deleteMany({
        where: {
            username: "test"
        }
    });
}

export const createTestUser = async () => {
    await prismaClient.user.create({
        data: {
            username: "test",
            password: await bcrypt.hash("rahasia", 10),
            name: "test",
            token: "test"
        }
    });
}

export const getTestUser = async () => {
    return prismaClient.user.findUnique({
        where: {
            username: "test"
        }
    });
}



export const removeAllTestCourses = async () => {
    await prismaClient.course.deleteMany({
        where: {
            username: 'test'
        }
    });
}

export const createTestCourse = async () => {
    await prismaClient.course.create({
        
        data: {
            username: "test",
            courseName : "Belajar HTML",
            thumbnail : "ok",
            courseType : "Frontend",
            describe : "ini adalah sebuah deskripsi",
            learning : "ini adalah sebuah materi dengan total 1000 kata"
        }
    })
}

export const createManyTestCourses = async () => {
    for (let i = 0; i < 15; i++) {
        await prismaClient.course.create({
            data: {
                username: `test ${i}`,
                courseName: `test ${i}`,
                thumbnail: `test ${i}`,
                courseType: "Frontend",
                describe: `ini deskripsi ke ${i}`,
                learning: `ini belajar ke ${i}`
            }
        })
    }
}

export const getTestCourse = async () => {
    return prismaClient.course.findFirst({
        where: {
            username: 'test'
        }
    })
}