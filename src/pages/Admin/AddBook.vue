<template>
    <div class='add--wrapper'>
        <h2 class="fs-1 py-5">THÊM SÁCH</h2>
        <div class='second--add__container'>
            <div class='container-fluid mb-5'>
                <div class="row">
                    <div class="col mb-5">
                        <!-- Name input -->
                        <div class="form-outline">
                            <label class="form-label" for="tensach">Tên sách</label>
                            <input type="text" id="tensach" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <!-- Loại sách -->
                        <label for="loaisach">Loại sách</label>
                        <select id="loaisach" class="form-control">
                            <option selected>L01 - Công nghệ thông tin</option>
                            <option>L02 - Ngoại ngữ</option>
                        </select>
                    </div>
                    <div class="col">
                        <!-- Email input -->
                        <div class="form-outline">
                            <label class="form-label" for="tacgia">Tác giả</label>
                            <input type="text" id="tacgia" class="form-control" />
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <!-- Name input -->
                        <div class="form-outline">
                            <label class="form-label" for="tennxb">Tên nhà xuất bản</label>
                            <input type="text" id="tennxb" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <!-- Name input -->
                        <div class="form-outline">
                            <label class="form-label" for="vitrike">Vị trí kệ</label>
                            <select id="vitrike" class="form-control">
                                <option selected>K01 - Công nghệ thông tin</option>
                                <option>K02 - Ngoại ngữ</option>
                            </select>
                        </div>
                    </div>
                    <div class="col">
                        <!-- Email input -->
                        <div class="form-outline">
                            <label class="form-label" for="vitriday">Vị trí dãy</label>
                            <select id="vitriday" class="form-control">
                                <option selected>D01 - Công nghệ thông tin</option>
                                <option>D02 - Ngoại ngữ</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <router-link :to="{ name: 'listbook' }">
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

a:hover{
        color: red !important;
        font-size: 1.6rem;;
        text-decoration: underline !important;
    }
</style>
