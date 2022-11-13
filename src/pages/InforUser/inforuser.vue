<template>
<div class='user-wrapper'>
    <div class='user--first__container'>
        <ul>
            <li>
                <h4 class='fs-3 text-uppercase py-3' @click="changeFlag">
                    <font-awesome-icon icon="fa-solid fa-user" />&nbsp;
                    Thông tin chung
                </h4>

            </li>
            <li>
                <router-link :to="{ name: 'phieumuon' }" v-if="this.accept == false">
                    <h4 class='fs-3 text-uppercase py-3'>
                        <font-awesome-icon icon="fa-solid fa-book" />&nbsp;
                        Tài liệu đã mượn
                    </h4>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'giahan' }" v-if="this.accept == false">
                    <h4 class='fs-3 text-uppercase py-3'>
                        <font-awesome-icon icon="fa-solid fa-calendar" />&nbsp;
                        Tài liệu gia hạn
                    </h4>
                </router-link>
            </li>
            <li>
                <router-link to="#" v-if="this.accept == false">
                    <h4 class='fs-3 text-uppercase py-3'>
                        <font-awesome-icon icon="fa-solid fa-circle-info" />&nbsp;
                        Tài liệu yêu cầu mượn
                    </h4>
                </router-link>

            </li>
        </ul>
    </div>
    <div class='user--second__container'>
        <div class='user--infor__content' v-if='account.user != null'>
            <div class='infor--contain'>
                <InforName v-if="this.accept == true" />
                <router-view v-else></router-view>
            </div>
        </div>
        <div v-else>
            <p class='bg-danger bg-opacity-10 ps-3 py-5'>
                <strong>Thông báo: </strong>
                CẦN PHẢI ĐĂNG NHẬP ĐỂ XEM THÔNG TIN
            </p>
        </div>
    </div>
</div>
</template>

<script>
import InforName from "./inforname.vue";
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
library.add(faBook, faCalendar, faCircleInfo, faUser)
import "./inforuser.scss";
import {
    useAccountStore
} from '../../store/useStore';
export default {
    components: {
        InforName
    },
    data() {
        const account = useAccountStore();
        return {
            account,
            accept: true,
        };
    },
    methods: {
        changeFlag(){
            this.$router.push({name :'name'});
            this.accept = false ;
        },

    }
}
</script>
