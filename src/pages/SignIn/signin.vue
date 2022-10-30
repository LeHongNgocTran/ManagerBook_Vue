<template>
    <div class='signin-wrapper'>
        <div class='text-center pt-4 signin--content'>
            <h4 class='fs-2 mb-5'>Bạn đã là thành viên</h4>
            <p >Đăng nhập tại đây với tên đăng nhập và mặt khẩu mà bạn đã được cung cấp</p>
            <p >(Trình duyệt của bạn cần phải được mở chức năng quản lí cookie)</p>
        </div>
        <div class='form__signin'>
            <form class='form__signin--content'>
               <div class='d-flex flex-column ms-5'>
                <div class='signin-type'>
                    <label>Tên đăng nhập</label>
                    <input
                        type="text"
                        placeholder="Nhập tên đăng nhập"
                    />
                </div>
                <div class='signin-type'>
                    <label>Mật khẩu</label>
                    <input
                        type="password"
                        placeholder="Nhập mật khẩu"
                    />
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


<style>
    @import "./SignIn.scss";
</style>

<script>
    export default {
        name: 'signin'
    }
</script>