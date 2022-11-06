<template>
    <div class='signin-wrapper'>
        <div class='text-center pt-4 signin--content'>
            <h4 class='fs-2 mb-5'>Bạn đã là thành viên</h4>
            <p>Đăng nhập tại đây với tên đăng nhập và mặt khẩu mà bạn đã được cung cấp</p>
            <p>(Trình duyệt của bạn cần phải được mở chức năng quản lí cookie)</p>
        </div>
        <div class='form__signin'>
            <form class='form__signin--content'>
                <div class='d-flex flex-column ms-5'>
                    <div class='signin-type'>
                        <label>Tên đăng nhập</label>
                        <Field type="text" placeholder="Nhập tên đăng nhập" />
                    </div>
                    <div class='signin-type'>
                        <label>Mật khẩu</label>
                        <Field type="password" placeholder="Nhập mật khẩu" />
                    </div>
                    <div class='signin-type mx-auto'>
                        <button class='button-sumit' type='submit' value="Đăng Nhập">
                            Đăng Nhập
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import * as yup from "yup";
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

    }
</script>

<style scoped>
.signin-wrapper {
    margin-bottom: 100px;
}

.signin--content {
    margin-top: 40px;
}

.signin--content p {
    font-size: 1.5rem;
}

.form__signin {
    margin: 50px auto 0px;
    width: 580px;

}

.signin-type {
    margin-bottom: 20px;
}

.signin-type input {
    border: 1px solid rgb(209, 209, 209);
    font-size: 1.5rem;
    padding: 10px;
    height: 50px;
    width: 350px;
}

.signin-type input:focus {
    border: 3px solid #d9e6ff;
}

.signin-type label {
    width: 150px;
    margin-right: 10px;
    margin-top: 10px;
}

.button-sumit {
    color: white;
    background-color: #357AFF;
    padding: 4px 10px;
    border: none;
}

.button-sumit:hover {
    opacity: 0.5;
}
</style>

