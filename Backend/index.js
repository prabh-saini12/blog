const express = require("express");
const PORT = 3000;
const ConnectToMongo = require("./db");
require("dotenv").config();
const app = express();

app.use(express.json());

ConnectToMongo();
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/v1/auth", require("./routes/user.route"));

app.listen(PORT, () => {
  console.log("App Running");
});
