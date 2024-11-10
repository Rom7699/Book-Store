import express from "express";
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import bookRoutes from "./routes/book.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json()); // allows to use JSON data in req.body

app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at https://localhost:" + PORT)
});

