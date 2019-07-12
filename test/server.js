const jest = require("jest");
const request = require("supertest");

const app = require("../app");

describe('Test the route path', () => {
    test("")
});

//Raising the app to listen to port
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Express server is running on port ", port);
});

