<script>
    import Navbar from "@/layouts/navbar/Navbar.vue";
    import Footer from "@/layouts/footer/footer.vue";
    import Admin from "@/layouts/AdminScreen/adminscreen.vue";
    export default {
        data(){
            return {
                permission : 2
            
            }
        },
        components: {
            Navbar, 
            Footer,
            Admin
        },
        // Nơi viết hàm chức năng ở vue
    }
</script>

<template class='page'>
    <div id='app' v-if="permission != 2">
        <Navbar></Navbar>
        <div class="container-page">
            <router-view></router-view>
        </div>
        <Footer v-if="permission != 2"></Footer>
    </div>

    <!-- Giao dien Admin -->
    <div id='app' v-if="permission == 2 || permission == 1 ">
        <div class="container-page">
            <router-view />
        </div>
    </div>

</template>

<style>
    @import "../src/layouts/components/GlobalStyle/GlobalStyle.scss"; 
</style>
