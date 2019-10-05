const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const requireAuth = require("./middleware/requireAuth");

const app = express();

const posts = require("./routes/posts");
const authRoutes = require("./routes/authRoutes");

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/posts_db", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log(">>> MongoDB Connected :)");
  });

app.use("/api", posts);
app.use("/auth", authRoutes);

app.get("/", requireAuth, (req, res) => {
  res.status(200).json(`Your email: ${req.user.email}`);
});

const port = 4000;

app.listen(port, () => {
  console.log(`>>> Server is runnig at port ${port}`);
});
