import {prismaClient} from "../src/application/database.js";
import bcrypt from "bcrypt";

export const removeTestUser = async () => {
    await prismaClient.user.deleteMany({
        where: {
            email: "test"
        }
    });
}

export const createTestUser = async () => {
    await prismaClient.user.create({
        data: {
            email: "test",
            password: await bcrypt.hash("rahasia", 10),
            name: "test",
            token: "test"
        }
    });
}

export const getTestUser = async () => {
    return prismaClient.user.findUnique({
        where: {
            email: "test"
        }
    });
}



export const removeAllTestContacts = async () => {
    await prismaClient.contact.deleteMany({
        where: {
            email: 'test'
        }
    });
}

export const createTestContact = async () => {
    await prismaClient.contact.create({
        data: {
            email: "test",
            courseName : "Belajar HTML",
            thumbnail : "ok",
            courseType : "Frontend",
            describe : "ini adalah sebuah deskripsi",
            learning : "ini adalah sebuah materi dengan total 1000 kata"
        }
    })
}

export const getTestContact = async () => {
    return prismaClient.contact.findFirst({
        where: {
            email: 'test'
        }
    })
}