<script>
import InforBook from "@/layouts/LayoutUser/InforBook/inforbook.vue";

import {
    library
} from '@fortawesome/fontawesome-svg-core'
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';
import {
    faCirclePlus,
    faSearch
} from "@fortawesome/free-solid-svg-icons";
import InputSearch from "./InputSearch.vue";
import BookService from "@/services/book.service"
library.add(faCirclePlus, faSearch)

import VueBootstrapTypeahead from "vue-bootstrap-typeahead";

export default {
    components: {
        InforBook,
        InputSearch,
        books: [],
        VueBootstrapTypeahead
    },
    data() {
        return {
            modelValue: "",
            searchText: "",
            activeIndex: -1,
            books: []
        }
    },
    watch: {
        searchText() {
            this.activeIndex = -1;
        },
    },
    computed: {
        booksString() {
            return this.books.map((book) => {
                const {
                    tensach,
                    tentacgia,
                    tenNXB,
                    tenloai
                } = book;
                return [tensach, tentacgia, tenNXB, tenloai].join("");
            });
        },
        filteredBooks() {
            if (!this.searchText)
                return this.books
            return this.books.filter((_book, index) =>
                this.booksString[index].toLowerCase().includes(this.searchText.toLowerCase())
            )
        },
        activeBook() {
            if (this.activeIndex < 0)
                return null;
            return this.filteredBooks[this.activeIndex];
        },

        filteredBookCount() {
            return this.filteredBooks.length;
        }
    },
    methods: {
        async getAllBook() {
            try {
                this.books = await BookService.getAll();
                this.displayBooks = this.books.slice(0, 3);
                this.rows = this.books.length;
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.getAllBook();
            this.activeIndex = -1;
        }
    },
    mounted() {
        this.refreshList();
    }

}
</script>

<template>
<div class='search__wrapper'>
    <div class='first--search__container'>
        <div class='first--searchcontainer__title'>
            <font-awesome-icon icon='fa-solid fa-circle-plus' size='2x'></font-awesome-icon>
            <h3 class='fw-bold text-uppercase'>Hướng dẫn tra cứu</h3>
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
                <li class='me-4 fw-bold border-end pe-4'>Tìm Nhanh</li>
                <li class='fw-bold pe-4'>Cơ bản</li>
            </ul>
            <div class='second--search__bar'>
                <InputSearch v-model="searchText"/>
            </div>
            <InforBook v-if="filteredBookCount > 0 && searchText != null" :books="filteredBooks" v-model:activeIndex="activeIndex"></InforBook>
            <p v-if="filteredBookCount == 0" class="mt-4 bg-danger bg-opacity-10 text-danger py-4 ps-3">Không tìm thấy sách phù hợp với yêu cầu của bạn.</p>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
.search__wrapper {
    display: flex;
    flex-direction: row;
    border: 1px solid rgb(221, 221, 221);
    padding: 30px;
    margin-bottom: 100px;
    width: 60%;
    background-color: rgb(225, 225, 225);
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    height: 1000px;
}

.first--search__container {
    background-color: white;
    ;
    width: 30%;
    margin-right: 20px;
    border: 1px solid rgb(224, 224, 224);
    background-color: white;

    .first--searchcontainer__title {
        display: flex;
        flex-direction: row;
        background-color: rgb(241, 241, 241);
        padding: 10px;
        border-bottom: 4px solid rgb(242, 242, 242);

        h3 {
            margin-left: 10px;
            margin-top: 5px;
        }
    }

    ul {
        padding: 2rem;
        font-size: 1.5rem;
    }

    li {
        margin-bottom: 20px;
        cursor: pointer;
    }

}

.second--search__container {
    width: 70%;
    background-color: white;
}

.search__container {
    padding: 20px;

    ul {
        margin-left: -20px;
    }

    .second--search__bar {
        display: flex;
        flex-direction: row;
        padding: 1.5rem;
        background-color: rgb(241, 241, 241);
        font-size: 1.4rem;
        height: 7rem;

        input {
            width: 57%;
            font-size: 1.5rem;
            border: none;
        }
    }

    .search__button {
        margin-left: 1.2rem;

        button {
            background-color: #4396ca;
            height: 100%;
            border: none;
            width: 100%;
            display: block;
            font-size: 1.4rem;
            padding-left: 10px;
            padding-right: 10px;
        }
    }
}

.search__bar--options {
    border: none;
    margin-right: 1.5rem;
    background-color: white;

}
</style>
