import mongoose from "mongoose";
const ToDoSchema = new mongoose.Schema({
  title:{
    type : String,
    required : true,
  }
})
const ToDoModel = mongoose.model("ToDoModel",ToDoSchema);
export default ToDoModel;