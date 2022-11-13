import { defineStore } from "pinia";
// Dữ liệu chung của VueStore
// Lưu trữ account đăng nhập
export const useAccountStore = defineStore('account',{
    state: () => ({user:null})
})

export const useBookStore = defineStore('book',{
    state: () => ({book:null})
})