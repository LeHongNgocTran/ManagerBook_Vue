<template
>
    <div class='listbook--wrapper mb-5'>
        <h2 class="py-5">DANH SÁCH SÁCH</h2>
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
        <div class="shadow-lg mt-2">
            <table class='table table-hover bg-white border-2'>
                <thead>
                    <tr class="text-center text-uppercase  ">
                        <th class='py-3'>STT</th>
                        <th class='py-3'>Hình ảnh</th>
                        <th class='py-3'>Tên sách</th>
                        <th class='py-3'>Tác giả</th>
                        <th class='py-3'>Thể loại</th>
                        <th class='py-3'>Trạng thái</th>
                        <th class='py-3'>Tác vụ</th>
                        <th class='py-3'>Chi tiết</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(book, index) of this.books" :key="book._id" class="text-center align-middle">
                        <td>{{ index + 1 }}</td>
                        <td style="width: 200px">
                            <img class=" w-50" :src="'../src/assets/images/Book/' + book.imageUrl"
                                alt={{book.tensach}} />
                        </td>
                        <td style="width: 300px">{{ book.tensach }}</td>
                        <td style="width: 250px">{{ book.tentacgia }}</td>
                        <td>{{ book.tenloai }}</td>
                        <td>
                            <button class='btn btn-danger w-100' v-if="book.trangthai == true">Đã mượn</button>
                            <button class='btn btn-success w-100 ' v-else>Chưa mượn</button>
                        </td>
                        <td>
                            <font-awesome-icon class='button-function' icon="fa-solid fa-pen-to-square"
                                @click="changetoeditbook(book._id, book)" />
                            <font-awesome-icon class='button-function' icon="fa-solid fa-trash"
                                @click="deletebook(book._id)" />
                        </td>
                        <td>
                            
                            <b-button v-b-modal.modal-center class='bg-transparent border-0 '
                                @click="modalShow = !modalShow; this.detailsbook = book">
                                <font-awesome-icon color='black' class='button-function'
                                    icon='fa-solid fa-circle-info' />
                            </b-button>
                        </td>
                    </tr>
                </tbody>
                <b-modal id="modal-center" title='Thông tin chi tiết sách' centered v-model="this.modalShow">
                    <div v-if="this.detailsbook != null">
                        <table class='w-100 '>
                            <tr>
                                <td class='py-2 w-50 '><strong>Mã sách: </strong></td>
                                <td class='py-2'>{{ this.detailsbook._id }}</td>
                            </tr>
                            <tr>
                                <td class='py-2'><strong>Tên sách: </strong> </td>
                                <td class='py-2'>{{ this.detailsbook.tensach }}</td>
                            </tr>
                            <tr>
                                <td class='py-2'> <strong>Tên loại sách: </strong> </td>
                                <td class='py-2'>{{ this.detailsbook.tenloai }}</td>
                            </tr>
                            <tr>
                                <td class='py-2'> <strong>Tên nhà xuất bản: </strong> </td>
                                <td class='py-2'>{{ this.detailsbook.tenNXB }}</td>
                            </tr>
                            <tr>
                                <td class='py-2'> <strong>Tên tác giả: </strong> </td>
                                <td class='py-2'>{{ this.detailsbook.tentacgia }}</td>
                            </tr>
                            <tr>
                                <td class='py-2'> <strong>Vị trí kệ: </strong> </td>
                                <td class='py-2'>{{ this.detailsbook.soke }}</td>
                            </tr>
                            <tr>
                                <td class='py-2'> <strong>Vị trí dãy: </strong> </td>
                                <td class='py-2'>{{ this.detailsbook.tenday }}</td>
                            </tr>
                            <tr>
                                <td class='py-2'> <strong>Trạng thái sách: </strong> </td>
                                <td class='py-2'>
                                    <p v-if="this.detailsbook.trangthai == true" class='text-success fw-bold '>Đã được
                                        mượn</p>
                                    <p v-else class='text-danger fw-bold '>Chưa được mượn</p>
                                </td>
                            </tr>
                            <tr>
                                <td class='py-2'> <strong>Hình ảnh: </strong> </td>
                                <td class='py-2'>
                                    <img class=" w-25" :src="'../src/assets/images/Book/' + this.detailsbook.imageUrl"
                                        alt={{book.tensach}} />
                                </td>
                            </tr>
                        </table>
                        
                    </div>
                    
                </b-modal>
            </table>
        </div>
    </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTrash, faXmark, faPenToSquare, faPlus, faFileExcel, faFilePdf, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faXmark, faPenToSquare, faPlus, faFileExcel, faCircleInfo, faFilePdf)
import BookService from "@/services/book.service";
import { useBookStore } from '../../store/useStore';
export default {
    data() {
        return {
            books: [],
            detailsbook: null,
            activeIndex: 0,
            bookStore: useBookStore(),
            modalShow: false,
        }
    },

    methods: {

        async getAllBook() {
            try {
                this.books = await BookService.getAll();
                this.bookStore.length = this.books.length;

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
        reFreshList() {
            // console.log('abc');
            this.getAllBook();
        },
        async deletebook(id) {
            let text = "Bạn muốn xóa sách. Vui lòng xác nhận trước khi xóa ?";
            if (confirm(text) == true) {
                try {
                    await BookService.deleteId(id)
                    this.reFreshList();
                } catch (error) {
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

    h2 {
        font-weight: 600;
        font-size: 3rem;
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