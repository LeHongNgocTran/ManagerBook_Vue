<template>
    <p class='user--infor__title fs-2'>Thông tin gia hạn sách</p>
    <div class='information-content' v-if = 'this.phieugiahan.length != 0 '>
        <table class='border shadow table table-hover text-center'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>MÃ PHIẾU MƯỢN</th>
                    <th>TRẠNG THÁI</th>
                    <th>CHI TIẾT</th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="(giahan, index) in this.phieugiahan">
                    <td>{{ index + 1 }}</td>
                    <td style="width: 200px">{{ giahan.maphieumuon }}</td>
                    <td>
                        <button v-if="giahan.trangthai == false" class='btn btn-danger w-50'>Đang chờ duyệt</button>
                        <button v-else class='btn btn-success w-50'>Đã duyệt</button>
                    </td>
                    <td>
                        <b-button v-b-modal.modal-center class='bg-transparent border-0'
                            @click="this.selected = giahan">
                            <font-awesome-icon class='button-function text-dark' icon='fa-solid fa-circle-info'
                                size='2x' />
                        </b-button>
                    </td>
                </tr>
            </tbody>
            <b-modal id="modal-center" centered title='Chi tiết phiếu gia hạn'>
                <div v-if="this.selected != null">
                    <table class='w-100 '>
                        <tr>
                            <td class='py-2'><strong>Mã phiếu mượn </strong></td>
                            <td class='py-2'>{{ this.selected.maphieumuon }}</td>
                        </tr>
                        <tr>
                            <td class='py-2'> <strong>Họ tên sinh viên: </strong> </td>
                            <td class='py-2'>{{ this.selected.thongtingiahan.hoten }}</td>
                        </tr>

                        <tr>
                            <td class='py-2'> <strong>Số lượng sách: </strong> </td>
                            <td class='py-2'>{{ this.selected.thongtingiahan.danhsachsach.length }}</td>
                        </tr>
                         <tr>
                            <td class='py-2'> <strong>Thời gian bắt đầu mượn: </strong> </td>
                            <td class='py-2'>{{ setDate(this.selected.thongtingiahan.dateTimeStart) }}</td>
                        </tr>
                        <tr>
                            <td class='py-2'><strong>Thời gian hết hạn trả sách: </strong> </td>
                            <td class='py-2'>{{ setDate(this.selected.thongtingiahan.dateTimeEnd) }}</td>
                        </tr>
                        <tr>
                            <td class='py-2'><strong>Thời gian xin gia hạn được phép trả sách: </strong> </td>
                            <td class='py-2'>{{ setDate(this.selected.thoigiangiahan) }}</td>
                        </tr>
                       <tr>
                        <td class='py-2'> <strong>Trạng thái: </strong> </td>
                            <td class='py-2'>
                                <span class='text-success fw-bold' v-if='this.selected.trangthai == true'>Đã
                                    duyệt</span>
                                <span class='text-danger fw-bold' v-if='this.selected.trangthai == false'> Đang chờ
                                    duyệt</span>
                            </td>
                        </tr>
                        <tr>
                            <td class='py-2'><strong>Thông tin sách: </strong></td>
                        </tr>
                    </table>
                    <div>
                        <table class='table border table-hover'>
                            <thead class="text-center border bg-secondary bg-opacity-50">
                                <th class='py-4'>STT</th>
                                <th class='py-4 border-start text-uppercase'>Mã sách</th>
                            </thead>
                            <tbody class='text-center'
                                v-for="(book, index) in this.selected.thongtingiahan.danhsachsach">
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
    <div v-else>
        <p class='bg-danger bg-opacity-10 ps-3 py-5'>
            <strong>Thông báo: </strong>
            KHÔNG CÓ ĐƠN GIA HẠN NÀO
        </p>
    </div>
</template>

<script>
import PhieuGiaHanService from "@/services/phieugiahan.service";
import { useAccountStore } from "@/store/useStore"
export default {
    data() {
        return {
            phieugiahan: [],
            giahan: [],
            user: useAccountStore().user,
            selected: null
        }
    },
    methods: {
        async getInforPhieuGiaHan() {
            try {
                this.phieugiahan = await PhieuGiaHanService.getInforGiaHanUser({masinhvien: this.user.masinhvien});      
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
        }
    },
    mounted() {
        this.getInforPhieuGiaHan();
    }
}
</script>