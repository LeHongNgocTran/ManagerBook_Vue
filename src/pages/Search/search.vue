<script>
</script>

<template>
<div class='search__wrapper'>
    <div class='first--search__container'>
        <div class='first--searchcontainer__title'>
            <font-awesome-icon icon='fa-solid fa-circle-plus' size='2x'></font-awesome-icon>
            <h3>Hướng dẫn tra cứu</h3>
        </div>
        <div class='first--searchcontainer__content'>
            <ul>
                <li>
                    <strong>Tìm nhanh: </strong>
                    Tìm trong Tên tài liệu, Tác giả, Năm xuất bản, Từ khóa
                </li>
                <li>
                    <strong>Tìm đơn giản: </strong>
                    Tìm theo Loại tài liệu, Từ khóa, Tên tài liệu, Tác giả, Năm xuất bản
                </li>
                <li>
                    <strong>Tìm nâng cao: </strong>
                    Tìm theo theo toán tử AND, OR, NOT
                </li>
                <li>
                    <strong>Tìm liên thư viện: </strong>
                    Tìm tài liệu ở thư viện liên kết
                </li>
            </ul>
        </div>
    </div>
    <div class='second--search__container'>
        <div class='search__container'>
            <ul class='d-flex flex-row text-uppercase'>
                <li class='me-4'>Tìm Nhanh</li>
                <li>Cơ bản</li>
            </ul>
            <div class='second--search__bar'>
                <select name="options--search" id="searchs" class='search__bar--options'>
                    <option value="Từ khóa bất kỳ" require>Từ khóa bất kỳ</option>
                    <option value="Nhan đề">Nhan đề</option>
                    <option value="Tác giả">Tác giả</option>
                    <option value="Nhà xuất bản">Nhà xuất bản</option>
                </select>
                <input type="search" placeholder="Nhập sách bạn muốn tìm" />
                <div class='search__button'>
                    <button>
                        <font-awesome-icon icon='fa-solid fa-search' />
                        &nbsp; Tìm kiếm
                    </button>
                </div>
            </div>
            <InforBook></InforBook>
        </div>
    </div>
</div>
</template>

<script>
    import InforBook from "@/layouts/components/InforBook/inforbook.vue";
    export default {
        components: {
            InforBook
        }
    }
    import './search.scss';
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import {faCirclePlus,faSearch} from "@fortawesome/free-solid-svg-icons";
    library.add(faCirclePlus,faSearch)
</script>

<!-- <style scoped>
.second--search__container {
    width: 70%;
    background-color: white;
}

.search__container {
    padding: 20px;
}

ul {
    margin-left: -20px;
}

.second--search__bar {
    display: flex;
    flex-direction: row;
    padding: 1.5rem;
    background-color: rgb(228, 228, 228);
    font-size: 1.4rem;
}

input {
        width: 60%;
        height: 4rem;
        font-size: 1.5rem;
        border: none;
    }
    .search__button {
    margin-left: 1.2rem;

   
}

.search__bar--options {
    border: none;
    margin-right: 1.5rem;
    background-color: white;
}
</style> -->
