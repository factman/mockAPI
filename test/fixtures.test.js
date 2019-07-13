const request = require("supertest");
//const connection = require("../connection/connectdb");

const app = require("../app");

describe('Test the Route for Fixtures', () => {
    test("It should response the GET method to display all fixtures", async () => {
        const res = await request(app).get('/api/fixtures');
        expect(res.statusCode).toContain('Fixtures');
    });
    
    test("It should response the GET method to display a particular fixture", async () => {
        const res = await request(app).get('/api/fixtures/:fID');
        expect(res.statusCode).toBe(200);
    });

    test("It should response the POST method to create fixture", async () => {
        const res = await request(app).post('api/fixtures/create');
        expect(res.statusCode).toBe(200);
    });

    test("It should response the PUT method to edit a particular fixture", async () => {
        const res = await request(app).put('api/fixtures/edit/:fID');
        expect(res.statusCode).toBe(200);
    });

    test("It should response the DELETE method to delete a particular fixture", async () => {
        const res = await request(app).delete('api/fixtures/delete/:fID');
        expect(res.statusCode).toBe(200);
    });
});

//Raising the app to listen to port
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Express server is running on port ", port);
});

