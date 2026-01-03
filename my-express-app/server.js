// const express = require("express");
import express from 'express';
import { getStudents } from './controllers/studentController.js';
import studentRouters from './routers/studentRoutes.js';
const app = express();

app.use('/',studentRouters);
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
