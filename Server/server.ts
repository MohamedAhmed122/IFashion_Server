import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";

// Routes
import StoreRoute from "./routers/store";

// Run Project: ts-node Server/server
// Import Data: ts-node Server/seeder

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("APP is Running....");
});

connectDB();

// Routes
app.use("/api/stores", StoreRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server's running in ${process.env.NODE_ENV} on Port: ${PORT} `);
});
