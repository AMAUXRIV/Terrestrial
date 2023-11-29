import {
    
    createTestCourse,
    createTestUser,
    getTestCourse,
    removeAllTestCourses,
    removeTestUser
} from "./test-util.js";
import supertest from "supertest";
import {web} from "../src/application/web.js";


describe('POST /api/courses', function () {
    beforeEach(async () => {
        await createTestUser();
    })

    afterEach(async () => {
        await removeAllTestCourses();
        await removeTestUser();
    })

    it('should can create new course', async () => {
        const result = await supertest(web)
            .post("/api/courses")
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
            .post("/api/courses")
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

describe('GET /api/courses/:coursesId', function () { //Error Deck
    beforeEach(async () => {
        await createTestUser();
        await createTestCourse();
    })

    afterEach(async () => {
        await removeAllTestCourses();
        await removeTestUser();
    })

    it('should can get course', async () => {
        const testCourse = await getTestCourse();

        const result = await supertest(web)
            .get("/api/courses/" + testCourse.id)
            .set('Authorization', 'test');

        expect(result.status).toBe(200);
        expect(result.body.data.id).toBe(testCourse.id);
        expect(result.body.data.courseName).toBe("Belajar HTML");
        expect(result.body.data.thumbnail).toBe("ok");
        expect(result.body.data.courseType).toBe("Frontend");
        expect(result.body.data.describe).toBe("ini adalah sebuah deskripsi");
        expect(result.body.data.learning).toBe("ini adalah sebuah materi dengan total 1000 kata");
    });

    it('should return 400 if course id is not found', async () => {
        const testcourse = await getTestCourse();

        const result = await supertest(web)
            .get("/api/courses/" + (testcourse.id + 1))
            .set('Authorization', 'test');

        expect(result.status).toBe(400);
    });
});

describe('PUT /api/courses/:coursesId', function () { //Eror Deck
    beforeEach(async () => {
        await createTestUser();
        await createTestCourse();
    })

    afterEach(async () => {
        await removeAllTestCourses();
        await removeTestUser();
    })

    it('should can update existing course', async () => {
        const testcourse = await getTestCourse();

        const result = await supertest(web)
            .put('/api/courses/' + testcourse.id)
            .set('Authorization', 'test')
            .send({
                courseName : "Belajar HTML",
                thumbnail : "ok",
                courseType : "Frontend",
                describe : "ini adalah sebuah deskripsi",
                learning : "ini adalah sebuah materi dengan total 1000 kata"
            });

        expect(result.status).toBe(200);
        expect(result.body.data.id).toBe(testcourse.id);
        expect(result.body.data.courseName).toBe("Belajar HTML");
        expect(result.body.data.thumbnail).toBe("ok");
        expect(result.body.data.courseType).toBe("Frontend");
        expect(result.body.data.describe).toBe("ini adalah sebuah deskripsi");
        expect(result.body.data.learning).toBe("ini adalah sebuah materi dengan total 1000 kata");
    });

    it('should reject if request is invalid', async () => {
        const testcourse = await getTestCourse();

        const result = await supertest(web)
            .put('/api/courses/' + testcourse.id)
            .set('Authorization', 'test')
            .send({
                courseName : "",
                thumbnail : "",
                courseType : "Frontend",
                describe : "",
                learning : ""
            });

        expect(result.status).toBe(400);
    });

    it('should reject if course is not found', async () => {
        const testcourse = await getTestCourse();

        const result = await supertest(web)
            .put('/api/courses/' + (testcourse.id + 1))
            .set('Authorization', 'test')
            .send({
                courseName : "Bel",
                thumbnail : "ok",
                courseType : "Frontend",
                describe : "ini adalah sebuah deskripsi",
                learning : "ini adalah sebuah materi dengan total 1000 kata"
            });

        expect(result.status).toBe(400);
    });
});

describe('DELETE /api/courses/:coursesId', function () { //Error Deck
    beforeEach(async () => {
        await createTestUser();
        await createTestCourse();
    })

    afterEach(async () => {
        await removeAllTestCourses();
        await removeTestUser();
    })

    it('should can delete course', async () => {
        let testcourse = await getTestCourse();
        const result = await supertest(web)
            .delete('/api/courses/' + testcourse.id)
            .set('Authorization', 'test');

        expect(result.status).toBe(200);
        expect(result.body.data).toBe("OK");

        testcourse = await getTestCourse();
        expect(testcourse).toBeNull();
    });

    it('should reject if course is not found', async () => {
        let testcourse = await getTestCourse();
        const result = await supertest(web)
            .delete('/api/courses/' + (testcourse.id + 1))
            .set('Authorization', 'test');

        expect(result.status).toBe(400);
    });
});

// describe('GET /api/courses', function () {
//     beforeEach(async () => {
//         await createTestUser();
//         await createManyTestCourses();
//     })

//     afterEach(async () => {
//         await removeAllTestCourses();
//         await removeTestUser();
//     })

//     it('should can search without parameter', async () => {
//         const result = await supertest(web)
//             .get('/api/courses')
//             .set('Authorization', 'test');

//         expect(result.status).toBe(200);
//         expect(result.body.data.length).toBe(10);
//         expect(result.body.paging.page).toBe(1);
//         expect(result.body.paging.total_page).toBe(2);
//         expect(result.body.paging.total_item).toBe(15);
//     });

//     it('should can search to page 2', async () => {
//         const result = await supertest(web)
//             .get('/api/courses')
//             .query({
//                 page: 2
//             })
//             .set('Authorization', 'test');

//         logger.info(result.body);

//         expect(result.status).toBe(200);
//         expect(result.body.data.length).toBe(5);
//         expect(result.body.paging.page).toBe(2);
//         expect(result.body.paging.total_page).toBe(2);
//         expect(result.body.paging.total_item).toBe(15);
//     });

//     it('should can search using courseName', async () => {
//         const result = await supertest(web)
//             .get('/api/courses')
//             .query({
//                 courseName: "Belajar HTML"
//             })
//             .set('Authorization', 'test');

//         logger.info(result.body);

//         expect(result.status).toBe(200);
//         expect(result.body.data.length).toBe(6);
//         expect(result.body.paging.page).toBe(1);
//         expect(result.body.paging.total_page).toBe(1);
//         expect(result.body.paging.total_item).toBe(6);
//     });

//     it('should can search using courseType', async () => {
//         const result = await supertest(web)
//             .get('/api/courses')
//             .query({
//                 courseType: "Frontend"
//             })
//             .set('Authorization', 'test');

//         logger.info(result.body);

//         expect(result.status).toBe(200);
//         expect(result.body.data.length).toBe(6);
//         expect(result.body.paging.page).toBe(1);
//         expect(result.body.paging.total_page).toBe(1);
//         expect(result.body.paging.total_item).toBe(6);
//     });

// });
