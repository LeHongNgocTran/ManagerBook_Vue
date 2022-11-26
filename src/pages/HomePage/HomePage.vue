<template>
<div class='wrapper-home'>
    <div class='first--home__container'>
        <div class='search-container'>

            <ul class='list-find'>
                <li>
                    <router-link :to="{name : 'searchbook'}">
                        <font-awesome-icon icon='fa-solid fa-rocket' />
                        &nbsp;&nbsp;Tìm nhanh
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name : 'searchbook'}">
                        <font-awesome-icon icon='fa-solid fa-search' />
                        &nbsp;&nbsp;Cơ bản
                    </router-link>
                </li>
            </ul>

            <div class='search-bar'>
                <input type='search' placeholder="Nhập sách cần tìm" />
                <button type='button' class="btn btn-primary search-button">
                    <font-awesome-icon icon="fa-solid fa-search" />
                    &nbsp; Tìm kiếm
                </button>
            </div>

        </div>
    </div>
    <div class='second--home__container'>
        <h1 class='text-center'>TÀI LIỆU THEO NHÓM VÀ SẢN PHẨM THÔNG TIN</h1>
        <p className='text-center mt-3 text-black-50 mb-5'>Chọn và tra cứu tài liệu theo thông tin</p>
        <hr />
        <div class='container container-list'>
            <div class='row container--list__row'>
                <div class='col-sm-4 d-flex flex-row justify-content-center'>
                    <font-awesome-icon icon='fa-solid fa-tags' size="2x" color="blue" />
                    <ul>
                        <h3>Tài liệu chuyền ngành</h3>
                        <li>
                            <router-link to="#">
                                Ngôn ngữ Java
                            </router-link>
                        </li>
                        <li>
                            <router-link to="#">
                                Phân tích thiết kế hệ thống thông tin
                            </router-link>
                        </li>
                        <li>
                            <router-link to="#">Lý thuyết đồ thị</router-link>
                        </li>
                        <route-link to="#" class='text-black-50'>
                            <ins>Xem thêm</ins>
                        </route-link>
                    </ul>
                </div>
                <div class='col-sm-4 d-flex flex-row justify-content-center'>
                    <font-awesome-icon icon="fa-solid fa-folder-open" size="2x" color="blue" />
                    <ul>
                        <h3>Tài liệu điện tử</h3>
                        <li>
                            <route-link to="#">Nhập môn lập trình căn bản</route-link>
                        </li>
                        <li>
                            <route-link to="#">Ngôn ngữ mô hình hóa</route-link>
                        </li>
                        <li>
                            <route-link to="#">Phát triển ứng dụng di động</route-link>
                        </li>
                        <route-link to="#" class='text-black-50'>
                            <ins>Xem thêm</ins>
                        </route-link>
                    </ul>
                </div>
                <div class='col-sm-4 d-flex flex-row justify-content-center'>
                    <font-awesome-icon icon="fa-solid fa-file" size="2x" color="blue" />
                    <ul>
                        <h3>Tài liệu mới</h3>
                        <li>
                            <route-link to="#">Phân tích thiết kế hệ thông thông tin</route-link>
                        </li>
                        <route-link to="#" class='text-black-50'>
                            <ins>Xem thêm</ins>
                        </route-link>
                    </ul>
                </div>
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
    faRocket,
    faSearch,
    faTags,
    faFolderOpen,
    faFile,
    faRegistered
} from "@fortawesome/free-solid-svg-icons";
library.add(faRegistered,faRocket, faSearch, faTags, faFolderOpen, faFile)

</script>

<style lang="scss" scoped>
   .first--home__container {
    background: url('../../assets/images/images.jpeg') no-repeat center;
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    font-size: bold;
    justify-content: center;
}

.search-container {
    align-self: center;
    width: 50%;
    height: 60%;
    .list-find {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 50px;
        margin-left: -20px;
        li {
            padding: 10px;
            font-size: 2rem;
            border-right: 1px solid;
            font-weight: bold;
            a{
                color: white !important;
            }
            a:hover {
                cursor: pointer;
            }
        }
    }

    .search-bar {
        display: flex;
        padding: 20px;
        background-color: rgb(122, 122, 122);
        input {
            height: 50px;
            font-size: 2rem;
            width: 85%;
            padding-left: 10px;
        }
        .search-button{
            font-size: 1.5rem;
            width: 20%;
            padding: 0px 30px;
        }
    }

    
}
.second--home__container {
    margin: 100px 0px;
    .container--list__row {
        margin-top: 100px;
    }
    hr{
        display: inline-block;
        width: 40%;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
  
       
    }
    ul {
        list-style-type: square;
        
        li, h3 {
            margin-bottom: 10px;
        }

        li{
            margin-left: 20px;
        }
    }
}
</style>
