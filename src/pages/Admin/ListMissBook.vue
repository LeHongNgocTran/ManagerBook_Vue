<template>
    <div class='listbook--wrapper'>
        <h2 class="fs-1 py-5">DANH SÁCH SINH VIÊN TRỄ HẠN</h2>
        <div class='function-container mb-5'>
            <button class='btn btn-primary fs-4'>
                <font-awesome-icon icon="fa-solid fa-plus" /> Duyệt danh sách
            </button>
            <button class='btn btn-success fs-4'>
                <font-awesome-icon icon="fa-solid fa-file-excel" /> Xuất Excel
            </button>
            <button class='btn btn-danger fs-4'>
                <font-awesome-icon icon="fa-solid fa-file-pdf" /> Xuất PDF
            </button>
        </div>
        <div class="shadow mt-5">
            <table class='table table-striped'>
                <thead>
                    <tr class="text-center">
                        <th>STT</th>
                        <th>Mã phiếu mượn</th>
                        <th>Mã sinh viên</th>
                        <th>Số lượng sách</th>
                        <th>Trạng thái</th>
                        <th>Tác vụ</th>
                        <th>Chi tiết</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-center align-middle">
                        <td>1</td>
                        <td>
                           ML001
                        </td>
                        <td>B1910317</td>
                        <td>10</td>
                        <td>
                            <button class='btn btn-dark w-50'>Trễ </button>
                        </td>
                        <td>
                            <font-awesome-icon class='button-function' icon="fa-solid fa-pen-to-square" />
                            <font-awesome-icon class='button-function' icon="fa-solid fa-trash" />
                        </td>
                        <td>
                            <font-awesome-icon class='button-function' :onClick={} icon='fa-solid fa-circle-info'/> 
                        </td>
                    </tr>
                    <tr class="text-center align-middle">
                        <td>1</td>
                        <td>
                           ML001
                        </td>
                        <td>B1910317</td>
                        <td>10</td>
                        <td>
                            <button class='btn btn-danger w-50'>Chưa duyệt</button>
                        </td>
                        <td>
                            <font-awesome-icon class='button-function' icon="fa-solid fa-pen-to-square" />
                            <font-awesome-icon class='button-function' icon="fa-solid fa-trash" />
                        </td>
                        <td>
                            <font-awesome-icon class='button-function' :onClick={} icon='fa-solid fa-circle-info'/> 
                        </td>
                    </tr>
                </tbody>
            </table>
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
    faTrash,
    faPenToSquare,
    faPlus,
    faFileExcel,
    faFilePdf,
    faCircleInfo,
    faFilter
} from "@fortawesome/free-solid-svg-icons";
library.add(
    faTrash,
    faPenToSquare,
    faPlus,
    faFileExcel,
    faFilePdf,
    faCircleInfo,
    faFilter)
</script>

<style lang="scss" scoped>
.listbook--wrapper{
button{
        padding: 8px;
        font-size:1.2rem;
    }
}
.function-container{
    margin-bottom: 20px ;
    button{
        margin-right: 10px;
    }
}
.button-function{
    margin-right: 5px;
    font-size:2rem;
    cursor: pointer;
}
</style>