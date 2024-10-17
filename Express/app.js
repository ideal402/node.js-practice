const express = require("express");

const app = express();

const checkAuth = (req, res, next) => {
    console.log("admin permission");
    next()
}
const getUser = (req, res) => {
    res.send("here is user info");
}

app.get("/user",checkAuth, getUser);

app.get("/", (req, res)=>{
    res.send("hello world!");
})

app.listen(5050,() => {
    console.log("server is on 5050");
});