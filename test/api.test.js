const request = require("supertest");
//const connection = require("../connection/connectdb");

const app = require("../app");

describe('Test the API route', () => {
    test("It should response the GET method to display Welcome API", async () => {
        const res = await request(app).get('/api');
        expect(res.statusCode).toBe(200);
    });
});

/* describe('Test the Reset all Collections and Reset Database', () => {
    test("It should response the POST method to Reset Users collection", async () => {
        const res = await request(app).post('/api/reset/user');
        expect(res.statusCode).toBe(200);
    });
    
    test("It should response the POST method to Reset Team collection", async () => {
        const res = await request(app).post('/api/reset/teams');
        expect(res.statusCode).toBe(200);
    });

    test("It should response the POST method to Reset Fixtures collection", async () => {
        const res = await request(app).post('/api/reset/fixtures');
        expect(res.statusCode).toBe(200);
    });

    test("It should response the POST method to Reset All Database", async () => {
        const res = await request(app).post('/api/reset/all');
        expect(res.statusCode).toBe(200);
    }); 
}); */

//Raising the app to listen to port
const port = process.env.PORT || 6000;

app.listen(port, () => {
    console.log("Express server is running on port ", port);
});

