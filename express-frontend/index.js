const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Express frontend!");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Express app listening at http://127.0.0.1:${port}`);
});
