import express from "express";
import {
  createToDos,
  getToDos,
  UpdateToDos,
  DeleteToDos,
}
 from "../controllers/ToDoController.js";
const router = express.Router();
 router.post("/",createToDos);
 router.get("/",getToDos);
 router.put("/:id",UpdateToDos);
 router.delete("/:id",DeleteToDos);
 export default router;