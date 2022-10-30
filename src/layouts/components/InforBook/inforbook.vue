<template>
<div class='inforbook-wrapper'>
    <div class='inforbook-title'>
        <p class='border-bottom p-3'>TỔNG QUAN</p>
    </div>
    <!-- chưa hiển thị details -->
    <div class='inforbook-content' v-if="isActive == true">
        <p>
            <strong>Tên sách: </strong>
            <route-link to="#">{name}</route-link>
        </p>
        <p>
            <strong>Tác giả: </strong>
            <route-link to="#">{tacgia}</route-link>
        </p>
        <p>
            <strong>Thông tin xuất bản:</strong> {thongtinxuatban}
        </p>
        <p>
            <strong>Số thứ thự trên kệ sách:</strong> {vitri}
        </p>
        <p>
            <strong>Trạng thái:</strong>
            <button type="button" class='btn btn-success btn-small fs-5 rounded-pill px-3 ms-3'>
                Còn sách
            </button>
        </p>
    </div>
    <div class="inforbook-content d-flex flex-row" v-else="isActive == true">
        <div class='inforbook-image me-5'>
            <img class='d-block w-100 h-100' src='../../../assets/images/logoctu.png' alt="Image Book" />
        </div>
        <div class>
            <table>
                <tr>
                    <td>
                        <strong>Loại sách:</strong>
                    </td>
                    <td>{loaisach} abc</td>
                </tr>
                <tr>
                    <td>
                        <strong>Tác giả:</strong>
                    </td>
                    <td>{tacgia}abc</td>
                </tr>
                <tr>
                    <td>
                        <strong>Số thứ tự trên kệ sách :</strong>&emsp;
                    </td>
                    <td>{vitri}123</td>
                </tr>
                <tr>
                    <td>
                        <strong>Tác giả:</strong>
                    </td>
                    <td>{tacgia}123123</td>
                </tr>
                <tr>
                    <td>
                        <strong>Trạng thái sách:</strong>
                    </td>
                    <td>
                        <button type="button" class="btn btn-success btn-small fs-5 rounded-pill px-3">
                            {trangthai}Còn sách
                        </button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <div class='button-content' v-if="isActive==true">
        <button @click="toggleDetailsBook">
            Chi tiết &nbsp;
            <font-awesome-icon icon="fa-solid fa-arrow-right"></font-awesome-icon>
        </button>
    </div>
    <div class='button-content' v-if="isActive==false">
        <button @click="toggleDetailsBook">
            Quay lại &nbsp;
            <font-awesome-icon icon="fa-solid fa-arrow-left"></font-awesome-icon>
        </button>
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

export default {
    data() {
        return {
            isActive: true
        }
    },
    methods: {
        // Hiển thị chi tiết sản phẩm
        toggleDetailsBook() {
            if (this.isActive == true) {
                this.isActive = false;
            } else {
                this.isActive = true;
            }
        }
    }
}
</script>

<style scoped>
.inforbook-wrapper {
    border: 1px solid rgb(191, 191, 191);
    font-size: 1.4rem;
    margin-top: 10px;
    margin-bottom: 10px;
}

.inforbook-content {
    margin-left: 15px;
    font-size: 1.3rem;
    margin-bottom: 10px;
    height: 150px;
}

.button-content {
    margin-bottom: 15px;
    margin-left: 15px;
    padding: 5px 10px;
    border-radius: 5px;
}

.button-content button {
    font-size: 1.3rem;
    padding: 0.6rem 1rem;
}

.button-content button:hover {
    color: white;
    font-weight: 400;
}
</style>
