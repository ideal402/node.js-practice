const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const indexRouter = require("./routes/index");

//기본 세팅
const app = express();
app.use(bodyParser.json());
app.use("/api", indexRouter);

const mongoURI = "mongodb://localhost:27017/todo-demo";

mongoose.connect(mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.log("DB connection fail", error);
  });

app.listen(5050, () => {
  console.log("server on 5050");
});
