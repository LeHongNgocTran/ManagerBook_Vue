<script>
import BookForm from "@/layouts/LayoutAdmin/FormBook.vue";
export default {
    components: {
        BookForm
    },
}
</script>

<template>
    <div class='add--wrapper'>
        <h2 class="fs-1 py-5">THÊM SÁCH</h2>
        <div class='second--add__container ' >
            <BookForm />
        </div>
    </div>
</template>