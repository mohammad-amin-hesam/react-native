const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const posts = require("./routes/posts");

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/posts_db", {
    useNewUrlParser: true
  })
  .then(() => {
    console.log(">>> MongoDB Connected :)");
  });

app.use("/api", posts);

app.get("/", (req, res) => {
  res.status(200).json({ msg: "that api works :)" });
});

const port = 4000;

app.listen(port, () => {
  console.log(`>>> Server is runnig at port ${port}`);
});
