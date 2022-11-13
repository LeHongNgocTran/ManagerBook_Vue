<template>
    <div class='add--wrapper'>
        <h2 class="fs-1 py-5">DUYỆT GIA HẠN SÁCH</h2>
        <div v-if="this.phieumuon != null" class='container-fluid mb-5 border p-5 rounded-2 bg-white'>
            <div class='row mb-5'>
                <div class=" col form-outline">
                    <label class="form-label" for="mssv">Mã số sinh viên</label>
                    <input type="text" name="masinhvien" v-model="this.phieumuon.thongtingiahan.masinhvien"
                        class="form-control" readonly />
                </div>
                <div class=" col form-outline">
                    <label class="form-label" for="hoten">Tên sinh viên</label>
                    <input type="text" name="hoten" v-model="this.phieumuon.thongtingiahan.hoten" class="form-control"
                        readonly />
                </div>
                <div class=" col form-outline">
                    <label class="form-label" for="soluong">Số lượng sách</label>
                    <input type="number" name="soluong" v-model="this.phieumuon.thongtingiahan.danhsachsach.length"
                        class="form-control" readonly />
                </div>
            </div>
            <div class='row mb-5'>
                <div class=" col form-outline">
                    <label class="form-label" for="dataStart">Thời gian bắt đầu lập phiếu : </label>
                    <input type="text" name="dataStart" v-model="this.phieumuon.thongtingiahan.dateTimeStart"
                        class="form-control" readonly />
                </div>
                <div class=" col form-outline">
                    <label class="form-label" for="dateEnd">Thời gian hết hạn mượn sách: </label>
                    <input type="text" v-model="this.phieumuon.thongtingiahan.dateTimeEnd" name="dateEnd"
                        class="form-control" readonly />
                </div>
                <div class=" col form-outline">
                    <label class="form-label" for="dateEnd">Thời gian gia hạn: </label>
                    <input 
                        type="text" 
                        v-model = "this.dateTimeGiaHan"
                        name="dateEnd"  
                        class="form-control" readonly />
                </div>
                <div class=" col form-outline">
                    <label class="form-label" for="trangthai">Trạng thái</label>
                    <input 
                        type="text" 
                        name="trangthai"
                        v-if = "this.phieumuon.trangthai == false" 
                        value="ĐANG CHỜ DUYỆT" 
                        class="form-control text-danger fw-bold"
                        readonly />
                    <input 
                        type="text" 
                        name="trangthai"
                        v-if="this.phieumuon.trangthai == true" 
                        value="ĐÃ DUYỆT" 
                        class="form-control text-success fw-bold" />


                </div>
            </div>
            <div class="row mb-5">
                <table class='table border table-hover '>
                    <thead class="text-center border bg-secondary bg-opacity-25">
                        <th class='py-4'>STT</th>
                        <th class='py-4 border-start text-uppercase'>Mã sách</th>
                    </thead>
                    <tbody class='text-center'>
                        <tr v-for = "(book,index) in this.phieumuon.thongtingiahan.danhsachsach">
                            <td class='py-5 border-end fw-bold'>
                                {{index + 1}}
                            </td>
                            <td class='py-5'>
                                {{book.title}}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class='row-mb-5'>
                <div class='col'>
                    <router-link :to="{ name: 'listrenewalbook' }">
                        <font-awesome-icon icon="fa-solid fa-arrow-left" />
                        &nbsp; Quay lại
                    </router-link>
                </div>
                <div class='col d-flex justify-content-end'>
                    <button class='btn btn-primary py-2 fs-4'>Duyệt trả sách</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import GiaHanService from "@/services/phieugiahan.service";
export default {
    data() {

        return {
            phieugiahan: null,
            phieumuon: null,
            dataTimeGiaHan : ''
        }
    },
    methods: {
        async getInforById() {
            try {
                this.phieugiahan = await GiaHanService.getInforById(this.$route.params.id);
                this.phieumuon = (await GiaHanService.getDetails({ maphieumuon: this.phieugiahan.maphieumuon }))[0];
                // Chỉnh hiển thị thời gian
                var date = new Date(this.phieumuon.thoigiangiahan);
                var dateStart = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
                var startime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
                this.dateTimeGiaHan = startime + ' ' + dateStart;
                
            }
            catch (error) {
                console.log(error)
            }
        }
    },
    created() {
        this.getInforById()
    }
}
</script>

<style scoped>
input {
    height: 60px;
    font-size: 1.6rem
}

a:hover {
    color: red !important;
    text-decoration: underline !important;
}
.form-label{
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 10px;
}
</style>