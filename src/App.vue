<script>
import Navbar from "@/layouts/LayoutUser/NavBar/Navbar.vue";
import Footer from "@/layouts/LayoutUser/Footer/footer.vue";
import Admin from "@/layouts/LayoutAdmin/AdminScreen.vue";
import { useAccountStore } from "./store/useStore";
import {library} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {faCircleArrowUp} from "@fortawesome/free-solid-svg-icons";
library.add(faCircleArrowUp);
export default {
    data() {
        const account = useAccountStore();
        return { account }
    },
    components: {
        Navbar,
        Footer,
        Admin
    },
    // Nơi viết hàm chức năng ở vue
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    },
}
</script>

<template class='page'>
    <div id='app'>
        <header v-if="this.account.user == null || this.account.user.phanquyen == 1">
            <Navbar></Navbar>
        </header>

        <main class="container-page">
            <router-view></router-view>
        </main>

        <footer v-if="this.account.user == null || this.account.user.phanquyen == 1">
            <Footer></Footer>
        </footer>

        <div class='button-up' @click="scrollToTop">
            <font-awesome-icon 
                size='2x'
                icon='fa-solid fa-circle-arrow-up' />
        </div>
    </div>
</template>

<style lang='scss' >
@import "../src/layouts/components/GlobalStyle/GlobalStyle.scss";
.button-up{
    position: fixed;
    bottom: 10px;
    right: 1%;
    z-index: 2000;
  
}
</style>
