const expess = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = expess();
require("./Models/db.js");
const PostRouter = require("./Routes/post-router");

app.use(bodyParser.json());

app.use("/api/post", PostRouter);

app.listen(PORT, () => {
  console.log("Server is Running at: ", PORT);
});
