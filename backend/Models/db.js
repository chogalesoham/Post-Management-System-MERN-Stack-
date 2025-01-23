const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected Succefully");
  })
  .catch((error) => {
    console.log("Eroor Connection MongoDB", error);
  });
