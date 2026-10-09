const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));

 

const ADMIN_USER = "admin";

const ADMIN_PASSWORD = "admin123";

app.post("/login", (req, res) => {

const { username, password } = req.body;

 

if (

username === ADMIN_USER &&

password === ADMIN_PASSWORD

) {

res.send("<h1>Login Successful</h1>");

} else {

res.status(401).send("<h1>Invalid Credentials</h1>");

}

});

app.listen(3000, () => {
26
console.log("Running on port 3000");
27
});
