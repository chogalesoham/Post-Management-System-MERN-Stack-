const expess = require("express");
const PORT = process.env.PORT || 8080;
const app = expess();

app.get("/", (req, res) => {
  res.json("Server Start");
});

app.listen(PORT, () => {
  console.log("Server Start at: ", PORT);
});
