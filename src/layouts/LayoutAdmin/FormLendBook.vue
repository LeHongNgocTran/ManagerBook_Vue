<template>
<div class='add--wrapper'>
    <h2 class="fs-1 py-5">DUYỆT TRẢ SÁCH</h2>
    <div class='container-fluid mb-5 border p-5 rounded-2 bg-white'>
        <div class='row mb-5'>
            <div class=" col form-outline">
                <label class="form-label" for="mssv">Mã số sinh viên</label>
                <input type="text" name="masinhvien" class="form-control" v-model="this.phieumuon.masinhvien" readonly />
            </div>
            <div class=" col form-outline">
                <label class="form-label" for="hoten">Tên sinh viên</label>
                <input type="text" name="hoten" v-model="this.phieumuon.hoten" class="form-control" readonly />
            </div>
            <div class=" col form-outline">
                <label class="form-label" for="soluong">Số lượng sách</label>
                <input type="number" name="soluong" v-model="this.phieumuon.danhsachsach.length" class="form-control" readonly />
            </div>
        </div>
        <div class='row mb-5'>
            <div class=" col form-outline">
                <label class="form-label" for="dataStart">Thời gian lập Phiếu </label>
                <input type="text" name="dataStart" v-model="this.dateTimeStart" class="form-control" readonly />
            </div>
            <div class=" col form-outline">
                <label class="form-label" for="dateEnd">Hết thời hạn </label>
                <input type="text" name="dateEnd" v-model="this.dateTimeEnd" class="form-control" readonly />
            </div>
            <div class=" col form-outline">
                <label class="form-label" for="trangthai">Trạng thái</label>
                <input type="text" name="trangthai" value="CHƯA TRẢ" class="form-control text-danger fw-bold" readonly v-if="this.phieumuon.trangthai == false" />
                <input type="text" name="trangthai" value="ĐÃ TRẢ" v-if="this.phieumuon.trangthai == true" class="form-control text-success fw-bold" />
                <input type="text" name="trangthai" value="ĐÃ XÓA" v-if="this.phieumuon.trangthai == 'Đã xóa'" class="form-control text-danger fw-bold" />
                <input type="text" name="trangthai" value="QUÁ HẠN" v-if="this.phieumuon.trangthai == 'Quá hạn'" class="form-control text-danger fw-bold" />
            </div>
        </div>
        <div class='row mb-5' v-if='this.phieumuon.thoigiantrasach != ""'>
            <div class='col form-outline'>
                <label class='form-label' for='thoigiantrasach'>Thời gian trả sách</label>
                <input type='text' name='thoigiantrasach' v-model="this.thoigiantrasach" class="form-control" readonly />
            </div>
            <div class='col form-outline'>
                <label class='form-label' for='songaytrehan'>Số ngày trễ hạn</label>
                <input type='number' name='songaytrehan' v-model="this.songaytre" class="form-control text-danger fw-bold" readonly />
            </div>
        </div>
        <div class="row mb-5">
            <table v-if="this.phieumuon.danhsachsach != null" class='table border table-hover '>
                <thead class="text-center border bg-secondary bg-opacity-25">
                    <th class='py-4'>STT</th>
                    <th class='py-4 border-start text-uppercase'>Mã sách</th>
                </thead>
                <tbody class='text-center' v-for="(phieumuon, index) in this.phieumuon.danhsachsach">
                    <tr>
                        <td class='py-5 border-end fw-bold'>{{ index + 1 }}</td>
                        <td class='py-5'>{{ phieumuon.title }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class='row-mb-5'>
            <div class='col'>
                <router-link :to="{ name: 'listrentbook' }">
                    <font-awesome-icon icon="fa-solid fa-arrow-left" />
                    &nbsp; Quay lại
                </router-link>
            </div>
            <div class='col d-flex justify-content-end'>
                <button class='btn btn-primary py-2 fs-4' @click="this.update">Duyệt trả sách</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import PhieuMuonService from "@/services/phieumuon.service";
import BookService from "@/services/book.service";
export default {
    data() {
        return {
            phieumuon: {},
            dateTimeStart: '',
            dateTimeEnd: '',
            thoigiantrasach: '',
            songaytre: 0,
        }
    },
    methods: {
        setDate(date) {
            var dateTime = new Date(date);
            var date = dateTime.getDate() + '-' + (dateTime.getMonth() + 1) + '-' + dateTime.getFullYear();
            var time = dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getSeconds();
            return time + ' ' + date;
        },
        async getInforId() {
            try {
                this.phieumuon = await PhieuMuonService.getIdPhieuMuon(this.$route.params.id);
                this.thoigiantrasach = this.setDate(this.phieumuon.thoigiantrasach);
                // Format hiển thị thời gian cho ngày mượn và ngày trả
                this.dateTimeStart = this.setDate(this.phieumuon.dateTimeStart);
                this.dateTimeEnd = this.setDate(this.phieumuon.dateTimeEnd);

                // console.log(this.phieumuon.thoigiantrasach);
                var date1 = new Date(this.phieumuon.thoigiantrasach);
                var date2 = new Date(this.phieumuon.dateTimeEnd);
                if (date1 > date2) {
                    var date = Math.abs(date1.getTime() - date2.getTime());
                    this.songaytre = Math.floor(date / (24 * 1000 * 3600));
                } else {
                    this.songaytre = 0;
                }

            } catch (error) {
                console.log(error);
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

        async update() {
            try {
                if (confirm("Cập nhật thành công ! ")) {
                    this.phieumuon.trangthai = true;
                    const ngaytrasach = new Date();
                    if (ngaytrasach > new Date(this.phieumuon.dateTimeEnd)) {
                        this.phieumuon.trangthai = "Quá hạn"
                    } else {
                        this.phieumuon.trangthai = true;
                    }
                    this.phieumuon = await PhieuMuonService.duyetphieu(
                        this.phieumuon._id, {
                            trangthai: this.phieumuon.trangthai,
                            thoigiantrasach: ngaytrasach
                        }
                    );
                    this.phieumuon.danhsachsach.forEach(async (e) => {
                        await BookService.changeTrangThai({
                            title: e.title,
                            trangthai: false
                        })
                    });
                    this.$router.push({
                        name: "listrentbook"
                    });
                }
            } catch (error) {
                console.log(error);
            }
        }
    },
    created() {
        this.getInforId();
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

.form-label {
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 10px;
}
</style>
