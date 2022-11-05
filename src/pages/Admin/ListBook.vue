<template>
    <div class='listbook--wrapper'>
        <h2 class="fs-1 py-5">DANH SÁCH SÁCH</h2>
        <div class='function-container'>
            <button class='btn btn-primary fs-4' :onClick="changetoaddbook">
                <font-awesome-icon icon="fa-solid fa-plus " /> Thêm sách
            </button>
            <button class='btn btn-success fs-4'>
                <font-awesome-icon icon="fa-solid fa-file-excel " /> Xuất Excel
            </button>
            <button class='btn btn-danger fs-4 '>
                <font-awesome-icon icon="fa-solid fa-file-pdf" /> Xuất PDF
            </button>
        </div>
        <div class="shadow mt-2">
            <table class='table table-striped table-hover'>
                <thead>
                    <tr class="text-center">
                        <th>STT</th>
                        <th>Hình ảnh</th>
                        <th>Tên sách</th>
                        <th>Tác giả</th>
                        <th>Thể loại</th>
                        <th>Trạng thái</th>
                        <th>Tác vụ</th>
                        <th>Chi tiết</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(book, index) of this.books"
                        :key="book._id" 
                        class="text-center align-middle">
                        <td>{{ index + 1 }}</td>
                        <td class='w-25'>
                            <img class="w-25" :src="book.imageUrl" alt="Book1" />
                        </td>
                        <td class='w-25'>{{ book.tensach }}</td>
                        <td>{{ book.tentacgia }}</td>
                        <td>{{ book.maloai }}</td>
                        <td>
                            <button class='btn btn-danger w-100' v-if="book.trangthai == false">Đã mượn</button>
                            <button class='btn btn-success w-100 ' v-else>Chưa mượn</button>
                        </td>
                        <td>
                            <font-awesome-icon class='button-function' icon="fa-solid fa-pen-to-square"
                                @click="changetoeditbook(book._id, book)" />
                            <font-awesome-icon class='button-function' icon="fa-solid fa-trash"
                                @click="deletebook(book._id)" />
                        </td>
                        <td>
                            <font-awesome-icon class='button-function' :onClick={} icon='fa-solid fa-circle-info' />
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTrash, faPenToSquare, faPlus, faFileExcel, faFilePdf, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faPenToSquare, faPlus, faFileExcel, faCircleInfo, faFilePdf)
import BookService from "@/services/book.service";
export default {
    data() {
        return {
            books: [],
            activeIndex: 0
        }
    },
    
    methods: {

        async getAllBook() {
            try {
                this.books = await BookService.getAll();
              
            } catch (error) {
                console.log(error);
            }
        },

        changetoaddbook() {
            this.$router.push({ name: 'addbook' });
        },

        changetoeditbook(id, data) {
            // console.log(data);
            this.$router.push({
                name: 'editbook',
                params: { id: id }
            });
        },
        reFreshList(){
            console.log('abc');
            this.getAllBook();
        },
        async deletebook(id) {
            let text = "Bạn muốn xóa sách. Vui lòng xác nhận trước khi xóa ?";
            if (confirm(text) == true) {
               try{
                   await BookService.deleteId(id)
                   console.log(id);

                   this.reFreshList();
            } catch(error){
                console.log(error);
            }
        }
        },


    },
    mounted() {
        this.reFreshList()
    }
}
</script>

<style lang="scss" scoped>
.listbook--wrapper {
    button {
        padding: 8px;
        font-size: 1.2rem;
    }
}

.function-container {
    margin-bottom: 20px;

    button {
        margin-right: 10px;
    }
}

.button-function {
    margin-right: 5px;
    font-size: 2rem;
    cursor: pointer;
}
</style>