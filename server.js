//1. import dependencies (express)

const express = require("express");
const app = express();
const port = 8000;

//2. Configuration
// make sure these lines are above any app.get or app.post codes
app.use(express.json());
// recognize JSON object
app.use(express.urlencoded({extended: true}) );
// to recognize the incoming Request object as strings or arrays

const Routes = require("./routes/user.routes")
Routes(app)

//4. Listen to the port
app.listen(port, () => console.log("listening on port 8000"));