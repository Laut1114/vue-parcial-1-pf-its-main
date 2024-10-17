<script setup lang="ts">
// importaciones locales
import type { Book } from '@/models/BookModel'
import { useCartStore } from '@/stores/CarritoStore';

const cartStore = useCartStore();
const cartBook: Book[] = cartStore.getAllBooks();

function deleteBookCart(book: Book) {
    cartStore.removeBook(book);
}


</script>

<template>
    <div class="book-card">
        <div v-for="book in cartBook" :key="book.id" class="item-wrapper">
            <div class="img-cover">
                <img :src="book.coverImg" v-bind:alt="book.title">
            </div>
            <div class="book-info">
                <div class="book-title">{{ book.title }}</div>
                <div class="book-author">{{ book.author }}</div>
                <div class="price">$ {{ book.price }}.00</div>
                <button class="delete-icon" @click="deleteBookCart(book)">Eliminar</button>
            </div>
        </div>
        <div class="totalPrice">
            <p>{{  }}</p>
        </div>
    </div>
</template>

<style scoped>
.book-card {
    height: 80%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
}

.item-wrapper {
    display: flex;
    flex-direction: row;
    
}

.img-cover {
    display: flex;
    flex-direction: row;
    width: 20%;
}

.img-cover img {
    height: 80px
}

.book-info {
    display: flex;
    flex-direction: column;
}

.delete-icon {
    width: 60px;
    border: 1px solid red;
    border-radius: 5px;
    font-size: 14px;
}

.totalPrice {
    bottom: 0;
}

</style>
