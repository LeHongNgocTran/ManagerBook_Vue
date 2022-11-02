<template>
<div class='add--wrapper'>
    <h2 class="fs-1 py-5">THÊM THÔNG TIN SINH VIÊN MƯỢN SÁCH</h2>
    <div class='second--add__container'>
        <div class='container-fluid mb-5'>
            <div class="row">
                <div class="col mb-5">
                    <!-- Name input -->
                    <div class="form-outline">
                        <label class="form-label" for="mssv">Mã số sinh viên</label>
                        <input type="text" id="mssv" class="form-control" />
                    </div>
                </div>
                <div class="col">
                    <!-- Loại sách -->
                    <label for="namestudent">Tên sinh viên</label>
                    <input type="text" id="namestudent" class="form-control" />
                </div>
            </div>
            <div class="row mb-5">
                <div class="col">
                    <!-- Name input -->
                    <div class="form-outline">
                        <label class="form-label" for="idbook">Mã sách</label>
                        <div class='d-flex flex-row'>
                            <input type="text" id="idbook" class="form-control me-3" />
                            <button class='btn btn-success d-flex flex-row px-3 py-2'>
                                <font-awesome-icon icon="fa-solid fa-plus" class='mt-2' />
                                &nbsp;Thêm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class='row mb-5'>
                <div class='col'>
                    <table class='table table-striped'>
                        <thead>
                            <tr class="text-center">
                                <th>STT</th>
                                <th>Mã sách</th>
                                <th>Tên sách</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="text-center align-middle">
                                <td>1</td>
                                <td>ML011</td>
                                <td>Cây cam ngọt của tôi</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class='row'>
                <div class='col d-flex justify-content-end'>
                    <button class='btn btn-primary'>
                        <font-awesome-icon icon="fa-solid fa-plus" class='mt-2' />
                                &nbsp;Hoàn tất
                    </button>
                </div>
            </div>
        </div>
    </div>
    <router-link :to="{ name: 'listrentbook' }">
        <font-awesome-icon icon="fa-solid fa-arrow-left" />
        &nbsp; Quay lại
    </router-link>
</div>
</template>

<style lang="scss" scoped>
label {
    margin-bottom: 10px;
}

input,
select {
    height: 40px;
    font-size: 1.6rem;
}

a:hover {
    color: red !important;
    font-size: 1.6rem;
    ;
    text-decoration: underline !important;
}

button {
    font-size: 1.6rem;
}
</style>
