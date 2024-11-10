import express from "express";
import dotenv from "dotenv";
import { connectDB } from './config/db.js';


dotenv.config();

const app = express();

app.post("/books", async (req, res) => {
    const product = req.body; // data sent by the user
    
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please provided all fields" });
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({ success: true, message: newProduct });
    } catch (error) {
        console.error("Error in Create product", error.message);
        return res.status(500).json({ success: false, message: "Server error" });
    }

});


app.listen(5500, () => {
    connectDB();
    console.log("Server started at https://localhost:5500")
});

// mvvR7xXbwIknJPpO