<script>
    import Header from "./header/Header.vue";
    export default {
        components: {
            Header
        }
    }
</script>

<template>
    <div class="wrapper-navbar">
        <Header></Header>
        <div class='sidebar-nav text-center mb-2'>
            <ul class='navbar-nav mt-0 d-flex flex-row justify-content-center p-2'>
                <li class="nav-item me-3 px-3 py-2">
                    <router-link class=' content-nav mt-0' :to="{name:'homepage'}">Trang chủ</router-link>
                </li>
                <li class="nav-item me-3 px-3 py-2  ">
                    <router-link class=' content-nav mt-0 d-block' :to="{name:'searchbook'}">Tra cứu tài liệu</router-link>
                </li>
                <li class="nav-item me-3 px-3 py-2  ">
                    <router-link class=' content-nav mt-0 d-block' to="#">Upload tài liệu số</router-link>
                </li>
                <li class="nav-item me-3 px-3 py-2  ">
                    <router-link class=' content-nav mt-0 d-block' to="#">Yêu cầu tài liệu</router-link>
                </li>
                <li class="nav-item me-3 px-3 py-2  ">
                    <router-link class=' content-nav mt-0 d-block' to="#">Danh sách tài liệu</router-link>
                </li>
                <li class="nav-item me-3 px-3 py-2  ">
                    <router-link class=' content-nav mt-0 d-block' :to="{name:'contact'}">Liên hệ</router-link>
                </li>
                <li class="nav-item me-3 px-3 py-2  ">
                    <router-link class=' content-nav mt-0 d-block' :to="{name:'inforuser'}">Thông tin bạn đọc</router-link>
                </li>
            </ul>

        </div>
    </div>
</template>

<style scoped>
    a {
        color: black !important;
        font-size: 1.4rem;
        text-transform: uppercase;
        display: block;
        padding: 1rem;
    }
.nav-item:hover,.nav-item a:hover {
    color: white !important;
    background-color: #2fa0e1;
}
</style>
