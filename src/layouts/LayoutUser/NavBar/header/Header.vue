
<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
    useAccountStore
} from "@/store/useStore";
library.add(faUser);
export default {
    setup() {
        const account = useAccountStore();
        return { account };
    },
    methods: {
        logout (){
            this.account.user =  null
            this.$router.push({name : "homepage"});
        }
    }
}
</script>

<template>
    <div class='signIn-nav' v-if="account.user == null">
        <router-link :to="{ name: 'login' }">
            <font-awesome-icon icon="fa-solid fa-user" />&nbsp;
            Đăng Nhập
        </router-link>
    </div>
    <div class='signIn-nav' v-else>
        <router-link :to="{ name: 'inforuser' }">
            <font-awesome-icon icon="fa-solid fa-user" />&nbsp;
            {{account.user.hoten}}
        </router-link>
        <a @click="logout">
            <font-awesome-icon icon="fa-solid fa-right-from-bracket"/>&nbsp;
            Đăng xuất
        </a>
    </div>
    <div class='container-header'></div>
</template>

<style scoped >
.signIn-nav {
    background-color: rgb(33, 32, 32);
    color: white;
    padding: 6px;
}

a {
    position: relative;
    left: 70%;
    font-size: 1.5rem;
    border-right: 1px solid white;
    border-left: 1px solid white;
    padding: 6px 10px;
    color: white !important;
    cursor: pointer;
    right: 30%;
}
a:hover{
    font-weight: bold;
}
.container-header {
    display: block;
    width: 100%;
    height: 122px;
    overflow: hidden;
    background: url('@/assets/images/banner.png') center no-repeat #4396ca;
}
</style>