const express = require("express");
const axios = require("axios");
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({
  origin:"http://localhost:5173"
}));
app.get('/get-joke',async(req,res) => {
try{
const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
res.json(response.data);
}catch(err){
  res.status(500).send("Error");
}
});
app.listen(3000,()=>{
  console.log("Server running on port 3000");
})