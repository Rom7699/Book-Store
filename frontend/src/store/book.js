import { create } from "zustand";

export const useBookStore = create((set, get) => ({
    books: [],
    setBooks: (books) => set({ books }),
    fetchBooks: async () => {
        try {
            const res = await fetch("/api/books");
            const data = await res.json();
            set({ books: data.message });
        } catch (error) {
            console.error("Error fetching books:", error);
        }
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
    },
    createBook: async (newBook) => {
        for (let key in newBook) {
            if (!newBook[key]) {
                return { success: false, message: "Please fill in all fields" };
            }
        }
        const res = await fetch("/api/books", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newBook)
        });
        const data = await res.json();
        if (!data.success) return { success: false, message: data.message };

        await get().fetchBooks(); // ✅ Call fetchBooks() from the store
        return { success: true, message: "Book created successfully" };
    },
    updateBook: async (bid, updatedBook) => {
        const res = await fetch(`/api/books/${bid}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedBook),
        });
        const data = await res.json();
        if (!data.success) return { success: false, message: data.message };

        await get().fetchBooks(); // ✅ Call fetchBooks() from the store
        return { success: true, message: data.message };
    },
}));
