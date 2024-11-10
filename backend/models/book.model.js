import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
        author: {
            type: String,
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
		price: {
			type: Number,
			required: true,
		},
        genre: {
            type: String,
            required: true,
        },
		image: {
			type: String,
			required: false,
		},
	},
	{
		timestamps: true, // createdAt, updatedAt
	}
);

const Book = mongoose.model("Book", bookSchema);

export default Book;