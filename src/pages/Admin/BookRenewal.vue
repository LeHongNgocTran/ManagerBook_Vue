<template>
    <div class='listbook--wrapper'>
        <h2 class="fs-1 py-5">DANH SÁCH SINH VIÊN GIA HẠN SÁCH</h2>
        <div class='function-container d-flex flex-row'>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle fs-4" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <font-awesome-icon icon="fa-solid fa-filter" /> Lọc danh sách

                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><button class="dropdown-item fs-4" type="button" @click = "filterDanhsach(false)">Chưa duyệt</button></li>
                    <li><button class="dropdown-item fs-4" type="button" @click = "filterDanhsach(true)">Đã duyệt</button></li>
                </ul>
            </div>
            <button class='btn btn-success fs-4'>
                <font-awesome-icon icon="fa-solid fa-file-excel" /> Xuất Excel
            </button>
            <button class='btn btn-danger fs-4'>
                <font-awesome-icon icon="fa-solid fa-file-pdf" /> Xuất PDF
            </button>
        </div>
        <div class="shadow mt-2 bg-white">
            <table class='table table-hover'>
                <thead>
                    <tr class="text-center text-uppercase">
                        <th class='py-3'>STT</th>
                        <th class='py-3'>Mã phiếu mượn</th>
                        <th class='py-3'>Mã sinh viên</th>
                        <th class='py-3'>Số lượng sách</th>
                        <th class='py-3'>Trạng thái</th>
                        <th class='py-3'>Tác vụ</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(giahan, index) in this.danhsachduyet"
                        :key="giahan._id"
                        class="text-center align-middle">
                        <td>{{index + 1}}</td>
                        <td>
                            {{giahan.maphieumuon}}
                        </td>
                        <td>{{giahan.thongtingiahan[0].masinhvien}}</td>
                        <td>{{giahan.thongtingiahan[0].danhsachsach.length}}</td>
                        <td>
                            <button v-if="giahan.trangthai == false " class='btn btn-danger w-50'>Chưa duyệt</button>
                            <button v-if="giahan.trangthai == true " class='btn btn-success w-50'>Đã duyệt</button>
                        </td>
                        <td>
                            <font-awesome-icon 
                                @click = 'changetoduyetphieu(giahan._id)'
                                class='button-function' 
                                icon="fa-solid fa-pen-to-square" />
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
import { faTrash, faPenToSquare, faPlus, faFileExcel, faFilePdf, faCircleInfo, faFilter } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faPenToSquare, faPlus, faFileExcel, faFilePdf, faCircleInfo, faFilter);
import PhieuGiaHanService from "@/services/phieugiahan.service";
export default {
    data() {
        return {
            phieugiahan: null,
            danhsachduyet: []
        }
    },
    methods: {
        async getAllPhieuGiaHan() {
            try {
                this.phieugiahan = await PhieuGiaHanService.getAllPhieuGiaHan();
                this.danhsachduyet = this.phieugiahan;
            }
            catch (error) {
                console.log(error);
            }
        },
        changetoduyetphieu(id){
            this.$router.push({
                name :  "duyetphieugiahan",
                params: { id: id }
            })
        },
        filterDanhsach(filter){
            this.danhsachduyet = this.phieugiahan.filter(e => e.trangthai == filter);
        }
    },
    created(){
        this.getAllPhieuGiaHan();
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