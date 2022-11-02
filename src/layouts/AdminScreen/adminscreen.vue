<template>
<div class='admin--layouts__wrapper d-flex flex-row'>
    <!-- Thanh tùy chọn -->
    <div class='first--admin__container'>
        <div class='image--admin__content'>
            <router-link to="/">
                <img src="../../assets/images/ctu.png" alt="CICT" />
            </router-link>
        </div>
        <div class='catolog--admin__container'>
            <ul>
                <li class='list--group__content'>
                    <router-link :to="{name :'dashboard'}">
                        <h4>
                            <font-awesome-icon icon="fa-solid fa-house" />
                            &nbsp;&nbsp; Dashboard
                        </h4>
                    </router-link>
                </li>
                <li class='list--group__content'>
                    <router-link :to="{name : 'listbook' }">
                        <h4>
                            <font-awesome-icon icon="fa-solid fa-book" />
                            &nbsp;&nbsp; Danh sách sách
                        </h4>
                    </router-link>
                </li>
                <li class='list--group__content'>
                    <router-link :to="{name : 'listrentbook'}">
                        <h4>
                            <font-awesome-icon icon="fa-solid fa-house" />
                            &nbsp;&nbsp; Sách mượn
                        </h4>
                    </router-link>
                </li>
                <li class='list--group__content'>
                    <router-link :to="{name: 'listrenewalbook'}">
                        <h4>
                            <font-awesome-icon icon="fa-solid fa-house" />
                            &nbsp;&nbsp; Đăng ký gia hạn
                        </h4>
                    </router-link>
                </li>
                <li class='list--group__content'>
                    <router-link :to="{name:'listmissbook'}">
                        <h4>
                            <font-awesome-icon icon="fa-solid fa-house" />
                            &nbsp;&nbsp; Trả sách trễ hạn
                        </h4>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
    <!-- Header của Admin -->
    <div class='second--admin__container '>
        <div class='side-bar'>
            <div class='search-bar'>
                <input type="text" class="form-control" placeholder="Seach for ..." aria-label="Search" aria-describedby="Search" />
                <button class='btn px-4'>
                    <font-awesome-icon icon="fa-solid fa-search" />
                </button>
            </div>
            <div class='side--bar__right'>
                <div class='side--bar__button'>
                    <button>
                        <font-awesome-icon icon="fa-solid fa-bell" />
                    </button>
                    <button>
                        <font-awesome-icon icon="fa-solid fa-envelope" />
                    </button>
                </div>
                <div class='side--bar__account'>
                    <div class='button-group dropdown'>
                        <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Le Hong Ngoc Tran &nbsp;&nbsp;
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li class='content-dropdown'>
                                <router-link class="dropdown-item p-3 fs-5 " to="#">
                                    <font-awesome-icon icon="fa-solid fa-user " />
                                    &nbsp;&nbsp;
                                    Profile
                                </router-link>
                            </li>
                            <li class='content-dropdown'>
                                <router-link class="dropdown-item p-3 fs-5" to="#">
                                    <font-awesome-icon icon="fa-solid fa-gears" />
                                    &nbsp;&nbsp;Cài đặt
                                </router-link>
                            </li>
                            <li class='content-dropdown'>
                                <router-link class="dropdown-item p-3 fs-5" to="#">
                                    <font-awesome-icon icon="fa-solid fa-language" />
                                    &nbsp;&nbsp;Ngôn ngữ
                                </router-link>
                            </li>
                            <hr />
                            <li class='content-dropdown'>
                                <router-link class="dropdown-item p-3 fs-5" to="#">
                                    <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
                                    &nbsp;&nbsp;Đăng xuất
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- Chứa các component con -->
        <div class='container-children'>
            <router-view />
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
    faBook,
    faHouse,
    faLanguage,
    faRightFromBracket,
    faGears,
    faUser,
    faSearch,
    faBell,
} from "@fortawesome/free-solid-svg-icons";
library.add(faBell, faSearch, faBook, faHouse, faLanguage, faRightFromBracket, faGears, faUser)
</script>

<style lang="scss" scoped>
.admin--layouts__wrapper {
    height: 100vh;
}

.first--admin__container {
    background-color: rgb(26, 26, 61);
    height: 100vh;
    width: 20%;
    .image--admin__content {
        img {
            display: block;
            width: 20%;
            height: 100%;
            margin: 20px auto;
        }
    }
    ul{
        padding-right: 2rem;
    }
    .list--group__content {
        cursor: pointer;
        margin-bottom: 2rem;
        border-bottom: 1px solid gray;
        padding: 10px;
        color: white;
        margin-left: -10px;
      
        a {
            color: white !important;
        }

        h4 {
            padding: 2rem;
            font-size: 1.6rem;
        }

        :hover {
            background-color: rgb(158, 166, 173);
            border-radius: 5px;
            font-weight: bold;
        }
    }
}

.second--admin__container {
    width: 80%;
    .side-bar {
        display: flex;
        flex-direction: row;
    }

    .search-bar {
        margin-top: 20px;
        margin-left: 20px;
        padding-bottom: 10px;
        display: flex;
        flex-direction: row;
        width: 50%;

        input {
            height: 40px;
            width: 50%;
            background-color: aliceblue;
            border: none;
            font-size: 1.6rem;
        }

        button {
            font-size: 1.6rem;
            height: 4rem;
            border:none;
            color: white;
            background-color: rgb(26, 26, 61);
        }
    }

    .side--bar__right {
        width: 50%;
        margin-top: 20px;
        margin-right: 20px;
        padding-bottom: 10px;
        display: flex;
        flex-direction: row;
        justify-content: end;
       
        button {
            padding: 10px;
            background-color: rgb(255, 255, 255);
            color: gray;
           
        }
    }



    .content-dropdown {
        width: 200px;
        a {
            font-size: 1.4rem !important;
        }
    }

    .container-children {
        background-color: white;
        padding: 20px;
        
    }

}
</style>
