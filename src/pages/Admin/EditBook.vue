<script>
import BookForm from "@/layouts/LayoutAdmin/FormBook.vue";
export default {
    components: {BookForm},
    data() {
        return {
            _id: null
        }
    },
    // methods: {
       
    // }
}
</script>

<template>
    <div class='add--wrapper'>
        <h2 class="py-5">CHỈNH SỬA THÔNG TIN SÁCH</h2>
        <div>
            <BookForm 
            :_id="this.$route.params.id"
            ></BookForm>
        </div>
    </div>
</template>
