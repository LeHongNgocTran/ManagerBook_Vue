import { defineStore } from "pinia";
// Dữ liệu chung của VueStore
// Lưu trữ account đăng nhập
export const useAccountStore = defineStore('account',{
    state: () => ({user:null})
})

export const useBookStore = defineStore('book',{
    state: () => ({
        book: null,
        length: 0
    })
})

export const usePhieuMuonStore = defineStore('phieumuon',{
    state: () => ({
        phieumuon:null,
        length:0
    })
})
export const usePhieuGiaHanStore = defineStore('phieugiahan',{
    state: () => ({
        phieugiahan: null,
        length: 0})
});
