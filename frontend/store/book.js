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
        set((state) => ({ products: [...state.books, data.data] }));
        return {success: true, message:"Book created successfully"};
    }
}));