<script>
    import Navbar from "@/layouts/navbar/Navbar.vue";
    import Footer from "@/layouts/footer/footer.vue";
    export default {
        components: {
            Navbar, 
            Footer
        }
    }
</script>

<template class='page'>
    <div id='app'>
        <Navbar></Navbar>
        <div class="container-page">
            <router-view></router-view>
        </div>
        <Footer></Footer>
    </div>
</template>

<style>
    @import "../src/layouts/components/GlobalStyle/GlobalStyle.scss"; 
</style>
