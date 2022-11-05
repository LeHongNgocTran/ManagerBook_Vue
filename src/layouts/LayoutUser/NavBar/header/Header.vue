
<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {faUser} from "@fortawesome/free-solid-svg-icons";
library.add(faUser);
</script>

<template>
    <div class='signIn-nav'>
        <router-link 
            :to="{name:'login'}" > 
             <font-awesome-icon icon="fa-solid fa-user" />&nbsp;
             Đăng Nhập
        </router-link>
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
        left: 75%;
        font-size: 1.5rem;
        border-right: 1px solid white;
        border-left: 1px solid white;
        padding: 6px 10px;
        color: white !important;
        
    }

.container-header{
    display: block;
    width: 100%;
    height: 122px;
    overflow: hidden;
    background: url('@/assets/images/banner.png') center no-repeat #4396ca;
}
</style>