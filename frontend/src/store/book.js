import { create } from "zustand";

export const useBookStore = create((set) => ({
    books: [],
    setBooks: (books) => set({ books }),
    createBook: async (newBook) => {
        for (let key in newBook) {
            if (!newBook[key]) {
                return { success: false, message: "Please fill in all fields" };
            }
        }
        const res = await fetch("/api/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBook)
        });
        const data = await res.json();
        set((state) => ({ books: [...state.books, data.data] }));
        return { success: true, message: "Book created successfully" };
    },
    fetchBooks: async () => {
        const res = await fetch("/api/books");
        const data = await res.json();

        // Assuming data is {success: true, message: [...]}
        const booksArray = data.message;
        console.log(booksArray); // Should output the array of books
        set({ books: booksArray });

        // console.log("Fetched books: ", booksArray);
    },
    deleteBook: async (bid) => {
        const res = await fetch(`/api/books/${bid}`, {
			method: "DELETE",
		});
		const data = await res.json();
		if (!data.success) return { success: false, message: data.message };

		// update the ui immediately, without needing a refresh
		set((state) => ({ books: state.books.filter((book) => book._id !== bid) }));
		return { success: true, message: data.message };
    }
}));