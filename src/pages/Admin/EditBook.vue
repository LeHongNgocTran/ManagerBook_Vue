<script>
import BookService from "@/services/book.service";
import BookForm from "@/layouts/LayoutAdmin/FormBook.vue";
export default {
    components: {BookForm},
    data() {
        return {
            book: null
        }
    },
    methods: {
        async getBook() {
            try {
                this.book = await BookService.getBookId(this.$route.params.id);
              
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
        async updateBook(data) {
            try {
                await BookService.update(this.book._id, data);
                if(confirm("Cập nhật thành công ! ")){
                    this.$router.push({name: "listbook"});
                }
            }
            catch (error) {
                console.log(error);
            }
        }
    },
    created() {
        this.getBook();
    }
}
</script>

<template>
    <div class='add--wrapper'>
        <h2 class="fs-1 py-5">CHỈNH SỬA THÔNG TIN SÁCH</h2>
        <div class='second--add__container'>
            <BookForm
                :book="this.book"
                @submit:book="updateBook"></BookForm>
        </div>
    </div>
</template>
