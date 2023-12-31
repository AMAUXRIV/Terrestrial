import {  
    createTestContact,
    createTestUser,
    getTestContact,
    removeAllTestContacts,
    removeTestUser
} from "./test-util.js";
import supertest from "supertest";
import {web} from "../src/application/web.js";

describe('POST /api/contacts', function () {
    beforeEach(async () => {
        await createTestUser();
    })

    afterEach(async () => {
        await removeAllTestContacts();
        await removeTestUser();
    })

    it('should can create new contact', async () => {
        const result = await supertest(web)
            .post("/api/contacts")
            .set('Authorization', 'test')
            .send({
                courseName : "Belajar HTML",
                thumbnail : "ok",
                courseType : "Frontend",
                describe : "ini adalah sebuah deskripsi",
                learning : "ini adalah sebuah materi dengan total 1000 kata"
            });

        expect(result.status).toBe(200);
        expect(result.body.data.id).toBeDefined();
        expect(result.body.data.courseName).toBe("Belajar HTML");
        expect(result.body.data.thumbnail).toBe("ok");
        expect(result.body.data.courseType).toBe("Frontend");
        expect(result.body.data.describe).toBe("ini adalah sebuah deskripsi");
        expect(result.body.data.learning).toBe("ini adalah sebuah materi dengan total 1000 kata");
    });

    it('should reject if request is not valid', async () => {
        const result = await supertest(web)
            .post("/api/contacts")
            .set('Authorization', 'test')
            .send({
                courseName : "",
                thumbnail : "",
                courseType : "",
                describe : "",
                learning : ""
            });

        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });
});



describe('GET /api/contacts/:contactId', function () {
    beforeEach(async () => {
        await createTestUser();
        await createTestContact();
    })

    afterEach(async () => {
        await removeAllTestContacts();
        await removeTestUser();
    })

    it('should can get contact', async () => {
        const testContact = await getTestContact();

        const result = await supertest(web)
            .get("/api/contacts/" + testContact.id)
            .set('Authorization', 'test');

        expect(result.status).toBe(200);
        expect(result.body.data.id).toBe(testContact.id);
        expect(result.body.data.first_name).toBe(testContact.first_name);
        expect(result.body.data.last_name).toBe(testContact.last_name);
        expect(result.body.data.email).toBe(testContact.email);
        expect(result.body.data.phone).toBe(testContact.phone);
    });

    it('should return 404 if contact id is not found', async () => {
        const testContact = await getTestContact();

        const result = await supertest(web)
            .get("/api/contacts/" + (testContact.id + 1))
            .set('Authorization', 'test');

        expect(result.status).toBe(404);
    });
});