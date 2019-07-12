const app = require("./app");

//Raising the app to listen to port
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Express server is running on port ", port);
});

