<template>
    <div class='listbook--wrapper'>
        <h2 class="py-5">DANH SÁCH SINH VIÊN MƯỢN SÁCH</h2>
        <div class='function-container d-flex flex-row mb-5'>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle fs-4" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <font-awesome-icon icon="fa-solid fa-filter" /> Lọc danh sách

                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><button class="dropdown-item fs-4" type="button" @click="filterChualoc(false)">Chưa trả</button>
                    </li>
                    <li><button class="dropdown-item fs-4" type="button" @click="filterChualoc(true)">Đã trả</button>
                    </li>
                    <li><button class="dropdown-item fs-4" type="button" @click="filterChualoc('Quá hạn')">Quá hạn</button>
                    </li>
                </ul>
            </div>
            <button class='btn btn-primary fs-4' type="button" @click="changeToInforLend">
                <font-awesome-icon icon="fa-solid fa-plus" /> Thêm phiếu mượn sách
            </button>
            <button class='btn btn-success fs-4'>
                <font-awesome-icon icon="fa-solid fa-file-excel" /> Xuất danh sách sinh viên mượn sách
            </button>
            <button class='btn btn-danger fs-4'>
                <font-awesome-icon icon="fa-solid fa-file-pdf" /> Xuất File PDF
            </button>
        </div>
        <div class="shadow-lg mt-2">
            <table class='table table-hover bg-white'>
                <thead>
                    <tr class="text-center text-uppercase">
                        <th class='py-3'>STT</th>
                        <th class='py-3'>Mã sinh viên</th>
                        <th class='py-3'>Tên sinh viên</th>
                        <th class='py-3'>Mã phiếu mượn</th>
                        <th class='py-3'>Trạng thái</th>
                        <th class='py-3'>Tác vụ</th>
                        <th class='py-3'>Chi tiết</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(phieumuon, index) in this.danhsachduyet" :key="phieumuon._id"
                        class="text-center align-middle">
                        <td>{{ index + 1 }}</td>
                        <td>{{ phieumuon.masinhvien }}</td>
                        <td>{{ phieumuon.thongtinsinhvien[0].hoten }}</td>
                        <td>{{ phieumuon._id }}</td>
                        <td>
                            <button class='btn btn-danger w-50' v-if="phieumuon.trangthai == false">Chưa trả</button>
                            <button class='btn btn-success w-50' v-if="phieumuon.trangthai == true">Đã trả</button>
                            <button class='btn btn-dark w-50' v-if="phieumuon.trangthai == 'Đã xóa'">Đã xóa</button>
                            <button class='btn btn-dark w-50' v-if="phieumuon.trangthai == 'Quá hạn'">Quá hạn</button>
                            
                        </td>
                        <td>
                            <font-awesome-icon @click="changetoeditphieumuon(phieumuon._id)" class='button-function'
                                icon="fa-solid fa-pen-to-square" />
                            <font-awesome-icon @click='this.deletephieumuon(phieumuon._id)' class='button-function'
                                icon="fa-solid fa-trash" />
                        </td>
                        <td>
                            <b-button v-b-modal.modal-center class='bg-transparent border-0'
                                @click="this.selected = phieumuon">
                                <font-awesome-icon class='button-function text-dark' icon='fa-solid fa-circle-info' />
                            </b-button>
                        </td>
                    </tr>
                </tbody>
                <b-modal id="modal-center"  centered title='Chi tiết phiếu mượn'>
                    <div v-if="this.selected != null">
                        <table class='w-100 '>
                            <tr>
                                <td class='py-2'><strong>Mã sinh viên: </strong></td>
                                <td class='py-2'>{{ this.selected.masinhvien }}</td>
                            </tr>
                            <tr>
                                <td class='py-2'><strong>Mã phiếu: </strong> </td>
                                <td class='py-2'>{{ this.selected._id }}</td>
                            </tr>
                            <tr>
                                <td class='py-2'> <strong>Họ tên sinh viên: </strong> </td>
                                <td class='py-2'>{{ this.selected.hoten }}</td>
                            </tr>
                            <tr>
                                <td class='py-2'> <strong>Số lượng sách: </strong> </td>
                                <td class='py-2'>{{ this.selected.danhsachsach.length }}</td>
                            </tr>
                            <tr>
                                <td class='py-2'> <strong>Thời gian bắt đầu mượn: </strong> </td>
                                <td class='py-2'>{{ setDate(this.selected.dateTimeStart) }}</td>
                            </tr>
                            <tr>
                                <td class='py-2'> <strong>Thời gian hết hạn: </strong> </td>
                                <td class='py-2'>{{ setDate(this.selected.dateTimeEnd) }}</td>
                            </tr>
                            <tr>
                                <td class='py-2'> <strong>Trạng thái: </strong> </td>
                                <td class='py-2'>
                                    <span class='text-success fw-bold' v-if='this.selected.trangthai == true' > Đã
                                        trả</span>
                                    <span class='text-danger fw-bold' v-if='this.selected.trangthai == false' > Chưa
                                        trả</span>
                                    <span class='text-black fw-bold' v-if="this.selected.trangthai == 'Đã xóa'"> Đã
                                        xóa</span>
                                    <span class='text-black fw-bold' v-if="this.selected.trangthai == 'Quá hạn'"> Quá
                                        hạn</span>
                                </td>
                            </tr>
                            <tr v-if='this.selected.thoigiantrasach != ""' >
                                <td><strong>Thơì gian trả sách:</strong></td>
                                <td>
                                    <span>{{setDate(this.selected.thoigiantrasach)}}</span>
                                </td>
                            </tr>
                            <tr>
                                <td class='py-2'><strong>Thông tin sách: </strong></td>
                            </tr>
                        </table>
                        <div>
                            <table v-if="this.selected.danhsachsach != null" class='table border table-hover'>
                                <thead class="text-center border bg-secondary bg-opacity-50">
                                    <th class='py-4'>STT</th>
                                    <th class='py-4 border-start text-uppercase'>Mã sách</th>
                                </thead>
                                <tbody class='text-center' v-for="(book, index) in this.selected.danhsachsach">
                                    <tr>
                                        <td class='py-5 border-end fw-bold'>{{ index + 1 }}</td>
                                        <td class='py-5'>{{ book.title }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </b-modal>
            </table>
        </div>
    </div>
</template>
<!--  -->
<!-- -->

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFilter } from "@fortawesome/free-solid-svg-icons";
library.add(faFilter);
import PhieuMuonService from "@/services/phieumuon.service";
import { usePhieuMuonStore } from "@/store/useStore";
export default {
    data() {
        return {
            phieumuon: [],
            phieumuonlength: usePhieuMuonStore(),
            selected: null,
            dateTimeStart: '',
            dateTimeEnd: '',
            danhsachduyet: [],

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
                this.danhsachduyet = this.phieumuon;
                this.phieumuonlength.length = this.phieumuon.length;
            }
            catch (error) {
                console.log(error);
            }
        },
        setDate(date) {
            var dateTime = new Date(date);
            var date = dateTime.getDate() + '-' + (dateTime.getMonth() + 1) + '-' + dateTime.getFullYear();
            var time = dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getSeconds();
            return time + ' ' + date;
        },
        changetoeditphieumuon(id) {
            this.$router.push({
                name: 'duyetphieu',
                params: { id: id }
            });
        },
        reFreshList() {
            this.getAllPhieuMuon();
        },
        async deletephieumuon(id) {
            try {
                if (confirm("Xóa không thể phục hồi được. Bạn có muôn xóa ?")) {
                    await PhieuMuonService.duyetphieu(id, { trangthai: "Đã xóa" });
                    this.reFreshList();
                }
            }
            catch (error) {
                console.log(error);
            }
        },

        filterChualoc(filter) {
            this.danhsachduyet = this.phieumuon.filter(e => e.trangthai == filter);
            // console.log(this.danhsachduyet);
            // this.reFreshList();
        }
    },
    mounted() {
        this.reFreshList();
    }
}








</script>


<style lang='scss' scoped >
.listbook--wrapper {
    button {
        padding: 8px;
        font-size: 1.2rem;
    }
    h2{
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

.modal-footer button {
    font-size: 1.3rem !important;
}

.modal-title {
    font-size: 1.3rem !important;
}
</style>

