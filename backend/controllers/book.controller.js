import mongoose from "mongoose";
import Book from "../models/book.model.js";

export const getBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json({ success: true, message: books });
    } catch (error) {
        console.log("error in fetching books:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

export const createBook = async (req, res) => {
    const book = req.body; // data sent by the user
    if (!book.name || !book.price) {
        return res.status(400).json({ success: false, message: "Please provided all fields" });
    }

    const newBook = new Book(book);

    try {
        await newBook.save();
        res.status(201).json({ success: true, message: newBook });
    } catch (error) {
        console.error("Error in Create book", error.message);
        return res.status(500).json({ success: false, message: "Server error" });
    }

}

export const updateBook = async (req, res) => {
    const { id } = req.params;
    const book = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ success: false, message: "Invalid book id" });
    }

    try {
        const updatedBook = await Book.findByIdAndUpdate(id, book, { new: true });
        res.status(200).json({success:true, message: updatedBook});
    } catch (error) {
        console.error("Error updating the book", error.message);
        return res.status(500).json({ success: false, Data: "Server error" });
    }
}

export const deleteBook = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ success: false, message: "Invalid book id" });
    }
    
    try {
        await Book.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "book deleted" });
    } catch (error) {
        console.error("Error in deleting book", error.message);
        return res.status(500).json({ success: false, message: "Server error" });
    }
}