<template>
    <p class='user--infor__title fs-2'>CHI TIẾT phiếu mượn</p>

    <div class="detailsphieumuon">
        <table class='w-75 fs-3 mt-5'>
            <tr>
                <td class='py-2 fw-bold '>Mã phiếu mượn</td>
                <td class='py-2'>{{ details._id }}</td>
            </tr>
            <tr>
                <td class='py-2 fw-bold'>Số lượng sách</td>
                <td class='py-2'>{{ details.danhsachsach.length }}</td>
            </tr>
            <tr>
                <td class='py-2 fw-bold'>Thời gian mượn sách</td>
                <td class='py-2'>{{ setDate(details.dateTimeStart) }}</td>
            </tr>
            <tr>
                <td class='py-2 fw-bold'>Thời hạn trả sách</td>
                <td class='py-2'>{{ setDate(details.dateTimeEnd) }}</td>
            </tr>
            <tr>
                <td class='py-2 fw-bold'>Trạng thái sách</td>
                <td class='py-2 text-success fw-bold fs-3'
                    v-if="details.trangthai == true || details.trangthai == 'Đã xóa'">Đã trả</td>
                <td class='py-2 text-danger fw-bold fs-3 ' v-else>Chưa trả</td>
            </tr>
        </table>
        <p class='mt-4 mb-4 fs-3 fw-bold text-uppercase'>Thông tin sách</p>
        <table class='w-100 table border fs-3 text-center table-hover'>
            <thead>
                <th class='py-2 border-end'>STT</th>
                <th class='py-2'>Tên sách</th>
            </thead>
            <tbody>
                <tr v-for='(book, index) in details.danhsachsach' class='border'>
                    <td class='py-2 border-end'>{{ index + 1 }}</td>
                    <td class='py-2'>{{ book.title }}</td>
                </tr>
            </tbody>
        </table>
        <div class='d-flex justify-content-between'>
            <p class='mt-5'>
                <router-link :to="{ name: 'phieumuon' }" class='border p-3'>
                    <font-awesome-icon icon="fa-solid fa-arrow-left" />
                    &nbsp; Quay lại
                </router-link>
            </p>
            <button class='btn btn-primary fs-4 btn-giahan' v-if='details.trangthai == false'
                @click="this.dangkyGiaHan">
                Đăng ký gia hạn
            </button>
        </div>
    </div>
</template>

<script>
import PhieuMuonService from "@/services/phieumuon.service.js";
import PhieuGiaHanService from "@/services/phieugiahan.service.js";
import {useAccountStore} from "@/store/useStore";
export default {
    data() {
        return {
            details: {},
            giahan: {},
            user: useAccountStore().user,
            trangthaiduyet: false
        }
    },
    methods: {
        async getPhieuMuonById() {
            try {
                this.details = await PhieuMuonService.getIdPhieuMuon(this.$route.params.id);
                console.log(this.details);
            }
            catch (error) {
                console.log(error);
                //Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
                this.$router.push({
                    name: "notfound",
                    params: {
                        pathMatch: this.$route.path.split("/").slice(1)
                    },
                    query: this.$route.query,
                    hash: this.$route.hash
                });
            }
        },
        setDate(date) {
            var dateTime = new Date(date);
            var date = dateTime.getDate() + '-' + (dateTime.getMonth() + 1) + '-' + dateTime.getFullYear();
            var time = dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getSeconds();
            return time + ' ' + date;
        }
        ,
        async dangkyGiaHan() {
            try {
                var day = new Date(this.details.dateTimeEnd);
                day.setDate(day.getDate() + 3);

                const data = {
                    maphieumuon: this.details._id,
                    trangthai: this.trangthaiduyet,
                    thoigiangiahan: day,
                    masinhvien : this.user.masinhvien
                }
                // console.log(data);
                this.giahan = await PhieuGiaHanService.createPhieuGiaHan(data);
                if (confirm("Bạn đã đăng ký gia hạn. Đang chờ xét duyệt!. Vui lòng quay lại sau 3h chiều")) {
                    this.$router.push({ name: "giahan" })
                }

            }
            catch (error) {
                console.log(error);
            }
        },
    },
    created() {
        this.getPhieuMuonById();
    }
}
</script>

<style scoped>
.btn-giahan {
    height: 40px;
    margin-top: 22px;
}

</style>