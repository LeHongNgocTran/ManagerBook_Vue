<script >
import * as yup from "yup";
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

        // Kiểm tra tính hợp lệ của các trường
        const bookFormSchema = yup.object().shape({
            tensach: yup
                .string()
                .required('Loại sách phải có giá trị')
                .min(2, "Tên phải có ít nhất 2 ký tự")
                .max(100, "Tên có nhiều nhất 100 ký tự"),
            tacgia: yup
                .string()
                .required('Tên tác giả phải có giá trị')
                .min(2, "Tên tác giả phải có ít nhất 2 ký tự")
                .max(50, "Tên tác giả  phải có nhiều nhất 50 ký tự"),
            tennxb: yup
                .string()
                .required("Tên nhà xuất bản phải có giá trị")
                .min(2, "Tên nhà xuất bản phải có ít nhất 2 ký tự")
                .max(100, "Tên nhà xuất bản  phải có nhiều nhất 100 ký tự"),
        });
        const stt = useBookStore().length;
        return {
            //Tạo biến cục bộ
            bookFormSchema,
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
            if (confirm("Xác nhận thêm thông tin sách ? ")) {
                // console.log(this.book);
                var formData = new FormData();
                formData.append('file', this.selectedFile);
                this.buildFormData(formData, this.book)
                this.book =  BookService.create(formData);
                this.$router.push({ name: 'listbook' });
            }
        },
        async updateBook() {
            if (confirm("Xác nhận cập nhât thông tin ?")) {
                // console.log('abc');
                try {
                    var formData = new FormData();
                    formData.append('file', this.selectedFile);
                    this.buildFormData(formData, this.book);
                    console.log(formData);
                    await BookService.update(this._id,formData);
                    this.$router.push({ name: 'listbook' })
                }
                catch (error) {

                }
            }
            // console.log(this._id);
            // // try {
            // //     await BookService.update(this.book._id, data);
            // //     if(confirm("Cập nhật thành công ! ")){
            // //         this.$router.push({name: "listbook"});
            // //     }
            // // }
            // // catch (error) {
            // //     console.log(error);
            // // }
        },
    },
    mounted() {
        this.getBook()
    }


}
</script>


<template>
    <div :validation-schema="bookFormSchema">
        <div class='container-fluid mb-5 p-5 shadow border bg-white rounded-2'>
            <div class="row">
                <div class="col mb-5">
                    <!-- Name input -->
                    <div class="form-outline">
                        <label class="form-label" for="tensach">Tên sách</label>
                        <Field name="tensach" type="text" class="form-control" v-model="this.book.tensach" />
                        <ErrorMessage name="tensach" class="error-feedback" />
                    </div>
                </div>
                <div class="col">
                    <!-- Loại sách -->
                    <label for="loaisach">Loại sách</label>
                    <Field as='select' name="loaisach" class="form-control" v-model="this.book.tenloai">
                        <option value="Công nghệ thông tin">L01 - Công nghệ thông tin</option>
                        <option value="Ngoại ngữ">L02 - Ngoại ngữ</option>
                        <option value="Khoa Học Kỹ Thuật">L03 - Khoa Học Kỹ Thuật</option>
                    </Field>
                </div>
                <div class="col">
                    <!-- Email input -->
                    <div class="form-outline">
                        <label class="form-label" for="tacgia">Tác giả</label>
                        <Field type="text" name="tacgia" class="form-control" v-model="this.book.tentacgia" />
                        <ErrorMessage name="tacgia" class="error-feedback" />
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <!-- Name input -->
                    <div class="form-outline">
                        <label class="form-label" for="tennxb">Tên nhà xuất bản</label>
                        <Field type="text" name="tennxb" class="form-control" v-model="this.book.tenNXB" />
                        <ErrorMessage name="tennxb" class="error-feedback" />
                    </div>
                </div>
                <div class="col">
                    <!-- Vị trí kệ -->
                    <div class="form-outline">
                        <label class="form-label" for="vitrike">Vị trí kệ</label>
                        <Field as='select' name="vitrike" class="form-control" v-model="this.book.soke">
                            <option value='Công nghệ thông tin'>K01 - Công nghệ thông tin</option>
                            <option value='Ngoại ngữ'>K02 - Ngoại ngữ</option>
                            <option value='Khoa Học Kỹ Thuật'>K03 - Khoa Học Kỹ Thuật</option>
                        </Field>
                    </div>
                </div>
                <div class="col">
                    <!-- Vị trí dãy -->
                    <div class="form-outline">
                        <label class="form-label" for="vitriday">Vị trí dãy</label>
                        <Field as='select' name="vitriday" class="form-control" v-model="this.book.tenday">
                            <option value="Công nghệ thông tin">D01 - Công nghệ thông tin</option>
                            <option value="Ngoại ngữ">D02 - Ngoại ngữ</option>
                            <option value="Khoa Học Kỹ Thuật">D03 - Khoa học kỹ thuật</option>
                        </Field>
                    </div>
                </div>
            </div>
            <div class='row mt-5 mb-5'>
                <div class="form-outline">
                    <label class='form-label' for="hinhanhsach">
                        Hình ảnh
                    </label>
                    <input multiple type="file" name="hinhanhsach" class="form-control" @change="this.onFileSelected">

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
                    <button v-else @click="this.updateBook" class='btn btn-primary fs-4 py-2 px-5'>
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
}

input,
select {
    height: 60px;
    font-size: 1.6rem;
}

a:hover {
    color: red !important;
    font-size: 1.6rem;
    ;
    text-decoration: underline !important;
}

.error-feedback {
    color: red;
    font-size: 1.2rem;
    ;
}
</style>