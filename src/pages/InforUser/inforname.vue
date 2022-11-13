<template>
    <p class='user--infor__title fs-2'>Thông tin chung</p>
    <div class='information-content'>

        <div clas='user--infor__image'>
            <img src="../../assets/images/logoctu.png" alt='ImageUser' />
        </div>
        <div class='user--infor'>
            <h3 class='mb-4 fw-bold'>{{ account.user.hoten }}</h3>
            <p><strong>Số thẻ: </strong>{{ account.user.masinhvien }}</p>
            <p><strong>Ngày cấp: </strong>16/09/2019</p>
            <p><strong>Ngày hết hạn: </strong>31/12/2023</p>
            <p><strong>Khoa: </strong> {{ account.user.khoa }}</p>
            <p><strong>Khóa: </strong>{{ account.user.nienkhoa }}</p>
            <p><strong>Lớp: </strong>{{ account.user.lop }}</p>
            <p><strong>Địa chỉ: </strong> {{ account.user.diachi }}</p>
            <p><strong>Điện thoại: </strong> {{ account.user.sdt }}</p>
            <p><strong>Email: </strong>{{ account.user.email }}</p>
        </div>
    </div>
</template>

<script>
import { useAccountStore } from '../../store/useStore';
export default {
    data() {
        const account = useAccountStore();
        return { account };
    }
}
</script>