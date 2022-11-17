<template>
    <p class='user--infor__title fs-2'>Thông tin phiếu mượn</p>
    <div class='information-content' v-if='this.phieumuon.length !== 0'>
        <table class='table table-hover text-center border shadow'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>MÃ PHIẾU MƯỢN</th>
                    <th>TRẠNG THÁI</th>
                    <th>CHI TIẾT</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for = "(phieumuons, index) in this.phieumuon" >
                    <td>{{index + 1}}</td>
                    <td>{{phieumuons._id}}</td>
                    <td>
                        <button class='btn btn-success w-50 fs-5' v-if="phieumuons.trangthai == true || phieumuons.trangthai == 'Đã xóa' ">Đã trả</button>
                        <button class='btn btn-danger w-50 fs-5' v-else>Chưa trả</button>
                    </td>
                    <td>
                        <b-button class='bg-transparent border-0' @click="changeToDetails(phieumuons._id)">
                            <font-awesome-icon class='button-function text-dark' icon='fa-solid fa-circle-info'
                                size='2x' />
                        </b-button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div v-else>
        <p class='bg-danger bg-opacity-10 ps-3 py-5'>
            <strong>Thông báo: </strong>
            KHÔNG CÓ PHIẾU MƯỢN NÀO
        </p>
    </div>
</template>

<script>
import { useAccountStore } from '../../store/useStore';
import PhieuMuonService from "@/services/phieumuon.service";
export default {
    data() {
        const name = useAccountStore().user;
        return {
            phieumuon: null,
            name
        }
    },
    methods:{
        async getAllInfor(){
            this.phieumuon = await PhieuMuonService.getPhieuMuonByMSSV({masinhvien : this.name.masinhvien});
        },
        changeToDetails (id){
            this.$router.push({
                name: 'detailsphieumuon',
                params: { id: id }
            })
        }
    },
    created(){
        this.getAllInfor();
    }
}
</script>