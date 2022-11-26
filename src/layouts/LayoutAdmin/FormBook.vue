<script >

import BookService from "@/services/book.service";
import { useBookStore } from '../../store/useStore';
import {
    Form,
    Field,
    ErrorMessage
} from "vee-validate";
export default {
    components: {
        Form,
        Field,
        ErrorMessage
    },
    // thông báo sự kiên cho component cha
    props: {
        _id: {},
    },
    data() {
        const stt = useBookStore().length;
        return {
            selectedFile: '',
            book: {
                tenNXB: "",
                tenloai: "",
                tensach: "",
                tentacgia: "",
                stt: stt,
                soke: "",
                tenday: "",
                trangthai: false,
            }
        };
    },
    methods: {
        async getBook() {
            try {
                if (this._id != null)
                    this.book = await BookService.getBookId(this._id);
            }
            catch (error) {
                console.log(error);
                //Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
                this.$router.push({
                    name: "notfound",
                    params: {
                        pathMatch: this.$route.path.split("/").slice(1)
                    },
                    query: this.$route.query,
                    hash: this.$route.hash
                });
            }
        },

        onFileSelected(event) {
            this.selectedFile = event.target.files[0];
            // console.log(this.selectedFile);
        },

        buildFormData(formData, data, parentKey) {
            if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
                Object.keys(data).forEach(key => {
                    this.buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
                });
            } else {
                const value = data == null ? '' : data;
                formData.append(parentKey, value);
            }
        },

        addBook() {
            if (this.book.tenNXB != '' || this.book.tenday != "" || this.book.tenloai != '' || this.book.tensach != "" || this.book.tentacgia != '') {
                var formData = new FormData();
                formData.append('file', this.selectedFile);
                this.buildFormData(formData, this.book)
                // console.log(this.book);
                if (confirm("Xác nhận thêm thông tin sách ? ")) {
                    this.book = BookService.create(formData);
                    this.$router.push({ name: 'listbook' });
                }
            }
            else {
                confirm("Lỗi không thể thêm sách được");
            }
        },

        updateBook() {
            console.log(1);
            if (confirm("Xác nhận cập nhât thông tin ?")) {
                try {
                    var formData = new FormData();
                    formData.append('file', this.selectedFile);
                    this.buildFormData(formData, this.book);
                    BookService.update(this._id, formData);
                    this.$router.push({ name: 'listbook' })
                }
                catch (error) {
                    console.log(error);
                }
            }
        },
    },

    mounted() {
        this.getBook()
    }


}
</script>

<template>
    <div class='mt-5' >
        <div class='container-fluid mb-5 p-5 shadow-lg border bg-white rounded-2'>
            <div class="row">
                <div class="col mb-5">
                    <!-- Name input -->
                    <div class="form-outline">
                        <label class="form-label" for="tensach">Tên sách</label>
                        <input 
                            required 
                            placeholder="Nhập tên sách"
                            name="tensach" type="text" class="form-control" v-model="this.book.tensach" />
                        <!-- <ErrorMessage name="tensach" class="error-feedback" /> -->
                    </div>
                </div>
                <div class="col">
                    <!-- Loại sách -->
                    <label for="loaisach">Loại sách</label>
                    <select 
                        as='select' 
                        name="loaisach" 
                        class="form-control " 
                        autofocus
                        required
                        v-model="this.book.tenloai">
                        <option   value="" class='text-muted' >---- Chọn loại sách ----</option>
                        <option value="Công nghệ thông tin">L01 - Công nghệ thông tin</option>
                        <option value="Ngoại ngữ">L02 - Ngoại ngữ</option>
                        <option value="Khoa Học Kỹ Thuật">L03 - Khoa Học Kỹ Thuật</option>
                    </select>
                </div>
                <div class="col">
                    <!-- Email input -->
                    <div class="form-outline">
                        <label class="form-label" for="tacgia">Tác giả</label>
                        <input required placeholder="Nhập tên tác giả" type="text" name="tacgia" class="form-control" v-model="this.book.tentacgia" />
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <!-- Name input -->
                    <div class="form-outline">
                        <label class="form-label" for="tennxb">Tên nhà xuất bản</label>
                        <input required placeholder="Nhập tên nhà xuất bản" type="text" name="tennxb" class="form-control" v-model="this.book.tenNXB" />
                        <!-- <ErrorMessage name="tennxb" class="error-feedback" /> -->
                    </div>
                </div>
                <div class="col">
                    <!-- Vị trí kệ -->
                    <div class="form-outline">
                        <label class="form-label" for="vitrike">Vị trí kệ</label>
                        <select as='select' autofocus required name="vitrike" class="form-control" v-model="this.book.soke">
                            <option value="">---- Chọn vị trí kệ ---- </option>
                            <option value='Công nghệ thông tin'>K01 - Công nghệ thông tin</option>
                            <option value='Ngoại ngữ'>K02 - Ngoại ngữ</option>
                            <option value='Khoa Học Kỹ Thuật'>K03 - Khoa Học Kỹ Thuật</option>
                        </select>
                    </div>
                </div>
                <div class="col">
                    <!-- Vị trí dãy -->
                    <div class="form-outline">
                        <label class="form-label" for="vitriday">Vị trí dãy</label>
                        <select as='select' autofocus required name="vitriday" class="form-control" v-model="this.book.tenday">
                            <option value="">---- Chọn vị trí dãy ----</option>
                            <option value="Công nghệ thông tin">D01 - Công nghệ thông tin</option>
                            <option value="Ngoại ngữ">D02 - Ngoại ngữ</option>
                            <option value="Khoa Học Kỹ Thuật">D03 - Khoa học kỹ thuật</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class='row mt-5 mb-5'>
                <div class="form-outline">
                    <label class='form-label' for="hinhanhsach">
                        Hình ảnh
                    </label>
                    <input required class="form-control form-control-lg" multiple id="formFileLg" name="hinhanhsach"
                        @change="this.onFileSelected" type="file">
                </div>
            </div>
            <div class='row mt-5'>
                <div class='col'>
                    <router-link :to="{ name: 'listbook' }">
                        <font-awesome-icon icon="fa-solid fa-arrow-left" />
                        &nbsp; Quay lại
                    </router-link>
                </div>
                <div class='col d-flex justify-content-end'>
                    <button v-if="_id == null" class='btn btn-primary fs-4 py-2 px-5' @click="this.addBook">
                        &nbsp;Lưu
                    </button>
                    <button v-else @click="this.updateBook" class='btn btn-primary fs-4 pe-5 ps-4 py-2'>
                        &nbsp; Cập nhật
                    </button>

                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
label {
    margin-bottom: 10px;
    text-transform: uppercase;
    font-weight: bold;
}


input[type="file"] {
    font-size: 1.8rem;
    border-radius: 2px;
}

input[type="text"],
select {
    height: 60px;
    font-size: 1.7rem;
    
}

a:hover {
    color: red !important;
    font-size: 1.6rem;
    ;
    text-decoration: underline !important;
}
</style>