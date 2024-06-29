const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("     Hello GDSC bootCamp  (-_-) ");
});

const port = 3000;
app.listen(port, () => {
  console.log(` Your server is Running on: ${port}`);
});
