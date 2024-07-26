const express = require("express");
// creating instance of our application
const app = express();

// getting something from the server
app.get("/", (req, res) => {
  return res.send("hellow world");
});
app.get("/greetings", (req, res) => {
  return res.send("good evening for coming around");
});
app.listen(3000, () => {
  console.log("app is running");
});
