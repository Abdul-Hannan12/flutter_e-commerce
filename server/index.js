// IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");

// IMPORTS FROM FILES
const authRouter = require("./routes/auth");

// INITIALIZATIONS
const app = express();
const PORT = 3000;
const DB =
  "mongodb+srv://abdulhannan:flutteramazon123@cluster0.hu7ex4c.mongodb.net/?retryWrites=true&w=majority";

// MIDDLEWARES
app.use(authRouter);

// CONNECTIONS
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening at port ${PORT}`);
});
