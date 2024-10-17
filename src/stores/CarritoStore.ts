import { defineStore } from "pinia";
import type { Book } from '@/models/BookModel'
import type { CartState } from "@/models/cartModel";

export const useCartStore = defineStore({
    id: 'carrito',
    state: () : CartState => ({
        data: [],
    }),
    actions: {
        addBook(book: Book):  void {
            this.data.push(book);
        },
        removeBook(book: Book): void {
            this.data = this.data.filter((item) => item.id !== book.id);            
        },
        getAllBooks(): Book[] {
            return this.data;
        },
    }
})
