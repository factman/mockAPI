const request = require("supertest");
//const connection = require("../connection/connectdb");

const app = require("../app");

describe('Test the Route for Teams', () => {
    test("It should response the GET method to display all teams", async () => {
        const res = await request(app).get('/api/teams');
        expect(res.statusCode).toContain('Teams');
    });
    
    test("It should response the GET method to display a particular team", async () => {
        const res = await request(app).get('/api/teams/:tID');
        expect(res.statusCode).toBe(200);
    });

    test("It should response the POST method to create team", async () => {
        const res = await request(app).post('api/teams/create');
        expect(res.statusCode).toBe(200);
    });

    test("It should response the PUT method to edit a particular team", async () => {
        const res = await request(app).put('api/teams/edit/:tID');
        expect(res.statusCode).toBe(200);
    });

    test("It should response the DELETE method to delete a particular team", async () => {
        const res = await request(app).delete('api/teams/delete/:tID');
        expect(res.statusCode).toBe(200);
    });
});

//Raising the app to listen to port
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log("Express server is running on port ", port);
});

