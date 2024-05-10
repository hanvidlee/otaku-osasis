const express = require("express");
var cors = require("cors");

const app = express();
app.use(cors());
app.use(express.static("public"));

app.listen(8080, () => {
  console.log("listening on 8080");
});
