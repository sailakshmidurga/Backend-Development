const express = require("express");
const app = express();
const FirstRoute = require("./Routes/FirstRoute");
app.use("/",FirstRoute);
app.listen(9000,(req,res) => {
  console.log("Server started");
})
