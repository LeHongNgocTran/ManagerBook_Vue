<template>
    <div class='listbook--wrapper'>
        <h2 class="fs-1 py-5">DANH SÁCH SINH VIÊN MƯỢN SÁCH</h2>
        <div class='function-container d-flex flex-row mb-5'>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle fs-4" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <font-awesome-icon icon="fa-solid fa-filter" /> Lọc danh sách

                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><button class="dropdown-item fs-4" type="button">Chưa trả</button></li>
                    <li><button class="dropdown-item fs-4" type="button">Đã trả</button></li>
                </ul>
            </div>
            <button class='btn btn-primary fs-4' type="button" @click="changeToInforLend">
                <font-awesome-icon icon="fa-solid fa-plus" /> Thêm phiếu mượn sách
            </button>
            <button class='btn btn-success fs-4'>
                <font-awesome-icon icon="fa-solid fa-file-excel" /> Xuất danh sach mượn sách
            </button>
            <button class='btn btn-danger fs-4'>
                <font-awesome-icon icon="fa-solid fa-file-pdf" /> Xuất File PDF
            </button>
        </div>
        <div class="shadow mt-2">
            <table class='table table-striped'>
                <thead>
                    <tr class="text-center">
                        <th>STT</th>
                        <th>MSSV</th>
                        <th>Tên sinh viên</th>
                        <th>Mã phiếu mượn</th>
                        <th>Trạng thái</th>
                        <th>Tác vụ</th>
                        <th>Chi tiết</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(phieumuon, index) in this.phieumuon" :key="phieumuon._id"
                        class="text-center align-middle">
                        <td>{{index+1}}</td>
                        <td>{{ phieumuon.masinhvien }}</td>
                        <td>{{phieumuon.thongtinsinhvien[0].hoten}}</td>
                        <td>{{"PM"+ phieumuon._id}}</td>
                        <td>
                            <button class='btn btn-danger w-50' v-if="phieumuon.trangthai == false">Chưa trả</button>
                            <button class='btn btn-success w-50' v-else>Đã trả</button>
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


<style lang='scss' scoped>
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


<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFilter } from "@fortawesome/free-solid-svg-icons";
library.add(faFilter); 
import PhieuMuonService from "@/services/phieumuon.service";
export default {
    data() {
        return {
            phieumuon: [],
        };
    },
    methods: {
        // Chuyển sang trang thêm phiếu mượn
        changeToInforLend: function () {
            this.$router.push({ name: 'inforlendbook' });
        },
        
        async getAllPhieuMuon() {
            try {
                this.phieumuon = await PhieuMuonService.getAllPhieuMuon();
                // console.log(this.phieumuon);
            }
            catch (error) {
                console.log(error);
            }
        }
    },
    mounted() {
        this.getAllPhieuMuon();
    }
}



 




</script>