/** @format */

const express = require("express");
const app = express();
var queue = require("express-queue");
// const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const postadmin = require("./routes/postadmin");
const getadmin = require("./routes/getadmin");
const postemployee = require("./routes/postemployee");
const getemployee = require("./routes/getemployee");
const config = require("config");

require("./prod")(app);
// Mongodb connection
const db = config.get("db");
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch("db not connected..!");
// mongoose
//   .connect("mongodb://localhost/Hr_portal")
//   .then(() => {
//     console.log("connected to mongodb");
//   })
//   .catch((err) => {
//     console.log(`${err}`);
//   });

app.use(express.json());
app.use("/api/admin/get", getadmin);
app.use("/api/employee/get", getemployee);
app.use(queue({ activeLimit: 1, queuedLimit: 1 }));
app.use("/api/admin/post", postadmin);
app.use("/api/employee/post", postemployee);
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.set("view engine", "ejs");
const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Listening to port 🚀 ${port}`);
});
