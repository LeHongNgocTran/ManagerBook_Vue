<template>
    <div class="page text-center text-danger fs-1 m-5">
        <p>
            Oops, không thể tìm thấý trang. Trở về
            <router-link
                to = "/"
                class='text-decoration-underline'
            >
                Trang Chủ
            </router-link>
        </p>
    </div>
</template>

<style scoped>
    a:hover{
        color: red !important;
        font-weight: bold;
    }
</style>