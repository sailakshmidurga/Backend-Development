import app from "./app.js";
import ConnectDB from "./config/db.js";

ConnectDB();
const PORT = 5000;
app.listen(()=>{
  console.log(`Server running at port ${PORT}`);
})