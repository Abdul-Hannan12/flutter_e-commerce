// IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

// IMPORTS FROM FILES
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");

// INITIALIZATIONS
const app = express();
const PORT = 3000;
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const DB = `mongodb+srv://${username}:${password}@cluster0.hu7ex4c.mongodb.net/?retryWrites=true&w=majority`;

// MIDDLEWARES
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);

// CONNECTIONS
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

// STARTING SERVER
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening at port ${PORT}`);
});
