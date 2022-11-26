<template>
<div class='map--first__container'>
    <MapBox></MapBox>
</div>
<div class='map--second__container'>
    <div class='first--map__container'>
        <h4 class='fw-bold'>Hướng dẫn tính năng liên hệ</h4>
        <h4 class='fw-bold'>Thư viện Trường Công Nghệ Thông Tin & Truyền Thông - Đại học Cần Thơ</h4>
        <ul>
            <li>
                <font-awesome-icon icon="fa-solid fa-location-dot" /> Khu 2 - Đường 3/2 - Q.Ninh Kiều - TP.Cần Thơ
            </li>
            <li>
                <font-awesome-icon icon="fa-solid fa-phone" /> 0123 456 789
            </li>
            <li>
                <font-awesome-icon icon="fa-solid fa-fax" /> 0123 456 789
            </li>
            <li>
                <font-awesome-icon icon="fa-solid fa-envelope" /> 0292 383 1565
            </li>
        </ul>
    </div>
    <div class='second--map__container'>
        <form class="form--map__container">
            <label for="fname">Họ tên</label><br />
            <input type="text" id="fname" name="fname" /><br />
            <label for="fphone">Điện thoại(*)</label><br />
            <input type="text" id="fphone" name="fphone" /><br />
            <label for="femail">E-Mail(*)</label><br />
            <input type="text" id="femail" name="femail" /><br />
            <label for="fcontent">Nội dung</label><br />
            <textarea class='mb-5' id="fcontent" name="fcontent"></textarea><br />
            <button class='btn btn-primary me-3 fs-5'>Gửi đi</button>
            <button class='btn btn-primary fs-5' type='reset'>Hủy bỏ</button>
        </form>
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
    faLocationDot,
    faPhone,
    faFax,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
library.add(faLocationDot, faPhone, faFax, faEnvelope);
// CSS
import "./contact.scss";
//Mapbox
import MapBox from "./mapbox.vue";
export default {
    components: {
        MapBox
    },
}
</script>

<style>
    
</style>
