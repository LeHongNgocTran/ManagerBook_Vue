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
            <table class='table table-striped'>
                <thead>
                    <tr class="text-center">
                        <th>STT</th>
                        <th>Hình ảnh</th>
                        <th>Tên sách</th>
                        <!-- <th>Tác giả</th> -->
                        <th>Thể loại</th>
                        <th>Trạng thái</th>
                        <th>Tác vụ</th>
                        <th>Chi tiết</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- <tr class="text-center align-middle">
                        <td>1</td>
                        <td>
                            <img class="w-50" src="{{book.imageUrl}}" alt="Book1" />
                        </td>
                        <td>{{ book.tensach }}</td>
                        <td>{{book.}}</td>
                        <td>{{ book.maloai }}</td>
                        <td>
                            <button class='btn btn-danger w-100'>{{ book.trangthai }}</button>
                        </td>
                        <td>
                            <font-awesome-icon class='button-function' icon="fa-solid fa-pen-to-square" />
                            <font-awesome-icon class='button-function' icon="fa-solid fa-trash" />
                        </td>
                        <td>
                            <font-awesome-icon class='button-function' :onClick={} icon='fa-solid fa-circle-info' />
                        </td>
                    </tr> -->
                    <tr class="text-center align-middle">
                        <td>1</td>
                        <td>
                            <img class="w-50" src="../../assets/images/logoctu.png" alt="Book2" />
                        </td>
                        <td>Cây cam ngọt của tôi</td>
                        <td>José Mauro de Vasconcelos</td>
                        <td>Văn học phương Tây</td>
                        <td>
                            <button class='btn btn-success w-100'>Đã mượn</button>
                        </td>
                        <td>
                            <font-awesome-icon class='button-function' icon="fa-solid fa-pen-to-square" />
                            <font-awesome-icon class='button-function' icon="fa-solid fa-trash" />
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
import {
    library
} from '@fortawesome/fontawesome-svg-core'
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';
import {
    faTrash,
    faPenToSquare,
    faPlus,
    faFileExcel,
    faFilePdf,
    faCircleInfo
} from "@fortawesome/free-solid-svg-icons";
library.add(
    faTrash,
    faPenToSquare,
    faPlus,
    faFileExcel,
    faCircleInfo,
    faFilePdf)
import BookService from "@/services/book.service";
export default {
    data() {
        return {
            book: []
        }
    },
    methods: {
        changetoaddbook() {
            this.$router.push({ name: 'addbook' });
        },
        async getAllBook(){
            try{
            this.book = await BookService.getAll();
            console.log(this.book);
            }catch(error){
                console.log(error);
            }
        }
    },
    mounted(){
        this.getAllBook()
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