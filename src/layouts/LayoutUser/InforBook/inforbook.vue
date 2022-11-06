<template>
    <div class='inforbook-wrapper'>
        <div class='inforbook-title'>
            <p class='p-3 fs-4'>TỔNG QUAN</p>
        </div>
        <!-- chưa hiển thị details -->
        <div class='inforbook border p-3 my-4' v-for="book of this.books" :key="books._id">
            <div class='inforbook-content' v-if="book.isActive == null">
                <p>
                    <strong>Tên sách: </strong>
                    {{ book.tensach }}
                </p>
                <p>
                    <strong>Tác giả: </strong>
                    {{ book.tentacgia }}
                </p>
                <p>
                    <strong>Nhà xuất bản:</strong> {{ book.tenNXB }}
                </p>
                <p>
                    <strong>Số thứ thự trên kệ sách:</strong> {{ book.stt }}/{{ book.soke }}/{{ book.tenday }} -
                    STT/SOKE/TENDAY
                </p>
                <p>
                    <strong>Trạng thái:</strong>
                    <button v-if="book.trangthai == false" class='btn btn-danger btn-small fs-5 rounded-pill px-3 ms-3'>
                        Đã mượn
                    </button>
                    <button v-else class='btn btn-success btn-small fs-5 rounded-pill px-3 ms-3'>
                        Còn sách
                    </button>
                </p>
            </div>
            <div class="inforbook-content d-flex flex-row" v-else>
                <div class='inforbook-image me-5'>
                    <img class='w-100 h-100' :src="book.imageUrl" alt={{book.tensach}} />
                </div>
                <div>
                    <table>
                        <tr>
                            <td>
                                <strong>Loại sách:</strong>
                            </td>
                            <td>{{ book.tenloai }}</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Tác giả:</strong>
                            </td>
                            <td>{{ book.tentacgia }}</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Nhà xuất bản:</strong>
                            </td>
                            <td>{{ book.tenNXB }}</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Số thứ tự trên kệ sách:</strong>&emsp;
                            </td>
                            <td>{{ book.stt }}</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Tến dãy</strong>
                            </td>
                            <td>{{ book.tenday }}</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Số kệ</strong>
                            </td>
                            <td>{{ book.soke }}</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Trạng thái sách:</strong>
                            </td>
                            <td>
                                <button v-if="book.trangthai == false"
                                    class='btn btn-danger btn-small fs-5 rounded-pill px-3 ms-3'>
                                    Đã mượn
                                </button>
                                <button v-else class='btn btn-success btn-small fs-5 rounded-pill px-3 ms-3'>
                                    Còn sách
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class='button-content' v-if="book.isActive == null">
                <button @click="book.isActive = 1">
                    Chi tiết &nbsp;
                    <font-awesome-icon icon="fa-solid fa-arrow-right"></font-awesome-icon>
                </button>
            </div>
            <div class='button-content' v-else>
                <button @click="book.isActive = null">
                    Quay lại &nbsp;
                    <font-awesome-icon icon="fa-solid fa-arrow-left"></font-awesome-icon>
                </button>
            </div>
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
    faArrowRight,
    faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
library.add(faArrowRight, faArrowLeft);
import BookService from "@/services/book.service";
export default {
    data() {
        return {
            isActive: true,
            books: []
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
        toggleDetailsBook() {
            if (this.isActive == true) {
                this.isActive = false;
            } else {
                this.isActive = true;
            }
        }
    },
    mounted() {
        this.getAllBook();
    }
}
</script>

<style scoped>
.inforbook-wrapper {
    font-size: 1.4rem;
    margin-top: 10px;
    margin-bottom: 10px;
}

.inforbook-content {
    margin-left: 15px;
    font-size: 1.3rem;
    /* margin-bottom: 5px; */
    height: 150px;
}

.inforbook-title {
    font-weight: bold;
    background-color: rgb(241, 241, 241);
}

.inforbook-image {
    width: 25%;
}

.button-content {
    margin-top:10px;
    padding: 5px 10px;
    border-radius: 5px;
}

.button-content button {
    font-size: 1.3rem;
    padding: 4px 6px;
}

.button-content button:hover {
    color: white;
    font-weight: 400;
}
</style>
