<template>
<div class='dashboard--dwrapper'>
    <h2 class="ms-3 py-5">THỐNG KÊ</h2>
    <div class='wrapper--container'>
        <div class='container-fluid'>
            <div class='row'>
                <div class='col-sm-12 col-md-6 col-lg-3 number-book'>
                    <div class='d-flex flex-row  p-5 rounded border-start border-4 border-success shadow'>
                        <div class='body-card'>
                            <h4 class='text-success'>Số lượng phiếu mượn</h4>
                            <p>{{this.phieumuon.length}}</p>
                        </div>
                        <font-awesome-icon icon="fa-solid fa-book" size="3x" color="gray" />
                    </div>
                </div>
                <div class=' col-sm-12 col-md-6 col-lg-3 number-book'>
                    <div class='d-flex flex-row  p-5 rounded border-start border-4 border-danger shadow'>
                        <div class='body-card'>
                            <h4 class='text-danger'>Số lượng phiếu xin gia hạn</h4>
                            <p>{{this.phieuchoduyet.length}}</p>
                        </div>
                        <font-awesome-icon size="3x" icon="fa-solid fa-calendar" color="gray" />
                    </div>
                </div>
                <div class=' col-sm-12 col-md-6 col-lg-3 number-book'>
                    <div class='d-flex flex-row  p-5 rounded border-start border-4 border-primary shadow'>
                        <div class='body-card'>
                            <h4 class='text-primary'>Tổng sổ sách</h4>
                            <p>{{this.book.length}}</p>
                        </div>
                        <font-awesome-icon size="3x" icon="fa-solid fa-book" color="gray" />
                    </div>
                </div>
                <div class=' col-sm-12 col-md-6 col-lg-3 number-book'>
                    <div class='d-flex flex-row  p-5 rounded border-start border-4 border-warning shadow'>
                        <div class='body-card'>
                            <h4 class='text-warning'>Số lượng người truy cập</h4>
                            <p>5000</p>
                        </div>
                        <font-awesome-icon size="3x" icon="fa-solid fa-user" color="gray" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

import BookService from "@/services/book.service";
import PhieuMuonService from "@/services/phieumuon.service";
import PhieuGiaHanService from "@/services/phieugiahan.service";

export default {
    data(){
        return {
            book: [],
            phieugiahan: [],
            phieumuon: [],
            phieuchoduyet: []
        };
    },
    methods: {
        async getAll(){
            this.book = await BookService.getAll();
            this.phieumuon = await PhieuMuonService.getAllPhieuMuon();
            this.phieugiahan = await PhieuGiaHanService.getAllPhieuGiaHan();
            this.phieugiahan.forEach((e) => {
                if(e.trangthai == false){
                    this.phieuchoduyet.push(e);
                }
            })
        }
    },
    mounted(){
        this.getAll();
    }
}
</script>

<style lang="scss">

.dashboard--dwrapper{
    height: 87vh;
    h2{
        font-weight: 600;
        font-size: 3rem;
    }
}
.wrapper--container {
    margin-top: 20px;
}

.number-book {
    margin-bottom: 30px;
}

.body-card {
    width: 90%;
    text-transform: uppercase;

    h4 {
        font-weight: 700;
        font-size: 1.3rem;
    }
}
</style>
