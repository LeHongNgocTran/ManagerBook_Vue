<script>
import BookForm from "@/layouts/LayoutAdmin/FormBook.vue";
import BookService from "@/services/book.service";
export default {
    components: {
        BookForm
    },
    data() {
        return {
            book: {
                tenNXB: "",
                tenloai: "",
                tensach: "",
                imageUrl: "",
                tentacgia: "",
                stt: 0,
                soke: 0,
                tenday: "",
                trangthai: false,
            }
        }
    },
    methods: {
        async addContact(data) {
            this.book = await BookService.create(data);
            if (confirm("Bạn đã thêm thông tin sách thành công!!!")){
                this.$router.push({ name: 'listbook' });
            }
        }
    }
}
</script>

<template>
    <div class='add--wrapper'>
        <h2 class="fs-1 py-5">THÊM SÁCH</h2>
        <div class='second--add__container ' >
            <BookForm :book="this.book" @submit:book="addContact" />
        </div>
    </div>
</template>
