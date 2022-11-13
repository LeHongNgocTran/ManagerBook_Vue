// Quản lý đường dẫn của Admin
import Admin from "@/layouts/LayoutAdmin/AdminScreen.vue";
import Dashboard from '../pages/Admin/Dashboard.vue';

import ListBook from "../pages/Admin/ListBook.vue";
import AddBook from "../pages/Admin/AddBook.vue";
import EditBook from "../pages/Admin/EditBook.vue";

import ListRentBook from "../pages/Admin/ListRentBook.vue";
import ListRenewalBook from "../pages/Admin/BookRenewal.vue";
import ListMissBook from "../pages/Admin/ListMissBook.vue";
import InforLendBook from "../pages/Admin/InforLendBook.vue";
import FormLendBook from "../layouts/LayoutAdmin/FormLendBook.vue";
import DuyetPhieuGiaHan from "../pages/Admin/duyetphieugiahan.vue";

export default [
    {
        path: "/admin",
        name: 'admin',
        component: Admin,
        children: [
            {
                // Trang tổng quan
                path: "",
                name: 'dashboard',
                component: Dashboard
            },
            {   
                //Trang danh sách sách
                path: "listbook",
                name: 'listbook',
                component: ListBook,
               
            },
            {
                //Trang thêm sách vào hệ thống
                path: 'addbook',
                name: 'addbook',
                component: AddBook
            },
            {
                path: 'editbook/:id',
                name: 'editbook',
                component: EditBook,
                params: true
            },
            {
                // Trang danh sách sinh viên mượn sách
                path: 'rentbook',
                name : "listrentbook",
                component: ListRentBook,
               
            },
            {
                // Trang danh sách sinh viên gia hạn
                path: 'renewalbook',
                name: 'listrenewalbook',
                component: ListRenewalBook
            },
            {
                // Trang danh sách sinh viên trễ  hạn
                path: 'listmissbook',
                name: 'listmissbook',
                component: ListMissBook
            },
            {
                // Trang thêm thông tin vào sinh viên mượn sách
                path:'lendbook',
                name: "inforlendbook",
                component: InforLendBook
            },
            {
                path: 'duyetphieu/:id',
                name: 'duyetphieu',
                component : FormLendBook,
                params: true
            },
            {
                path:"duyetphieugiahan/:id",
                name: 'duyetphieugiahan',
                component: DuyetPhieuGiaHan,
                params: true
            }
            
        ]
    }
]