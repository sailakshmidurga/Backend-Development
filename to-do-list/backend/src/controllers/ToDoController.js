import mongoose from "mongoose";
import ToDoModel from "../models/ToDoModel";
export const getToDos = async(req,res) => {
  try{
    const ToDos = await ToDoModel.find();
  res.status(200).json({success:true,data:ToDos});
  }
  catch(error){
    res.status(500).json({success:false,message:"No Data Found"});
  }
}
export const createToDos = async(req,res) => {
  try{
    const {title} = req.body();
    const ToDo = await ToDoModel.create({title});
  res.status(201).json({success:true,data:ToDos});
  }
  catch(error){
    res.status(500).json({success:false,message:"Failed to Create Data"});
  }
}
export const UpdateToDos = async(req,res) => {
  try{
    const todo = await ToDoModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true}
    );
    res.json({
      success:true,
      data:todo,
    });
  }
  catch(error){
    res.status(500).json({success:false,message:"Update Failed"});
  }
}
export const DeleteToDos = async(req,res) => {
  try{
      await ToDoModel.findByIdAndDelete(
      req.params.id,
    );
    res.json({
      success:true,
      message:"Data Deleted",
    });
  }
  catch(error){
    res.status(500).json({success:false,message:"Delete Failed"});
  }
}