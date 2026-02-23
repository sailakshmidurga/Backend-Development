const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

let users = [
  {
    id:1,
    name:"Sai",
    email:"Sai@gmail.com",
  },
  {
    id:2,
    name:"lohi",
    email:"lohi@gmail.com",
  },
];
app.post("/set-data", (req, res) => {
  let { id, name, email } = req.body;
  id = Number(id);

  const exists = users.some((u) => u.id === id);
  if (exists) {
    return res.status(400).json({
      message: "User with this ID already exists",
    });
  }

  users.push({ id, name, email });

  res.status(201).json({
    message: "User created",
    users,
  });
});


app.get("/get-data",(req,res)=>{
  try{
    res.json(users);
  }
  catch(err){
    res.status(500).json("Users Not found");
  }
});

app.put("/update-data/:id", (req, res) => {
  try {
    const id = Number(req.params.id);
    const { name, email } = req.body;

    const user = users.find((u) => u.id === id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = name;
    user.email = email;

    res.json({
      message: "User updated successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating user",
      error: error.message,
    });
  }
});

app.delete("/delete-data/:id",(req,res) => {
try{
    const id = Number(req.params.id);
  const index = users.findIndex((u)=>u.id === id);
  if(index === -1){
       return res.status(404).json({
      message:"User not Found",
    });
  }

  users.splice(index,1);
  res.json({
    message:"User deleted successfully",
    users,
  });
} catch(err){
  res.status(500).json({
    message:"Error deleting user",
    error:error.message,
  });
}
});


app.listen(9000,()=>{
  console.log("Server started");
});