<script>
import BookForm from "@/layouts/LayoutAdmin/FormBook.vue";
export default {
    components: {
        BookForm
    },
}
</script>

<template >
    <div class='add--wrapper'>
        <h2 class="fy-5">THÊM SÁCH</h2>
        <div class='second--add__container '>
            <BookForm />
        </div>
    </div>
</template>

<style lang ="scss">
.add--wrapper {
    h2 {
        font-weight: 600;
        font-size: 3rem;
    }
}
</style>