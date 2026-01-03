import express from "express";
import ToDoRoutes from "./routes/ToDoRoute.js";
import cors from "cors";
const app  = express();
app.use(cors());
app.use(express.json());
app.use("/api/tasks",ToDoRoutes);
export default app;