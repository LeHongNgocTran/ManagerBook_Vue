<script>
import * as yup from "yup";
import {
    Form,
    Field,
    ErrorMessage
} from "vee-validate";
import AccountService from "../../services/taikhoan.service";
import {
    useAccountStore
} from "../../store/useStore";
export default {
    components: {
        Form,
        Field,
        ErrorMessage
    },

    data() {
        const loginFormSchema = yup.object().shape({
            mataikhoan: yup
                .string()
                .required("Vui lòng nhập tên tài khoản"),
            matkhau: yup.string().required("Vui lòng nhập mật khẩu")
        });
        const accountStore = useAccountStore();
        return {
            loginFormSchema,
            user: {
                mataikhoan: "",
                matkhau: "",
            },
            account: {},
            error: false,
            accountStore
        }
    },

    methods: {
        async submitLoginAccount(data) {
            try {
                this.account = await AccountService.login(data);

                // console.log(this.accountStore.user);
                if (this.account.error) {
                    this.error = true
                    this.account.error = "Sai tài khoản hoặc mật khẩu vui lòng nhập lại!"
                    // console.log(this.account.error);
                } else {
                    this.accountStore.user = this.account;
                    this.error = false
                    if (this.account.phanquyen == 1) {
                        this.$router.push({
                            name: 'homepage'
                        });
                    }
                    if (this.account.phanquyen == 2) {
                        this.$router.push({
                            name: 'admin'
                        });
                    }
                    if (this.account.phanquyen == 3) {
                        this.$router.push({
                            name: 'admin'
                        });
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

}
</script>

<template>
<div class='signin-wrapper'>
    <div class='text-center pt-4 signin--content'>
        <h4 class='fs-2 mb-5'>Bạn đã là thành viên</h4>
        <p>Đăng nhập tại đây với tên đăng nhập và mặt khẩu mà bạn đã được cung cấp</p>
        <p>(Trình duyệt của bạn cần phải được mở chức năng quản lí cookie)</p>
    </div>
    <div class='form__signin'>
        <Form class='form__signin--content' id="form-signin" @submit="submitLoginAccount(this.user)" :validation-schema="loginFormSchema">
            <div class='d-flex flex-column ms-5'>

                <div class='signin-type d-flex flex-row'>
                    <label for='mataikhoan'>Tên đăng nhập</label>
                    <div class='d-flex flex-column'>
                        <Field type="text" id='name' name='mataikhoan' v-model="this.user.mataikhoan" placeholder="Nhập tên đăng nhập" />
                        <ErrorMessage name="mataikhoan" class="error-feedback" />
                    </div>
                </div>

                <div class='signin-type d-flex flex-row'>
                    <label for="matkhau">Mật khẩu</label>
                    <div class='d-flex flex-column'>
                        <Field name='matkhau' type="password" id='matkhau' v-model="this.user.matkhau" placeholder="Nhập mật khẩu" />
                        <ErrorMessage name="matkhau" class="error-feedback" />
                    </div>
                </div>

                <div class='bg-danger bg-opacity-10 fs-4 text-danger text-center mb-4 py-3' v-if="this.error == true">
                    <p class=''>{{this.account.error}}</p>
                </div>

                <div class='signin-type mx-auto'>
                    <button class='btn btn-primary button-submit '>
                        Đăng Nhập
                    </button>

                </div>
            </div>
        </Form>
    </div>
</div>
</template>

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

.button-submit {
    color: white;
    padding: 4px 10px;
    border: none;
    font-size: 1em;
}

.button-submit:hover {
    opacity: 0.5;
}

.error-feedback {
    color: red;
    font-size: 1.2rem;
    margin-left: 5px;
    ;
}
</style>
