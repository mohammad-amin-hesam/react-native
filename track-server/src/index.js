const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi there");
});

const port = 4000;

app.listen(port, () => {
  console.log(`>>> Server is runnig at ${port}`);
});
