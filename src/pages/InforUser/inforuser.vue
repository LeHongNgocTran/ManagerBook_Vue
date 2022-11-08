<template>
    <div class='user-wrapper'>
            <div class='user--first__container'>
                <ul>
                    <li>
                        <font-awesome-icon icon="fa-solid fa-user"/>&nbsp;
                        Thông tin chung
                    </li>
                    <li>
                        <font-awesome-icon icon="fa-solid fa-book"/>&nbsp;
                        Tài liệu đã mượn
                    </li>
                    <li>
                        <font-awesome-icon icon="fa-solid fa-calendar"/>&nbsp;
                        Tài liệu gia hạn
                    </li>
                    <li>
                        <font-awesome-icon icon="fa-solid fa-circle-info"/>&nbsp;
                        Tài liệu yêu cầu mượn
                    </li>
                    <li>
                        <font-awesome-icon icon="fa-solid fa-book"/>&nbsp;
                        Tài liệu đã trả
                    </li>
                </ul>
            </div>
            <div class='user--second__container'>
                <div class='user--infor__content'>
                    <p class='user--infor__title fs-2'>Thông tin chung</p>
                    <div class='information-content' v-if='account.user != null'>
                        <div clas='user--infor__image'>
                            <img src="../../assets/images/logoctu.png" alt='ImageUser'/>
                        </div>
                        <div class='user--infor'>
                            <h3 class='mb-4 fw-bold'>{{account.user.hoten}}</h3>
                            <p><strong>Số thẻ: </strong>{{account.user.masinhvien}}</p>
                            <p><strong>Ngày cấp: </strong>16/09/2019</p>
                            <p><strong>Ngày hết hạn: </strong>31/12/2023</p>
                            <p><strong>Khoa: </strong>Khoa Công Nghệ Thông Tin & Truyền Thông</p>
                            <p><strong>Khóa: </strong>2019</p>
                            <p><strong>Lớp: </strong>{{account.user.lop}}</p>
                            <p><strong>Địa chỉ: </strong> {{account.user.diachi}}</p>
                            <p><strong>Điện thoại: </strong></p>
                            <p><strong>Email: </strong>tranb1910317@student.ctu.edu.vn</p>
                        </div>
                    </div>
                    <div v-else>
                        <p class='bg-danger bg-opacity-10 ps-3 py-5'>
                            <strong>Thông báo: </strong>
                            CẦN PHẢI ĐĂNG NHẬP ĐỂ XEM THÔNG TIN</p>
                    </div>
                </div>                                              
            </div>
        </div>
</template>

<script>

import {
    library
} from '@fortawesome/fontawesome-svg-core'
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';
import {
    faBook,
    faCalendar,
    faCircleInfo,
    faUser
} from "@fortawesome/free-solid-svg-icons";
library.add(faBook, faCalendar,faCircleInfo,faUser)
import "./inforuser.scss";
import { useAccountStore } from '../../store/useStore';
export default {
    data(){
        const account = useAccountStore();
        return {account};
    }
}
</script>